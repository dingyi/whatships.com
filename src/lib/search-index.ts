import { categoryLabel, publishedVideos } from "./catalog";
import { publishedStudios, studioHost } from "./studios";
import { publishedTools, toolCategoryLabel, toolHost } from "./tools";

export const SEARCH_KINDS = ["video", "tool", "studio"] as const;
export type SearchKind = (typeof SEARCH_KINDS)[number];

export const SEARCH_KIND_LABELS: Record<SearchKind, string> = {
  video: "Videos",
  tool: "Tools",
  studio: "Studios",
};

export interface SearchIndexItem {
  id: string;
  kind: SearchKind;
  name: string;
  slug: string;
  href: string;
  meta: string;
  searchText: string;
}

export const SEARCH_PER_KIND = 6;

function haystack(parts: Array<string | undefined | null>) {
  return parts.filter(Boolean).join(" ").toLocaleLowerCase("en");
}

export function buildSearchIndex(): SearchIndexItem[] {
  const videos = publishedVideos.map((video) => ({
    id: video.id,
    kind: "video" as const,
    name: video.title,
    slug: video.slug,
    href: `/videos/${video.slug}/`,
    meta: `${video.company} · ${categoryLabel(video.category)}`,
    searchText: haystack([
      video.title,
      video.product,
      video.company,
      video.description,
      video.authorName,
      video.authorHandle,
      video.tags.join(" "),
      categoryLabel(video.category),
      "video",
    ]),
  }));

  const tools = publishedTools.map((tool) => ({
    id: tool.id,
    kind: "tool" as const,
    name: tool.name,
    slug: tool.slug,
    href: `/tools/#${tool.id}`,
    meta: `${toolCategoryLabel(tool.category)} · ${toolHost(tool.url)}`,
    searchText: haystack([
      tool.name,
      tool.tagline,
      tool.description,
      toolCategoryLabel(tool.category),
      toolHost(tool.url),
      "tool",
    ]),
  }));

  const studios = publishedStudios.map((studio) => {
    const kindLabel = studio.kind === "person" ? "Designer" : "Studio";
    return {
      id: studio.id,
      kind: "studio" as const,
      name: studio.name,
      slug: studio.slug,
      href: `/studios/#${studio.id}`,
      meta: `${kindLabel} · ${studioHost(studio.url)}`,
      searchText: haystack([
        studio.name,
        studio.tagline,
        studio.description,
        kindLabel,
        studio.xHandle,
        studioHost(studio.url),
        "studio",
      ]),
    };
  });

  return [...videos, ...tools, ...studios];
}

export function filterSearchIndex(
  items: readonly SearchIndexItem[],
  query: string,
): SearchIndexItem[] {
  const normalized = query.trim().toLocaleLowerCase("en");
  if (!normalized) return [];
  const matched = items.filter((item) => item.searchText.includes(normalized));
  return SEARCH_KINDS.flatMap((kind) =>
    matched.filter((item) => item.kind === kind).slice(0, SEARCH_PER_KIND),
  );
}
