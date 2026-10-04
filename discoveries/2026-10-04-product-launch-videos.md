# 2026-10-04 产品发布视频候选

来源：Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch）。窗口：2026-10-03 13:16 UTC 至 2026-10-04 13:17 UTC，补 10-03 上午未入队条目。不重复 09-30 / 10-01 / 10-03 已入队条目，不改 `src/data/videos.json` 或 `inbox.json`。配套说明见 `docs/discovery/2026-10-04-zh-summary.md`。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-04-zh-summary.md
```

## 主候选

| # | 产品 | 作者 | tweetId | 时长 | 浏览 | 分类 | 链接 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Dialkit macOS | @mikelikesdesign | 2106539767039189269 | 29s | 2.3 万+ | design / developer-tools | https://x.com/mikelikesdesign/status/2106539767039189269 |
| 2 | EditDatVid | @cneuralnetwork | 2106693877889732623 | 25s | 5900+ | motion / developer-tools | https://x.com/cneuralnetwork/status/2106693877889732623 |
| 3 | GitHub Copilot app 并排审阅 | @github | 2106445557535220101 | 175s | 7.7 万+ | ai / developer-tools | https://x.com/github/status/2106445557535220101 |
| 4 | Higgsfield Creator Partnership | @higgsfield | 2106431413373616254 | 50s | 9.5 万+ | ai / motion | https://x.com/higgsfield/status/2106431413373616254 |
| 5 | FileTask | @thetimileyin | 2106403336136122597 | 91s | 3000+ | design / productivity | https://x.com/thetimileyin/status/2106403336136122597 |
| 6 | Empryo 3.9 | @BniWael | 2106510026105893226 | 206s | 2300+ | ai / developer-tools / consumer | https://x.com/BniWael/status/2106510026105893226 |
| 7 | Didit Events | @albertorosasg | 2106443792098131991 | 50s | 1500+ | consumer / developer-tools | https://x.com/albertorosasg/status/2106443792098131991 |
| 8 | Ody | @_kaitodev | 2106451316197433571 | 88s | 827 | ai / motion / consumer | https://x.com/_kaitodev/status/2106451316197433571 |
| 9 | dotstore | @voidyaps | 2106328172883317056 | 38s | 2.3 万+ | developer-tools / consumer | https://x.com/voidyaps/status/2106328172883317056 |
| 10 | Releases | @flaviocopes | 2106174390564159515 | 287s | 3400+ | developer-tools / consumer | https://x.com/flaviocopes/status/2106174390564159515 |

## 补扫说明

- 不重复 10-03 文档已入队的 MyGo、AgentCraft、Auday、Codex 插件、Figma CSS handoff、Vercel Jev for Python。
- GitHub Copilot 片是 beginners 演示，浏览高但不一定是新入口。
- Higgsfield 这条是创作者计划，不是 AI Influencer。
- dotstore 与 Releases 落在 10-03 早扫窗口内但未入队，本次补上。
- Didit Events 跟帖写了 repo，抓取时未展开完整链接，入库前可再核。

## 跟进，不单独入队

- Claude Code 2.1.289 changelog：https://x.com/ClaudeCodeLog/status/2106525277618635228
- NVIDIA skills 目录讲解：https://x.com/tsukiema_/status/2106425565402091575
- OpenShell 讲解：https://x.com/aikonect_/status/2106682558310130161
- Supabase Select 26 冠军：https://x.com/supabase/status/2106581376086728767

## 排除

政治、体育、音乐发行、代币 / NFT、纯游戏剧情、二创广告模板、无关教程，以及阅读量低于 500 的帖子。加密发币板与链上支付片（SPLICE、Spare Card、Attention Agents、Collective Minds、AgentMint、GalaSwap）不入队。LuxAlgo Edge Stats 按金融工具排除。
