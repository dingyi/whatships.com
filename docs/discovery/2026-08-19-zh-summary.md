# 2026-08-19 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / product launch 等，并聚焦高互动、有官方演示视频的内容。以下为 2026-08-17 至 08-19 新增高质量候选（待 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-19-zh-summary.md` 追加至 inbox 后由 /admin 审核）。

已通过 tweetId 核对，均未出现在 `src/data/videos.json` 中。

## 1. Vercel Labs — fx（极致轻量原生 Coding Agent）正式开源
- **作者**: @vercel_dev
- **时间**: 2026-08-18 21:33 UTC
- **视频**: ~11 秒官方发布片
- **亮点**: 推出 fx——来自 Vercel Labs 的 tiny、open、native coding agent。用 Zig 编写的 harness + CLI，专为研究与嵌入更大系统设计。三大原则：Fast（单二进制、冷启动 10µs）、Light（6.3MiB、单数字 MB 内存）、Open（Apache-2.0、模型/提供商无关、支持本地与云端推理）。极简主义贯穿系统提示、工具、特性与二进制本身。适合模型评测、沙箱、evals 与 gyms。CLI 更像 Unix shell，支持 `fx ask --json` 结构化输出、ACP 连接编辑器、甚至 WebAssembly 浏览器运行。隐私优先，无遥测。
- **互动**: 19.5 万+ 浏览、1000+ 赞、100+ 转发、770+ 收藏
- **分类建议**: developer-tools / ai / open-source
- **链接**: https://x.com/vercel_dev/status/2089828083415355806

## 2. Warp — Warp Factories（云端软件工厂基础设施）
- **作者**: @warpdotdev
- **时间**: 2026-08-18 14:54 UTC
- **视频**: ~9 分钟官方介绍 + 演示
- **亮点**: 推出 Warp Factories——开放、灵活的云端软件工厂基础设施。以代码配置工厂、支持任意模型与 harness、用自家数据做 evals/benchmarks 衡量质量、内置自改进与记忆。工作从 Slack/Teams、Linear/Jira、GitHub/GitLab 及本地终端/IDE 流入。Agent 可使用 Linux/Mac computer use 复现问题并证明变更正确性，可在 PR 中分享录制。正在有限邀请公司，提供 $10k 工厂用量起步。
- **互动**: 16.5 万+ 浏览、283 赞、30 转发、219 收藏
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/warpdotdev/status/2089727695852548451

## 3. Nori Robotics — Nori $1688 人形机器人（YC S26）
- **作者**: @AntonioSitongLi（@NoriRobotics）
- **时间**: 2026-08-18 20:42 UTC
- **视频**: ~3 分钟介绍 + 规格演示
- **亮点**: 正式介绍 Nori——售价 $1688 的人形机器人。目标在美国打造最佳 <2K 机器人。规格：19 自由度、55 kg 线性升降、每臂 1.5 kg 负载、麦克风阵列 + 扬声器（全双工对话）、RPi 5 4GB、4 路 720p 30fps 摄像头。限量批次秋季发货，现开放预订。
- **互动**: 7.2 万+ 浏览、314 赞、36 转发、93 收藏
- **分类建议**: hardware / robotics / consumer
- **链接**: https://x.com/AntonioSitongLi/status/2089815326720704960

## 4. Perplexity — Computer 现已支持邮件
- **作者**: @perplexity_ai
- **时间**: 2026-08-18 16:00 UTC
- **视频**: ~42 秒演示
- **亮点**: Computer 现可处理邮件。向 computer@perplexity.com 发送、转发或抄送任意线程，邮件任务会作为普通 Computer 会话运行，可在网页与移动端查看，并保留完整审计轨迹。所有 Computer 用户今日可用。
- **互动**: 5.2 万+ 浏览、402 赞、38 转发、114 收藏
- **分类建议**: ai / productivity
- **链接**: https://x.com/perplexity_ai/status/2089744150229131651

## 5. OJO — 首个 Design Agent Team Workspace
- **作者**: @OJOaidesign
- **时间**: 2026-08-18 15:11 UTC
- **视频**: ~83 秒官方发布片
- **亮点**: 推出 OJO——全球首个 Design Agent 团队工作空间。可组建专属设计 Agent 团队、添加专业化技能，将想法转化为产品策略、PRD、交互原型与可上线设计，全部在可编辑画布上完成。当人人都能构建时，品味决定产品差异化；现在品味可以被工程化。
- **互动**: 21.7 万+ 浏览、373 赞、46 转发、439 收藏
- **分类建议**: design / ai / productivity
- **链接**: https://x.com/OJOaidesign/status/2089731834095489430

