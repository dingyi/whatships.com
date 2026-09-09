import { buildSearchIndex } from "@/lib/search-index";

export const prerender = true;

export function GET() {
  return new Response(JSON.stringify(buildSearchIndex()), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
