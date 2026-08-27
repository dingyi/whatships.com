import { llmsFullText } from "@/lib/markdown";

export const prerender = true;

export function GET() {
  return new Response(llmsFullText(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
