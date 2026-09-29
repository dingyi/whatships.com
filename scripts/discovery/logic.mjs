/**
 * Pure discovery helpers shared by the CLI runner and unit tests.
 */

import { TITLE_MAX } from "../catalog-quality.mjs";

export const DISCOVERY_ISSUE_LABEL = "discovery";
export const DISCOVERY_SOURCE = "weekly-discovery";

export const CATEGORY_IDS = [
  "ai",
  "developer-tools",
  "design",
  "productivity",
  "consumer",
  "hardware",
  "other",
];

export const CATEGORY_LABELS = {
  ai: "AI",
  "developer-tools": "Developer tools",
  design: "Design",
  productivity: "Productivity",
  consumer: "Consumer",
  hardware: "Hardware",
  other: "Other",
};

const LAUNCH_PATTERNS = [
  /\bintroduc(?:e|ing)\b/i,
  /\blaunch(?:ing|ed)?\b/i,
  /\bannounc(?:e|ing|ement)\b/i,
  /\bnow (?:live|available|shipping)\b/i,
  /\bavailable (?:today|now|on)\b/i,
  /\brebuilt\b/i,
  /\bfrom the ground up\b/i,
  /\bproduct (?:launch|demo|walkthrough)\b/i,
  /\bwalkthrough\b/i,
  /\bnew (?:feature|product|app|model|agent|version)\b/i,
  /\bshipping\b/i,
  /\bmeet\b.{0,40}\b(?:our|the|new)\b/i,
  /\bpresenting\b/i,
  /\bjust shipped\b/i,
  /\bg\.?a\.?\b/i,
  /\bpublic beta\b/i,
  /\bopen[- ]source\b/i,
  /发布/,
  /新品/,
  /上线/,
  /正式推出/,
  /全新/,
  /重磅/,
];

const NOISE_PATTERNS = [
  /\bhiring\b/i,
  /\bwe're hiring\b/i,
  /\bjoin (?:our|the) team\b/i,
  /\bpodcast\b/i,
  /\bnewsletter\b/i,
  /\bgiveaway\b/i,
  /\bretweet to\b/i,
  /\bfollow us\b/i,
];

export function normalizeHandle(handle) {
  return handle.replace(/^@/, "").trim();
}

export function tweetUrlFor(handle, tweetId) {
  return `https://x.com/${normalizeHandle(handle)}/status/${tweetId}`;
}

export function hasVideoMedia(media) {
  return media.some(
    (item) => item.type === "video" || item.type === "animated_gif",
  );
}

export function pickBestVideoUrl(media) {
  for (const item of media) {
    if (
      (item.type === "video" || item.type === "animated_gif") &&
      item.videoUrl
    ) {
      return item.videoUrl;
    }
  }
  return null;
}

export function pickPreviewImage(media) {
  for (const item of media) {
    if (item.previewImageUrl) return item.previewImageUrl;
  }
  return null;
}

export function scoreLaunchText(text) {
  const reasons = [];
  let score = 0;

  for (const pattern of NOISE_PATTERNS) {
    if (pattern.test(text)) {
      score -= 25;
      reasons.push(`noise:${pattern.source}`);
    }
  }

  for (const pattern of LAUNCH_PATTERNS) {
    if (pattern.test(text)) {
      score += 18;
      reasons.push(`signal:${pattern.source}`);
    }
  }

  if (text.trim().length > 0 && text.trim().length < 280) {
    score += 4;
  }

  return { score, reasons };
}

export function isRecentEnough(iso, lookbackDays, now = new Date()) {
  const created = Date.parse(iso);
  if (Number.isNaN(created)) return false;
  const ms = lookbackDays * 24 * 60 * 60 * 1000;
  return created >= now.getTime() - ms;
}

export function knownTweetIds(videos) {
  return new Set([...videos].map((video) => video.tweetId));
}

