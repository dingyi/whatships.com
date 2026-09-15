#!/usr/bin/env node
/**
 * Snapshot public X view counts into src/data/videos.json.
 *
 * X's own syndication endpoint (cdn.syndication.twimg.com/tweet-result) — the
 * one we use for adding videos — does not expose view counts at all. The
 * public fxtwitter mirror does, so it is the provider here.
 *
 * Views are a moving target, so every number is stored with the moment it was
 * read:
 *
 *   "views": 62143001,
 *   "viewsCapturedAt": "2026-09-15T02:31:07.000Z"
 *
 * Both fields are written together or not at all. Nothing fetches this at
 * build time — the catalog stays a plain committed file.
 *
 *   node scripts/fetch-views.mjs --slug=paper-getting-started
 *   node scripts/fetch-views.mjs --dry-run --limit=5
 *   node scripts/fetch-views.mjs                 # stale + unread entries only
 *   node scripts/fetch-views.mjs --all           # ignore age, refresh everything
 *
 * Default run only touches entries whose snapshot is missing or older than
 * --max-age-days (14). --slug always bypasses that check.
 *
 * `views: null` is a real result: it means the provider had no count to give
 * (deleted post, withheld metrics). The stamp is still written, so those
 * entries age like any other snapshot instead of being retried on every run.
 * Deleted posts are common enough to matter — the linked post is gone, which
 * is an editorial decision for a human, not something this script can fix.
 *
 * Only transient failures (timeouts, 429s, 5xx) exit non-zero, after the
 * values that did resolve are written.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const videosPath = path.join(root, "src/data/videos.json");

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

function viewsEndpoint(tweetId) {
  return `https://api.fxtwitter.com/i/status/${tweetId}`;
}

/**
 * Whether an entry's snapshot is old enough to re-read. A stored
 * `views: null` means "read it, and X did not expose a count" — that is a
 * real result, so it ages like any other snapshot instead of being retried
 * on every run. A missing stamp means nobody has read it yet.
 */
function needsSnapshot(video, maxAgeDays) {
  const stamp = video.viewsCapturedAt;
  if (!stamp) return true;
  const read = Date.parse(stamp);
  if (Number.isNaN(read)) return true;
  return Date.now() - read >= maxAgeDays * 86_400_000;
}

