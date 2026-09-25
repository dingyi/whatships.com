import {
  Check,
  Copy,
  Download,
  ExternalLink,
  LogOut,
  Play,
  RotateCcw,
  X,
} from "lucide-react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  playbackUrl,
  type CategoryId,
} from "@/lib/catalog";
import {
  filterInbox,
  normalizeInbox,
  type InboxFile,
  type InboxItem,
  type ReviewStatus,
  sha256Hex,
  sortInboxItems,
  upsertDraftFields,
} from "@/lib/inbox";
import { positionTabPill, shakeInput } from "@/lib/motion";

const AUTH_KEY = "plv-admin-session";
const DRAFT_KEY = "plv-admin-inbox-draft";

type Filter = ReviewStatus | "all";

interface Props {
  /** Dev-only JSON endpoint for the on-disk inbox. */
  inboxUrl: string;
  /** SHA-256 hex of ADMIN_PASSWORD, or empty when open mode. */
  passwordHash: string;
  /** Dev-only open access when no password configured. */
  openAccess: boolean;
}

function parseDraft(raw: string | null): InboxFile | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as InboxFile;
    if (parsed?.items && Array.isArray(parsed.items)) return parsed;
  } catch {
    // ignore corrupt draft
  }
  return null;
}

function isNewer(a: string, b: string) {
  return Date.parse(a) > Date.parse(b);
}

const FILTERS = [
  ["pending", "Pending"],
  ["approved", "Approved"],
  ["rejected", "Rejected"],
  ["all", "All"],
] as const;

function Corners() {
  return (
    <>
      <span className="corner one" aria-hidden="true" />
      <span className="corner two" aria-hidden="true" />
      <span className="corner three" aria-hidden="true" />
      <span className="corner four" aria-hidden="true" />
    </>
  );
}

function previewUrl(item: InboxItem) {
  return item.post.media.find((media) => media.previewImageUrl)?.previewImageUrl
    ?? null;
}

/**
 * Click-to-play preview of the candidate video. Playback goes through
 * playbackUrl() (the video proxy) because video.twimg.com 403s any
 * non-Twitter Referer — a direct <video src> would never load. When the
 * proxy is unreachable (PUBLIC_VIDEO_PROXY_BASE unset in dev), fall back
 * to a link at the raw URL: direct navigation sends no Referer, so the
 * raw mp4 still opens in a new tab.
 */
function VideoPlayer({ item }: { item: InboxItem }) {
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const poster = previewUrl(item);
  const duration = item.draft.durationSeconds ?? null;

  if (failed) {
    return (
      <div className="admin-player admin-player--failed">
        {poster ? <img src={poster} alt="" loading="lazy" /> : null}
        <div className="admin-player__fallback">
          <p>Preview unavailable — proxy not reachable.</p>
          {item.draft.videoUrl ? (
            <a
              href={item.draft.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open raw video <ExternalLink size={12} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    );
  }

  if (!playing) {
    return (
      <button
        type="button"
        className="admin-player"
        onClick={() => setPlaying(true)}
        aria-label={`Play preview of ${item.draft.title}`}
      >
        {poster ? <img src={poster} alt="" loading="lazy" /> : null}
        <span className="admin-player__play" aria-hidden="true">
          <Play size={18} strokeWidth={1.8} />
        </span>
        {duration
          ? <span className="admin-player__chip">{formatDuration(duration)}</span>
          : null}
      </button>
    );
  }

  return (
    <video
      className="admin-player admin-player--video"
      src={playbackUrl(item.draft)}
      poster={poster ?? undefined}
      controls
      autoPlay
      playsInline
      preload="auto"
      onError={() => setFailed(true)}
    />
  );
}

/**
 * Queue thumbnail with a delayed hover preview: after 350ms under the
 * cursor, swap the poster for a muted looping video so reviewers can scan
 * the queue without opening each item. Non-mouse pointers skip it.
 */
function ListThumb({ item }: { item: InboxItem }) {
  const [live, setLive] = useState(false);
  const [failed, setFailed] = useState(false);
  const timerRef = useRef<number | null>(null);
  const poster = previewUrl(item);
  const duration = item.draft.durationSeconds ?? null;

  useEffect(() => () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
  }, []);

  if (failed || !item.draft.videoUrl) {
    return (
      <div className="admin-list__thumb">
        {poster ? <img src={poster} alt="" loading="lazy" /> : <span aria-hidden="true" />}
      </div>
    );
  }

  return (
    <div
      className="admin-list__thumb"
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse") return;
        if (timerRef.current) window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => setLive(true), 350);
      }}
      onPointerLeave={() => {
        if (timerRef.current) window.clearTimeout(timerRef.current);
        timerRef.current = null;
        setLive(false);
      }}
    >
      {poster ? <img src={poster} alt="" loading="lazy" /> : null}
      {live ? (
        <video
          className="admin-list__live"
          src={playbackUrl(item.draft)}
          autoPlay
          muted
          loop
          playsInline
          onError={() => {
            setFailed(true);
            setLive(false);
          }}
        />
      ) : (
        duration
          ? <span className="admin-list__duration">{formatDuration(duration)}</span>
          : null
      )}
    </div>
  );
}

