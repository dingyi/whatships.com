# 2026-09-29 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / now available / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-27 下午至 2026-09-29 上午 CST（主要补 09-27 / 09-28 文档截稿后的窗口，09-28 发现 PR 尚未合入 main，本窗口以 09-28 下午以来的高信号片为主）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-27 / 09-28 已发现文档互补，不重复已入队条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-29-zh-summary.md
```

---

## 1. Claude Sonnet 5.5 — Claude 5.5 系列第二款

- **作者**：@claudeai
- **时间**：2026-09-28 18:03 UTC
- **视频**：首发约 13 秒；线程另有约 50 秒成本/速度片与约 35 秒设计能力片
- **亮点**：watchlist 账号官方模型首发。Introducing Claude Sonnet 5.5，Claude 5.5 家族第二款。相对 Sonnet 5：速度提高 30%+、同价但每任务代币更少（至多省 30%）；定位为 Opus 5.5 的快速补充，擅长有范围的日常任务、修 bug、出打磨文档 / 幻灯 / 表格。线程给出基准表、设计能力演示、对齐审计与网络保障说明；今日全线可用，Haiku 5.5 将在几周内接入。https://www.anthropic.com/claude-sonnet-5-5 本窗口浏览量绝对第一的官方产品片，建议以首发短片入库。
- **互动**：首帖约 4.36 万赞、3529 转发、2378 引用、1385 回复、4227 收藏、546.9 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/claudeai/status/2104633115620823187
- **tweetId**：2104633115620823187

---

## 2. Nothing Headphone (1) Pro — 三单元头戴

- **作者**：@nothing
- **时间**：2026-09-28 23:30 UTC
- **视频**：约 37 秒
- **亮点**：Introducing Headphone (1) Pro，并宣布 BTS V 为全球品牌大使。三单元架构：深低音 / 人声纹理 / 乐器层次；自称最强主动降噪、Dynamic Spatial Audio 与工作室级工具。硬件消费级首发片，本窗口硬件类浏览量第一。同夜跟帖 2104722818541728096（约 30 秒、三单元拆解）可合并审。
- **互动**：约 1.55 万赞、9174 转发、1070 引用、830 回复、1593 收藏、28.3 万+浏览
- **分类建议**：hardware / consumer
- **链接**：https://x.com/nothing/status/2104715278093312400
- **tweetId**：2104715278093312400

---

## 3. Tapkit — 让 agent 操作你的 iPhone

- **作者**：@tj_littlejohn（@tapkit）
- **时间**：2026-09-28 16:48 UTC
- **视频**：约 46 秒
- **亮点**：Introducing Tapkit。Mac 应用：把 iPhone 交给任意 agent 去点、滑、键入；支持线缆 / Wi-Fi，MCP 或 REST；可同时驱多台手机。早期用户迭代多月后公开通用。本窗口 indie 工具浏览量与收藏量最高的首发长片。
- **互动**：约 1373 赞、89 转发、47 引用、168 回复、1996 收藏、23.3 万+浏览
- **分类建议**：developer-tools / ai / productivity
- **链接**：https://x.com/tj_littlejohn/status/2104614327802282271
- **tweetId**：2104614327802282271

---

## 4. Vibecode — Built on iPhone

- **作者**：@vibecodeapp
- **时间**：2026-09-28 20:04 UTC
- **视频**：约 44 秒
- **亮点**：Introducing Built on iPhone。在 iPhone 上描述任意 App，Vibecode 写 Swift、编译、测试并直装到主屏：不要 Mac / Xcode / 电脑。由 Opus 5.5 驱动，App Store 已上架。https://www.vibecodeapp.com 消费级 AI 编程能力首发片。
- **互动**：约 336 赞、22 转发、8 引用、23 回复、265 收藏、5.1 万+浏览
- **分类建议**：developer-tools / ai / consumer
- **链接**：https://x.com/vibecodeapp/status/2104663645712261448
- **tweetId**：2104663645712261448

---

## 5. Wabi 2.0 — 会做 App 的信使

- **作者**：@wabi
- **时间**：2026-09-28 23:55 UTC
- **视频**：约 80 秒
- **亮点**：Introducing Wabi 2.0：新一类 messenger，为你和朋友做 App、办事。文案定位「agentic 时代的 OS」。邀请制起步，下载 Wabi 进等待名单。本窗口消费级 agent 通讯首发长片。
- **互动**：约 129 赞、7 转发、14 引用、10 回复、84 收藏、3.1 万+浏览
- **分类建议**：ai / consumer / productivity
- **链接**：https://x.com/wabi/status/2104721766690222087
- **tweetId**：2104721766690222087

---

## 6. Overlay — AI workforce 的控制面

- **作者**：@dsllwn（@getoverlayio）
- **时间**：2026-09-28 09:14 UTC
- **视频**：约 24 秒
- **亮点**：introducing Overlay。把 Hermes / Codex / Claude Code 等 agent 放到同一云平台，再部署到 Slack / Teams 等渠道。开源可自托。https://www.getoverlay.io/ 仓库：https://github.com/LayerNorm/overlay-web
- **互动**：约 192 赞、12 转发、4 引用、14 回复、285 收藏、1.9 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/dsllwn/status/2104499965703905396
- **tweetId**：2104499965703905396

---

## 7. MicroFactory — AI robotic integrator

- **作者**：@ihorbeaver
- **时间**：2026-09-28 18:57 UTC
- **视频**：约 128 秒
- **亮点**：Introducing an AI robotic integrator。一个 agent 端到端承接 MicroFactory 部署：设计工装、写计算机视觉代码、指引人工操作员。由 Astra 与 Opus 驱动。硬件 / 机器人部署首发长 walkthrough。
- **互动**：约 245 赞、21 转发、8 引用、20 回复、143 收藏、2.3 万+浏览
- **分类建议**：hardware / ai / developer-tools
- **链接**：https://x.com/ihorbeaver/status/2104646736652447854
- **tweetId**：2104646736652447854

---

## 8. dial — macOS 菜单栏计时

- **作者**：@finnmarten
- **时间**：2026-09-28 13:00 UTC
- **视频**：约 13 秒
- **亮点**：introducing dial，住在 macOS 菜单栏的计时器：一键开始 / 切换；任意 App 里 ⌥⌘T；补抓忘记打卡的会议与通话；11 MB、无账号、数据不离开 Mac；免费试 7 天。indie 生产力工具首发短片。
- **互动**：约 185 赞、13 转发、4 引用、21 回复、226 收藏、1.3 万+浏览
- **分类建议**：productivity / consumer
- **链接**：https://x.com/finnmarten/status/2104556816428376444
- **tweetId**：2104556816428376444

---

## 9. Runway — ElevenLabs v4

- **作者**：@runwayml
- **时间**：2026-09-28 22:23 UTC
- **视频**：约 67 秒
- **亮点**：watchlist 账号官方能力片。ElevenLabs v4 is now on Runway。强调旁白与角色对白的表现力与自然语调；今日可用，与 Runway 图 / 视频模型并存。目录已有 Seedance / Layers / Opus MCP 等条目，本条是语音模型入口首发，可独立入库。
- **互动**：约 94 赞、4 转发、5 引用、6 回复、23 收藏、1.2 万+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/runwayml/status/2104698524885794938
- **tweetId**：2104698524885794938

---

## 10. dzhng launch-video skill — 用 skill 自己做宣发片

- **作者**：@dzhng
- **时间**：2026-09-27 22:20 UTC
- **视频**：约 34 秒
- **亮点**：把做发布片的流程 skill 化，再用该 skill 自己出了宣传片。收进 https://github.com/dzhng/skills 与 09-27 文档的 jevgrep 同作者、不同产品，可独立入库。
- **互动**：约 88 赞、5 转发、4 引用、6 回复、129 收藏、9800+浏览
- **分类建议**：ai / motion / developer-tools
- **链接**：https://x.com/dzhng/status/2104335476345987413
- **tweetId**：2104335476345987413

---

## 11. Financial Datasets — GPU Prices API

- **作者**：@findatasets
- **时间**：2026-09-28 19:15 UTC
- **视频**：约 13 秒
- **亮点**：Introducing our GPU Prices API。查 H100 / H200 / B200 / B300 当前小时租金：价格更新、价差、日变化。agent 可通过 REST 或 MCP 把算力当商品跟。与 @getcomputable 合作。
- **互动**：约 32 赞、2 转发、2 引用、3 回复、24 收藏、6100+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/findatasets/status/2104651250255945902
- **tweetId**：2104651250255945902

---

## 12. Magnific × Claude Sonnet 5.5 MCP

- **作者**：@magnific
- **时间**：2026-09-28 19:42 UTC
- **视频**：约 18 秒
- **亮点**：Introducing Magnific x Claude Sonnet 5.5。在 Claude 里通过 Magnific MCP 一次对话出图 / 出片 / 出声。Sonnet 5.5 同日落地的第三方入口片，可入库或与 Sonnet 5.5 首发合并审。
- **互动**：约 38 赞、5 转发、3 回复、16 收藏、3600+浏览
- **分类建议**：ai / design / motion
- **链接**：https://x.com/magnific/status/2104657922513060050
- **tweetId**：2104657922513060050

---

## 13. Morphic MCP — 在 Claude / ChatGPT / VS Code 里导演镜头

- **作者**：@morphic
- **时间**：2026-09-28 10:29 UTC
- **视频**：约 22 秒
- **亮点**：Introducing Morphic MCP。从 Claude、ChatGPT、VS Code 等直接导演镜头，成果进 Morphic 资源库。https://morphic.com/mcp
- **互动**：约 46 赞、8 转发、5 回复、24 收藏、3100+浏览
- **分类建议**：ai / motion / developer-tools
- **链接**：https://x.com/morphic/status/2104518808161706307
- **tweetId**：2104518808161706307

---

## 14. OmniNotch 2.0 — Mac 鼎尖 App

- **作者**：@nerdynikhil
- **时间**：2026-09-28 18:02 UTC
- **视频**：约 65 秒
- **亮点**：Introducing OmniNotch 2.0。一周前首发后收到反馈，2.0 定位更快、更干净、更轻的原生 notch App。版本更新长 walkthrough，非全新产品，可入库或与 1.0 合并审。
- **互动**：约 24 赞、1 引用、7 回复、10 收藏、3000+浏览
- **分类建议**：productivity / consumer
- **链接**：https://x.com/nerdynikhil/status/2104632807356248452
- **tweetId**：2104632807356248452

---

## 15. Framer — /design-system skill

- **作者**：@framer
- **时间**：2026-09-28 20:00 UTC
- **视频**：约 40 秒
- **亮点**：watchlist 账号官方能力短片。/design-system skill 让新页保持同一样式、组件、字体与布局。目录已有 09-22 Skills 与 09-27 /launch-check，本条是独立 skill 演示，可入库或合并审。
- **互动**：约 28 赞、4 转发、2 回复、6 收藏、2700+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/framer/status/2104662443503026177
- **tweetId**：2104662443503026177

---

## 16. hoplite — 本地编程会话一键上云

- **作者**：@ryan_morr（@hoplite_sh，YC S26）
- **时间**：2026-09-28 18:19 UTC
- **视频**：约 35 秒
- **亮点**：We just shipped instant migration of local coding sessions to the cloud on the hoplite mac app。关上笔记本后 agent 不停。能力更新片，非全新产品首发，可入库或与既有 hoplite 条目合并。
- **互动**：约 47 赞、4 转发、2 引用、14 回复、6 收藏、2100+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/ryan_morr/status/2104637080559100386
- **tweetId**：2104637080559100386

---

## 17. Whisple — 开源本地语音输入

- **作者**：@lassejv
- **时间**：2026-09-28 18:25 UTC
- **视频**：约 56 秒
- **亮点**：Introducing Whisple。开源、类 Wispr Flow 的本地优先语音 App，GPUI + Rust；支持 OpenAI / Grok；语音命令打开 App、读屏幕上下文。浏览量刚过线的 indie 首发 walkthrough。
- **互动**：约 26 赞、2 转发、5 回复、10 收藏、960+浏览
- **分类建议**：productivity / developer-tools / ai
- **链接**：https://x.com/lassejv/status/2104638608426631204
- **tweetId**：2104638608426631204

---

## 18. 其他高信号 / 跟进

- **Claude Sonnet 5.5 早期实验线程**（@claudeai，约 30 秒起，26.7 万+浏览）：秋叶模拟、恐龙史 JS 动画、涂鸦流程图、森林光影实时渲染、弹球物理。Sonnet 5 vs 5.5 对比集锦，非新入口。https://x.com/claudeai/status/2104674987164782598
- **Google Gemini 3.8 Flash TTS 创意工作室**（@Google，约 84 秒，13.7 万+浏览）：100+ 语言从零造角色声、双人对白、逐行笑声 / 叹息 / 低语。09-25 / 09-27 已收 TTS 首发与跟进，本条是能力演示加长。https://x.com/Google/status/2104657688718434638
- **OpenAI 「Get ready.」**（@OpenAI，约 12 秒，671 万+浏览）：无产品名的预告短片，不当发布片入库；若后续落地再收。https://x.com/OpenAI/status/2104651136699609518
- **GitHub Copilot 并行 agent 教程**（@github，约 160 秒，8.4 万+浏览）：09-28 文档已作跟进记。https://x.com/github/status/2104298872029741366
- **Google Arts & Culture 五项更新**（@Google，约 24–64 秒，主帖 1.5 万浏览）：新首页、视觉对话搜索、Chrono Look、Dial-An-Artist、City Guide 27 城。文化 App 能力集，非独立产品入口。https://x.com/Google/status/2104671968511623415
- **P37 Neuro**（@promiseeuler / @OntosWorld，约 16 秒，4000+浏览）：开源机器人大脑、跨形态 / 任务迁移，更偏研究模型发布。https://x.com/promiseeuler/status/2104466656135204954
- **Calesto Kanban**（@barret_jessy，约 16 秒，1500+浏览）：已上线待办 App 加 Kanban，可交给 Claude Code / Codex。功能更新。https://x.com/barret_jessy/status/2104629776619356375
- **Vercel × Mercedes AMG F1**（@vercel，约 7 秒，8.3 万+浏览）：客户案例短片，非新产品入口。https://x.com/vercel/status/2104653657216012791
- **Replit 用户故事 Noni**（@Replit，约 109 秒，4800+浏览）：教师做互动学习 App 故事片，非单点首发。https://x.com/Replit/status/2104647329521520867
- **Higgsfield $10 亿跑利刷信用**（@higgsfield，约 20 秒，2.8 万+浏览）：社区回馈活动，非产品首发。https://x.com/higgsfield/status/2104718084812750901
- **Profound Citation Decay**（@dbabbs，约 33 秒，1650+浏览）：已上线产品的引用衰减功能片。https://x.com/dbabbs/status/2104648360070091132
- **Flyest / Digital Rain**（@arinarenasci，约 14 秒，1650+浏览）：13 款创意 App 合辑里的第一款。https://x.com/arinarenasci/status/2104638824395456885
- **Supabase Select 倒计时**（@supabase，8500ms / 60s，2900–4500 浏览）：会议预告，非产品首发。

## 已在目录或 09-26 / 09-27 / 09-28 文档中出现（仅交叉引用，不重复入队）

Agent Monitor、Pause 1.0 Flash、Space、Pulse、shadercn、订阅扫描器、taiga-s1、Motion × Opus 5.5 MCP、Spaces Omarchy 插件、CadX Studio、SwiftFairy 2026.9.2、Frontier 3D、Focant、Higgsfield Production Skills / Seedance 2.5 API、Flux for Omarchy、jevgrep、DeepSeek Harness Preview、open-slide 2.0、Tarout、Takeone、Caddy、Framer /launch-check、Pewbeam、GitHub Copilot 并行 agent 教程。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（GetEdge Product Launch Video skill、Zeku 写作器、部分 MCP / launch-video 草稿等）
- 加密货币 / 代币 / NFT / launchpad（Helixa Multipass Console、Orderly Demo DEX、Halo SERV hackathon、D3 Frontier on Solana）
- 政治 / 新闻评论（USDOT SMART 空管工具、伊奥作物、美国国会制造业宣传、SpaceX 火箭新闻剪辑）
- 体育 / 娱乐 / 音乐发行（Vikings、Bills 对手介绍、BTS 粉基转发 Nothing 片、Phone a Fangirl、拄拌追思会）
- 纯游戏 demo / 三方 CoD 克隆（Sonnet 5.5 做僵尸模式三方实验）
- 教程 / 作品集 / 非发布（LaunchAnything 工作室 reel、Pika Secret Level 广告集、Figma Source Material 访谈、发布片制作工作室推销）
- 成人内容 / 无关角色集

**已核对**：上述主条目 tweetId 未在 `src/data/videos.json` 代码检索中命中；也未出现在 09-26 / 09-27 discovery 主条目，且未出现在尚未合并的 09-28 PR 主条目。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-29-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
