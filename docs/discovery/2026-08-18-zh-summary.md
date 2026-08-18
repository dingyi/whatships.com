# 2026-08-18 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / product launch 等，并聚焦高互动、有官方演示视频的内容。以下为 2026-08-16 至 08-18 新增高质量候选（待 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-18-zh-summary.md` 追加至 inbox 后由 /admin 审核）。

已通过 tweetId 核对，均未出现在 `src/data/videos.json` 中。

## 1. Cursor — Origin 代码托管平台正式上线
- **作者**: @cursor_ai
- **时间**: 2026-08-17 17:08 UTC
- **视频**: ~31 秒官方发布片
- **亮点**: Cursor 推出自有代码托管平台 Origin，现已上线。深度集成 Cursor 编辑器与 Agent，支持从 GitHub 同步仓库、标准 Git 工作流、PR/diff/评论/检查/合并、代码浏览与搜索，以及 Cursor agents 直接操作仓库、更新 PR、推送分支。与 Vercel、Depot、Buildkite 等集成，支持自动化与云端 Agent。早期 beta 对付费计划开放，迁移可渐进进行。
- **互动**: 351 万+ 浏览、1.7 万+ 赞、1500+ 转发、4300+ 收藏
- **分类建议**: developer-tools
- **链接**: https://x.com/cursor_ai/status/2089399057659596847

## 2. lato_ai — AI 驱动的商业尽职调查（YC S26）
- **作者**: @tymek_st（@lato_ai）
- **时间**: 2026-08-17 19:38 UTC
- **视频**: ~51 秒产品演示
- **亮点**: 正式介绍 lato_ai（YC S26），改变投资尽职调查方式。聚焦商业尽职调查（CDD）：传统麦肯锡报告约 50 万美元、耗时数周；2025 年全球约 3.6 万次 CDD，年花费约 180 亿美元。他们的语音 Agent 比人类更擅长专家访谈，研究 Agent 能系统发现并综合信息。可在数天内以极低成本完成任意公司或市场调研，已与领先基金合作。
- **互动**: 5.3 万+ 浏览、212 赞、152 收藏
- **分类建议**: ai / productivity
- **链接**: https://x.com/tymek_st/status/2089436604008181865

## 3. raindrop_ai — PII Guard 2.0 隐私保护升级
- **作者**: @benhylak（@raindrop_ai）
- **时间**: 2026-08-17 17:50 UTC
- **视频**: ~34 秒功能演示
- **亮点**: 推出 PII Guard 2.0，在不牺牲可观测性的前提下保护用户隐私。新增基于角色的访问控制、审计日志、更细粒度控制。仅在 raindrop_ai 中提供。
- **互动**: 3.6 万+ 浏览、179 赞、100 收藏
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/benhylak/status/2089409649485463561

## 4. Straitly — 0% 加价 AI Gateway 正式发布
- **作者**: @Mutchtaba2 / @straitlyai
- **时间**: 2026-08-17 16:14 UTC
- **视频**: ~80 秒发布演示
- **亮点**: 宣称「杀死 OpenRouter」。Straitly 是全球首个对 token 收取 0% 加价的 AI gateway，无 Stripe/信用卡处理费。一个 API key 访问 142+ 模型、20+ 提供商，智能重路由实现 99.98% 成功率，同时优化缓存命中。上线优惠：首 $10k 花费最高 30% 折扣 + $100 免费额度。
- **互动**: 16.6 万+ 浏览、457 赞、566 收藏
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/Mutchtaba2/status/2089385271896822197

## 5. Interfaze — OpenWebSearch（统一网页搜索路由器）
- **作者**: @interfaze_ai（YC P26）
- **时间**: 2026-08-17 16:09 UTC
- **视频**: ~6 分钟演示
- **亮点**: 推出 OpenWebSearch：统一路由器，覆盖 Exa、Parallel、Brave、Perplexity 等。归一化输出结构、集中计费、内置 fallback 与优先级。面向开发者确定性任务的 AI 模型生态。
- **互动**: 1.3 万+ 浏览、121 赞、87 收藏
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/interfaze_ai/status/2089384159525670980

