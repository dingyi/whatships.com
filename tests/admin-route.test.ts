import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("admin route", () => {
  it("is not a public pages route", () => {
    expect(existsSync("src/pages/admin")).toBe(false);
    expect(existsSync("src/admin/index.astro")).toBe(true);
  });
});
