import { Search } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { prefersReducedMotion, tokenMs } from "@/lib/motion";
import {
  filterSearchIndex,
  SEARCH_KIND_LABELS,
  SEARCH_KINDS,
  type SearchIndexItem,
} from "@/lib/search-index";

export type VideoSearchItem = SearchIndexItem;

const SEARCH_LABEL = "Search videos, tools, and studios";

interface Props {
  onActivate?: () => void;
}

export default function VideoSearch({ onActivate }: Props) {
  const [value, setValue] = useState("");
  const [items, setItems] = useState<SearchIndexItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const requestedRef = useRef(false);
  const query = value.trim();
  const results = useMemo(() => filterSearchIndex(items, value), [items, value]);
  const groups = useMemo(
    () =>
      SEARCH_KINDS.map((kind) => ({
        kind,
        label: SEARCH_KIND_LABELS[kind],
        items: results.filter((item) => item.kind === kind),
      })).filter((group) => group.items.length > 0),
    [results],
  );
  const showPanel = open && query.length > 0;

  const loadIndex = useCallback(() => {
    if (requestedRef.current) return;
    requestedRef.current = true;
    setLoading(true);
    setError(false);
    fetch("/search-index.json")
      .then((response) => {
        if (!response.ok) throw new Error("Search index unavailable");
        return response.json() as Promise<SearchIndexItem[]>;
      })
      .then((next) => setItems(next))
      .catch(() => {
        requestedRef.current = false;
        setItems([]);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  const closePanel = useCallback(() => {
    setOpen(false);
    if (prefersReducedMotion()) {
      setClosing(false);
      return;
    }
    setClosing(true);
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setClosing(false);
      closeTimerRef.current = null;
    }, tokenMs("--dropdown-close-dur", 150));
  }, []);

  useEffect(() => () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
  }, []);

  useEffect(() => setActiveIndex(0), [query]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const inbound = params.get("q")?.trim();
    if (!inbound && params.get("search") !== "1") return;
    if (inbound) setValue(inbound);
    setOpen(true);
    loadIndex();
    requestAnimationFrame(() =>
      inputRef.current?.focus({ preventScroll: true }),
    );
  }, [loadIndex]);

  useEffect(() => {
    const onShortcut = (event: KeyboardEvent) => {
      if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== "k")
        return;
      const target = event.target as HTMLElement | null;
      if (target === inputRef.current) {
        event.preventDefault();
        inputRef.current?.select();
        return;
      }
      if (
        target?.matches("input, textarea, select") ||
        target?.isContentEditable
      )
        return;
      event.preventDefault();
      onActivate?.();
      loadIndex();
      setOpen(true);
      inputRef.current?.focus();
    };
    window.addEventListener("keydown", onShortcut);
    return () => window.removeEventListener("keydown", onShortcut);
  }, [loadIndex, onActivate]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (target && rootRef.current?.contains(target)) return;
      closePanel();
    };
    window.addEventListener("pointerdown", onPointer);
    return () => window.removeEventListener("pointerdown", onPointer);
  }, [closePanel, open]);

  function chooseResult(index: number) {
    const result = results[index];
    if (result) window.location.href = result.href;
  }

  const panelVisible = showPanel || closing;

  return (
    <div className="header-search" ref={rootRef}>
      <Search aria-hidden="true" size={15} strokeWidth={1.8} />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setOpen(true);
        }}
        onFocus={() => {
          onActivate?.();
          loadIndex();
          setOpen(true);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" && results.length) {
            event.preventDefault();
            setActiveIndex((index) => (index + 1) % results.length);
          } else if (event.key === "ArrowUp" && results.length) {
            event.preventDefault();
            setActiveIndex(
              (index) => (index - 1 + results.length) % results.length,
            );
          } else if (event.key === "Enter" && results.length) {
            event.preventDefault();
            chooseResult(activeIndex);
          } else if (event.key === "Escape") {
            event.preventDefault();
            if (showPanel) closePanel();
            else {
              setValue("");
              inputRef.current?.blur();
            }
          }
        }}
        placeholder="Search"
        aria-label={SEARCH_LABEL}
        autoComplete="off"
        spellCheck={false}
        enterKeyHint="search"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={showPanel}
        aria-controls={showPanel ? "site-search-results" : undefined}
        aria-activedescendant={
          showPanel && results.length
            ? `search-option-${results[activeIndex].id}`
            : undefined
        }
      />
      {value ? (
        <button
          type="button"
          className="header-search__clear"
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => {
            setValue("");
            inputRef.current?.focus();
          }}
          aria-label="Clear search"
        >
          Clear
        </button>
      ) : (
        <kbd className="header-search__kbd" aria-hidden="true">
          <span>⌘</span>K
        </kbd>
      )}

      {panelVisible && (
        <div
          className={`header-search-panel t-dropdown${showPanel ? " is-open" : ""}${closing && !showPanel ? " is-closing" : ""}`}
          data-origin="top-center"
        >
          <div
            className="search-results"
            id="site-search-results"
            role="listbox"
            aria-label="Search results"
          >
            {loading && !items.length ? (
              <p className="search-results__status">
                <span className="t-shimmer" data-text="Searching…">
                  Searching…
                </span>
              </p>
            ) : results.length ? (
              groups.map((group) => (
                <div
                  className="search-results__group"
                  role="group"
                  aria-label={group.label}
                  key={group.kind}
                >
                  <p className="search-results__label" aria-hidden="true">
                    {group.label}
                  </p>
                  {group.items.map((result) => {
                    const index = results.indexOf(result);
                    return (
                      <a
                        className={`search-result${index === activeIndex ? " is-active" : ""}`}
                        id={`search-option-${result.id}`}
                        role="option"
                        aria-selected={index === activeIndex}
                        href={result.href}
                        tabIndex={-1}
                        onMouseEnter={() => setActiveIndex(index)}
                        key={result.id}
                      >
                        <strong>{result.name}</strong>
                        <small>{result.meta}</small>
                      </a>
                    );
                  })}
                </div>
              ))
            ) : (
              <p className="search-results__status">
                {error
                  ? "Search is unavailable right now."
                  : `No results for "${query}".`}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