## 6. Public — AI Agents 市场正式开放（投资组合 Agent）
- **作者**: @public
- **时间**: 2026-08-17 16:01 UTC
- **视频**: ~2.5 分钟演示
- **亮点**: 推出投资组合 AI Agents 的首个市场。可立即部署或自定义 Agent，并可分享给他人运行/修改。取消 waitlist，移动端与网页端全量开放。
- **互动**: 33 万+ 浏览、189 赞、101 收藏
- **分类建议**: consumer / ai / productivity
- **链接**: https://x.com/public/status/2089382171291070550

## 7. Okara — AI CMO v2 正式发布
- **作者**: @askOkara
- **时间**: 2026-08-17 15:00 UTC
- **视频**: ~67 秒演示
- **亮点**: 推出 Okara AI CMO v2。输入网站后，自动部署更快更智能的 Agent 团队，帮助获取流量与用户。
- **互动**: 71 万+ 浏览、1738 赞、3586 收藏
- **分类建议**: ai / productivity
- **链接**: https://x.com/askOkara/status/2089366669613531602

## 8. Replit — 黑盒渗透测试现已可用
- **作者**: @Replit
- **时间**: 2026-08-17 19:00 UTC
- **视频**: ~42 秒演示
- **亮点**: 现可对 Replit 应用运行黑盒渗透测试（模拟外部攻击者）。Replit Agent 可一键修复发现的问题。
- **互动**: 2.2 万+ 浏览、88 赞、21 收藏
- **分类建议**: developer-tools
- **链接**: https://x.com/Replit/status/2089427187162083785

## 9. Warp — 为 SSH 打造的完美 Coding Agent
- **作者**: @warpdotdev
- **时间**: 2026-08-17 13:51 UTC
- **视频**: ~84 秒工程师演示（Kevin Yang）
- **亮点**: 无需在远程机器安装额外 CLI。只需 `! ssh` 即可与 Agent 协作。专为 SSH 场景优化的 coding agent。
- **互动**: 9.3k+ 浏览、75 赞、43 收藏
- **分类建议**: developer-tools
- **链接**: https://x.com/warpdotdev/status/2089349275956195329

## 10. allthemapis.com — 面向 Coding Agent 的 API 市场
- **作者**: @faizan10114
- **时间**: 2026-08-17 23:52 UTC
- **视频**: ~26 秒演示
- **亮点**: 发布 allthemapis.com，API 市场，每个 API 至少被一个 Agent（他们的）独立验证。提供详细 Agent Bench 报告（setup、任务结果、错误、tool calls、时间/成本、证据与注意事项）。帮助构建者在 Agent 写集成前比较 API，帮助 API 团队获得分发。
- **互动**: 早期，持续观察
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/faizan10114/status/2089500670944497866

## 11. browser-use — macOS Harness 正式发布（开源）
- **作者**: @gregpr07（@browser_use）
- **时间**: 2026-08-17 16:30 UTC（介绍）/ 08-18 00:16 UTC（视频）
- **视频**: ~64 秒演示（「macOS Harness launched itself」）
- **亮点**: 推出 macOS Harness——持久化 Python harness，可控制几乎任何 Mac 任务。通过 accessibility tree、AppleScript、截图或原始坐标输入实现完整 macOS 控制（Browser + files + shell）。虚拟光标，鼠标仍归用户。单一持久 Python 进程。100% 开源，已上 GitHub + PyPI，且自称 vibe-launched（自己写了推文）。
- **互动**: 介绍帖 3.5 万+ 浏览、332 赞、410 收藏；视频帖早期
- **分类建议**: developer-tools / ai / open-source
- **链接**: https://x.com/gregpr07/status/2089389412522266906 （视频：https://x.com/gregpr07/status/2089506774676291815）

## 12. Nous Research — Hermes Desktop Bot Mode
- **作者**: @NousResearch
- **时间**: 2026-08-17 19:09 UTC
- **视频**: ~90 秒官方演示
- **亮点**: 推出 Bot Mode for Hermes Desktop。Agent profiles 变成一系列命名 Bots。每个 Bot 有独立角色、模型、记忆、技能与头像；Bots 可使用任意模型并可互相通信。一次构建专家 Bot，永久复用。
- **互动**: 59 万+ 浏览、4670+ 赞、400+ 转发、2320+ 收藏
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/NousResearch/status/2089429432612147572

