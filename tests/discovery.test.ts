import { describe, expect, it } from "vitest";

import {
  buildCandidateDraft,
  buildDigestEmailSubject,
  buildDiscoveryIssueBody,
  evaluatePost,
  extractTweetIdFromIssueBody,
  hasVideoMedia,
  knownTweetIds,
  rankCandidates,
  scoreLaunchText,
  type DiscoveredPost,
  type WatchlistEntry,
} from "@/lib/discovery";

const readwise: WatchlistEntry = {
  handle: "readwise",
  company: "Readwise",
  category: "productivity",
  tags: ["reading"],
};

function post(partial: Partial<DiscoveredPost> & Pick<DiscoveredPost, "tweetId" | "text">): DiscoveredPost {
  return {
    tweetUrl: `https://x.com/readwise/status/${partial.tweetId}`,
    authorHandle: "readwise",
    authorName: "Readwise",
    createdAt: "2026-07-22T16:56:58.000Z",
    media: [
      {
        type: "video",
        durationMs: 60_000,
        videoUrl: "https://example.com/v.mp4",
      },
    ],
    metrics: { likeCount: 100, viewCount: 20_000 },
    ...partial,
  };
}

describe("scoreLaunchText", () => {
  it("scores launch language positively", () => {
    const result = scoreLaunchText(
      "Introducing Readwise 2.0 — rebuilt from the ground up.",
    );
    expect(result.score).toBeGreaterThan(20);
    expect(result.reasons.some((r) => r.startsWith("signal:"))).toBe(true);
  });

  it("penalizes hiring noise", () => {
    const result = scoreLaunchText("We're hiring a designer!");
    expect(result.score).toBeLessThan(0);
  });
});

describe("evaluatePost", () => {
  const now = new Date("2026-07-24T00:00:00.000Z");

  it("accepts a launch video on the watchlist", () => {
    const candidate = evaluatePost(
      post({
        tweetId: "1001",
        text: "Introducing Readwise 2.0. Now live.",
      }),
      readwise,
      { knownIds: new Set(), lookbackDays: 8, now },
    );
    expect(candidate).not.toBeNull();
    expect(candidate?.draft.status).toBe("draft");
    expect(candidate?.draft.videoUrl).toContain("example.com");
  });

  it("skips posts already in the catalog", () => {
    const candidate = evaluatePost(
      post({
        tweetId: "2079233260161323371",
        text: "Introducing Linear Loops",
      }),
      readwise,
      {
        knownIds: knownTweetIds([{ tweetId: "2079233260161323371" }]),
        lookbackDays: 8,
        now,
      },
    );
    expect(candidate).toBeNull();
  });

  it("skips posts without video", () => {
    const candidate = evaluatePost(
      post({
        tweetId: "1002",
        text: "Introducing something cool",
        media: [{ type: "photo", previewImageUrl: "https://example.com/p.jpg" }],
      }),
      readwise,
      { knownIds: new Set(), lookbackDays: 8, now },
    );
    expect(candidate).toBeNull();
  });

  it("skips old posts outside the lookback window", () => {
    const candidate = evaluatePost(
      post({
        tweetId: "1003",
        text: "Introducing an old launch",
        createdAt: "2026-01-01T00:00:00.000Z",
      }),
      readwise,
      { knownIds: new Set(), lookbackDays: 8, now },
    );
    expect(candidate).toBeNull();
  });
});

describe("hasVideoMedia", () => {
  it("detects video and gif", () => {
    expect(hasVideoMedia([{ type: "photo" }])).toBe(false);
    expect(hasVideoMedia([{ type: "video" }])).toBe(true);
    expect(hasVideoMedia([{ type: "animated_gif" }])).toBe(true);
  });
});

