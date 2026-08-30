import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import {
  gridPoster,
  publishedTools,
  TOOL_CATEGORIES,
  toolCategoryLabel,
  toolHost,
} from "@/lib/tools";

const categoryIds = new Set(TOOL_CATEGORIES.map((item) => item.id));
const postersRoot = path.resolve(process.cwd(), "public");

describe("publishedTools", () => {
  it("keeps unique ids and slugs", () => {
    const ids = publishedTools.map((tool) => tool.id);
    const slugs = publishedTools.map((tool) => tool.slug);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("requires a complete catalog record for every tool", () => {
    expect(publishedTools.length).toBeGreaterThan(0);

    for (const tool of publishedTools) {
      expect(tool.id).toMatch(/^tool-/);
      expect(tool.slug).toMatch(/^[a-z0-9-]+$/);
      expect(tool.name.length).toBeGreaterThan(0);
      expect(tool.tagline.length).toBeLessThanOrEqual(55);
      expect(tool.description.length).toBeGreaterThan(20);
      expect(categoryIds.has(tool.category)).toBe(true);
      expect(() => new URL(tool.url)).not.toThrow();
      expect(tool.poster).toMatch(/^\/posters\/tools\/.+\.webp$/);
      expect(existsSync(path.join(postersRoot, tool.poster))).toBe(true);
      expect(
        existsSync(path.join(postersRoot, gridPoster(tool.poster))),
      ).toBe(true);
      if (tool.category === "skills") {
        expect(tool.install).toMatch(/^npx skills add \S+$/);
      }
    }
  });
});

describe("tool helpers", () => {
  it("labels known categories and falls back to the raw id", () => {
    expect(toolCategoryLabel("ai")).toBe("AI");
    expect(toolCategoryLabel("mockup")).toBe("Mockup");
    expect(toolCategoryLabel("skills")).toBe("Skills");
    expect(toolCategoryLabel("unknown" as never)).toBe("unknown");
  });

  it("strips www from tool hosts", () => {
    expect(toolHost("https://www.ultramock.io/")).toBe("ultramock.io");
    expect(toolHost("https://opencut.app/")).toBe("opencut.app");
    expect(toolHost("not-a-url")).toBe("not-a-url");
  });

  it("derives the grid poster from the 1440w file", () => {
    expect(gridPoster("/posters/tools/osmo.webp")).toBe(
      "/posters/tools/osmo-960.webp",
    );
  });
});
