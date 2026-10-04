# 2026-10-04 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / now live / now available / plugin / MCP / agent / skill / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-10-03 13:16 UTC（PR #273 截稿）至 2026-10-04 14:14 UTC（约 CST 22:14；周末窗口，官方大发少于工作日）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币 / NFT / launchpad、纯游戏与无关教程。与 10-01 文档、开放中的 PR #273（10-03）互补，不重复已入队条目。抽查 tweetId 未出现在 `src/data/videos.json` 代码搜索结果中。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-04-zh-summary.md
```

---

## 1. 2password — 开源密码管家器

- **作者**：@kitlangton（opencode）
- **时间**：2026-10-03 20:28 UTC
- **视频**：约 60 秒
- **亮点**：Introducing 2password。引用 @vimtor 对 1Password 反复解锁 / 卡死的投诉，当天交出开源替代。线程给出仓库 https://github.com/kitlangton/2password ，并注视频旁白用了 ElevenLabs v4。本窗口独立开发者工具首发片里收藏比最高之一。
- **互动**：约 777 赞、18 转发、6 引用、45 回复、478 收藏、5.2 万+浏览
- **分类建议**：developer-tools / consumer
- **链接**：https://x.com/kitlangton/status/2106481559176196140
- **tweetId**：2106481559176196140

---

## 2. stop-slop — 去 AI 感 UI 的 Claude skill

- **作者**：@tobiadonadon_
- **时间**：2026-10-03 17:12 UTC
- **视频**：约 10 秒
- **亮点**：i built a skill to un-slop AI-looking apps。强制从真实视觉概念出发，探索 3 个方向后选一套语言，按 iPhone 尺寸出图，再扫 AI 套路（同质卡片 / 渐变 / 零个性布局）并修一轮。本窗口设计类浏览量第一，收藏远高于赞。分发是转发 + 评论「stop slop」后私信，仓库链接未公开，审核时确认是否已可复现。
- **互动**：约 1164 赞、197 转发、12 引用、466 回复、2358 收藏、8.6 万+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/tobiadonadon_/status/2106432288686850124
- **tweetId**：2106432288686850124

---

## 3. hairlines v0.2 — 自画细线的设计 skill

- **作者**：@lucasmarkes__
- **时间**：2026-10-03 21:53 UTC
- **视频**：约 12 秒
- **亮点**：hairlines v0.2 is now available。用 `/hairline-create` skill 自画细线。跟进帖给出 https://hairline.lucasmarkes.com/figures ，并预告下一个 skill。设计工程师工具短片，收藏（784）高于赞（610）。
- **互动**：约 610 赞、19 转发、2 引用、7 回复、784 收藏、2.1 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/lucasmarkes__/status/2106502812498632707
- **tweetId**：2106502812498632707

---

## 4. Framer — Skills、3D Agent、新模型

- **作者**：@framer
- **时间**：2026-10-03 20:12 UTC
- **视频**：约 88 秒
- **亮点**：watchlist 账号官方能力汇总片。What’s new in Framer：Skills、用 Framer Agent 做 3D、Agent 新模型、CMS List Field、Pinned Projects、Marketplace analytics、Expert program 重启。本窗口设计工具官方最长的能力 walkthrough。
- **互动**：约 51 赞、3 转发、2 引用、5 回复、14 收藏、3600+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/framer/status/2106477440381960361
- **tweetId**：2106477440381960361

---

## 5. Oneira — 带显式世界状态的交互视频世界模型

- **作者**：@Madaoer_Yxd
- **时间**：2026-10-03 13:47 UTC
- **视频**：约 67 秒
- **亮点**：Introducing Oneira。交互式视频世界模型：编码 agent 维护显式世界状态，探索时出现的物体可交互，修改在长视野里保持。线程补了可扩展状态表、世界坐标 3D box 与长期记忆。项目页 https://madaoer.github.io/projects/oneira/ 论文 https://arxiv.org/abs/2610.01614 。刚过 10-03 截稿，研究发布片。
- **互动**：约 20 赞、4 转发、2 引用、5 回复、20 收藏、5800+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/Madaoer_Yxd/status/2106380661502419081
- **tweetId**：2106380661502419081

---

## 6. Empryo 3.9 — iPhone / iPad / Apple Watch 遥控编码 agent

- **作者**：@BniWael
- **时间**：2026-10-03 22:21 UTC
- **视频**：约 206 秒
- **亮点**：Introducing Empryo for iPhone, iPad and Apple Watch。编码 agent 继续在电脑上跑，手机端到端加密遥控（同 Wi-Fi、Tailscale 或外网）。3.9 同步：关窗后回合仍继续、多 tab worktree、实时语音、GPT-6 Astra 的 `/tier ultrafast`、Cursor / Devin 独立计价、Windows 上打开 WSL 仓库、修 bug 后附带回归检查。https://empryo.com iPhone 仍是 Discord 申请的 beta。本窗口最长的 indie agent 客户端 walkthrough。
- **互动**：约 18 赞、4 转发、2 引用、10 回复、14 收藏、1300+浏览
- **分类建议**：developer-tools / ai / consumer
- **链接**：https://x.com/BniWael/status/2106510026105893226
- **tweetId**：2106510026105893226

---

## 7. GitHub Copilot app — diff / 终端 / 浏览器并排

- **作者**：@github
- **时间**：2026-10-03 18:05 UTC
- **视频**：约 175 秒
- **亮点**：watchlist 账号官方能力片。审 agent 代码不用切 tab：Copilot app 把 diff、终端、浏览器并排，用来查、跑、预览。博文定位是初学教程，不是单点新产品首发，但是本窗口浏览量最高的官方工具演示。https://github.blog/ai-and-ml/github-copilot/github-copilot-app-for-beginners-using-the-diff-terminal-and-browser/
- **互动**：约 113 赞、8 转发、5 引用、21 回复、31 收藏、4.2 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/github/status/2106445557535220101
- **tweetId**：2106445557535220101

---

## 8. musclemimic — 354 块肌肉的通用控制器

- **作者**：@ckli85（EPFL）
- **时间**：2026-10-03 20:34 UTC
- **视频**：约 33 秒
- **亮点**：用 musclemimic generalist 控制人体 354 块肌肉，串联动作可零样本。仓库 https://github.com/amathislab/musclemimic 。具身智能研究发布片，不是消费级 App。
- **互动**：约 56 赞、7 转发、2 引用、3 回复、56 收藏、3100+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/ckli85/status/2106483089752879368
- **tweetId**：2106483089752879368

---

## 9. Ody — 口袋里的视频剪辑 agent

- **作者**：@_kaitodev（@joinodysser）
- **时间**：2026-10-03 18:28 UTC
- **视频**：约 88 秒
- **亮点**：introducing Ody: the video editing agent in your pocket。这一版可以看自己剪的片、迭代、搜素材，并随使用学剪辑风格。属产品更新 demo，不是从零首发；阅读量刚过 500。
- **互动**：约 27 赞、1 转发、1 回复、660+浏览
- **分类建议**：ai / motion / consumer
- **链接**：https://x.com/_kaitodev/status/2106451316197433571
- **tweetId**：2106451316197433571

---

## 10. Swivel — 浏览器里的 3D 设备模拟与动效字（补扫，10-03 窗口漏网）

- **作者**：@samuel_uiux（@Swivelmotion）
- **时间**：2026-10-03 09:02 UTC
- **视频**：约 43 秒
- **亮点**：3D device mockups 与 kinetic typography 合在一个浏览器工作室。丢进屏幕、打字、走镜头、打光、出声，导出 MP4 / 透明 WebM / 静帧。发布片自称就是用 Swivel 做的。时间在 PR #273 截稿之前，但 10-03 文档未收录，本次补扫。
- **互动**：约 9 赞、6 转发、3 引用、7 收藏、1700+浏览
- **分类建议**：design / motion
- **链接**：https://x.com/samuel_uiux/status/2106308982918750435
- **tweetId**：2106308982918750435

---

## 11. 其他高信号 / 跟进

- **Tinycast Dictation beta**（@abue_ammar，约 36 秒，2300+浏览）：明天进 beta。Mac 本地离线听写，说完写进当前 App，开源免费。预告不是已上线入口。https://x.com/abue_ammar/status/2106486543758377239
- **Higgsfield Creator Partnership**（@higgsfield，约 50 秒，5.3 万+浏览）：创作者合作计划（月费套餐、额外积分、新模型早鸟、分成），不是新产品入口。与 10-03 文档的 AI Influencer 不同。https://x.com/higgsfield/status/2106431413373616254
- **dotstore 预告**（@voidyaps，约 38 秒，1.4 万+浏览）：web app / SaaS / agent / API 的「app store」，launch week 从 10 月 5 日开始。https://www.dotstore.io/ https://x.com/voidyaps/status/2106328172883317056
- **Claude Code 2.1.289**（@ClaudeCodeLog，约 42 秒，6300+浏览）：非官方 changelog。agent.spawn 共享 agent、组织 MCP 登录不被用户插件覆盖、@ 引用也走 Read deny。10-03 文档已有 2.1.288，本条不单独入库。https://x.com/ClaudeCodeLog/status/2106525277618635228
- **Anemll × M6 Mini**（@anemll，约 28 秒，4100+浏览）：Apple Neural Engine 上跑 Qwen 27B 给 @droid 写代码的配置演示，不是新产品入口。https://x.com/anemll/status/2106511126121083332
- **Replit Drift**（@amasad，约 62 秒，1.7 万+浏览）：飘移驾驶片，不是产品发布。https://x.com/amasad/status/2106406812316827874

## 已在目录或 10-01 / 10-03 文档中出现（仅交叉引用，不重复入队）

AgentCraft、Auday、MyGo、Codex Mobile Dev、Motionfly V2.0（@Motionfly_co，2106259342550806993，10-03 跟进已收）、Figma CSS handoff、Vercel Jev for Python、Prime Inference、Higgsfield AI Influencer、Replit 周更、Google Project Suncatcher、Conductor Mobile、text-to-CAD。

## 已过滤（不入库）

- 阅读量少于 500 的帖子
- 加密货币 / 代币 / launchpad（SPLICE、KIN、Collective Minds、Crawler、cotch、Fable 0.29、Spare Card、Lightchain 桌面端）
- 政治 / 新闻评论（参议院能源法案剪辑）
- 体育 / 娱乐 / 音乐发行（UFC 332、AEW Collision、StellarCraft 活动预告、VTuber 展示）
- 纯游戏（Three.js Punk 多人模式、DottieLand Arena）
- 教程 / 作品集 / 非发布（dots 用法复盘、JPEG 解释系列、仓库清单、求职作品）

**已核对**：上述主条目 tweetId 未在 `src/data/videos.json` 代码搜索中命中；也未出现在已合入的 10-01 文档与开放中的 PR #273（10-03）主条目里。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-04-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
