import { sitemapXml } from "@/lib/sitemap";

export const GET = () =>
  new Response(sitemapXml(), {
    headers: { "Content-Type": "application/xml" },
  });