export function buildDiscoverySlug(company, tweetId) {
  const base = company
    .toLocaleLowerCase("en")
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 40)
    .replace(/-$/, "");
  return base
    ? `${base}-${tweetId.slice(-6)}`
    : `launch-${tweetId.slice(-8)}`;
}

/** Mathematical monospace letters (𝚘𝚗𝚎) fold to ASCII so a skill name is readable. */
function foldMathLetters(text) {
  return text.replace(/[\u{1D670}-\u{1D6A3}]/gu, (char) => {
    const code = char.codePointAt(0) ?? 0;
    if (code >= 0x1d670 && code <= 0x1d689) {
      return String.fromCharCode(65 + (code - 0x1d670));
    }
    if (code >= 0x1d68a && code <= 0x1d6a3) {
      return String.fromCharCode(97 + (code - 0x1d68a));
    }
    return char;
  });
}

function plain(text) {
  return foldMathLetters(text ?? "")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstSentence(text) {
  const line = foldMathLetters(text ?? "")
    .replace(/https?:\/\/\S+/g, " ")
    .split(/\n/)[0] ?? "";
  const sentence = line.split(/(?<=[.!?])\s/)[0] ?? "";
  return sentence.replace(/\s+/g, " ").trim().replace(/[.:]+$/, "");
}

function sentencesOf(text) {
  return plain(text)
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.replace(/[.:]+$/, "").trim())
    .filter(Boolean);
}

/** "450K+ views." is a boast, not a name. */
function isStatSentence(sentence) {
  return /^\s*[\d.,]+\s*[kKmM]?\+?\s+views\b/i.test(sentence);
}

/** A title or sentence we are willing to publish: fits, and is not cut off. */
function fits(value, max = TITLE_MAX) {
  const text = value.replace(/\s+/g, " ").trim();
  if (!text || text.length > max) return null;
  if (/(…|\.\.\.)\s*$/.test(text)) return null;
  return text;
}

/**
 * Pull a product name out of "Introducing X — hook" without keeping a
 * half-finished sentence. Long hooks are dropped, not sliced mid-thought.
 */
function extractIntro(text) {
  const clean = plain(text).replace(/^\p{Extended_Pictographic}+\s*/u, "");
  // "introducing"/"announcing" can sit after a teaser line. "meet" only
  // counts at the start of a sentence — "nice to meet you" is not a launch.
  const match =
    clean.match(/\b(?:introducing|announcing)\b\s*:?\s+(.+)$/i) ??
    clean.match(/(?:^|(?<=[.!?]\s))(?:presenting|meet)\b\s*:?\s+(.+)$/i);
  if (!match) return null;
  const rest = match[1].replace(/[.:]+$/, "").trim();
  const emojiParts = rest.split(/\s*\p{Extended_Pictographic}\uFE0F?\s*/u);
  let product;
  let hook;
  if (
    emojiParts.length > 1 &&
    emojiParts[0].trim().length >= 2 &&
    emojiParts[0].trim().length <= 40
  ) {
    product = emojiParts[0].trim();
    hook = emojiParts.slice(1).join(" ").trim();
  } else {
    const parts = rest.split(/\s+[—–-]\s+|\s*[:,]\s+/);
    product = parts[0].trim();
    hook = parts.slice(1).join(", ").trim();
  }
  product = product.replace(/^(?:the|our)\s+/i, "").trim();
  const bound = product.match(/^(.*?)\s+((?:in|on|for|with)\s+.+)$/i);
  if (
    product.length > 40 &&
    bound &&
    bound[1].trim().length >= 2 &&
    bound[1].trim().length <= 40
  ) {
    product = bound[1].trim();
    hook = [bound[2].trim(), hook].filter(Boolean).join(" ").trim();
  }
  if (!product || product.length < 2 || product.length > 40) return null;
  return { product, hook };
}

