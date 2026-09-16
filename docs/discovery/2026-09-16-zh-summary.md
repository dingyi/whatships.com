# 2026-09-16 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-15 上午至 2026-09-16 上午 CST（并补录 09-14 晚间未被 09-15 文档收录的高信号片）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-14 / 09-15 已发现文档互补，不重复已入队条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-16-zh-summary.md
```

---

## 1. Gemini 3.8 Live / Live Extended Thinking — 实时语音 + 视觉推理模型

- **作者**：@GoogleAI
- **时间**：2026-09-15 17:07 UTC
- **视频**：约 77 秒
- **亮点**：Introducing Gemini 3.8 Live 与 3.8 Live Extended Thinking。Live 面向规模、速度与成本：可中途打断、实时切 97 种语言、理解视觉上下文，在 Search Live 里把摄像头对准坏掉的车链或漏水管就能听分步音频指导。Extended Thinking 边推理边说话，用「Let me check that…」这类口头线索维持对话流，适合规划活动等多步后台任务。官方主片把 DIY 管道维修走完一遍。同系 @Google、@koraykv（DeepMind SVP）各发了 71 秒能力拆解片，开发者文档见 Google 博客。是本日观看量最高的官方发布片。
- **互动**：约 1969 赞、191 转发、637 收藏、13.6 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/GoogleAI/status/2099908000924193124
- **tweetId**：2099908000924193124

---

## 2. Taste Labs Brand API — 给 Agent 的品牌提取 / 检索 / 校验

- **作者**：@thaiscbranco_（Taste Labs CEO）
- **时间**：2026-09-15 17:14 UTC
- **视频**：约 86 秒（主帖）+约 240 秒案例片
- **亮点**：Introducing Brand API。面向生成式 agent 的第一款工具：Extract（按已有品牌产出资产）、Search（从策展索引找风格参考）、Verify（对照品牌检查偏差并给出改法）。免费试用 https://engine.tastelabs.com/，走 API 或 MCP。跟帖放了与 @intelligenceco 的案例长片与博客「Helping agents create things worth making」。@tastelabs 官方号同步发了约 4 分钟版本。是本日质感最强的设计基础设施发布。
- **互动**：主帖约 696 赞、48 转发、661 收藏、9.8 万+浏览
- **分类建议**：design / ai / developer-tools
- **链接**：https://x.com/thaiscbranco_/status/2099909818727453117
- **tweetId**：2099909818727453117

---

## 3. magicX AI Autocomplete — Shopify 店内搜索升级

- **作者**：@bradkowalk（magicX CEO）
- **时间**：2026-09-15 16:26 UTC
- **视频**：约 45 秒
- **亮点**：把 AI Autocomplete 装进 Shopify 商店搜索：用自然语言过滤，把「打一两个词 → 翻 50 条 → 再筛」压成「直接打出想要的东西 → 买」。技术把 LLM 判断和检索速度叠在店铺目录上。Shopify App Store 一键安装。片本身是清楚的功能演示，不是氛围片。
- **互动**：约 424 赞、70 转发、161 引用、167 收藏、43.4 万+浏览
- **分类建议**：ai / productivity / other
- **链接**：https://x.com/bradkowalk/status/2099897698006737261
- **tweetId**：2099897698006737261

---

## 4. bg0 — 本地 WebGPU 开源挖图，替代即将关停的 remove.bg

- **作者**：@leodev
- **时间**：2026-09-15 15:26 UTC
- **视频**：约 16 秒
- **亮点**：Introducing bg0。remove.bg 关停后的开源替代：免费不限量、WebGPU 全本地跑、图片不离设备。试用 https://bg0.dev，源码 https://github.com/opencoredev/bg0。短片把交互路径讲清，是本日传播最开的 indie 工具发布。
- **互动**：约 535 赞、53 转发、382 收藏、2.5 万+浏览
- **分类建议**：design / developer-tools / ai
- **链接**：https://x.com/leodev/status/2099882468166029434
- **tweetId**：2099882468166029434

---

## 5. mem0 Gateway — 给每个 Agent 一把最小权限钥匙

- **作者**：@mem0ai
- **时间**：2026-09-15 16:30 UTC
- **视频**：约 92 秒
- **亮点**：Introducing Gateway。不再把能退款的支付钥匙、能归档整站的 CMS 钥匙直接交给 agent。一把钥匙只开你授予的工具，MCP server 与自有 API 共用同一把；任务变了就改授权，agent 看不到真实凭证。Beta 客户单钥匙已跑过 9.5 万+ 次调用。https://mem0.ai/gateway
- **互动**：约 98 赞、12 转发、69 收藏、1.6 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/mem0ai/status/2099898611337474354
- **tweetId**：2099898611337474354

---

## 6. Notion — 工作区级默认 Agent 指令

- **作者**：@NotionHQ
- **时间**：2026-09-15 16:30 UTC
- **视频**：约 9 秒
- **亮点**：watchlist 账号官方 changelog 片。给整个 workspace 设默认 agent instructions，相当于给所有 agent 立一套 house rules。短、功能句清楚。
- **互动**：约 150 赞、40 收藏、1.4 万+浏览
- **分类建议**：productivity / ai
- **链接**：https://x.com/NotionHQ/status/2099898675623608547
- **tweetId**：2099898675623608547

---

## 7. pgrust v0.3 — 更接近 Postgres 兼容的分析型引擎

- **作者**：@mmalisper
- **时间**：2026-09-15 17:18 UTC
- **视频**：约 9 秒
- **亮点**：Introducing pgrust v0.3。同一份 16.4 万用例（来自 Django / SQLAlchemy / Hibernate / Rails 等 50 个开源项目）上，v0.2 偏离 Postgres 1454 例，v0.3 只剩 11 例。号称分析负载比 Postgres 快约 300 倍、可作 drop-in。作者明确不建议现在上生产，但欢迎非关键负载试用。
- **互动**：约 133 赞、14 转发、33 收藏、1.1 万+浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/mmalisper/status/2099910739825995848
- **tweetId**：2099910739825995848

---

## 8. Motion Codex for ads — 编码 Agent 直接做广告片

- **作者**：@motion_so
- **时间**：2026-09-15 17:01 UTC
- **视频**：约 30 秒
- **亮点**：Introducing Codex for ads。给 Codex 产品、想法和几份资产，Motion MCP 写文案、搭场景、做动画；用 prompt 改 hook / 节奏 / CTA。本帖视频由 Codex + Motion 生成。是 09-14 Motion MCP for Codex 同一产品线的广告向能力发布，片本身可独立入库。
- **互动**：约 72 赞、7 转发、94 收藏、7200+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/motion_so/status/2099906583505322440
- **tweetId**：2099906583505322440

---

## 9. freecode.sh — 免费、不限额的编码 Agent

- **作者**：@big_schmitz（@freecode_sh）
- **时间**：2026-09-15 17:50 UTC
- **视频**：约 43 秒
- **亮点**：编码 agent，号称永远不要信用卡、API key 或订阅；用高效 harness + 开源模型把推理成本压到可白送。https://freecode.sh。约 43 秒演示把产品句讲清，适合当 indie 开发者工具发布看。
- **互动**：约 127 赞、18 转发、49 收藏、1.4 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/big_schmitz/status/2099918878189252740
- **tweetId**：2099918878189252740

---

## 10. noupload.xyz — 浏览器本地媒体编辑

- **作者**：@rohitdevx
- **时间**：2026-09-15 10:01 UTC
- **视频**：约 29 秒
- **亮点**：Introducing https://www.noupload.xyz/。任意媒体在浏览器里本地编辑、开源、不上传。短片把速度和本地路径展示清楚。
- **互动**：约 129 赞、22 转发、74 收藏、6000+浏览
- **分类建议**：design / developer-tools / productivity
- **链接**：https://x.com/rohitdevx/status/2099800862508060900
- **tweetId**：2099800862508060900

---

## 11. Adobe Premiere Generate Sound Effects（beta）

- **作者**：@icreatelife（Adobe Principal AI Evangelist）
- **时间**：2026-09-15 22:40 UTC
- **视频**：约 56 秒
- **亮点**：Premiere（beta）时间线上框一段、描述想要的音效即可生成，一键对齐画面。@AdobeVideo 同期发了约 29 秒官方竖屏片（Generate Sound in Premiere）。是清楚的宿主软件新能力 walkthrough，建议以演示更完整的 Kris 帖入库。
- **互动**：约 54 赞、22 收藏、2300+浏览（AdobeVideo 官方帖约 2280 浏览）
- **分类建议**：design / motion / ai
- **链接**：https://x.com/icreatelife/status/2099991714261840367
- **tweetId**：2099991714261840367

---

## 12. Gemini Live × Deep Research — 语音异步调研（09-14 晚补录）

- **作者**：@Google
- **时间**：2026-09-14 22:50 UTC
- **视频**：约 51 秒
- **亮点**：09-15 文档未收录的官方能力片。对 @GeminiApp 口述一个 Deep Research 题目，可关聊天、锁屏或聊别的；后台跑完推送完整报告，再语音追问或改细节。与本日 Gemini 3.8 Live 是同一语音产品线的前一棒。
- **互动**：约 1716 赞、142 转发、392 收藏、35.4 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/Google/status/2099631885626274299
- **tweetId**：2099631885626274299

---

## 13. Superhuman Go — 在任意 App / 标签里唤起 Agent（09-14 晚补录）

- **作者**：@Superhuman
- **时间**：2026-09-14 21:00 UTC
- **视频**：约 15 秒
- **亮点**：09-15 文档未收录。Superhuman Go 把 agent 放到光标旁，划选即可开始。https://superhuman.com/go。短官方片，功能句清楚。
- **互动**：约 8 赞、2700+浏览
- **分类建议**：productivity / ai
- **链接**：https://x.com/Superhuman/status/2099604196399968702
- **tweetId**：2099604196399968702

---

## 14. Higgsfield × GPT-6 Astra — Blender 手绘风 Shader 插件

- **作者**：@higgsfield_ai
- **时间**：2026-09-15 20:06 UTC
- **视频**：约 15 秒
- **亮点**：用 GPT-6 Astra 和 Higgsfield 做了一个 Blender shader add-on，15 套现成材质，一键给 3D 场景手绘风。是工具能力演示，不是全新品牌，但片完整、观看量够。
- **互动**：约 71 赞、33 收藏、8000+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/higgsfield_ai/status/2099952898600063167
- **tweetId**：2099952898600063167

---

## 15. 其他高信号 / 跟进

- **Taste Labs 官方 Brand API 长片**（约 240 秒，与 CEO 主帖同一能力）：https://x.com/tastelabs/status/2099913773951893761
- **@Google Gemini 3.8 Live / Extended Thinking 拆解**（约 77 秒 / 71 秒）：https://x.com/Google/status/2099907831377887606 、https://x.com/Google/status/2099907833781190657
- **@koraykv Gemini 3.8 Live 宣布**（约 71 秒）：https://x.com/koraykv/status/2099965852934402547
- **ElevenAgents Dom AI SDR 案例**（约 64 秒，产品案例非新品牌首发）：https://x.com/ElevenLabs/status/2099877066732675207
- **Framer Academy 17 节 Agent 新课**（约 6 秒，教学内容上架）：https://x.com/framer/status/2099876903712858145
- **Framer Prompt / build / publish 教程**（约 6 分钟，教学片非新功能首发）：https://x.com/framer/status/2099935530091753606
- **Monid GPT-6 Astra 冷呼叫**（约 36 秒，2200+浏览）：https://x.com/MonidHQ/status/2100007120158834944
- **Flora video editor MCP**（@alecharmon，约 16 秒，1500+浏览）：https://x.com/alecharmon/status/2099684440750408113
- **Journey 健身日记 TestFlight**（@JourneyWShannon，约 29 秒，4000+浏览）：https://x.com/JourneyWShannon/status/2099999732542374269
- **BrowserGateway**（云浏览器路由，约 38 秒，526 浏览，刚过阈值）：https://x.com/BrowserGateway/status/2099766797876527171
- **Powermove 发布片 sneak peek**（周五才上线，约 10 秒，585 浏览）：https://x.com/zellzoi_design/status/2099846312308941128
- **Kestrel Browser 隐藏侧栏快捷键**（约 5 秒，518 浏览，小功能迭代）：https://x.com/kestrelbrowser/status/2099925045552267545
- **AdobeVideo Generate Sound 官方竖屏**（约 29 秒）：https://x.com/AdobeVideo/status/2099906088363573602
- **FoundationHQ Legacy Mode**（开源硬件钱包迁移 Ledger，约 91 秒，5900+浏览，偏加密硬件）：https://x.com/zherbert/status/2099866747201335545
- **Creatify Labs Boreal**（官方主帖是静图；第三方 @aleximarkett 带 47 秒样片，11100+ 浏览在官方图帖）：https://x.com/Creatify_Labs/status/2099991682590867624

## 已在 09-12 / 09-13 / 09-14 / 09-15 文档中出现（仅交叉引用）

ElevenLabs MCP、Cline Desktop、ObsidianUI、Motion MCP for Codex、Linear Loops、Inspo、Treg ChatGPT plugin、Calvin video skill、@sfinterface/numbers、GitHub PR 页改版、rentahuman-line CLI、Cluster、CoreSpeed、Minirouter Presets、Higgsfield Astra / AE / Photoshop。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（Receipt+ 代币权益、Garage Git host、部分 MCP 实验帖）
- 加密货币 / 代币 / NFT / launchpad（$USPR、$RECEIPT、Emogotchi NFT、DNA Protocol $XDNA 预售）
- 纯游戏 demo / 角色服装（NIKKE Killer Rabbit、Risk of Rain 2 Survivors）
- 体育 / 娱乐 / 音乐发行（UFC DWCS、MLB 全垒打、ITZY 巡演、Miso 音乐平台、Ed Sheeran opener）
- 政治 / 新闻评论片
- Figma Source Material 访谈（约 8.4 分钟艺术家片单，非产品发布）
- 纯设计案例 reel / 工作室旧片补发、CapCut World 活动花絮
- Runway Solaris 概念片（非产品发布）
- Anthropic Cowork 解说二创（Roundtable / Ridark 复述已有桌面能力，非官方首发片）

**已核对**：上述主条目 tweetId 均不在 `src/data/videos.json` 的代码检索命中结果中。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-16-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
