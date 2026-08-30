# 2026-08-30 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / MCP / agent 等，并覆盖 watchlist 账号与高互动独立开发者。

时间范围：2026-08-28 至 2026-08-30（周末，官方大发布相对稀疏）。已排除政治、纯娱乐、游戏宣发、加密货币代币与无关教程。与 08-29 已入库 / 已发现文档互补，重点补充本周末新出现的高信号官方与独立产品发布视频。

已核对本次主条目 tweetId（Sodium / GitHub Issues / fx / Notion 线程 / LoWisa 等），未出现在 `src/data/videos.json` 与 `src/data/inbox.json` 中。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-30-zh-summary.md
```

---

## 1. Result / Sodium — 把网站现有功能变成 WebMCP 工具

- **作者**: @saviomartin（Result 联创 & CTO） / 官方 @tryresult
- **时间**: 2026-08-29 19:19 UTC（官方账号 21:30 UTC 同步）
- **视频**: 约 31 秒发布演示（主帖 2880×2160）
- **亮点**: 推出 Sodium。把网站已有路由、表单、server actions、schema 转成 WebMCP 工具，让 Agent 直接发现并调用站点能力，无需代理浏览器。两分钟配置；声称 2.82x 更快、91x token 更省。一行代码挂载；按工具级量化 Agent 意图与归因；主分支 diff 自动更新工具并可回滚。站点：https://sodium.result.dev
- **互动**: 主帖 166+ 赞、190 收藏、1.2万+ 浏览
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/saviomartin/status/2093780571638149523
- **相关**: https://x.com/tryresult/status/2093813442717122953

## 2. GitHub — Issues 新能力更新

- **作者**: @github
- **时间**: 2026-08-29 22:17 UTC
- **视频**: 约 44 秒竖版演示
- **亮点**: Issues 侧栏可固定视图；reaction 显示头像；可调 dashboard 密度；可隐藏已关闭子 Issues；Issue 依赖 REST API 支持 scope-aware。
- **互动**: 48 赞、1.1万+ 浏览
- **分类建议**: developer-tools
- **链接**: https://x.com/github/status/2093825400178917519

## 3. GitHub Copilot — 多语言本地口述 + CLI 多 Session

- **作者**: @github
- **时间**: 2026-08-28 16:48–16:49 UTC
- **视频**: 约 15 秒口述演示 + 约 19 秒 Sessions 侧栏演示
- **亮点**: VS Code 口述默认改用本地多语言模型，音频不离开设备；可按配置语言 / 系统 locale / 自动检测。Copilot CLI 可在 Sessions 侧栏管理多个会话（n 新建 / x 关闭）。Changelog：https://github.blog/changelog/2026-08-07-github-copilot-weekly-releases-august-3/
- **互动**: 各帖数千至一万浏览
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/github/status/2093380338059727002
- **相关**: https://x.com/github/status/2093380335241253106

## 4. fx v0.0.7 — MCP 原生进入 CLI

- **作者**: @fazxes（Vercel）
- **时间**: 2026-08-29 16:11 UTC
- **视频**: 约 15 秒演示
- **亮点**: 独立工具 fx 发布 v0.0.7。`fx mcp` 命令、项目级 MCP 配置、CLI 内管理 MCP、更好兼容现有 server；转写更清晰、实时轮次反馈；Ctrl+Enter 干预当前轮；工具数减 8 个以留更多上下文。文档集成 Notion / Hugging Face / Exa。
- **互动**: 95 赞、3.3万+ 浏览
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/fazxes/status/2093733353757233580

## 5. Notion — 8 项 Agent / AI 微更新（多段视频）

- **作者**: @NotionHQ
- **时间**: 2026-08-29 16:29 UTC
- **视频**: 线程内多段 19–28 秒演示
- **亮点**: 模型选择器按提供商分组并可收藏；Effort controls 控制思考强度；页面可 Share 给 Custom Agent；对话生成 Skill；会议笔记完成后自动触发 Agent；页面内嵌 Custom Agent 聊天框；Custom Agents API 公开 beta；AI 用量独立视图。
- **互动**: 主帖 417 赞、6.7万+ 浏览、131 收藏
- **分类建议**: productivity / ai
- **链接**: https://x.com/NotionHQ/status/2093737931261583563
- **相关视频**: https://x.com/NotionHQ/status/2093737944591028537 、 https://x.com/NotionHQ/status/2093737947782926731 、 https://x.com/NotionHQ/status/2093737933711052891

## 6. LoWisa — Android 应用正式上架 Play Store

- **作者**: @LoWisadev
- **时间**: 2026-08-29 18:38 UTC
- **视频**: 约 20 秒发布片 + 早前 beta 约 49 秒
- **亮点**: AI 工程知识传递 IDE LoWisa 的 Android 版正式上架 Google Play。位于掌上的交互式导师，用于理解、排查真实系统。iOS 版宣布即将推出。
- **互动**: 22 赞（信号偏弱，但确实是产品上架视频）
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/LoWisadev/status/2093770216056533057

## 7. Linear × Loops — 从销售电话抽产品反馈

- **作者**: @linear
- **时间**: 2026-08-28 15:56 UTC
- **视频**: 约 257 秒工作流演示
- **亮点**: Linear 产品团队用 Loops 自动采集、汇总、复盘销售通话，从埋在电话里的反馈中抓出重要信号。偏案例 / 工作流片，不是 Linear 本身新产品发布，但视频质量与时长适合 motion / 工作流类目录。
- **互动**: 173 赞、196 收藏、5.4万+ 浏览
- **分类建议**: productivity / motion
- **链接**: https://x.com/linear/status/2093367180184125505

## 8. FLORA — Minimax H3 Max 上架

- **作者**: @floraai
- **时间**: 2026-08-28 20:15 UTC
- **视频**: 约 14 秒演示
- **亮点**: Minimax H3 Max 进入 FLORA 创作工作区。强调 prompt adherence；15 秒内出片；适用于视觉与动效。H3 Max 本身曾出现在 08-27 汇总的 fal / Palmier 条目，本帖是创作工作区端的上架视频。
- **互动**: 31 赞
- **分类建议**: ai / motion
- **链接**: https://x.com/floraai/status/2093432212179841261

## 9. Databricks — GLM 5.3 Day-0 上架

- **作者**: @databricks
- **时间**: 2026-08-29 00:11 UTC
- **视频**: 约 5 秒宣布片
- **亮点**: GLM 5.3（@Zai_org）以 Day-0 方式在 Databricks 可用，与 GLM 5.3 Flash 以及 30+ 开源 / 前沿模型一起托管在 Databricks 自有安全 GPU。经 Unity Gateway 连接编程 Agent，带智能路由、集中成本与可观测。08-28/29 汇总已有 Modal / Together 等平台的 GLM 5.3 条目，本帖为 Databricks 官方视频。
- **互动**: 72 赞
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/databricks/status/2093491572083949972
- **相关**: Modal 同款 https://x.com/modal/status/2093460425128002042

## 10. Framer Agents — 从想法到网站

- **作者**: @framer
- **时间**: 2026-08-28 15:57 UTC
- **视频**: 约 41 秒
- **亮点**: Framer Agents 帮助在噪音里快速搭出网站。偏品牌 / 能力宣传片而非全新产品发布，但是 watchlist 账号的官方带视频帖。
- **互动**: 76 赞
- **分类建议**: design
- **链接**: https://x.com/framer/status/2093367440143245357

---

## 已在 08-28 / 08-29 文档或目录中出现（仅交叉引用，不重复入队）

- **Vercel Eve Agent**（1 分钟上线）: https://x.com/vercel/status/2093364921073549667 — 已见 08-29 汇总 / 已发布流程
- **Replit Growth Skills**: https://x.com/Replit/status/2093413457924166045 — PR #100 标记已上线 `/videos/replit-growth-skills/`
- **Lightreel AI**（Cursor for finding influencers）: https://x.com/lightreelai/status/2093337614145212685 — 已上线 `/videos/lightreel-ai/`，本轮仍有 883 赞 / 56万+ 浏览
- **Runway × Google Omni 1.1 Flash**: https://x.com/runwayml/status/2093344307021545601
- **Grok Bot templates / Locus × parse.bot / Induction / Goldie**: 已由 PR #100 入库

---

## 已过滤（不入库）

- 纯加密货币 / 代币 / meme（PAIR protocol token、$ADITW、Rialo SCALE 等）。
- 游戏 / 娱乐 / 影视预告（Dokkan Battle、MW4 Ground War、Pokémon GO Worlds、KATSEYE、足球球迷视频）。
- 政治立法与监控议题（Texas ALPR 禁令、Virginia Flock 摄像头）。
- 运动视频工作室招聘片 / 旧项目集锦（@BuffetDesigns Q2 SaaS launch reel、@fakharkamario 等）— 非产品本体发布。
- 二次解读与课程视频（MCP 2.0 「we killed sessions」 13 分钟讲解、Moonshot K3 Swarm Max 评论、Claude Code setup plugin 教程）— 缺少原始产品发布片。
- Figma Shader Town 线下活动、GitHub Universe 抢票、Runway HORSE 游戏挑战— 非产品发布。
- ship.mov 帮别人生成的发布片回复（互动极低，且非原始产品帖）。

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（x_keyword_search 搭配 `filter:videos` + `since:2026-08-28/29` + `min_faves` + launched/now live/introducing/just shipped/MCP + `from:` watchlist 账号；x_semantic_search 语义检索产品发布与独立开发者 demo；x_thread_fetch 获取 Sodium / Notion 等完整上下文）。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-30-zh-summary.md` 写入 inbox（与其它 discovery PR 合并时用 `node scripts/merge-inbox.mjs` 做并集）。再按 AGENTS.md 配方正式发布。
