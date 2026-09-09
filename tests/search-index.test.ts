import { describe, expect, it } from "vitest";

import { publishedVideos } from "@/lib/catalog";
import {
  buildSearchIndex,
  filterSearchIndex,
  SEARCH_PER_KIND,
} from "@/lib/search-index";
import { publishedStudios } from "@/lib/studios";
import { publishedTools } from "@/lib/tools";

describe("buildSearchIndex", () => {
  const index = buildSearchIndex();

  it("includes every published video, tool, and studio", () => {
    expect(index.filter((item) => item.kind === "video")).toHaveLength(
      publishedVideos.length,
    );
    expect(index.filter((item) => item.kind === "tool")).toHaveLength(
      publishedTools.length,
    );
    expect(index.filter((item) => item.kind === "studio")).toHaveLength(
      publishedStudios.length,
    );
  });

  it("points each kind at its catalog destination", () => {
    const osmo = index.find((item) => item.slug === "osmo");
    expect(osmo).toMatchObject({
      kind: "tool",
      href: "/tools/#tool-osmo",
    });

    const pixelframe = index.find((item) => item.slug === "pixelframe");
    expect(pixelframe).toMatchObject({
      kind: "studio",
      href: "/studios/#studio-pixelframe",
    });

    const video = index.find((item) => item.kind === "video");
    expect(video?.href).toBe(`/videos/${video?.slug}/`);
  });
});

describe("filterSearchIndex", () => {
  const index = buildSearchIndex();

  it("returns nothing for an empty query", () => {
    expect(filterSearchIndex(index, "   ")).toEqual([]);
  });

  it("finds tools and studios, not only videos", () => {
    const tools = filterSearchIndex(index, "osmo");
    expect(tools.some((item) => item.kind === "tool" && item.slug === "osmo")).toBe(
      true,
    );

    const studios = filterSearchIndex(index, "pixelframe");
    expect(
      studios.some((item) => item.kind === "studio" && item.slug === "pixelframe"),
    ).toBe(true);
  });

  it("keeps a mix of kinds instead of filling the list with videos", () => {
    const hits = filterSearchIndex(index, "ai");
    const videoCount = hits.filter((item) => item.kind === "video").length;
    const otherCount = hits.filter((item) => item.kind !== "video").length;
    expect(videoCount).toBeLessThanOrEqual(SEARCH_PER_KIND);
    expect(otherCount).toBeGreaterThan(0);
  });
});
