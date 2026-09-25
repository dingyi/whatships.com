import inboxData from "@/data/inbox.json";
import { normalizeInbox } from "@/lib/inbox";

export async function GET() {
  return new Response(JSON.stringify(normalizeInbox(inboxData)), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
