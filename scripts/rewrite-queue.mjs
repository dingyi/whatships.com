#!/usr/bin/env node
/**
 * Queue a batch of quality-backlog entries for an editorial rewrite.
 *
 * Picks entries from src/data/quality-backlog.json (most-viewed first),
 * fetches the full post text from the public fxtwitter mirror (the stored
 * copy is truncated), and writes a review file:
 *
 *   src/data/rewrites/batch-NNN.json
 *
 * Each item carries the current copy, the quality issues, the full source
 * text, and an empty `proposed` block. Fill `proposed` (by hand or with an
 * assistant, grounded in `sourceText` only), then set `reviewStatus` to
 * "approved" or "rejected" and run scripts/apply-rewrites.mjs.
 *
 *   node scripts/rewrite-queue.mjs                 # next 50 by views
 *   node scripts/rewrite-queue.mjs --limit=25
 *   node scripts/rewrite-queue.mjs --slug=ace,sonic-2-0
 *   node scripts/rewrite-queue.mjs --dry-run
 *
 * Slugs already present in an existing batch file are skipped, so batches
 * never overlap. Pass --slug to re-queue a specific entry anyway.
 */
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { catalogQualityIssues } from "./catalog-quality.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const videosPath = path.join(root, "src/data/videos.json");
const backlogPath = path.join(root, "src/data/quality-backlog.json");
const rewritesDir = path.join(root, "src/data/rewrites");

const CONCURRENCY = 4;
const ATTEMPTS = 3;
const REQUEST_TIMEOUT_MS = 25_000;

function parseArgs(argv) {
  const options = { limit: 50, slugs: [], dryRun: false };
  for (const arg of argv) {
    if (arg === "--dry-run") options.dryRun = true;
    else if (arg.startsWith("--limit=")) {
      const value = Number(arg.slice("--limit=".length));
      if (!Number.isInteger(value) || value < 1) throw new Error(`Bad ${arg}`);
      options.limit = value;
    } else if (arg.startsWith("--slug=")) {
      options.slugs.push(
        ...arg.slice("--slug=".length).split(",").map((s) => s.trim()).filter(Boolean),
      );
    } else throw new Error(`Unknown flag: ${arg}`);
  }
  return options;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function readPostText(tweetId) {
  let lastError;
  for (let attempt = 1; attempt <= ATTEMPTS; attempt += 1) {
    try {
      const res = await fetch(`https://api.fxtwitter.com/i/status/${tweetId}`, {
        headers: { accept: "application/json" },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
      if (res.status === 429 || res.status >= 500) throw new Error(`HTTP ${res.status}`);
      if (!res.ok) return null;
      const tweet = (await res.json())?.tweet;
      if (!tweet || String(tweet.id) !== String(tweetId)) return null;
      return tweet.raw_text?.text ?? tweet.text ?? null;
    } catch (error) {
      lastError = error;
      if (attempt < ATTEMPTS) await sleep(attempt * 800);
    }
  }
  throw lastError;
}

async function existingBatches() {
  await mkdir(rewritesDir, { recursive: true });
  const files = (await readdir(rewritesDir)).filter((f) => /^batch-\d+\.json$/.test(f)).sort();
  const queued = new Set();
  for (const file of files) {
    const batch = JSON.parse(await readFile(path.join(rewritesDir, file), "utf8"));
    for (const item of batch.items ?? []) queued.add(item.slug);
  }
  return { files, queued };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const videos = JSON.parse(await readFile(videosPath, "utf8"));
  const backlog = new Set(JSON.parse(await readFile(backlogPath, "utf8")));
  const bySlug = new Map(videos.map((video) => [video.slug, video]));
  const { files, queued } = await existingBatches();

  let targets;
  if (options.slugs.length) {
    const unknown = options.slugs.filter((slug) => !bySlug.has(slug));
    if (unknown.length) throw new Error(`Unknown slug(s): ${unknown.join(", ")}`);
    targets = options.slugs.map((slug) => bySlug.get(slug));
  } else {
    targets = [...backlog]
      .filter((slug) => !queued.has(slug))
      .map((slug) => bySlug.get(slug))
      .filter((video) => video?.status === "published")
      .sort((a, b) => (b.views ?? -1) - (a.views ?? -1))
      .slice(0, options.limit);
  }
  if (!targets.length) {
    console.log("Nothing to queue — every backlog entry is already in a batch.");
    return;
  }

  console.log(`Fetching full post text for ${targets.length} entries…`);
  const items = [];
  for (let index = 0; index < targets.length; index += CONCURRENCY) {
    const group = targets.slice(index, index + CONCURRENCY);
    const texts = await Promise.all(
      group.map((video) =>
        readPostText(video.tweetId).catch((error) => {
          console.warn(`  ${video.slug}: ${error.message}`);
          return null;
        }),
      ),
    );
    group.forEach((video, i) => {
      items.push({
        slug: video.slug,
        tweetId: video.tweetId,
        tweetUrl: video.tweetUrl,
        views: video.views ?? null,
        product: video.product,
        company: video.company,
        category: video.category,
        issues: catalogQualityIssues(video),
        current: {
          title: video.title,
          description: video.description,
          tags: video.tags,
        },
        sourceText: texts[i],
        proposed: { title: "", description: "", tags: [] },
        reviewStatus: "pending",
        notes: texts[i] == null ? "Post text unavailable (deleted or withheld)." : "",
      });
    });
  }

  const next = files.length
    ? Number(files.at(-1).match(/\d+/)[0]) + 1
    : 1;
  const file = path.join(rewritesDir, `batch-${String(next).padStart(3, "0")}.json`);
  const missing = items.filter((item) => item.sourceText == null).length;
  console.log(`${items.length} queued, ${missing} without source text`);

  if (options.dryRun) {
    console.log(`dry-run: would write ${path.relative(root, file)}`);
    return;
  }
  await writeFile(
    file,
    `${JSON.stringify({ createdAt: new Date().toISOString(), items }, null, 2)}\n`,
  );
  console.log(`wrote ${path.relative(root, file)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
