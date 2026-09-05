import {
  Check,
  Copy,
  Download,
  ExternalLink,
  LogOut,
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
  formatPublishedAt,
  type CategoryId,
} from "@/lib/catalog";
import {
  filterInbox,
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
  initialInbox: InboxFile;
  /** SHA-256 hex of ADMIN_PASSWORD, or empty when open mode. */
  passwordHash: string;
  /** Dev-only open access when no password configured. */
  openAccess: boolean;
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

export default function AdminApp({
  initialInbox,
  passwordHash,
  openAccess,
}: Props) {
  const [authed, setAuthed] = useState(openAccess);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [inbox, setInbox] = useState<InboxFile>(initialInbox);
  const [filter, setFilter] = useState<Filter>("pending");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const loginWrapRef = useRef<HTMLLabelElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabsFirstRef = useRef(true);

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
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as InboxFile;
      if (parsed?.items && Array.isArray(parsed.items)) {
        setInbox(parsed);
        setDirty(true);
        setMessage("Restored local review draft from this browser.");
      }
    } catch {
      // ignore corrupt draft
    }
  }, [authed]);

  const items = useMemo(
    () => sortInboxItems(filterInbox(inbox.items, filter)),
    [filter, inbox.items],
  );

  const selected =
    items.find((item) => item.id === selectedId) ?? items[0] ?? null;
  useEffect(() => {
    if (!selected && items[0]) setSelectedId(items[0].id);
  }, [items, selected]);

  const counts = useMemo(() => {
    const base = {
      pending: 0,
      approved: 0,
      rejected: 0,
      all: inbox.items.length,
    };
    for (const item of inbox.items) {
      base[item.reviewStatus] += 1;
    }
    return base;
  }, [inbox.items]);

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
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(next));
    } catch {
      // ignore quota
    }
    if (note) setMessage(note);
  }

  function updateItem(id: string, updater: (item: InboxItem) => InboxItem) {
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
    setInbox(initialInbox);
    setDirty(false);
    setMessage("Discarded browser draft; reloaded built-in inbox.");
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

  const resultLabel =
    filter === "all"
      ? items.length === 1
        ? "item"
        : "items"
      : filter;

  return (
    <main className="admin-app">

      <section className="hero admin-hero" aria-labelledby="admin-title">
        <div className="hero__inner">
          <p className="eyebrow">Admin</p>
          <h1 id="admin-title">Discovery inbox</h1>
          <p className="hero__copy">
            Review auto-discovered launch films before they enter the catalog.
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
                  const preview = previewUrl(item);
                  const isSelected = selected?.id === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`admin-list__item${isSelected ? " is-selected" : ""}`}
                      aria-current={isSelected ? "true" : undefined}
                      onClick={() => setSelectedId(item.id)}
                    >
                      <div className="admin-list__thumb">
                        {preview ? (
                          <img src={preview} alt="" loading="lazy" />
                        ) : (
                          <span aria-hidden="true" />
                        )}
                      </div>
                      <div className="admin-list__meta">
                        <strong>{item.draft.title}</strong>
                        <span>
                          {item.watchlist.company}
                          <span aria-hidden="true"> · </span>
                          {categoryLabel(item.draft.category)}
                          <span aria-hidden="true"> · </span>
                          {formatPublishedAt(item.discoveredAt)}
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

        <section className="admin-help" aria-labelledby="admin-workflow">
          <h2 id="admin-workflow">Workflow</h2>
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
        </section>
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
  const preview = previewUrl(item);
  const tagsValue = item.draft.tags.join(", ");

  return (
    <div className="admin-editor">
      <div className="admin-editor__hero">
        {preview ? (
          <img src={preview} alt="" />
        ) : (
          <div className="admin-editor__hero-empty" />
        )}
        <div>
          <p className="eyebrow">@{item.draft.authorHandle}</p>
          <h2>{item.draft.title}</h2>
          <p className="admin-editor__signals">
            {categoryLabel(item.draft.category)}
            <span aria-hidden="true"> · </span>
            score {item.score}
          </p>
          {item.reasons.length ? (
            <p className="admin-editor__reasons">
              {item.reasons.slice(0, 4).join(" · ")}
            </p>
          ) : null}
          <div className="admin-editor__links">
            <a href={item.post.tweetUrl} target="_blank" rel="noopener noreferrer">
              Open on X <ExternalLink size={13} aria-hidden="true" />
            </a>
            {item.issueUrl ? (
              <a href={item.issueUrl} target="_blank" rel="noopener noreferrer">
                GitHub issue <ExternalLink size={13} aria-hidden="true" />
              </a>
            ) : null}
            {item.draft.videoUrl ? (
              <a href={item.draft.videoUrl} target="_blank" rel="noopener noreferrer">
                Video URL <ExternalLink size={13} aria-hidden="true" />
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

      <div className="admin-editor__grid">
        <label className="submit-field">
          <span>Title</span>
          <Input
            name="title"
            value={item.draft.title}
            onChange={(event) => onPatch({ title: event.target.value })}
          />
        </label>
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
        <label className="submit-field admin-field--full">
          <span>Description</span>
          <textarea
            className="submit-textarea"
            name="description"
            value={item.draft.description}
            onChange={(event) => onPatch({ description: event.target.value })}
            rows={4}
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
        <label className="admin-check">
          <input
            type="checkbox"
            name="featured"
            checked={item.draft.featured}
            onChange={(event) => onPatch({ featured: event.target.checked })}
          />
          <span>Featured on homepage</span>
        </label>
        <label className="submit-field admin-field--full">
          <span>Editor notes</span>
          <textarea
            className="submit-textarea"
            name="notes"
            value={item.notes}
            onChange={(event) => onNotes(event.target.value)}
            rows={3}
            placeholder="Internal notes (not published)…"
          />
        </label>
      </div>

      <div className="admin-editor__post">
        <h3>Original post</h3>
        <blockquote>{item.post.text}</blockquote>
      </div>
    </div>
  );
}
