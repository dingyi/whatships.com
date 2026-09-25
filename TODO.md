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

- [ ] Rewrite the ~640 entries whose title/description are still raw post
      text by hand (title ≤ 55 chars, own one-line description, real tags);
      start with the 368 where both fields end in `…`
- [ ] Decide on reposts by aggregator accounts (e.g. RoundtableSpace,
      coinbureau): keep only the maker's original post where possible
- [ ] Editorial call on entries with `views: null` (post deleted/withheld)
- [ ] Search Console: confirm verified Googlebot is not hitting the
      Cloudflare challenge; watch "Crawled – currently not indexed" for
      entry pages as a sign of thin-content filtering
