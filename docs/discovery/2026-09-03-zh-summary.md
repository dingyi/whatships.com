# 2026-09-03 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / MCP / agent / self-hosted 等，并覆盖 watchlist 账号与高互动独立开发者。

时间范围：2026-09-01 至 2026-09-03。已排除政治、纯娱乐、游戏宣发、加密货币代币与无关教程。与 09-01 / 09-02 已入库 / 已发现文档互补，重点补充本周期新出现的高信号官方与独立产品发布视频。

已核对本次主条目 tweetId（Cursor Self-Hosted Agents / Obsidian 1.14 / Video Delta Net / Wevi / Gemini 3.8 Flash / Omnara / Reactor MiniMax FastH3 / Sodium v2 / Runway Dev MCP / beui illustrations 等），未出现在 `src/data/videos.json` 中。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-03-zh-summary.md
```

---

## 1. Cursor — Self-Hosted Cloud Agents（自托管云代理）

- **作者**: @cursor_ai
- **时间**: 2026-09-02 21:07 UTC
- **视频**: 约 3 秒发布演示
- **亮点**: 现可在自有基础设施上运行 Cursor cloud agents，支持自动扩缩容的机器池。让 agent 访问内部服务或专用硬件，同时 agent loop 仍保留在 Cursor 内。支持 AWS Lambda、Coder、Cloudflare、Daytona、E2B、Modal、Namespace、Vercel 等沙箱。详情：https://cursor.com/blog/self-hosted-machines
- **互动**: 2048+ 赞、16.6 万+ 浏览、512 收藏
- **分类建议**: ai / developer-tools / infrastructure
- **链接**: https://x.com/cursor_ai/status/2095257412781396114

## 2. Obsidian 1.14.0 — Kanban 视图 + iOS 快速捕获

- **作者**: @obsdmd
- **时间**: 2026-09-02 22:48 UTC
- **视频**: 约 19 秒演示（含 iOS 快速捕获）
- **亮点**: Obsidian 1.14.0（early access）现对 Catalyst 会员开放桌面与移动端。新功能包括 Kanban 视图、iOS 新快速捕获 widget、支持用 emoji 做彩色高亮语法（==🔵blue==）。移动与桌面 changelog 已同步发布。
- **互动**: 164 赞、1 万+ 浏览、33 收藏
- **分类建议**: productivity / design / note-taking
- **链接**: https://x.com/obsdmd/status/2095282840305115159

## 3. Video Delta Net (VDN) — 开源实时文本生视频加速

- **作者**: @HaochengXiUCB
- **时间**: 2026-09-02 22:26 UTC
- **视频**: 约 70 秒发布演示 + 技术细节线程
- **亮点**: 推出 Video Delta Net（VDN）：混合注意力机制，实现近无损质量的实时 text-to-video。将 Minimax-H3 加速 75-90 倍，在 8× NVIDIA B200 上 11 秒生成 14 秒 768p 视频。开源 checkpoints、训练/推理代码与技术博客。GitHub：https://github.com/OpenVDN/vdn-minimax-h3
- **互动**: 402 赞、5.2 万+ 浏览、296 收藏
- **分类建议**: ai / open-source / video-generation
- **链接**: https://x.com/HaochengXiUCB/status/2095277190829260944

## 4. Wevi — SaaS 自动生成电影级发布视频

- **作者**: @WeviMotion
- **时间**: 2026-09-02 17:00 UTC
- **视频**: 约 119 秒产品演示
- **亮点**: 推出 Wevi。粘贴 URL，自动生成自定义 storyboard，直接从浏览器选择真实产品屏幕与 UI 组件，将真实 SaaS 界面变成电影级发布内容。前 2 个视频免费。站点：https://wevi.ai
- **互动**: 356 赞、9.7 万+ 浏览、89 收藏
- **分类建议**: ai / marketing / design / productivity
- **链接**: https://x.com/WeviMotion/status/2095195236397953268

## 5. Gemini 3.8 Flash — 更强智能工作马模型

- **作者**: @GoogleAI
- **时间**: 2026-09-02 15:43 UTC
- **视频**: 约 66 秒 agentic 演示
- **亮点**: 推出 Gemini 3.8 Flash，专为复杂 agentic 与多步任务打造。推理能力显著提升，可在 @antigravity 中结合原生视频理解与高级编码，自主构建 3D 游戏、找错误并执行代码修改，形成无缝 agentic 循环。支持 effort 控制以平衡成本。已对 Google AI Pro/Ultra 订阅用户及 API/Enterprise 可用。
- **互动**: 1688 赞、12.2 万+ 浏览、313 收藏
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/GoogleAI/status/2095175759606231439

## 6. Omnara — 开源 Claude Managed Agents 替代

- **作者**: @ishaansehgal（@omnaraai）
- **时间**: 2026-09-02 16:47 UTC
- **视频**: 约 65 秒产品演示
- **亮点**: 推出 Omnara：开源 Claude Managed Agents 替代方案。提供 API 用于创建与交互生产级 agent。用户构建 agent，Omnara 负责托管、持久状态、沙箱、权限、密钥等生产基础设施。现已可用。
- **互动**: 263 赞、4.4 万+ 浏览、162 收藏
- **分类建议**: ai / developer-tools / open-source
- **链接**: https://x.com/ishaansehgal/status/2095191849984225296

## 7. Reactor — MiniMax FastH3 流式生成

- **作者**: @reactorworld
- **时间**: 2026-09-02 22:08 UTC
- **视频**: 约 84 秒演示
- **亮点**: 在 Reactor 上推出 MiniMax FastH3（@MiniMax_AI 最新开源模型）。支持 720p 带音频流式生成，首帧图像支持，价格 $0.007/秒，更快更便宜。可直接 clone demo app。GitHub cookbook 已提供。
- **互动**: 190 赞、2 万+ 浏览、133 收藏
- **分类建议**: ai / video-generation / open-source
- **链接**: https://x.com/reactorworld/status/2095272568282656999

## 8. Sodium v2 — 一键为网站添加 WebMCP

- **作者**: @saviomartin（@tryresult）
- **时间**: 2026-09-02 18:34 UTC
- **视频**: 约 38 秒演示
- **亮点**: 推出 Sodium v2。一条命令为网站添加 WebMCP 能力，让 AI 能轻松发现并交互。内置 agent analytics 与 AEO 功能。beta 期间免费。站点：https://sodium.result.dev
- **互动**: 53 赞、3200+ 浏览、36 收藏
- **分类建议**: developer-tools / ai / web
- **链接**: https://x.com/saviomartin/status/2095218769681584172

## 9. Runway Dev MCP — 在 coding agent 中连接 Runway

- **作者**: @runwayml
- **时间**: 2026-09-02 14:39 UTC
- **视频**: 约 76 秒演示
- **亮点**: 推出 Runway Dev MCP。可从 coding agent 内部连接 Runway 开发者平台，进行构建、调试与管理。支持设置 Model Routers、查询任务等，无需离开 agent。
- **互动**: 87 赞、1 万+ 浏览、29 收藏
- **分类建议**: ai / developer-tools / motion
- **链接**: https://x.com/runwayml/status/2095159754414813249

## 10. beui pro — 7 个新动画插图

- **作者**: @saurra3h
- **时间**: 2026-09-02 20:56 UTC
- **视频**: 约 26 秒演示
- **亮点**: 在 beui pro 中刚发布 7 个新动画插图：connected app hubs、api + mcp flows、ai composers、crypto stacks、rolling prompts、document cards 等。完全动画、可定制，可直接用于项目。https://pro.beui.dev/illustrations
- **互动**: 47 赞、1800+ 浏览、40 收藏
- **分类建议**: design / developer-tools
- **链接**: https://x.com/saurra3h/status/2095254497622683723

---

## 已在 09-01 / 09-02 文档或目录中出现（仅交叉引用，不重复入队）

- Linear Agent react、Runway ACES、Replit Auto Mode、Higgsfield Genjutsu、Gemini agentic video、OpenArt Chat Mode、Perplexity Hybrid Compute、CleanShot 5.0 等：已见 09-02 汇总。

---

## 已过滤（不入库）

- 纯加密货币 / 代币 / meme / NFT 交易（如 $HIERO）。
- 游戏 / 娱乐 / 影视 / 体育预告与个人生活视频。
- 政治、军事、新闻事件视频。
- 纯二次解读、教程或低信号个人 demo（无完整产品落地）。
- ship.mov 或第三方帮别人生成的发布片回复（非原始产品帖）。
- 硬件/消费电子非软件产品，或信号偏弱内容。

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（x_keyword_search 搭配 `filter:videos` + `since:2026-09-01/09-02` + `min_faves` + launched/now live/introducing/just shipped/MCP/agent + from: watchlist 与高信号账号；x_semantic_search 语义检索产品发布与独立开发者 demo；x_thread_fetch 获取 Cursor / Obsidian / VDN / Wevi / Gemini / Omnara 等完整上下文）。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-03-zh-summary.md` 写入 inbox（与其它 discovery PR 合并时用 `node scripts/merge-inbox.mjs` 做并集）。再按 AGENTS.md 配方正式发布。
