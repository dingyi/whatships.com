#!/usr/bin/env node
/**
 * Snapshot GitHub star counts into src/data/tools.json for the skills
 * category. Every skill entry carries an `npx skills add owner/repo`
 * install command, so the repo to read is right there in the catalog.
 *
 * Stars are a moving target, so every number is stored with the moment it
 * was read — same contract as the X view snapshots on videos.json:
 *
 *   "stars": 596,
 *   "starsCapturedAt": "2026-10-01T12:00:00.000Z"
 *
 * Both fields are written together or not at all. Nothing fetches this at
 * build time — the catalog stays a plain committed file.
 *
 *   node scripts/fetch-stars.mjs --slug=remotion-skills
 *   node scripts/fetch-stars.mjs --dry-run
 *   node scripts/fetch-stars.mjs                 # stale + unread entries only
 *   node scripts/fetch-stars.mjs --all           # ignore age, refresh everything
 *
 * Default run only touches entries whose snapshot is missing or older than
 * --max-age-days (14). --slug always bypasses that check.
 *
 * `stars: null` plus a stamp means "read it, and GitHub had no count to
 * give" (repo deleted, renamed, or made private) — it ages like any other
 * snapshot instead of being retried on every run. A missing repo is an
 * editorial call (drop the entry or keep it), not something this script
 * can repair.
 *
 * Only transient failures (timeouts, rate limits, 5xx) exit non-zero, after
 * the values that did resolve are written. Unauthenticated GitHub API calls
 * are rate-limited to 60/hour; set GH_TOKEN or GITHUB_TOKEN in the
 * environment to raise it — the token is only read, never logged or written.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const toolsPath = path.join(root, "src/data/tools.json");

const DEFAULT_CONCURRENCY = 4;
const DEFAULT_MAX_AGE_DAYS = 14;
const ATTEMPTS = 3;
const REQUEST_TIMEOUT_MS = 25_000;

function parseArgs(argv) {
  const options = {
    slugs: new Set(),
    all: false,
    dryRun: false,
    concurrency: DEFAULT_CONCURRENCY,
    maxAgeDays: DEFAULT_MAX_AGE_DAYS,
    limit: null,
    json: false,
  };

  for (const arg of argv) {
    if (arg === "--all") options.all = true;
    else if (arg === "--dry-run") options.dryRun = true;
    else if (arg === "--json") options.json = true;
    else if (arg.startsWith("--slug=")) {
      for (const slug of arg.slice("--slug=".length).split(",")) {
        const trimmed = slug.trim();
        if (trimmed) options.slugs.add(trimmed);
      }
    } else if (arg.startsWith("--concurrency=")) {
      options.concurrency = Math.max(1, Number(arg.slice(14)) || DEFAULT_CONCURRENCY);
    } else if (arg.startsWith("--max-age-days=")) {
      const value = Number(arg.slice("--max-age-days=".length));
      options.maxAgeDays = Number.isFinite(value) ? Math.max(0, value) : DEFAULT_MAX_AGE_DAYS;
    } else if (arg.startsWith("--limit=")) {
      const value = Number(arg.slice("--limit=".length));
      options.limit = Number.isFinite(value) && value > 0 ? Math.floor(value) : null;
    } else if (arg.startsWith("--")) {
      throw new Error(`Unknown flag: ${arg}`);
    }
  }

  return options;
}

/**
 * `npx skills add oil-oil/oil-motion` → "oil-oil/oil-motion". Also tolerates
 * a full github.com URL. Returns null when the install command does not
 * resolve to a GitHub repo — the entry then simply cannot carry a snapshot.
 */
