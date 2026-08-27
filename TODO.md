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
- [ ] Install deps, run Vitest + `astro check` + `astro build`.
- [ ] Verify built homepage HTML size and run local Lighthouse (mobile).
- [ ] Browser-check homepage filter, search, pagination, and playback after the catalog fetch.

## Next steps

- Confirm built `dist/index.html` is no longer megabytes of island props.
- Re-run a mobile Lighthouse pass on the local preview (PSI API quota is exhausted).
- Push remaining verification fixes if Lighthouse still flags contrast, TBT, or unused JS.
