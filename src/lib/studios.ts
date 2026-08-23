import studiosData from "../data/studios.json";

export const STUDIO_KINDS = [
  { id: "studio", label: "Studio" },
  { id: "person", label: "Person" },
] as const;

export type StudioKindId = (typeof STUDIO_KINDS)[number]["id"];

export interface LaunchStudio {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  kind: StudioKindId;
  xHandle?: string;
  poster: string;
}

export const publishedStudios = studiosData as LaunchStudio[];

export function studioKindLabel(kind: StudioKindId) {
  return STUDIO_KINDS.find((item) => item.id === kind)?.label ?? kind;
}

export function studioHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function gridPoster(poster: string) {
  return poster.replace(/\.webp$/, "-960.webp");
}
