import { describe, expect, it } from "vitest";

import { buildCommit } from "@/lib/build-info";

describe("build identity", () => {
  it("reports the commit the build was made from", () => {
    expect(buildCommit({ GITHUB_SHA: "abc123" })).toBe("abc123");
  });

  it("falls back to a marker when no commit is available", () => {
    expect(buildCommit({})).toBe("unknown");
  });
});