function selectTargets(videos, options) {
  const bySlug = options.slugs.size > 0;
  return videos.filter((video) => {
    if (video.status !== "published" || !video.tweetId) return false;
    if (bySlug) return options.slugs.has(video.slug);
    if (options.all) return true;
    return needsSnapshot(video, options.maxAgeDays);
  });
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Reads one view count.
 *
 * Resolves to `{ views }` on success and `{ unavailable }` when the provider
 * definitively has no count to give (deleted post, withheld view count) —
 * retrying those today is just noise. Throws after ATTEMPTS only for
 * transient trouble (timeouts, 429s, 5xx), which is worth surfacing.
 */
async function readViews(tweetId) {
  let lastError;
  for (let attempt = 1; attempt <= ATTEMPTS; attempt += 1) {
    try {
      const res = await fetch(viewsEndpoint(tweetId), {
        headers: { accept: "application/json" },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
      if (res.status === 429 || res.status >= 500) {
        throw new Error(`HTTP ${res.status}`);
      }
      if (!res.ok) {
        return { unavailable: `post unreadable (HTTP ${res.status})` };
      }
      const payload = await res.json();
      const tweet = payload?.tweet;
      if (!tweet) {
        return { unavailable: `no tweet in payload (code ${payload?.code ?? "?"})` };
      }
      // Guard against a mirror handing back a different post.
      if (tweet.id && String(tweet.id) !== String(tweetId)) {
        return { unavailable: `id mismatch (got ${tweet.id})` };
      }
      const views = tweet.views;
      if (!Number.isInteger(views) || views < 0) {
        return { unavailable: `provider returned ${JSON.stringify(views)}` };
      }
      return { views };
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
  const videos = JSON.parse(await readFile(videosPath, "utf8"));  const missingSlugs = [...options.slugs].filter(
    (slug) => !videos.some((video) => video.slug === slug),
  );
  if (missingSlugs.length > 0) {
    throw new Error(`Unknown slug(s): ${missingSlugs.join(", ")}`);
  }

  let targets = selectTargets(videos, options);
  if (options.limit != null) targets = targets.slice(0, options.limit);

  if (targets.length === 0) {
    console.log("Nothing to do — every selected entry has a fresh views snapshot.");
    return;
  }

  console.log(
    `Fetching views for ${targets.length} entr${targets.length === 1 ? "y" : "ies"}` +
      ` (concurrency ${options.concurrency}${options.dryRun ? ", dry run" : ""})…`,
  );

  const capturedAt = new Date().toISOString();
  /** slug -> { tweetId, views } | { tweetId, unavailable } for every read. */
  const snapshots = new Map();
  const failures = [];
  let done = 0;

  for (const group of chunk(targets, options.concurrency)) {
    const results = await Promise.all(
      group.map(async (video) => {
        try {
          return { video, ...(await readViews(video.tweetId)) };
        } catch (error) {
          return { video, error: error?.message ?? String(error) };
        }
      }),
    );
    for (const result of results) {
      if (result.error) {
        failures.push(result);
        continue;
      }
      snapshots.set(result.video.slug, {
        tweetId: result.video.tweetId,
        views: result.views,
        unavailable: result.unavailable,
      });
    }
    done += results.length;
    process.stdout.write(`\r  ${done}/${targets.length}`);
  }
  process.stdout.write("\n");

  // Phase two: re-read before writing. videos.json picks up new entries from
  // concurrent work (admin approvals, another batch mid-flight), and a
  // long-running fetch must not write back a stale copy of the whole catalog.
  const updated = [];
  const unchanged = [];
  const unavailable = [];
  const skipped = [];
  const written = {
    videos: options.dryRun
      ? videos
      : JSON.parse(await readFile(videosPath, "utf8")),
  };

  for (const entry of written.videos) {
    const snapshot = snapshots.get(entry.slug);
    if (!snapshot) continue;
    if (String(entry.tweetId) !== String(snapshot.tweetId)) {
      skipped.push({ slug: entry.slug, reason: "tweetId changed since fetch" });
      continue;
    }
    const previous = entry.views;
    if (snapshot.unavailable) {
      // Stamp the attempt so the next default run leaves it alone, and clear
      // any number we can no longer stand behind.
      entry.views = null;
      entry.viewsCapturedAt = capturedAt;
      unavailable.push({ slug: entry.slug, reason: snapshot.unavailable, previous });
      continue;
    }
    const same = previous === snapshot.views;
    entry.views = snapshot.views;
    entry.viewsCapturedAt = capturedAt;
    const result = { slug: entry.slug, views: snapshot.views, previous };
    if (same) unchanged.push(result);
    else updated.push(result);
  }

  if (!options.json) {
    for (const result of updated) {
      const before =
        result.previous == null ? "" : ` (was ${result.previous.toLocaleString("en-US")})`;
      console.log(`  ${result.slug}: ${result.views.toLocaleString("en-US")} views${before}`);
    }
    for (const entry of unavailable) {
      console.log(`  no count for ${entry.slug}: ${entry.reason}`);
    }
    for (const entry of skipped) {
      console.log(`  SKIPPED ${entry.slug}: ${entry.reason}`);
    }
  }

  if (!options.dryRun) {
    await writeFile(videosPath, `${JSON.stringify(written.videos, null, 2)}\n`);
  }

  const summary = {
    scanned: targets.length,
    updated: updated.length,
    unchanged: unchanged.length,
    unavailable: unavailable.length,
    skipped: skipped.length,
    failed: failures.length,
    capturedAt,
    dryRun: options.dryRun,
  };
  if (options.json) {
    console.log(
      JSON.stringify(
        { ...summary, unavailable, failures: failures.map((f) => ({
          slug: f.video.slug,
          tweetId: f.video.tweetId,
          error: f.error,
        })) },
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
      console.log(`  FAILED ${failure.video.slug} (${failure.video.tweetId}): ${failure.error}`);
    }
  }

  // Only transient trouble is worth a non-zero exit: a deleted post or a
  // withheld count is a recorded result, not a broken run.
  if (failures.length > 0) process.exitCode = 1;
}

await main();
