/**
 * Waffo Pancake Payment Integration (Plan A: Lightweight hosted checkout)
 * 
 * Configures product links and checkout utilities for Waffo (https://www.waffo.ai).
 * Allows creators to optionally fast-track their launch video submissions or sponsor the directory.
 */

export interface WaffoProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  checkoutUrl: string;
}

/**
 * Default product configurations.
 * In production, `PUBLIC_WAFFO_FAST_TRACK_URL` or `PUBLIC_WAFFO_SPONSOR_URL`
 * can override the checkout URLs.
 */
export const WAFFO_PRODUCTS = {
  fastTrack: {
    id: "fast-track-review",
    name: "Fast-Track Editorial Review",
    description: "Guaranteed 24-hour review and priority placement in the weekly discovery batch.",
    price: "$29",
    checkoutUrl:
      import.meta.env.PUBLIC_WAFFO_FAST_TRACK_URL ||
      "https://pancake.waffo.ai/checkout/whatships-fast-track",
  },
  sponsor: {
    id: "community-sponsor",
    name: "Community Sponsor",
    description: "Support independent, ad-free curation and maintenance of whatships.com.",
    price: "$10",
    checkoutUrl:
      import.meta.env.PUBLIC_WAFFO_SPONSOR_URL ||
      "https://pancake.waffo.ai/checkout/whatships-sponsor",
  },
} as const;

/**
 * Builds a Waffo checkout URL appending client tracking/order metadata if needed.
 */
export function buildWaffoCheckoutUrl(
  baseCheckoutUrl: string,
  metadata?: {
    orderId?: string;
    product?: string;
    tweetUrl?: string;
  },
): string {
  try {
    const url = new URL(baseCheckoutUrl);
    if (metadata?.orderId) {
      url.searchParams.set("order_id", metadata.orderId);
    }
    if (metadata?.product) {
      url.searchParams.set("product_name", metadata.product);
    }
    if (metadata?.tweetUrl) {
      url.searchParams.set("source_url", metadata.tweetUrl);
    }
    return url.toString();
  } catch {
    return baseCheckoutUrl;
  }
}
