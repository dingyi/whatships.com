import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Play,
  Search,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import PageHeader from "@/components/PageHeader";
import VideoPlayerDialog from "@/components/VideoPlayerDialog";
import VideoSearch, {
  type VideoSearchItem,
} from "@/components/VideoSearch";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  CATEGORIES,
  categoryLabel,
  formatDuration,
  formatPublishedAt,
} from "@/lib/catalog";
import { ShapeProvider } from "@/lib/shape-context";
import {
  clampPage,
  filterVideos,
  gridPoster,
  PAGE_SIZE,
  pageWindow,
  type DirectoryVideo,
} from "@/lib/directory";

interface Props {
  videos: DirectoryVideo[];
  totalCount: number;
}

function VideoCard({
  video,
  onPlay,
  index,
}: {
  video: DirectoryVideo;
  onPlay: (video: DirectoryVideo) => void;
  index: number;
}) {
  const duration = formatDuration(video.durationSeconds);
  // Mobile shows one column; only the first two posters are above the fold.
  const eager = index < 2;
  const small = gridPoster(video.poster);

  function rememberReturn() {
    window.history.replaceState(
      {
        ...(window.history.state ?? {}),
        plvReturn: {
          slug: video.slug,
          scrollY: window.scrollY,
        },
      },
      "",
      window.location.href,
    );
  }

  return (
    <article className="video-card">
      <span className="corner one" aria-hidden="true" />
      <span className="corner two" aria-hidden="true" />
      <span className="corner three" aria-hidden="true" />
      <span className="corner four" aria-hidden="true" />
      <div className="video-card__main" data-video-slug={video.slug}>
        <button
          type="button"
          className="video-card__media"
          onClick={() => onPlay(video)}
          aria-label={`Play ${video.title}${duration ? `, ${duration}` : ""}`}
        >
          <img
            src={small}
            srcSet={`${small} 960w, ${video.poster} 1440w`}
            sizes="(max-width: 699px) calc(100vw - 34px), 420px"
            alt={`Poster for ${video.title}`}
            loading={eager ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "low"}
            width="1440"
            height="810"
          />
          <span className="video-card__play" aria-hidden="true">
            <Play size={18} fill="currentColor" />
          </span>
          {duration && (
            <span className="video-card__duration" aria-hidden="true">
              {duration}
            </span>
          )}
          <span className="video-card__hover-label" aria-hidden="true">
            <span>{video.company}</span>
          </span>
        </button>
        <div className="video-card__body">
          <div>
            <h2>
              <a
                href={`/videos/${video.slug}/`}
                onClick={(event) => {
                  if (
                    event.button !== 0 ||
                    event.metaKey ||
                    event.ctrlKey ||
                    event.shiftKey ||
                    event.altKey
                  )
                    return;
                  rememberReturn();
                }}
              >
                {video.title}
              </a>
            </h2>
            <p className="video-card__meta">
              {video.company}
              <span aria-hidden="true"> · </span>
              {categoryLabel(video.category)}
              <span aria-hidden="true"> · </span>
              {formatPublishedAt(video.publishedAt)}
            </p>
          </div>
        </div>
      </div>
      <a
        className="video-card__external"
        href={video.tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open original post for ${video.title} on X`}
      >
        <ExternalLink size={17} aria-hidden="true" />
      </a>
    </article>
  );
}

export default function HomeApp({ videos, totalCount }: Props) {
  const [catalog, setCatalog] = useState(videos);
  const [catalogComplete, setCatalogComplete] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [searchOpen, setSearchOpen] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<DirectoryVideo | null>(null);
  const [ready, setReady] = useState(false);

  const searchItems = useMemo<VideoSearchItem[]>(
    () =>
      catalog.map((video) => ({
        name: video.title,
        slug: video.slug,
        meta: `${video.company} · ${categoryLabel(video.category)}`,
        searchText: [
          video.title,
          video.product,
          video.company,
          video.description,
          video.authorName,
          video.authorHandle,
          video.tags.join(" "),
          categoryLabel(video.category),
        ]
          .join(" ")
          .toLocaleLowerCase(),
      })),
    [catalog],
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextQuery = params.get("q") ?? "";
    const nextCategory = params.get("category") ?? "all";
    const nextPage = Number(params.get("page") ?? 1);
    setQuery(nextQuery);
    setCategory(nextCategory);
    setPage(nextPage);
    setSearchOpen(params.get("search") === "1");

    const needsFullCatalog =
      Boolean(nextQuery) || nextCategory !== "all" || nextPage > 1;

    let ignore = false;
    fetch("/directory-index.json")
      .then((response) => {
        if (!response.ok) throw new Error("Directory index unavailable");
        return response.json() as Promise<DirectoryVideo[]>;
      })
      .then((items) => {
        if (ignore) return;
        setCatalog(items);
        setCatalogComplete(true);
        setReady(true);
      })
      .catch(() => {
        if (ignore) return;
        setCatalogComplete(true);
        setReady(true);
      });

    if (!needsFullCatalog) setReady(true);

    return () => {
      ignore = true;
    };
  }, []);

  const filtered = useMemo(
    () => filterVideos(catalog, query, category),
    [catalog, query, category],
  );
  const resultCount =
    catalogComplete || query || category !== "all"
      ? filtered.length
      : totalCount;
  const currentPage = clampPage(page, filtered.length);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );
  const selectedCategoryLabel =
    category === "all"
      ? null
      : CATEGORIES.find((item) => item.id === category)?.label;
  const emptyContext = [
    query ? `“${query}”` : null,
    selectedCategoryLabel,
  ]
    .filter(Boolean)
    .join(" in ");

  useEffect(() => {
    if (!ready) return;
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category !== "all") params.set("category", category);
    if (currentPage > 1) params.set("page", String(currentPage));
    const queryString = params.toString();
    window.history.replaceState(
      window.history.state ?? {},
      "",
      queryString
        ? `${window.location.pathname}?${queryString}`
        : window.location.pathname,
    );
  }, [category, currentPage, query, ready]);

  useEffect(() => {
    if (!ready) return;

    const restoreDirectoryPosition = () => {
      const returnState = window.history.state?.plvReturn as
        | { slug?: string; scrollY?: number }
        | undefined;
      if (!returnState?.slug) return;

      window.requestAnimationFrame(() => {
        const target = document.querySelector<HTMLAnchorElement>(
          `[data-video-slug="${CSS.escape(returnState.slug!)}"]`,
        );
        if (!target) return;

        if (typeof returnState.scrollY === "number") {
          window.scrollTo({ top: returnState.scrollY, behavior: "instant" });
        }
        target.focus({ preventScroll: true });
      });
    };

    restoreDirectoryPosition();
    window.addEventListener("pageshow", restoreDirectoryPosition);
    return () =>
      window.removeEventListener("pageshow", restoreDirectoryPosition);
  }, [ready, currentPage]);

  function choosePage(next: number) {
    setPage(next);
    document
      .querySelector<HTMLElement>("#directory-title")
      ?.focus({ preventScroll: true });
    document
      .querySelector("#directory")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <PageHeader
        active="discover"
        homeSearch
        onSearch={() => setSearchOpen(true)}
      />
      <main data-directory-ready={ready}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__inner">
            <p className="hero__title" id="hero-title">
              Discover startup launch videos from X
            </p>
            <p className="hero__copy">
              A curated edit of launch films, demos, and walkthroughs that
              introduce new products to the world.
            </p>
          </div>
        </section>

        <section
          className="directory"
          id="directory"
          aria-labelledby="directory-title"
        >
          <div className="directory-toolbar">
            <div className="directory-controls">
              {/* Square shape: the toolbar chrome is noiced-style (0px
                  corners), but the shared Select defaults to the "rounded"
                  shape — without this the popup and items come out rounded
                  while the trigger button is square. Context reaches the
                  portalled SelectContent too. */}
              <ShapeProvider defaultShape="square">
                <Select
                  value={category}
                  onValueChange={(value) => {
                    setCategory(value || "all");
                    setPage(1);
                  }}
                >
                  <SelectTrigger
                    className="category-select"
                    aria-label="Filter by category"
                    placeholder="All categories"
                  />
                  <SelectContent>
                    <SelectItem index={0} value="all">
                      All categories
                    </SelectItem>
                    {CATEGORIES.map((item, index) => (
                      <SelectItem
                        key={item.id}
                        index={index + 1}
                        value={item.id}
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </ShapeProvider>
              <p className="result-count" id="directory-title" tabIndex={-1}>
                {resultCount} video{resultCount === 1 ? "" : "s"}
              </p>
            </div>
            <button
              className="directory-search"
              type="button"
              aria-label="Search launch videos"
              onClick={() => setSearchOpen(true)}
            >
              <Search aria-hidden="true" size={15} strokeWidth={1.8} />
              <span>Search videos</span>
              <kbd aria-hidden="true">
                <span>⌘</span>K
              </kbd>
            </button>
          </div>

          {visible.length ? (
            <div className="video-grid">
              {visible.map((video, index) => (
                <VideoCard
                  video={video}
                  key={video.id}
                  index={index}
                  onPlay={setPlayingVideo}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>No videos found.</h2>
              <p>No results for {emptyContext || "the current filters"}.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                  setPage(1);
                }}
              >
                Reset filters
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <nav className="pagination" aria-label="Directory pages">
              <button
                type="button"
                onClick={() => choosePage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <ArrowLeft size={16} />
              </button>
              {pageWindow(currentPage, totalPages).map(
                (value, index, values) => (
                  <span key={value} className="pagination__item">
                    {index > 0 && value - values[index - 1] > 1 && (
                      <span className="pagination__ellipsis">…</span>
                    )}
                    <button
                      className={currentPage === value ? "is-active" : ""}
                      type="button"
                      onClick={() => choosePage(value)}
                      aria-current={currentPage === value ? "page" : undefined}
                    >
                      {value}
                    </button>
                  </span>
                ),
              )}
              <button
                type="button"
                onClick={() => choosePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                <ArrowRight size={16} />
              </button>
            </nav>
          )}
        </section>
      </main>

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="search-dialog" showCloseButton={false}>
          <DialogTitle className="sr-only">Search launch videos</DialogTitle>
          <VideoSearch
            items={searchItems}
            value={query}
            onValueChange={(value) => {
              setQuery(value);
              setPage(1);
            }}
            onClose={() => setSearchOpen(false)}
          />
        </DialogContent>
      </Dialog>
      <VideoPlayerDialog
        video={playingVideo}
        open={Boolean(playingVideo)}
        onOpenChange={(open) => {
          if (!open) setPlayingVideo(null);
        }}
        onNavigate={
          filtered.length > 1
            ? (direction) => {
                setPlayingVideo((current) => {
                  const index = current
                    ? filtered.findIndex((item) => item.id === current.id)
                    : -1;
                  const next =
                    filtered[
                      (index + direction + filtered.length) % filtered.length
                    ];
                  return next ?? current;
                });
              }
            : undefined
        }
      />
    </>
  );
}
