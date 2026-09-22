# 2026-09-20 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-18 上午至 2026-09-20 上午 CST（补 09-18 文档截稿后的窗口，含 09-19 全天）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-17 / 09-18 已发现文档互补，不重复已入队条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-20-zh-summary.md
```

---

## 1. Pocket FM Sherpa — 面向连载小说的写作 AI

- **作者**：@RohanNayak2（Pocket Entertainment CEO）
- **时间**：2026-09-18 18:45 UTC
- **视频**：约 207 秒
- **亮点**：Introducing Sherpa。自称最强虚构写作 AI：一句话创意 → 世界观与角色心理 → 分季/弧/集/场规划 → 逐场成稿 → 编辑评审 → 一键配音并发布到 Pocket FM。声称因 Sherpa 内容产能一年涨 1200%，ARR 从 $250M 到 $500M；用分钟级留存数据训练，配 Narrative World Model、分层规划器与 Prose Engine。是本窗口观看量最高的官方发布长片。
- **互动**：约 4798 赞、501 转发、435 引用、5898 收藏、445 万+浏览
- **分类建议**：ai / consumer
- **链接**：https://x.com/RohanNayak2/status/2101019876269973593
- **tweetId**：2101019876269973593

---

## 2. Meta Muse Connectors — 开发者可自建 Muse 连接器

- **作者**：@finkd（Mark Zuckerberg）
- **时间**：2026-09-18 23:03 UTC
- **视频**：约 8 秒
- **亮点**：向开发者开放 Muse connectors。你提供 API，Muse 提供 agent、浏览器与用户意图上下文；用户开口即可触达服务。新连接器当日上线。@stripe 跟帖演示用 Stripe 接 agentic payments。短官方能力片，观看量极高。
- **互动**：约 8694 赞、670 转发、532 引用、5259 收藏、362 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/finkd/status/2101084678640066765
- **tweetId**：2101084678640066765

---

## 3. Agentsky — Agent 市场（浏览器 / API 免安装）

- **作者**：@quxiaoyin（@agentsky_dev）
- **时间**：2026-09-18 15:17 UTC
- **视频**：约 78 秒
- **亮点**：We just launched Agentsky。口号是 OpenRouter 管模型、AgentSky 管 agent。浏览器或手机、一条 API 即可用 Claude Code / Codex / OpenCode / Hermes / Pi 等 40+ agent，不用本地安装。打满 Codex Astra 周限额可把上下文交给 OpenCode + DeepSeek V4.1。https://agentsky.dev/
- **互动**：约 1176 赞、299 转发、190 引用、501 收藏、262 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/quxiaoyin/status/2100967557314547943
- **tweetId**：2100967557314547943

---

## 4. AgentCloak — 浏览器里脱敏后再问任意 AI

- **作者**：@peteryared（@AgentCloakAI / InCountry）
- **时间**：2026-09-18 14:47 UTC
- **视频**：约 118 秒
- **亮点**：Introducing AgentCloak。发请求前把敏感信息换成逼真假数据，答完再换回真实值；ChatGPT / Claude / 中国模型通用。全程浏览器内运行，现已免费。跟帖指向 https://incountry.com/ 。是本窗口传播最开的隐私工具发布片。
- **互动**：约 6969 赞、1040 转发、155 引用、8729 收藏、216 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/peteryared/status/2100960005289807961
- **tweetId**：2100960005289807961

---

## 5. Google Search Live × Gemini 3.8 Live

- **作者**：@Google
- **时间**：2026-09-18 20:17 UTC
- **视频**：约 77 秒
- **亮点**：watchlist 账号官方能力片。Search Live 实时帮助更自然，底层换成最新音频模型 Gemini 3.8 Live。非全新品牌，但是完整官方 walkthrough，观看量够入库。
- **互动**：约 1277 赞、98 转发、15 引用、189 收藏、33.8 万+浏览
- **分类建议**：ai / consumer
- **链接**：https://x.com/Google/status/2101042933650571469
- **tweetId**：2101042933650571469

---

## 6. Jev Model Router for Claude Code

- **作者**：@dani_avila7
- **时间**：2026-09-19 05:08 UTC
- **视频**：约 25 秒
- **亮点**：Introducing Jev Model Router for Claude Code。Claude Code Mod：每次请求由 Jev 选 subagent 模型、主模型（仅 session 开头以免打坏 cache）和 effort。走 TypeSafe 直连 API 或 Vercel AI Gateway。安装：`npx claude-code-templates@latest --mod productivity/jev-model-router`。是本日观看量最高的开发者工具短片。
- **互动**：约 1241 赞、113 转发、17 引用、1848 收藏、13.9 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/dani_avila7/status/2101176629745561686
- **tweetId**：2101176629745561686

---

## 7. simple-jev — 把任意 HF 模型 Jev 化

- **作者**：@picocreator（@FeatherlessAI）
- **时间**：2026-09-18 17:51 UTC
- **视频**：约 50 秒
- **亮点**：Introducing https://simple-jev.featherless.ai/ 。开源库：任意 Hugging Face 模型可 Jev-ify，并提供 API；补官方 Jev 非开源、无视觉的缺口。GitHub + Featherless 生产环境同步上线。
- **互动**：约 1184 赞、124 转发、20 引用、1682 收藏、9.1 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/picocreator/status/2101006253829046539
- **tweetId**：2101006253829046539

---

## 8. Stripe × Muse — 用连接器收 agentic 付款

- **作者**：@stripe
- **时间**：2026-09-19 01:29 UTC
- **视频**：约 35 秒
- **亮点**：watchlist 账号官方跟进片。引用 Zuck 的 Muse connectors 帖，演示「建 Muse connector + 用 Stripe 收 agentic payments」。产品句清楚，可与 Muse 主帖一起审，也可单独入库。
- **互动**：约 800 赞、36 转发、13 引用、388 收藏、8.8 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/stripe/status/2101121486316884279
- **tweetId**：2101121486316884279

---

## 9. xTerra DHAV-Hy — 轮腿四足平台

- **作者**：@xTerraRobotics
- **时间**：2026-09-19 16:26 UTC
- **视频**：约 96 秒
- **亮点**：Introducing DHAV-Hy。轻量轮腿四足：平地、崖峽、坡道、楼梯；面向安防、监控与巡检。印度 IIT Kanpur 孵化的硬件发布片，演示完整。
- **互动**：约 880 赞、225 转发、31 引用、101 收藏、6.1 万+浏览
- **分类建议**：hardware
- **链接**：https://x.com/xTerraRobotics/status/2101347241231622431
- **tweetId**：2101347241231622431

---

## 10. jev-align — 用 GEPA 校准 Jev 的开源 CLI

- **作者**：@sethkimmel3（@sutro_sh）
- **时间**：2026-09-19 17:08 UTC
- **视频**：约 129 秒
- **亮点**：launched jev-align。开源 CLI，用 GEPA 快速教 Jev 什么算好、什么算坏。https://github.com/sutro-sh/jev-align 近两分钟 walkthrough，收藏量很高。
- **互动**：约 463 赞、45 转发、5 引用、900 收藏、5.7 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/sethkimmel3/status/2101357768640987302
- **tweetId**：2101357768640987302

---

## 11. Runway Ruby — 保留 Alpha 通道转 HDR

- **作者**：@runwayml
- **时间**：2026-09-18 17:02 UTC
- **视频**：约 48 秒
- **亮点**：watchlist 账号官方新能力。Ruby 现支持 alpha：一步把素材转 HDR 并保住透明通道。
- **互动**：约 256 赞、25 转发、19 引用、115 收藏、4.6 万+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/runwayml/status/2100993913389539483
- **tweetId**：2100993913389539483

---

## 12. Trylle Magic Sessions — 从 issue 跑到 PR

- **作者**：@stylessh（@trylle）
- **时间**：2026-09-18 18:03 UTC
- **视频**：约 115 秒
- **亮点**：we just shipped Magic Sessions。从仓库 issue 发起长任务：开任务、测改动、开 PR。作者用真实 issue 一路跑到 pull request。https://trylle.com/home
- **互动**：约 99 赞、14 转发、29 引用、53 收藏、4.5 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/stylessh/status/2101009340144492667
- **tweetId**：2101009340144492667

---

## 13. GitHub Copilot 近期更新串

- **作者**：@github
- **时间**：2026-09-18 17:00 UTC
- **视频**：约 59 秒
- **亮点**：watchlist 账号官方汇总片。「Recent GitHub Copilot updates you should know」。更像能力回顾而不是单一功能首发，观看量够，审核时按 recap 处理。
- **互动**：约 147 赞、14 转发、35 收藏、5.2 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/github/status/2100993288178479108
- **tweetId**：2100993288178479108

---

## 14. Oxygen UI — Solana 界面开源组件

- **作者**：@SubhanHQ（@oxygenui）
- **时间**：2026-09-19 13:12 UTC
- **视频**：约 252 秒
- **亮点**：Introducing Oxygen UI。开源 React 组件，覆盖钱包、代币、交易、仪表盘等 Solana 界面原语。Solana Foundation India 支持。片偏长，功能面铺得开。
- **互动**：约 107 赞、15 转发、4 引用、106 收藏、1.5 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/SubhanHQ/status/2101298491628933548
- **tweetId**：2101298491628933548

---

## 15. Linear — 把 .md / .txt 当内容而不是附件

- **作者**：@linear
- **时间**：2026-09-18 15:34 UTC
- **视频**：约 11 秒
- **亮点**：watchlist 账号官方小功能片。把 Markdown / 纯文本拖进 Linear 当正文而不是附件。短、清楚、质感对口。
- **互动**：约 179 赞、4 转发、4 引用、43 收藏、1.7 万+浏览
- **分类建议**：productivity
- **链接**：https://x.com/linear/status/2100971841330221306
- **tweetId**：2100971841330221306

---

## 16. video-demo skill — 给 Web App 自动出带旁白的演示片

- **作者**：@nilbuild
- **时间**：2026-09-19 09:48 UTC
- **视频**：约 34 秒
- **亮点**：Made a skill for video demos。`/video-demo [description]` 录 Web App、推镜头、配旁白，可迭代到满意。https://github.com/nilbuild/video-demo 本帖视频即一镜生成。对 whatships 选题极对口。
- **互动**：约 157 赞、7 转发、227 收藏、1.2 万+浏览
- **分类建议**：design / motion / developer-tools
- **链接**：https://x.com/nilbuild/status/2101247123886845968
- **tweetId**：2101247123886845968

---

## 17. Onlight — macOS 菜单栏控 Hue

- **作者**：@jamesm（@wireframe）
- **时间**：2026-09-19 12:26 UTC
- **视频**：约 28 秒
- **亮点**：Introducing Onlight。原生菜单栏 App，控制 Philips Hue。免费下载 https://www.onlig.ht/ 短片路径清楚，设计质感强。
- **互动**：约 227 赞、8 转发、112 收藏、1.2 万+浏览
- **分类建议**：design / consumer
- **链接**：https://x.com/jamesm/status/2101286767131513088
- **tweetId**：2101286767131513088

---

## 18. Instinct — iMessage 原生健身教练

- **作者**：@MaxHirsch13（Maxed AI）
- **时间**：2026-09-19 19:50 UTC
- **视频**：约 36 秒
- **亮点**：Introducing the only iMessage-native fitness coach。接在 Maxed AI 上。消费级迭代片，观看量够。App Store：Maxed AI Smart Fitness。
- **互动**：约 72 赞、1 转发、5 引用、31 收藏、1.1 万+浏览
- **分类建议**：consumer / ai
- **链接**：https://x.com/MaxHirsch13/status/2101398505122103539
- **tweetId**：2101398505122103539

---

## 19. Framer — 用 prompt 做 3D 变换动画

- **作者**：@framer
- **时间**：2026-09-18 17:37 UTC
- **视频**：约 48 秒
- **亮点**：watchlist 账号能力演示。从 frame + prompt 开始 restyle、加 360° 旋转、点播放。不是全新产品线首发，但是完整官方 walkthrough。
- **互动**：约 94 赞、9 转发、3 引用、34 收藏、1.0 万+浏览
- **分类建议**：design / motion
- **链接**：https://x.com/framer/status/2101002674804019282
- **tweetId**：2101002674804019282

---

## 20. Spectrum UI — React / Tailwind 组件库重做 + MCP

- **作者**：@arihantCodes
- **时间**：2026-09-18 13:01 UTC
- **视频**：约 22 秒
- **亮点**：Introducing Spectrum UI。250+ 组件与 block，加上 AI Agents MCP，界面重做。https://ui.spectrumhq.in 可复制源码或走 shadcn-cli。
- **互动**：约 210 赞、12 转发、251 收藏、9400+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/arihantCodes/status/2100933288563278121
- **tweetId**：2100933288563278121

---

## 21. Commons — 人与 Agent 共建自治组织

- **作者**：@NicolaeRusan
- **时间**：2026-09-18 18:54 UTC
- **视频**：约 75 秒
- **亮点**：Introducing Commons。让人与 AI agent 一起跑越来越自治的组织：agent 能否端到端经营、开源之后如何共养公共品、agent 社会如何公开做科学。与 @YondonFu @ericxtang @maxsbennett 合作。
- **互动**：约 87 赞、11 转发、5 引用、93 收藏、8400+浏览
- **分类建议**：ai / other
- **链接**：https://x.com/NicolaeRusan/status/2101022072525013220
- **tweetId**：2101022072525013220

---

## 22. Replit Custom Connectors

- **作者**：@Replit
- **时间**：2026-09-18 22:03 UTC
- **视频**：约 223 秒
- **亮点**：watchlist 账号周报片。Custom Connectors：把 Agent 接到集成库之外的 API；企业审计日志再加 65+ 事件。偏周更新串，不是单一品牌首发。
- **互动**：约 35 赞、5 转发、5 引用、8 收藏、7500+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/Replit/status/2101069744514490616
- **tweetId**：2101069744514490616

---

## 23. Free Reader — 本地优先的 Mac 阅读器

- **作者**：@marvy_101
- **时间**：2026-09-19 20:29 UTC
- **视频**：约 83 秒
- **亮点**：introducing free reader。给自己做的 Mac App：干净阅读位，本地、无订阅、Native Swift，灵感来自 Codex。indie 设计向发布片。
- **互动**：约 113 赞、13 转发、1 引用、63 收藏、6400+浏览
- **分类建议**：productivity / consumer / design
- **链接**：https://x.com/marvy_101/status/2101408277330280479
- **tweetId**：2101408277330280479

---

## 24. eno —「最后一个工具」工作台

- **作者**：@noechague（@enobaseHQ）
- **时间**：2026-09-19 18:29 UTC
- **视频**：约 58 秒
- **亮点**：introducing eno。口号「不是又一个工具，是最后一个。SaaS is dead」。产品站 https://www.enobase.com/fr 片把品牌句讲清，需审核功能是否够具体入库。
- **互动**：约 66 赞、2 转发、3 引用、75 收藏、5600+浏览
- **分类建议**：productivity / ai
- **链接**：https://x.com/noechague/status/2101378074092658947
- **tweetId**：2101378074092658947

---

## 25. 其他高信号 / 跟进

- **Krea Agent 全生成片**（约 15 秒，2.0 万+浏览）：能力展示，非新功能首发。https://x.com/krea_ai/status/2101096225823228020
- **AX Tier List**（@heymikasagi，约 9 秒，1.5 万+浏览）：Agent 自主注册服务排行，研究/评测片。https://x.com/heymikasagi/status/2101040598480523549
- **GPT-6 Astra 买车工作流**（@shengkunye，约 33 秒，1.1 万+浏览）：Astra 工作流演示，非新品牌。https://x.com/shengkunye/status/2101048955748638815
- **Jev 实时计算器**（@neogoose_btw，约 34 秒，8.3 万+浏览）：Jev 实验项目 / 戏谱 demo。https://x.com/neogoose_btw/status/2101174909942772045
- **Yote 开源输入组件**（@Tsavsar_，约 73 秒，3500+浏览）：`npm i yote-ui`。https://x.com/Tsavsar_/status/2100971942798848178
- **3ds Max MCP Scene Builder**（@DSkaale，约 26 秒，2300+浏览）：一图生成可编辑 3ds Max 场景。https://x.com/DSkaale/status/2101019218586325273
- **fal × Lyria 3.5**（约 28 秒，3800+浏览）：Google DeepMind 音乐模型上架 fal。https://x.com/fal/status/2101396988260491646
- **Dot × Jev**（约 36 秒，1450+浏览）：Jev 接到 Dot 平台。https://x.com/usedotai/status/2101375380825497835
- **Framer 四个站点案例**（约 11 秒，2800+浏览）：案例串，非新功能。https://x.com/framer/status/2101416276619047018
- **GitHub Universe 票务片**（约 11 秒，3.7 万+浏览）：活动片。https://x.com/github/status/2101394440526979105
- **SPECS × Imogen Heap 手势演奏**（@specs，约 255 秒，1.5 万+浏览）：已发布硬件的合作演示，非本窗口首发。https://x.com/specs/status/2100783950432280888

## 已在 09-16 / 09-17 / 09-18 文档中出现（仅交叉引用）

OpenAI Astra for Law、Claude Projects 重做、Mio、CrowdReply Astra for Marketing、Lightreel Claude Marketing MCP、Notion Skills API、Perplexity Computer Effort、terminal-browser 插件、Memorable、Runway Enhance Frame Rate、Nautilo、Figma node、Krea Agent 视频编辑器、Motion × Astra、LM Studio Bionic、ElevenLabs Reception、QuiverAI Arrow 2、Gemini 3.8 Live 首发窗口。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（个人 MCP 初稿、App Stack Builder 上架播报等）
- 加密货币 / 代币 / NFT / launchpad（Nosh、SAFIX、Sable RWA、$AURN、Trends on Browser、Solrouter perps、Atlas Stars、Cloud Quest × VIVIDGENERATION）
- 纯游戏 demo / 模组 / 游戏测试（Petit Planet Final Beta、Slippi 浏览器回放、SLOPS World、Control Resonant 联动片）
- 体育 / 娱乐 / 音乐发行（UFC331、Steve Vai BEAST、Vettuvam 电影预告、AzChike 访谈）
- 政治 / 新闻评论片、街道地推赌场片
- GitHub Universe / Cloudflare Connect / Supabase Select 会前预告（活动片非产品发布）
- 开源项目清单二创片（300+ agent tools 盘点，非官方首发）
- Google CC 家庭 agent 财经解说二创（非官方主帖）
- Julian Goldie 等 MCP 解说长片
- Founders Inc「个人飞行车」概念预告（无量产产品）

**已核对**：上述主条目 tweetId 在 `src/data/videos.json` / `src/data` 代码检索中无命中。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-20-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
