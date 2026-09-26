# 2026-09-26 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / now available / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-24 下午至 2026-09-26 上午 CST（主要补 09-24 / 09-25 文档截稿后的窗口，并补录 09-24 下午未被 09-25 收录的高信号片）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-24 / 09-25 已发现文档互补，不重复已入队条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-26-zh-summary.md
```

---

## 1. OpenRouter — typesafe/jev-router

- **作者**：@OpenRouter
- **时间**：2026-09-25 22:21 UTC
- **视频**：约 53 秒
- **亮点**：Introducing typesafe/jev-router。由 Jev + @typesafeai 驱动的 cache-aware 模型路由器：每轮读 prompt，打难度 / 精度分，再选模型与 reasoning effort；优先保留同一模型以维护缓存，只有预期收益大于切换成本才换模型。线程称四项 agent 基准解决 237/423，比 Auto Router 7684 130 多 82%；五项基准中位 TTFT 更快。Jev 只读文本、ZDR、附件不传送。可在 OpenRouter Chat 看 routing insights。https://openrouter.ai/typesafe/jev-router 是本窗口浏览量最高的官方产品片。
- **互动**：约 426 赞、27 转发、39 引用、309 收藏、20.4 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/OpenRouter/status/2103610898690855161
- **tweetId**：2103610898690855161

---

## 2. Railway — 免登录免费 VM

- **作者**：@Railway
- **时间**：2026-09-25 19:24 UTC
- **视频**：约 30 秒
- **亮点**：watchlist 账号官方能力片。Get a free VM from your terminal or from @muse。零注册、一条命令：ssh https://railway.com/free-vm 。既是终端开发者入口，也是 Muse connector 落地片。本窗口收藏量第二。
- **互动**：约 384 赞、25 转发、16 引用、451 收藏、9.1 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/Railway/status/2103566393862136150
- **tweetId**：2103566393862136150

---

## 3. Notion — Column permissions

- **作者**：@NotionHQ
- **时间**：2026-09-25 17:32 UTC
- **视频**：约 18 秒
- **亮点**：watchlist 账号官方功能首发片。Column permissions are finally here。可按列控制谁能看、谁能改数据库属性，敏感字段可保持私密。文案称这是用户 #1 请求功能。
- **互动**：约 533 赞、44 转发、39 引用、162 收藏、5.9 万+浏览
- **分类建议**：productivity
- **链接**：https://x.com/NotionHQ/status/2103538020410638664
- **tweetId**：2103538020410638664

---

## 4. Blume 2.0 — 开源文档框架

- **作者**：@haydenbleasel（OpenAI MTS，前 Vercel）
- **时间**：2026-09-24 16:57 UTC
- **视频**：约 73 秒
- **亮点**：Introducing Blume 2.0。面向人与 agent 的开源文档框架：18 家分析集成；Contentful / Payload / Strapi；搜索、AI、部署 adapter；可组装 API reference；数百项修复。升级：`npx blume@latest upgrade --codex`。09-25 文档未收，本窗口补录。
- **互动**：约 296 赞、9 转发、6 引用、266 收藏、5.5 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/haydenbleasel/status/2103166902801740255
- **tweetId**：2103166902801740255

---

## 5. Prism — 开源 LLM 推理云

- **作者**：@RajitWrites（prisminference）
- **时间**：2026-09-24 17:04 UTC
- **视频**：约 88 秒
- **亮点**：Introducing Prism。开源 LLM 的 inference cloud，用 agent 优化部署的成本 / 延迟 / 吞吐；号称 DeepSeek V4.1 Flash 达 547 tok/s。https://prisminference.com 09-25 文档未收，本窗口补录。
- **互动**：约 485 赞、39 转发、11 引用、304 收藏、5.1 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/RajitWrites/status/2103168653256712603
- **tweetId**：2103168653256712603

---

## 6. Runway — Layers

- **作者**：@runwayml
- **时间**：2026-09-25 14:01 UTC
- **视频**：约 45 秒
- **亮点**：watchlist 账号官方新能力片。New in Runway, Layers。一键把任意图拆成可编辑图层：去背景、改文字、单独改一个元素，不离开 Runway。与 09-24 文档的 Seedance 2.5 Draft mode / DaVinci 插件同线，本条是图层编辑首发片。
- **互动**：约 464 赞、40 转发、21 引用、215 收藏、4.4 万+浏览
- **分类建议**：ai / design / motion
- **链接**：https://x.com/runwayml/status/2103484927320723684
- **tweetId**：2103484927320723684

---

## 7. Figma — Vertical wrap

- **作者**：@figma
- **时间**：2026-09-25 16:00 UTC
- **视频**：约 30 秒
- **亮点**：watchlist 账号官方功能片。Vertical wrap available now。用墨西哥排列讲清自动布局现在可竖向换行，减少嵌套 auto layout。同晚跟帖 2103617974921810056 是同功能的另一条短片，建议以本条为准入库。
- **互动**：约 713 赞、40 转发、14 引用、140 收藏、3.0 万+浏览
- **分类建议**：design
- **链接**：https://x.com/figma/status/2103514978779328626
- **tweetId**：2103514978779328626

---

## 8. Clicky — Collaborators

- **作者**：@FarzaTV（@heyclicky，前 buildspace）
- **时间**：2026-09-25 20:26 UTC
- **视频**：约 168 秒 walkthrough
- **亮点**：Introducing collaborators。每个 collaborator 是一个 mini AI：帮你想清做什么、找第一批用户与粉丝、赚互联网上第一块钱。近三分钟真机 demo，indie 创业工具首发长片。
- **互动**：约 422 赞、19 转发、7 引用、217 收藏、2.0 万+浏览
- **分类建议**：ai / productivity / other
- **链接**：https://x.com/FarzaTV/status/2103581812069179417
- **tweetId**：2103581812069179417

---

## 9. NVIDIA MONAI Physio

- **作者**：@NVIDIAHealth
- **时间**：2026-09-25 13:00 UTC
- **视频**：约 15 秒
- **亮点**：Introducing MONAI Physio at MICCAI 2026。开源 Project MONAI 工具包：3D / 4D 医学影像 → 个性化心肿与呼吸数字双胞，用于仿真、可视化与可复现研究。
- **互动**：约 406 赞、65 转发、3 引用、214 收藏、1.9 万+浏览
- **分类建议**：ai / other
- **链接**：https://x.com/NVIDIAHealth/status/2103469569977262353
- **tweetId**：2103469569977262353

---

## 10. Runway × Claude Opus 5.5 MCP

- **作者**：@runwayml
- **时间**：2026-09-25 17:41 UTC
- **视频**：约 55 秒
- **亮点**：Claude Opus 5.5 meets Runway MCP。在 Claude 里直接调 Runway，用 Gen-4.5 / Seedance 2.5 / GPT Image 2 / Kling 等出图出片。目录已有 Seedance / Workflows 等片，本条是 Claude 端 MCP 入口首发，可独立入库。
- **互动**：约 203 赞、21 转发、2 引用、118 收藏、1.6 万+浏览
- **分类建议**：ai / design / motion
- **链接**：https://x.com/runwayml/status/2103540433225908447
- **tweetId**：2103540433225908447

---

## 11. Niantic Spatial — Places Library

- **作者**：@NianticSpatial
- **时间**：2026-09-25 18:34 UTC
- **视频**：约 31 秒
- **亮点**：Introducing the Places Library。百个高保真真实世界 3D 环境，给 embodied AI / 机器人用；可下载仿真就绪 USDZ，适配 NVIDIA Isaac Sim / Isaac Lab 与 OpenUSD。
- **互动**：约 32 赞、1 转发、17 收藏、1.2 万+浏览
- **分类建议**：ai / hardware / other
- **链接**：https://x.com/NianticSpatial/status/2103553680951927079
- **tweetId**：2103553680951927079

---

## 12. Swivel — 浏览器里的运动 mockup

- **作者**：@samuel_uiux
- **时间**：2026-09-24 10:52 UTC
- **视频**：约 7 秒
- **亮点**：indie 设计工具首发。压僻不想再用静态 mockup 呈现运动作品，做了 Swivel：导入设计、设备 / 光照 / 机位，浏览器直出最高 4K 视频 mockup。Beta 免费：https://swivelmotion.app 09-24 / 09-25 文档未收。
- **互动**：约 135 赞、15 转发、5 引用、180 收藏、1.0 万+浏览
- **分类建议**：design / motion
- **链接**：https://x.com/samuel_uiux/status/2103075147972247837
- **tweetId**：2103075147972247837

---

## 13. Replit — 对话内数据可视化（收购 Atta）

- **作者**：@Replit
- **时间**：2026-09-25 16:01 UTC
- **视频**：主片约 17 秒（跟帖另有约 13 秒）
- **亮点**：watchlist 账号官方能力片。Data visualization now lives directly in Replit。收购 @Attaapp，对话里直接出交互图表，不用写 SQL、不用反复重建。同系列另一条「问 Replit 要一张图」演示（2103515315028292024）可合并审。
- **互动**：主帖约 87 赞、7 转发、7 引用、28 收藏、8000+浏览
- **分类建议**：developer-tools / productivity
- **链接**：https://x.com/Replit/status/2103515313430302766
- **tweetId**：2103515313430302766

---

## 14. Logitech G — YETI 2 AI denoiser

- **作者**：@LogitechG
- **时间**：2026-09-25 22:01 UTC
- **视频**：约 23 秒
- **亮点**：Introducing … the AI denoiser in the new YETI 2。硬件麦克风能力首发短片，定位是背景噪音的对手。
- **互动**：约 41 赞、3 转发、4 引用、4 收藏、8800+浏览
- **分类建议**：hardware / consumer
- **链接**：https://x.com/LogitechG/status/2103605775499165869
- **tweetId**：2103605775499165869

---

## 15. CopyCat — macOS 剪贴板

- **作者**：@uaghazadae
- **时间**：2026-09-25 19:31 UTC
- **视频**：约 53 秒
- **亮点**：Introducing CopyCat。原生 macOS 小工具：连续复制多段内容，⌘⇧V 挑要粘的那段。支持文字 / 链接 / 图 / 颜色 / 文件；本机留存，终身授权、无云、无订阅。https://voprexlabs.com/copycat
- **互动**：约 78 赞、5 转发、10 回复、96 收藏、5800+浏览
- **分类建议**：productivity / consumer
- **链接**：https://x.com/uaghazadae/status/2103568103011676643
- **tweetId**：2103568103011676643

---

## 16. kapa.ai — AI 辅助爬站

- **作者**：@emilsnotes
- **时间**：2026-09-24 19:51 UTC
- **视频**：约 30 秒
- **亮点**：Introducing AI-assisted web crawls。给 URL，返回 agent 可查的知识库；自动处理 JS 渲染 / PDF / 限流 / 去重 / 导航脚帜垃圾，并保持同步；出厂带 MCP 与 API。https://www.kapa.ai/
- **互动**：约 26 赞、7 转发、1 引用、18 收藏、2000+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/emilsnotes/status/2103210856330768494
- **tweetId**：2103210856330768494

---

## 17. CoreWeave — Mission Control Agent + MCP

- **作者**：@CoreWeave
- **时间**：2026-09-24 22:01 UTC
- **视频**：约 50 秒
- **亮点**：同日两条：Mission Control Agent 进 Console preview（问部署为什么慢、命名瓶颈、预估修复吞吐、审批后应用并压测）；Mission Control MCP GA（托管只读 MCP：指标 / 日志 / 仪表盘 / 告警 / 文档 / 集群与桶状态，适配 Claude Code / Cursor / Codex）。
- **互动**：约 51 赞、2 转发、5 引用、3 收藏、3800+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/CoreWeave/status/2103243430558105909
- **tweetId**：2103243430558105909

---

## 18. 其他高信号 / 跟进

- **Framer Skills 教程**（@framer，约 97 秒，4500+浏览）：Create / review / browse skills、加 brand voice、改标题。09-22 / 09-23 已收 Skills 首发，本条是教程跟进。https://x.com/framer/status/2103515479675388092
- **Framer positioning 教程**（@framer，约 233 秒，6500+浏览）：Relative / Absolute / Fixed / Sticky，非新功能首发。https://x.com/framer/status/2103189846332432751
- **Figma Vertical wrap 跟帖**（@figma，约 16 秒，5400+浏览）：同功能另一条短片，链到 The Rumor In Motion。https://x.com/figma/status/2103617974921810056
- **Midjourney edit model 教程**（@midjourney，约 189 秒，5.9 万+浏览）：09-25 已作跟进记，非首发。https://x.com/midjourney/status/2103208764648419598
- **Replit This Week**（@Replit，约 105 秒，650+浏览）：Sol / Luna / Opus 5.5 进 Agent、Muse connector、Meta VR 周报，非单点首发。https://x.com/Replit/status/2103650767257083998
- **diffusionhq × OpenCode**（@konstipaulus，约 7 秒，9600+浏览）：v0.206.0 打开 OpenCode MCP 开关的接入短片。https://x.com/konstipaulus/status/2103421000247566466
- **cfo.ai 首周客户片**（@blader / Siqi Chen，约 34 秒，2500+浏览）：已上线产品的用户回馈，非首发。https://x.com/blader/status/2103287273332826286
- **GameDev OS by Scenario**（@aaassa120，约 55 秒，2200+浏览）：给 coding agent 的 9 角色 / 64 skills 开源库，但主帖是「评论 OS 发库」式分发，审核时优先官方源。https://x.com/aaassa120/status/2103557296009982085
- **YScroll**（@imsanyi，16 岁开发者，约 160 秒，821 浏览）：反无限滚动 App walkthrough，互动偏低可观望。https://x.com/imsanyi/status/2103518892819935281
- **Recipe Tables App**（@juanbuis，约 14 秒，1100+浏览）：菜谱转可供烹饪的表格，beta。https://x.com/juanbuis/status/2103526972131320048

## 已在目录或 09-24 / 09-25 文档中出现（仅交叉引用，不重复入队）

Perplexity Portable Computer for Windows（AMD Ryzen AI Max）、GitHub Copilot Dependabot 批量自动化、Runway Seedance 2.5 Draft mode、Google Chrome 学生向三项能力、Google Photos 五项更新、Motion Muse for Movies / GPT-6 / Opus 5.5、Stripe Link financial insights、Weave Code Boost、FundMyCompute、Midjourney edit model 教程、Odyssey Agora-2、OpenAI Sol / Luna 与 ChatGPT Voice 插件、Gemini 3.8 Flash TTS。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（samautomation 发布片、Pexo 二创推广、部分 MCP 草稿等）
- 加密货币 / 代币 / NFT / launchpad（ZAT、ObjectPad、Buttbrain、Orbio Agentic Launchpad、Askr 空投、TRENCHAI、FLETCH、ThesisArena、Reppo on-chain eval）
- 政治 / 新闻评论（特朗宣传片、市政引见等）
- 体育 / 娱乐 / 音乐发行（NASCAR Classics、MLB、Madison Beer Twitch、CheerTheory mix）
- 纯游戏 demo / 武器解锁（Treyarch Roc 20mm、VORTEX 无代码做游戏纪录片）
- 活动 / 会议预告（Cloudflare Connect 倒计时、Supabase Select / Hypership Day 赞助商片、Replit Hacking the 7 纪录片）
- 教程 / 作品集 / 非发布（Framer positioning / Skills 教程、Pexo 代理演示、Siren 替第三方产品做片）

**已核对**：上述主条目 tweetId 均未在 `src/data/videos.json` 代码检索中命中；也未出现在 09-24 / 09-25 discovery 主条目。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-26-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
