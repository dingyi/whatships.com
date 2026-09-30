# 2026-09-30 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / now available / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-29 上午至 2026-09-30 上午 CST（以 OpenAI DevDay 窗口为主，并补 09-29 文档截稿后的高信号片）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-29 已发现文档互补，不重复已入队 / 已上站条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-30-zh-summary.md
```

---

## 1. OpenAI dots — GPT-6 Astra 驱动的常在 agent

- **作者**：@OpenAI
- **时间**：2026-09-29 17:19 UTC
- **视频**：约 148 秒
- **亮点**：watchlist 账号官方产品首发。Introducing dots, powered by GPT-6 Astra。常在 agent：有自己的云电脑，通过 ChatGPT 连 4000+ App / 插件；可预订餐桌，也可当高主动工程师 / 首席办事用。用户设边界（自主 / 先问 / 永远不做）；Pro / Business Premium / Enterprise 在合格市场可用，从 ChatGPT 桌面端或浏览器创建。同日预告短片 2104980481876070819（「Your dot is ready to meet you.」约 30 秒、4.38 百万+浏览）可合并审。本窗口浏览量绝对第一的官方发布长片，建议以本帖入库。
- **互动**：约 2.91 万赞、2414 转发、2257 引用、1507 回复、8277 收藏、815 万+浏览
- **分类建议**：ai / productivity / consumer
- **链接**：https://x.com/OpenAI/status/2104984504133918973
- **tweetId**：2104984504133918973

---

## 2. GPT-6.1 Sol — 近 Astra 能力、价格五分之一

- **作者**：@OpenAI
- **时间**：2026-09-29 17:26 UTC
- **视频**：约 8 秒
- **亮点**：watchlist 账号官方模型首发短片。GPT-6.1 Sol: near-Astra intelligence for a fifth of the price。定位同档最划算模型。同日 Warp 跟进 2105069001131049028（GPT 6.1 Sol now in Warp）可合并审。
- **互动**：约 1.71 万赞、1342 转发、839 引用、513 回复、1596 收藏、197.5 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/OpenAI/status/2104986129686741046
- **tweetId**：2104986129686741046

---

## 3. InstaCloud — agent 原生 serverless 云

- **作者**：@hanghuang_（@insforge，YC P26）
- **时间**：2026-09-29 15:01 UTC
- **视频**：约 148 秒
- **亮点**：Introducing instacloud.com。$8M seed。服务自动扩缩、基础设施代管；agent 工作时分支出完整镜像环境，保护生产。MCP / CLI 直连 agent。https://www.instacloud.com/ 本窗口独立云基础设施首发最长片之一。
- **互动**：约 2300 赞、285 转发、266 引用、457 回复、1789 收藏、70.2 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/hanghuang_/status/2104949571789148416
- **tweetId**：2104949571789148416

---

## 4. OpenAI Ultrafast — 高速 token 档

- **作者**：@OpenAI
- **时间**：2026-09-29 17:57 UTC
- **视频**：约 45 秒
- **亮点**：watchlist 账号官方能力档首发。Ultrafast：Codex 里最高 8 倍 token 生成（300 tok/s），API 最高 6 倍。与 dots / Sol 同场，可独立入库。
- **互动**：约 5185 赞、240 转发、186 引用、281 回复、572 收藏、66.2 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/OpenAI/status/2104993966043320759
- **tweetId**：2104993966043320759

---

## 5. ChatGPT Space — 团队协作套件与 Pages

- **作者**：@ChatGPT
- **时间**：2026-09-29 17:29 UTC
- **视频**：约 60 秒
- **亮点**：ChatGPT Space is your new home for creating and collaborating with your team and AI。Pages：可交互文档（图表 / 图片 / 清单 / 仪表盘），可让 ChatGPT 按对话生成；团队直改，或标注 ChatGPT / Codex / dot 跟进。今日滚出给 Pro / Business / Enterprise；Web 与桌面端可编，移动端可看。@matteing 跟进线程 2105024607552172137（约 34.8 万浏览，Pages 内联可视化 / 多人应用 / prompt block）可合并审。与目录里曠有 indie「Space」条目不同产品，建议独立入库。
- **互动**：约 2292 赞、204 转发、87 引用、124 回复、849 收藏、40.7 万+浏览
- **分类建议**：productivity / ai
- **链接**：https://x.com/ChatGPT/status/2104986841145602351
- **tweetId**：2104986841145602351

---

## 6. Codex Security Cloud — Daybreak Blue 安全云

- **作者**：@OpenAI
- **时间**：2026-09-29 17:31 UTC
- **视频**：约 20 秒
- **亮点**：Codex Security Cloud 升级：默认接入 cyber-capable 模型 Daybreak Blue。扫整仓 GitHub、连续审 commit、去重并准备修复；笔记本关上也跑。Codex 桌面端 / Web 插件可用。
- **互动**：约 3303 赞、230 转发、86 引用、152 回复、867 收藏、37.3 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/OpenAI/status/2104987422308335828
- **tweetId**：2104987422308335828

---

## 7. Angular Native — 用 Angular 做真原生手机应用

- **作者**：@ashh640
- **时间**：2026-09-29 09:49 UTC
- **视频**：约 39 秒
- **亮点**：Introducing Angular Native。Expo 体验 + Angular：真原生 iOS / Android，Expo SDK，Angular components / signals / DI，CSS 与 Tailwind 开箱。框架级首发片。
- **互动**：约 1851 赞、277 转发、124 引用、94 回复、721 收藏、30.8 万+浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/ashh640/status/2104871228271899041
- **tweetId**：2104871228271899041

---

## 8. Notion — ChatGPT 订阅直接抵 AI 用量

- **作者**：@NotionHQ
- **时间**：2026-09-29 17:59 UTC
- **视频**：约 23 秒
- **亮点**：watchlist 账号官方计费能力片。ChatGPT Plus / Pro 订阅可覆盖 Notion 内 AI 用量；连计划、选 GPT 模型即可。社区注：需 Notion Business / Enterprise 工作区 + ChatGPT Plus/Pro。
- **互动**：约 2234 赞、135 转发、99 引用、127 回复、691 收藏、25.8 万+浏览
- **分类建议**：productivity / ai
- **链接**：https://x.com/NotionHQ/status/2104994569964388738
- **tweetId**：2104994569964388738

---

## 9. Cursor /visualize — 聊天里直接画图

- **作者**：@cursor_ai
- **时间**：2026-09-29 19:09 UTC
- **视频**：约 33 秒
- **亮点**：watchlist 账号官方能力片。Cursor can now build charts and diagrams right in the chat。/visualize 分析数据并内联出图，Agents Window 今日可用。
- **互动**：约 2163 赞、132 转发、39 引用、94 回复、394 收藏、11.8 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/cursor_ai/status/2105012114200887434
- **tweetId**：2105012114200887434

---

## 10. pdfcn — 像写 UI 一样写 PDF

- **作者**：@shadcnlabs
- **时间**：2026-09-29 07:47 UTC
- **视频**：约 15 秒
- **亮点**：Introducing pdfcn。Takumi + Forme：10+主题、40+组件，shadcn/ui 兼容，一条命令起步。开源免费。indie 设计工具首发短片，收藏量极高。
- **互动**：约 2624 赞、188 转发、14 引用、27 回复、3120 收藏、10.9 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/shadcnlabs/status/2104840500847263794
- **tweetId**：2104840500847263794

---

## 11. Figma Dev Mode × Codex

- **作者**：@figma
- **时间**：2026-09-29 17:57 UTC
- **视频**：约 40 秒
- **亮点**：watchlist 账号官方能力片。Dev Mode, now in Codex，走 Figma 插件。@zoink 跟进 2105073236572844497（可对比本地构建的新 MCP）可合并审。
- **互动**：约 1276 赞、81 转发、23 引用、25 回复、542 收藏、9.3 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/figma/status/2104994048381792487
- **tweetId**：2104994048381792487

---

## 12. Perplexity Computer Automations

- **作者**：@perplexity_ai
- **时间**：2026-09-29 16:46 UTC
- **视频**：约 92 秒
- **亮点**：watchlist 账号官方能力长片。Introducing Automations in Perplexity Computer。事件触发或定时执行；用 memory / skills，连 Slack / Gmail / Outlook / Linear。
- **互动**：约 452 赞、52 转发、10 引用、28 回复、108 收藏、8.1 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/perplexity_ai/status/2104976036274552963
- **tweetId**：2104976036274552963

---

## 13. tldraw — ChatGPT 多人画布插件

- **作者**：@tldraw
- **时间**：2026-09-29 18:35 UTC
- **视频**：约 127 秒
- **亮点**：introducing the tldraw plugin for ChatGPT，实时多人画布，ChatGPT App 内今日可用。本窗口设计工具类首发最长 walkthrough 之一。
- **互动**：约 556 赞、31 转发、11 引用、31 回复、282 收藏、6.8 万+浏览
- **分类建议**：design / ai / productivity
- **链接**：https://x.com/tldraw/status/2105003566351908892
- **tweetId**：2105003566351908892

---

## 14. Replicas V3 — 云端 agent VM

- **作者**：@connortbot
- **时间**：2026-09-29 16:30 UTC
- **视频**：约 122 秒
- **亮点**：Introducing Replicas V3。VM 里跑 Claude Code / Codex；自带订阅或 API key；从 Slack / Linear / 桌面端 / 手机委派。更主动。YC 公司云 agent 首发长 walkthrough。
- **互动**：约 224 赞、41 转发、22 引用、95 回复、107 收藏、2.4 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/connortbot/status/2104971967908515908
- **tweetId**：2104971967908515908

---

## 15. 0xdesigner MCP — 让 agent 请外包设计

- **作者**：@0xDesigner
- **时间**：2026-09-29 20:13 UTC
- **视频**：约 12 秒
- **亮点**：introducing the 0xdesigner MCP。agent 调用作者本人来改 UI。indie MCP 首发短片，收藏比赞比高。
- **互动**：约 252 赞、6 转发、5 引用、44 回复、178 收藏、1.6 万+浏览
- **分类建议**：design / ai / developer-tools
- **链接**：https://x.com/0xDesigner/status/2105028261558493219
- **tweetId**：2105028261558493219

---

## 16. Elgato — ChatGPT & Codex Stream Deck 插件

- **作者**：@elgato
- **时间**：2026-09-29 20:16 UTC
- **视频**：约 65 秒
- **亮点**：Introducing the ChatGPT & Codex Stream Deck plugin。键与旋钮：监控聊天状态、发 / 听写 prompt、中途转 Codex、调模型与 reasoning、看用量。Marketplace 免费。硬件配套软件首发 walkthrough。
- **互动**：约 61 赞、8 转发、4 引用、17 回复、29 收藏、1.4 万+浏览
- **分类建议**：hardware / developer-tools / ai
- **链接**：https://x.com/elgato/status/2105028896882331891
- **tweetId**：2105028896882331891

---

## 17. Firecrawl Alexandria — ChatGPT / Codex 数据插件

- **作者**：@firecrawl
- **时间**：2026-09-29 16:02 UTC
- **视频**：约 10 秒
- **亮点**：Introducing Alexandria in ChatGPT & Codex。100+ 数据源、1.13 亿+索引。声称 agent 用 Alexandria 答题质量高 21%。插件市场可用。
- **互动**：约 136 赞、14 转发、5 引用、15 回复、76 收藏、1.2 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/firecrawl/status/2104964997633765737
- **tweetId**：2104964997633765737

---

## 18. Stripe — Agent 用 Ramp 卡买东西

- **作者**：@stripe
- **时间**：2026-09-29 21:26 UTC
- **视频**：约 32 秒
- **亮点**：watchlist 账号官方能力片。Agents can now use Ramp cards to buy from businesses using Stripe via MPP。https://docs.stripe.com/payments/machine/mpp
- **互动**：约 88 赞、11 转发、8 引用、13 回复、28 收藏、1.1 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/stripe/status/2105046474791035215
- **tweetId**：2105046474791035215

---

## 19. MausBot — 开源常在 agent

- **作者**：@milindlabs
- **时间**：2026-09-29 22:49 UTC
- **视频**：约 15 秒
- **亮点**：Introducing MausBot。开源常在 agent，复用现有 AI 订阅；独立电脑；iOS / Android App；本地或云端。笔记本起任务、手机检查。对标 OpenAI dots 的 indie 替代首发短片。
- **互动**：约 92 赞、4 转发、1 引用、8 回复、72 收藏、1.0 万+浏览
- **分类建议**：ai / developer-tools / consumer
- **链接**：https://x.com/milindlabs/status/2105067488484655364
- **tweetId**：2105067488484655364

---

## 20. Runway Agent Tagging

- **作者**：@runwayml
- **时间**：2026-09-29 18:58 UTC
- **视频**：约 94 秒
- **亮点**：watchlist 账号官方能力长片。资产处标注 Runway Agent 即可请求编辑 / 选项 / 修复。https://runway.com 目录已有 ElevenLabs v4 等条目，本条是 Agent 标注入口，可独立入库。
- **互动**：约 60 赞、12 转发、5 引用、7 回复、28 收藏、8800+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/runwayml/status/2105009229702799497
- **tweetId**：2105009229702799497

---

## 21. Warp — 用 ChatGPT 账号登录

- **作者**：@warpdotdev
- **时间**：2026-09-29 17:37 UTC
- **视频**：约 22 秒
- **亮点**：watchlist 账号官方能力片。Warp Terminal / Agent CLI 可 Sign in with ChatGPT，复用订阅内 Work / Codex 配额。
- **互动**：约 98 赞、6 转发、5 引用、6 回复、17 收藏、7500+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/warpdotdev/status/2104988839177855450
- **tweetId**：2104988839177855450

---

## 22. Agent Foundation (a13n) — 开源 agent 基座

- **作者**：@ConvergeAI_X
- **时间**：2026-09-29 23:08 UTC
- **视频**：约 46 秒
- **亮点**：Meet Agent Foundation (a13n)。开源可自托：记忆、sandbox、computer use、可持久执行。https://github.com/converge-ai-labs/agent-foundation
- **互动**：约 65 赞、4 转发、2 回复、6500+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/ConvergeAI_X/status/2105072162537345421
- **tweetId**：2105072162537345421

---

## 23. Space（getspace.so）— 无限文件系统

- **作者**：@byjasonz
- **时间**：2026-09-29 19:50 UTC
- **视频**：约 67 秒
- **亮点**：introducing Space: the infinite filesystem。挂载后任何 App / agent 原生读写文件；按需流式字节；直接云端构建；上下文可携带。与 ChatGPT Space / 目录旧 Space 条目不同产品，审核时注意别重名。
- **互动**：约 58 赞、4 转发、2 引用、6 回复、17 收藏、3300+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/byjasonz/status/2105022380666171834
- **tweetId**：2105022380666171834

---

## 24. 其他高信号 / 跟进

- **OpenAI 「Your dot is ready」**（@OpenAI，约 30 秒，438 万+浏览）：dots 同日预告短片，建议与主条目 1 合并。https://x.com/OpenAI/status/2104980481876070819
- **OpenAI 「10am PT, on the dot.」**（@OpenAI，约 6 秒，256 万+浏览）：活动倒计时，不当独立产品片入库。https://x.com/OpenAI/status/2104934336206430527
- **Sergio Mattei × ChatGPT Space Pages 线程**（@matteing，主帖约 34.8 万浏览）：Pages 内联问答 / 图片机 / 宽屏展示 / 多人可视化 / prompt block / Spaceblossom 图标。https://x.com/matteing/status/2105024607552172137
- **Dylan Field × Figma Dev Mode MCP**（@zoink，约 40 秒，8000+浏览）：与 Figma 官方帖同视频。https://x.com/zoink/status/2105073236572844497
- **Warp GPT 6.1 Sol**（@warpdotdev，约 8 秒，1700+浏览）：模型入口跟进。https://x.com/warpdotdev/status/2105069001131049028
- **Replit 漏斗分析**（@Replit，约 15 秒，3900+浏览）：已上线产品能力演示，非单点首发。https://x.com/Replit/status/2105055190218924230
- **Koast MCP**（@koast_ai，约 35 秒，977 浏览）：广告操作系统走 MCP，浏览量刚过线。https://x.com/koast_ai/status/2104724627230495067
- **Cardboard Mac 桌面端**（@istgishaaaan，约 17 秒，602 浏览）：vibe edit 视频桌面端，浏览量偏低。https://x.com/istgishaaaan/status/2105001582027067612
- **Framer Agent × typesafe.ai 案例**（@framer，约 152 秒，1.3 万浏览）：客户案例，非新产品入口。https://x.com/framer/status/2104832310558536153

## 已在目录或 09-27 / 09-28 / 09-29 文档中出现（仅交叉引用，不重复入队）

Team Bots（已上 whatships.com）、Claude Sonnet 5.5、Nothing Headphone (1) Pro、Tapkit、Vibecode Built on iPhone、Wabi 2.0、Overlay、MicroFactory、dial、Runway × ElevenLabs v4、OpenAI 「Get ready.」、Agent Monitor、Pause 1.0 Flash、旧 Space 条目、Pulse、shadercn、Framer /launch-check / /design-system。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（Nover Studio MCP、Apple Developer MCP 跟进、部分 indie MCP 草稿等）
- 加密货币 / 代币 / NFT / launchpad（$RESI Reside、UBI.fun Flex Rewards、Agent Wormhole / Longbow 链上代币安全、Orderly Demo DEX）
- 政治 / 新闻评论（Fat Bear Week、洪灾疏散、国会访谈剪辑）
- 体育 / 娱乐 / 音乐发行（Pokemon TCG Pocket、Xbox Disk to Digital 三方评测、K-pop / 展览会、唱片发行、NYFF 访谈）
- 纯游戏 demo / 硬件黄牛（ModRetro Chromatic eBay 次生、三方 Mario 实验）
- 教程 / 作品集 / 非发布（Framer sizing modes 教程、LaunchAnything reel、GitHub 咖啡节段子、Three.js Water Pro WIP）

**已核对**：上述主条目 tweetId 未在 `src/data/videos.json` 代码检索中命中；whatships.com 首页 / 搜索亦未见 dots、Ultrafast、GPT-6.1 Sol、tldraw、pdfcn、InstaCloud、Angular Native、Perplexity Automations、Figma Dev Mode Codex、Cursor /visualize。Team Bots 已在站上，不重复入队。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-30-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
