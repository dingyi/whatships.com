# TODO

## Goal

Merge the latest discovery PRs, rebuild `/admin` inbox, approve every pending candidate, and publish them.

## Progress

- [x] Inspect open PRs. Latest is #98 (2026-08-29 Grok zh-summary v2).
- [x] Merge complementary discovery docs onto `cursor/approve-discovery-inbox-dc3f`:
  - #98 `docs/discovery/2026-08-29-zh-summary.md`
  - #96 `discoveries/2026-08-29-product-launch-videos.md`
  - #93 `docs/discovery/2026-08-28-zh-summary.md`
  - #97 tweet URLs used as a rebuild source (same path as #98)
- [x] Rebuild inbox from those markdown files (46 pending, 6 previously rejected)
- [x] Review every pending `/admin` item: cleaned titles (≤55), slugs, taxonomy; approve all 46
- [x] Apply inbox into `videos.json` and capture both poster sizes
- [x] Vitest: 12 files / 71 tests passed
- [x] `astro build`: 1887 pages, `/admin` not shipped
- [x] Local verify: homepage + 8 new `/videos/<slug>/` pages + `/admin` load
- [x] Push branch and open PR #99

## Next steps

- After merge to `main`, Actions deploys in ~1 min. Retry new pages if they 404 at the edge.
- Close source discovery PRs #93 / #96 / #97 / #98 once #99 lands so the docs are not re-merged.