export default function AdminApp({
  inboxUrl,
  passwordHash,
  openAccess,
}: Props) {
  const [authed, setAuthed] = useState(openAccess);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [inbox, setInbox] = useState<InboxFile | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("pending");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const loginWrapRef = useRef<HTMLLabelElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabsFirstRef = useRef(true);
  const persistTimer = useRef<number | null>(null);

  useEffect(() => {
    if (openAccess) {
      setAuthed(true);
      return;
    }
    if (!passwordHash) return;
    try {
      const session = sessionStorage.getItem(AUTH_KEY);
      if (session === passwordHash) setAuthed(true);
    } catch {
      // ignore
    }
  }, [openAccess, passwordHash]);

  useEffect(() => {
    if (!authed) return;
    let cancelled = false;
    setLoadError(null);
    fetch(inboxUrl, { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Inbox ${response.status}`);
        }
        return normalizeInbox(await response.json());
      })
      .then((server) => {
        if (cancelled) return;
        let draft: InboxFile | null = null;
        try {
          draft = parseDraft(localStorage.getItem(DRAFT_KEY));
        } catch {
          draft = null;
        }
        if (draft && isNewer(draft.updatedAt, server.updatedAt)) {
          setInbox(draft);
          setDirty(true);
          setMessage("Restored local review draft from this browser.");
          return;
        }
        setInbox(server);
        setDirty(false);
        if (draft) {
          setMessage("Loaded latest inbox from disk. Browser draft was older — Reset local if this still looks stale.");
        }
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setLoadError(error instanceof Error ? error.message : "Could not load inbox.");
      });
    return () => {
      cancelled = true;
    };
  }, [authed, inboxUrl]);

  useEffect(() => () => {
    if (persistTimer.current) window.clearTimeout(persistTimer.current);
  }, []);

  const items = useMemo(
    () => sortInboxItems(filterInbox(inbox?.items ?? [], filter)),
    [filter, inbox],
  );

  const selected =
    items.find((item) => item.id === selectedId) ?? items[0] ?? null;
  useEffect(() => {
    if (!selected && items[0]) setSelectedId(items[0].id);
  }, [items, selected]);

  const counts = useMemo(() => {
    const list = inbox?.items ?? [];
    const base = {
      pending: 0,
      approved: 0,
      rejected: 0,
      all: list.length,
    };
    for (const item of list) {
      base[item.reviewStatus] += 1;
    }
    return base;
  }, [inbox]);

  async function onLogin(event: { preventDefault: () => void }) {
    event.preventDefault();
    setAuthError(null);
    if (openAccess) {
      setAuthed(true);
      return;
    }
    if (!passwordHash) {
      setAuthError("ADMIN_PASSWORD is not configured for this build.");
      return;
    }
    const hash = await sha256Hex(password);
    if (hash !== passwordHash) {
      setAuthError("Wrong password.");
      return;
    }
    try {
      sessionStorage.setItem(AUTH_KEY, passwordHash);
    } catch {
      // ignore
    }
    setAuthed(true);
    setPassword("");
  }

  useEffect(() => {
    if (!authError) return;
    const input = loginWrapRef.current?.querySelector<HTMLElement>(".t-input");
    if (input) shakeInput(input);
  }, [authError]);

  useLayoutEffect(() => {
    if (!authed) return;
    const bar = tabsRef.current;
    if (!bar) return;
    positionTabPill(bar, !tabsFirstRef.current);
    tabsFirstRef.current = false;
  }, [authed, filter, counts, items.length]);

  useEffect(() => {
    const onResize = () => {
      if (tabsRef.current) positionTabPill(tabsRef.current, false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Review shortcuts: j/k or arrows move through the queue, a approves,
  // r rejects. Ignored while typing in a field or with modifier keys held.
  useEffect(() => {
    if (!authed) return;
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (
        target
        && (target.isContentEditable
          || /^(input|textarea|select)$/i.test(target.tagName))
      ) {
        return;
      }
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      function focusListItem(id: string) {
        document
          .querySelector(`[data-item-id="${CSS.escape(id)}"]`)
          ?.scrollIntoView({ block: "nearest" });
      }

      if (event.key === "j" || event.key === "ArrowDown") {
        event.preventDefault();
        const index = items.findIndex((item) => item.id === selected?.id);
        const next = items[Math.min(index + 1, items.length - 1)] ?? items[0];
        if (next) {
          setSelectedId(next.id);
          focusListItem(next.id);
        }
      } else if (event.key === "k" || event.key === "ArrowUp") {
        event.preventDefault();
        const index = items.findIndex((item) => item.id === selected?.id);
        const prev = items[Math.max(index - 1, 0)] ?? items[0];
        if (prev) {
          setSelectedId(prev.id);
          focusListItem(prev.id);
        }
      } else if (event.key === "a" && selected) {
        setStatus(selected.id, "approved");
      } else if (event.key === "r" && selected) {
        setStatus(selected.id, "rejected");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [authed, items, selected]);

  function logout() {
    try {
      sessionStorage.removeItem(AUTH_KEY);
    } catch {
      // ignore
    }
    setAuthed(false);
  }

  function persist(next: InboxFile, note?: string) {
    setInbox(next);
    setDirty(true);
    if (persistTimer.current) window.clearTimeout(persistTimer.current);
    persistTimer.current = window.setTimeout(() => {
      try {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(next));
      } catch {
        // ignore quota
      }
    }, 250);
    if (note) setMessage(note);
  }

  function updateItem(id: string, updater: (item: InboxItem) => InboxItem) {
    if (!inbox) return;
    persist({
      updatedAt: new Date().toISOString(),
      items: inbox.items.map((item) =>
        item.id === id ? updater(item) : item,
      ),
    });
  }

  function setStatus(id: string, reviewStatus: ReviewStatus) {
    updateItem(id, (item) => ({
      ...item,
      reviewStatus,
      reviewedAt:
        reviewStatus === "pending" ? null : new Date().toISOString(),
    }));
    setMessage(
      reviewStatus === "approved"
        ? "Marked approved. Download inbox.json, then run pnpm inbox:apply."
        : reviewStatus === "rejected"
          ? "Marked rejected."
          : "Restored to pending.",
    );
  }

  function downloadInbox() {
    const blob = new Blob([`${JSON.stringify(inbox, null, 2)}\n`], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "inbox.json";
    anchor.click();
    URL.revokeObjectURL(url);
    setMessage("Downloaded inbox.json — replace src/data/inbox.json and commit.");
  }

  async function copyDraft(item: InboxItem) {
    const payload = {
      ...item.draft,
      status: item.reviewStatus === "approved" ? "published" : item.draft.status,
    };
    try {
      await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setMessage("Could not copy — select the JSON manually.");
    }
  }

  function resetLocalDraft() {
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      // ignore
    }
    setDirty(false);
    setLoadError(null);
    fetch(inboxUrl, { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Inbox ${response.status}`);
        return normalizeInbox(await response.json());
      })
      .then((server) => {
        setInbox(server);
        setMessage("Discarded browser draft; reloaded inbox from disk.");
      })
      .catch((error: unknown) => {
        setLoadError(error instanceof Error ? error.message : "Could not load inbox.");
      });
  }

  if (!authed) {
    return (
      <main className="submit-page admin-login">
        <form className="submit-form" onSubmit={onLogin}>
          <div className="submit-intro">
            <p className="eyebrow">Admin</p>
            <h1>Review the discovery inbox</h1>
            <p className="submit-lead">
              {openAccess
                ? "Local dev is open-access because ADMIN_PASSWORD is unset. The queue is not on the production site."
                : "Password-protects the review queue. This is a soft gate for a personal static site — do not put secrets in candidate metadata."}
            </p>
          </div>

          {!passwordHash && !openAccess ? (
            <p className="admin-banner admin-banner--warn">
              Set <code>ADMIN_PASSWORD</code> in the environment before building
              to enable login.
            </p>
          ) : null}
          {openAccess ? (
            <p className="admin-banner">
              Dev open-access mode (no <code>ADMIN_PASSWORD</code>).
            </p>
          ) : null}

          <fieldset className="submit-fieldset">
            <legend>Sign in</legend>
            {!openAccess ? (
              <label
                className={`submit-field t-input-wrap${authError ? " is-error" : ""}`}
                ref={loginWrapRef}
              >
                <span>Password</span>
                <Input
                  className={`t-input${authError ? " is-error" : ""}`}
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  aria-invalid={Boolean(authError) || undefined}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Admin password…"
                />
                {authError ? (
                  <p className="submit-error t-error-msg" role="alert">
                    {authError}
                  </p>
                ) : null}
              </label>
            ) : null}
          </fieldset>

          <div className="submit-actions">
            <Button type="submit" className="submit-button" size="lg">
              Enter admin
            </Button>
          </div>
        </form>
      </main>
    );
  }

  if (loadError) {
    return (
      <main className="submit-page admin-login">
        <div className="submit-form">
          <p className="eyebrow">Admin</p>
          <h1>Could not load inbox</h1>
          <p className="submit-lead">{loadError}</p>
          <Button type="button" onClick={() => resetLocalDraft()}>
            Retry
          </Button>
        </div>
      </main>
    );
  }

  if (!inbox) {
    return (
      <main className="submit-page admin-login">
        <div className="submit-form">
          <p className="eyebrow">Admin</p>
          <h1>Loading inbox…</h1>
          <p className="submit-lead">Fetching the on-disk review queue.</p>
        </div>
      </main>
    );
  }

  const resultLabel =
    filter === "all"
      ? items.length === 1
        ? "item"
        : "items"
      : filter;

  return (
    <main className="admin-app">

      <section className="hero admin-hero" aria-labelledby="admin-title">
        <div className="hero__inner admin-hero__inner">
          <p className="eyebrow">Admin</p>
          <h1 id="admin-title">Discovery inbox</h1>
          <p className="hero__copy">
            Review auto-discovered launch films before they enter the catalog.
            Hover a thumbnail to preview; click it to play with sound.
          </p>
        </div>
      </section>

      <section
        className="directory admin-directory"
        aria-labelledby="admin-title"
      >
        <div className="directory-toolbar">
          <div className="directory-controls">
            <div
              className="admin-filters t-tabs"
              ref={tabsRef}
              role="tablist"
              aria-label="Review status"
            >
              <span className="t-tabs-pill" aria-hidden="true" />
              {FILTERS.map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  className="t-tab"
                  role="tab"
                  aria-selected={filter === id}
                  onClick={() => setFilter(id)}
                >
                  {label}
                  <span>{counts[id]}</span>
                </button>
              ))}
            </div>
            <p className="result-count">
              {items.length} {resultLabel}
              {dirty ? " · unsaved" : ""}
            </p>
            <p className="admin-shortcuts" aria-hidden="true">
              J/K select · A approve · R reject
            </p>
          </div>
          <div className="admin-toolbar__actions">
            <button
              type="button"
              className={`admin-download${dirty ? " is-dirty" : ""}`}
              onClick={downloadInbox}
              aria-label="Download inbox.json"
            >
              <Download size={15} strokeWidth={1.8} aria-hidden="true" />
              <span>Download inbox</span>
              <kbd>.json</kbd>
            </button>
            {dirty ? (
              <button
                type="button"
                className="admin-reset"
                onClick={resetLocalDraft}
              >
                Reset local
              </button>
            ) : null}
            {!openAccess ? (
              <Button
                type="button"
                variant="ghost"
                className="admin-chrome"
                leadingIcon={LogOut}
                onClick={logout}
              >
                Log out
              </Button>
            ) : null}
          </div>
        </div>

        {message ? (
          <p className="admin-banner" role="status" aria-live="polite">
            {message}
          </p>
        ) : null}

        {items.length === 0 ? (
          <div className="empty-state">
            <Corners />
            <h2>No items in this filter.</h2>
            <p>
              {filter === "all"
                ? "The discovery inbox is empty."
                : `No ${filter} candidates.`}
            </p>
            {filter !== "pending" && counts.pending > 0 ? (
              <button type="button" onClick={() => setFilter("pending")}>
                Show pending
              </button>
            ) : null}
          </div>
        ) : (
          <div className="admin-workspace">
            <aside className="admin-list" aria-label="Candidates">
              <Corners />
              <div className="admin-list__scroll">
                {items.map((item) => {
                  const isSelected = selected?.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`admin-list__item${isSelected ? " is-selected" : ""}`}
                      aria-current={isSelected ? "true" : undefined}
                      data-item-id={item.id}
                      onClick={() => setSelectedId(item.id)}
                    >
                      <ListThumb item={item} />
                      <div className="admin-list__meta">
                        <strong>{item.draft.title}</strong>
                        <span>
                          {item.draft.company}
                          <span aria-hidden="true"> · </span>
                          {categoryLabel(item.draft.category)}
                          <span aria-hidden="true"> · </span>
                          {formatPublishedAt(item.draft.publishedAt)}
                        </span>
                        <em data-status={item.reviewStatus}>
                          {item.reviewStatus}
                          <span aria-hidden="true"> · </span>
                          score {item.score}
                        </em>
                      </div>
                    </button>
                  );
                })}
              </div>
            </aside>

            <section className="admin-detail" aria-label="Candidate editor">
              <Corners />
              {selected ? (
                <ItemEditor
                  key={selected.id}
                  item={selected}
                  copied={copied}
                  onPatch={(patch) =>
                    updateItem(selected.id, (item) =>
                      upsertDraftFields(item, patch),
                    )
                  }
                  onNotes={(notes) =>
                    updateItem(selected.id, (item) => ({ ...item, notes }))
                  }
                  onStatus={(status) => setStatus(selected.id, status)}
                  onCopy={() => copyDraft(selected)}
                />
              ) : (
                <div className="admin-empty">
                  <h2>Select a candidate to review.</h2>
                  <p>Pick an item from the queue.</p>
                </div>
              )}
            </section>
          </div>
        )}

        <details className="admin-help admin-section">
          <summary>Workflow</summary>
          <div className="admin-section__body">
            <ol>
              <li>Review pending items; edit metadata; Approve or Reject.</li>
              <li>
                <strong>Download inbox.json</strong> and replace{" "}
                <code>src/data/inbox.json</code> in the repo.
              </li>
              <li>
                Run <code>pnpm inbox:apply</code> to merge approved drafts into{" "}
                <code>videos.json</code>.
              </li>
              <li>
                Run <code>pnpm posters:capture</code> for new slugs, then commit
                and deploy.
              </li>
            </ol>
          </div>
        </details>
      </section>
    </main>
  );
}

