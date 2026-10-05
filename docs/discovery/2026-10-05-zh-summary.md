# 2026-10-05 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / now available / plugin / MCP / agent / skill / open source 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-10-03 13:16 UTC 至 2026-10-05 01:16 UTC（约 CST 09:16；与 10-03 文档互补，不重复 AgentCraft / Auday / MyGo / Motionfly V2 等已入队条目）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币 / NFT、纯游戏剧情与无关教程。抽查 tweetId 未出现在 `src/data/videos.json` 代码搜索结果中。

周末窗口，官方大厂新模型首发较少；高信号集中在独立产品首发、设计工具与 Claude Code skill / mod。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-05-zh-summary.md
```

---

## 1. Promethee — 把工作变成多人游戏

- **作者**：@Nlacombe_
- **时间**：2026-10-04 19:32 UTC
- **视频**：约 105 秒
- **亮点**：Introducing Promethee，已对所有人开放。把专注与工作量变成多人游戏，用来提高表现。创始人 Nicolas 线程说明：侧项目先到 3000 用户，再与前 ClickUp / Telegram 的 @miron_puzanov 全职做。https://www.promethee.io/ 本窗口浏览量第一的产品首发长片。
- **互动**：约 1109 赞、123 转发、67 引用、81 回复、1066 收藏、18.4 万+浏览
- **分类建议**：productivity / consumer
- **链接**：https://x.com/Nlacombe_/status/2106829867463627039
- **tweetId**：2106829867463627039

---

## 2. Melty — 一键和朋友做 mashup

- **作者**：@davidmilr（@meltylauncher，YC F26，前 @rala_ai）
- **时间**：2026-10-04 17:45 UTC
- **视频**：约 44 秒
- **亮点**：Introducing Melty。一键和朋友创作、播放 mashup。发布片强调一次点击就能接上，收藏明显高于赞。indie 消费级创作工具首发短片。
- **互动**：约 1924 赞、98 转发、23 引用、69 回复、1274 收藏、10.1 万+浏览
- **分类建议**：consumer / ai
- **链接**：https://x.com/davidmilr/status/2106802998236078564
- **tweetId**：2106802998236078564

---

## 3. LuxAlgo — Edge Stats

- **作者**：@LuxAlgo
- **时间**：2026-10-03 17:57 UTC
- **视频**：约 30 秒
- **亮点**：Introducing Edge Stats，免费开源的技术交易统计引擎。看自己的策略历史上真正打出过多少次，每个数字带样本量和置信区间，并在 @velacharts 上回看实际交易日。内置 ORB、FVG、Initial Balance、Gap Fill 等 38+ 模板，可本地跑自有数据，或用免费加密数据立即开始。产品是统计引擎，不是代币。
- **互动**：约 487 赞、45 转发、12 引用、32 回复、751 收藏、9.1 万+浏览
- **分类建议**：developer-tools / productivity
- **链接**：https://x.com/LuxAlgo/status/2106443500791484850
- **tweetId**：2106443500791484850

---

## 4. GitHub — Copilot app 并排 diff / 终端 / 浏览器

- **作者**：@github
- **时间**：2026-10-03 18:05 UTC
- **视频**：约 175 秒
- **亮点**：watchlist 账号能力片。审查 agent 代码通常要切标签；GitHub Copilot app 把 diff、终端和浏览器并排，用来检查、跐、预览。偏入门演示，不是新产品首发，但是本窗口 GitHub 官方唯一带视频的产品面演示。https://github.blog/ai-and-ml/github-copilot/github-copilot-app-for-beginners-using-the-diff-terminal-and-browser/
- **互动**：约 282 赞、29 转发、14 引用、37 回复、73 收藏、8.5 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/github/status/2106445557535220101
- **tweetId**：2106445557535220101

---

## 5. hun0fx — Pixel Art VFX Generator

- **作者**：@hun0fx
- **时间**：2026-10-04 03:26 UTC
- **视频**：约 174 秒
- **亮点**：作者第一个工具首发：像素风 VFX 生成器，给游戏做特效。itch.io 有免费 demo，前两周 75 折。https://hun0fx.itch.io/pixel-art-vfx-generator 是创作工具，不是游戏发行片；收藏比赞高。
- **互动**：约 1709 赞、157 转发、3 引用、27 回复、1486 收藏、5.3 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/hun0fx/status/2106586854342676712
- **tweetId**：2106586854342676712

---

## 6. Dialkit macOS — 可调参数的开源设计工具

- **作者**：@mikelikesdesign（Jasper 产品设计）
- **时间**：2026-10-04 00:19 UTC
- **视频**：约 29 秒
- **亮点**：Just shipped Dialkit macOS。基于 @joshpuckett Dialkit web 的开源 fork，作者做完 Dialkit iOS 后补的桌面端。仓库 https://github.com/mikelikesdesign/dialkit-macos 设计工具首发短片，收藏 492，高于赞。
- **互动**：约 325 赞、6 转发、4 引用、16 回复、492 收藏、3.1 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/mikelikesdesign/status/2106539767039189269
- **tweetId**：2106539767039189269

---

## 7. Framer — Skills、3D Agent、新模型

- **作者**：@framer
- **时间**：2026-10-03 20:12 UTC
- **视频**：约 88 秒
- **亮点**：watchlist 账号官方周更片。What’s new in Framer：Skills；用 Framer Agent 做 3D；Agent 里的新 AI 模型；CMS List Field；Pinned Projects；Marketplace analytics；Expert program 重启。能力汇总，不是单点首发，但是本窗口 Framer 唯一带产品变更的视频。
- **互动**：约 136 赞、12 转发、3 引用、15 回复、38 收藏、1.3 万+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/framer/status/2106477440381960361
- **tweetId**：2106477440381960361

---

## 8. Oneira — 可交互视频世界模型

- **作者**：@Madaoer_Yxd
- **时间**：2026-10-03 13:47 UTC
- **视频**：约 67 秒
- **亮点**：Introducing Oneira。可交互视频世界模型：coding agent 维护显式世界状态，探索时出现的物体变成可交互，修改在长视野里保持。项目页 https://madaoer.github.io/projects/oneira/ 论文 https://arxiv.org/abs/2610.01614 发布时间在 10-03 文档截稿（13:16 UTC）之后，建议独立入库。
- **互动**：约 56 赞、8 转发、4 引用、5 回复、57 收藏、1.2 万+浏览
- **分类建议**：ai / research
- **链接**：https://x.com/Madaoer_Yxd/status/2106380661502419081
- **tweetId**：2106380661502419081

---

## 9. CranL — Agentic 升级、Realtime、Cloud Agents

- **作者**：@Cranlcom
- **时间**：2026-10-04 18:55 UTC
- **视频**：约 51 秒（线程另有 Realtime / Cloud Agents / Sandbox / 新 UI 四条短片）
- **亮点**：云部署平台升级为全 Agentic：agent 写代码、提交、开 PR；MCP/CLI 可对服务做 450+ 动作。同日跟进：CranL Realtime（WebSocket 同步、数据库变更监听、在线状态）、Cloud Agents（在 CranL 里跑 Claude Code / Codex / Grok，写完提 PR）、Sandbox 出 beta、新 UI。https://cranl.com 建议以主帖入库，线程短片合并审。
- **互动**：约 78 赞、15 转发、5 引用、12 回复、34 收藏、1.1 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/Cranlcom/status/2106820497879044345
- **tweetId**：2106820497879044345

---

## 10. Xaira — X-Design 蛋白设计

- **作者**：@BoWang87（@Xaira_Thera 首席 AI 科学家）
- **时间**：2026-10-04 18:15 UTC
- **视频**：约 28 秒
- **亮点**：Introducing X-Design。公开两个在研管线结果：肿瘤靶点从 DNA 合成到临床前 lead 约 7 周；传统文库筛选和羊驼免疫都失败的 GPCR 上，做出功能性抗体拮抗剂。标准不止于结合：类人、跨物种、可开发。研发管线视野重于可注册产品入口，建议与平台型 AI 产品分开看。
- **互动**：约 120 赞、15 转发、5 引用、14 回复、69 收藏、9200+浏览
- **分类建议**：ai / research
- **链接**：https://x.com/BoWang87/status/2106810447987179763
- **tweetId**：2106810447987179763

---

## 11. cinetic — 让 coding agent 导演发布片的 skill

- **作者**：@LexnLin
- **时间**：2026-10-04 23:36 UTC
- **视频**：约 30 秒（线程另有 teaser / landing loop / 竖版三条样片）
- **亮点**：发布 cinetic skill：让 coding agent 先写 3 个概念再选一个，从 273 个技法里抽样，画面和音乐走同一拍点，渲染前做同步 / 错误检查。安装 `npx skills add Leonxlnx/cinetic`，仓库 https://github.com/Leonxlnx/cinetic 支持 Claude Code、Codex、Cursor，MIT。indie skill 首发片。
- **互动**：约 100 赞、3 转发、2 引用、16 回复、119 收藏、3500+浏览
- **分类建议**：developer-tools / ai / motion
- **链接**：https://x.com/LexnLin/status/2106891315371737480
- **tweetId**：2106891315371737480

---

## 12. Havyn — 买卖护航 App 公开

- **作者**：@Havyn_ng
- **时间**：2026-10-04 15:08 UTC
- **视频**：约 55 秒
- **亮点**：Introducing Havyn，对全体开放。线上买卖护航，称 1000+ 早期用户验证后今日发布。iOS：https://apps.apple.com/us/app/havyn-buy-sell/id6768475254 消费 App 首发 demo，浏览刚过 1500。
- **互动**：约 45 赞、23 转发、2 引用、9 回复、2 收藏、1500+浏览
- **分类建议**：consumer
- **链接**：https://x.com/Havyn_ng/status/2106763278206595128
- **tweetId**：2106763278206595128

---

## 13. shadcnuikit — 100+ dashboard blocks

- **作者**：@TobyBelhome（@gramotion / @bunduidotio）
- **时间**：2026-10-04 16:50 UTC
- **视频**：约 23 秒
- **亮点**：Just shipped 100+ premium dashboard UI blocks，https://shadcnuikit.com 目标年底超过 1000 个。indie 设计系统组件发布短片，阅读量刚过 500。
- **互动**：约 22 赞、1 转发、3 回复、15 收藏、1200+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/TobyBelhome/status/2106789085809352934
- **tweetId**：2106789085809352934

---

## 14. Time Machine — Claude Code 会话分支 mod

- **作者**：@dani_avila7
- **时间**：2026-10-05 00:51 UTC
- **视频**：约 16 秒
- **亮点**：Introducing Time Machine for Claude Code，Claude Desktop 与 CLI 都能用。`/timemachine` 把提示、工具调用、编辑、Bash 和回合结束记成时间线；从任意点 fork，把对话和代码状态恢复到另一个 git worktree / 分支，原会话不动。安装：`npx claude-code-templates@latest --mod productivity/session-time-machine`。窗口末的 Claude Code mod 首发片，浏览刚过 500。
- **互动**：约 20 赞、2 转发、3 回复、14 收藏、917+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/dani_avila7/status/2106910092620689432
- **tweetId**：2106910092620689432

---

## 15. 其他高信号 / 跟进

- **Higgsfield Creator Partnership**（@higgsfield，约 50 秒，12.4 万+浏览）：创作者合作计划，含月度套餐、额外积分、新模型早期访问、联盟收益。是计划入口，不是新模型首发；与 10-03 的 AI Influencer 不同。https://x.com/higgsfield/status/2106431413373616254
- **Dreamina Canvas Extract Motion**（@Marco_Exito，约 26 秒，4.6 万+浏览）：合作方演示 Dreamina 刚上的 Extract Motion：从视频抽运动和空间深度再重建。不是官方账号片。https://x.com/Marco_Exito/status/2106814488666378609
- **桌面 AI companion 反应片**（@Amank1412，约 48 秒，2200+浏览）：他人产品的反应，帖子未给出产品名与入口，不单独入队。https://x.com/Amank1412/status/2106479715343323197

## 已在 10-03 文档或更早入队（仅交叉引用，不重复入队）

AgentCraft、Auday、MyGo、Codex Mobile Dev、Motionfly V2、Higgsfield AI Influencer、Prime Inference、Conductor Mobile、PixelUMM、Google Project Suncatcher、Figma CSS handoff、Vercel Jev for Python、Notion ChatGPT token sharing、Urban Terror Web、text-to-CAD、clawdhouse、image-viewer、Mercury Voice、FreeVideo、Replit 周更。

## 本窗口排除

- 阅读量 < 500。
- 体育 / 娱乐：WNBA、NFL、Sunday Night Football、Code Lyoko 采访、音乐发行。
- 纯游戏剧情或游戏 demo：Steppas Valorant、Digimon World slap、Void Inc、beach demo。
- 代币 / 链上发行：Solaris AI Apps、Splice、Priors、Grift、Spare Card、AgentMint、Pillbook、GalaSwap、Harness $DOT。
- 非产品：@amasad 的 Replit Drift 是飘移视频，不是产品发布；@tibo_maker 的 JPEG 解说片是教育系列，不是产品入口。
