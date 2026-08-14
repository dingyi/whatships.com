#!/usr/bin/env node
/**
 * Rebuild inbox candidates from tweet URLs/IDs via the public syndication
 * endpoint, and union them into src/data/inbox.json.
 *
 * Discovery PRs frequently ship only a markdown doc (or a broken inbox.json),
 * so candidates have to be reconstructed by hand. This collapses that flow:
 *
 *   node scripts/rebuild-inbox.mjs https://x.com/linear/status/123 …
 *   node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-14-zh-summary.md
 *   node scripts/rebuild-inbox.mjs --dry-run 2087177146662072546
 *
 * Tweets already published (videos.json) or already in the inbox are skipped
 * on write; --dry-run fetches and prints the rebuilt items without writing.
 * Handles not present in src/data/watchlist.json fall back to
 * category "other" — fix metadata in /admin before approving.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  buildCandidateDraft,
  candidateToInboxItem,
  mergeInboxItems,
  normalizeHandle,
  scoreLaunchText,
  tweetUrlFor,
} from "./discovery/logic.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

async function loadJson(relativePath) {
  return JSON.parse(await readFile(path.join(root, relativePath), "utf8"));
}

function syndicationUrl(tweetId) {
  const token = ((tweetId / 1e15) * Math.PI).toString(36).replace(/(0+|\.)/g, "");
  return `https://cdn.syndication.twimg.com/tweet-result?id=${tweetId}&token=${token}&lang=en`;
}

async function fetchTweet(tweetId) {
  const res = await fetch(syndicationUrl(tweetId));
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const video = (data.mediaDetails ?? []).find((m) => m.type === "video");
  const variants = (video?.video_info?.variants ?? [])
    .filter((v) => v.content_type === "video/mp4")
    .sort((a, b) => (b.bitrate ?? 0) - (a.bitrate ?? 0));
  const handle = normalizeHandle(data.user?.screen_name ?? "");
  return {
    tweetId,
    tweetUrl: tweetUrlFor(handle || "i", tweetId),
    authorHandle: handle,
    authorName: data.user?.name ?? handle,
    // High-res avatar: strip the _normal size suffix.
    authorAvatar:
      data.user?.profile_image_url_https?.replace("_normal.", ".") ?? null,
    text: data.text ?? "",
    createdAt: data.created_at,
    media:
      video && variants[0]
        ? [
            {
              type: "video",
              videoUrl: variants[0].url,
              previewImageUrl: video.media_url_https ?? null,
              durationMs: video.video_info?.duration_millis ?? null,
            },
          ]
        : [],
  };
}

function extractTweetRefs(input) {
  const refs = [];
  for (const match of input.matchAll(/x\.com\/([^/\s]+)\/status\/(\d+)/gi)) {
    refs.push({ handle: match[1], tweetId: match[2] });
  }
  for (const match of input.matchAll(/(?<![\w/])(\d{15,20})(?!\d)/g)) {
    refs.push({ handle: null, tweetId: match[1] });
  }
  return refs;
}

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const fromIndex = args.indexOf("--from");
const positional = args.filter(
  (arg, i) => arg !== "--dry-run" && arg !== "--from" && i !== fromIndex + 1,
);

const refs = [];
if (fromIndex !== -1) {
  const file = args[fromIndex + 1];
  if (!file) {
    console.error("--from requires a markdown file path");
    process.exit(1);
  }
  const text = await readFile(path.resolve(file), "utf8");
  refs.push(...extractTweetRefs(text));
}
for (const arg of positional) {
  refs.push(...extractTweetRefs(arg));
}

const seen = new Set();
const tweetIds = refs
  .map((ref) => ref.tweetId)
  .filter((id) => !seen.has(id) && seen.add(id));

if (tweetIds.length === 0) {
  console.error(
    "usage: node scripts/rebuild-inbox.mjs [--dry-run] [--from <doc.md>] <tweet-url-or-id> [...]",
  );
  process.exit(1);
}

const [videos, inbox, watchlist] = await Promise.all([
  loadJson("src/data/videos.json"),
  loadJson("src/data/inbox.json"),
  loadJson("src/data/watchlist.json"),
]);
const publishedIds = new Set(videos.map((video) => video.tweetId));
const inboxByTweet = new Map(inbox.items.map((item) => [item.tweetId, item]));
const watchlistByHandle = new Map(
  watchlist.map((entry) => [normalizeHandle(entry.handle).toLowerCase(), entry]),
);

const items = [];
for (const tweetId of tweetIds) {
  if (publishedIds.has(tweetId)) {
    console.log(`${tweetId}: skip (already published)`);
    continue;
  }
  const existing = inboxByTweet.get(tweetId);
  if (existing && !dryRun) {
    console.log(`${tweetId}: skip (already in inbox, ${existing.reviewStatus})`);
    continue;
  }

  let post;
  try {
    post = await fetchTweet(tweetId);
  } catch (error) {
    console.error(`${tweetId}: fetch failed: ${error.message}`);
    continue;
  }
  if (post.media.length === 0) {
    console.log(`${tweetId}: skip (no video in tweet)`);
    continue;
  }

  const entry = watchlistByHandle.get(post.authorHandle.toLowerCase());
  const watch = entry ?? {
    handle: post.authorHandle,
    company: post.authorName,
    category: "other",
    tags: [],
  };
  if (!entry) {
    console.warn(
      `${tweetId}: @${post.authorHandle} not in watchlist — category set to "other", fix in /admin`,
    );
  }

  const { score, reasons } = scoreLaunchText(post.text);
  const candidate = {
    post,
    watchlist: watch,
    score: score + 20,
    reasons: ["has-video", ...reasons],
    draft: buildCandidateDraft(post, watch),
  };
  items.push(candidateToInboxItem(candidate));
  console.log(
    `${tweetId}: rebuilt "${candidate.draft.title.slice(0, 60)}" (@${post.authorHandle}, ${watch.category})`,
  );
}

if (dryRun) {
  console.log(JSON.stringify(items, null, 2));
  console.log(`dry run: ${items.length} item(s), inbox.json untouched`);
} else if (items.length > 0) {
  const result = mergeInboxItems(inbox, items);
  await writeFile(
    path.join(root, "src/data/inbox.json"),
    `${JSON.stringify(result.inbox, null, 2)}\n`,
  );
  console.log(
    `inbox: +${result.added} new (${result.pending} pending, ${result.total} total)`,
  );
} else {
  console.log("inbox: nothing to add");
}