describe("draft + issue helpers", () => {
  it("builds a draft slug and issue marker", () => {
    const draft = buildCandidateDraft(
      post({
        tweetId: "2079973992077902283",
        text: "Introducing: Readwise 2.0.",
      }),
      readwise,
    );
    expect(draft.slug).toContain("readwise");
    expect(draft.status).toBe("draft");

    const body = buildDiscoveryIssueBody({
      post: post({
        tweetId: "2079973992077902283",
        text: "Introducing: Readwise 2.0.",
      }),
      watchlist: readwise,
      score: 42,
      reasons: ["has-video", "signal:introduc"],
      draft,
    });
    expect(extractTweetIdFromIssueBody(body)).toBe("2079973992077902283");
    expect(body).toContain("Review checklist");
  });

  it("never publishes truncated post text as draft copy", () => {
    const long = buildCandidateDraft(
      post({
        tweetId: "3",
        text: "We've raised a $64M Series A led by @kleinerperkins to build the platform for real-time voice AI. Try it https://t.co/x",
      }),
      readwise,
    );
    expect(long.title).toBe("Readwise — launch video");
    expect(long.description).toBe("");

    const short = buildCandidateDraft(
      post({ tweetId: "4", text: "Introducing Readwise 2.0.\nNow on iOS https://t.co/y" }),
      readwise,
    );
    expect(short.title).toBe("Introducing Readwise 2.0");
    expect(short.title).not.toMatch(/…$/);
  });

  it("names the product when Introducing runs past 55 characters", () => {
    const draft = buildCandidateDraft(
      post({
        tweetId: "2103920741481848861",
        authorName: "David",
        authorHandle: "dzhng",
        text: "Introducing jevgrep - a research agent CLI powered by jev from @typesafeai that reduces your coding agent cost by 40% (verified on SWE-bench)",
      }),
      {
        handle: "dzhng",
        company: "David",
        category: "other",
        tags: [],
      },
    );
    expect(draft.product).toBe("jevgrep");
    expect(draft.title).toBe("jevgrep — a research agent CLI powered by jev");
    expect(draft.title.length).toBeLessThanOrEqual(55);
    expect(draft.title).not.toMatch(/launch video/);
    expect(draft.description).toBe(
      "jevgrep is a research agent CLI powered by jev.",
    );
    expect(draft.description).not.toMatch(/…|\.\.\./);
  });

  it("names a product when Introducing uses a comma, colon, or a later line", () => {
    const comma = buildCandidateDraft(
      post({
        tweetId: "2104466656135204954",
        authorName: "Promise",
        authorHandle: "promiseeuler",
        text: "Introducing P37 Neuro, our open-source robot brain at @OntosWorld. For a while, we’ve been working on a question.",
      }),
      { handle: "promiseeuler", company: "Promise", category: "other", tags: [] },
    );
    expect(comma.title).toBe("P37 Neuro — our open-source robot brain");
    expect(comma.title).not.toMatch(/launch video/);
    expect(comma.product).toBe("P37 Neuro");

    const colon = buildCandidateDraft(
      post({
        tweetId: "2104721766690222087",
        authorName: "wabi",
        authorHandle: "wabi",
        text: "Introducing Wabi 2.0: a new kind of messenger that makes apps and gets things done for you.",
      }),
      { handle: "wabi", company: "wabi", category: "other", tags: [] },
    );
    expect(colon.title).toBe("Wabi 2.0 — a new kind of messenger");
    expect(colon.product).toBe("Wabi 2.0");

    const later = buildCandidateDraft(
      post({
        tweetId: "2104499965703905396",
        authorName: "dev",
        authorHandle: "dsllwn",
        text: "bring all your agents to one place\n\nintroducing Overlay: the control plane for your AI workforce",
      }),
      { handle: "dsllwn", company: "dev", category: "other", tags: [] },
    );
    expect(later.title).toBe("Overlay — the control plane for your AI workforce");
    expect(later.product).toBe("Overlay");
  });

  it("does not use a boast, a teaser line, or the next sentence as the name", () => {
    const generated = buildCandidateDraft(
      post({
        tweetId: "2101027385734783283",
        authorName: "Konstantin",
        text: "450K+ views. I didn’t touch the timeline once. This entire launch video was generated in Diffusion Studio. And the project is fully open source.",
      }),
      { handle: "konstantinpaulus", company: "Konstantin", category: "other", tags: [] },
    );
    expect(generated.title).toBe("Diffusion Studio");

    const emoji = buildCandidateDraft(
      post({
        tweetId: "2104272175138267557",
        authorName: "Wo Jake (Archived)",
        text: "Today, I'm launching a new powerful tool for AI-powered developers Introducing Agent Monitor 🔍 A free, open-source extension for IDEs that shows what your coding agents covered.",
      }),
      { handle: "woj4ke", company: "Wo Jake (Archived)", category: "other", tags: [] },
    );
    expect(emoji.title).toBe("Agent Monitor — a free, open-source extension for IDEs");
    expect(emoji.product).toBe("Agent Monitor");

    const checkout = buildCandidateDraft(
      post({
        tweetId: "2100666871754440975",
        authorName: "Framer",
        text: "Check out these 4 fun components you can build for your website with the Framer Agent. Prompts below.",
      }),
      { handle: "framer", company: "Framer", category: "design", tags: [] },
    );
    expect(checkout.title).toBe("4 fun components you can build for your website");
    expect(checkout.title.length).toBeLessThanOrEqual(55);

    const overrun = buildCandidateDraft(
      post({
        tweetId: "2104499965703905396",
        authorName: "dev",
        text: "introducing Overlay: the control plane for your AI workforce open source, self-hostable.",
      }),
      { handle: "dsllwn", company: "dev", category: "other", tags: [] },
    );
    expect(overrun.title).toBe("Overlay — the control plane");
  });

  it("ranks higher scores first", () => {
    const low = {
      post: post({ tweetId: "1", text: "x" }),
      watchlist: readwise,
      score: 10,
      reasons: [],
      draft: buildCandidateDraft(post({ tweetId: "1", text: "x" }), readwise),
    };
    const high = {
      ...low,
      score: 50,
      post: post({ tweetId: "2", text: "y" }),
      draft: buildCandidateDraft(post({ tweetId: "2", text: "y" }), readwise),
    };
    expect(rankCandidates([low, high])[0]?.score).toBe(50);
  });

  it("builds digest subjects", () => {
    expect(buildDigestEmailSubject([], "2026-07-22")).toContain("no new");
    const candidate = evaluatePost(
      post({
        tweetId: "55",
        text: "Introducing Widget Pro. Now available.",
      }),
      readwise,
      {
        knownIds: new Set(),
        lookbackDays: 30,
        now: new Date("2026-07-24T00:00:00.000Z"),
      },
    )!;
    expect(buildDigestEmailSubject([candidate], "2026-07-22")).toContain(
      "1 candidate",
    );
  });
});
