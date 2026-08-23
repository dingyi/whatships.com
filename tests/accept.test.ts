import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import {
  appendVaryAccept,
  HTML_TYPE,
  markdownAssetPath,
  MARKDOWN_TYPE,
  preferredType,
  shouldPassthrough,
} from "@/lib/accept";

describe("preferredType", () => {
  it("serves markdown when Accept prefers it", () => {
    expect(preferredType("text/markdown")).toBe(MARKDOWN_TYPE);
    expect(preferredType("text/markdown, text/html;q=0.8")).toBe(MARKDOWN_TYPE);
    expect(
      preferredType("text/markdown, text/html, */*"),
    ).toBe(MARKDOWN_TYPE);
  });

  it("serves HTML for browsers and unconstrained clients", () => {
    expect(preferredType(null)).toBe(HTML_TYPE);
    expect(preferredType("")).toBe(HTML_TYPE);
    expect(preferredType("*/*")).toBe(HTML_TYPE);
    expect(
      preferredType(
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      ),
    ).toBe(HTML_TYPE);
  });

  it("honors q=0 rejections and returns null when nothing matches", () => {
    expect(preferredType("text/markdown;q=0, text/html")).toBe(HTML_TYPE);
    expect(preferredType("text/markdown;q=0", [MARKDOWN_TYPE])).toBeNull();
    expect(preferredType("application/pdf")).toBeNull();
  });
});

describe("markdownAssetPath", () => {
  it("maps directory URLs to index.md siblings", () => {
    expect(markdownAssetPath("/")).toBe("/index.md");
    expect(markdownAssetPath("/about/")).toBe("/about/index.md");
    expect(markdownAssetPath("/videos/foo")).toBe("/videos/foo/index.md");
  });
});

describe("appendVaryAccept", () => {
  it("adds Accept and Accept-Encoding without duplicating", () => {
    const headers = new Headers({ Vary: "Accept-Encoding" });
    appendVaryAccept(headers);
    expect(headers.get("Vary")).toBe("Accept-Encoding, Accept");
    appendVaryAccept(headers);
    expect(headers.get("Vary")).toBe("Accept-Encoding, Accept");
  });
});

describe("shouldPassthrough", () => {
  it("skips negotiation for static assets", () => {
    expect(shouldPassthrough("/posters/foo.webp")).toBe(true);
    expect(shouldPassthrough("/llms.txt")).toBe(true);
    expect(shouldPassthrough("/openapi.json")).toBe(true);
    expect(shouldPassthrough("/about/")).toBe(false);
  });
});

describe("llms.txt", () => {
  const body = readFileSync("public/llms.txt", "utf8");

  it("includes when-to-use guidance and developer URLs", () => {
    expect(body).toMatch(/## When to use whatships\.com/);
    expect(body).toContain("Look up the launch film");
    expect(body).toContain("https://whatships.com/developers/");
    expect(body).toContain("https://whatships.com/openapi.json");
    expect(body).toContain("https://whatships.com/contact/");
  });
});
