import { buildCommit } from "@/lib/build-info";

export const prerender = true;

export function GET() {
  return new Response(
    JSON.stringify({ commit: buildCommit() }, null, 2) + "\n",
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  );
}
