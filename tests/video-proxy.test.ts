import { afterEach, describe, expect, it, vi } from "vitest";
import proxy from "../workers/video-proxy/src/index";

function proxyRequest(url: string, init?: RequestInit) {
  const target = url
    ? `https://proxy.whatships.com/?url=${encodeURIComponent(url)}`
    : "https://proxy.whatships.com/";
  return new Request(target, init);
}

function capturedLogs() {
  const logs: Array<Record<string, unknown>> = [];
  vi.spyOn(console, "log").mockImplementation((line: string) => {
    logs.push(JSON.parse(line));
  });
  vi.spyOn(console, "error").mockImplementation((line: string) => {
    logs.push(JSON.parse(line));
  });
  return logs;
}

afterEach(() => {
  vi.restoreAllMocks();
});

function findEvent(
  logs: Array<Record<string, unknown>>,
  outcome: string,
): Record<string, unknown> {
  const event = logs.find((l) => l.outcome === outcome);
  expect(event).toBeDefined();
  return event as Record<string, unknown>;
}


describe("video proxy", () => {
  it("answers OPTIONS preflight with CORS headers", async () => {
    const res = await proxy.fetch(
      new Request("https://proxy.whatships.com/", { method: "OPTIONS" }),
    );
    expect(res.status).toBe(204);
    expect(res.headers.get("Access-Control-Allow-Origin")).toBe("*");
    expect(res.headers.get("Access-Control-Allow-Methods")).toContain("GET");
  });

  it("rejects non-GET/HEAD methods with 405", async () => {
    const res = await proxy.fetch(proxyRequest("", { method: "POST" }));
    expect(res.status).toBe(405);
  });

  it("rejects a missing url with 400", async () => {
    const res = await proxy.fetch(proxyRequest(""));
    expect(res.status).toBe(400);
  });

  it("rejects an invalid url with 400", async () => {
    const res = await proxy.fetch(proxyRequest("not a url"));
    expect(res.status).toBe(400);
  });

  it("rejects hosts outside the allowlist with 403", async () => {
    const logs = capturedLogs();
    const res = await proxy.fetch(
      proxyRequest("https://evil.example/video.mp4"),
    );
    expect(res.status).toBe(403);
    const denied = findEvent(logs, "host_not_allowed");
    expect(denied).toBeDefined();
    expect(denied.targetHost).toBe("evil.example");
    expect(denied.targetPath).toBe("/video.mp4");
  });

  it("relays an allowed upstream and forwards Range", async () => {
    const upstream = new Response("0123456789", {
      status: 206,
      headers: {
        "Content-Type": "video/mp4",
        "Content-Range": "bytes 0-9/100",
      },
    });
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(upstream);

    const res = await proxy.fetch(
      proxyRequest("https://video.twimg.com/ext_tw_video/123.mp4", {
        headers: { Range: "bytes=0-9" },
      }),
    );

    expect(res.status).toBe(206);
    expect(res.headers.get("Content-Type")).toBe("video/mp4");
    expect(res.headers.get("Content-Range")).toBe("bytes 0-9/100");
    expect(res.headers.get("Cache-Control")).toBe(
      "public, max-age=86400, immutable",
    );
    const sentInit = fetchSpy.mock.calls[0][1] as { headers: Headers };
    const sentHeaders = sentInit.headers;
    expect(sentHeaders.get("Range")).toBe("bytes=0-9");
    expect(sentHeaders.has("Referer")).toBe(false);
    expect(sentHeaders.get("User-Agent")).toContain("Mozilla/5.0");
  });

  it("logs upstream fetch failure with target host and returns 502", async () => {
    const logs = capturedLogs();
    vi.spyOn(globalThis, "fetch").mockRejectedValue(
      new TypeError("fetch failed"),
    );

    const res = await proxy.fetch(
      proxyRequest("https://video.twimg.com/ext_tw_video/123.mp4"),
    );

    expect(res.status).toBe(502);
    const errorEvent = findEvent(logs, "upstream_fetch_error");
    expect(errorEvent).toBeDefined();
    expect(errorEvent.level).toBe("error");
    expect(errorEvent.targetHost).toBe("video.twimg.com");
    expect(errorEvent.targetPath).toBe("/ext_tw_video/123.mp4");
    expect(errorEvent.error).toMatchObject({
      type: "TypeError",
      message: "fetch failed",
    });
    expect(typeof errorEvent.ray).toBe("string");
  });

  it("logs upstream non-2xx status as error and relays it", async () => {
    const logs = capturedLogs();
    const upstream = new Response("denied", { status: 403 });
    vi.spyOn(globalThis, "fetch").mockResolvedValue(upstream);

    const res = await proxy.fetch(
      proxyRequest("https://pbs.twimg.com/media/abc.jpg"),
    );

    expect(res.status).toBe(403);
    const event = findEvent(logs, "upstream_error");
    expect(event).toBeDefined();
    expect(event.level).toBe("error");
    expect(event.status).toBe(403);
    expect(event.targetHost).toBe("pbs.twimg.com");
  });

  it("logs served requests as info", async () => {
    const logs = capturedLogs();
    const upstream = new Response("bytes", { status: 200 });
    vi.spyOn(globalThis, "fetch").mockResolvedValue(upstream);

    await proxy.fetch(
      proxyRequest("https://video.twimg.com/ext_tw_video/123.mp4"),
    );

    const served = findEvent(logs, "served");
    expect(served).toBeDefined();
    expect(served.level).toBe("info");
    expect(served.status).toBe(200);
    expect(served.worker).toBe("video-proxy");
  });
});
