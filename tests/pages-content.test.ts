import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

function proseFromAstro(path: string): string {
  const source = readFileSync(path, "utf8");
  const withoutFrontmatter = source.replace(/^---[\s\S]*?---/, "");
  return withoutFrontmatter
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[\s\S]*?\}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("trust and developer pages", () => {
  it("keeps about, contact, privacy, terms, and developers over 500 characters", () => {
    const pages = [
      "src/pages/about.astro",
      "src/pages/contact.astro",
      "src/pages/privacy.astro",
      "src/pages/terms.astro",
      "src/pages/developers.astro",
    ];
    for (const page of pages) {
      expect(proseFromAstro(page).length, page).toBeGreaterThan(500);
    }
  });

  it("puts homepage crawler copy outside the HomeApp island", () => {
    const source = readFileSync("src/pages/index.astro", "utf8");
    expect(source).toContain('data-agent-intro');
    expect(source).toContain("<h1>");
    expect(source).toContain("HOMEPAGE_INTRO");
    const islandIndex = source.indexOf("<HomeApp");
    const introIndex = source.indexOf("data-agent-intro");
    expect(introIndex).toBeGreaterThan(0);
    expect(introIndex).toBeLessThan(islandIndex);
  });

  it("names whatships in the developers heading and title", () => {
    const source = readFileSync("src/pages/developers.astro", "utf8");
    expect(source).toContain("whatships.com developer resources");
  });

  it("allows public AI crawlers and advertises full llms guidance", () => {
    const source = readFileSync("public/robots.txt", "utf8");
    expect(source).toContain("Allow: /");
    expect(source).toContain("Disallow: /admin");
    expect(source).toContain("https://whatships.com/llms-full.txt");
    expect(source).not.toMatch(/User-agent: GPTBot\s+Disallow: \//);
    expect(source).not.toMatch(/User-agent: ClaudeBot\s+Disallow: \//);
  });

  it("keeps a single homepage H1 and cites named sources", () => {
    const index = readFileSync("src/pages/index.astro", "utf8");
    const homeApp = readFileSync("src/components/HomeApp.tsx", "utf8");
    const footer = readFileSync("src/components/SiteFooter.astro", "utf8");
    const layout = readFileSync("src/layouts/BaseLayout.astro", "utf8");
    expect(index.match(/<h1[\s>]/g)?.length).toBe(1);
    expect(homeApp).not.toContain("<h1");
    expect(homeApp).toContain('alt={`Poster for ${video.title}`}');
    expect(index).toContain("client:idle");
    expect(index).toContain("firstPage");
    expect(index).toContain("rel=\"preload\"");
    expect(index).not.toContain("videos={publishedVideos}");
    expect(index).toContain("blockquote");
    expect(index).toContain("<SiteSources");
    expect(readFileSync("src/components/SiteSources.astro", "utf8")).toContain(
      "GEO_CITATIONS",
    );
    expect(readFileSync("src/lib/site.ts", "utf8")).toContain(
      "https://llmstxt.org/",
    );
    expect(footer).toContain("/privacy/");
    expect(footer).toContain("/terms/");
    expect(layout).toContain('hreflang="x-default"');
    expect(layout).toContain('og:site_name');
  });
});
