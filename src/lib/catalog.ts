import videosData from "../data/videos.json";

export const CATEGORIES = [
  { id: "ai", label: "AI" },
  { id: "developer-tools", label: "Developer tools" },
  { id: "design", label: "Design" },
  { id: "motion", label: "Motion" },
  { id: "productivity", label: "Productivity" },
  { id: "consumer", label: "Consumer" },
  { id: "hardware", label: "Hardware" },
  { id: "other", label: "Other" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export interface LaunchVideo {
  id: string;
  slug: string;
  title: string;
  product: string;
  company: string;
  description: string;
  category: CategoryId;
  tags: string[];
  tweetUrl: string;
  tweetId: string;
  authorName: string;
  authorHandle: string;
  authorAvatar: string | null;
  /** Local 16:9 poster under /public */
  poster: string;
  /**
   * Original amplify MP4 on X's CDN. Used for poster/stream capture, and
   * for in-site playback via the video proxy (see playbackUrl) — direct
   * URLs 403 in browsers because X's CDN rejects non-Twitter referers.
   */
  videoUrl: string | null;
  /**
   * Optional playback override. When omitted, players use the video proxy
   * (PUBLIC_VIDEO_PROXY_BASE) or fall back to `/streams/{slug}.mp4`.
   */
  streamUrl?: string | null;
  publishedAt: string;
  durationSeconds: number | null;
  featured: boolean;
  status: "published" | "draft";
  /**
   * Public view count on X, captured by scripts/fetch-views.mjs. X's own
   * syndication endpoint — the one used to add videos — does not expose view
   * counts, so the value comes from the fxtwitter mirror. Views only ever
   * grow: this is a snapshot, never a live value. Always shown with
   * viewsCapturedAt.
   */
  views?: number | null;
  /** ISO timestamp for when `views` was read. */
  viewsCapturedAt?: string | null;
}

export const allVideos = videosData as LaunchVideo[];

export const publishedVideos = allVideos
  .filter((video) => video.status === "published")
  .slice()
  .sort(
    (left, right) =>
      Date.parse(right.publishedAt) - Date.parse(left.publishedAt) ||
      left.title.localeCompare(right.title),
  );

/**
 * Entries whose title and description are still the raw post text rather
 * than an edited catalog line: bulk-imported rows, or both fields cut off
 * mid-sentence. They stay browsable but are kept out of the search index
 * (noindex + no sitemap) until someone rewrites them.
 */
export function isThinEntry(
  video: Pick<LaunchVideo, "title" | "description" | "tags">,
): boolean {
  if (video.tags.includes("imported")) return true;
  return video.title.endsWith("…") && video.description.endsWith("…");
}

export function categoryLabel(category: CategoryId) {
  return CATEGORIES.find((item) => item.id === category)?.label ?? category;
}

export function formatPublishedAt(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    // Pin UTC so SSR (server TZ) and client hydration render identical text.
    timeZone: "UTC",
  }).format(date);
}

function isoDate(value: string | null | undefined) {
  if (!value) return null;
  const time = Date.parse(value);
  return Number.isNaN(time) ? null : new Date(time).toISOString().slice(0, 10);
}

/**
 * Date (YYYY-MM-DD) an entry page last changed: the post date, or the view
 * snapshot if that is newer — refreshing the snapshot rewrites the page.
 */
export function videoDateModified(
  video: Pick<LaunchVideo, "publishedAt" | "viewsCapturedAt">,
) {
  const candidates = [isoDate(video.publishedAt), isoDate(video.viewsCapturedAt)]
    .filter((value): value is string => value !== null)
    .sort();
  return candidates.at(-1) ?? null;
}

/**
 * Date (YYYY-MM-DD) a listing over `videos` last changed — the newest
 * entry-level modification in the set. Null for an empty list.
 */
export function catalogDateModified(
  videos: ReadonlyArray<Pick<LaunchVideo, "publishedAt" | "viewsCapturedAt">>,
) {
  let latest: string | null = null;
  for (const video of videos) {
    const modified = videoDateModified(video);
    if (modified && (!latest || modified > latest)) latest = modified;
  }
  return latest;
}

export function formatDuration(seconds: number | null) {
  if (seconds == null || seconds <= 0) return null;
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60);
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

const compactViews = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const fullViews = new Intl.NumberFormat("en-US");

function usableViews(views: number | null | undefined) {
  return typeof views === "number" && Number.isFinite(views) && views >= 0 ? views : null;
}

/** "1.1M" — the compact number used on cards. */
export function formatViews(views: number | null | undefined) {
  const value = usableViews(views);
  return value == null ? null : compactViews.format(value);
}

