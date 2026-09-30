# 2026-09-30 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / now available / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-29 上午至 2026-09-30 上午 CST（以 OpenAI DevDay 窗口为主，并补 09-30 凌晨至上午的跟进首发）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-29 已发现文档互补，不重复已入队 / 已上站条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-30-zh-summary.md
```

---

## 1. OpenAI dots — GPT-6 Astra 驱动的常在 agent

- **作者**：@OpenAI
- **时间**：2026-09-29 17:19 UTC
- **视频**：约 148 秒
- **亮点**：watchlist 账号官方产品首发。Introducing dots, powered by GPT-6 Astra。常在 agent：有自己的云电脑，通过 ChatGPT 连 4000+ App / 插件；可预订餐桌，也可当高主动工程师 / 首席办事用。用户设边界（自主 / 先问 / 永远不做）；Pro / Business Premium / Enterprise 在合格市场可用，从 ChatGPT 桌面端或浏览器创建。同日预告短片 2104980481876070819（「Your dot is ready to meet you.」约 30 秒、百万级浏览）可合并审。本窗口浏览量绝对第一的官方发布长片，建议以本帖入库。
- **互动**：约 3.4 万赞、转发/引用/回复千级、收藏 9000+、浏览 1100 万+（二次核对时已从初稿 815 万上涨）
- **分类建议**：ai / productivity / consumer
- **链接**：https://x.com/OpenAI/status/2104984504133918973
- **tweetId**：2104984504133918973

---

## 2. GPT-6.1 Sol — 近 Astra 能力、价格五分之一

- **作者**：@OpenAI
- **时间**：2026-09-29 17:26 UTC
- **视频**：约 8 秒
- **亮点**：watchlist 账号官方模型首发短片。GPT-6.1 Sol: near-Astra intelligence for a fifth of the price。定位同档最划算模型。同日 Warp 跟进 2105069001131049028（GPT 6.1 Sol now in Warp）可合并审。
- **互动**：约 1.71 万赞、1.97 百万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/OpenAI/status/2104986129686741046
- **tweetId**：2104986129686741046

---

## 3. InstaCloud — agent 原生 serverless 云

- **作者**：@hanghuang_（@insforge，YC P26）
- **时间**：2026-09-29 15:01 UTC
- **视频**：约 148 秒
- **亮点**：Introducing instacloud.com。$8M seed。服务自动扩缩、基础设施代管；agent 工作时分支出完整镜像环境，保护生产。MCP / CLI 直连 agent。https://www.instacloud.com/
- **互动**：约 2300 赞、70.2 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/hanghuang_/status/2104949571789148416
- **tweetId**：2104949571789148416

---

## 4. OpenAI Ultrafast — 高速 token 档

- **作者**：@OpenAI
- **时间**：2026-09-29 17:57 UTC
- **视频**：约 45 秒
- **亮点**：Ultrafast：Codex 里最高 8 倍 token 生成（300 tok/s），API 最高 6 倍。
- **互动**：约 5185 赞、66.2 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/OpenAI/status/2104993966043320759
- **tweetId**：2104993966043320759

---

## 5. ChatGPT Space — 团队协作套件与 Pages

- **作者**：@ChatGPT
- **时间**：2026-09-29 17:29 UTC
- **视频**：约 60 秒
- **亮点**：ChatGPT Space is your new home for creating and collaborating with your team and AI。Pages：可交互文档。今日滚出给 Pro / Business / Enterprise。@matteing 跟进线程 2105024607552172137 可合并审。
- **互动**：约 2292 赞、40.7 万+浏览
- **分类建议**：productivity / ai
- **链接**：https://x.com/ChatGPT/status/2104986841145602351
- **tweetId**：2104986841145602351

---

## 6. Codex Security Cloud — Daybreak Blue 安全云

- **作者**：@OpenAI
- **时间**：2026-09-29 17:31 UTC
- **视频**：约 20 秒
- **亮点**：Codex Security Cloud 升级：默认接入 cyber-capable 模型 Daybreak Blue。扫整仓 GitHub、连续审 commit、去重并准备修复。
- **互动**：约 3303 赞、37.3 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/OpenAI/status/2104987422308335828
- **tweetId**：2104987422308335828

---

## 7. Angular Native — 用 Angular 做真原生手机应用

- **作者**：@ashh640
- **时间**：2026-09-29 09:49 UTC
- **视频**：约 39 秒
- **亮点**：Introducing Angular Native。Expo 体验 + Angular：真原生 iOS / Android。
- **互动**：约 1851 赞、30.8 万+浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/ashh640/status/2104871228271899041
- **tweetId**：2104871228271899041

---

## 8. Notion — ChatGPT 订阅直接抵 AI 用量

- **作者**：@NotionHQ
- **时间**：2026-09-29 17:59 UTC
- **视频**：约 23 秒
- **亮点**：ChatGPT Plus / Pro 订阅可覆盖 Notion 内 AI 用量。
- **互动**：约 2234 赞、25.8 万+浏览
- **分类建议**：productivity / ai
- **链接**：https://x.com/NotionHQ/status/2104994569964388738
- **tweetId**：2104994569964388738

---

## 9. Cursor /visualize — 聊天里直接画图

- **作者**：@cursor_ai
- **时间**：2026-09-29 19:09 UTC
- **视频**：约 33 秒
- **亮点**：/visualize 分析数据并内联出图，Agents Window 今日可用。
- **互动**：约 2163 赞、11.8 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/cursor_ai/status/2105012114200887434
- **tweetId**：2105012114200887434

---

## 10. pdfcn — 像写 UI 一样写 PDF

- **作者**：@shadcnlabs
- **时间**：2026-09-29 07:47 UTC
- **视频**：约 15 秒
- **亮点**：Introducing pdfcn。Takumi + Forme：10+主题、40+组件，shadcn/ui 兼容。
- **互动**：约 2624 赞、3120 收藏、10.9 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/shadcnlabs/status/2104840500847263794
- **tweetId**：2104840500847263794

---

## 11. Figma Dev Mode × Codex

- **作者**：@figma
- **时间**：2026-09-29 17:57 UTC
- **视频**：约 40 秒
- **亮点**：Dev Mode, now in Codex，走 Figma 插件。@zoink 跟进 2105073236572844497 可合并审。
- **互动**：约 1276 赞、9.3 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/figma/status/2104994048381792487
- **tweetId**：2104994048381792487

---

## 12. Perplexity Computer Automations

- **作者**：@perplexity_ai
- **时间**：2026-09-29 16:46 UTC
- **视频**：约 92 秒
- **亮点**：Introducing Automations in Perplexity Computer。事件触发或定时执行；连 Slack / Gmail / Outlook / Linear。
- **互动**：约 452 赞、8.1 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/perplexity_ai/status/2104976036274552963
- **tweetId**：2104976036274552963

---

## 13. tldraw — ChatGPT 多人画布插件

- **作者**：@tldraw
- **时间**：2026-09-29 18:35 UTC
- **视频**：约 127 秒
- **亮点**：introducing the tldraw plugin for ChatGPT，实时多人画布。
- **互动**：约 556 赞、6.8 万+浏览
- **分类建议**：design / ai / productivity
- **链接**：https://x.com/tldraw/status/2105003566351908892
- **tweetId**：2105003566351908892

---

## 14. Replicas V3 — 云端 agent VM

- **作者**：@connortbot
- **时间**：2026-09-29 16:30 UTC
- **视频**：约 122 秒
- **亮点**：Introducing Replicas V3。VM 里跑 Claude Code / Codex；从 Slack / Linear / 桌面端 / 手机委派。
- **互动**：约 224 赞、2.4 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/connortbot/status/2104971967908515908
- **tweetId**：2104971967908515908

---

## 15. 0xdesigner MCP — 让 agent 请外包设计

- **作者**：@0xDesigner
- **时间**：2026-09-29 20:13 UTC
- **视频**：约 12 秒
- **亮点**：introducing the 0xdesigner MCP。agent 调用作者本人来改 UI。
- **互动**：约 252 赞、1.6 万+浏览
- **分类建议**：design / ai / developer-tools
- **链接**：https://x.com/0xDesigner/status/2105028261558493219
- **tweetId**：2105028261558493219

---

## 16. Elgato — ChatGPT & Codex Stream Deck 插件

- **作者**：@elgato
- **时间**：2026-09-29 20:16 UTC
- **视频**：约 65 秒
- **亮点**：Introducing the ChatGPT & Codex Stream Deck plugin。Marketplace 免费。
- **互动**：约 61 赞、1.4 万+浏览
- **分类建议**：hardware / developer-tools / ai
- **链接**：https://x.com/elgato/status/2105028896882331891
- **tweetId**：2105028896882331891

---

## 17. Firecrawl Alexandria — ChatGPT / Codex 数据插件

- **作者**：@firecrawl
- **时间**：2026-09-29 16:02 UTC
- **视频**：约 10 秒
- **亮点**：Introducing Alexandria in ChatGPT & Codex。100+ 数据源。
- **互动**：约 136 赞、1.2 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/firecrawl/status/2104964997633765737
- **tweetId**：2104964997633765737

---

## 18. Stripe — Agent 用 Ramp 卡买东西

- **作者**：@stripe
- **时间**：2026-09-29 21:26 UTC
- **视频**：约 32 秒
- **亮点**：Agents can now use Ramp cards to buy from businesses using Stripe via MPP。
- **互动**：约 88 赞、1.1 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/stripe/status/2105046474791035215
- **tweetId**：2105046474791035215

---

## 19. MausBot — 开源常在 agent

- **作者**：@milindlabs
- **时间**：2026-09-29 22:49 UTC
- **视频**：约 15 秒
- **亮点**：Introducing MausBot。开源常在 agent，复用现有 AI 订阅；对标 OpenAI dots 的 indie 替代。
- **互动**：约 92 赞、1.0 万+浏览
- **分类建议**：ai / developer-tools / consumer
- **链接**：https://x.com/milindlabs/status/2105067488484655364
- **tweetId**：2105067488484655364

---

## 20. Runway Agent Tagging

- **作者**：@runwayml
- **时间**：2026-09-29 18:58 UTC
- **视频**：约 94 秒
- **亮点**：资产处标注 Runway Agent 即可请求编辑 / 选项 / 修复。
- **互动**：约 60 赞、8800+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/runwayml/status/2105009229702799497
- **tweetId**：2105009229702799497

---

## 21. Warp — 用 ChatGPT 账号登录

- **作者**：@warpdotdev
- **时间**：2026-09-29 17:37 UTC
- **视频**：约 22 秒
- **亮点**：Warp Terminal / Agent CLI 可 Sign in with ChatGPT。
- **互动**：约 98 赞、7500+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/warpdotdev/status/2104988839177855450
- **tweetId**：2104988839177855450

---

## 22. Agent Foundation (a13n) — 开源 agent 基座

- **作者**：@ConvergeAI_X
- **时间**：2026-09-29 23:08 UTC
- **视频**：约 46 秒
- **亮点**：Meet Agent Foundation (a13n)。开源可自托：记忆、sandbox、computer use、可持久执行。
- **互动**：约 65 赞、6500+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/ConvergeAI_X/status/2105072162537345421
- **tweetId**：2105072162537345421

---

## 23. Space（getspace.so）— 无限文件系统

- **作者**：@byjasonz
- **时间**：2026-09-29 19:50 UTC
- **视频**：约 67 秒
- **亮点**：introducing Space: the infinite filesystem。与 ChatGPT Space / 目录旧 Space 条目不同产品。
- **互动**：约 58 赞、3300+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/byjasonz/status/2105022380666171834
- **tweetId**：2105022380666171834

---

## 24. Okara — Dots for marketing（09-30 凌晨补扫）

- **作者**：@askOkara
- **时间**：2026-09-30 07:45 UTC
- **视频**：约 67 秒
- **亮点**：Introducing Dots for marketing。丢网站即部署营销 agent 团队拉流量 / 用户。https://okara.ai 跟 DevDay dots 形成对照，但是独立产品入口。
- **互动**：约 149 赞、33 转发、97 收藏、2.1 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/askOkara/status/2105202449162350808
- **tweetId**：2105202449162350808

---

## 25. MotionVideo — 让 coding agent 做发布片（09-30 凌晨补扫）

- **作者**：@alaymanguy（@shadcnlabs）
- **时间**：2026-09-30 07:18 UTC
- **视频**：约 15 秒
- **亮点**：Introducing MotionVideo。Agent skills：从 prompt 出 showreel / intro / launch film。https://motionvideo.xyz
- **互动**：约 96 赞、84 收藏、5600+浏览
- **分类建议**：motion / ai / design
- **链接**：https://x.com/alaymanguy/status/2105195547233771804
- **tweetId**：2105195547233771804

---

## 26. 其他高信号 / 跟进

- **OpenAI 「Your dot is ready」**（@OpenAI）：dots 同日预告短片，建议与主条目 1 合并。https://x.com/OpenAI/status/2104980481876070819
- **Sergio Mattei × ChatGPT Space Pages 线程**（@matteing）。https://x.com/matteing/status/2105024607552172137
- **Dylan Field × Figma Dev Mode MCP**（@zoink）。https://x.com/zoink/status/2105073236572844497
- **Warp GPT 6.1 Sol**（@warpdotdev）。https://x.com/warpdotdev/status/2105069001131049028

## 已在目录或 09-27 / 09-28 / 09-29 文档中出现（仅交叉引用，不重复入队）

Team Bots、Claude Sonnet 5.5、Nothing Headphone (1) Pro、Tapkit、Vibecode Built on iPhone、Wabi 2.0、Overlay、MicroFactory、dial、Runway × ElevenLabs v4、OpenAI 「Get ready.」、Agent Monitor、Pause 1.0 Flash、旧 Space 条目、Pulse、shadercn、Framer /launch-check / /design-system。

## 已过滤（不入库）

- 阅读量少于 500 的帖子
- 加密货币 / 代币 / NFT / launchpad（含 Chainlink Fulcrum、Fluidkey yield、$RESI 等）
- 政治 / 新闻评论
- 体育 / 娱乐 / 音乐发行 / 追星 / hololive 游戏道具
- 纯游戏 demo
- 教程 / 作品集 / 非发布（含 Boston Dynamics Atlas 品牌长片非单点首发、Figma community shader 资源包）

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-30-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