## 13. Monid — Discover（Agent 自主发现工具）
- **作者**: @shengkunye（@MonidHQ）
- **时间**: 2026-08-17 18:31 UTC
- **视频**: ~72 秒演示
- **亮点**: 推出 Monid Discover。Agent 可自主：搜索 1300+ APIs & tools、比较提供商、查看定价、在运行时调用并支付工具。等你问它用了哪些工具时，工作已经完成。
- **互动**: 5.5k+ 浏览、74 赞、44 收藏
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/shengkunye/status/2089419739970077058

## 14. Quotient — Dev Portal + 信号终端升级
- **作者**: @amphib0ly（@QuotientHQ）
- **时间**: 2026-08-17 21:47 UTC
- **视频**: ~45 秒演示
- **亮点**: 周末发货：Dev Portal 现已上线（20+ API endpoints 覆盖交易信号、市场/资产情报、按需预测；agent skill + CLI/MCP 集成）。信号终端新增黄金、白银、铜、WTI 原油、天然气等商品信号（可在 Kalshi、Polymarket 等交易），并更新排行榜。持有一定 Quotient 可获 API 积分与折扣。
- **互动**: 早期（约 760 浏览、28 赞）
- **分类建议**: ai / fintech / developer-tools
- **链接**: https://x.com/amphib0ly/status/2089469112808546346

## 15. Coinbase — US500 Perps 现已上线
- **作者**: @coinbase
- **时间**: 2026-08-17 21:41 UTC
- **视频**: ~11 秒官方发布片
- **亮点**: US500 Perps 正式上线。可在一个合约中做多或做空美国最大的 500 家公司，全部在 Coinbase 完成。
- **互动**: 6.5 万+ 浏览、190 赞、31 转发
- **分类建议**: fintech / consumer
- **链接**: https://x.com/coinbase/status/2089467756051628474

## 16. Jupiter — Portfolio v2
- **作者**: @JupiterExchange
- **时间**: 2026-08-17 17:09 UTC
- **视频**: ~41 秒演示
- **亮点**: 最佳链上投资组合工具再升级。Portfolio v2：10x 更快、更简洁、更有用。首次可直接在 Portfolio 内主动管理 DeFi 仓位（借贷、提款、还款、swap、关闭、claim 等）。
- **互动**: 3.6 万+ 浏览、268 赞、40 转发
- **分类建议**: fintech / crypto
- **链接**: https://x.com/JupiterExchange/status/2089399210781159777

## 17. Telos — x402 v2（AI Agent 支付）
- **作者**: @HelloTelos
- **时间**: 2026-08-17 19:59 UTC
- **视频**: ~27 秒演示
- **亮点**: x402 v2 现已在 Telos EVM 上线。AI agents 可按请求用 USDC.e 支付 API——无需 checkout、无需 TLOS。Facilitator 处理结算 gas。面向机器经济的高速支付。
- **互动**: 2k+ 浏览、69 赞
- **分类建议**: crypto / ai / developer-tools
- **链接**: https://x.com/HelloTelos/status/2089442060319236360

## 18. OpenArt — Seedance 2.5 1080p 上线
- **作者**: @openart_ai
- **时间**: 2026-08-17 17:08 UTC
- **视频**: ~26 秒演示
- **亮点**: Seedance 2.5 1080p 现已在 OpenArt 上线。原生 1080p 视频、更好真实感、精准编辑、最多 50 个参考资产。限时最高 30% 折扣。
- **互动**: 3.6k+ 浏览、61 赞
- **分类建议**: ai
- **链接**: https://x.com/openart_ai/status/2089398873248706694

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（x_keyword_search 搭配 filter:videos + since:2026-08-15/16/17 + min_faves + 关键词 launched/now live/introducing/just shipped/product launch + from: 重点账号与 watchlist；x_semantic_search 语义检索；x_thread_fetch 获取完整线程与上下文）。聚焦产品设计、科技/AI 公司、个人开发者及高信号官方发布视频。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-18-zh-summary.md` 将候选写入 inbox，或手动挑选 tweetId 加入，再按 AGENTS.md 配方（syndication 补全 → posters:capture → 合并至 videos.json）正式发布。
