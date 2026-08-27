# 2026-08-27 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / product launch / MCP / computer-use 等，并覆盖 watchlist 里的 OpenAI、Google、Runway、Framer 等账号。

时间范围：2026-08-25 至 2026-08-27。已排除政治、纯娱乐与无关教程。Perplexity Portable Computer（tweetId `2092268362386780270`）已出现在 `docs/discovery/2026-08-26-grok-summary.md`，ChatGPT Business Premium Seats / Jalapeño 已出现在 `docs/discovery/2026-08-26-zh-summary.md`，本次不重复。

与开放 PR #82（`discoveries/` 路径）互补；本文件为仓库既定 `docs/discovery/*-zh-summary.md` 格式。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-27-zh-summary.md
```

---

## 1. Google — Gemini 3.5 Transcribe 语音转文字模型

- **作者**: @Google / @GoogleAI / @GoogleAIStudio / @sundarpichai
- **时间**: 2026-08-26 17:03–17:06 UTC
- **视频**: 官方主帖约 10 秒；@GoogleAI 约 128 秒能力演示；@GoogleAIStudio 约 45 秒；Sundar 约 38 秒
- **亮点**: Google 推出至今最精准的语音转文字模型 Gemini 3.5 Transcribe。支持 85+ 语言与方言自动检测、去除语气词、处理自我纠正、理解意图，可区分多说话人并适配专业词汇。已在 Gemini App（macOS）、Android Rambler、AI Studio / Gemini API / Gemini Enterprise 上线。
- **互动**: 官方帖 36 万+ 浏览；Sundar 帖 24 万+ 浏览、2700+ 赞；AI Studio 帖 13 万+ 浏览、1457 赞
- **分类建议**: ai
- **链接**: https://x.com/GoogleAIStudio/status/2092659361235587416
- **备用官方帖**: https://x.com/sundarpichai/status/2092659467284517088

## 2. Yutori — Navigator n2 计算机使用模型

- **作者**: @deviparikh（Yutori 联合 CEO）
- **时间**: 2026-08-26 16:17 UTC
- **视频**: 约 123 秒主演示
- **亮点**: 正式发布 Navigator n2：仅 27B 参数的前沿 computer-use 模型。能智能交错使用 GUI、CLI 与短代码片段，在 Linux 与 macOS 上完成长周期真实任务。试用：https://yutori.com/n2
- **互动**: 8.7 万+ 浏览、380+ 赞
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/deviparikh/status/2092647579163251007

## 3. Runable Grow — 全自动 GTM Agent（融资 $21M 同日上线）

- **作者**: @itsumeshk（@runable_hq 联合创始人/CEO）
- **时间**: 2026-08-26 15:15 UTC
- **视频**: 约 79 秒官方发布片
- **亮点**: 宣布融资 $21M，并当天上线 Runable Grow：号称全球首个 24/7 运营整套获客的 Agent。可代投 Meta / Google / ChatGPT 广告（无需广告账户）、真实号码冷呼 + 企业邮箱冷邮、线索生成与筛选、社交监听、SEO/AEO。付费用户首 $100 由官方承担。这是当日互动最高的独立公司产品发布之一。
- **互动**: 85 万+ 浏览、1455 赞、293 转发、588 引用、1000 收藏
- **分类建议**: ai / productivity
- **链接**: https://x.com/itsumeshk/status/2092632126231609849

## 4. X Developers — Chat Agents + Chat API / Chat XDK

- **作者**: @XDevelopers
- **时间**: 2026-08-26 21:45 UTC
- **视频**: 约 40 秒官方介绍
- **亮点**: X 开发者平台推出 Chat Agents，基于新的 X Chat API 与 Chat XDK。骨架仓库：https://github.com/xdevplatform/xchat-agent-skeleton
- **互动**: 8.0 万+ 浏览、638 赞、65 转发、249 收藏
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/XDevelopers/status/2092730108041695449

## 5. Lava Desktop — 对话变成本地定时 Agent 例程

- **作者**: @MitchJones_（Lava 创始人，前 Facebook / Dropbox 产品）
- **时间**: 2026-08-27 00:00 UTC
- **视频**: 约 47 秒演示
- **亮点**: 今日正式上线 Lava Desktop。把一次对话固化成 Agent 可重复执行的 routine，面向「还在手工做本该交给 AI 的事」的人。产品页：https://www.lava.so/lavadesktop
- **互动**: 刚发布，早期较低
- **分类建议**: ai / productivity
- **链接**: https://x.com/MitchJones_/status/2092764094973477346

## 6. Motion — 用网址生成产品发布视频

- **作者**: @motion_so
- **时间**: 2026-08-26 22:22 UTC
- **视频**: 约 22 秒演示（4K）
- **亮点**: 投入产品网址后自动生成带动效、旁白、音乐与字幕的 launch video。与 whatships 定位高度相关的创作工具。https://motion.so
- **互动**: 2.1k+ 浏览
- **分类建议**: design / motion / ai
- **链接**: https://x.com/motion_so/status/2092739438765818133

## 7. each::labs — Video API MCP 上线

- **作者**: @eachlabs
- **时间**: 2026-08-26 12:59 UTC
- **视频**: 约 49 秒演示
- **亮点**: Claude Code / Codex 可直接调用整套 Video API：重构帧、字幕、剪辑、缩略图等 44 项操作。描述剪辑意图，Agent 返回渲染成片。
- **互动**: 2.0k+ 浏览、30 赞
- **分类建议**: ai / developer-tools / motion
- **链接**: https://x.com/eachlabs/status/2092597866032197892

## 8. Runway — Muse Image（Meta）上线

- **作者**: @runwayml
- **时间**: 2026-08-26 17:46 UTC
- **视频**: 约 20 秒
- **亮点**: Meta 的 Muse Image 模型在 Runway 正式可用，与平台现有顶尖图像/视频模型并列。
- **互动**: 1.2 万+ 浏览、81 赞
- **分类建议**: ai
- **链接**: https://x.com/runwayml/status/2092670079070822579

## 9. fal — Muse Image + Recraft V4 Styles 上线

- **作者**: @fal
- **时间**: 2026-08-26 13:02 / 23:05 UTC
- **视频**: Recraft V4 Styles 约 22 秒；Muse Image 约 28 秒
- **亮点**: Recraft V4 Styles 可用风格参考锁定栅格/矢量一致性；随后 Muse Image（Meta，agentic 构图 + 工具调用 + 自纠错）也上线 fal。
- **分类建议**: ai / design
- **链接**: https://x.com/fal/status/2092750288209711213
- **同日相关**: https://x.com/fal/status/2092598505294459343

## 10. Apple — 新款 Mac mini 发布片

- **作者**: @tim_cook
- **时间**: 2026-08-25 14:12 UTC
- **视频**: 约 38 秒官方发布片（1920×1080）
- **亮点**: Apple CEO 发布新 Mac mini：「体积小、性能大」，覆盖日常生产力到 AI。是当日最高曝光的硬件发布片（近 940 万浏览）。
- **互动**: 940 万+ 浏览、6.6 万赞、5262 转发、1673 引用
- **分类建议**: hardware / consumer
- **链接**: https://x.com/tim_cook/status/2092253780532486557

## 11. WorkBuddy — Co-Write 人机共写上线全球

- **作者**: @WorkBuddy_AI / @TencentAI_News
- **时间**: 2026-08-26 16:33 / 16:36 UTC
- **视频**: 约 86 秒
- **亮点**: Human-AI Co-writing 全球上线。同一文档同时编辑（Word / Excel / PPT / Markdown），只改选中范围，Ctrl+Z 对 AI 同样生效。定位「坐在旁边写」而非接管整篇。
- **分类建议**: ai / productivity
- **链接**: https://x.com/WorkBuddy_AI/status/2092651610791088379

## 12. ANyONe Protocol — Desktop VPN 社区版

- **作者**: @AnyoneFDN
- **时间**: 2026-08-26 21:54 UTC
- **视频**: 约 17 秒
- **亮点**: 桌面 VPN 社区版支持 macOS / Windows / Linux，可保护整机流量、按应用自定义出口与路径。
- **互动**: 3.8k+ 浏览、133 赞
- **分类建议**: consumer
- **链接**: https://x.com/AnyoneFDN/status/2092732558454768064

## 13. Google — Pixel 11 Pro 开箱

- **作者**: @Google
- **时间**: 2026-08-26 22:09 UTC
- **视频**: 约 33 秒竖屏开箱
- **亮点**: 官方 #MadeByGoogle 开箱新 Pixel 11 Pro。硬件发布视频范式。
- **互动**: 7.5 万+ 浏览、380 赞
- **分类建议**: hardware / consumer
- **链接**: https://x.com/Google/status/2092736340198638027

## 14. Gemini App — 对话内交互式 3D 可视化

- **作者**: @Google
- **时间**: 2026-08-26 14:28 UTC
- **视频**: 约 18.5 秒
- **亮点**: 对话中直接把复杂问题变成可交互可视化（分子旋转、物理仿真等）。
- **互动**: 18 万+ 浏览、950+ 赞
- **分类建议**: ai / consumer
- **链接**: https://x.com/Google/status/2092620237908631795

## 15. OpusClip × beehiiv — MCP 一键全渠道

- **作者**: @OpusClip
- **时间**: 2026-08-26 16:30 UTC
- **视频**: 约 64 秒
- **亮点**: 新 MCP 与 beehiiv MCP 组合：Claude 从 OpusClip 取最新视频项目，写成复盘邮件并在 beehiiv 建快讯。
- **互动**: 10 万+ 浏览、127 赞
- **分类建议**: ai / productivity
- **链接**: https://x.com/OpusClip/status/2092650962678907023

## 16. Ammaar Reshi — 用 Gemini 3.5 Transcribe 做出的 Wispr Flow 风应用

- **作者**: @ammaar（Google AI Studio 产品+设计）
- **时间**: 2026-08-26 17:14 UTC
- **视频**: 约 126 秒
- **亮点**: 用新模型 vibe code 出类 Wispr Flow 的语音输入应用，并承诺开源。是「模型发布 + 即时做出可用产品」的高质量案例。
- **互动**: 14 万+ 浏览、559 赞、485 收藏
- **分类建议**: ai / design / developer-tools
- **链接**: https://x.com/ammaar/status/2092662017517600823

## 17. Indie OS — Notion 工作区组合系统

- **作者**: @sudosriram
- **时间**: 2026-08-26 15:26 UTC
- **视频**: 约 116 秒 walkthrough
- **亮点**: 独立开发者首个产品上线。计划工作、跟踪执行速度，并在发布过程中生成直播组合。整个系统建在 Notion workspace 上。
- **分类建议**: productivity
- **链接**: https://x.com/sudosriram/status/2092634855674900758

## 18. Palmier — H3 Max 接入 AI 视频编辑器

- **作者**: @Palmier_io
- **时间**: 2026-08-26 21:54 UTC
- **视频**: 约 36 秒（强调未加速）
- **亮点**: fal Research 的 H3 Max 进入 Palmier。15 秒 720p 约 14 秒出片、约 $0.5。
- **分类建议**: ai / motion
- **链接**: https://x.com/Palmier_io/status/2092732345308901484

## 19. Framer — Chromatic Aberration shader

- **作者**: @framer
- **时间**: 2026-08-26 18:08 UTC
- **视频**: 约 23 秒
- **亮点**: 让 Framer Agent 给现有视频加上色散 shader，几秒内让网站更动态。
- **互动**: 4.1k+ 浏览、49 赞
- **分类建议**: design / motion
- **链接**: https://x.com/framer/status/2092675489676796018

## 20. Music by Recoup — AI 完整歌曲生成

- **作者**: @sweetman_eth
- **时间**: 2026-08-26 22:29 UTC
- **视频**: 约 369 秒长演示
- **亮点**: 输入 prompt 与歌词，几分钟内生成完整歌曲，版权归用户。https://app.recoupable.dev/music
- **分类建议**: ai / consumer
- **链接**: https://x.com/sweetman_eth/status/2092741306673975399

## 21. Databricks — Grok 4.6 上线 Lakehouse

- **作者**: @databricks
- **时间**: 2026-08-26 22:56 UTC
- **视频**: 约 5 秒
- **亮点**: xAI Grok 4.6 现可在 Databricks 使用。官方称在 OfficeQA Pro v2（企业文档复杂推理）上达到新 SOTA，数据不出 Lakehouse，经 Unity Gateway 治理调用。
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/databricks/status/2092748152273072195

## 22. Novita AI — GLM-5.3-Flash Day-0 上线

- **作者**: @novita_labs
- **时间**: 2026-08-26 18:00 UTC
- **视频**: 约 12 秒
- **亮点**: Z.ai GLM-5.3-Flash：320B 总参 / 18B 激活、1M 上下文、原生多模态，面向高效编程与长程 Agent。同步上线 Hugging Face。
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/novita_labs/status/2092673546380329048

## 23. MiniMax Agent — H3 动态图 / 白模渲染插件

- **作者**: @RenLeanna（MiniMax / Hailuo）
- **时间**: 2026-08-26 19:54 UTC
- **视频**: 约 8 秒
- **亮点**: @MiniMaxAgent 刚上线基于 H3 的动态图像与白模渲染插件，仍在调白模质量，但已可玩。
- **互动**: 45 赞、17 收藏
- **分类建议**: ai / design
- **链接**: https://x.com/RenLeanna/status/2092702228947902622

## 24. Shotbase — Mac 截图 + 录屏（独立开发者跟进帖）

- **作者**: @dudufolio（@shotbaseapp）
- **时间**: 2026-08-26 20:55 UTC（跟进）；主发布 08-25 已在昨日汇总
- **视频**: 约 58 秒
- **亮点**: 独立开发者再次强调 Shotbase 已上线。主条目见 08-26 汇总 https://x.com/shotbaseapp/status/2092369801612337601 ，本条为带视频的「Just launched」跟进，避免重复入库。
- **分类建议**: productivity / design
- **链接**: https://x.com/dudufolio/status/2092717671628607693

## 25. Linear 发布片 — 独立动态设计师作品（motion）

- **作者**: @BhaskarVisuals
- **时间**: 2026-08-25 14:05 UTC
- **视频**: 约 26 秒（3D + 反应式声音设计）
- **亮点**: 为 @linear 制作 26 秒发布片，叙事为 Idea → Plan → Align → Focus → Ship。属于 motion 类 launch film，不是 Linear 官方功能 drop。
- **分类建议**: motion / design
- **链接**: https://x.com/BhaskarVisuals/status/2092251902385807543

## 26. Marmarapp — 新移动端发布片（独立动态设计师）

- **作者**: @tomiwebstr
- **时间**: 2026-08-25 09:01 UTC
- **视频**: 约 38 秒（AE + Blender + Premiere）
- **亮点**: 为 @Marmarapp 新移动应用制作的发布片，互动较高（440 赞、96 转发、1.5 万浏览）。典型独立设计师 launch film。
- **分类建议**: motion / consumer
- **链接**: https://x.com/tomiwebstr/status/2092175528396493189

## 27. NFL Gametime on X — SpaceXAI 设计的观赛产品

- **作者**: @XBusiness
- **时间**: 2026-08-26 23:17 UTC
- **视频**: 约 61 秒
- **亮点**: 与 NFL 合作、由 SpaceXAI 设计的 NFL Gametime：时间线 + Hub，把比赛与对话放在同一高级目的地。属平台级新产品发布片。
- **互动**: 106 赞、5880 浏览
- **分类建议**: consumer / other
- **链接**: https://x.com/XBusiness/status/2092753368422760629

## 28. 643 Mobile / Player Tools — 棒球数据移动端上架 App Store

- **作者**: @643charts
- **时间**: 2026-08-26 22:13 UTC
- **视频**: 约 19 秒竖屏
- **亮点**: 面向 NCAA/NAIA 的 Trackman 可视化、视频文件夹/播放列表、教练与球员移动报告。V1 已上架 Apple App Store。
- **分类建议**: consumer / productivity
- **链接**: https://x.com/643charts/status/2092737109241033158

## 29. Shadcn UI Kit — 文本转语音 Web App 模板上线

- **作者**: @TobyBelhome
- **时间**: 2026-08-26 20:59 UTC
- **视频**: 约 14 秒
- **亮点**: 新 web app 模板进入 Shadcn UI Kit，演示文本转语音后台。预览：https://shadcnuikit.com/dashboard/apps/text-to-speech
- **分类建议**: developer-tools / design
- **链接**: https://x.com/TobyBelhome/status/2092718511500009563

## 30. Markdown Easy Editor — Obsidian 插件（独立开发者）

- **作者**: @NeedMoreRoblox
- **时间**: 2026-08-27 00:01 UTC
- **视频**: 约 48 秒
- **亮点**: Obsidian 侧边栏工具栏插件，一键插入标题/列表/表格/Callout，含中英文界面与 AI 文本清理。
- **分类建议**: developer-tools / productivity
- **链接**: https://x.com/NeedMoreRoblox/status/2092764340583809091

---

## 已过滤（不入库）

- 游戏宣发 / 电竞 / 影视剧集（如 Shadow Dungeon、Ninjago、RogueGods 预告）。
- 纯二次传播长视频（Whop CLI 解说号、Grok Bot 交易台自述、CapCut 营销号搬运 Seedance）。
- 08-26 汇总已收录：Yarn、Higgsfield Ad Multiplier、ChatGPT Business Premium、Shotbase 主帖、Edgerun、Savee MCP、Monid、Linear merge queue、OpenAI Jalapeño。
- Runway WAN 3.0（08-24）超出本次 24–36 小时主窗口，仅作背景。

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（x_keyword_search 搭配 `filter:videos` + `since:2026-08-25/26` + `min_faves` + launched/now live/introducing/just shipped；指定 from: watchlist 账号；x_semantic_search 检索产品发布与独立开发者 demo）。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-27-zh-summary.md` 写入 inbox（与其它 discovery PR 合并时用 `node scripts/merge-inbox.mjs` 做并集，避免整文件覆盖丢掉 pending）。再按 AGENTS.md 配方正式发布。
