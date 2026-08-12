#!/usr/bin/env node
/**
 * Merge one or more inbox-shaped JSON files into src/data/inbox.json.
 *
 * Discovery PRs written by hand (or by external agents) tend to rewrite
 * inbox.json wholesale; merging those PRs directly drops pending candidates.
 * Use this to union them instead:
 *
 *   node scripts/merge-inbox.mjs pr-15.json pr-16.json
 *
 * Each input may be an inbox object ({ updatedAt, items }) or a bare array
 * of inbox items. Existing items are never lost; reviewed items are never
 * modified.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { mergeInboxItems } from "./discovery/logic.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const inboxPath = path.join(root, "src/data/inbox.json");

async function loadJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("usage: node scripts/merge-inbox.mjs <inbox.json> [...more.json]");
  process.exit(1);
}

let inbox = await loadJson(inboxPath);
let totalAdded = 0;

for (const file of files) {
  const data = await loadJson(path.resolve(file));
  const items = Array.isArray(data) ? data : data.items;
  if (!Array.isArray(items)) {
    console.error(`skip ${file}: no items array found`);
    continue;
  }
  const result = mergeInboxItems(inbox, items);
  inbox = result.inbox;
  totalAdded += result.added;
  console.log(
    `${path.relative(root, path.resolve(file))}: +${result.added} new (${result.pending} pending, ${result.total} total)`,
  );
}

await writeFile(inboxPath, `${JSON.stringify(inbox, null, 2)}\n`);
console.log(
  `inbox: wrote ${path.relative(root, inboxPath)} (+${totalAdded} new, ${inbox.items.length} total)`,
);
