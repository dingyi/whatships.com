import { describe, expect, it } from "vitest";
import { WAFFO_PRODUCTS, buildWaffoCheckoutUrl } from "@/lib/waffo";

describe("Waffo configuration", () => {
  it("defines fast-track and sponsor products", () => {
    expect(WAFFO_PRODUCTS.fastTrack.id).toBe("fast-track-review");
    expect(WAFFO_PRODUCTS.fastTrack.price).toBe("$29");
    expect(WAFFO_PRODUCTS.fastTrack.checkoutUrl).toBeTruthy();

    expect(WAFFO_PRODUCTS.sponsor.id).toBe("community-sponsor");
    expect(WAFFO_PRODUCTS.sponsor.price).toBe("$10");
    expect(WAFFO_PRODUCTS.sponsor.checkoutUrl).toBeTruthy();
  });

  it("builds checkout url with query metadata", () => {
    const url = buildWaffoCheckoutUrl("https://pancake.waffo.ai/checkout/test", {
      orderId: "ord-123",
      product: "Linear Loops",
      tweetUrl: "https://x.com/linear/status/123",
    });

    const parsed = new URL(url);
    expect(parsed.searchParams.get("order_id")).toBe("ord-123");
    expect(parsed.searchParams.get("product_name")).toBe("Linear Loops");
    expect(parsed.searchParams.get("source_url")).toBe("https://x.com/linear/status/123");
  });

  it("returns base url gracefully on malformed url", () => {
    const fallback = buildWaffoCheckoutUrl("invalid-url", { orderId: "123" });
    expect(fallback).toBe("invalid-url");
  });
});
