# 2026-10-01 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / now available / plugin / MCP / agent / desktop / workflows 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-30 上午至 2026-10-01 上午 CST（以 Runway AI Summit、Figma Motion、Gemini skills 窗口为主；2026-10-01 08:13 CDT 上午补扫，补入 Reflect Open 等未入队条目）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-30 已发现文档互补，不重复已入队 / 已上站条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-01-zh-summary.md
```

---

## 1. Figma — 自定义动画样式（设计系统 + Agent / MCP）

- **作者**：@figma
- **时间**：2026-09-30 16:12 UTC
- **视频**：约 44 秒
- **亮点**：watchlist 账号官方能力片。Custom animation styles for your design system：保存动画样式并发布到 libraries；可由 Figma agent 与编码 agent 通过 MCP 自动应用；可用 skills 引用样式。同日 ICYMI 汇总帖 2105335770584416309（约 36 秒、1.25 百万+浏览：已可用 Custom animation styles / Export to Lottie；下周推出 timeline 音频与文字动画）建议合并审。本窗口设计类浏览量第一的官方能力片。
- **互动**：约 709 赞、56 转发、13 引用、23 回复、246 收藏、145 万+浏览
- **分类建议**：design / motion / developer-tools
- **链接**：https://x.com/figma/status/2105329949548912914
- **tweetId**：2105329949548912914

---

## 2. Gemini App — Skills（替代 Gems 的可复用指令）

- **作者**：@Google
- **时间**：2026-09-30 16:18 UTC
- **视频**：约 47 秒
- **亮点**：watchlist 账号官方能力片。Introducing skills in Gemini App：保存常用指令，提示栏输入 `/` 即可重复运行。跟进帖：Skills 已在 Gemini Spark 可用，即将替代 Gems；Gems 下线时自动迁移；后续补共享与 Google Drive 附件。本窗口浏览量第一的平台能力首发。
- **互动**：约 2523 赞、204 转发、120 引用、174 回复、646 收藏、58.7 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/Google/status/2105331451294314809
- **tweetId**：2105331451294314809

---

## 3. Orthogonal × OpenAI dots — 常在 agent 的销售管线

- **作者**：@chrisspickett（@orthogonal_sh）
- **时间**：2026-09-30 17:00 UTC
- **视频**：约 57 秒
- **亮点**：Introducing OpenAI’s Dots x Orthogonal。睡前交代 pipeline，醒来得到已校验线索、引用来源与首批回复。dots 接入公司 / 人员数据与邮件工具。https://www.orthogonal.com/ 本窗口 dots 生态插件浏览量第一。
- **互动**：约 262 赞、31 转发、48 引用、68 回复、209 收藏、55.5 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/chrisspickett/status/2105342045833637901
- **tweetId**：2105342045833637901

---

## 4. Okara — Dots for marketing

- **作者**：@askOkara
- **时间**：2026-09-30 07:45 UTC
- **视频**：约 67 秒
- **亮点**：Introducing Dots for marketing。丢网站即部署一组更快更智的 marketing agents，拉流量与用户。https://okara.ai 引用 OpenAI dots 主帖，属 dots 垂直场景产品首发片。
- **互动**：约 850 赞、91 转发、23 引用、32 回复、1417 收藏、40.6 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/askOkara/status/2105202449162350808
- **tweetId**：2105202449162350808

---

## 5. SideShift — AI 创作者营销员

- **作者**：@nicholasnlawton（@sideshift_app）
- **时间**：2026-09-30 15:58 UTC
- **视频**：约 106 秒
- **亮点**：Introducing SideShift: the first AI creator marketer。声称已经 150 万+人类创作者触达 5000 亿+浏览。本窗口 indie 营销工具首发最长 walkthrough 之一。https://sideshift.app/
- **互动**：约 777 赞、119 转发、72 引用、462 回复、705 收藏、34.9 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/nicholasnlawton/status/2105326434801840513
- **tweetId**：2105326434801840513

---

## 6. Creatify Labs — Boreal-H3 广告视频模型

- **作者**：@Creatify_Labs
- **时间**：2026-09-30 17:15 UTC
- **视频**：约 46 秒
- **亮点**：Introducing Boreal-H3。在 MiniMax H3 上做广告向后训练：产品/演员/标签一致、brief 动作要落地。闭环评测 + RL / 数据采集。声称 reference fidelity 85.3%、brief success 28%→50%、identity 83%→94%。同线程说明发布片本身由 Ad Agent + Boreal-H3 制作。Live on fal。
- **互动**：约 323 赞、93 转发、47 引用、47 回复、98 收藏、29.7 万+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/Creatify_Labs/status/2105345755590644058
- **tweetId**：2105345755590644058

---

## 7. Ideogram 4.5 — 精确编辑模型

- **作者**：@ideogram_ai
- **时间**：2026-09-30 16:01 UTC
- **视频**：约 47 秒
- **亮点**：Introducing Ideogram 4.5, the most precise edit model。声称消除多轮编辑的 artifact / 像素偏移 / 色彩漂移。Ideogram 应用、API 与发布伙伴今日可用；权重即将开源。图生成模型级首发片。
- **互动**：约 2190 赞、230 转发、135 引用、141 回复、1464 收藏、24.1 万+浏览
- **分类建议**：ai / design
- **链接**：https://x.com/ideogram_ai/status/2105327223431737780
- **tweetId**：2105327223431737780

---

## 8. CrowdReply — Citation Outreach

- **作者**：@Crowdreply_io
- **时间**：2026-09-30 15:01 UTC
- **视频**：约 58 秒
- **亮点**：Introducing Citation Outreach。定位在 ChatGPT / Claude 等 AI 回答里排名、拉引用产生营收。营销类 AI 搜索产品首发 walkthrough。
- **互动**：约 441 赞、24 转发、46 引用、47 回复、813 收藏、17.7 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/Crowdreply_io/status/2105312058451570973
- **tweetId**：2105312058451570973

---

## 9. Ava Studio — AI 内容团队

- **作者**：@tong0x（@AvaStudio_ / @HoloworldAI）
- **时间**：2026-09-30 16:37 UTC
- **视频**：约 49 秒
- **亮点**：Introducing Ava Studio: your AI content team。丢网站即调研、脚本、出品牌视频，可编辑或直接发布。本窗口生成式视频工作流首发片。
- **互动**：约 253 赞、70 转发、165 引用、106 回复、227 收藏、13.3 万+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/tong0x/status/2105336177939415072
- **tweetId**：2105336177939415072

---

## 10. Mirage — Tesseract for design

- **作者**：@trymirage（Captions 团队）
- **时间**：2026-09-30 15:09 UTC
- **视频**：约 31 秒
- **亮点**：Introducing Tesseract for design。agent 直接生成可编辑设计并转成动画，无需 Figma / Canva。可从字体 / 色彩 / 布局设计系统到图层可改的成片。免费；可用 Opus 5.5 或 GPT-6 Astra。
- **互动**：约 255 赞、26 转发、26 引用、27 回复、322 收藏、6.5 万+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/trymirage/status/2105314048766033999
- **tweetId**：2105314048766033999

---

## 11. GitHub — Project HydraFusion

- **作者**：@github
- **时间**：2026-09-30 17:44 UTC
- **视频**：约 31 秒
- **亮点**：watchlist 账号官方能力片。HydraFusion now available in GitHub Copilot app 与 VS Code。按任务路由多模型：起草 / 批评 / 修订 / 升级，再交一份结果。https://github.blog/changelog/2026-09-30-hydrafusion-in-vs-code-and-the-github-copilot-app/
- **互动**：约 270 赞、48 转发、23 引用、28 回复、74 收藏、4.4 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/github/status/2105352994875232629
- **tweetId**：2105352994875232629

---

## 12. Runway — Praxis-1 开源权重 World Action Model

- **作者**：@runwayml
- **时间**：2026-09-30 18:06 UTC
- **视频**：约 115 秒
- **亮点**：watchlist 账号官方产品首发长片（AI Summit）。Introducing Praxis-1：用视频预训练做机器人控制的开源权重 World Action Model，跨形态 / 环境。早期合作方：Noble Machines、Standard Bots、Ultra；权重几个月内公开。https://runway.com/research/introducing-praxis-1 同日 Andy Chen 讲台片 2105419393928929671 可合并审。
- **互动**：约 245 赞、26 转发、21 引用、22 回复、112 收藏、3.2 万+浏览
- **分类建议**：ai / hardware
- **链接**：https://x.com/runwayml/status/2105358708599619790
- **tweetId**：2105358708599619790

---

## 13. Runway Ads — 性能广告自主引擎

- **作者**：@runwayml
- **时间**：2026-09-30 17:33 UTC
- **视频**：约 114 秒
- **亮点**：watchlist 账号官方产品首发长片。Introducing Runway Ads。自 7 月内测：广告量 10 倍、ROAS 翻倍、转化 +34%、订阅成本 -41%、+$1 亿 ARR。企业早期接入，数周内广泛推开。https://runway.com/product/ads 产品讲台片 2105401636277637479 可合并审。与 Boreal-H3 / Ava 不同产品，建议独立入库。
- **互动**：约 165 赞、24 转发、20 引用、19 回复、120 收藏、3.0 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/runwayml/status/2105350241444929979
- **tweetId**：2105350241444929979

---

## 14. Replit — Meta VR 里跑 Replit App

- **作者**：@Replit
- **时间**：2026-09-30 15:31 UTC
- **视频**：约 20 秒
- **亮点**：watchlist 账号官方能力片。Replit apps are now available in Meta VR。平台分发入口扩展，可独立入库。
- **互动**：约 57 赞、7 转发、8 引用、18 回复、7 收藏、1.7 万+浏览
- **分类建议**：developer-tools / consumer
- **链接**：https://x.com/Replit/status/2105319681259147583
- **tweetId**：2105319681259147583

---

## 15. CoinMarketCap — Agentic Charts

- **作者**：@kohkoh101（CMC AI）
- **时间**：2026-09-30 16:48 UTC
- **视频**：约 25 秒
- **亮点**：Introducing Agentic Charts：用专业交易员评估集训练的图表分析 agent。产品是图表 AI，非代币 / launchpad。CMC AI 声称 1000 万+用户。
- **互动**：约 62 赞、11 转发、3 引用、21 回复、18 收藏、1.7 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/kohkoh101/status/2105338901854662687
- **tweetId**：2105338901854662687

---

## 16. Builder.io — /visual-edit skill

- **作者**：@Steve8708（Builder.io）
- **时间**：2026-09-30 19:16 UTC
- **视频**：约 59 秒
- **亮点**：Introducing /visual-edit。把本地代码当 Figma 画布改：任意 agent / 模型、多人协作、通过 coding agent 落地视觉修改。开源免费。indie 设计工具首发片，收藏比赞比高。
- **互动**：约 233 赞、17 转发、3 引用、9 回复、345 收藏、1.4 万+浏览
- **分类建议**：design / developer-tools / ai
- **链接**：https://x.com/Steve8708/status/2105376370838974842
- **tweetId**：2105376370838974842

---

## 17. Higgsfield — Genjutsu Restyle

- **作者**：@higgsfield_ai
- **时间**：2026-09-30 21:41 UTC
- **视频**：约 30 秒
- **亮点**：Introducing Higgsfield Genjutsu Restyle。20+ 动画风格或自上传参考；API 把 motion transfer / 视频编辑打进 App。Higgsfield 与 MCP 今日可用。
- **互动**：约 234 赞、113 转发、4 引用、10 回复、58 收藏、1.3 万+浏览
- **分类建议**：ai / motion / design
- **链接**：https://x.com/higgsfield_ai/status/2105412853914284117
- **tweetId**：2105412853914284117

---

## 18. Warp Factories — Agents as Code

- **作者**：@warpdotdev
- **时间**：2026-09-30 17:45 UTC
- **视频**：约 21 秒
- **亮点**：watchlist 账号官方能力片。The Terraform for agents：一个仓配置 agents / 编排 / 自动化 / 权限 / MCP / runner / 评分。工程师与 agent 都可对 factory 提 PR。
- **互动**：约 47 赞、3 转发、2 引用、5 回复、42 收藏、1.1 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/warpdotdev/status/2105353453815861370
- **tweetId**：2105353453815861370

---

## 19. Runway Solaris — World Interface Model

- **作者**：@runwayml
- **时间**：2026-09-30 18:33 UTC
- **视频**：约 75 秒
- **亮点**：watchlist 账号 AI Summit 讲台片。CTO Kamil Sindi 介绍首个 World Interface Model Solaris：交互时实时生成的操作系统。研发视野更重于产品入口，建议与 Praxis-1 / Ads 分开看，确认是否已对外可用再入库。
- **互动**：约 84 赞、9 转发、8 引用、8 回复、30 收藏、1.1 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/runwayml/status/2105365494085951662
- **tweetId**：2105365494085951662

---

## 20. Inception — Mercury Decide

- **作者**：@_inception_ai
- **时间**：2026-09-30 19:12 UTC
- **视频**：约 93 秒
- **亮点**：Introducing Mercury Decide。声称 OpenRouter JevBench v1.4 最强决策模型之一，最高 14 decisions/s；与 Jev 象棋对弍。OpenRouter 早期免费：inception/mercury-decide:free。
- **互动**：约 145 赞、20 转发、7 引用、7 回复、81 收藏、9200+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/_inception_ai/status/2105375133003325768
- **tweetId**：2105375133003325768

---

## 21. Superlayer — 即时后端

- **作者**：@dqnamo
- **时间**：2026-09-30 15:04 UTC
- **视频**：约 39 秒
- **亮点**：Introducing Superlayer. An instant backend for all your app ideas。https://www.superlayer.dev/ indie 开发者工具首发 walkthrough。
- **互动**：约 71 赞、4 转发、1 引用、7 回复、70 收藏、6000+浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/dqnamo/status/2105312851682345106
- **tweetId**：2105312851682345106

---

## 22. chat.sh — MCP

- **作者**：@damonchen
- **时间**：2026-09-30 16:53 UTC
- **视频**：约 30 秒
- **亮点**：Just shipped MCP for chat.sh。用 Cursor 里的 MCP 写帮助文并直接发到帮助中心。indie MCP 首发短片。
- **互动**：约 38 赞、4 转发、8 回复、26 收藏、5700+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/damonchen/status/2105340351703908727
- **tweetId**：2105340351703908727

---

## 23. Stripe Muse — 在 Muse 里创建支付链接

- **作者**：@stripe
- **时间**：2026-09-30 19:58 UTC
- **视频**：约 31 秒
- **亮点**：watchlist 账号能力演示。09-29 图片帖已公布 Stripe × Meta Muse；本窗口补了支付链接 / 折扣 / 收入分析视频线程。建议以本帖作为视频入库主帖，或与 09-29 图片宣布合并审。https://docs.stripe.com/mcp
- **互动**：约 38 赞、2 转发、5 回复、4 收藏、5800+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/stripe/status/2105386768204001300
- **tweetId**：2105386768204001300

---

## 24. Kiro workflows — 一般可用

- **作者**：@kirodotdev
- **时间**：2026-09-30 21:25 UTC
- **视频**：约 88 秒
- **亮点**：Introducing Kiro workflows, now generally available。在工作流里串行 / 并行 / 循环，按步骤换 agent / 模型 / effort；可存成 recipe 重跑。AWS 系 agent IDE 能力长 walkthrough。
- **互动**：约 65 赞、15 转发、4 引用、9 回复、22 收藏、4600+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/kirodotdev/status/2105408724655337626
- **tweetId**：2105408724655337626

---

## 25. Namespace — Git Snapshots

- **作者**：@namespacelabs
- **时间**：2026-09-30 15:38 UTC
- **视频**：约 10 秒
- **亮点**：Introducing Git Snapshots：快速可横扩的 repo checkout，早期最高 6.5 倍。已为 SpaceXAI 等客户供电；支持 Cursor Origin 与 GitHub。
- **互动**：约 52 赞、9 转发、3 引用、7 回复、18 收藏、4600+浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/namespacelabs/status/2105321446859837631
- **tweetId**：2105321446859837631

---

## 26. Astral — 每次 ship 都出发布片的 agent

- **作者**：@SavannahFeder
- **时间**：2026-09-30 18:07 UTC
- **视频**：约 57 秒
- **亮点**：Introducing Astral：每次发布都自动生成 launch video 的 AI agent。本条发布片声称 1 小时内制出。indie 视频 agent 首发 walkthrough。
- **互动**：约 44 赞、2 转发、1 引用、12 回复、28 收藏、3000+浏览
- **分类建议**：ai / motion / productivity
- **链接**：https://x.com/SavannahFeder/status/2105358818008035413
- **tweetId**：2105358818008035413

---


## 27. Reflect Open — 退出 beta 的本地 Markdown 笔记

- **作者**：@reflectnotes
- **时间**：2026-09-30 16:59 UTC
- **视频**：约 52 秒（线程另有 6 段功能短片，约 21–35 秒）
- **亮点**：上午补扫补入。Reflect Open 今日退出 beta：反向链接、即时搜索，笔记是普通 Markdown 文件，agent 可读。无 Reflect 账号 / 云数据库；可指向 Claude Code 或 Codex，一键装 skill。内置自带 key 的 AI chat（OpenAI / Anthropic / Google / OpenRouter / 本地），私密笔记不进模型。iPhone / iPad 支持会议级音频备忘与转写。iCloud Drive 或 Git 同步。Tauri 原生应用，Mac 免费无试用限制。https://reflect.app https://github.com/team-reflect/reflect-open 收藏比赞比高，适合作为 productivity 首发主帖，线程短片可合并审。
- **互动**：约 213 赞、16 转发、3 引用、19 回复、227 收藏、3.3 万+浏览
- **分类建议**：productivity / ai
- **链接**：https://x.com/reflectnotes/status/2105341653468774723
- **tweetId**：2105341653468774723

---

## 28. Todoist — 无日期时长与看板子任务

- **作者**：@amix3k（Todoist）
- **时间**：2026-09-30 19:14 UTC
- **视频**：约 152 秒
- **亮点**：上午补扫补入。Todoist web 与 desktop 上线：任务可只加 duration、不必绑日期/时间；看板视图可见子任务。官方功能 walkthrough，非营销模板。
- **互动**：约 138 赞、1 转发、36 回复、28 收藏、6700+浏览
- **分类建议**：productivity
- **链接**：https://x.com/amix3k/status/2105375678749110698
- **tweetId**：2105375678749110698

---

## 29. Blender × visionOS Spatial Preview

- **作者**：@Adrian_Schr
- **时间**：2026-09-30 21:54 UTC
- **视频**：约 24 秒
- **亮点**：上午补扫补入。visionOS 27 的 Spatial Preview 上线后，作者做了开源工具：一键把 Blender 场景以 3D 推到 Vision Pro。免费开源，链接在评论。硬件/设计工具首发短片。
- **互动**：约 112 赞、12 转发、5 回复、46 收藏、5600+浏览
- **分类建议**：design / hardware / developer-tools
- **链接**：https://x.com/Adrian_Schr/status/2105416059524190245
- **tweetId**：2105416059524190245

---

## 30. lore — agent 输出的确定性护栏

- **作者**：@maanav
- **时间**：2026-09-30 19:17 UTC
- **视频**：约 12 秒
- **亮点**：上午补扫补入。开源 lore：agent 输出可以过 JSON schema 但语义仍错；lore 用世界规则与状态做确定性校验。indie 开发者工具首发短片。
- **互动**：约 61 赞、7 转发、1 引用、4 回复、13 收藏、3900+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/maanav/status/2105376410357698820
- **tweetId**：2105376410357698820

---

## 31. 其他高信号 / 跟进

- **Grokipedia v0.3**（@Grokipedia，文本首发约 271 万浏览；@cb_doge 设计预览约 25 秒、5.0 万+浏览）：官方帖无视频，设计预览可作 motion/design 候选，确认是否产品入口再入库。https://x.com/Grokipedia/status/2105413402218873178 https://x.com/cb_doge/status/2105411823877177471
- **Nebius AI Cloud Q3**（@nebiusai，约 33 秒，2800+浏览）：季度 shipping 汇总，非单点首发。https://x.com/nebiusai/status/2105623455639220248
- **Novita × MiMo-V2.6**（@novita_labs，约 21 秒，4500+浏览）：模型上架短片，非独立产品 App。https://x.com/novita_labs/status/2105324289528570363
- **Incident Arena** 浏览升至约 3.1 万，仍按 benchmark 处理，不升主条目。
- **Figma Motion ICYMI**（@figma，约 36 秒，125 万+浏览）：Custom styles + Lottie 导出已上线，音频 / 文字动画下周。建议与主条目 1 合并。https://x.com/figma/status/2105335770584416309
- **Runway Praxis-1 讲台片**（@runwayml，约 75 秒，4700+浏览）：Andy Chen 讲解 + 早期准入。https://x.com/runwayml/status/2105419393928929671
- **Runway Ads 讲台片**（@runwayml，约 48 秒，5400+浏览）：CPO Anthony Maggio 介绍。https://x.com/runwayml/status/2105401636277637479
- **Cursor × Innate robots**（@cursor_ai，约 234 秒，4.7 万+浏览）：客户纪录片，非 Cursor 新产品入口。https://x.com/cursor_ai/status/2105406306966511773
- **Incident Arena**（@andrezfu，约 34 秒，1.1 万+浏览）：编码 agent 值班 benchmark / 数据集，非产品 App。https://x.com/andrezfu/status/2105419977209831866
- **Tesla base Model 3 AU/NZ**（@TeslaAUNZ / @SawyerMerritt，约 50 秒，1.9 万+浏览）：区域销售开放，非软件首发。https://x.com/TeslaAUNZ/status/2105450932515561609
- **Basin 8 Home**（@basin8com，约 18 秒，3800+浏览）：个人 AI 协作空间预览，声称约两周后首发。https://x.com/basin8com/status/2105434267496931720
- **LottieFiles × Claude MCP**（@LottieFiles，约 40 秒，1550 浏览）：用 Sonnet 5.5 + Lottie Creator MCP 做动画演示，非单点产品首发。https://x.com/LottieFiles/status/2105125940368146824
- **Higgsfield × OpenAI dots 后台**（@higgsfield_ai，约 20 秒，1.3 万浏览）：三个 dots 在 AE 里做发布片，案例非新入口。https://x.com/higgsfield_ai/status/2105099159544173036
- **Framer design system skill 教程**（@framer，约 9 分钟，3200+浏览）：教程非首发。https://x.com/framer/status/2105354350336074107
- **Stripe Muse 跟进短片**（@stripe）：折扣 / 收入看板，可与主帖 23 合并。
- **@mausbot_ 跟进**（@BuildwithOmkarr，8100+浏览）：09-30 文档已有 MausBot 主条目，不重复入队。https://x.com/BuildwithOmkarr/status/2105126437309264101

## 已在目录或 09-27 / 09-28 / 09-29 / 09-30 文档中出现（仅交叉引用，不重复入队）

OpenAI dots / GPT-6.1 Sol / Ultrafast / ChatGPT Space / Codex Security Cloud、InstaCloud、Angular Native、pdfcn、Cursor /visualize、Figma Dev Mode × Codex、Perplexity Automations、tldraw ChatGPT 插件、Replicas V3、MausBot、Team Bots、Claude Sonnet 5.5、Nothing Headphone (1) Pro、Runway × ElevenLabs v4 / Agent Tagging、Framer Agent 案例、Warp Sign in with ChatGPT。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（Designa AI 公开上线、Pexo Product Hunt 推广、部分 indie MCP 草稿等）
- 加密货币 / 代币 / NFT / launchpad（Collateral memecoin 抵押、AIDEN Robinhood Chain identity、VOICY Genesis NFT、Grift 城市猎股票、Base Cobalt 网络升级短片）
- 政治 / 新闻评论
- 体育 / 娱乐 / 音乐发行 / K-pop soundcheck / 教会讲道
- 纯游戏 demo / 俱乐部招新 / FM26 插件 / 电竞杯赛
- 教程 / 作品集 / 非发布（Framer skill 教程、Codex 中文教程长片、Dub emoji picker 重构短片、Cloudflare BirthdayWeek / Connect 宣传）

**已核对**：上述主条目 tweetId 未在 `src/data/videos.json` 与 `src/data/inbox.json` 代码检索中命中。MausBot 已在 09-30 文档，不重复入队。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-01-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
