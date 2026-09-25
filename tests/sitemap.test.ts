import { describe, expect, it } from "vitest";

import {
  catalogDateModified,
  isThinEntry,
  publishedVideos,
  videoDateModified,
} from "@/lib/catalog";
import { listingPageCount } from "@/lib/directory";
import { sitemapEntries, sitemapXml } from "@/lib/sitemap";

describe("entry modification dates", () => {
  it("uses the newer of post date and view snapshot, as YYYY-MM-DD", () => {
    expect(
      videoDateModified({
        publishedAt: "2026-07-27T18:35:46.000Z",
        viewsCapturedAt: "2026-09-14T18:14:41.945Z",
      }),
    ).toBe("2026-09-14");
    expect(
      videoDateModified({
        publishedAt: "2026-07-27T18:35:46.000Z",
        viewsCapturedAt: null,
      }),
    ).toBe("2026-07-27");
    expect(
      videoDateModified({ publishedAt: "not a date", viewsCapturedAt: null }),
    ).toBeNull();
  });

  it("rolls a listing up to its newest entry change", () => {
    expect(
      catalogDateModified([
        { publishedAt: "2026-01-01T00:00:00Z", viewsCapturedAt: null },
        { publishedAt: "2026-03-01T00:00:00Z", viewsCapturedAt: "2026-02-01T00:00:00Z" },
      ]),
    ).toBe("2026-03-01");
    expect(catalogDateModified([])).toBeNull();
  });
});

describe("sitemap", () => {
  const entries = sitemapEntries();
  const paths = entries.map((entry) => entry.path);

  it("lists every indexable published entry with a lastmod", () => {
    const indexable = publishedVideos.filter((video) => !isThinEntry(video));
    for (const video of indexable.slice(0, 25)) {
      const entry = entries.find((item) => item.path === `/videos/${video.slug}/`);
      expect(entry, video.slug).toBeDefined();
      expect(entry?.lastmod).toBe(videoDateModified(video));
    }
    expect(paths.filter((path) => path.startsWith("/videos/") && !path.includes("/category/"))).toHaveLength(
      indexable.length,
    );
  });

  it("leaves thin entries out", () => {
    const thin = publishedVideos.filter(isThinEntry);
    expect(thin.length).toBeGreaterThan(0);
    for (const video of thin) {
      expect(paths).not.toContain(`/videos/${video.slug}/`);
    }
  });

  it("includes every paginated category page exactly once", () => {
    const ai = publishedVideos.filter((video) => video.category === "ai");
    const pages = listingPageCount(ai.length);
    expect(pages).toBeGreaterThan(1);
    expect(paths).toContain("/videos/category/ai/");
    expect(paths).toContain(`/videos/category/ai/${pages}/`);
    expect(paths).not.toContain(`/videos/category/ai/${pages + 1}/`);
    expect(paths).not.toContain("/videos/category/ai/1/");
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("keeps the agent surfaces and static pages", () => {
    for (const path of ["/", "/about/", "/developers/", "/vs/product-hunt/", "/llms.txt", "/llms-full.txt"]) {
      expect(paths).toContain(path);
    }
  });

  it("renders lastmod only where a date is known", () => {
    const xml = sitemapXml([
      { path: "/", lastmod: "2026-09-18" },
      { path: "/about/" },
    ]);
    expect(xml).toContain(
      "<url><loc>https://whatships.com/</loc><lastmod>2026-09-18</lastmod></url>",
    );
    expect(xml).toContain("<url><loc>https://whatships.com/about/</loc></url>");
    expect(xml).not.toContain("<lastmod></lastmod>");
  });
});
