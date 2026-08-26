import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import {
  STUDIO_KINDS,
  gridPoster,
  publishedStudios,
  studioHost,
  studioKindLabel,
} from "@/lib/studios";

const kindIds = new Set(STUDIO_KINDS.map((item) => item.id));
const postersRoot = path.resolve(process.cwd(), "public");

describe("publishedStudios", () => {
  it("keeps unique ids and slugs", () => {
    const ids = publishedStudios.map((studio) => studio.id);
    const slugs = publishedStudios.map((studio) => studio.slug);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("requires a complete catalog record for every studio or person", () => {
    expect(publishedStudios.length).toBeGreaterThan(0);

    for (const studio of publishedStudios) {
      expect(studio.id).toMatch(/^(studio|person)-/);
      expect(studio.id.startsWith(`${studio.kind}-`)).toBe(true);
      expect(studio.slug).toMatch(/^[a-z0-9-]+$/);
      expect(studio.name.length).toBeGreaterThan(0);
      expect(studio.tagline.length).toBeLessThanOrEqual(55);
      expect(studio.description.length).toBeGreaterThan(20);
      expect(kindIds.has(studio.kind)).toBe(true);
      expect(() => new URL(studio.url)).not.toThrow();
      expect(studio.poster).toMatch(/^\/posters\/studios\/.+\.webp$/);
      expect(existsSync(path.join(postersRoot, studio.poster))).toBe(true);
      expect(
        existsSync(path.join(postersRoot, gridPoster(studio.poster))),
      ).toBe(true);
      if (studio.xHandle) {
        expect(studio.xHandle).toMatch(/^[A-Za-z0-9_]{1,15}$/);
      }
    }
  });
});

describe("studio helpers", () => {
  it("labels known kinds and falls back to the raw id", () => {
    expect(studioKindLabel("studio")).toBe("Studio");
    expect(studioKindLabel("person")).toBe("Designers");
    expect(studioKindLabel("unknown" as never)).toBe("unknown");
  });

  it("strips www from studio hosts", () => {
    expect(studioHost("https://www.pixelframe.co/")).toBe("pixelframe.co");
    expect(studioHost("https://mouad.work/")).toBe("mouad.work");
    expect(studioHost("not-a-url")).toBe("not-a-url");
  });

  it("derives the grid poster from the 1440w file", () => {
    expect(gridPoster("/posters/studios/pixelframe.webp")).toBe(
      "/posters/studios/pixelframe-960.webp",
    );
  });
});
