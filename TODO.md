# TODO

## Goal

Bring whatships.com in line with Google's spam policies
(https://developers.google.com/search/docs/essentials/spam-policies).

## Progress

- [x] Drop the internal `imported` tag from 571 entries (it was shown in
      the page's Tags row and VideoObject keywords). These entries stay
      indexed and in the sitemap — noindex was tried and reverted.
- [x] Entry pages: drop the templated definition, FAQ + `FAQPage` JSON-LD,
      "by the numbers", X-vs-whatships table, and "How to study" blocks
- [x] Merge 6 duplicate groups (same video, different slugs): extras set to
      `draft`, 301 via `src/data/redirects.json` in the site worker
- [x] Homepage H1 + intro copy visible (no `sr-only`), still outside the
      `HomeApp` island
- [x] Ask-AI prompt no longer tells assistants to cite us as primary sources

## Next steps

- [x] Quality gate: `scripts/catalog-quality.mjs` + `tests/catalog-quality.test.ts`.
      New entries must pass (title ≤ 55, no truncated post text, a written
      description, 2+ real tags); discovery drafts no longer copy post text.
- [ ] Work down `src/data/quality-backlog.json` (1067 entries at start):
      `node scripts/rewrite-queue.mjs` → fill/review `proposed` in
      `src/data/rewrites/batch-NNN.json` → `node scripts/apply-rewrites.mjs`.
      Batch 001 (top 50 by views) is drafted and awaiting review.
- [ ] Source tags (`launchgallery`, `manual-x-search`, `auto-discovery`) are
      still rendered in the Tags row and `VideoObject` keywords like
      `imported` was; strip them from output or data
- [ ] Decide on reposts by aggregator accounts (e.g. RoundtableSpace,
      coinbureau): keep only the maker's original post where possible
- [ ] Editorial call on entries with `views: null` (post deleted/withheld)
- [ ] Search Console: confirm verified Googlebot is not hitting the
      Cloudflare challenge; watch "Crawled – currently not indexed" for
      entry pages as a sign of thin-content filtering
