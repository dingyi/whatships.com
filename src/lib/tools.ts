import toolsData from "../data/tools.json";

export const TOOL_CATEGORIES = [
  { id: "ai", label: "AI" },
  { id: "editor", label: "Editor" },
  { id: "motion", label: "Motion" },
  { id: "mockup", label: "Mockup" },
  { id: "templates", label: "Templates" },
  { id: "skills", label: "Skills" },
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
