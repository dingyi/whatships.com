import { describe, expect, it } from "vitest";

import { publishedVideos } from "@/lib/catalog";
import {
  aboutMarkdown,
  contactMarkdown,
  developersMarkdown,
  homepageMarkdown,
  llmsFullText,
  notFoundMarkdown,
  privacyMarkdown,
  videoMarkdown,
} from "@/lib/markdown";
import { openApiSpec } from "@/lib/openapi";
import { homepageJsonLd } from "@/lib/schema";
import { HOMEPAGE_INTRO, SITE_NAME } from "@/lib/site";

function visibleText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("agent-facing copy", () => {
  it("keeps homepage intro over 500 characters with the brand name", () => {
    expect(HOMEPAGE_INTRO.length).toBeGreaterThan(500);
    expect(HOMEPAGE_INTRO).toContain(SITE_NAME);
    expect(homepageMarkdown()).toContain("# whatships.com");
    expect(homepageMarkdown()).toContain("When to use whatships.com");
    expect(homepageMarkdown()).toContain("llms-full.txt");
    expect(homepageMarkdown()).toContain(publishedVideos[0].title);
  });

  it("gives 404 markdown recovery links", () => {
    const body = notFoundMarkdown();
    expect(body).toMatch(/^# Not found/m);
    expect(body).toContain("https://whatships.com/sitemap.xml");
    expect(body).toContain("https://whatships.com/llms.txt");
    expect(body).toContain("https://whatships.com/developers/");
  });

  it("keeps trust and developer pages over 500 characters", () => {
    for (const body of [
      aboutMarkdown(),
      contactMarkdown(),
      privacyMarkdown(),
      developersMarkdown(),
    ]) {
      expect(visibleText(body).length).toBeGreaterThan(500);
    }
    expect(developersMarkdown()).toContain("whatships.com developer resources");
    expect(contactMarkdown()).toContain("Contact whatships.com");
  });

  it("emits a per-video markdown page with original post link", () => {
    const video = publishedVideos[0];
    const body = videoMarkdown(video);
    expect(body).toContain(`# ${video.title}`);
    expect(body).toContain(video.tweetUrl);
    expect(body).toContain(`/videos/${video.slug}/`);
  });

  it("emits a full llms guide with citation and schema guidance", () => {
    const body = llmsFullText();
    expect(body).toContain("# whatships.com full agent guide");
    expect(body).toContain("Last modified: 2026-08-27");
    expect(body).toContain("Citation policy");
    expect(body).toContain("FAQ");
    expect(body).toContain(publishedVideos[0].tweetUrl);
  });
});

describe("structured data", () => {
  it("includes Organization identity with contactPoint", () => {
    const graph = homepageJsonLd()["@graph"] as Array<
      Record<string, unknown>
    >;
    const org = graph.find((node) => node["@type"] === "Organization");
    expect(org).toMatchObject({
      name: SITE_NAME,
      url: "https://whatships.com/",
    });
    expect(org?.contactPoint).toMatchObject({
      "@type": "ContactPoint",
      contactType: "editorial inquiries",
      url: "https://whatships.com/contact/",
    });
    const types = graph.map((node) => node["@type"]);
    expect(types).toContain("WebSite");
    expect(types).toContain("Organization");
    expect(types).toContain("FAQPage");
    expect(types).toContain("Article");
    expect(graph.find((node) => node["@type"] === "CollectionPage")).toMatchObject({
      dateModified: "2026-08-27",
      speakable: { "@type": "SpeakableSpecification" },
    });
  });
});

describe("OpenAPI", () => {
  it("names whatships.com in the spec title", () => {
    const spec = openApiSpec();
    expect(spec.openapi).toBe("3.1.0");
    expect(spec.info.title).toBe("whatships.com developer resources");
    expect(spec.paths["/search-index.json"]).toBeTruthy();
    expect(spec.paths["/openapi.json"]).toBeTruthy();
    expect(spec.paths["/llms-full.txt"]).toBeTruthy();
  });
});
