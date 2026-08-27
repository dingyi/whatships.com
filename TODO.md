# TODO

## Goal

Fit public SEO meta descriptions into the 140-160 character AITDK window.

## Progress

- [x] Add `SITE_META_DESCRIPTION` and a `metaDescription()` clamp.
- [x] Apply the clamp in BaseLayout for HTML and Open Graph descriptions.
- [x] Rewrite static page meta copy into the 140-160 window.

## Verification

- [x] Vitest: 12 files, 68 tests passed.
- [x] Astro check and build passed.
- [x] Built homepage meta description is 148 characters.
- [x] About, contact, privacy, terms, developers, tools, studios, submit, and a video page all fall in 140-160.

## Next steps

- [ ] Re-scan the homepage with AITDK after merge/deploy.
