# TODO

## Goal

Fix whatships.com mobile PageSpeed Insights issues from
https://pagespeed.web.dev/analysis/https-whatships-com/ry2xdwt78a?form_factor=mobile
and check the other PSI categories (accessibility, best practices, SEO).

## Progress

- [x] Pulled latest `main` and inspected production HTML: homepage was ~2.6MB because the React island serialized the full 1800+ video catalog.
- [x] Homepage now ships the first directory page only and lazy-loads `/directory-index.json`.
- [x] Switched homepage / header islands to `client:idle`, preloaded the LCP poster, and subsetted fonts.
- [x] Raised tap targets and muted-text contrast; hashed `/_astro` assets now get immutable cache headers.
- [x] Vitest: 12 files / 69 tests. `astro check` clean. Build: 1841 pages.
- [x] Built homepage is 230KB (29KB gzip) vs ~2.6MB production HTML.
- [x] Local Lighthouse: mobile home 99/100/100/100, desktop home 100s, mobile video 99 (LCP 1.9s after 960w poster).
- [x] Browser-checked filter, search, pagination (after catalog fetch), player dialog, detail page, and mobile menu.

## Next steps

- Re-run the public PageSpeed Insights URL after this deploys (API quota was exhausted here).
- Optional later: smaller grid posters (~480w) and less unused React island JS.
