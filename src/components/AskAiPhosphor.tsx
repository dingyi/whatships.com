import { useEffect, useRef, useState } from "react";

import { prefersReducedMotion } from "@/lib/motion";
import {
  CELL_CAP,
  mountShadowMaskRenderer,
  type RendererDisposer,
  type ShadowMaskCellStyle,
  type ShadowMaskDirection,
  type ShadowMaskSourceContext,
} from "@/components/phosphor/shadow-mask";

export type AskAiLink = {
  id: string;
  name: string;
  href: string;
  icon: string;
  mono?: boolean;
};

const ICON_PX = 16;
const CELLS = { columns: 5, rows: 1 } as const;
const CELL_STYLES: ShadowMaskCellStyle[] = Array.from(
  { length: CELLS.columns },
  () => ({ contentWidth: ICON_PX, contentHeight: ICON_PX }),
);

function isLightTheme(): boolean {
  if (typeof document === "undefined") return true;
  const root = document.documentElement;
  if (root.dataset.theme === "dark" || root.classList.contains("dark")) {
    return false;
  }
  if (root.dataset.theme === "light" || root.classList.contains("light")) {
    return true;
  }
  return !window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function emptyDirections(count: number): ShadowMaskDirection[] {
  return Array.from({ length: count }, () => ({ x: 0, y: 0 }));
}

function directionFromPointer(
  event: Pick<PointerEvent, "clientX" | "clientY">,
  el: HTMLElement,
): ShadowMaskDirection {
  const rect = el.getBoundingClientRect();
  const dx = event.clientX - (rect.left + rect.width / 2);
  const dy = event.clientY - (rect.top + rect.height / 2);
  if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return { x: 1, y: 0 };
  if (Math.abs(dx) >= Math.abs(dy)) return { x: Math.sign(dx) || 1, y: 0 };
  return { x: 0, y: Math.sign(dy) || 1 };
}

function loadIcon(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Failed to load ${src}`));
    image.src = src;
  });
}

/** Lift every mark to phosphor-white-ish so the CRT cover test can see it. */
function liftPhosphor(data: ImageData) {
  const pixels = data.data;
  for (let i = 0; i < pixels.length; i += 4) {
    if (pixels[i + 3] < 8) continue;
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const maxc = Math.max(r, g, b, 1);
    const lift = 235 / maxc;
    pixels[i] = Math.min(255, r * lift);
    pixels[i + 1] = Math.min(255, g * lift);
    pixels[i + 2] = Math.min(255, b * lift);
  }
}

function paintIcons(
  context: ShadowMaskSourceContext,
  stage: HTMLElement,
  images: HTMLImageElement[],
): HTMLCanvasElement {
  const source = document.createElement("canvas");
  source.width = context.width;
  source.height = context.height;
  const ctx = source.getContext("2d");
  if (!ctx) return source;
  ctx.clearRect(0, 0, source.width, source.height);

  const items = [
    ...stage.querySelectorAll<HTMLElement>("[data-ask-ai-cell]"),
  ];
  const stageRect = stage.getBoundingClientRect();
  const scaleX = source.width / Math.max(1, stageRect.width);
  const scaleY = source.height / Math.max(1, stageRect.height);

  items.forEach((item, index) => {
    const image = images[index];
    if (!image) return;
    const rect = item.getBoundingClientRect();
    const size = ICON_PX * scaleX;
    const x = (rect.left - stageRect.left + rect.width / 2) * scaleX - size / 2;
    const y = (rect.top - stageRect.top + rect.height / 2) * scaleY - size / 2;
    ctx.drawImage(image, x, y, size, size);
    const sx = Math.max(0, Math.floor(x) - 1);
    const sy = Math.max(0, Math.floor(y) - 1);
    const sw = Math.min(source.width - sx, Math.ceil(size) + 2);
    const sh = Math.min(source.height - sy, Math.ceil(size) + 2);
    if (sw < 1 || sh < 1) return;
    const sample = ctx.getImageData(sx, sy, sw, sh);
    liftPhosphor(sample);
    ctx.putImageData(sample, sx, sy);
  });
  return source;
}

export default function AskAiPhosphor({ links }: { links: readonly AskAiLink[] }) {
  const cellCount = Math.min(links.length, CELL_CAP);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<RendererDisposer | null>(null);
  const hoverRef = useRef(-1);
  const tearRef = useRef<number[]>([]);
  const enterDirRef = useRef<ShadowMaskDirection[]>(emptyDirections(cellCount));
  const glitchDirRef = useRef<ShadowMaskDirection[]>(emptyDirections(cellCount));
  const glitchTargetRef = useRef<ShadowMaskDirection[]>(
    emptyDirections(cellCount),
  );
  const lightRef = useRef(isLightTheme());
  const [phosphorOn, setPhosphorOn] = useState(false);
  const [light, setLight] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;
    if (prefersReducedMotion()) return;

    let disposed = false;
    let media: MediaQueryList | undefined;
    const onMotion = () => {
      if (prefersReducedMotion()) {
        rendererRef.current?.();
        rendererRef.current = null;
        setPhosphorOn(false);
      }
    };

    const syncTheme = () => {
      const next = isLightTheme();
      lightRef.current = next;
      setLight(next);
      rendererRef.current?.wake();
      rendererRef.current?.refresh();
    };
    syncTheme();

    const themeObserver = new MutationObserver(syncTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    let offscreen = false;
    const syncPause = () => {
      rendererRef.current?.setPaused(offscreen || document.hidden);
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        offscreen = !entry?.isIntersecting;
        syncPause();
      },
      { rootMargin: "80px" },
    );
    io.observe(stage);
    document.addEventListener("visibilitychange", syncPause);

    void (async () => {
      let images: HTMLImageElement[];
      try {
        images = await Promise.all(links.map((link) => loadIcon(link.icon)));
      } catch {
        return;
      }
      if (disposed || prefersReducedMotion()) return;

      try {
        const renderer = mountShadowMaskRenderer({
          canvas,
          cellCount,
          hoverRef,
          tearRef,
          enterDirRef,
          glitchDirRef,
          glitchTargetRef,
          lightRef,
          cells: { columns: cellCount, rows: 1 },
          cellStyles: CELL_STYLES,
          sourceFactory: (context) => paintIcons(context, stage, images),
        });
        if (disposed) {
          renderer();
          return;
        }
        rendererRef.current = renderer;
        setPhosphorOn(true);
        syncPause();
      } catch {
        setPhosphorOn(false);
      }
    })();

    media = window.matchMedia("(prefers-reduced-motion: reduce)");
    media.addEventListener("change", onMotion);

    return () => {
      disposed = true;
      media?.removeEventListener("change", onMotion);
      themeObserver.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", syncPause);
      rendererRef.current?.();
      rendererRef.current = null;
      canvas.removeAttribute("data-render-ready");
    };
  }, [cellCount, links]);

  const wakeCell = (index: number, direction: ShadowMaskDirection) => {
    hoverRef.current = index;
    enterDirRef.current[index] = { ...direction };
    glitchTargetRef.current[index] = { ...direction };
    if (!glitchDirRef.current[index]) {
      glitchDirRef.current[index] = { x: 0, y: 0 };
    }
    rendererRef.current?.wake();
    rendererRef.current?.refresh();
  };

  return (
    <div
      className="ask-ai-phosphor"
      data-phosphor={phosphorOn ? "on" : "off"}
      data-paper={light ? "light" : "dark"}
    >
      <div className="ask-ai-phosphor-stage" ref={stageRef}>
        <canvas
          ref={canvasRef}
          className="ask-ai-phosphor-canvas"
          aria-hidden="true"
          data-phosphor-canvas
        />
        <ul className="footer-ask-list" aria-label="Ask an AI about whatships.com">
          {links.map((ai, index) => (
            <li key={ai.id} data-ask-ai-cell={index}>
              <a
                className="ask-ai-link"
                href={ai.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ask about whatships on ${ai.name}`}
                title={`Ask about whatships on ${ai.name}`}
                onPointerEnter={(event) => {
                  wakeCell(
                    index,
                    directionFromPointer(event.nativeEvent, event.currentTarget),
                  );
                }}
                onPointerMove={(event) => {
                  if (hoverRef.current !== index) return;
                  glitchTargetRef.current[index] = directionFromPointer(
                    event.nativeEvent,
                    event.currentTarget,
                  );
                  rendererRef.current?.wake();
                }}
                onPointerLeave={() => {
                  if (hoverRef.current === index) hoverRef.current = -1;
                  glitchTargetRef.current[index] = { x: 0, y: 0 };
                  rendererRef.current?.wake();
                }}
                onPointerDown={() => {
                  if (!tearRef.current.length) {
                    tearRef.current = Array.from({ length: cellCount }, () => 0);
                  }
                  tearRef.current[index] = 1;
                  rendererRef.current?.wake();
                }}
              >
                <img
                  className="ask-ai-icon"
                  src={ai.icon}
                  alt=""
                  width={ICON_PX}
                  height={ICON_PX}
                  aria-hidden="true"
                  data-mono={ai.mono ? "true" : undefined}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
