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

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (shouldPassthrough(url.pathname)) {
      return withAssetCache(url.pathname, await env.ASSETS.fetch(request));
    }

    const accept = request.headers.get("accept");
    const chosen = preferredType(accept, PRODUCES);

    if (chosen === null && accept) {
      return notAcceptable(accept);
    }

    if (chosen === MARKDOWN_TYPE) {
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
        return new Response(mdRes.body, {
          status: mdRes.status,
          statusText: mdRes.statusText,
          headers,
        });
      }

      const htmlRes = await env.ASSETS.fetch(request);
      if (htmlRes.status === 404) {
        return markdownResponse(NOT_FOUND_MARKDOWN, 404);
      }
      if (preferredType(accept, [HTML_TYPE])) {
        return withVary(htmlRes);
      }
      return notAcceptable(accept ?? "");
    }

    return withVary(await env.ASSETS.fetch(request));
  },
};
