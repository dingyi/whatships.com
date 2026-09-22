# 2026-09-21 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-20 上午至 2026-09-21 上午 CST（并补录 09-19 未被 09-20 文档收录的高信号片）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-18 / 09-19 / 09-20 已发现文档互补，不重复已入队条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-21-zh-summary.md
```

---

## 1. FIND ⌘F — 用 Jev 做语义搜索的开源 Chrome 插件

- **作者**：@Saboo_Shubham_
- **时间**：2026-09-20 07:37 UTC
- **视频**：约 22 秒
- **亮点**：Introducing a new way FIND (⌘F) with @typesafeai Jev。找你想要的意思，不是字面匹配；近实时、开源 Chrome 插件。跟帖指向 https://github.com/Shubhamsaboo/awesome-llm-apps/tree/main/advanced_llm_apps/needle 。作者表示 Vercel Gateway 一段时间免费提供 Jev，才能把这个实验跑通。是本窗口观看量最高的 indie 工具发布片。
- **互动**：约 1540 赞、72 转发、41 引用、1376 收藏、12.5 万+浏览
- **分类建议**：ai / productivity / developer-tools
- **链接**：https://x.com/Saboo_Shubham_/status/2101576462042366114
- **tweetId**：2101576462042366114

---

## 2. OmniNotch — 更接近 Apple 质感的 Mac 驿屏 App

- **作者**：@nerdynikhil
- **时间**：2026-09-20 12:38 UTC
- **视频**：约 92 秒
- **亮点**：Introducing OmniNotch。作者先排了免费 Mac notch 工具，再坐下来做一个「不像插件、更像 Apple」的 notch：安静、可靠、把剪贴板 / 计时器 / 文件架 / HUD 合进一块。一次买断 $14.99，首发价 $5，无订阅。https://www.omninotch.app/ 近一分半钟 walkthrough 把品味讲清，是本日质感最强的 indie Mac 发布片。
- **互动**：约 152 赞、6 转发、224 收藏、8.3 万+浏览
- **分类建议**：design / productivity / consumer
- **链接**：https://x.com/nerdynikhil/status/2101652329036722516
- **tweetId**：2101652329036722516

---

## 3. Motion Muse — 给网站写发布片 prompt

- **作者**：@motion_so
- **时间**：2026-09-20 18:41 UTC
- **视频**：约 30 秒
- **亮点**：watchlist 账号官方能力片。Introducing Muse for motion design。把网站交给 Muse，它研究产品、拆场景、写视觉方向；把 prompt 贴进 Motion 就能出片。本帖视频就是 Muse 写出的 prompt 生成的。是 09-16 MCP for ChatGPT、09-17 Astra 通道之后的新入口，片可独立入库。
- **互动**：约 218 赞、10 转发、2 引用、141 收藏、1.8 万+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/motion_so/status/2101743483123892677
- **tweetId**：2101743483123892677

---

## 4. duo — 浏览器里的 iPhone Duo 模拟器（09-19 补录）

- **作者**：@capythanh（@DoanLabs）
- **时间**：2026-09-19 15:30 UTC
- **视频**：约 66 秒
- **亮点**：09-20 文档未收录。introducing duo。Apple 还没把 Duo 模拟器交出去，作者先在网页里做了一个：折叠、并排跑 App、自带 App Store；带 SDK 与 React UI kit，可以为「还没人拿到的手机」做应用。https://duo.doan-labs.com 为 Astra Challenge 而做，仍是粗稿。
- **互动**：约 66 赞、3 引用、65 收藏、1.8 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/capythanh/status/2101332991121465549
- **tweetId**：2101332991121465549

---

## 5. Frameclip — 给 Agent 用的 Mac 截图

- **作者**：@kazdenc（Shopify Design）
- **时间**：2026-09-20 21:12 UTC
- **视频**：约 26 秒
- **亮点**：built and shipped。更快的 macOS 截图：捕获、批注、贴进 agent，桌面不留乱文件。免费下载 https://frameclip.app 短片路径清楚，质感对口 indie 设计工具。
- **互动**：约 40 赞、1 引用、34 收藏、2900+浏览
- **分类建议**：design / productivity / developer-tools
- **链接**：https://x.com/kazdenc/status/2101781665026617399
- **tweetId**：2101781665026617399

---

## 6. JCR — Jev Capability Resolver

- **作者**：@niazmorshed_
- **时间**：2026-09-20 13:29 UTC
- **视频**：约 36 秒
- **亮点**：Introducing JCR。不让 agent 把整份 skill 文件读进上下文；Jev 在能力树里搜索，只把相关命令指令拿回来。作者用 Claude / Codex harness 跑了 80 次：Opus 5 上下文少 85%、成本低 67%。https://github.com/NiazMorshed2007/jcr
- **互动**：约 59 赞、7 转发、1 引用、91 收藏、4600+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/niazmorshed_/status/2101664971331666020
- **tweetId**：2101664971331666020

---

## 7. Oh-My-Hermes — Hermes Agent 一键插件包

- **作者**：@rlaope
- **时间**：2026-09-20 03:32 UTC
- **视频**：约 10 秒
- **亮点**：Introducing Oh-My-Hermes (OMH)。把常用 Hermes Agent 插件打成一个生态，口号对齐 Oh My Zsh：编码 skill、sub-agent、多 agent 协作、模型 prompt 优化、TDD / SOLID / 研究 / 视觉设计指南等。带 TUI。https://github.com/rlaope/oh-my-hermes
- **互动**：约 58 赞、3 转发、1 引用、73 收藏、3800+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/rlaope/status/2101514762358259836
- **tweetId**：2101514762358259836

---

## 8. elia — AI 原生界面开源设计系统（09-19 补录）

- **作者**：@AileLabs
- **时间**：2026-09-19 15:33 UTC
- **视频**：约 31 秒
- **亮点**：09-20 文档未收录。Introducing elia。面向 AI 原生界面的开源设计系统：73 个 React 19 + Tailwind v4 组件，含 StreamingText / ThinkingState / TaskRows 等 agent 原语。Token 贯彻；暗色只要给 `<html>` 加一个 class。MIT。`npm i @aile.sh/elia` 演示站 https://dzignz.aile.sh/ 片里动效都是真正包渲出的。
- **互动**：约 16 赞、3 转发、2 引用、1600+浏览
- **分类建议**：design / developer-tools / ai
- **链接**：https://x.com/AileLabs/status/2101333977126830564
- **tweetId**：2101333977126830564

---

## 9. Motion 自定义模板（09-18 补录）

- **作者**：@motion_so
- **时间**：2026-09-18 16:45 UTC
- **视频**：约 30 秒
- **亮点**：09-19 / 09-20 文档未收录。Introducing custom templates for motion design。在 Motion 里做完一条视频后存成模板，以后复用；可以自己搭模板库。与 09-20 的 Muse、以及之前的 MCP / Astra 通道同属一条产品线，片可独立入库。
- **互动**：约 22 赞、3 转发、2 引用、12 收藏、2300+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/motion_so/status/2100989490890227877
- **tweetId**：2100989490890227877

---

## 10. GojiberryAI × Jev — 出站资格与优先级（09-18 补录）

- **作者**：@romanbuildsaas（@GojiberryAI，YC P26）
- **时间**：2026-09-18 23:13 UTC
- **视频**：约 8 秒
- **亮点**：09-20 文档未单独列出。Jev 接进 GojiberryAI + MCP：40 个高意向潜在客户 5 秒分析完，花 $0.01；以前 GPT / Claude 逐个分析要几分钟。短官方能力片，功能句清楚。
- **互动**：约 85 赞、7 转发、3 引用、128 收藏、1.4 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/romanbuildsaas/status/2101087134459306356
- **tweetId**：2101087134459306356

---

## 11. booster_mjlab — Booster K1 机器人训练套件（09-18 补录）

- **作者**：@_gijsdj（UvA / rerun.io）
- **时间**：2026-09-18 23:38 UTC
- **视频**：约 11 秒
- **亮点**：Introducing booster_mjlab。Booster K1 的 mjlab 设置：速度跟踪、动作跟踪、AMP 实现等。项目页 https://intelligentroboticslab.github.io/booster_mjlab/ 研究向硬件 / 仿真发布片，演示完整。
- **互动**：约 62 赞、13 转发、2 引用、33 收藏、5200+浏览
- **分类建议**：hardware / developer-tools
- **链接**：https://x.com/_gijsdj/status/2101093552738738416
- **tweetId**：2101093552738738416

---

## 12. 其他高信号 / 跟进

- **GitHub Copilot CLI × Eyeball skill**（@github，约 97 秒，4.0 万+浏览）：法务团队用 Copilot CLI 做内嵌截图的核对 skill，案例片非新功能首发。https://x.com/github/status/2101738500093612372
- **LaunchrCatalog**（@AFisolami，约 64 秒，2000+浏览）：另一家 X 发布视频曖窗，https://launchrcatalog.com 与 whatships 同赛道，可当 other 看。https://x.com/AFisolami/status/2100898360177680883
- **First Screen**（@yusukelp / LandingBoost，约 15 秒，900+浏览）：贴 landing URL，真 Chrome 拍手机 / 桌面首屏。https://x.com/yusukelp/status/2101107559310717300
- **Dynamic Menu Bar 1.0**（@ahyasinsab，约 42 秒，500+浏览）：Mac 菜单栏跟着屏幕变色，买断制。https://x.com/ahyasinsab/status/2100991668224741691
- **3ds Max MCP Scene Builder**（@DSkaale，约 26 秒，2400+浏览）：09-20 文档已在「其他」提及，这里不重复入队。https://x.com/DSkaale/status/2101019218586325273
- **Motion Jev explainer**（@motion_so，约 291 秒，2100+浏览）：用 Motion 做的 Jev 解说长片，非新产品首发。https://x.com/motion_so/status/2101120657987674608
- **herdr-expose**（@muthuishere，浏览量不足 100）：把本机终端 / agent 暴露到手机浏览器，阅读量不足不入库。

## 已在 09-18 / 09-19 / 09-20 文档中出现（仅交叉引用）

Pocket FM Sherpa、Meta Muse Connectors、Agentsky、AgentCloak、Google Search Live × Gemini 3.8 Live、Jev Model Router、simple-jev、Stripe × Muse、xTerra DHAV-Hy、jev-align、Runway Ruby Alpha、Trylle Magic Sessions、Linear .md/.txt、Framer 3D transforms、Spectrum UI、Commons、Free Reader、eno、TasteCode、Cline jev-browser、Inco Splash、Onlight、video-demo skill、Oxygen UI、OpenAI Astra for Law、Claude Projects 重做、Mio、Notion Skills API、ElevenLabs Reception、QuiverAI Arrow 2。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（部分 MCP 初稿、个人 AI 生成草稿、herdr-expose 等）
- 加密货币 / 代币 / NFT / launchpad（Tipped、Biddy、Infera、$JEVPAY、Oxude、FlowFuel / Orbio、OptimAI Website Studio、Trends on Browser、Solrouter、Arcidex、$ASR、Clanker Town、PONS Face ID 发币）
- 纯游戏 demo / 模组 / 卡面（Forsaken Map Objectives、WWE 2K26 menu mod、Twisted Wonderland SSR）
- 体育 / 娱乐 / 音乐发行（Spotify Nasty dance、USC 女篮、Roobet 赌博）
- 政治 / 新闻评论片、军事情报片、天气警报
- GitHub Universe 票务预告、活动 / 黑客松预告
- Julian Goldie 等 MCP 二创解说长片
- Founders Inc「个人飞行车」概念预告（无量产产品）
- Rocket Lab Electron 第 96 次发射（航天发射纪录片，非软件产品发布）
- Shipper「System One Agent」跟风片（09-19 文档已记）

**已核对**：上述主条目 tweetId 均未在 `src/data/videos.json` 的代码检索命中结果中。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-21-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
