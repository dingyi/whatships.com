import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { ASK_AI_LINKS, ASK_AI_PROMPT } from "@/lib/site";

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

  it("keeps a single homepage H1 and no visible SEO-padding block", () => {
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
    // GEO filler (quotations blockquote wall + agent FAQ dump) must stay out
    // of the homepage; machine-facing surfaces (llms.txt, JSON-LD, markdown)
    // carry that content instead.
    expect(index).not.toContain("SiteSources");
    expect(index).not.toContain("GEO_CITATIONS");
    expect(index).not.toContain("GEO_FAQS");
    expect(index).not.toContain("blockquote");
    expect(readFileSync("src/lib/site.ts", "utf8")).toContain(
      "https://llmstxt.org/",
    );
    expect(footer).toContain("/privacy/");
    expect(footer).toContain("/terms/");
    expect(footer).toContain("Ask about whatships on");
    expect(footer).toContain("Ask an AI about whatships.com");
    expect(layout).toContain('hreflang="x-default"');
    expect(layout).toContain('og:site_name');
  });

  it("footer ask-AI links prefill a prompt that starts from llms.txt", () => {
    expect(ASK_AI_PROMPT).toContain("https://whatships.com/llms.txt");
    expect(ASK_AI_LINKS.map((ai) => ai.id)).toEqual([
      "chatgpt",
      "claude",
      "perplexity",
      "gemini",
      "grok",
    ]);
    expect(ASK_AI_LINKS[0].href).toMatch(/^https:\/\/chatgpt\.com\/\?q=/);
    expect(ASK_AI_LINKS[1].href).toMatch(/^https:\/\/claude\.ai\/new\?q=/);
    expect(ASK_AI_LINKS[2].href).toMatch(
      /^https:\/\/www\.perplexity\.ai\/search\?q=/,
    );
    expect(ASK_AI_LINKS[3].href).toMatch(
      /^https:\/\/www\.google\.com\/search\?udm=50&q=/,
    );
    expect(ASK_AI_LINKS[4].href).toMatch(/^https:\/\/grok\.com\/\?q=/);
    for (const ai of ASK_AI_LINKS) {
      expect(decodeURIComponent(ai.href)).toContain(
        "https://whatships.com/llms.txt",
      );
    }
  });
});
