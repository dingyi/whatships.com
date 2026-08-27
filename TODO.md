# TODO

## Goal

Fix the remaining AITDK GEO audit warnings on whatships.com.

## Progress

- [x] Keep a single homepage H1 outside HomeApp; visible hero is a styled paragraph.
- [x] Add `og:site_name=whatships.com` and drop schema brand aliases.
- [x] Add `hreflang="en"` plus `hreflang="x-default"`.
- [x] Add named citations and quotations (llmstxt.org, Schema.org).
- [x] Add `/terms/` and link Privacy + Terms in the footer.
- [x] Add descriptive alt text for homepage, tools, studios, and author images.

## Verification

- [x] Vitest: 12 files, 66 tests passed.
- [x] Astro check: 0 errors.
- [x] Astro build: 1838 pages.
- [x] Built homepage has 1 H1, 60 images with alt, og:site_name, hreflang x-default, quotations, Privacy + Terms.
- [x] Browser preview: homepage, terms, privacy, and a video detail page.

## Next steps

- [ ] Re-scan the homepage with AITDK after merge/deploy.