/** First self-contained clause, stopping before "that/which/from @…". */
function leadingClause(hook) {
  if (!hook) return "";
  const sentence = hook.replace(/@\w+/g, " ").split(/(?<=[.!?])\s+/)[0] ?? hook;
  return sentence
    .replace(/[.!?]+$/, "")
    .split(/\s+(?:that|which|so|because|from)\b/i)[0]
    .replace(/[,:;]+$/, "")
    .replace(/\s+(?:at|in|on|for|with|from|and)\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function decap(clause) {
  return clause.replace(/^[A-Z](?![A-Z])/, (letter) => letter.toLowerCase());
}

const DANGLING =
  /^(?:a|an|the|and|or|but|for|with|to|of|in|on|at|from|by|via|your)$/i;

/** Longest complete prefix that still fits in a title. */
function longestPhrase(phrase, room) {
  const words = phrase.split(/\s+/).filter(Boolean);
  for (let end = words.length; end >= 1; end--) {
    const raw = words[end - 1];
    const last = raw.replace(/[,:;]+$/, "");
    if (DANGLING.test(last)) continue;
    const next = words[end]?.replace(/[,:;]+$/g, "") ?? "";
    // "workforce open|source" is a split word pair. A comma keeps "open source".
    if (
      next &&
      !/[,:;]/.test(raw) &&
      /^[a-z]/.test(next) &&
      !DANGLING.test(next)
    ) {
      continue;
    }
    const cut = words.slice(0, end).join(" ").replace(/[,:;]+$/, "").trim();
    if (!cut) continue;
    if (end < words.length && cut.length < 8) break;
    if (cut.length <= room) return cut;
  }
  return null;
}

function titleFromIntro(intro) {
  const clause = decap(leadingClause(intro.hook));
  if (clause) {
    const room = TITLE_MAX - intro.product.length - " — ".length;
    const cut = longestPhrase(clause, room);
    if (cut) {
      const title = fits(`${intro.product} — ${cut}`);
      if (title) return title;
    }
  }
  return fits(intro.product);
}

/**
 * A product the post actually names, used when the opening line is too long
 * to be a title and there is no Introducing clause.
 */
function namedProductTitle(text) {
  const clean = plain(text);
  const lead = clean.match(
    /^((?:[A-Z0-9][\w.+]*|\d+(?:\.\d+)?)(?:\s+(?:[A-Z0-9][\w.+]*|\d+(?:\.\d+)?)){0,5})\s+(?:turns|lets|makes|keeps|shows|scans|vacuums|ships)\b/,
  );
  if (lead) {
    const title = fits(lead[1]);
    if (title) return title;
  }
  const generated = clean.match(
    /\bgenerated in ([A-Z][\w+]*(?:\s+[A-Z][\w+]*){0,3})\b/,
  );
  if (generated) {
    const title = fits(generated[1]);
    if (title) return title;
  }
  const mac = clean.match(/\bon the ([A-Za-z][\w-]*) mac app\b/i);
  if (mac) {
    const name = mac[1].replace(/^[a-z]/, (letter) => letter.toUpperCase());
    const title = fits(name);
    if (title) return title;
  }
  const skill = clean.match(/(\/[\w-]+)\b/);
  if (skill && /skill/i.test(clean)) {
    const title = fits(skill[1]);
    if (title) return title;
  }
  const site = clean.match(/\b(?:site|app)\s+([A-Z][A-Za-z0-9]+)\b/);
  if (site) {
    const title = fits(site[1]);
    if (title) return title;
  }
  const opening = firstSentence(text).replace(
    /\s*(?:[↓↑→←]|[\p{Extended_Pictographic}\uFE0F]+)+\s*$/u,
    "",
  );
  const checkout = opening.match(/^check out (?:these\s+)?(.+)$/i);
  if (checkout) {
    const title = longestPhrase(checkout[1].replace(/[.:]+$/, ""), TITLE_MAX);
    if (title && fits(title)) return fits(title);
  }
  const vacuums = clean.match(
    /\b([A-Z][\w.+]*(?:\s+[A-Z0-9][\w.+]*){0,4})\s+vacuums\b/,
  );
  if (vacuums) {
    const title = fits(vacuums[1]);
    if (title) return title;
  }
  for (const part of sentencesOf(text)) {
    if (isStatSentence(part) || fits(part)) continue;
    const cut = part.split(/\s+\(|,\s+/)[0]?.trim() ?? "";
    if (cut.length < 20 || cut.length >= part.length) continue;
    const title = fits(cut);
    if (title) return title;
  }
  return null;
}

export function guessTitle(text, company) {
  const fallback = `${company} — launch video`;
  const sentence = firstSentence(text);
  const direct = !isStatSentence(sentence) ? fits(sentence) : null;
  if (direct && /^(?:introducing|announcing|presenting|meet)\b/i.test(direct)) {
    return direct;
  }

  const intro = extractIntro(text);
  if (intro) {
    const titled = titleFromIntro(intro);
    if (titled) return titled;
  }
  if (direct) return direct;

  const named = namedProductTitle(text);
  if (named) return named;
  return fits(fallback) ?? company;
}

/**
 * A finished sentence built from the product name and its first clause.
 * Returns "" when that would just be a chopped-off tweet.
 */
export function guessDescription(text) {
  const intro = extractIntro(text);
  if (!intro) return "";
  const clause = leadingClause(intro.hook).replace(/^(?:a|an|the)\s+/i, (word) =>
    word.toLowerCase(),
  );
  if (!clause || clause.length < 8) return "";
  const description = (
    /^(?:in|on|for|with)\b/i.test(clause)
      ? `${intro.product} ${clause}.`
      : `${intro.product} is ${clause}.`
  ).replace(/\s+/g, " ");
  if (description.length > 220) return "";
  if (/(…|\.\.\.)/.test(description)) return "";
  return description;
}

export function buildCandidateDraft(post, watchlist) {
  const intro = extractIntro(post.text ?? "");
  const companyIsAuthor =
    Boolean(post.authorName) && watchlist.company === post.authorName;
  const named = companyIsAuthor && intro ? intro.product : watchlist.company;
  const slug = buildDiscoverySlug(named, post.tweetId);
  const videoUrl = pickBestVideoUrl(post.media);
  const durationMs =
    post.media.find((m) => m.durationMs != null)?.durationMs ?? null;

  return {
    id: `plv-disc-${post.tweetId}`,
    slug,
    title: guessTitle(post.text, named),
    product: named,
    company: named,
    description: guessDescription(post.text),
    category: watchlist.category,
    tags: [...(watchlist.tags ?? []), "auto-discovery"],
    tweetUrl: post.tweetUrl,
    tweetId: post.tweetId,
    authorName: post.authorName || watchlist.company,
    authorHandle: normalizeHandle(post.authorHandle || watchlist.handle),
    authorAvatar: post.authorAvatar ?? null,
    poster: `/posters/${slug}.webp`,
    videoUrl,
    publishedAt: post.createdAt,
    durationSeconds:
      durationMs != null && durationMs > 0
        ? Math.round(durationMs / 1000)
        : null,
    featured: false,
    status: "draft",
  };
}

export function evaluatePost(post, watchlist, options) {
  if (options.knownIds.has(post.tweetId)) return null;
  if (!isRecentEnough(post.createdAt, options.lookbackDays, options.now)) {
    return null;
  }
  if (!hasVideoMedia(post.media)) return null;

  const { score: textScore, reasons } = scoreLaunchText(post.text);
  let score = textScore + 20;
  reasons.unshift("has-video");

  if ((post.metrics?.likeCount ?? 0) >= 50) {
    score += 6;
    reasons.push("engagement:likes");
  }
  if ((post.metrics?.viewCount ?? 0) >= 10_000) {
    score += 6;
    reasons.push("engagement:views");
  }

  const minScore = options.minScore ?? 20;
  if (score < minScore) return null;

  return {
    post,
    watchlist,
    score,
    reasons,
    draft: buildCandidateDraft(post, watchlist),
  };
}

export function rankCandidates(candidates) {
  return candidates
    .slice()
    .sort(
      (a, b) =>
        b.score - a.score ||
        Date.parse(b.post.createdAt) - Date.parse(a.post.createdAt),
    );
}

export function buildDiscoveryIssueTitle(candidate) {
  return `Discovery: ${candidate.draft.product} (@${candidate.draft.authorHandle})`;
}

export function buildDiscoveryIssueBody(candidate) {
  const categoryLabel =
    CATEGORY_LABELS[candidate.watchlist.category] ??
    candidate.watchlist.category;
  const duration =
    candidate.draft.durationSeconds != null
      ? `${candidate.draft.durationSeconds}s`
      : "—";

  return [
    "## Auto-discovered launch video",
    "",
    `_Source: \`${DISCOVERY_SOURCE}\` · score **${candidate.score}**_`,
    "",
    "### Source",
    "",
    `- **Tweet URL:** ${candidate.post.tweetUrl}`,
    `- **Tweet ID:** \`${candidate.post.tweetId}\``,
    `- **Author:** ${candidate.post.authorName} (@${candidate.draft.authorHandle})`,
    `- **Posted:** ${candidate.post.createdAt}`,
    `- **Duration:** ${duration}`,
    `- **Video URL:** ${candidate.draft.videoUrl ?? "—"}`,
    "",
    "### Post text",
    "",
    "> " + candidate.post.text.replace(/\n/g, "\n> "),
    "",
    "### Signals",
    "",
    candidate.reasons.map((reason) => `- \`${reason}\``).join("\n") || "- —",
    "",
    "### Suggested catalog draft",
    "",
    "```json",
    JSON.stringify(candidate.draft, null, 2),
    "```",
    "",
    "### Suggested metadata",
    "",
    `- **Company:** ${candidate.watchlist.company}`,
    `- **Category:** ${categoryLabel}`,
    `- **Tags:** ${(candidate.watchlist.tags ?? []).join(", ") || "—"}`,
    "",
    "### Review checklist",
    "",
    "- [ ] Public post is a product launch / demo / walkthrough (not hiring/ads noise)",
    "- [ ] Metadata (title, product, category) is accurate",
    "- [ ] Capture poster + stream: `pnpm posters:capture -- --slug=" +
      candidate.draft.slug +
      " --force`",
    '- [ ] Merge into `src/data/videos.json` with `status: "published"`',
    "- [ ] Close this issue as approved or rejected",
    "",
    `<!-- plv-discovery-tweet-id:${candidate.post.tweetId} -->`,
    "",
  ].join("\n");
}

export function buildDigestEmailSubject(candidates, week) {
  if (candidates.length === 0) {
    return `[plv] Weekly discovery: no new launch videos (${week})`;
  }
  return `[plv] Weekly discovery: ${candidates.length} candidate${
    candidates.length === 1 ? "" : "s"
  } to review (${week})`;
}

export function buildDigestEmailHtml(candidates, options) {
  const issueByTweet = new Map(
    (options.issues ?? []).map((item) => [item.tweetId, item.htmlUrl]),
  );

  if (candidates.length === 0) {
    return `
      <p>Weekly discovery finished for <strong>${options.weekLabel}</strong>.</p>
      <p>No new launch-video candidates matched the watchlist this week.</p>
      <p><a href="${options.repoUrl}/issues?q=label%3A${DISCOVERY_ISSUE_LABEL}">Open discovery queue</a></p>
    `.trim();
  }

  const rows = candidates
    .map((candidate) => {
      const issueUrl = issueByTweet.get(candidate.post.tweetId);
      return `
        <tr>
          <td style="padding:10px;border-bottom:1px solid #eee;vertical-align:top;">
            <strong>${escapeHtml(candidate.draft.title)}</strong><br/>
            <span style="color:#666;">${escapeHtml(candidate.watchlist.company)} · score ${candidate.score}</span>
          </td>
          <td style="padding:10px;border-bottom:1px solid #eee;vertical-align:top;white-space:nowrap;">
            <a href="${candidate.post.tweetUrl}">Post</a>
            ${issueUrl ? ` · <a href="${issueUrl}">Review issue</a>` : ""}
          </td>
        </tr>
      `.trim();
    })
    .join("\n");

  return `
    <p>Weekly discovery found <strong>${candidates.length}</strong> candidate${
      candidates.length === 1 ? "" : "s"
    } for <strong>${options.weekLabel}</strong>.</p>
    <p>Review them in GitHub Issues (label <code>${DISCOVERY_ISSUE_LABEL}</code>) before publishing to the catalog.</p>
    <table style="border-collapse:collapse;width:100%;max-width:720px;font-family:system-ui,sans-serif;font-size:14px;">
      ${rows}
    </table>
    <p style="margin-top:16px;">
      <a href="${options.repoUrl}/issues?q=is%3Aopen+label%3A${DISCOVERY_ISSUE_LABEL}">Open review queue →</a>
    </p>
  `.trim();
}

export function buildDigestEmailText(candidates, options) {
  const issueByTweet = new Map(
    (options.issues ?? []).map((item) => [item.tweetId, item.htmlUrl]),
  );

  if (candidates.length === 0) {
    return [
      `Weekly discovery (${options.weekLabel}): no new candidates.`,
      `Queue: ${options.repoUrl}/issues?q=label%3A${DISCOVERY_ISSUE_LABEL}`,
    ].join("\n");
  }

  const lines = [
    `Weekly discovery (${options.weekLabel}): ${candidates.length} candidate(s)`,
    "",
    ...candidates.map((candidate) => {
      const issueUrl = issueByTweet.get(candidate.post.tweetId);
      return [
        `- ${candidate.draft.title}`,
        `  ${candidate.post.tweetUrl}`,
        issueUrl ? `  Review: ${issueUrl}` : null,
      ]
        .filter(Boolean)
        .join("\n");
    }),
    "",
    `Queue: ${options.repoUrl}/issues?q=is%3Aopen+label%3A${DISCOVERY_ISSUE_LABEL}`,
  ];
  return lines.join("\n");
}

export function extractTweetIdFromIssueBody(body) {
  const marker = body.match(/plv-discovery-tweet-id:(\d+)/);
  if (marker) return marker[1];
  const url = body.match(/x\.com\/[^/\s]+\/status\/(\d+)/i);
  return url?.[1] ?? null;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function weekLabel(now = new Date()) {
  return now.toISOString().slice(0, 10);
}

export function isValidWatchlistEntry(value) {
  if (!value || typeof value !== "object") return false;
  if (typeof value.handle !== "string" || !value.handle.trim()) return false;
  if (typeof value.company !== "string" || !value.company.trim()) return false;
  if (
    typeof value.category !== "string" ||
    !CATEGORY_IDS.includes(value.category)
  ) {
    return false;
  }
  return true;
}

/**
 * Convert a scored discovery candidate into an admin inbox item.
 */
export function candidateToInboxItem(candidate, { discoveredAt, issueUrl } = {}) {
  return {
    id: `disc-${candidate.post.tweetId}`,
    tweetId: candidate.post.tweetId,
    reviewStatus: "pending",
    discoveredAt: discoveredAt ?? new Date().toISOString(),
    reviewedAt: null,
    score: candidate.score,
    reasons: candidate.reasons ?? [],
    post: candidate.post,
    watchlist: candidate.watchlist,
    draft: candidate.draft,
    notes: "",
    issueUrl: issueUrl ?? null,
  };
}

/**
 * Merge newly discovered candidates into the review inbox.
 * Preserves existing reviewStatus / notes / draft edits for known tweetIds.
 */
export function mergeInbox(existing, candidates, { now = new Date(), issueByTweet } = {}) {
  const previous = Array.isArray(existing?.items) ? existing.items : [];
  const byTweet = new Map(previous.map((item) => [item.tweetId, item]));
  const discoveredAt = now.toISOString();
  let added = 0;

  for (const candidate of candidates) {
    const tweetId = candidate.post.tweetId;
    if (byTweet.has(tweetId)) {
      const current = byTweet.get(tweetId);
      // Refresh score/reasons/post media for pending items only.
      if (current.reviewStatus === "pending") {
        byTweet.set(tweetId, {
          ...current,
          score: candidate.score,
          reasons: candidate.reasons ?? current.reasons,
          post: candidate.post,
          watchlist: candidate.watchlist,
          // Keep editor draft edits if present; only fill missing videoUrl.
          draft: {
            ...candidate.draft,
            ...current.draft,
            videoUrl: current.draft?.videoUrl || candidate.draft.videoUrl,
            tweetUrl: candidate.draft.tweetUrl,
            tweetId: candidate.draft.tweetId,
          },
          issueUrl:
            current.issueUrl ||
            issueByTweet?.get(tweetId) ||
            null,
        });
      }
      continue;
    }

    byTweet.set(
      tweetId,
      candidateToInboxItem(candidate, {
        discoveredAt,
        issueUrl: issueByTweet?.get(tweetId) ?? null,
      }),
    );
    added += 1;
  }

  const items = [...byTweet.values()].sort(
    (a, b) =>
      Date.parse(b.discoveredAt) - Date.parse(a.discoveredAt) ||
      b.score - a.score,
  );

  return {
    inbox: {
      updatedAt: discoveredAt,
      items,
    },
    added,
    total: items.length,
    pending: items.filter((item) => item.reviewStatus === "pending").length,
  };
}

/**
 * Merge complete inbox items (from another inbox.json, e.g. a discovery PR
 * branch) into the review inbox. Unlike mergeInbox, incoming entries are
 * already inbox items, so their reviewStatus / notes / draft are kept as-is.
 * Existing pending items get score/reasons/post refreshed; reviewed items are
 * never touched.
 */
export function mergeInboxItems(existing, incoming, { now = new Date() } = {}) {
  const previous = Array.isArray(existing?.items) ? existing.items : [];
  const byTweet = new Map(previous.map((item) => [item.tweetId, item]));
  const discoveredAt = now.toISOString();
  let added = 0;

  for (const item of Array.isArray(incoming) ? incoming : []) {
    const tweetId = item?.tweetId ?? item?.post?.tweetId;
    if (!tweetId) continue;
    if (byTweet.has(tweetId)) {
      const current = byTweet.get(tweetId);
      if (current.reviewStatus === "pending") {
        byTweet.set(tweetId, {
          ...item,
          ...current,
          score: item.score ?? current.score,
          reasons: item.reasons ?? current.reasons,
          post: item.post ?? current.post,
          watchlist: item.watchlist ?? current.watchlist,
        });
      }
      continue;
    }

    byTweet.set(tweetId, {
      ...item,
      tweetId,
      reviewStatus: item.reviewStatus ?? "pending",
      discoveredAt: item.discoveredAt ?? discoveredAt,
    });
    added += 1;
  }

  const items = [...byTweet.values()].sort(
    (a, b) =>
      Date.parse(b.discoveredAt) - Date.parse(a.discoveredAt) ||
      b.score - a.score,
  );

  return {
    inbox: {
      updatedAt: discoveredAt,
      items,
    },
    added,
    total: items.length,
    pending: items.filter((item) => item.reviewStatus === "pending").length,
  };
}