function ItemEditor({
  item,
  copied,
  onPatch,
  onNotes,
  onStatus,
  onCopy,
}: {
  item: InboxItem;
  copied: boolean;
  onPatch: (
    patch: Partial<{
      title: string;
      product: string;
      company: string;
      description: string;
      category: CategoryId;
      tags: string[];
      featured: boolean;
    }>,
  ) => void;
  onNotes: (notes: string) => void;
  onStatus: (status: ReviewStatus) => void;
  onCopy: () => void;
}) {
  const tagsValue = item.draft.tags.join(", ");
  const postedAt = formatPublishedAt(item.post.createdAt);

  return (
    <div className="admin-editor">
      <div className="admin-editor__hero">
        <VideoPlayer item={item} />
        <div className="admin-editor__meta">
          <p className="eyebrow">
            @{item.draft.authorHandle}
            <span aria-hidden="true"> · </span>
            {postedAt}
          </p>
          <h2>{item.draft.title}</h2>
          <p className="admin-editor__signals">
            {categoryLabel(item.draft.category)}
            <span aria-hidden="true"> · </span>
            score {item.score}
          </p>
          <div className="admin-editor__links">
            <a href={item.post.tweetUrl} target="_blank" rel="noopener noreferrer">
              Open on X <ExternalLink size={13} aria-hidden="true" />
            </a>
            {item.issueUrl ? (
              <a href={item.issueUrl} target="_blank" rel="noopener noreferrer">
                GitHub issue <ExternalLink size={13} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="admin-editor__actions">
        <Button
          type="button"
          className="admin-chrome"
          leadingIcon={Check}
          onClick={() => onStatus("approved")}
        >
          Approve
        </Button>
        <Button
          type="button"
          variant="tertiary"
          className="admin-chrome"
          leadingIcon={X}
          onClick={() => onStatus("rejected")}
        >
          Reject
        </Button>
        {item.reviewStatus !== "pending" ? (
          <Button
            type="button"
            variant="ghost"
            className="admin-chrome"
            leadingIcon={RotateCcw}
            onClick={() => onStatus("pending")}
          >
            Back to pending
          </Button>
        ) : null}
        <Button
          type="button"
          variant="tertiary"
          className="admin-chrome"
          leadingIcon={copied ? Check : Copy}
          onClick={onCopy}
        >
          {copied ? "Copied" : "Copy draft JSON"}
        </Button>
      </div>

      <details className="admin-section" open>
        <summary>Metadata</summary>
        <div className="admin-section__body admin-editor__grid">
          <label className="submit-field admin-field--full">
            <span>Title</span>
            <Input
              name="title"
              value={item.draft.title}
              onChange={(event) => onPatch({ title: event.target.value })}
            />
          </label>
          <label className="submit-field admin-field--full">
            <span>Description</span>
            <textarea
              className="submit-textarea"
              name="description"
              value={item.draft.description}
              onChange={(event) => onPatch({ description: event.target.value })}
              rows={3}
            />
          </label>
          <label className="submit-field">
            <span>Category</span>
            <Select
              value={item.draft.category}
              onValueChange={(value) => {
                if (value) onPatch({ category: value as CategoryId });
              }}
            >
              <SelectTrigger
                className="admin-select"
                placeholder="Select category"
              />
              <SelectContent>
                {CATEGORIES.map((category, index) => (
                  <SelectItem
                    key={category.id}
                    index={index}
                    value={category.id}
                  >
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </label>
          <label className="admin-check admin-check--inline">
            <input
              type="checkbox"
              name="featured"
              checked={item.draft.featured}
              onChange={(event) => onPatch({ featured: event.target.checked })}
            />
            <span>Featured on homepage</span>
          </label>
        </div>
      </details>

      <details className="admin-section">
        <summary>More fields</summary>
        <div className="admin-section__body admin-editor__grid">
          <label className="submit-field">
            <span>Product</span>
            <Input
              name="product"
              value={item.draft.product}
              onChange={(event) => onPatch({ product: event.target.value })}
            />
          </label>
          <label className="submit-field">
            <span>Company</span>
            <Input
              name="company"
              value={item.draft.company}
              onChange={(event) => onPatch({ company: event.target.value })}
            />
          </label>
          <label className="submit-field admin-field--full">
            <span>Tags (comma-separated)</span>
            <Input
              name="tags"
              value={tagsValue}
              onChange={(event) =>
                onPatch({
                  tags: event.target.value
                    .split(",")
                    .map((part) => part.trim())
                    .filter(Boolean),
                })
              }
            />
          </label>
          <label className="submit-field admin-field--full">
            <span>Editor notes</span>
            <textarea
              className="submit-textarea"
              name="notes"
              value={item.notes}
              onChange={(event) => onNotes(event.target.value)}
              rows={2}
              placeholder="Internal notes (not published)…"
            />
          </label>
        </div>
      </details>

      <details className="admin-section">
        <summary>Original post</summary>
        <div className="admin-section__body admin-editor__post">
          <blockquote>{item.post.text}</blockquote>
          {item.reasons.length ? (
            <p className="admin-editor__reasons">
              <span>Discovery signals</span>
              {item.reasons.join(" · ")}
            </p>
          ) : null}
        </div>
      </details>
    </div>
  );
}