function repoFromInstall(install) {
  if (typeof install !== "string") return null;
  const candidate = install.replace(/^npx\s+skills\s+add\s+/, "").trim().split(/\s+/)[0];
  if (!candidate) return null;
  const url = candidate.match(/github\.com\/([^/]+)\/([^/#?]+)/i);
  const slug = url ? `${url[1]}/${url[2]}` : candidate;
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(slug)) return null;
  return slug.replace(/\.git$/i, "");
}

function starsEndpoint(repo) {
  return `https://api.github.com/repos/${repo}`;
}

/**
 * Whether an entry's snapshot is old enough to re-read. A stored
 * `stars: null` means "read it, and the repo had no count to give" — that
 * is a real result, so it ages like any other snapshot instead of being
 * retried on every run. A missing stamp means nobody has read it yet.
 */
function needsSnapshot(tool, maxAgeDays) {
  const stamp = tool.starsCapturedAt;
  if (!stamp) return true;
  const read = Date.parse(stamp);
  if (Number.isNaN(read)) return true;
  return Date.now() - read >= maxAgeDays * 86_400_000;
}

function selectTargets(tools, options) {
  const bySlug = options.slugs.size > 0;
  return tools.filter((tool) => {
    if (tool.category !== "skills" || !tool.install) return false;
    if (bySlug) return options.slugs.has(tool.slug);
    if (options.all) return true;
    return needsSnapshot(tool, options.maxAgeDays);
  });
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function githubHeaders() {
  const headers = {
    accept: "application/vnd.github+json",
    // GitHub rejects API calls without a User-Agent.
    "user-agent": "whatships-stars-snapshot",
    "x-github-api-version": "2022-11-28",
  };
  const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  if (token) headers.authorization = `Bearer ${token}`;
  return headers;
}

/**
 * Reads one star count.
 *
 * Resolves to `{ stars }` on success and `{ unavailable }` when GitHub
 * definitively has no count to give (404: repo deleted or made private).
 * Throws after ATTEMPTS only for transient trouble (timeouts, rate limits,
 * 5xx), which is worth surfacing.
 */
async function readStars(repo) {
  let lastError;
  for (let attempt = 1; attempt <= ATTEMPTS; attempt += 1) {
    try {
      const res = await fetch(starsEndpoint(repo), {
        headers: githubHeaders(),
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
      if (res.status === 429 || res.status >= 500) {
        throw new Error(`HTTP ${res.status}`);
      }
      // Rate-limit exhaustion surfaces as 403 with a spent quota — treat it
      // as transient trouble rather than "no count".
      if (res.status === 403 && res.headers.get("x-ratelimit-remaining") === "0") {
        const reset = res.headers.get("x-ratelimit-reset");
        const at = reset ? new Date(Number(reset) * 1000).toISOString() : "later";
        throw new Error(`GitHub rate limit spent, resets ${at}`);
      }
      if (!res.ok) {
        return { unavailable: `repo unreadable (HTTP ${res.status})` };
      }
      const payload = await res.json();
      // Guard against a redirect handing back a different repo.
      if (payload?.full_name && payload.full_name.toLowerCase() !== repo.toLowerCase()) {
        return { unavailable: `repo mismatch (got ${payload.full_name})` };
      }
      const stars = payload?.stargazers_count;
      if (!Number.isInteger(stars) || stars < 0) {
        return { unavailable: `payload returned ${JSON.stringify(stars)}` };
      }
      return { stars };
    } catch (error) {
      lastError = error;
      if (attempt === ATTEMPTS) break;
      await sleep(attempt * 800);
    }
  }
  throw lastError;
}

function chunk(list, size) {
  const groups = [];
  for (let index = 0; index < list.length; index += size) {
    groups.push(list.slice(index, index + size));
  }
  return groups;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const tools = JSON.parse(await readFile(toolsPath, "utf8"));
  const knownSlugs = new Set(tools.map((tool) => tool.slug));
  const missingSlugs = [...options.slugs].filter((slug) => !knownSlugs.has(slug));
  if (missingSlugs.length > 0) {
    throw new Error(`Unknown slug(s): ${missingSlugs.join(", ")}`);
  }

  let targets = selectTargets(tools, options);
  if (options.limit != null) targets = targets.slice(0, options.limit);

  if (targets.length === 0) {
    console.log("Nothing to do — every selected skill has a fresh stars snapshot.");
    return;
  }

  console.log(
    `Fetching stars for ${targets.length} skill${targets.length === 1 ? "" : "s"}` +
      ` (concurrency ${options.concurrency}${options.dryRun ? ", dry run" : ""})…`,
  );

  const capturedAt = new Date().toISOString();
  /** slug -> { repo, stars } | { repo, unavailable } for every read. */
  const snapshots = new Map();
  const failures = [];
  let done = 0;

  for (const group of chunk(targets, options.concurrency)) {
    const results = await Promise.all(
      group.map(async (tool) => {
        const repo = repoFromInstall(tool.install);
        if (!repo) return { tool, error: `cannot parse a GitHub repo from "${tool.install}"` };
        try {
          return { tool, repo, ...(await readStars(repo)) };
        } catch (error) {
          return { tool, repo, error: error?.message ?? String(error) };
        }
      }),
    );
    for (const result of results) {
      if (result.error) {
        failures.push(result);
        continue;
      }
      snapshots.set(result.tool.slug, {
        repo: result.repo,
        stars: result.stars,
        unavailable: result.unavailable,
      });
    }
    done += results.length;
    process.stdout.write(`\r  ${done}/${targets.length}`);
  }
  process.stdout.write("\n");

  // Phase two: re-read before writing. tools.json can pick up new entries
  // from concurrent work, and a long-running fetch must not write back a
  // stale copy of the whole file.
  const updated = [];
  const unchanged = [];
  const unavailable = [];
  const written = {
    tools: options.dryRun
      ? tools
      : JSON.parse(await readFile(toolsPath, "utf8")),
  };

  for (const entry of written.tools) {
    const snapshot = snapshots.get(entry.slug);
    if (!snapshot) continue;
    const repo = repoFromInstall(entry.install);
    if (!repo || repo.toLowerCase() !== snapshot.repo.toLowerCase()) {
      console.log(`  SKIPPED ${entry.slug}: install command changed since fetch`);
      continue;
    }
    const previous = entry.stars;
    if (snapshot.unavailable) {
      // Stamp the attempt so the next default run leaves it alone, and clear
      // any number we can no longer stand behind.
      entry.stars = null;
      entry.starsCapturedAt = capturedAt;
      unavailable.push({ slug: entry.slug, reason: snapshot.unavailable, previous });
      continue;
    }
    const same = previous === snapshot.stars;
    entry.stars = snapshot.stars;
    entry.starsCapturedAt = capturedAt;
    const result = { slug: entry.slug, stars: snapshot.stars, previous };
    if (same) unchanged.push(result);
    else updated.push(result);
  }

  if (!options.json) {
    for (const result of updated) {
      const before =
        result.previous == null ? "" : ` (was ${result.previous.toLocaleString("en-US")})`;
      console.log(`  ${result.slug}: ${result.stars.toLocaleString("en-US")} stars${before}`);
    }
    for (const entry of unavailable) {
      console.log(`  no count for ${entry.slug}: ${entry.reason}`);
    }
  }

  if (!options.dryRun) {
    await writeFile(toolsPath, `${JSON.stringify(written.tools, null, 2)}\n`);
  }

  const summary = {
    scanned: targets.length,
    updated: updated.length,
    unchanged: unchanged.length,
    unavailable: unavailable.length,
    failed: failures.length,
    capturedAt,
    dryRun: options.dryRun,
  };
  if (options.json) {
    console.log(
      JSON.stringify(
        {
          ...summary,
          failures: failures.map((f) => ({ slug: f.tool.slug, repo: f.repo, error: f.error })),
        },
        null,
        2,
      ),
    );
  } else {
    console.log(
      `\n${summary.updated} updated, ${summary.unchanged} unchanged, ` +
        `${summary.unavailable} without a count, ${summary.failed} failed` +
        `${options.dryRun ? " (dry run, nothing written)" : ""}.`,
    );
    for (const failure of failures) {
      console.log(`  FAILED ${failure.tool.slug} (${failure.repo ?? "?"}): ${failure.error}`);
    }
  }

  // Only transient trouble is worth a non-zero exit: a deleted repo is a
  // recorded result, not a broken run.
  if (failures.length > 0) process.exitCode = 1;
}

await main();
