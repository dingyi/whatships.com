# 2026-08-14 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询，筛选「introducing / now live / shipping / launched」等产品发布相关高质量视频。以下为 2026-08-13 至 08-14 新增候选（待追加至 `src/data/inbox.json` 后由 /admin 审核）。

## 1. OpenAI — ChatGPT Computer History（桌面端跨 App 记忆）
- **作者**: @OpenAI
- **时间**: 2026-08-13 20:15 UTC
- **视频**: ~28 秒官方演示（4K）
- **亮点**: ChatGPT 桌面端现可记住电脑上 Apps 与网站的活动历史。Computer History 让未来交互更个性化、少解释。支持时间线回顾、选择性清除、暂停/恢复，基于 Chronicle 预览优化隐私与 token。正在全球向 Pro / Business / Enterprise 用户推出。
- **互动**: 58 万+ 浏览、5.8k 赞
- **分类建议**: ai
- **链接**: https://x.com/OpenAI/status/2087996496088297746

## 2. OpenAI — Ultrafast 模式（GPT-5.6 Sol 最高 14x 速度）
- **作者**: @OpenAI
- **时间**: 2026-08-13 17:01 UTC
- **视频**: ~44 秒
- **亮点**: 预览 Ultrafast 模式：GPT-5.6 Sol 可达最高 14 倍速度（由 Cerebras 驱动，最高 750 tokens/s）。先在 OpenAI API 向精选客户推出，后续扩容。适合实时语音、客服、编码、设计、金融研究、安全响应等场景。
- **互动**: 132 万+ 浏览、1.09 万赞
- **分类建议**: ai
- **链接**: https://x.com/OpenAI/status/2087947721936359705

## 3. Cursor — Cloud Agents 启动速度提升 3x（Builds）
- **作者**: @cursor_ai
- **时间**: 2026-08-13 16:36 UTC
- **视频**: ~20 秒
- **亮点**: Cloud agents 现启动快 3 倍，可放心交给它们执行从开始到结束的长期任务。背后是「builds」：Cursor 在后台持续准备就绪的开发环境，零额外费用。失败 build 不会上线，agent 继续用上次成功版本，便于后台调试。Faire、Headway、Descript 等客户已体验到从分钟级降到秒级。
- **互动**: 21 万+ 浏览、2k 赞
- **分类建议**: developer-tools
- **链接**: https://x.com/cursor_ai/status/2087941307624980753

## 4. Figma — Skills（无需离开 Figma 创建与使用技能）
- **作者**: @figma
- **时间**: 2026-08-13 16:50 UTC
- **视频**: ~34 秒
- **亮点**: 现在可在 Figma 内用 agent 创建 skill、发布到 Community、保存他人 skill，并通过 “/” 命令直接试用。设计工作流进一步 agent 化。
- **分类建议**: design
- **链接**: https://x.com/figma/status/2087944862272459214

## 5. Vercel — AI Gateway 一键连接 Coding Agents
- **作者**: @vercel
- **时间**: 2026-08-13 21:43 UTC
- **视频**: ~30 秒
- **亮点**: 一条命令即可把 coding agents 接到 AI Gateway：自动配置 8 个主流 coding harnesses，300+ 模型来自 30+ 提供商（无加价），支持 open-weight 模型 + ZDR & 美国推理。命令：`vercel ai-gateway coding-agents setup`。
- **分类建议**: developer-tools
- **链接**: https://x.com/vercel/status/2088018757189009515

## 6. Replit Design — 为 AI 时代重新发明设计流程
- **作者**: @Replit
- **时间**: 2026-08-13 17:00 UTC
- **视频**: ~116 秒（团队访谈 + 演示）
- **亮点**: Replit Design 正式推出，旨在 AI 时代重新定义设计流程。团队分享为何要构建「下一代设计，为所有人」。设计、编码、部署逐渐成为连续 AI 工作流。
- **分类建议**: design / developer-tools
- **链接**: https://x.com/Replit/status/2087947287620366787

## 7. Circuitly — PCB 设计的 Agentic Harness（硬件）
- **作者**: @Circuitlyapp
- **时间**: 2026-08-13 22:55 UTC
- **视频**: ~58 秒
- **亮点**: 介绍 Circuitly 的 agentic harness for PCB design。将 AI agents 连接到原生设计数据、工程工具与公司上下文，使其能完成有用且可审查的工作。硬件团队现可免费试用 schematic 与 PCB review 能力。
- **分类建议**: hardware / developer-tools
- **链接**: https://x.com/Circuitlyapp/status/2088036818768032224

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具，关键词覆盖 introducing / now live / just shipped / launched + (AI OR product OR tool OR design) + filter:videos + since:2026-08-12/13，并针对性拉取 OpenAI、Cursor、Figma、Vercel、Replit 等 watchlist 账号近期视频帖。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后按 AGENTS.md 配方（syndication 补全如有需要 → posters:capture → 合并至 videos.json）正式发布。保留现有 pending 项。
