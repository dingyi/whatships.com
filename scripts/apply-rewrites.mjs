#!/usr/bin/env node
/**
 * Apply approved editorial rewrites from a review batch to the catalog.
 *
 *   node scripts/apply-rewrites.mjs src/data/rewrites/batch-001.json
 *   node scripts/apply-rewrites.mjs src/data/rewrites/batch-001.json --dry-run
 *
 * For every item with `reviewStatus: "approved"`, the `proposed` title,
 * description and tags replace the entry's copy in src/data/videos.json.
 * Every rewritten entry must pass scripts/catalog-quality.mjs; if any fails,
 * nothing is written. Entries that now pass leave
 * src/data/quality-backlog.json, and applied items are stamped
 * `reviewStatus: "applied"` in the batch file.
 *
 * Tags not used anywhere else in the catalog are printed as a warning —
 * prefer the existing vocabulary over inventing near-duplicates.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { catalogQualityIssues } from "./catalog-quality.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const videosPath = path.join(root, "src/data/videos.json");
const backlogPath = path.join(root, "src/data/quality-backlog.json");

const toJson = (value) => `${JSON.stringify(value, null, 2)}\n`;

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const batchArg = args.find((arg) => !arg.startsWith("--"));
  if (!batchArg) throw new Error("Usage: apply-rewrites.mjs <batch.json> [--dry-run]");

  const batchPath = path.resolve(batchArg);
  const batch = JSON.parse(await readFile(batchPath, "utf8"));
  const videos = JSON.parse(await readFile(videosPath, "utf8"));
  const backlog = JSON.parse(await readFile(backlogPath, "utf8"));

  const approved = batch.items.filter((item) => item.reviewStatus === "approved");
  if (!approved.length) {
    console.log("No approved rewrites in this batch.");
    return;
  }

  const index = new Map(videos.map((video, i) => [video.slug, i]));
  const knownTags = new Set(videos.flatMap((video) => video.tags));
  const failures = [];
  const newTags = new Set();
  const rewritten = new Map();

  for (const item of approved) {
    const at = index.get(item.slug);
    if (at === undefined) {
      failures.push(`${item.slug}: not in videos.json`);
      continue;
    }
    const tags = [...new Set(item.proposed.tags.map((tag) => tag.trim()).filter(Boolean))];
    const next = {
      ...videos[at],
      title: item.proposed.title.trim(),
      description: item.proposed.description.trim(),
      tags,
    };
    const issues = catalogQualityIssues(next);
    if (issues.length) failures.push(`${item.slug}: ${issues.join(", ")}`);
    for (const tag of tags) if (!knownTags.has(tag)) newTags.add(tag);
    rewritten.set(at, next);
  }

  if (failures.length) {
    for (const line of failures) console.error(`not ready ${line}`);
    console.error(`${failures.length} approved rewrite(s) fail; fix the batch and re-run.`);
    process.exitCode = 1;
    return;
  }
  if (newTags.size) console.warn(`new tags: ${[...newTags].sort().join(", ")}`);

  for (const [at, next] of rewritten) videos[at] = next;
  const fixed = new Set(approved.map((item) => item.slug));
  const nextBacklog = backlog.filter((slug) => !fixed.has(slug));
  const appliedAt = new Date().toISOString();
  for (const item of approved) {
    item.reviewStatus = "applied";
    item.appliedAt = appliedAt;
  }

  console.log(
    `apply: ${approved.length} rewritten, backlog ${backlog.length} → ${nextBacklog.length}`,
  );
  if (dryRun) {
    console.log("dry-run: no files written");
    return;
  }
  await writeFile(videosPath, toJson(videos));
  await writeFile(backlogPath, toJson(nextBacklog));
  await writeFile(batchPath, toJson(batch));
  console.log("wrote videos.json, quality-backlog.json and the batch file");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
