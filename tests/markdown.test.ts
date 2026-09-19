import { describe, expect, it } from "vitest";

import { CATEGORIES, catalogDateModified, publishedVideos } from "@/lib/catalog";
import { PAGE_SIZE, listingPageCount } from "@/lib/directory";
import {
  aboutMarkdown,
  categoryMarkdown,
  contactMarkdown,
  developersMarkdown,
  homepageMarkdown,
  llmsFullText,
  notFoundMarkdown,
  privacyMarkdown,
  termsMarkdown,
  videoMarkdown,
} from "@/lib/markdown";
import { openApiSpec } from "@/lib/openapi";
import { homepageJsonLd } from "@/lib/schema";
import {
  HOMEPAGE_INTRO,
  META_DESCRIPTION_MAX,
  META_DESCRIPTION_MIN,
  SITE_META_DESCRIPTION,
  SITE_NAME,
  metaDescription,
} from "@/lib/site";

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
    expect(homepageMarkdown()).toContain("# What Ships");
    expect(homepageMarkdown()).toContain("When to use What Ships");
    expect(homepageMarkdown()).toContain("llms-full.txt");
    expect(homepageMarkdown()).toContain("Sources and quotations");
    expect(homepageMarkdown()).toContain("https://llmstxt.org/");
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
      termsMarkdown(),
      developersMarkdown(),
    ]) {
      expect(visibleText(body).length).toBeGreaterThan(500);
    }
    expect(developersMarkdown()).toContain("What Ships developer resources");
    expect(contactMarkdown()).toContain("Contact What Ships");
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
    expect(body).toContain("# What Ships full agent guide");
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
    expect(org?.name).toBe(SITE_NAME);
    expect(org?.alternateName).toEqual(["whatships.com", "whatships"]);
    const types = graph.map((node) => node["@type"]);
    expect(types).toContain("WebSite");
    expect(types).toContain("Organization");
    // FAQPage was removed: its content is no longer visible on the page
    // (Google requires matching on-page FAQ content), so keep it out.
    expect(types).not.toContain("FAQPage");
    expect(types).toContain("Article");
    // dateModified tracks the newest catalog change, not a hardcoded date.
    expect(graph.find((node) => node["@type"] === "CollectionPage")).toMatchObject({
      dateModified: catalogDateModified(publishedVideos),
      speakable: { "@type": "SpeakableSpecification" },
    });
    expect(catalogDateModified(publishedVideos)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it("lists the newest entries on the homepage when given them", () => {
    const graph = homepageJsonLd(
      publishedVideos.slice(0, 3).map((video) => ({
        title: video.title,
        slug: video.slug,
        company: video.company,
        description: video.description,
      })),
    )["@graph"] as Array<Record<string, any>>;
    const home = graph.find((node) => node["@type"] === "CollectionPage");
    expect(home?.mainEntity?.["@type"]).toBe("ItemList");
    expect(home?.mainEntity?.itemListElement).toHaveLength(3);
    expect(home?.mainEntity?.itemListElement[0].item.url).toBe(
      `https://whatships.com/videos/${publishedVideos[0].slug}/`,
    );
  });
});

describe("category markdown pagination", () => {
  it("splits a category into PAGE_SIZE pages that link each other", () => {
    const ai = CATEGORIES.find((category) => category.id === "ai")!;
    const inCategory = publishedVideos.filter((video) => video.category === "ai");
    const totalPages = listingPageCount(inCategory.length);
    expect(totalPages).toBeGreaterThan(1);

    const first = categoryMarkdown(ai);
    expect(first).toContain("# AI startup launch videos — What Ships");
    expect(first).toContain("product launch videos");
    expect(first).toContain(`/videos/${inCategory[0].slug}/`);
    expect(first).not.toContain(`/videos/${inCategory[PAGE_SIZE].slug}/`);
    expect(first).toContain("https://whatships.com/videos/category/ai/2/");

    const second = categoryMarkdown(ai, publishedVideos, 2);
    expect(second).toContain("# AI startup launch videos — page 2 — What Ships");
    expect(second).toContain(`/videos/${inCategory[PAGE_SIZE].slug}/`);
    expect(second).not.toContain(`/videos/${inCategory[0].slug}/`);
  });
});

describe("SEO meta descriptions", () => {
  it("keeps the homepage meta description in the 140-160 window", () => {
    expect(SITE_META_DESCRIPTION.length).toBeGreaterThanOrEqual(
      META_DESCRIPTION_MIN,
    );
    expect(SITE_META_DESCRIPTION.length).toBeLessThanOrEqual(
      META_DESCRIPTION_MAX,
    );
  });

  it("clamps long and short copy into the SEO window", () => {
    const longCopy = metaDescription(`${"Launch video directory ".repeat(20)}`);
    const shortCopy = metaDescription("A short directory blurb.");
    expect(longCopy.length).toBeGreaterThanOrEqual(META_DESCRIPTION_MIN);
    expect(longCopy.length).toBeLessThanOrEqual(META_DESCRIPTION_MAX);
    expect(shortCopy.length).toBeGreaterThanOrEqual(META_DESCRIPTION_MIN);
    expect(shortCopy.length).toBeLessThanOrEqual(META_DESCRIPTION_MAX);
  });
});

describe("OpenAPI", () => {
  it("names whatships.com in the spec title", () => {
    const spec = openApiSpec();
    expect(spec.openapi).toBe("3.1.0");
    expect(spec.info.title).toBe("What Ships developer resources");
    expect(spec.paths["/search-index.json"]).toBeTruthy();
    expect(spec.paths["/openapi.json"]).toBeTruthy();
    expect(spec.paths["/llms-full.txt"]).toBeTruthy();
  });
});
