import type { LaunchVideo } from "@/lib/catalog";

// 120 entries per page: the first page is rendered into the static HTML of
// the homepage and each category page, so this is also how many entry links
// a crawler sees per listing page. The grid auto-fills 1–6 columns (320px
// min, 1920px max container), and 120 divides evenly by every count from 1
// to 6, so a full page never leaves a trailing empty cell.
export const PAGE_SIZE = 120;

/** Number of static listing pages needed to link every one of `total` items. */
export function listingPageCount(total: number) {
  return Math.max(1, Math.ceil(total / PAGE_SIZE));
}

/** URL of page `page` of a paginated listing rooted at `basePath` (with trailing slash). */
export function listingPagePath(basePath: string, page: number) {
  return page <= 1 ? basePath : `${basePath}${page}/`;
}

/** Fields the homepage grid, search, and in-page player actually use. */
export type DirectoryVideo = Pick<
  LaunchVideo,
  | "id"
  | "slug"
  | "title"
  | "product"
  | "company"
  | "description"
  | "category"
  | "tags"
  | "tweetUrl"
  | "authorName"
  | "authorHandle"
  | "authorAvatar"
  | "poster"
  | "videoUrl"
  | "publishedAt"
  | "durationSeconds"
  | "views"
  | "viewsCapturedAt"
> & {
  streamUrl?: string | null;
};

export function toDirectoryVideo(video: LaunchVideo): DirectoryVideo {
  const item: DirectoryVideo = {
    id: video.id,
    slug: video.slug,
    title: video.title,
    product: video.product,
    company: video.company,
    description: video.description,
    category: video.category,
    tags: video.tags,
    tweetUrl: video.tweetUrl,
    authorName: video.authorName,
    authorHandle: video.authorHandle,
    authorAvatar: video.authorAvatar,
    poster: video.poster,
    videoUrl: video.videoUrl,
    publishedAt: video.publishedAt,
    durationSeconds: video.durationSeconds,
  };
  if (video.streamUrl) item.streamUrl = video.streamUrl;
  if (typeof video.views === "number") item.views = video.views;
  if (video.viewsCapturedAt) item.viewsCapturedAt = video.viewsCapturedAt;
  return item;
}

export function gridPoster(poster: string) {
  return poster.replace(/\.webp$/, "-960.webp");
}

export function filterVideos<T extends DirectoryVideo>(
  videos: readonly T[],
  query: string,
  category: string,
): T[] {
  const normalizedQuery = query.trim().toLocaleLowerCase("en");
  return videos.filter((video) => {
    const matchesCategory =
      category === "all" || video.category === category;
    const searchText = [
      video.title,
      video.product,
      video.company,
      video.description,
      video.authorName,
      video.authorHandle,
      video.tags.join(" "),
    ]
      .join(" ")
      .toLocaleLowerCase("en");
    return (
      matchesCategory &&
      (!normalizedQuery || searchText.includes(normalizedQuery))
    );
  });
}

export function clampPage(page: number, totalItems: number) {
  const totalPages = listingPageCount(totalItems);
  return Math.min(Math.max(1, Math.trunc(page) || 1), totalPages);
}

export function pageWindow(current: number, total: number) {
  const values = new Set([1, total, current - 1, current, current + 1]);
  return Array.from(values)
    .filter((value) => value >= 1 && value <= total)
    .sort((a, b) => a - b);
}
