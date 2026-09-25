# whatships.com — agent guide

A curated directory of startup launch videos from X, live at
[whatships.com](https://whatships.com). Astro static site + React islands,
hosted on Cloudflare Workers static assets.

## Commands

```bash
npx pnpm@12.5.1 install   # pinned: CI pins the same version (see note below)
node_modules/.bin/astro dev
node_modules/.bin/astro build
node_modules/.bin/astro check
node_modules/.bin/vitest run
node_modules/.bin/wrangler deploy   # manual deploy (see below)
```

The pnpm version is pinned in `.github/workflows/deploy.yml` and
`deploy-video-proxy.yml` (`pnpm/action-setup` → `version: 12.5.1`) and **deliberately not** in
`package.json`'s `packageManager` field. That field makes pnpm
self-manage the manager version and rewrite `packageManagerDependencies`
in `pnpm-lock.yaml` on every local `npx pnpm install` — the entry flips
between `pnpm` and `@pnpm/exe` depending on the invocation, so the
lockfile never stays clean, and `--frozen-lockfile` does not prevent the
write. Do not re-add the field; pass the version to `npx` instead, since
a `pnpm` on `PATH` may be older than CI's.

## Deployment (read carefully)

- **Every push to `main` auto-deploys the site** via
  `.github/workflows/deploy.yml` (build with `PUBLIC_VIDEO_PROXY_BASE`
  inlined → `rm -rf dist/streams` → `wrangler deploy`). `/admin` is not
  part of the production build. Check runs with `gh run list`.
- **The video proxy deploys from its own workflow**,
  `.github/workflows/deploy-video-proxy.yml`, path-filtered to
  `workers/video-proxy/**` with its own `deploy-video-proxy` concurrency
  group, so a site failure cannot hold back a proxy fix and a proxy change
  no longer rides along in the site job.
- Both production workflows serialize on their own concurrency group with
  `cancel-in-progress: false`, so a run already inside `wrangler deploy` is
  never killed by the next push (superseded runs that are still queued
  collapse to the newest one).
- Manual deploy: `npx pnpm@12.5.1 deploy` (site, same three steps) and
  `cd workers/video-proxy && npx wrangler deploy` (proxy). Both need
  `CLOUDFLARE_API_TOKEN` in the environment.
- Domains: `whatships.com` + `www` serve the site via `workers/site/`
  (markdown `Accept` negotiation + agent 404s in front of static assets);
  `proxy.whatships.com` is the video proxy (`workers/video-proxy/`, its own
  wrangler.toml, deployed by `.github/workflows/deploy-video-proxy.yml`).
  Do not revert the site `wrangler.toml` to assets-only —
  agents would get HTML for `Accept: text/markdown` again.
- **Never commit `public/streams/` or `dist/`** — both are gitignored.
  Local streams are gone for good; do not regenerate or re-add them.

## Video playback architecture

X's CDN (`video.twimg.com`) returns 403 for any non-Twitter Referer, and
browsers always send one on `<video>` requests. Playback therefore goes
through the self-hosted proxy (`workers/video-proxy/src/index.js`), which
fetches upstream Referer-less and forwards `Range`.

`playbackUrl()` in `src/lib/catalog.ts` resolves in order:
`streamUrl` override → proxy-wrapped `videoUrl` (when
`PUBLIC_VIDEO_PROXY_BASE` is set) → `/streams/{slug}.mp4` (dev fallback).
The base URL lives in `.env` locally and in the Actions workflow for builds.

Grid cards hover-preview instead of showing a play chip on desktop:
`src/lib/hover-preview.ts` (initialized in BaseLayout) plays a muted, looping
`<video>` over the poster on pointer hover, one live stream at a time. Any
card surface opts in by putting `data-preview-src={playbackUrl(video)}` on
its `.video-card__media` element — no per-framework wiring. Touch and
reduced-motion users keep the play chip; clicking still opens the player.

## Adding videos (the established recipe)

1. Fetch tweet data from the public syndication endpoint (X API credits are
   depleted; do NOT use the paid API):
   `https://cdn.syndication.twimg.com/tweet-result?id=<id>&token=<t>&lang=en`
   where `t = ((id / 1e15) * Math.PI).toString(36).replace(/(0+|\.)/g, "")`.
   Working fetch scripts live in `.tmp/add-tweets/` (gitignored scratch).
2. Append an entry to `src/data/videos.json` matching the existing schema
   exactly (`id: plv-<slug>`, all fields, `status: "published"`,
   `featured: false`). Skip duplicates by `tweetId`/`slug`.
   Non-product-launch films (reels, demos, farewells) use
   `category: "motion"`.
3. Capture posters **per slug** (full-catalog runs are slow and get killed):
   `node scripts/capture-posters.mjs --slug=<slug>` — emits
   `public/posters/<slug>.webp` (1440×810) and `<slug>-960.webp` (grid).
   The script no longer produces streams; ignore `public/streams` entirely.
4. Snapshot the view count: `node scripts/fetch-views.mjs --slug=<slug>`
   writes `views` + `viewsCapturedAt` (see "View counts" below). Optional —
   the card chip simply does not render without it — but every published
   entry is expected to have one.
5. `node_modules/.bin/vitest run` → `astro build` → commit
   (`videos.json` + `public/posters/`) → push. Actions deploys in ~1 min.
   New pages can 404 briefly at the edge; retry before assuming failure.

## Data & taxonomy

- Catalog: `src/data/videos.json` (published + draft). `publishedVideos`
  sorts by `publishedAt` desc at runtime — file order does not matter.
- Write an edited title (≤ 55 chars) and one-line description for new
  entries instead of pasting the post text — raw, truncated post copy
  across hundreds of pages reads as scraped content to Google.
- Duplicate entries (same video under several slugs): keep the maker's
  original, set the others to `draft`, and add `old → kept` to
  `src/data/redirects.json` — the site worker answers those with a 301.
- Studios: `src/data/studios.json` + `/studios/` directory of motion
  studios and independent designers that make launch films
  (`kind: "studio" | "person"`). Posters live in `public/posters/studios/`.
  IDs are `studio-<slug>` or `person-<slug>`.
- Categories (`src/lib/catalog.ts`): `ai`, `developer-tools`, `design`,
  `motion`, `productivity`, `consumer`, `hardware`, `other`.
- **View counts**: `views` + `viewsCapturedAt` on a catalog entry are a
  *snapshot* — X view counts only grow, so a number without its capture
  date is a lie. The syndication endpoint we use for adding videos does
  **not** return view counts; `scripts/fetch-views.mjs` reads them from the
  public fxtwitter mirror (`api.fxtwitter.com/i/status/<id>`) instead.
  Default run refreshes only unread/stale (>14 days) snapshots;
  `--all` refreshes everything, `--slug=` targets one, `--dry-run` fetches
  without writing. `views: null` plus a stamp means "read it, the provider
  had no count" (deleted post or withheld metrics) — those age like any
  other snapshot, so the default run stays a no-op and exits 0. A dozen
  entries are in that state; the linked post being gone is an editorial
  call, not something the script can repair. Never fetch views at build
  time — the catalog stays a plain committed file, and `astro build` must
  not depend on a third party.
- **Catalog quality gate**: `scripts/catalog-quality.mjs` defines the bar
  (title ≤ 55 chars, no truncated `…` post text, a written description,
  2+ real tags — source tags like `launchgallery` and the slug don't count).
  `tests/catalog-quality.test.ts` enforces it for every published entry not
  in `src/data/quality-backlog.json`, and fails if a listed entry already
  passes — remove fixed slugs from the backlog, never add new ones.
  `apply-inbox.mjs` refuses approved drafts that fail.
- Backlog rewrites: `node scripts/rewrite-queue.mjs [--limit=50]` writes
  `src/data/rewrites/batch-NNN.json` (most-viewed first, full post text from
  fxtwitter). Fill `proposed` from `sourceText` only — no invented facts —
  set `reviewStatus: "approved"`, then
  `node scripts/apply-rewrites.mjs <batch>` (`--dry-run` first). Items with
  `notes` flag reposts/third-party posts that need an editorial call.
- Admin review queue: `src/data/inbox.json` + local-only `/admin`
  (`pnpm dev` → http://localhost:4321/admin/; never shipped in `astro build`).
  `scripts/apply-inbox.mjs` merges approved drafts.
- Weekly discovery: `scripts/discovery/` + `src/data/watchlist.json`.
- Discovery PRs sometimes rewrite `inbox.json` wholesale instead of
  appending — merging several directly drops pending candidates. Union them
  with `node scripts/merge-inbox.mjs <file.json> [...]` (dedupes by
  `tweetId`, never touches reviewed items), then close the PRs.
- PRs that ship only a markdown doc (no inbox entries): rebuild the
  candidates straight from the tweet links with
  `node scripts/rebuild-inbox.mjs --from <doc.md>` (or pass URLs/IDs
  directly; `--dry-run` inspects without writing). It fetches syndication
  data, dedupes against `videos.json` + the inbox, and falls back to
  category `other` for handles missing from `watchlist.json`.

## Conventions

- Design language: noiced-style sharp chrome — square corners, 0.5px
  `--grid-line` hairlines, mono 11px uppercase micro labels. Keep new UI in
  this idiom; motion tokens are defined in `src/styles/global.css`.
- Titles ≤ 55 chars (Google truncation). Dates format via
  `formatPublishedAt` (UTC-pinned — do not remove the `timeZone`).
- Agent surfaces: keep an H1 plus 500+ chars of homepage copy **outside**
  the `HomeApp` island (`data-agent-intro`), and keep it **visible** —
  `sr-only` crawler copy is hidden text under Google's spam policy; keep `/llms.txt` when-to-use
  guidance; keep `/contact/`, `/privacy/`, `/developers/`, and
  `/openapi.json`. Markdown siblings are generated at build into `dist/`
  (not committed).
- Grid posters need both sizes; `poster` field always points to the 1440w
  file, code derives the `-960` variant.
- Card overlays come in pairs: the view chip (`.video-card__views`) sits
  top-left and the runtime (`.video-card__duration`) bottom-right. They
  share one token block in `global.css` — restyle them together, and keep
  the exact count + capture date in the chip's `title`.
- Validate pnpm config edits — no placeholder text in
  `pnpm-workspace.yaml` (`allowBuilds` takes booleans).

<!-- polylane:start -->
## Investigating production with Polylane

[Polylane](https://polylane.com/?ref=github.onboarding-pr) is an AI production engineer: it watches deploys, telemetry, incidents, and the infrastructure this repository ships to, investigates problems as they happen, and proposes fixes as pull requests. It is connected to this repository and available to coding agents through the [Polylane MCP server](https://mcp.polylane.com/mcp).

- When a question involves production behaviour (an error, a spike, a deploy, a missing signal), query Polylane through its MCP tools before reasoning from the code alone.
- When debugging a failure, start from the incident or issue Polylane recorded: it carries the evidence an investigation already gathered.
- Polylane reviews pull requests in this repository against the live infrastructure. Read its review comment before merging changes that touch production paths.
<!-- polylane:end -->
