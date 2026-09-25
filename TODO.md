# TODO

## Goal

Bring whatships.com in line with Google's spam policies
(https://developers.google.com/search/docs/essentials/spam-policies).

## Progress

- [x] Thin entries (`imported` tag, or title + description both cut off
      mid-sentence) get `noindex,follow` and leave the sitemap —
      `isThinEntry()` in `src/lib/catalog.ts`
- [x] Entry pages: drop the templated definition, FAQ + `FAQPage` JSON-LD,
      "by the numbers", X-vs-whatships table, and "How to study" blocks
- [x] Merge 6 duplicate groups (same video, different slugs): extras set to
      `draft`, 301 via `src/data/redirects.json` in the site worker
- [x] Homepage H1 + intro copy visible (no `sr-only`), still outside the
      `HomeApp` island
- [x] Ask-AI prompt no longer tells assistants to cite us as primary sources

## Next steps

- [ ] Rewrite thin entries by hand (title ≤ 55 chars, own one-line
      description, real tags), then drop the `imported` tag — each rewrite
      puts the page back in the index automatically
- [ ] Decide on reposts by aggregator accounts (e.g. RoundtableSpace,
      coinbureau): keep only the maker's original post where possible
- [ ] Editorial call on entries with `views: null` (post deleted/withheld)
- [ ] Search Console: confirm verified Googlebot is not hitting the
      Cloudflare challenge, then watch Pages → "Excluded by noindex"
