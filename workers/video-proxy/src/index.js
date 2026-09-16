/**
 * plv video proxy — relays video.twimg.com / pbs.twimg.com media so launch
 * videos can play in-site.
 *
 * Why: X's CDN returns 403 for any non-Twitter Referer, and browsers always
 * attach a Referer to <video> requests (even with referrerpolicy=no-referrer).
 * This Worker fetches upstream server-side with no Referer, so playback works
 * from any origin. Same approach as proxy.minttr.com, but self-hosted.
 *
 * Usage:  GET /?url=<encodeURIComponent(https://video.twimg.com/….mp4)>
 *
 * Deploy: see README.md in this directory (wrangler deploy). Free plan is
 * enough — billing is per request, media bytes do not count as CPU time.
 */

const ALLOWED_HOSTS = new Set(["video.twimg.com", "pbs.twimg.com"]);

// Browser-ish UA: some CDN edges serve 403 to obviously-scripted clients.
const UPSTREAM_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

// Response headers worth keeping from upstream. Everything else (server,
// set-cookie, x-*) is dropped.
const PASSTHROUGH_HEADERS = [
  "content-type",
  "content-length",
  "content-range",
  "accept-ranges",
  "etag",
  "last-modified",
];

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Range",
  "Access-Control-Expose-Headers":
    "Content-Length, Content-Range, Accept-Ranges",
};

/**
 * Correlate events for one request. Cloudflare injects a cf-ray header on
 * every edge request; fall back to a UUID outside Cloudflare (tests, local).
 */
function requestId(request) {
  return request.headers.get("cf-ray") ?? crypto.randomUUID();
}

/** Compact error payload, without stack contents. */
function errorSummary(error) {
  return {
    type: error?.constructor?.name ?? typeof error,
    message: String(error?.message ?? error),
  };
}

/**
 * One structured log event per request (+ one extra on upstream fetch
 * failure). JSON lines are what Cloudflare Workers Logs / Logpush keep.
 */
function logEvent(level, fields) {
  const line = JSON.stringify({ level, ts: new Date().toISOString(), ...fields });
  if (level === "error") console.error(line);
  else console.log(line);
}

export default {
  async fetch(request) {
    const startedAt = Date.now();
    const ray = requestId(request);
    const method = request.method;
    const pathname = new URL(request.url).pathname;
    const base = { worker: "video-proxy", ray, method, pathname };

    if (method === "OPTIONS") {
      logEvent("info", { ...base, status: 204, outcome: "preflight" });
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }
    if (method !== "GET" && method !== "HEAD") {
      logEvent("info", { ...base, status: 405, outcome: "method_not_allowed" });
      return new Response("Method not allowed", { status: 405 });
    }

    const raw = new URL(request.url).searchParams.get("url");
    if (!raw) {
      logEvent("info", { ...base, status: 400, outcome: "missing_url" });
      return new Response("Missing ?url=", { status: 400 });
    }

    let target;
    try {
      target = new URL(raw);
    } catch {
      logEvent("info", {
        ...base,
        status: 400,
        outcome: "invalid_url",
      });
      return new Response("Invalid ?url=", { status: 400 });
    }
    if (target.protocol !== "https:" || !ALLOWED_HOSTS.has(target.hostname)) {
      logEvent("info", {
        ...base,
        status: 403,
        outcome: "host_not_allowed",
        targetHost: target.hostname || null,
        targetPath: target.pathname ? target.pathname.slice(0, 128) : null,
      });
      return new Response("Host not allowed", { status: 403 });
    }

    const upstreamHeaders = new Headers({ "User-Agent": UPSTREAM_UA });
    // No Referer/Origin on purpose — that is the whole point of the proxy.
    const range = request.headers.get("Range");
    if (range) upstreamHeaders.set("Range", range);

    let upstream;
    try {
      upstream = await fetch(target.toString(), {
        headers: upstreamHeaders,
        redirect: "follow",
      });
    } catch (error) {
      logEvent("error", {
        ...base,
        status: 502,
        outcome: "upstream_fetch_error",
        targetHost: target.hostname,
        targetPath: target.pathname.slice(0, 128),
        error: errorSummary(error),
      });
      return new Response("Upstream fetch failed", { status: 502 });
    }

    const headers = new Headers(CORS_HEADERS);
    for (const name of PASSTHROUGH_HEADERS) {
      const value = upstream.headers.get(name);
      if (value) headers.set(name, value);
    }
    // Media URLs are immutable per variant; let browsers and the edge cache.
    headers.set("Cache-Control", "public, max-age=86400, immutable");

    logEvent(
      upstream.status >= 400 ? "error" : "info",
      {
        ...base,
        status: upstream.status,
        outcome: upstream.status >= 400 ? "upstream_error" : "served",
        targetHost: target.hostname,
        targetPath: target.pathname.slice(0, 128),
        range: range ? range.slice(0, 64) : null,
      },
    );

    return new Response(upstream.body, {
      status: upstream.status,
      headers,
    });
  },
};
