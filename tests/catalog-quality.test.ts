import { describe, expect, it } from "vitest";

import backlog from "@/data/quality-backlog.json";
import { publishedVideos } from "@/lib/catalog";
import {
  catalogQualityIssues,
  realTags,
} from "../scripts/catalog-quality.mjs";

const base = {
  slug: "paper-getting-started",
  title: "Paper — start from site, Figma, or codebase",
  description: "Getting started in Paper from your live site or codebase.",
  tags: ["paper", "design"],
};

describe("catalogQualityIssues", () => {
  it("passes a hand-written entry", () => {
    expect(catalogQualityIssues(base)).toEqual([]);
  });

  it("flags truncated post text in title and description", () => {
    expect(
      catalogQualityIssues({
        ...base,
        title: "Sonic 2.0 — We've raised a $64M Series A led by…",
        description: "We've raised a $64M Series A led by @kleinerperkins...",
      }),
    ).toEqual(["title-truncated", "description-truncated"]);
  });

  it("flags titles over 55 characters and missing descriptions", () => {
    expect(
      catalogQualityIssues({ ...base, title: "x".repeat(56), description: "" }),
    ).toEqual(["title-too-long", "description-missing"]);
  });

  it("does not count source tags or the slug as tags", () => {
    const entry = {
      ...base,
      tags: ["paper-getting-started", "launchgallery", "auto-discovery", "ai"],
    };
    expect(realTags(entry)).toEqual(["ai"]);
    expect(catalogQualityIssues(entry)).toEqual(["tags-thin"]);
  });
});

describe("catalog quality gate", () => {
  const listed = new Set<string>(backlog);

  it("holds every published entry outside the backlog to the bar", () => {
    const failures = publishedVideos
      .filter((video) => !listed.has(video.slug))
      .map((video) => [video.slug, catalogQualityIssues(video)] as const)
      .filter(([, issues]) => issues.length > 0)
      .map(([slug, issues]) => `${slug}: ${issues.join(", ")}`);
    expect(failures).toEqual([]);
  });

  it("only lists published entries that still fail (fixed ones must leave)", () => {
    const bySlug = new Map(publishedVideos.map((video) => [video.slug, video]));
    const stale = backlog.filter((slug) => {
      const video = bySlug.get(slug);
      return !video || catalogQualityIssues(video).length === 0;
    });
    expect(stale).toEqual([]);
  });

  it("keeps the backlog sorted and unique", () => {
    expect(backlog).toEqual([...new Set(backlog)].sort());
  });
});
