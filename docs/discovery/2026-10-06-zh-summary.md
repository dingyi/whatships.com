# 2026-10-06 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch）。窗口：2026-10-05 13:21 UTC 至 2026-10-06 13:20 UTC（约 CST 21:21 至次日 21:20）。与 10-05 文档互补，不重复 Promethee / Melty / GitHub Copilot 并排审阅 / gyotaku / Legora Skills / Vivix W1 / Watchtower 等已入队条目。排除阅读 < 500，以及政治、娱乐、体育、音乐、代币 / NFT、纯游戏与无关教程。不改 `src/data/videos.json` 或 `inbox.json`。

官方大厂以功能片为主：Devin 记忆、Cursor SDK steer、Figma Motion 文字与音频、Framer SEO skill。独立开发者侧有 Genex、medula、Letra、omni-macos。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-06-zh-summary.md
```

---

## 1. Devin Dreaming / Agent Memory Repo

- **作者**：@cognition
- **时间**：2026-10-05 17:44 UTC
- **视频**：约 34 秒
- **亮点**：Introducing Dreaming。跨会话 Devin 建工作方式的记忆图，夜间自我清理过期记录并挖潜在信息。同步开源标准 Agent Memory Repo，记忆以文件存放并用 Git 版本管理。https://cognition.com/agent-memory-repo https://devin.ai/blog/memory-and-dreaming
- **互动**：约 2201 赞、171 转发、128 引用、116 回复、2012 收藏、45.1 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/cognition/status/2107165034463867001
- **tweetId**：2107165034463867001

---

## 2. Genex desktop

- **作者**：@genex_games
- **时间**：2026-10-05 16:39 UTC
- **视频**：约 62 秒
- **亮点**：Introducing Genex。用 AI 做游戏的开源桌面应用，MIT。本地模型或 Claude Code / ChatGPT 订阅，自改进 harness，Three.js + Blender / Meshy，Unity 与 Unreal 插件预告。https://genex.games/desktop 制作工具，不是游戏发行片。
- **互动**：约 3212 赞、282 转发、29 引用、120 回复、4157 收藏、15.3 万+浏览
- **分类建议**：developer-tools / design
- **链接**：https://x.com/genex_games/status/2107148754633507237
- **tweetId**：2107148754633507237

---

## 3. Cursor SDK steer

- **作者**：@cursor_ai
- **时间**：2026-10-05 16:08 UTC
- **视频**：约 20 秒
- **亮点**：运行中的 Cursor SDK agent 可以被纠偏。`run.steer()` 把消息加入下一轮；子 agent 中途任务会转到后台继续。
- **互动**：约 1231 赞、81 转发、57 引用、128 回复、205 收藏、11.0 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/cursor_ai/status/2107141004482793827
- **tweetId**：2107141004482793827

---

## 4. Vesence Inbox

- **作者**：@VesenceAI（YC，Paul Graham / Anton Osika 等背书）
- **时间**：2026-10-05 19:10 UTC
- **视频**：约 25 秒
- **亮点**：Introducing Vesence Inbox。点击说话，agent 清收件箱。免费试用。https://www.vesence.com/
- **互动**：约 35 赞、4 转发、5 引用、1 回复、29 收藏、6.4 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/VesenceAI/status/2107186717426069928
- **tweetId**：2107186717426069928

---

## 5. Figma Motion 文字动画与音频

- **作者**：@figma
- **时间**：2026-10-05 18:57 UTC
- **视频**：约 45 秒
- **亮点**：Figma Motion 现在支持文字动画和音频。功能发布片，不是新产品首发。
- **互动**：约 557 赞、48 转发、25 引用、31 回复、161 收藏、4.1 万+浏览
- **分类建议**：design / motion
- **链接**：https://x.com/figma/status/2107183336724836358
- **tweetId**：2107183336724836358

---

## 6. On Design

- **作者**：@getondesign（创始人 @CharlesPattson 同日同片）
- **时间**：2026-10-06 04:55 UTC
- **视频**：约 33 秒
- **亮点**：Introducing on.design。给设计师的新社区：无算法、无广告。https://on.design/ 创始人帖浏览约 2.9 万。
- **互动**：官方帖约 107 赞、2 转发、16 回复、28 收藏、2.6 万+浏览
- **分类建议**：design / consumer
- **链接**：https://x.com/getondesign/status/2107333887026491811
- **tweetId**：2107333887026491811

---

## 7. T3 Code e2e suite

- **作者**：@o_kwasniewski（@TesterArmy，YC P26）
- **时间**：2026-10-05 19:17 UTC
- **视频**：约 80 秒
- **亮点**：给 T3 Code 做的 e2e 测试套件：40 个测试覆盖 6 个 coding agent（Codex、Claude、Grok、OpenCode、Pi、Antigravity），在 CLI 层 mock。已抓到 Stop 不会停止仍在启动的轮次。
- **互动**：约 229 赞、13 转发、28 回复、147 收藏、1.7 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/o_kwasniewski/status/2107188490991804789
- **tweetId**：2107188490991804789

---

## 8. Agently

- **作者**：@omarships（@Agently_AI）
- **时间**：2026-10-05 23:05 UTC
- **视频**：约 89 秒
- **亮点**：Introducing Agently。接管 Mac，连公司知识库和团队工具，围绕需要关注的事做个人 agent。
- **互动**：约 60 赞、2 转发、3 引用、10 回复、51 收藏、6600+浏览
- **分类建议**：ai / consumer
- **链接**：https://x.com/omarships/status/2107245849344421931
- **tweetId**：2107245849344421931

---

## 9. medula

- **作者**：@posva（Vue 核心团队）
- **时间**：2026-10-06 07:29 UTC
- **视频**：约 37 秒
- **亮点**：Introducing medula。给 React / Vue / Svelte / Solid 的 agent 做的 devtools，可直接改组件内部状态。用 devframe 及其 MCP。https://github.com/posva/medula
- **互动**：约 111 赞、18 转发、2 引用、14 回复、47 收藏、5900+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/posva/status/2107372754773172545
- **tweetId**：2107372754773172545

---

## 10. Framer /seo-check

- **作者**：@framer
- **时间**：2026-10-05 21:00 UTC
- **视频**：约 22 秒
- **亮点**：在 Framer Agent 聊天里用 `/seo-check` skill 检查页面 metadata、社交预览、图片 alt 等 SEO 设置。功能演示片。
- **互动**：约 46 赞、4 转发、1 引用、10 回复、23 收藏、5300+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/framer/status/2107214422657872064
- **tweetId**：2107214422657872064

---

## 11. omni-macos

- **作者**：@hxiao（前 Jina AI）
- **时间**：2026-10-05 21:56 UTC
- **视频**：约 145 秒
- **亮点**：Introducing omni-macos。Apple Silicon 上的语义 Finder，本地多模态搜索，给人和 agent 用，支持实时 CRUD。早先发过，本帖是成为日用后的深度演示。
- **互动**：约 69 赞、3 转发、1 引用、8 回复、72 收藏、4200+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/hxiao/status/2107228465183506630
- **tweetId**：2107228465183506630

---

## 12. Letra for macOS

- **作者**：@nerdynikhil
- **时间**：2026-10-05 22:52 UTC
- **视频**：约 56 秒
- **亮点**：Introducing Letra。按 ⇧⌘２ 框选屏幕上的视频、会议共享、PDF、手写，文字进剪贴板。完全本地。https://getletra.app/
- **互动**：约 31 赞、2 转发、1 引用、6 回复、21 收藏、2500+浏览
- **分类建议**：productivity
- **链接**：https://x.com/nerdynikhil/status/2107242656267149387
- **tweetId**：2107242656267149387

---

## 13. Cursor for Android（第三方）

- **作者**：@BennettBuhner
- **时间**：2026-10-05 22:58 UTC
- **视频**：约 33 秒
- **亮点**：个人客户端，不是 Cursor 官方。可建项目与 agent、跨机器与云端、实时通知监督、接管 agent 桌面。发布在 GitHub。
- **互动**：约 33 赞、4 转发、3 引用、6 回复、5 收藏、1800+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/BennettBuhner/status/2107244105285726653
- **tweetId**：2107244105285726653

---

## 14. CSS Gradient Visualizer

- **作者**：@shadeed9
- **时间**：2026-10-06 05:28 UTC
- **视频**：约 17 秒
- **亮点**：分层查看 CSS gradient / mask 的小工具，也能看 CSS 绘画。https://lab.ishadeed.com/tools/gradient-visualizer/
- **互动**：约 28 赞、2 转发、1 回复、16 收藏、1500+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/shadeed9/status/2107342212417884459
- **tweetId**：2107342212417884459

---

## 跟进，不单独入队

- Devin Memory 走读（@dabit3，同一发布）：https://x.com/dabit3/status/2107255152008949951
- Cognition Ranch 招聘片：https://x.com/cognition/status/2107268310236795023
- Figma Source Material 播客片：https://x.com/figma/status/2107218148768235662
- HyperFrames Studio Product Hunt 提及（帖本身无视频）：https://x.com/liu8in/status/2107206695135154275
- AURIX 等待名单（浏览 < 500）：https://x.com/aurix_ai/status/2107152709141123200
- Sage 招聘对话（赞极低）：https://x.com/JafarNajafov/status/2107258165805084919
- On Design 创始人同片：https://x.com/CharlesPattson/status/2107335154272465376

## 已入队，不重复

Promethee、Melty、GitHub Copilot app 并排审阅、Pixel Art VFX Generator、Dialkit macOS、Framer Skills / 3D Agent、Oneira、CranL Agentic、X-Design、cinetic、gyotaku、手机 Hermes Agent、Aside PIP v2、d1-studio、Vivix W1、Time Machine、cache-warmer、Watchtower、Legora Skills、Havyn、shadcnuikit blocks。

## 排除

政治、体育、音乐发行、代币 / NFT、纯游戏剧情、二创广告模板、无关教程，以及阅读量低于 500 的帖子。Inventable 联盟模板、$MOTION、FIRM、EKO、Sato Hub、Gloam SDK、Ethena 稳定币白标与 CrawlScan 代币工具不入队。
