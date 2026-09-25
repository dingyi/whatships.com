import {
  appendVaryAccept,
  HTML_TYPE,
  markdownAssetPath,
  MARKDOWN_TYPE,
  preferredType,
  PRODUCES,
  shouldPassthrough,
} from "../../../src/lib/accept";
import { NOT_FOUND_MARKDOWN } from "../../../src/lib/site";
import redirects from "../../../src/data/redirects.json";

/** Retired entry URLs (merged duplicates) → the entry that replaced them. */
const REDIRECTS: Record<string, string> = redirects;

export interface Env {
  ASSETS: {
    fetch: (
      input: RequestInfo | URL,
      init?: RequestInit,
    ) => Promise<Response>;
  };
}

const MARKDOWN_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  "Cache-Control": "public, max-age=0, must-revalidate",
};

function withAssetCache(pathname: string, response: Response): Response {
  if (response.status !== 200) return response;
  const headers = new Headers(response.headers);
  if (pathname.startsWith("/_astro/")) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  } else if (
    pathname.startsWith("/posters/") ||
    /\.(?:woff2|webp)$/i.test(pathname)
  ) {
    headers.set("Cache-Control", "public, max-age=604800");
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function withVary(response: Response): Response {
  const headers = new Headers(response.headers);
  appendVaryAccept(headers);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function markdownResponse(body: string, status = 200): Response {
  const headers = new Headers(MARKDOWN_HEADERS);
  appendVaryAccept(headers);
  return new Response(body, { status, headers });
}

function notAcceptable(accept: string): Response {
  const headers = new Headers({
    "Content-Type": "text/plain; charset=utf-8",
    "Cache-Control": "no-store",
  });
  appendVaryAccept(headers);
  return new Response(
    `Not Acceptable\n\nThis resource is available in:\n- text/html\n- text/markdown\n\nYou requested: ${accept}\n`,
    { status: 406, headers },
  );
}

/**
 * Correlate events for one request. Cloudflare injects a cf-ray header on
 * every edge request; fall back to a UUID outside Cloudflare (tests, local).
 */
function requestId(request: Request): string {
  return request.headers.get("cf-ray") ?? crypto.randomUUID();
}

/** One structured log event per request. JSON lines are what Workers Logs keep. */
function logEvent(
  level: "info" | "error",
  fields: Record<string, unknown>,
): void {
  const line = JSON.stringify({ level, ts: new Date().toISOString(), ...fields });
  if (level === "error") console.error(line);
  else console.log(line);
}

/** What representation a request was answered with, for the wide event. */
type Served =
  | "redirect"
  | "passthrough"
  | "html"
  | "markdown"
  | "not_found_markdown"
  | "not_acceptable";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const startedAt = Date.now();
    const ray = requestId(request);
    const url = new URL(request.url);
    const pathname = url.pathname;
    const accept = request.headers.get("accept");
    const base = { worker: "site", ray, method: request.method, pathname };

    let response: Response;
    let served: Served;
    const redirectTarget =
      REDIRECTS[pathname.endsWith("/") ? pathname : `${pathname}/`];
    try {
      if (redirectTarget) {
        response = Response.redirect(new URL(redirectTarget, url).toString(), 301);
        served = "redirect";
      } else if (shouldPassthrough(pathname)) {
        response = withAssetCache(pathname, await env.ASSETS.fetch(request));
        served = "passthrough";
      } else {
        const chosen = preferredType(accept, PRODUCES);

        if (chosen === null && accept) {
          response = notAcceptable(accept);
          served = "not_acceptable";
        } else if (chosen === MARKDOWN_TYPE) {
          const mdUrl = new URL(url);
          mdUrl.pathname = markdownAssetPath(url.pathname);
          const mdRes = await env.ASSETS.fetch(
            new Request(mdUrl.toString(), request),
          );
          if (mdRes.ok) {
            const headers = new Headers(mdRes.headers);
            headers.set("Content-Type", MARKDOWN_HEADERS["Content-Type"]);
            headers.set("Cache-Control", MARKDOWN_HEADERS["Cache-Control"]);
            appendVaryAccept(headers);
            response = new Response(mdRes.body, {
              status: mdRes.status,
              statusText: mdRes.statusText,
              headers,
            });
            served = "markdown";
          } else {
            const htmlRes = await env.ASSETS.fetch(request);
            if (htmlRes.status === 404) {
              response = markdownResponse(NOT_FOUND_MARKDOWN, 404);
              served = "not_found_markdown";
            } else if (preferredType(accept, [HTML_TYPE])) {
              response = withVary(htmlRes);
              served = "html";
            } else {
              response = notAcceptable(accept ?? "");
              served = "not_acceptable";
            }
          }
        } else {
          response = withVary(await env.ASSETS.fetch(request));
          served = "html";
        }
      }
    } catch (error) {
      logEvent("error", {
        ...base,
        status: 500,
        served: "error",
        error: {
          type: error instanceof Error ? error.constructor.name : typeof error,
          message: String(error instanceof Error ? error.message : error),
        },
      });
      throw error;
    }
    logEvent("info", {
      ...base,
      status: response.status,
      served,
      durationMs: Date.now() - startedAt,
    });
    return response;
  },
};
