/**
 * Editorial quality rules for catalog entries (src/data/videos.json).
 *
 * An entry fails when its title or description is truncated post text, the
 * title overflows Google's ~55-char display, or it carries fewer than two
 * real tags. Source-tracking tags and the entry's own slug do not count as
 * tags — they say nothing about the video.
 *
 * Shared by tests/catalog-quality.test.ts, scripts/apply-inbox.mjs and
 * scripts/apply-rewrites.mjs so the same bar applies everywhere.
 */

export const TITLE_MAX = 55;
export const MIN_TAGS = 2;

/** Tags that record where an entry came from, not what it is. */
export const INTERNAL_TAGS = new Set([
  "auto-discovery",
  "imported",
  "launchgallery",
  "manual-x-search",
]);

const TRUNCATED = /(…|\.\.\.)\s*$/;

export function realTags(entry) {
  return (entry.tags ?? []).filter(
    (tag) => tag && !INTERNAL_TAGS.has(tag) && tag !== entry.slug,
  );
}

/** @returns {string[]} issue codes; empty when the entry meets the bar. */
export function catalogQualityIssues(entry) {
  const issues = [];
  const title = (entry.title ?? "").trim();
  const description = (entry.description ?? "").trim();

  if (!title) issues.push("title-missing");
  else {
    if (TRUNCATED.test(title)) issues.push("title-truncated");
    if (title.length > TITLE_MAX) issues.push("title-too-long");
  }
  if (!description) issues.push("description-missing");
  else if (TRUNCATED.test(description)) issues.push("description-truncated");
  if (realTags(entry).length < MIN_TAGS) issues.push("tags-thin");

  return issues;
}
