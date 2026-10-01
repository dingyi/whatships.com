import { formatPublishedAt } from "./catalog";
import toolsData from "../data/tools.json";

export const TOOL_CATEGORIES = [
  { id: "ai", label: "AI" },
  { id: "editor", label: "Editor" },
  { id: "motion", label: "Motion" },
  { id: "mockup", label: "Mockup" },
  { id: "skills", label: "Skills" },
  { id: "resources", label: "Resources" },
] as const;

export type ToolCategoryId = (typeof TOOL_CATEGORIES)[number]["id"];

export interface VideoTool {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  category: ToolCategoryId;
  poster: string;
  /** `npx skills add …` command, skills category only. */
  install?: string;
  /** GitHub star snapshot — see scripts/fetch-stars.mjs. Null means the
   * repo was read and had no count to give (deleted or private). */
  stars?: number | null;
  starsCapturedAt?: string;
}

export const publishedTools = toolsData as VideoTool[];

export function toolCategoryLabel(category: ToolCategoryId) {
  return TOOL_CATEGORIES.find((item) => item.id === category)?.label ?? category;
}

export function toolHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function gridPoster(poster: string) {
  return poster.replace(/\.webp$/, "-960.webp");
}

const compactStars = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const fullStars = new Intl.NumberFormat("en-US");

function usableStars(stars: number | null | undefined) {
  return typeof stars === "number" && Number.isFinite(stars) && stars >= 0 ? stars : null;
}

/** "1.2K" — the compact number used on the card chip. */
export function formatStars(stars: number | null | undefined) {
  const value = usableStars(stars);
  return value == null ? null : compactStars.format(value);
}

/** "596 GitHub stars · snapshot Oct 1, 2026" for the chip tooltip. */
export function formatStarsDetail(
  tool: Pick<VideoTool, "stars" | "starsCapturedAt">,
) {
  const count = usableStars(tool.stars);
  if (count == null) return null;
  const exact = fullStars.format(count);
  const captured = tool.starsCapturedAt
    ? formatPublishedAt(tool.starsCapturedAt)
    : null;
  return captured
    ? `${exact} GitHub stars · snapshot ${captured}`
    : `${exact} GitHub stars`;
}
