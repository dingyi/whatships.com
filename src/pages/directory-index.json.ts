import { publishedVideos } from "@/lib/catalog";
import { toDirectoryVideo } from "@/lib/directory";

export const prerender = true;

export function GET() {
  return new Response(JSON.stringify(publishedVideos.map(toDirectoryVideo)), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
