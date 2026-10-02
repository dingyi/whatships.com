# 2026-10-02 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / now live / now available / launched / agent / app / plugin / MCP / desktop 等，并覆盖 Product Hunt、GitHub、Figma、Runway、Framer 等重点账号与高互动独立开发者。时间范围：2026-10-01 上午至 2026-10-02 上午 CST（与 10-01 文档互补，不重复已入队条目）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。tweetId 已用仓库代码搜索核对，未在现有 discovery 文档或可搜索源码中命中。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-02-zh-summary.md
```

---

## 1. Tavus — Griffin（首个 Human Interaction Model）

- **作者**：@tavus
- **时间**：2026-10-01 16:59 UTC
- **视频**：约 109 秒
- **亮点**：本窗口浏览量第一的模型首发片。Introducing Griffin, the first model to pass the video Turing test。声称 48% 实时对话者以为对方是真人（此前系统 <3%），并在 NVIDIA 全双工 AI 视频 benchmark 排第一。定位为首个 Human Interaction Model：边听边看边说，生成整帧而不只是脸。线程跟进片覆盖 Simon Says、实时笑点插话、把手上物体写进剧情、看着魔方教练、焊接计时。官方说明公开前需先过安全闸门，研究预览：https://www.tavus.io/griffin 建议以主帖入库，线程其余 demo 合并审。
- **互动**：约 20891 赞、2182 转发、2612 引用、1656 回复、14462 收藏、780 万+浏览
- **分类建议**：ai / consumer
- **链接**：https://x.com/tavus/status/2105704169009246248
- **tweetId**：2105704169009246248

---

## 2. Onepin — AI 配音发布前校验

- **作者**：@RealSoohyunBae（@OnepinAI，YC）
- **时间**：2026-10-01 15:59 UTC
- **视频**：约 66 秒
- **亮点**：Today we're launching Onepin。定位为 TTS 之后的生产步骤：用 400 万词发音词典校人名 / 产品名，先拼出价格与日期再交给声音，按自然度 / 清晰度 / 词准确率给每行打分，并只重说说错的那个词。接 ElevenLabs、OpenAI、Google 等 30+ 声音订阅，免费开始。本窗口 indie 语音工具浏览量第一。
- **互动**：约 178 赞、34 转发、115 引用、96 回复、92 收藏、21.1 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/RealSoohyunBae/status/2105688987340038524
- **tweetId**：2105688987340038524

---

## 3. Pickle — 可养成的个人 AI

- **作者**：@danifesto
- **时间**：2026-10-01 18:10 UTC
- **视频**：约 156 秒
- **亮点**：Introducing Pickle, a personal AI you raise。做事，也能自己交朋友。https://pickle.com 线程补充：朋友的 Pickle 也是联系人，可代协调晚餐；凭证锁在 iPhone 生成密钥的 enclave（开源 https://github.com/pickle-com/credential-enclave），支付走 Stripe Link 一次性卡；对外只派 clone agent（能读能说、不能下单）。本窗口消费级 agent 首发长 walkthrough。
- **互动**：约 689 赞、55 转发、76 引用、119 回复、522 收藏、17.9 万+浏览
- **分类建议**：ai / consumer / productivity
- **链接**：https://x.com/danifesto/status/2105721921623232995
- **tweetId**：2105721921623232995

---

## 4. Microsoft AI — 三款语音模型

- **作者**：@MicrosoftAI
- **时间**：2026-10-01 16:15 UTC
- **视频**：约 18 秒
- **亮点**：官方能力片。Introducing 3 new models: MAI-Transcribe-2-Streaming、MAI-Voice-2.1、MAI-Voice-2.1-Flash。流式转写 + 更自然的语音、更短的轮次间隔，面向语音 agent。
- **互动**：约 1082 赞、116 转发、27 引用、51 回复、444 收藏、8.3 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/MicrosoftAI/status/2105693024013467905
- **tweetId**：2105693024013467905

---

## 5. SpaceXAI — Grok 4.7 上 Gemini Enterprise Agent Platform

- **作者**：@SpaceXAI
- **时间**：2026-10-01 19:39 UTC
- **视频**：约 19 秒
- **亮点**：Grok 4.7 is now available on the Gemini Enterprise Agent Platform。模型分发入口宣布片，不是模型本体首发长解。同窗口 @cb_doge 短片称网站与 App 已上线 Grok 4.7（见跟进）。
- **互动**：约 869 赞、63 转发、16 引用、51 回复、43 收藏、6.4 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/SpaceXAI/status/2105744399179383124
- **tweetId**：2105744399179383124

---

## 6. GitHub — gh-secure

- **作者**：@github
- **时间**：2026-10-01 17:05 UTC
- **视频**：约 38 秒
- **亮点**：watchlist 账号官方能力片。一条命令防止秘钥泄漏到公开仓库。GitHub Security Lab 的 gh-secure，可在 Copilot app、Copilot CLI 或 GitHub CLI 安装使用。https://github.com/GitHubSecurityLab/gh-secure
- **互动**：约 233 赞、32 转发、5 引用、22 回复、167 收藏、3.9 万+浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/github/status/2105705650688778588
- **tweetId**：2105705650688778588

---

## 7. Mixie3D — Mixar（3D agent 工作流）

- **作者**：@NBhargava18（@mixie3D）
- **时间**：2026-10-01 14:01 UTC
- **视频**：约 113 秒
- **亮点**：Today we're launching Mixie3D，发布片本身声称用产品做出。对 Mixar 说需求，agent 并行建模、贴图、打光，人可随时改。开源，支持最新模型、BYOK 与自带 Codex。https://www.mixar.app/ 线程补了视频参考、并行任务、产品 3D 可视化三条用例片。
- **互动**：约 168 赞、52 转发、32 引用、57 回复、80 收藏、3.8 万+浏览
- **分类建议**：ai / design / motion
- **链接**：https://x.com/NBhargava18/status/2105659333438824728
- **tweetId**：2105659333438824728

---

## 8. Conductor — Mobile

- **作者**：@charlieholtz（@conductor_build）
- **时间**：2026-10-01 21:19 UTC
- **视频**：约 12 秒（4K）
- **亮点**：Introducing Conductor Mobile。在 iPhone 上跑一组云端 coding agents，已上 App Store。https://apps.apple.com/us/app/conductor-build/id6791228564 短片但是明确的移动端产品入口。
- **互动**：约 332 赞、19 转发、7 引用、32 回复、88 收藏、2.1 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/charlieholtz/status/2105769644498002130
- **tweetId**：2105769644498002130

---

## 9. Figma — 移动端导航与协作

- **作者**：@figma
- **时间**：2026-10-01 16:28 UTC
- **视频**：约 25 秒
- **亮点**：watchlist 账号能力片。Smoother navigation and collaboration just landed on mobile。与 10-01 文档的 Custom animation styles 不同入口。https://www.figma.com/downloads/
- **互动**：约 272 赞、14 转发、4 引用、12 回复、48 收藏、1.8 万+浏览
- **分类建议**：design
- **链接**：https://x.com/figma/status/2105696428567982367
- **tweetId**：2105696428567982367

---

## 10. Suno — Speech Beta

- **作者**：@suno
- **时间**：2026-10-01 22:15 UTC
- **视频**：约 31 秒
- **亮点**：Speech is now in Beta。声称首个同时生成口语与匹配背景音乐的模型，需更新 App。https://suno.com/blog/introducing-speech-beta
- **互动**：约 163 赞、18 转发、11 引用、28 回复、64 收藏、1.4 万+浏览
- **分类建议**：ai / consumer
- **链接**：https://x.com/suno/status/2105783810159747294
- **tweetId**：2105783810159747294

---

## 11. three.js Procedural Animals

- **作者**：@majidmanzarpour
- **时间**：2026-10-01 18:15 UTC
- **视频**：约 117 秒
- **亮点**：Releasing three.js Procedural Animals。24 个物种全由代码生成（Opus 5.5）：无模型、无贴图、无手工骨架。SDF 雕刻、网格、绑定、蒙皮、毛发都在运行时完成，再用 IK 动画。开源、agent ready。属开源可视化库发布，不是独立 App。
- **互动**：约 142 赞、6 转发、5 引用、20 回复、101 收藏、6000+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/majidmanzarpour/status/2105723245722812598
- **tweetId**：2105723245722812598

---

## 12. Skyvern 3.0 — 浏览器 agent 重写

- **作者**：@Suchintan（Skyvern）
- **时间**：2026-10-01 20:15 UTC
- **视频**：约 58 秒
- **亮点**：Introducing Skyvern 3.0。从零重写：不再每步截图 + 解 HTML 的 RAG，改成像 Pi 那样按需取上下文。声称 Odysseys browser agent benchmark 90.5% 第一，平均耗时 593s→262s（2.3x），成本约降 20%，仍开源。https://app.skyvern.com 代码：https://github.com/Skyvern-AI/skyvern 博客：https://www.skyvern.com/blog/deleting-rag-from-our-web-agent-made-it-2-3x-faster/
- **互动**：约 26 赞、11 转发、3 引用、4 回复、10 收藏、2800+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/Suchintan/status/2105753408728699246
- **tweetId**：2105753408728699246

---

## 13. Oh-My-Hermes — Hermes Agent 插件

- **作者**：@rlaope
- **时间**：2026-10-01 23:24 UTC
- **视频**：约 13 秒
- **亮点**：Introducing Oh-My-Hermes。不替代 Hermes，而是预规划、子 agent 队列、并行工具调用、长期记忆、110+ engineering skills、自定义 TUI 的开源智能插件。声称 3000+ stars，一条命令安装。indie agent 套件短片。
- **互动**：约 12 赞、1 转发、4 回复、7 收藏、840+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/rlaope/status/2105801061856604211
- **tweetId**：2105801061856604211

---

## 14. 其他高信号 / 跟进

- **Grok 4.7 网站 / App 上线短片**（@cb_doge，约 9 秒，1.6 万+浏览）：新闻账号剪辑，非 xAI 官方发布片。建议与条目 5 合并审，不单独当产品入口。https://x.com/cb_doge/status/2105802431494074434
- **Tavus Griffin 线程 demo**（@tavus）：Simon Says、全双工插话、魔方教练、焊接计时等，建议合并到主条目 1。安全预览帖：https://x.com/tavus/status/2105704984914559441
- **Pickle 安全架构线程**（@danifesto）：Credential Enclave / Clone Agent / 按人共享控制。建议与主条目 3 合并。
- **Runway 实时世界模拟短片**（@runwayml，约 21 秒，2900+浏览）：Expand any media into an interactive real-time world simulation。更像 AI Summit 能力口号，确认是否新入口再入库。https://x.com/runwayml/status/2105685403483431157
- **Product Hunt — Pexo**（@ProductHunt，约 8 秒，1000+浏览）：每日上榜回顾短片，非创始人发布 walkthrough。Launch videos with precise control。https://x.com/ProductHunt/status/2105541894830981402
- **Ultralytics Agents demo**（@ultralytics，约 8 秒，1400+浏览）：YOLO + GPT-6 Luna 视觉推理演示，非单点新产品入口。https://x.com/ultralytics/status/2105733349490774131
- **Foundry Management**（@BarnehamaArye / @foundrymgt，约 45 秒，7.2 万+浏览）：a16z × Atlas 的工业 AI 公司创立平台宣布，不是可使用产品 demo。https://x.com/BarnehamaArye/status/2105691922484605179
- **Framer 客户案例**（@framer，约 67 秒，3300+浏览）：RED 20 周年站用 Framer Agent 迁博客，案例非新入口。https://x.com/framer/status/2105711844904309053

## 已排除（阅读量足够但不符合产品发布）

- 政治追踪器 / 选举口号片、体育鞋款、AEW 赛事、Grateful Dead 专辑上架。
- 代币 / launchpad：Revenue token、cardcoins / $SPORTS、Trends Pay Custom Launch、Hyper Agent（RWA 市场 agent）。
- 纯游戏实验：Rive 「Squid Rush」。
- 阅读量 < 500：Velo AI Video Editor、Anthotype Studio、Designa AI 图文帖、Motiontale 无视频长文等。

## 已在 09-30 / 10-01 文档中出现（仅交叉引用，不重复入队）

OpenAI dots 直播回放（@OpenAIDevs / @ai_for_success，约 550 秒）属已公布产品的补演示，不新开入口。Figma Custom animation styles、Gemini skills、Runway Praxis-1 / Ads、GitHub HydraFusion 等已在 10-01 文档。

---

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-02-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
