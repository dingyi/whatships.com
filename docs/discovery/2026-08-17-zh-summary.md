# 2026-08-17 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询，筛选「now available / shipping / launched / just shipped / Balanced depth / Agent CLI」等产品发布相关高质量视频。以下为 2026-08-15 至 08-17 新增候选（待追加至 `src/data/inbox.json` 后由 /admin 审核）。

## 1. GitHub — Copilot Code Review Balanced Depth 正式可用
- **作者**: @github
- **时间**: 2026-08-16 18:31 UTC
- **视频**: ~106 秒官方演示
- **亮点**: Copilot 代码审查深度现由用户掌控。Balanced 深度已全面可用，可对 PR 进行更深入、更全面的分析；Lite 适合简单改动。可在组织/仓库级别设置默认深度，或在请求审查时选择。为不同规模的变更提供合适的审查深度。
- **互动**: 3.5 万+ 浏览、163 赞、18 转发
- **分类建议**: developer-tools
- **链接**: https://x.com/github/status/2089057545998479457

## 2. Warp — Warp Agent CLI（将 Agent 邀请进正在运行的终端会话）
- **作者**: @warpdotdev
- **时间**: 2026-08-16 12:46 UTC
- **视频**: ~114 秒（工程师 Kevin Yang 演示）
- **亮点**: 传统 Agent（如 Claude Code）可运行终端命令，但 Warp Agent CLI 允许将 Agent 直接邀请进已经运行的终端会话。支持在 vim、SQL REPL、其他 TUI 中请求 Agent 帮助。无缝将 Agent 能力融入现有工作流。
- **互动**: 1 万+ 浏览、92 赞、34 收藏
- **分类建议**: developer-tools
- **链接**: https://x.com/warpdotdev/status/2088970738275365360

## 3. Runway — Seedance 2.5 1080p 现已上线（早期访问）
- **作者**: @runwayml
- **时间**: 2026-08-15 06:18 UTC
- **视频**: ~57 秒演示
- **亮点**: Seedance 2.5 以 1080p 分辨率正式在 Runway 上线，早期访问今日开始。带来更高清晰度与细节表现，适合专业级视频生成工作流。
- **互动**: 2.8 万+ 浏览、238 赞、25 转发
- **分类建议**: ai
- **链接**: https://x.com/runwayml/status/2088510581120647272

## 4. DraftedAI V2 — AI 房屋平面图设计工具重大更新
- **作者**: @kirillk_web3（报道）/ @DraftedAI
- **时间**: 2026-08-16 20:05 UTC
- **视频**: ~17 秒产品演示
- **亮点**: DraftedAI 刚发布 V2，可在几秒内将粗糙想法转化为真实可用的房屋平面图。支持手动放置房间、自动生成补全、局部重新生成、编辑墙体/门窗、切换 250 万+ 外观组合并渲染。V2 在匹配房间需求上提升 5 倍，速度提升 60%。从「有想法」到「有平面图」的差距被显著缩小。
- **互动**: 1.6k+ 浏览、10 赞
- **分类建议**: design / ai / consumer
- **链接**: https://x.com/kirillk_web3/status/2089081008423645680

## 5. Pika — Pika Audio Models（生成式音频基础模型全家桶）
- **作者**: @pika_labs
- **时间**: 2026-08-14 19:46 UTC
- **视频**: ~75 秒官方发布片（带音效）
- **亮点**: 正式推出 Pika Audio 系列 4 个前沿基础模型，覆盖完整生成式声音频谱（SFX、Speech、Soundtrack、Music）。价格比市场竞品低最多 20 倍，成为目前最便宜的音频模型。尤其适合视频同步音效与音乐生成。
- **互动**: 29 万+ 浏览、614 赞、79 转发、412 收藏
- **分类建议**: ai
- **链接**: https://x.com/pika_labs/status/2088351507167289515

## 6. OpenAI — ChatGPT Computer History（桌面端跨 App 活动记忆）
- **作者**: @OpenAI
- **时间**: 2026-08-13 20:15 UTC
- **视频**: ~28 秒官方演示
- **亮点**: ChatGPT 桌面端现可记住电脑上 Apps 与网站的活动历史。Computer History 让未来交互更个性化、减少重复解释。支持时间线回顾与隐私控制。
- **互动**: 高互动（百万级浏览）
- **分类建议**: ai
- **链接**: https://x.com/OpenAI/status/2087996496088297746

## 7. Cursor — Cloud Agents 启动速度提升 3x（Builds）
- **作者**: @cursor_ai
- **时间**: 2026-08-13 16:36 UTC
- **视频**: ~20 秒
- **亮点**: Cloud agents 现启动快 3 倍，可放心交给它们执行从开始到结束的长期任务。背后是「builds」：Cursor 在后台持续准备就绪的开发环境，零额外费用。
- **互动**: 66 万+ 浏览、3390 赞、183 转发
- **分类建议**: developer-tools
- **链接**: https://x.com/cursor_ai/status/2087941307624980753

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（x_keyword_search 搭配 filter:videos + since: + from:watchlist 账号 + 关键词 launched/shipping/now available/Agent CLI 等；x_semantic_search 语义检索产品发布视频）。聚焦产品设计、科技/AI 公司、个人开发者账号及高信号内容。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-17-zh-summary.md` 将候选写入 inbox，或手动挑选 tweetId 加入，再按 AGENTS.md 配方（syndication 补全 → posters:capture → 合并至 videos.json）正式发布。
