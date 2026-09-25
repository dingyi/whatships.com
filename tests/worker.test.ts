import { describe, expect, it } from "vitest";

import { NOT_FOUND_MARKDOWN } from "@/lib/site";
import worker, { type Env } from "../workers/site/src/index";

function assetEnv(files: Record<string, Response>): Env {
  return {
    ASSETS: {
      fetch: async (input: RequestInfo | URL) => {
        const url = new URL(
          input instanceof Request ? input.url : input.toString(),
        );
        const direct = files[url.pathname];
        if (direct) return direct.clone();
        return new Response("<html>not found</html>", {
          status: 404,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      },
    },
  };
}

function request(path: string, accept?: string) {
  return new Request(`https://whatships.com${path}`, {
    headers: accept ? { Accept: accept } : undefined,
  });
}

const env = assetEnv({
  "/": new Response("<html>home</html>", {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  }),
  "/index.md": new Response("# whatships.com\n\nDirectory.\n", {
    headers: { "Content-Type": "text/markdown" },
  }),
  "/about/": new Response("<html>about</html>", {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  }),
  "/about/index.md": new Response("# About whatships.com\n", {
    headers: { "Content-Type": "text/markdown" },
  }),
  "/llms.txt": new Response("# whatships.com\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  }),
});

describe("site worker negotiation", () => {
  it("returns markdown with Vary: Accept for Accept: text/markdown", async () => {
    const response = await worker.fetch(
      request("/", "text/markdown"),
      env,
    );
    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toContain("text/markdown");
    expect(response.headers.get("Vary")).toMatch(/Accept/i);
    expect(response.headers.get("Vary")).toMatch(/Accept-Encoding/i);
    expect(await response.text()).toContain("# whatships.com");
  });

  it("returns HTML with Vary: Accept for browser Accept", async () => {
    const response = await worker.fetch(
      request("/", "text/html,application/xhtml+xml,*/*;q=0.8"),
      env,
    );
    expect(response.status).toBe(200);
    expect(response.headers.get("Content-Type")).toContain("text/html");
    expect(response.headers.get("Vary")).toMatch(/Accept/i);
    expect(await response.text()).toContain("<html>home</html>");
  });

  it("returns 406 when no produced type is acceptable", async () => {
    const response = await worker.fetch(request("/", "application/pdf"), env);
    expect(response.status).toBe(406);
    expect(response.headers.get("Vary")).toMatch(/Accept/i);
  });

  it("returns HTTP 404 markdown with recovery links for unknown paths", async () => {
    const response = await worker.fetch(
      request("/this-path-does-not-exist", "text/markdown"),
      env,
    );
    expect(response.status).toBe(404);
    expect(response.headers.get("Content-Type")).toContain("text/markdown");
    const body = await response.text();
    expect(body).toBe(NOT_FOUND_MARKDOWN);
    expect(body).toContain("sitemap.xml");
    expect(body).toContain("llms.txt");
  });

  it("returns HTTP 404 HTML for unknown paths requested as HTML", async () => {
    const response = await worker.fetch(
      request("/this-path-does-not-exist", "text/html"),
      env,
    );
    expect(response.status).toBe(404);
    expect(response.headers.get("Content-Type")).toContain("text/html");
  });

  it("passes through llms.txt without rewriting", async () => {
    const response = await worker.fetch(request("/llms.txt"), env);
    expect(response.status).toBe(200);
    expect(await response.text()).toContain("# whatships.com");
  });

  it("sets a long cache for hashed /_astro assets", async () => {
    const hashed = assetEnv({
      "/_astro/BaseLayout.abc.css": new Response("body{}", {
        headers: {
          "Content-Type": "text/css",
          "Cache-Control": "public, max-age=0, must-revalidate",
        },
      }),
    });
    const response = await worker.fetch(
      request("/_astro/BaseLayout.abc.css"),
      hashed,
    );
    expect(response.status).toBe(200);
    expect(response.headers.get("Cache-Control")).toBe(
      "public, max-age=31536000, immutable",
    );
  });

  it("caches posters for a week", async () => {
    const posters = assetEnv({
      "/posters/mojo-960.webp": new Response("webp", {
        headers: { "Content-Type": "image/webp" },
      }),
    });
    const response = await worker.fetch(
      request("/posters/mojo-960.webp"),
      posters,
    );
    expect(response.headers.get("Cache-Control")).toBe(
      "public, max-age=604800",
    );
  });
});

describe("site worker www redirect", () => {
  it("301s www to the apex with path and query preserved", async () => {
    const response = await worker.fetch(
      new Request("https://www.whatships.com/videos/foo/?q=1"),
      env,
    );
    expect(response.status).toBe(301);
    expect(response.headers.get("Location")).toBe(
      "https://whatships.com/videos/foo/?q=1",
    );
    expect(await response.text()).toBe("");
  });

  it("preserves a trailing slash already present on the path", async () => {
    const response = await worker.fetch(
      new Request("https://www.whatships.com/about/"),
      env,
    );
    expect(response.status).toBe(301);
    expect(response.headers.get("Location")).toBe(
      "https://whatships.com/about/",
    );
  });

  it("matches www case-insensitively", async () => {
    const response = await worker.fetch(
      new Request("https://WWW.Whatships.com/llms.txt"),
      env,
    );
    expect(response.status).toBe(301);
    expect(response.headers.get("Location")).toBe(
      "https://whatships.com/llms.txt",
    );
  });

  it("301s when only the Host header is www", async () => {
    const response = await worker.fetch(
      new Request("https://whatships.com/developers/", {
        headers: { Host: "WWW.whatships.com" },
      }),
      env,
    );
    expect(response.status).toBe(301);
    expect(response.headers.get("Location")).toBe(
      "https://whatships.com/developers/",
    );
  });

  it("does not redirect the apex host", async () => {
    const response = await worker.fetch(request("/"), env);
    expect(response.status).toBe(200);
    expect(response.headers.get("Location")).toBeNull();
    expect(await response.text()).toContain("<html>home</html>");
  });

  it("does not redirect other hosts", async () => {
    const response = await worker.fetch(
      new Request("https://preview.whatships.com/"),
      env,
    );
    expect(response.status).toBe(200);
    expect(response.headers.get("Location")).toBeNull();
  });
});