## 6. Firecrawl — 官方 Claude Connector
- **作者**: @firecrawl
- **时间**: 2026-08-18 15:55 UTC
- **视频**: ~14 秒演示
- **亮点**: 推出官方 Firecrawl Claude 连接器。为 AI Agent 添加顶尖网页搜索能力（SimpleQA 94.7%）。基于实时索引，覆盖研究与开放网页，结果更新鲜。已上线 Anthropic 连接器目录。
- **互动**: 5.7 万+ 浏览、422 赞、30 转发、317 收藏
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/firecrawl/status/2089743044778115228

## 7. Topaz Labs — Hyperion 2.5（AI 视频转真 HDR）
- **作者**: @topazlabs
- **时间**: 2026-08-18 15:06 UTC
- **视频**: ~89 秒官方发布片
- **亮点**: 重大发布：Hyperion 2.5 新视频模型。可将 8-bit AI 视频转换为真正 HDR（ProRes 10-bit、EXR 16-bit、H.265 10-bit）。AI 素材终于能与实拍素材在专业与 VFX 管线中并列。现已在 Astra 可用，即将登陆 Topaz Video。
- **互动**: 8.9 万+ 浏览、375 赞、46 转发、234 收藏
- **分类建议**: ai / design / video
- **链接**: https://x.com/topazlabs/status/2089730550235820466

## 8. CrowdReply — SuperAgent（AI 答案排名 Agent）
- **作者**: @Crowdreply_io
- **时间**: 2026-08-18 15:01 UTC
- **视频**: ~53 秒演示
- **亮点**: 推出 CrowdReply SuperAgent——首个可直接从聊天中为品牌在 AI 答案中排名的 agentic AI。告诉它你想要什么，它负责诊断、修复与排名。搜索没有死，只是迁移了：用户现在问 ChatGPT/Gemini/Claude/Perplexity 而非 Google。SuperAgent 帮你进入并保持在答案中。
- **互动**: 16.3 万+ 浏览、357 赞、89 转发、399 收藏
- **分类建议**: marketing / ai / seo
- **链接**: https://x.com/Crowdreply_io/status/2089729369644417171

## 9. Merge — Merge for Workforce（企业 AI 模型路由与成本控制）
- **作者**: @shensi（@merge_api）
- **时间**: 2026-08-18 15:00 UTC
- **视频**: ~33 秒演示
- **亮点**: 一键将整个工作力的 AI 支出降低 75%。引入 Merge for Workforce。IT 可连接任意身份提供商，按团队一键设置模型路由策略；通过桌面客户端推送到每台机器，覆盖团队 AI 助手与编码工具的模型配置。每个任务自动匹配最合适模型，实现更少 token、更快更好输出。
- **互动**: 23 万+ 浏览、450 赞、48 转发、329 收藏
- **分类建议**: developer-tools / ai / enterprise
- **链接**: https://x.com/shensi/status/2089729036948013191

## 10. Kaito AI — Kaito Pulse（X 社交层 + Aura）
- **作者**: @KaitoAI
- **时间**: 2026-08-18 14:31 UTC
- **视频**: ~51 秒官方发布片
- **亮点**: 推出 Kaito Pulse——互联网的社交层，从 X 开始。浏览器扩展将平台外活动（Polymarket、Hyperliquid 等公开仓位）直接带入原生 X 时间线。帮助交易者围绕真实交易建立粉丝、帮助创作者证明触达真实性。同时引入 Aura——新互联网的可验证注意力度量。
- **互动**: 45.7 万+ 浏览、1385 赞、116 转发、271 收藏
- **分类建议**: crypto / social / ai
- **链接**: https://x.com/KaitoAI/status/2089721729895841925

## 11. RespanAI — 实时完整循环演示（Gateway + Tracing + Evals）
- **作者**: @francchen（@RespanAI）
- **时间**: 2026-08-18 21:56 UTC
- **视频**: ~59 秒 live demo（无配乐快剪）
- **亮点**: 厌倦传统 launch 视频。用真实 live demo 展示完整循环：LLM 调用经 gateway → 进入 tracing 与 monitoring → 对输出运行 evals。一分钟看完全流程。强调可观测性与评估对 Agent 产品的核心价值。
- **互动**: 1.8 万+ 浏览（早期）
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/francchen/status/2089833921353818398

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（x_keyword_search 搭配 filter:videos + since:2026-08-16/17/18 + min_faves + 关键词 launched/now live/introducing/just shipped/product launch + from: 重点账号与 watchlist；x_semantic_search 语义检索；x_thread_fetch 获取完整线程与上下文）。聚焦产品设计、科技/AI 公司、个人开发者及高信号官方发布视频。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-19-zh-summary.md` 将候选写入 inbox，或手动挑选 tweetId 加入，再按 AGENTS.md 配方（syndication 补全 → posters:capture → 合并至 videos.json）正式发布。
