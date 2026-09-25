import {
  CATEGORIES,
  catalogDateModified,
  isThinEntry,
  publishedVideos,
  videoDateModified,
} from "@/lib/catalog";
import { listingPageCount, listingPagePath } from "@/lib/directory";

type SitemapEntry = { path: string; lastmod?: string | null };

/**
 * Every indexable HTML page plus the agent text surfaces. `lastmod` is only
 * emitted where the catalog can vouch for it (listings and entry pages);
 * hand-written pages omit it rather than claim a date nobody tracks.
 */
export function sitemapEntries(videos = publishedVideos): SitemapEntry[] {
  const catalogModified = catalogDateModified(videos);
  const entries: SitemapEntry[] = [
    { path: "/", lastmod: catalogModified },
    { path: "/about/" },
    { path: "/contact/" },
    { path: "/privacy/" },
    { path: "/terms/" },
    { path: "/developers/" },
    { path: "/tools/" },
    { path: "/studios/" },
    { path: "/submit/" },
    { path: "/vs/product-hunt/" },
  ];

  for (const category of CATEGORIES) {
    const inCategory = videos.filter((video) => video.category === category.id);
    if (inCategory.length === 0) continue;
    const basePath = `/videos/category/${category.id}/`;
    const lastmod = catalogDateModified(inCategory);
    for (let page = 1; page <= listingPageCount(inCategory.length); page += 1) {
      entries.push({ path: listingPagePath(basePath, page), lastmod });
    }
  }

  entries.push(
    { path: "/llms.txt" },
    { path: "/llms-full.txt", lastmod: catalogModified },
  );

  for (const video of videos) {
    if (isThinEntry(video)) continue;
    entries.push({
      path: `/videos/${video.slug}/`,
      lastmod: videoDateModified(video),
    });
  }

  return entries;
}

export function sitemapXml(entries = sitemapEntries()) {
  const base = "https://whatships.com";
  const urls = entries.map(({ path, lastmod }) =>
    lastmod
      ? `\n  <url><loc>${base}${path}</loc><lastmod>${lastmod}</lastmod></url>`
      : `\n  <url><loc>${base}${path}</loc></url>`,
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}\n</urlset>\n`;
}
