import { describe, expect, it } from "vitest";

import {
  CATEGORIES,
  formatViews,
  formatViewsCount,
  formatViewsDetail,
  formatViewsLabel,
  getSimilarVideos,
  publishedVideos,
  type LaunchVideo,
} from "@/lib/catalog";

describe("catalog", () => {
  it("only exposes published videos sorted by recency", () => {
    expect(publishedVideos.length).toBeGreaterThan(0);
    expect(publishedVideos.every((video) => video.status === "published")).toBe(
      true,
    );

    for (let index = 1; index < publishedVideos.length; index += 1) {
      const previous = Date.parse(publishedVideos[index - 1].publishedAt);
      const current = Date.parse(publishedVideos[index].publishedAt);
      expect(previous).toBeGreaterThanOrEqual(current);
    }
  });

  it("returns similar videos preferring the same category", () => {
    const seed = publishedVideos.find(
      (video) => video.category === "ai",
    ) as LaunchVideo;
    const similar = getSimilarVideos(seed, publishedVideos, 3);
    expect(similar).toHaveLength(3);
    expect(similar.every((video) => video.slug !== seed.slug)).toBe(true);
    expect(similar.some((video) => video.category === seed.category)).toBe(
      true,
    );
  });

  it("keeps unique slugs", () => {
    const slugs = publishedVideos.map((video) => video.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("files every published entry under a real category page", () => {
    const known = new Set<string>(CATEGORIES.map((category) => category.id));
    const strays = publishedVideos
      .filter((video) => !known.has(video.category))
      .map((video) => `${video.slug} → ${video.category}`);
    expect(strays).toEqual([]);
  });
});

describe("view snapshots", () => {
  it("formats a compact number for the card chip", () => {
    expect(formatViews(999)).toBe("999");
    expect(formatViews(101342)).toBe("101.3K");
    expect(formatViews(1118904)).toBe("1.1M");
    expect(formatViews(62143001)).toBe("62.1M");
    expect(formatViews(0)).toBe("0");
  });

  it("returns null instead of a fake number when the snapshot is missing", () => {
    expect(formatViews(null)).toBeNull();
    expect(formatViews(undefined)).toBeNull();
    expect(formatViews(Number.NaN)).toBeNull();
    expect(formatViews(-1)).toBeNull();
    expect(formatViewsLabel({ views: null })).toBeNull();
    expect(formatViewsCount(undefined)).toBeNull();
    expect(formatViewsDetail({ views: undefined })).toBeNull();
  });

  it("spells out the exact count and capture date for tooltips", () => {
    expect(formatViewsLabel({ views: 1118904 })).toBe("1.1M views");
    expect(formatViewsCount(1118904)).toBe("1,118,904");
    expect(
      formatViewsDetail({
        views: 1118904,
        viewsCapturedAt: "2026-09-15T02:14:00.000Z",
      }),
    ).toBe("1,118,904 views on X · snapshot Sep 15, 2026");
    expect(formatViewsDetail({ views: 1118904 })).toBe(
      "1,118,904 views on X",
    );
  });

  it("never stores a count without the moment it was read", () => {
    for (const video of publishedVideos) {
      if (typeof video.views === "number") {
        // A count is meaningless without its capture moment.
        expect(typeof video.viewsCapturedAt).toBe("string");
        expect(video.views).toBeGreaterThanOrEqual(0);
      } else {
        // Unread entries have no field at all; a read that yielded nothing
        // stores null (with a stamp) rather than a placeholder number.
        expect(video.views == null).toBe(true);
      }
    }
  });

  it("stamps entries the provider had no count for", () => {
    const unreadable = publishedVideos.filter((video) => video.views === null);
    // Deleted posts and withheld metrics are a known minority; if this ever
    // swallows the catalog, the provider changed and the chip went dark.
    expect(unreadable.length).toBeLessThan(25);
    for (const video of unreadable) {
      expect(typeof video.viewsCapturedAt).toBe("string");
    }
  });
});
