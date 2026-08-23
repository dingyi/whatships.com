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
});
