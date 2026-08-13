# 2026-08-13 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能，针对产品设计、科技/AI 公司及个人开发者发布的带视频帖子进行查询，筛选产品发布（launch / now live / introducing / shipping）相关高质量视频。以下为今日新增候选（已追加至 `src/data/inbox.json`，待 /admin 审核）。

## 1. Jarvix — Context OS 全球发布
- **作者**: @Jarvixdotlive
- **时间**: 2026-08-12 21:30 UTC
- **视频**: ~95 秒官方演示
- **亮点**: 个性化 AI Context OS，跨会话与多 Agent（Codex、Claude Code、Gemini 等）携带上下文，构建个人 AI 模型，将多个 Agent 协调为统一团队。高互动（74.5 万+ 浏览、745 赞）。
- **分类建议**: ai
- **链接**: https://x.com/Jarvixdotlive/status/2087652849702641848

## 2. Vercel Managed Images
- **作者**: @vercel_dev
- **时间**: 2026-08-12 23:29 UTC
- **视频**: ~17 秒
- **亮点**: Vercel Sandbox 现默认 Ubuntu OS，预装 coding agents（Codex、Claude 等），支持可定制开源 base images。`npx sandbox@latest sh` 即可试用。
- **分类建议**: developer-tools
- **链接**: https://x.com/vercel_dev/status/2087682908576416172

## 3. Grok Imagine Image 2.0
- **作者**: @grok (xAI)
- **时间**: 2026-08-11 22:49 UTC
- **视频**: ~31 秒
- **亮点**: Imagine Image 2.0 现已在 API 开放：精准编辑、信息图、广告、游戏资产、UI/UX 原型、故事板等。可在 playground 试用。
- **分类建议**: ai
- **链接**: https://x.com/grok/status/2087310458206199832

## 4. BaiBai PropAMM + Aggregator 公开上线
- **作者**: @baibai_cx
- **时间**: 2026-08-12 22:07 UTC
- **视频**: ~35 秒
- **亮点**: Base 链上首个 PropAMM + 聚合器，专业做市商直接 onchain 报价，保证比任何 DEX 更好的价格与执行。后续支持 tokenized equities。
- **分类建议**: other
- **链接**: https://x.com/baibai_cx/status/2087662158012457226

## 5. Tashvi AI Imagine 功能
- **作者**: @tashviai
- **时间**: 2026-08-12 23:14 UTC
- **视频**: ~29 秒
- **亮点**: 从单一想法批量生成多种珠宝设计方向，快速探索风格、形状与变体后精炼。
- **分类建议**: design
- **链接**: https://x.com/tashviai/status/2087679110600343659

---

**搜索方法**: Grok 内置 `x_keyword_search` + `x_semantic_search` + `x_thread_fetch`，关键词覆盖 launch/introducing/now live/shipping + filter:videos + 时间过滤 since:2026-08-11，聚焦 AI/科技/设计/个人开发者账号与高信号内容。未使用任何第三方 X API。

**下一步**: 审核通过后按 AGENTS.md 配方（syndication 补全 → posters:capture → 合并 videos.json）正式发布。