/** "1,118,904" — the exact count, for tooltips and screen readers. */
export function formatViewsCount(views: number | null | undefined) {
  const value = usableViews(views);
  return value == null ? null : fullViews.format(value);
}

/**
 * Chip label for a card: "1.1M views". Null when the snapshot is missing,
 * so callers can skip the chip entirely.
 */
export function formatViewsLabel(video: Pick<LaunchVideo, "views">) {
  const compact = formatViews(video.views);
  return compact == null ? null : `${compact} views`;
}

/** "1,118,904 views on X · snapshot Sep 15, 2026" for tooltips / sr-only. */
export function formatViewsDetail(
  video: Pick<LaunchVideo, "views" | "viewsCapturedAt">,
) {
  const count = formatViewsCount(video.views);
  if (count == null) return null;
  const captured = video.viewsCapturedAt
    ? formatPublishedAt(video.viewsCapturedAt)
    : null;
  return captured
    ? `${count} views on X · snapshot ${captured}`
    : `${count} views on X`;
}

/**
 * X serves sized profile-image variants by suffixing the file name —
 * `<hash>_bigger.jpg` is 73×73. The catalog stores original URLs; card
 * avatars display at 20px, so the grid should fetch the small variant
 * instead of a grid's worth of 400×400 originals. Non-twimg URLs pass
 * through untouched, as do URLs that already carry a size suffix.
 */
export function authorAvatarSrc(avatar: string) {
  if (/(?:_bigger|_normal|_mini|_\d+x\d+)\./i.test(avatar)) return avatar;
  return avatar.replace(
    /^(https:\/\/pbs\.twimg\.com\/profile_images\/\d+\/[^/?#]*?)(\.(?:jpe?g|png|webp|gif))(?:[?#].*)?$/i,
    "$1_bigger$2",
  );
}

export function tweetPath(video: LaunchVideo) {
  return `/videos/${video.slug}/`;
}

export function xProfileUrl(handle: string) {
  return `https://x.com/${handle.replace(/^@/, "")}`;
}

/**
 * Playback source for in-site HTML5 playback.
 *
 * Precedence:
 *  1. `streamUrl` — explicit per-video override.
 *  2. The video proxy (PUBLIC_VIDEO_PROXY_BASE) wrapping the original
 *     video.twimg.com URL. X's CDN 403s any non-Twitter Referer, and
 *     browsers always attach one to <video> requests, so direct URLs do
 *     not play in-site; the proxy fetches server-side without a Referer
 *     (same trick as proxy.minttr.com, but self-hosted on Cloudflare
 *     Workers — see workers/video-proxy).
 *  3. Local same-origin stream under /streams (dev fallback, generated by
 *     scripts/capture-posters.mjs; gitignored).
 */
export function playbackUrl(
  video: Pick<LaunchVideo, "slug" | "videoUrl"> & {
    streamUrl?: string | null;
  },
) {
  if (video.streamUrl) return video.streamUrl;
  const proxyBase = import.meta.env.PUBLIC_VIDEO_PROXY_BASE;
  if (proxyBase && video.videoUrl) {
    return `${proxyBase}/?url=${encodeURIComponent(video.videoUrl)}`;
  }
  return `/streams/${video.slug}.mp4`;
}

export function normalizeTweetUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (host === "twitter.com" || host === "x.com" || host === "mobile.twitter.com") {
      parsed.hostname = "x.com";
      parsed.search = "";
      parsed.hash = "";
      return parsed.toString().replace(/\/$/, "");
    }
  } catch {
    // fall through
  }
  return url;
}

function descriptionTerms(video: LaunchVideo) {
  return new Set(
    [video.title, video.product, video.company, video.description, ...video.tags]
      .join(" ")
      .toLocaleLowerCase()
      .match(/[a-z0-9]+/g)
      ?.filter((term) => term.length > 2) ?? [],
  );
}

export function getSimilarVideos(
  current: LaunchVideo,
  candidates: LaunchVideo[] = publishedVideos,
  limit = 4,
) {
  const currentTerms = descriptionTerms(current);

  return candidates
    .filter((candidate) => candidate.slug !== current.slug)
    .map((candidate) => {
      const sameCategory = candidate.category === current.category ? 100 : 0;
      const sharedTerms = [...descriptionTerms(candidate)].filter((term) =>
        currentTerms.has(term),
      ).length;
      return {
        video: candidate,
        score: sameCategory + sharedTerms * 4,
      };
    })
    .sort(
      (left, right) =>
        right.score - left.score ||
        Date.parse(right.video.publishedAt) - Date.parse(left.video.publishedAt),
    )
    .slice(0, Math.max(0, limit))
    .map(({ video }) => video);
}
