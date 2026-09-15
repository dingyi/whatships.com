# 2026-09-15 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-14 上午至 2026-09-15 上午 CST。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-14 已发现文档互补，不重复已入队条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-15-zh-summary.md
```

---

## 1. ElevenLabs MCP — 语音 / 音乐 / 图像 / 视频全链路生成

- **作者**：@ElevenLabs
- **时间**：2026-09-14 17:14 UTC
- **视频**：约 44 秒（主帖）+多段能力演示
- **亮点**：Introducing voice, music, image, and video generation in the ElevenLabs MCP。在 ChatGPT / Claude / Cursor / Grok Bot / Hermes 里一次安装，就能调语音模型、Scribe、配音、音乐、音效以及 50+ 图像与视频模型。跟帖把 TTS、STT、多语言配音、图生视、lipsync 连成一条工作流；产出落在 ElevenCreative / Studio。同系 @ElevenLabsDevs 还发了「creative tools in ElevenLabs MCP」长演示（约 100 秒），列出 Codex / Claude Code / Cursor / GrokBot / Hermes / OpenClaw / ChatGPT / Claude。是本日观看量最高的官方发布片。
- **互动**：主帖约 1931 赞、4893 转发、418 收藏、87.8 万+浏览
- **分类建议**：ai / design / motion
- **链接**：https://x.com/ElevenLabs/status/2099547227223908568
- **tweetId**：2099547227223908568

---

## 2. Cline Desktop — 开源权重编码 Agent 的原生桌面端

- **作者**：@cline
- **时间**：2026-09-14 16:30 UTC
- **视频**：约 33 秒（主帖）+一串能力短片
- **亮点**：Introducing Cline Desktop。给开源权重模型的原生界面，可直接配 ClinePass 与 DeepSeek-V4.1-Flash / Musespark-1.3，也可 BYOK。跟帖：从 Claude Code / Codex 导入任务、定时跑 agent（早上 PR review / 夜间安全扫描）、Marketplace 管理 plugin / MCP / skill、工作中搜网、语音输入。macOS 与 Windows（beta）可装：https://cline.bot/desktop。是本日最清楚的编码工具首发片。
- **互动**：约 1375 赞、113 转发、154 回复、784 收藏、34.3 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/cline/status/2099536235350086029
- **tweetId**：2099536235350086029

---

## 3. ObsidianUI — React / Tailwind 组件库 + Agent MCP

- **作者**：@athrix_codes
- **时间**：2026-09-14 12:36 UTC
- **视频**：约 122 秒
- **亮点**：Introducing ObsidianUI。35+ 组件 / 区块 / 落地页与模板，新加 AI Agents MCP，重做 UI。可拷源码或用 shadcn-cli 安装，免费开源、无需注册。https://obsidianui.dev。近两分钟演示把组件面貌与安装路径讲清。
- **互动**：约 318 赞、36 转发、424 收藏、7.0 万+浏览
- **分类建议**：design / developer-tools / ai
- **链接**：https://x.com/athrix_codes/status/2099477338107134172
- **tweetId**：2099477338107134172

---

## 4. Motion MCP for Codex — 编码 Agent 直接做发布片

- **作者**：@motion_so
- **时间**：2026-09-14 16:53 UTC
- **视频**：约 30 秒
- **亮点**：Codex can now make launch videos。Introducing the Motion MCP for Codex：连 MCP、交资产、描述想要的效果，Codex 在 Motion 里直接搭场景、动画与转场。本帖视频本身由 MCP 生成。是清楚的动效工具能力发布片。
- **互动**：约 720 赞、56 转发、875 收藏、5.2 万+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/motion_so/status/2099542179697902025
- **tweetId**：2099542179697902025

---

## 5. Linear Loops — 项目 / 周期 / Issue 变更触发自动化

- **作者**：@linear
- **时间**：2026-09-14 16:52 UTC
- **视频**：约 28 秒
- **亮点**：watchlist 账号官方 changelog 片。Linear Loops 新能力：从 project / initiative / cycle / issue 变更触发、自动改文档、发定制 Slack 更新。链接：https://linear.app/changelog/2026-09-14-loops-for-product-management。
- **互动**：约 184 赞、98 收藏、5.0 万+浏览
- **分类建议**：productivity / developer-tools / ai
- **链接**：https://x.com/linear/status/2099541754051530805
- **tweetId**：2099541754051530805

---

## 6. Inspo — 给编码 Agent 的设计灵感 MCP

- **作者**：@nutlope（Hassan，Together DX）
- **时间**：2026-09-14 17:14 UTC
- **视频**：约 21 秒
- **亮点**：Introducing Inspo。设计 MCP server，面向 Claude Code / Codex / OpenCode：搜 800+ 站点，给编码 agent 找对口的设计参考。`npx inspo-mcp install`。短片把产品句与安装路径讲清，是本日质感最强的 indie 设计工具发布。
- **互动**：约 796 赞、56 转发、1164 收藏、3.5 万+浏览
- **分类建议**：design / developer-tools / ai
- **链接**：https://x.com/nutlope/status/2099547343112564921
- **tweetId**：2099547343112564921

---

## 7. Treg ChatGPT plugin — 在 ChatGPT 里跑 GTM

- **作者**：@treg_ai
- **时间**：2026-09-14 11:41 UTC
- **视频**：约 71 秒
- **亮点**：Introducing the Treg ChatGPT plugin。在 ChatGPT 里找买点信号客户、看竞品广告、追 AI 可见度与 SEO。无订阅、0% 加价、开源。https://treg.to/gpt6。约 71 秒演示把工作流展开得比较完整。
- **互动**：约 65 赞、129 收藏、2.3 万+浏览
- **分类建议**：ai / productivity / developer-tools
- **链接**：https://x.com/treg_ai/status/2099463659881964026
- **tweetId**：2099463659881964026

---

## 8. Calvin video skill — Agent 用 React 写出视频

- **作者**：@CalvinGrunewald
- **时间**：2026-09-14 21:21 UTC
- **视频**：约 24 秒
- **亮点**：给编码 agent 安一个 skill，让它写 React 代码生成视频，支持作曲与口播。用于产品解释或把 ML 论文变成学习片。MIT、免费。跟帖强调产出是可 diff 的组成而不是黑盒成片。
- **互动**：约 70 赞、158 收藏、1.5 万+浏览
- **分类建议**：developer-tools / ai / motion
- **链接**：https://x.com/CalvinGrunewald/status/2099609501943078913
- **tweetId**：2099609501943078913

---

## 9. @sfinterface/numbers — 手工打磨的数字动画组件

- **作者**：@wherescz
- **时间**：2026-09-14 14:21 UTC
- **视频**：约 9 秒
- **亮点**：Introducing @sfinterface/numbers。San Francisco Interface 系列的 React 数字组件：约 13kb gzip、模糊过渡、可定制。短片把动画质感放得很清，适合入站当设计组件发布。
- **互动**：约 336 赞、362 收藏、1.1 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/wherescz/status/2099503814453719438
- **tweetId**：2099503814453719438

---

## 10. GitHub Pull Requests 页面改版

- **作者**：@github
- **时间**：2026-09-14 20:55 UTC
- **视频**：约 73 秒
- **亮点**：watchlist 账号产品更新片。@madebygps 演示仓库 PR 页：更好的过滤、可折叠侧栏、紧凑展示模式。不是新品牌子，但是完整的官方 walkthrough。
- **互动**：约 62 赞、2.5 万+浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/github/status/2099603019012755469
- **tweetId**：2099603019012755469

---

## 11. rentahuman-line CLI — 让人替 Agent 排队

- **作者**：@AlexanderTw33ts（@rentahumanx）
- **时间**：2026-09-14 18:45 UTC
- **视频**：约 20 秒
- **亮点**：Introducing the rentahuman-line CLI。只做一件事：找人替你（或你的 agent）排队。调侃式发布片，但产品句清楚、视频完整，适合当 indie 工具 demo 看。
- **互动**：约 73 赞、5400+浏览
- **分类建议**：ai / other / consumer
- **链接**：https://x.com/AlexanderTw33ts/status/2099570363998887963
- **tweetId**：2099570363998887963

---

## 12. Cluster — Agent 的 GTM 基础设施

- **作者**：@CostaLaveron（@getclusterai，a16z speedrun）
- **时间**：2026-09-14 20:16 UTC
- **视频**：约 91 秒
- **亮点**：Introducing @getclusterai：把 Claude / Codex 变成约 demo 的机器。多渠道触达、信号与补全在一个平台里给人和 agent 用。已帮 speedrun / YC 团队拉高意图对话。近一分半钟演示把产品面展开得比较清。
- **互动**：约 55 赞、23 收藏、2600+浏览
- **分类建议**：ai / productivity / developer-tools
- **链接**：https://x.com/CostaLaveron/status/2099593260016476172
- **tweetId**：2099593260016476172

---

## 13. CoreSpeed — 一个 MCP 端点接 App、记忆与工具

- **作者**：@CoreSpeedHQ
- **时间**：2026-09-15 00:24 UTC
- **视频**：约 74 秒
- **亮点**：Introducing CoreSpeed。连 App、跨 agent 记忆、媒体生成 / 网页 / 社交研究都走一个 MCP 端点；内置 agent 身份、预算与活动日志。https://corespeed.io。是 09-15 凌晨最清楚的新品牌发布片。
- **互动**：约 32 赞、10 转发、1000+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/CoreSpeedHQ/status/2099655515706208393
- **tweetId**：2099655515706208393

---

## 14. Minirouter Presets — 把模型 + 系统提示存成别名

- **作者**：@iamzhe
- **时间**：2026-09-14 23:59 UTC
- **视频**：约 8 秒
- **亮点**：Introducing Presets on https://minirouter.sh。把模型和 system prompt 存成 preset，用 `@preset/mobile-qa` 这类别名调用。短片讲清功能，观看量刚过阅值。
- **互动**：约 26 赞、700+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/iamzhe/status/2099649224438583600
- **tweetId**：2099649224438583600

---

## 15. 其他高信号 / 跟进

- **ElevenLabsDevs creative tools 演示**（约 100 秒，与主帖同一能力线）：https://x.com/ElevenLabsDevs/status/2099556991563714747
- **Cline Desktop 跟帖**（导入任务 / 定时 / Marketplace / 搜网 / 语音）：https://x.com/cline/status/2099536239158554851
- **Higgsfield 继续应战动效师**（09-12 / 09-13 同一产品线，本日多段复刻片）：https://x.com/higgsfield_ai/status/2099573294219555065
- **GitHub Copilot CLI 案例**（法务运营经理自建工具市场，案例片非新功能首发）：https://x.com/github/status/2099550668893683815
- **Runway ultra-realistic walkthrough**（约 9.4 分钟教程，非新产品发布）：https://x.com/runwayml/status/2099571028649271462
- **Framer × Wolters Kluwer Libra**（案例展示，非新功能）：https://x.com/framer/status/2099562136834097393
- **Novas Framer 模板**（@nik_shabunko，约 800 浏览，模板上架片）：https://x.com/nik_shabunko/status/2099531659930374492
- **MapQuest Public Transit Beta**（约 630 浏览，功能迭代）：https://x.com/MapQuest/status/2099633165895938073

## 已在 09-12 / 09-13 / 09-14 文档中出现（仅交叉引用）

makefaster.dev、AgentNet Webagent、Framer Agent iPhone Duo、Tableau ChatGPT Work 插件、Higgsfield Astra / AE / Photoshop / 果蝇、AgentLayer x402 MCP、Maestro、Ado 设计工作室、MotionBricks × Unreal、AppLlama MCP、OpenMAIC、Spectrum UI SVG Charts、supermemory Console、HumanLayer、Capx Casa、LaunchReel、しゃべろぐ、TypeUI Methodical、Shottr MCP、Agnost、SpareDisk、Luvus 0.14.1。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（aisvy 自动 demo 视频、MobileStudio waitlist、Superset MCP 等）
- 加密货币 / 代币 / NFT / launchpad（PVE launchpad、$Waifu、Argus on Arc、VioletSnipers / Axiom、RABIQ deployer 档案、Kalshi 金银 perpetual）
- 纯游戏 demo / 竞技服 / WWE 2K 投票
- 体育 / 娱乐 / 音乐发行（ESPN Manning Mode、WWE Club、Kamen Rider、偶像自我介绍）
- 政治 / 新闻评论片
- Figma Source Material 访谈、Cloudflare 文化 podcast、Supabase Select fireside、Runway Summit 宣传
- 纯设计案例 reel（CloseCRM dashboard motion）、VTuber 模型上架、短片电影发行
- Browserbase Navigate 2026 会后回顾（会议片非产品发布）

**已核对**：上述主条目 tweetId 均不在 `src/data/videos.json` 的代码检索命中结果中。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-15-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
