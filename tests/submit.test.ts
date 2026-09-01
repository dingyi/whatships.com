import { describe, expect, it } from "vitest";

import {
  buildCatalogDraft,
  buildGitHubIssueUrl,
  emptySubmission,
  hasSubmissionErrors,
  parseHttpUrl,
  parseSubmitKind,
  parseTweetUrl,
  parseXHandle,
  validateSubmission,
} from "@/lib/submit";

describe("parseTweetUrl", () => {
  it("accepts x.com and twitter.com status URLs", () => {
    expect(
      parseTweetUrl("https://x.com/linear/status/2079233260161323371"),
    ).toEqual({
      handle: "linear",
      tweetId: "2079233260161323371",
      tweetUrl: "https://x.com/linear/status/2079233260161323371",
    });
    expect(
      parseTweetUrl(
        "https://twitter.com/cursor_ai/status/2079993729532989500?s=20",
      )?.tweetId,
    ).toBe("2079993729532989500");
  });

  it("rejects non-status URLs", () => {
    expect(parseTweetUrl("https://x.com/linear")).toBeNull();
    expect(parseTweetUrl("not-a-url")).toBeNull();
  });
});

describe("parseSubmitKind", () => {
  it("accepts the four listing types and defaults to video", () => {
    expect(parseSubmitKind("tool")).toBe("tool");
    expect(parseSubmitKind("studio")).toBe("studio");
    expect(parseSubmitKind("designer")).toBe("designer");
    expect(parseSubmitKind("video")).toBe("video");
    expect(parseSubmitKind("nope")).toBe("video");
    expect(parseSubmitKind(null)).toBe("video");
  });
});

describe("parseHttpUrl / parseXHandle", () => {
  it("accepts http(s) URLs and X handles", () => {
    expect(parseHttpUrl("https://osmo.inc/")).toBe("https://osmo.inc/");
    expect(parseHttpUrl("javascript:alert(1)")).toBeNull();
    expect(parseXHandle("@Varcyyyy")).toBe("Varcyyyy");
    expect(parseXHandle("not a handle")).toBeNull();
    expect(parseXHandle("")).toBe("");
  });
});

describe("validateSubmission", () => {
  it("requires core video fields", () => {
    const errors = validateSubmission(emptySubmission());
    expect(hasSubmissionErrors(errors)).toBe(true);
    expect(errors.tweetUrl).toBeTruthy();
    expect(errors.product).toBeTruthy();
    expect(errors.company).toBeTruthy();
    expect(errors.videoCategory).toBeTruthy();
  });

  it("accepts a complete video submission", () => {
    const errors = validateSubmission({
      ...emptySubmission("video"),
      tweetUrl: "https://x.com/linear/status/2079233260161323371",
      product: "Linear Loops",
      company: "Linear",
      videoCategory: "productivity",
      title: "Linear Loops",
      description: "Recurring workflows",
    });
    expect(errors).toEqual({});
  });

  it("requires core tool fields and a public URL", () => {
    const empty = validateSubmission(emptySubmission("tool"));
    expect(empty.name).toBeTruthy();
    expect(empty.url).toBeTruthy();
    expect(empty.toolCategory).toBeTruthy();

    const errors = validateSubmission({
      ...emptySubmission("tool"),
      name: "Osmo",
      url: "https://osmo.inc/",
      toolCategory: "ai",
    });
    expect(errors).toEqual({});
  });

  it("requires studio and designer name + URL", () => {
    const studio = validateSubmission({
      ...emptySubmission("studio"),
      name: "Pixel Frame",
      url: "https://www.pixelframe.co/",
      xHandle: "@Varcyyyy",
    });
    expect(studio).toEqual({});

    const designer = validateSubmission({
      ...emptySubmission("designer"),
      name: "Mouad",
      url: "https://mouad.work/",
    });
    expect(designer).toEqual({});
  });
});

describe("buildCatalogDraft + issue URL", () => {
  it("builds a video draft entry and GitHub issue link", () => {
    const submission = {
      ...emptySubmission("video"),
      tweetUrl: "https://x.com/linear/status/2079233260161323371",
      product: "Linear Loops",
      company: "Linear",
      videoCategory: "productivity" as const,
    };
    const draft = buildCatalogDraft(submission);
    expect(draft && "status" in draft ? draft.status : null).toBe("draft");
    expect(draft && "tweetId" in draft ? draft.tweetId : null).toBe(
      "2079233260161323371",
    );
    expect(draft?.slug).toContain("linear-loops");

    const url = buildGitHubIssueUrl(submission);
    expect(url).toContain("https://github.com/dingyi/whatships.com/issues/new?");
    expect(url).toContain("Launch+video");
    expect(url).toContain("labels=submission");
  });

  it("builds a tool draft with skills install when present", () => {
    const submission = {
      ...emptySubmission("tool"),
      name: "Oil Motion",
      url: "https://github.com/oil-oil/oil-motion",
      toolCategory: "skills" as const,
      tagline: "Interactive web animations for agents",
      install: "npx skills add oil-oil/oil-motion",
    };
    const draft = buildCatalogDraft(submission);
    expect(draft).toMatchObject({
      id: "tool-oil-motion",
      category: "skills",
      install: "npx skills add oil-oil/oil-motion",
    });
    expect(buildGitHubIssueUrl(submission)).toContain("Tool%3A+Oil+Motion");
  });

  it("builds studio and designer drafts with the catalog kind", () => {
    const studio = buildCatalogDraft({
      ...emptySubmission("studio"),
      name: "Pixel Frame",
      url: "https://www.pixelframe.co/",
      xHandle: "Varcyyyy",
    });
    expect(studio).toMatchObject({
      id: "studio-pixel-frame",
      kind: "studio",
      xHandle: "Varcyyyy",
    });

    const designer = buildCatalogDraft({
      ...emptySubmission("designer"),
      name: "Mouad",
      url: "https://mouad.work/",
    });
    expect(designer).toMatchObject({
      id: "person-mouad",
      kind: "person",
    });
    expect(designer && "xHandle" in designer ? designer.xHandle : undefined).toBeUndefined();
    expect(buildGitHubIssueUrl({
      ...emptySubmission("designer"),
      name: "Mouad",
      url: "https://mouad.work/",
    })).toContain("Designer%3A+Mouad");
  });
});
