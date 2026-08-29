import { Search } from "lucide-react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { prefersReducedMotion, tokenMs } from "@/lib/motion";

export interface VideoSearchItem {
  name: string;
  slug: string;
  meta: string;
  searchText: string;
}

interface Props {
  items: VideoSearchItem[];
  value: string;
  onValueChange: (value: string) => void;
  onClose: () => void;
  loading?: boolean;
  error?: boolean;
}

export default function VideoSearch({
  items,
  value,
  onValueChange,
  onClose,
  loading = false,
  error = false,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const clearRef = useRef<HTMLDivElement>(null);
  const mirrorRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const clearingRef = useRef(false);
  const measuredRef = useRef(false);
  const [boxHeight, setBoxHeight] = useState<number | undefined>(undefined);
  const query = value.trim().toLocaleLowerCase();
  const results = useMemo(
    () =>
      query
        ? items.filter((item) => item.searchText.includes(query)).slice(0, 12)
        : [],
    [items, query],
  );

  useEffect(() => setActiveIndex(0), [query]);

  useEffect(() => {
    if (mirrorRef.current) {
      mirrorRef.current.textContent = value.replace(/ /g, "\u00a0");
    }
  }, [value]);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const next = root.scrollHeight;
    if (!measuredRef.current) {
      measuredRef.current = true;
      const prev = root.style.transition;
      root.style.transition = "none";
      setBoxHeight(next);
      void root.offsetHeight;
      root.style.transition = prev;
      return;
    }
    setBoxHeight(next);
  }, [query, results.length, loading, error, value]);

  function numToken(name: string, fallback: number) {
    return tokenMs(name, fallback);
  }

  function bezier(str: string) {
    const match = String(str).match(
      /cubic-bezier\(([-\d.]+),\s*([-\d.]+),\s*([-\d.]+),\s*([-\d.]+)\)/,
    );
    if (!match) return (t: number) => t;
    const [x1, y1, x2, y2] = match.slice(1).map(parseFloat);
    const cx = 3 * x1;
    const bx = 3 * (x2 - x1) - cx;
    const ax = 1 - cx - bx;
    const cy = 3 * y1;
    const by = 3 * (y2 - y1) - cy;
    const ay = 1 - cy - by;
    return (t: number) => {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      let s = t;
      for (let i = 0; i < 8; i++) {
        const dx = ((ax * s + bx) * s + cx) * s - t;
        const d = (3 * ax * s + 2 * bx) * s + cx;
        if (Math.abs(dx) < 1e-6 || d === 0) break;
        s -= dx / d;
      }
      return ((ay * s + by) * s + cy) * s;
    };
  }

  function buildGlow(text: string) {
    const wrap = clearRef.current;
    const input = inputRef.current;
    if (!wrap || !input) return "";
    const canvas = document.createElement("canvas").getContext("2d");
    if (!canvas) return "";
    canvas.font = getComputedStyle(input).font;
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark" ||
      document.documentElement.classList.contains("dark");
    const rgb = isDark ? "255,255,255" : "0,0,0";
    const w = wrap.clientWidth || 280;
    const padLeft = parseFloat(getComputedStyle(input).paddingLeft) || 0;
    const spread = numToken("--glow-spread", 1.5);
    const layers: string[] = [];
    let x = 0;
    text.split(/(\s+)/).forEach((seg) => {
      const segW = canvas.measureText(seg).width;
      if (seg.trim()) {
        const cx = padLeft + x + segW / 2;
        const hw = Math.max(segW * 0.45, 8) * spread;
        (
          [
            [0, 0.8, 7, 0.22],
            [hw * 0.45, 0.55, 8, 0.18],
            [-hw * 0.4, 0.65, 6, 0.16],
            [hw * 0.15, 0.9, 5, 0.14],
          ] as const
        ).forEach(([dx, rwm, rh, a]) => {
          const lx = (((cx + dx) / w) * 100).toFixed(2);
          layers.push(
            `radial-gradient(ellipse ${Math.max(hw * rwm, 2).toFixed(1)}px ${rh}px at ${lx}% 100%, rgba(${rgb},${a}), transparent)`,
          );
        });
      }
      x += segW;
    });
    return layers.join(", ");
  }

  function clearWithAnimation() {
    const wrap = clearRef.current;
    const input =
      inputRef.current ?? wrap?.querySelector("input") ?? null;
    const mirror = mirrorRef.current;
    const phold = placeholderRef.current;
    const glow = glowRef.current;
    if (!wrap || !input || !mirror || !phold || !glow) {
      onValueChange("");
      return;
    }
    if (clearingRef.current || !input.value) return;
    if (prefersReducedMotion()) {
      onValueChange("");
      return;
    }

    clearingRef.current = true;
    const keepFocus = document.activeElement === input;
    const kept = input.value.replace(/ /g, "\u00a0");
    mirror.textContent = kept;

    const root = document.documentElement;
    const total = numToken("--clear-dur", 1000);
    const outDur = numToken("--clear-out-dur", 400);
    const inDur = numToken("--clear-in-dur", 400);
    const outFly = numToken("--clear-out-fly", 12);
    const inFly = numToken("--clear-in-fly", 12);
    const blur = numToken("--clear-blur", 2);
    const delay = numToken("--glow-delay", 50);
    const peakAt = numToken("--glow-peak-at", 0.15);
    const gOp = numToken("--glow-opacity", 0.42);
    const easeOut = bezier(
      getComputedStyle(root).getPropertyValue("--clear-out-ease"),
    );
    const easeIn = bezier(
      getComputedStyle(root).getPropertyValue("--clear-in-ease"),
    );

    onValueChange("");
    wrap.classList.remove("has-value");
    wrap.classList.add("is-clearing");
    glow.style.background = buildGlow(kept);
    glow.style.opacity = "0";
    phold.style.transform = `translateY(-${inFly}px)`;
    phold.style.opacity = "0.9";
    phold.style.filter = `blur(${blur}px)`;

    const t0 = performance.now();
    const tick = (now: number) => {
      const el = now - t0;
      const eo = easeOut(Math.min(1, el / outDur));
      mirror.style.transform = `translateY(${(eo * outFly).toFixed(1)}px)`;
      mirror.style.opacity = (1 - eo).toFixed(3);
      mirror.style.filter = `blur(${(eo * blur).toFixed(1)}px)`;

      const ei = easeIn(Math.min(1, el / inDur));
      phold.style.transform = `translateY(${(-inFly + ei * inFly).toFixed(1)}px)`;
      phold.style.opacity = (0.9 + ei * 0.1).toFixed(3);
      phold.style.filter = `blur(${(blur - ei * blur).toFixed(1)}px)`;

      let g = 0;
      if (el > delay) {
        const gp = Math.min(1, (el - delay) / Math.max(1, total - delay));
        g = gp < peakAt ? gp / peakAt : 1 - (gp - peakAt) / (1 - peakAt);
      }
      glow.style.opacity = (g * gOp).toFixed(3);

      if (el < total) {
        requestAnimationFrame(tick);
      } else {
        wrap.classList.remove("is-clearing");
        mirror.style.cssText = "";
        phold.style.cssText = "";
        mirror.textContent = "";
        glow.style.opacity = "0";
        glow.style.background = "";
        clearingRef.current = false;
        if (keepFocus) {
          requestAnimationFrame(() =>
            input.focus({ preventScroll: true }),
          );
        }
      }
    };
    requestAnimationFrame(tick);
  }

  function chooseResult(index: number) {
    const result = results[index];
    if (result) window.location.href = `/videos/${result.slug}/`;
  }

  return (
    <div
      className="video-search t-resize"
      ref={rootRef}
      style={boxHeight ? { height: boxHeight } : undefined}
      onKeyDown={(event) => {
        const fromInput = (event.target as HTMLElement).matches("input");
        if (event.key === "ArrowDown" && results.length && fromInput) {
          event.preventDefault();
          setActiveIndex((index) => (index + 1) % results.length);
        } else if (event.key === "ArrowUp" && results.length && fromInput) {
          event.preventDefault();
          setActiveIndex(
            (index) => (index - 1 + results.length) % results.length,
          );
        } else if (event.key === "Enter" && results.length && fromInput) {
          event.preventDefault();
          chooseResult(activeIndex);
        } else if (event.key === "Escape") {
          event.preventDefault();
          onClose();
        }
      }}
    >
      <div className="search-dialog__input-row">
        <Search aria-hidden="true" size={17} strokeWidth={1.8} />
        <div
          className={`t-clear${value ? " has-value" : ""}`}
          ref={clearRef}
        >
          <Input
            autoFocus
            ref={inputRef}
            value={value}
            onChange={(event) => onValueChange(event.target.value)}
            placeholder="Search launch videos"
            aria-label="Search launch videos"
            role="combobox"
            aria-expanded={query.length > 0}
            aria-controls={query ? "video-search-results" : undefined}
            aria-activedescendant={
              query && results.length
                ? `video-search-option-${results[activeIndex].slug}`
                : undefined
            }
          />
          <div className="t-clear-mirror" ref={mirrorRef} aria-hidden="true" />
          <div
            className="t-clear-placeholder"
            ref={placeholderRef}
            aria-hidden="true"
          >
            Search launch videos
          </div>
          <div className="t-clear-glow" ref={glowRef} aria-hidden="true" />
        </div>
        {value ? (
          <button
            type="button"
            className="search-clear t-clear-btn"
            onPointerDown={(event) => {
              if (document.activeElement === inputRef.current) {
                event.preventDefault();
              }
            }}
            onMouseDown={(event) => {
              if (document.activeElement === inputRef.current) {
                event.preventDefault();
              }
            }}
            onClick={clearWithAnimation}
            aria-label="Clear search"
          >
            Clear
          </button>
        ) : (
          <button
            type="button"
            className="search-escape"
            onClick={onClose}
            aria-label="Close search"
          >
            <span className="search-escape__kbd">Esc</span>
            <span className="search-escape__close">Close</span>
          </button>
        )}
      </div>

      {query && (
        <div
          className="search-results"
          id="video-search-results"
          role="listbox"
          aria-label="Video search results"
        >
          {loading ? (
            <p className="search-results__status">
              <span className="t-shimmer" data-text="Searching…">
                Searching…
              </span>
            </p>
          ) : results.length ? (
            results.map((result, index) => (
              <a
                className={`search-result${index === activeIndex ? " is-active" : ""}`}
                id={`video-search-option-${result.slug}`}
                role="option"
                aria-selected={index === activeIndex}
                href={`/videos/${result.slug}/`}
                onMouseEnter={() => setActiveIndex(index)}
                key={result.slug}
              >
                <strong>{result.name}</strong>
                <small>
                  {result.meta} · /videos/{result.slug}
                </small>
              </a>
            ))
          ) : (
            <p className="search-results__status">
              {error
                ? "Search is unavailable right now."
                : "No videos found."}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
