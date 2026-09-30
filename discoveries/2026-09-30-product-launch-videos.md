# 2026-09-30 product launch videos (Grok X search)

Window: 2026-09-29 morning → 2026-09-30 morning CST.
Source: Grok built-in `x_keyword_search` / `x_semantic_search` / `x_thread_fetch` only.
Companion to `docs/discovery/2026-09-30-zh-summary.md`.
Does not modify `src/data/videos.json` or `inbox.json`.

After review:

```bash
node scripts/rebuild-inbox.mjs --from discoveries/2026-09-30-product-launch-videos.md
```

---

## Queue

| # | Product | Author | tweetId | Views | Duration | Categories | URL |
|---|---------|--------|---------|-------|----------|------------|-----|
| 1 | OpenAI dots | @OpenAI | 2104984504133918973 | 815万+ | ~148s | ai / productivity / consumer | https://x.com/OpenAI/status/2104984504133918973 |
| 2 | GPT-6.1 Sol | @OpenAI | 2104986129686741046 | 197万+ | ~8s | ai / developer-tools | https://x.com/OpenAI/status/2104986129686741046 |
| 3 | InstaCloud | @hanghuang_ | 2104949571789148416 | 70万+ | ~148s | developer-tools / ai | https://x.com/hanghuang_/status/2104949571789148416 |
| 4 | OpenAI Ultrafast | @OpenAI | 2104993966043320759 | 66万+ | ~45s | ai / developer-tools | https://x.com/OpenAI/status/2104993966043320759 |
| 5 | ChatGPT Space | @ChatGPT | 2104986841145602351 | 40万+ | ~60s | productivity / ai | https://x.com/ChatGPT/status/2104986841145602351 |
| 6 | Codex Security Cloud | @OpenAI | 2104987422308335828 | 37万+ | ~20s | developer-tools / ai | https://x.com/OpenAI/status/2104987422308335828 |
| 7 | Angular Native | @ashh640 | 2104871228271899041 | 30万+ | ~39s | developer-tools | https://x.com/ashh640/status/2104871228271899041 |
| 8 | Notion × ChatGPT billing | @NotionHQ | 2104994569964388738 | 25万+ | ~23s | productivity / ai | https://x.com/NotionHQ/status/2104994569964388738 |
| 9 | Cursor /visualize | @cursor_ai | 2105012114200887434 | 11万+ | ~33s | developer-tools / ai | https://x.com/cursor_ai/status/2105012114200887434 |
| 10 | pdfcn | @shadcnlabs | 2104840500847263794 | 10万+ | ~15s | design / developer-tools | https://x.com/shadcnlabs/status/2104840500847263794 |
| 11 | Figma Dev Mode × Codex | @figma | 2104994048381792487 | 9.3万+ | ~40s | design / developer-tools | https://x.com/figma/status/2104994048381792487 |
| 12 | Perplexity Computer Automations | @perplexity_ai | 2104976036274552963 | 8.1万+ | ~92s | ai / productivity | https://x.com/perplexity_ai/status/2104976036274552963 |
| 13 | tldraw ChatGPT plugin | @tldraw | 2105003566351908892 | 6.8万+ | ~127s | design / ai / productivity | https://x.com/tldraw/status/2105003566351908892 |
| 14 | Replicas V3 | @connortbot | 2104971967908515908 | 2.4万+ | ~122s | developer-tools / ai | https://x.com/connortbot/status/2104971967908515908 |
| 15 | 0xdesigner MCP | @0xDesigner | 2105028261558493219 | 1.6万+ | ~12s | design / ai / developer-tools | https://x.com/0xDesigner/status/2105028261558493219 |
| 16 | Elgato ChatGPT & Codex Stream Deck plugin | @elgato | 2105028896882331891 | 1.4万+ | ~65s | hardware / developer-tools / ai | https://x.com/elgato/status/2105028896882331891 |
| 17 | Firecrawl Alexandria | @firecrawl | 2104964997633765737 | 1.2万+ | ~10s | developer-tools / ai | https://x.com/firecrawl/status/2104964997633765737 |
| 18 | Stripe agents × Ramp MPP | @stripe | 2105046474791035215 | 1.1万+ | ~32s | developer-tools / ai | https://x.com/stripe/status/2105046474791035215 |
| 19 | MausBot | @milindlabs | 2105067488484655364 | 1.0万+ | ~15s | ai / developer-tools / consumer | https://x.com/milindlabs/status/2105067488484655364 |
| 20 | Runway Agent Tagging | @runwayml | 2105009229702799497 | 8800+ | ~94s | ai / motion | https://x.com/runwayml/status/2105009229702799497 |
| 21 | Warp Sign in with ChatGPT | @warpdotdev | 2104988839177855450 | 7500+ | ~22s | developer-tools / ai | https://x.com/warpdotdev/status/2104988839177855450 |
| 22 | Agent Foundation (a13n) | @ConvergeAI_X | 2105072162537345421 | 6500+ | ~46s | developer-tools / ai | https://x.com/ConvergeAI_X/status/2105072162537345421 |
| 23 | Space (getspace.so) | @byjasonz | 2105022380666171834 | 3300+ | ~67s | developer-tools / ai | https://x.com/byjasonz/status/2105022380666171834 |
| 24 | Okara Dots for marketing | @askOkara | 2105202449162350808 | 2.1万+ | ~67s | ai / productivity | https://x.com/askOkara/status/2105202449162350808 |
| 25 | MotionVideo | @alaymanguy | 2105195547233771804 | 5600+ | ~15s | motion / ai / design | https://x.com/alaymanguy/status/2105195547233771804 |

## Merge with primary (do not queue separately)

- OpenAI 「Your dot is ready」 https://x.com/OpenAI/status/2104980481876070819 — merge with #1
- @matteing ChatGPT Space Pages thread https://x.com/matteing/status/2105024607552172137 — merge with #5
- @zoink Figma Dev Mode MCP https://x.com/zoink/status/2105073236572844497 — merge with #11
- Warp GPT 6.1 Sol https://x.com/warpdotdev/status/2105069001131049028 — merge with #2

## Filtered

Politics, entertainment, sports, music, crypto tokens/NFT (incl. Chainlink Fulcrum), pure games, tutorials, views < 500, countdown teasers without product, already-queued 09-27/28/29 items (Team Bots, Claude Sonnet 5.5, Tapkit, etc.).
