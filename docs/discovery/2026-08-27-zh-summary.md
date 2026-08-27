# 2026-08-27 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / product launch / MCP / computer-use 等，并覆盖 watchlist 里的 OpenAI、Google、Runway、Framer 等账号。

时间范围：2026-08-26 至 2026-08-27。已排除政治、游戏宣发、娱乐与纯教程类内容。Perplexity Portable Computer（tweetId `2092268362386780270`）已出现在 `docs/discovery/2026-08-26-grok-summary.md`，本次不重复。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-27-zh-summary.md
```

---

## 1. Google — Gemini 3.5 Transcribe语音转文字模型

- **作者**: @Google
- **时间**: 2026-08-26 17:03 UTC
- **视频**: 约 10 秒主帖 + 线程内多段演示（macOS Gemini App 约 128 秒、能力解析 约 45 秒、Android Rambler 约 29 秒）
- **亮点**: Google 推出至今最精准的语音转文字模型 Gemini 3.5 Transcribe。支持 85+ 语言与方言，自动去除语气词、处理自我纠正、理解意图，可区分最多 3 位说话人并打时间戳。已在 Gemini App（macOS）与 Android Rambler 上线，开发者可在 AI Studio / Gemini API 使用。@GoogleAIStudio、@antigravity、@sundarpichai 同步发布带视频帖。
- **互动**: 36 万+ 浏览、3600+ 赞、310+ 转发、1100+ 收藏
- **分类建议**: ai / productivity / developer-tools
- **链接**: https://x.com/Google/status/2092659278632894576

## 2. Yutori — Navigator n2 计算机使用模型

- **作者**: @deviparikh（Yutori 联合 CEO）
- **时间**: 2026-08-26 16:17 UTC
- **视频**: 约 123 秒主演示 + 67 秒接口交错演示
- **亮点**: 正式发布 Navigator n2：仅 27B 参数的前沿 computer-use 模型。能智能交错使用 GUI、CLI 与短代码片段，在 Linux 与 macOS 上完成长周期真实任务，推进成本-精度 Pareto 前沿。试用：https://yutori.com/n2 博客：https://yutori.com/blog/introducing-n2
- **互动**: 8.7 万+ 浏览、380+ 赞、35 转发、220+ 收藏
- **分类建议**: ai / developer-tools / agent
- **链接**: https://x.com/deviparikh/status/2092647579163251007

## 3. X Developers — Chat Agents + Chat API / Chat XDK

- **作者**: @XDevelopers
- **时间**: 2026-08-26 21:45 UTC
- **视频**: 约 40 秒官方介绍
- **亮点**: X 开发者平台推出 Chat Agents，基于新的 X Chat API 与 Chat XDK。同线程给出从 0 到 Chat Agent 的官方骨架：https://github.com/xdevplatform/xchat-agent-skeleton 文档：https://docs.x.com/xchat/bots
- **互动**: 7.5 万+ 浏览、620+ 赞、64 转发、240+ 收藏
- **分类建议**: developer-tools / ai / productivity
- **链接**: https://x.com/XDevelopers/status/2092730108041695449

## 4. Motion — 用网址生成产品发布视频

- **作者**: @motion_so（Mosaic）
- **时间**: 2026-08-26 22:22 UTC
- **视频**: 约 22 秒演示（4K）
- **亮点**: 自称「发布视频界的 Netflix」。投入产品网址后，Motion 自动生成带动效、旁白、音乐与字幕的 launch video。与 whatships 本身定位高度相关的创作工具产品更新。https://motion.so
- **互动**: 2.1k+ 浏览、22 赞、19 收藏
- **分类建议**: design / motion / ai / creative-tools
- **链接**: https://x.com/motion_so/status/2092739438765818133

## 5. each::labs — Video API MCP 上线

- **作者**: @eachlabs
- **时间**: 2026-08-26 12:59 UTC
- **视频**: 约 49 秒演示
- **亮点**: each::labs MCP 正式上线。Claude Code / Codex 可直接调用整套 Video API：重构帧、字幕、剪辑、缩略图等 44 项操作。用文本描述剪辑意图，Agent 返回渲染好的成片。
- **互动**: 2.0k+ 浏览、30 赞
- **分类建议**: ai / developer-tools / motion / mcp
- **链接**: https://x.com/eachlabs/status/2092597866032197892

## 6. Runway — Muse Image（Meta）上线

- **作者**: @runwayml
- **时间**: 2026-08-26 17:46 UTC
- **视频**: 约 20 秒
- **亮点**: Runway 宣布 Meta 的 Muse Image 模型正式可用，与平台现有顶尖图像与视频模型并列。官方短视频直接展示可用性，是 AI 创作平台快速接入新模型的典型发布。
- **互动**: 1.2 万+ 浏览、81 赞、14 转发
- **分类建议**: ai / design / creative-tools
- **链接**: https://x.com/runwayml/status/2092670079070822579

## 7. ANyONe Protocol — Desktop VPN 社区版

- **作者**: @AnyoneFDN
- **时间**: 2026-08-26 21:54 UTC
- **视频**: 约 17 秒
- **亮点**: Anyone 正式发布桌面 VPN 社区版，支持 macOS / Windows / Linux。可保护整机流量、按应用自定义出口与路径。官方视频简洁展示核心能力，是去中心化隐私网络的重要客户端上线。
- **互动**: 3.8k+ 浏览、133 赞、36 转发
- **分类建议**: consumer / hardware / other
- **链接**: https://x.com/AnyoneFDN/status/2092732558454768064

## 8. Google — Pixel 11 Pro 开箱

- **作者**: @Google
- **时间**: 2026-08-26 22:09 UTC
- **视频**: 约 33 秒竖屏开箱
- **亮点**: 官方 #MadeByGoogle 开箱新 Pixel 11 Pro。属硬件产品发布视频范式，纯洁展示机身与包装，互动高于同日其他硬件帖。
- **互动**: 7.2 万+ 浏览、369 赞、39 转发
- **分类建议**: hardware / consumer
- **链接**: https://x.com/Google/status/2092736340198638027

## 9. Gemini App — 聊天内一句话交互式 3D 可视化

- **作者**: @Google
- **时间**: 2026-08-26 14:28 UTC
- **视频**: 约 18.5 秒
- **亮点**: Gemini App 可在对话中直接把复杂问题变成可交互可视化（分子旋转、物理仿真等）。提示以 “show me...” 开始效果最好，建议用 Flash 模型。属于产品内功能更新而非纯模型发布。
- **互动**: 18 万+ 浏览、950+ 赞、108 转发、260 收藏
- **分类建议**: ai / productivity / consumer
- **链接**: https://x.com/Google/status/2092620237908631795

## 10. OpusClip × beehiiv — MCP 一键全渠道

- **作者**: @OpusClip
- **时间**: 2026-08-26 16:30 UTC
- **视频**: 约 64 秒
- **亮点**: OpusClip 新 MCP 可与 beehiiv MCP 组合：用 Claude 从 OpusClip 拿最新视频项目，写成复盘邮件并在 beehiiv 里建好快讯。视频完整演示 Agent 串联流程。
- **互动**: 10 万+ 浏览、127 赞、19 转发
- **分类建议**: ai / productivity / marketing / mcp
- **链接**: https://x.com/OpusClip/status/2092650962678907023

## 11. Ammaar Reshi — 用 Gemini 3.5 Transcribe 玩出的 Wispr Flow 风应用

- **作者**: @ammaar（Google AI Studio 产品+设计）
- **时间**: 2026-08-26 17:14 UTC
- **视频**: 约 126 秒演示
- **亮点**: Google AI Studio 产品设计负责人用新模型 vibe code 出类 Wispr Flow 的语音输入应用，并承诺开源。视频长、交互清晰，是「模型发布 + 即时做出可用产品」的高质量案例。
- **互动**: 14 万+ 浏览、559 赞、37 转发、485 收藏
- **分类建议**: ai / design / developer-tools / productivity
- **链接**: https://x.com/ammaar/status/2092662017517600823

## 12. Indie OS — 独立开发者的 Notion 工作区组合系统

- **作者**: @sudosriram
- **时间**: 2026-08-26 15:26 UTC
- **视频**: 约 116 秒 walkthrough
- **亮点**: 独立开发者首个产品上线。Indie OS 帮助打破完美主义：计划工作、跟踪执行速度，并在发布过程中生成直播组合。整个系统建在 Notion workspace 上，视频完整演示交互。
- **互动**: 早期较低
- **分类建议**: productivity / other / indie
- **链接**: https://x.com/sudosriram/status/2092634855674900758

## 13. Palmier — H3 Max 接入 AI 视频编辑器

- **作者**: @Palmier_io
- **时间**: 2026-08-26 21:54 UTC
- **视频**: 约 36 秒（强调未加速）
- **亮点**: fal Research 的 H3 Max 现已进入 Palmier。15 秒 720p 片段约 14 秒出图、约 $0.5。官方主帖为图文，此帖是带真实生成速度演示的平台接入发布。
- **互动**: 1.2k+ 浏览、25 赞
- **分类建议**: ai / motion / creative-tools
- **链接**: https://x.com/Palmier_io/status/2092732345308901484

## 14. Framer — Chromatic Aberration shader

- **作者**: @framer
- **时间**: 2026-08-26 18:08 UTC
- **视频**: 约 23 秒
- **亮点**: 让 Framer Agent 给现有视频加上色散 shader，几秒内让网站更动态—玻璃曲面与彩色分散。属于设计工具的高信号小功能 drop。
- **互动**: 4.1k+ 浏览、49 赞、22 收藏
- **分类建议**: design / motion
- **链接**: https://x.com/framer/status/2092675489676796018

## 15. Music by Recoup — AI 完整歌曲生成（独立开发者）

- **作者**: @sweetman_eth
- **时间**: 2026-08-26 22:29 UTC
- **视频**: 约 369 秒长演示
- **亮点**: 独立开发者正式推出 Music by Recoup：输入 prompt 与歌词，几分钟内生成完整歌曲，版权归用户。视频演示 Web App、Recoup Chat 写词、编码 Agent 全自动三条路径。https://app.recoupable.dev/music
- **互动**: 早期较低
- **分类建议**: ai / consumer / other
- **链接**: https://x.com/sweetman_eth/status/2092741306673975399

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（x_keyword_search 搭配 `filter:videos` + `since:2026-08-25/26` + `min_faves` + launched/now live/introducing/just shipped/MCP；x_semantic_search 语义检索产品发布与独立开发者 demo；x_thread_fetch 补全 X Chat Agents、Yutori n2、Motion 线程）。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-27-zh-summary.md` 写入 inbox，再按 AGENTS.md 配方（syndication 补全 → posters:capture → 合并至 videos.json）正式发布。
