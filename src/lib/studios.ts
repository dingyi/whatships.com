import studiosData from "../data/studios.json";

export interface LaunchStudio {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  xHandle?: string;
  poster: string;
}

export const publishedStudios = studiosData as LaunchStudio[];

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
