# TODO

## Goal

Optimize whatships.com for GEO based on the linked X Article about AITDK GEO checks.

## Progress

- [x] Retrieved the X status through the public syndication endpoint.
- [x] Followed the article URL and extracted its public preview plus 7 media links.
- [x] Read the article screenshots and mapped the checks to site work:
  - machine readability
  - content and citability
  - trust and E-E-A-T
  - structured data
  - AI crawler access
- [x] Reviewed related public AITDK and DiagnoSEO GEO references.
- [x] Added `/llms-full.txt` as a complete agent guide.
- [x] Expanded homepage and video-page JSON-LD.
- [x] Updated robots policy for public AI crawler access.
- [x] Updated short `llms.txt`, developer resources, sitemap, and OpenAPI.
- [x] Made external-link `rel` attributes explicit with `noopener noreferrer`.

## Verification

- [x] Run Vitest: 12 test files and 65 tests passed.
- [x] Run Astro check: completed successfully.
- [x] Run Astro build: completed successfully; 1837 pages built.

## Next steps

- [ ] Review the deployed PR preview or production deploy after merge with an external GEO audit extension.
- [ ] Re-run a crawler-specific check if robots policy changes again.
