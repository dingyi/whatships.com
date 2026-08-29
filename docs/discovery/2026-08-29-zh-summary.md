# 2026-08-29 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（`x_keyword_search` / `x_semantic_search` / `x_thread_fetch`），针对产品设计、科技公司、AI 公司及个人开发者发布的**带视频**帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / now available / product launch，并覆盖 watchlist 里的 Vercel、Runway、OpenAI、Framer、Linear、Replit、GitHub 等账号。

时间范围：2026-08-28 至 2026-08-29。已排除政治广告、纯娱乐、电竞、游戏宣发与无关教程。

与开放 PR #96（`discoveries/2026-08-29-product-launch-videos.md`）互补；本文件为仓库既定 `docs/discovery/*-zh-summary.md` 格式，并补上 #96 漏掉的高信号官方条目（尤其是 Vercel Eve Agent、Runway Omni 1.1 Flash、ChatGPT 周更、Exa Dynamic Highlights、Replit Growth Skills）。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-29-zh-summary.md
```

---

## 1. Firecrawl — Free Keyless 正式发布

- **作者**: @ericciarla（Firecrawl / YC S22）
- **时间**: 2026-08-28 16:31 UTC
- **视频**: 约 32 秒
- **亮点**: 正式推出 Free Keyless：AI Agent 可免费搜索与抓取任意网页，无需 API Key 或注册。SimpleQA 搜索准确率 94.7%，任意页面亚 3 秒转成干净 Markdown。官方短视频 + CLI 一键初始化演示。
- **互动**: 3180+ likes / 22 万+ views
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/ericciarla/status/2093375835679977570
- **产品**: https://www.firecrawl.dev/blog/firecrawl-keyless-launch

## 2. Diffusion Studio — 开源视频编辑器：每次编辑都变成代码

- **作者**: @konstipaulus（Diffusion Studio / YC F24）
- **时间**: 2026-08-28 14:26 UTC
- **视频**: 约 42 秒
- **亮点**: 开源视频编辑器把每一次编辑转成可检查、可修改的代码，解决 Agent 丢上下文与不可编辑输出的问题。手动改完可转成可复用技能并批量应用。GitHub：https://github.com/diffusionstudio/editor
- **互动**: 1490+ likes / 6.8 万+ views
- **分类建议**: developer-tools / motion / ai
- **链接**: https://x.com/konstipaulus/status/2093344586315747706

## 3. Vercel — 一分钟发布 Eve Agent

- **作者**: @vercel
- **时间**: 2026-08-28 15:47 UTC
- **视频**: 约 25 秒
- **亮点**: 官方发布片：在 https://vercel.com/new/agent 填 prompt、选模型与 MCP、部署即可上线一个可对话的 Eve Agent，后端是用户自己拥有的 Git 仓库。是当日 watchlist 账号里互动最高的开发者工具发布之一。
- **互动**: 479 likes / 34 reposts / 309 bookmarks / 7.3 万+ views
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/vercel/status/2093364921073549667

## 4. Runway — Google Omni 1.1 Flash 上线

- **作者**: @runwayml
- **时间**: 2026-08-28 14:25 UTC
- **视频**: 约 27 秒
- **亮点**: Google Omni 1.1 Flash 正式进入 Runway，与平台现有图像/视频模型并列可用。08-27 的 Google 官方发布已在 `discoveries/2026-08-28` 记录；本条是模型在创作平台侧的 Day-0 上架视频。
- **互动**: 106 likes / 1.2 万+ views
- **分类建议**: ai / motion
- **链接**: https://x.com/runwayml/status/2093344307021545601

## 5. ChatGPT — 08-28 周更功能包

- **作者**: @adamhfry（ChatGPT Consumer Product Lead）
- **时间**: 2026-08-28 22:33 UTC
- **视频**: 两段，约 29 秒 + 30 秒（4K + 竖屏）
- **亮点**: OpenAI 产品负责人汇总本周发布：免费用户可用定时任务、Imagegen 贴纸包（iMessage / WhatsApp）、临时对话可存回侧边栏、Google 插件多账号、iOS 锁屏 Live Activity 语音控件。线程里还引用 @hannahsgao / @gabrielchua / @Gavmn 的分功能视频。
- **互动**: 246 likes / 1.7 万+ views
- **分类建议**: ai / consumer
- **链接**: https://x.com/adamhfry/status/2093467062995918992

## 6. Exa — Dynamic Highlights 研究预览

- **作者**: @ExaAILabs
- **时间**: 2026-08-28 17:48 UTC
- **视频**: 约 5 秒
- **亮点**: 发布 research preview：自定义模型联合扫描一组页面，过滤重复与无关信息，平均减少 95% token 消耗。https://exa.ai/blog/dynamic-highlights
- **互动**: 200 likes / 159 bookmarks / 3.8 万+ views
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/ExaAILabs/status/2093395399608578235

## 7. NVIDIA — Nemotron 3.5 Lightning 开源模型

- **作者**: @nvidia
- **时间**: 2026-08-28 18:03 UTC
- **视频**: 约 57 秒
- **亮点**: 紧凑、可高度定制的开源模型，面向始终在线 Agent 的快速专业任务。Kari Briski 出镜讲解在 Agent 工作流中的加速价值。
- **互动**: 140+ likes / 3.5 万+ views
- **分类建议**: ai
- **链接**: https://x.com/nvidia/status/2093399189690691994

## 8. Lightreel AI — Cursor for finding influencers

- **作者**: @lightreelai
- **时间**: 2026-08-28 13:59 UTC
- **视频**: 约 21 秒
- **亮点**: 用自然语言描述理想创作者，系统搜索数百万条 TikTok / Reels 找到匹配。高清视频直接演示搜索流程。
- **互动**: 650+ likes / 28 万+ views
- **分类建议**: ai / productivity
- **链接**: https://x.com/lightreelai/status/2093337614145212685

## 9. Replit — Growth Skills 上线

- **作者**: @Replit
- **时间**: 2026-08-28 19:00 UTC
- **视频**: 约 66 秒
- **亮点**: 用 Agent 做出产品之后，Growth Skills 把获客流程打包成可用技能。首批合作：ZoomInfo、Apollo、Clay、Sideshift、RevenueCat、Stripe、PostHog。
- **互动**: 160 likes / 150 bookmarks / 6.2 万+ views
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/Replit/status/2093413457924166045

## 10. HumanPost — 真人美国运营的 TikTok 分发军

- **作者**: @itsmehakvohra（@humanpostco）
- **时间**: 2026-08-28 21:21 UTC
- **视频**: 约 50 秒
- **亮点**: 独立团队发布 HumanPost：品牌可雇用 10 / 100 / 1000 个由美国真人运营、已养号的专属社交账号批量发 TikTok，强调零 VPN、本土运营者。
- **互动**: 87 likes / 94 bookmarks / 7.2k+ views
- **分类建议**: productivity / other
- **链接**: https://x.com/itsmehakvohra/status/2093448950384820647

## 11. leadbee.io — 粘贴 URL 生成启动视频

- **作者**: @MakerThrive
- **时间**: 2026-08-28 16:31 UTC
- **视频**: 约 30 秒
- **亮点**: 独立开发者把 Firecrawl + ElevenLabs + Remotion + Clerk 组成「产品页 → 启动片」工具。与 whatships 定位高度相关。https://leadbee.io
- **互动**: 100+ likes / 1 万+ views
- **分类建议**: design / motion / ai
- **链接**: https://x.com/MakerThrive/status/2093376058246516965

## 12. Modal / Databricks / Together — GLM 5.3 Day-0 上线

- **作者**: @modal / @databricks / @togethercompute
- **时间**: 2026-08-28 22:07 UTC 起
- **视频**: Modal 约 4 秒；其余为短宣告片
- **亮点**: Z.ai GLM 5.3 在多家推理平台 Day-0 上架。Databricks 强调 Unity Gateway 治理；Together 强调编码与长程 Agent 性能。
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/modal/status/2093460425128002042

## 13. Polsia for Schools — AI Agent 批改作业

- **作者**: @coderpr0grammer（YC / Units School）
- **时间**: 2026-08-28 21:44 UTC
- **视频**: 约 201 秒 walkthrough
- **亮点**: 教师端 AI Agent 团队即时批改并返回学生作业，过去一年已在真实教室使用。
- **互动**: 早期（15 likes / 690+ views）
- **分类建议**: ai / productivity
- **链接**: https://x.com/coderpr0grammer/status/2093454797924151322

## 14. Mentra Call — 智能眼镜人工远程协作

- **作者**: @caydengineer（MentraGlass CEO）
- **时间**: 2026-08-28 19:57 UTC
- **视频**: 约 72 秒
- **亮点**: Physical AI 之外，智能眼镜需要人类专家远程看到现场并指导排障。Mentra Call 预计 10 月更广发布。
- **互动**: 49 likes / 3.2k+ views
- **分类建议**: hardware / productivity
- **链接**: https://x.com/caydengineer/status/2093427830571114843

## 15. Fluoddity — 粒子自组织探索工具

- **作者**: @OA_paperclips
- **时间**: 2026-08-28 21:08 UTC
- **视频**: 约 18 秒
- **亮点**: 数十万粒子通过突变与人工选择自组织成结构。个人工具被 Opus 5 重做成 Web。https://Fluoddity.com
- **互动**: 70 likes / 2.1k+ views
- **分类建议**: other / design
- **链接**: https://x.com/OA_paperclips/status/2093445516919279867

## 16. beUI Pro — Animated Illustrations 上线

- **作者**: @saurra3h
- **时间**: 2026-08-28 20:56 UTC
- **视频**: 约 43 秒
- **亮点**: beUI Pro 动画插画库上线：23 张可定制插画，面向功能卡、产品区、工作流与 UI 状态。https://pro.beui.dev/illustrations
- **互动**: 50 likes / 49 bookmarks
- **分类建议**: design / developer-tools
- **链接**: https://x.com/saurra3h/status/2093442534022185425

---

## 已过滤（不入库）

- 政治广告评级、俄罗斯 ICBM 试射、足球转会宣发、Apple Music K-Pop 专辑、GTA6 / 独立游戏 demo。
- 纯加密货币上币 / staking / RWA swap（NTRPY、InkBrokers 等）。
- Figma Shader Town 活动、Runway AI Summit / HORSE 游戏、GitHub Universe 祭、Replit 伦敦办公室派对——活动宣传而非产品上线。
- Linear 产品团队用 Loops 整理销售通话：更像案例视频而非 Linear 本身功能 drop。
- Framer Agents 「帮你快速做网站」广告片（非新功能发布）。
- Grok Build CLI v1.0.13 changelog 播报号（非产品发布片）。
- Shotbase 主发布已在 08-25/26 汇总；08-28 是互动跟进帖。
- Microduck 二次解说（@coinbureau 等）；官方主帖已在 08-28 discoveries。

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（`x_keyword_search` 搭配 `filter:videos` + `since:2026-08-28` + `min_faves` + launched/now live/introducing/just shipped；`from:` watchlist 账号；`x_semantic_search` 检索产品发布与独立开发者 demo；`x_thread_fetch` 核对 Vercel / ChatGPT 主帖上下文）。**未使用任何其他 API 或第三方服务**。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-29-zh-summary.md`。与 PR #96 合并时用 `node scripts/merge-inbox.mjs` 做并集，避免整文件覆盖掉 pending。再按 AGENTS.md 配方正式发布。
