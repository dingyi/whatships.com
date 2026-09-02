# 2026-09-02 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / MCP / agent 等，并覆盖 watchlist 账号与高互动独立开发者。

时间范围：2026-08-31 至 2026-09-02。已排除政治、纯娱乐、游戏宣发、加密货币代币与无关教程。与 08-31 / 09-01 已入库 / 已发现文档互补，重点补充本周期新出现的高信号官方与独立产品发布视频。

已核对本次主条目 tweetId（Perplexity Hybrid Compute / CleanShot 5.0 / GitHub Copilot Fable / GitHub CLI --attach / Linear Agent react / Notion Fable / Runway ACES / Replit Auto Mode / Higgsfield Genjutsu / WebMCP agent-browser / Muse Voice Transcribe / Gemini agentic video / OpenArt Chat Mode 等），未出现在 `src/data/videos.json` 中。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-02-zh-summary.md
```

---

## 1. Perplexity Computer — 混合云本地计算（Hybrid Compute）

- **作者**: @perplexity_ai
- **时间**: 2026-09-01 15:04 UTC
- **视频**: 约 69 秒发布演示
- **亮点**: 推出 hybrid compute。Computer 可在云端启动任务，再切换到 Mac 本地模型处理私有文件或敏感数据。云模型负责搜索/规划/推理，本地模型处理隐私步骤，敏感数据永不上传。同时开源 PII 检测分类器。适用于 Pro/Max/Enterprise，需 macOS 15+。详情：https://www.perplexity.ai/hub/products/hybrid-compute
- **互动**: 1127+ 赞、15.7 万+ 浏览、298 收藏
- **分类建议**: ai / productivity / privacy
- **链接**: https://x.com/perplexity_ai/status/2094803515264978953

## 2. CleanShot 5.0 — Studio Mode 屏幕录制专业模式

- **作者**: @CleanShot
- **时间**: 2026-09-01 15:03 UTC
- **视频**: 约 81 秒发布片
- **亮点**: 正式推出 CleanShot 5.0。新 Studio Mode 可将简单屏幕录制一键变成专业级视频：智能缩放、自定义光标、录制后编辑、多平台导出。所有计划可用，无需订阅。完整 walkthrough 见 YouTube。站点：https://cleanshot.com
- **互动**: 2970+ 赞、37.1 万+ 浏览、2360+ 收藏
- **分类建议**: productivity / design / motion
- **链接**: https://x.com/CleanShot/status/2094803447920967862

## 3. GitHub Copilot — Claude Fable 5.1 全面可用

- **作者**: @github
- **时间**: 2026-09-01 23:51 UTC
- **视频**: 约 123 秒演示
- **亮点**: Claude Fable 5.1（Anthropic Mythos 模型系列最新）现已在 GitHub Copilot 全面可用。测试显示在长时编码任务、深度代码库研究、复杂 agentic 工作流上表现强劲。可在 Copilot 应用、CLI 或 VS Code 中使用。注意默认数据保留用于安全分类器，企业可申请零保留例外。
- **互动**: 74 赞、1.1 万+ 浏览
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/github/status/2094936182945886329

## 4. GitHub CLI — --attach 可重复附件标志

- **作者**: @github
- **时间**: 2026-09-01 20:55 UTC
- **视频**: 约 10 秒演示
- **亮点**: GitHub CLI 新增可重复使用的 --attach 标志，可上传本地图片或视频，并在 issue、PR 或评论正文中内联引用。所有计划、所有用户现已可用。
- **互动**: 349 赞、7.4 万+ 浏览、112 收藏
- **分类建议**: developer-tools
- **链接**: https://x.com/github/status/2094891879959539773

## 5. Linear Agent — 无需回复时用表情回应

- **作者**: @linear
- **时间**: 2026-09-01 18:30 UTC
- **视频**: 约 12 秒演示
- **亮点**: 生活质量改进：当无需文字回复时，Linear Agent 现在会用表情回应消息而非回复。减少“收到”类噪音，更像好队友。
- **互动**: 172 赞、2.6 万+ 浏览、42 收藏
- **分类建议**: productivity / ai
- **链接**: https://x.com/linear/status/2094855377443606886

## 6. Notion — Claude Fable 5.1 支持 Custom Agents

- **作者**: @NotionHQ
- **时间**: 2026-09-01 18:06 UTC
- **视频**: 约 9 秒演示
- **亮点**: Claude Fable 5.1 现已可用于 Notion Custom Agents。相比 Fable 5 全面提升，尤其适合复杂知识工作，计划和摘要更简洁。因 Anthropic 数据保留策略，需在设置中手动启用 Restricted Access Models。
- **互动**: 337 赞、2 万+ 浏览、28 收藏
- **分类建议**: productivity / ai
- **链接**: https://x.com/NotionHQ/status/2094849375763886555

## 7. Runway Ruby — ACES 色彩管理支持

- **作者**: @runwayml
- **时间**: 2026-09-01 17:46 UTC
- **视频**: 约 25 秒演示
- **亮点**: ACES 现已在 Runway Ruby 中可用。可导出 scene-referred、half-float EXR 序列（ACEScg 1.3 与 2.0），直接接入专业后期管线。立即试用。
- **互动**: 88 赞、1.7 万+ 浏览、28 收藏
- **分类建议**: ai / design / motion
- **链接**: https://x.com/runwayml/status/2094844421086884081

## 8. Replit — Auto Mode 智能模型路由（最高 65% 成本节省）

- **作者**: @Replit
- **时间**: 2026-09-01 18:01 UTC
- **视频**: 约 65 秒讲解
- **亮点**: 介绍 Auto Mode。Intelligent Model Routing 自动为管理员、企业与创作者优化成本与效率，无需更改任何设置，最高可节省 65%。由 Engineering Lead 讲解。
- **互动**: 51 赞、5300+ 浏览
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/Replit/status/2094848232740274453

## 9. Higgsfield Genjutsu — 最强 AI 视频角色运动迁移

- **作者**: @higgsfield
- **时间**: 2026-09-01 18:35 UTC
- **视频**: 约 59 秒发布演示
- **亮点**: 推出 Genjutsu，目前最强 AI 视频转换工具。上传视频 + 角色，几步即可精确迁移动作、口型同步、镜头运动与 VFX，细节一致性极高。个人计划免费试用：https://higgsfield.ai/genjutsu
- **互动**: 545 赞、7.5 万+ 浏览、229 收藏
- **分类建议**: ai / motion / design
- **链接**: https://x.com/higgsfield/status/2094856679544533430

## 10. WebMCP + agent-browser — 让 Web 原生支持 Agent

- **作者**: @ctatedev（Vercel Labs）
- **时间**: 2026-09-01 18:11 UTC
- **视频**: 约 13 秒演示
- **亮点**: 推出 WebMCP + agent-browser。Web 正在变成 agent-native。agent-browser 可发现并调用工具（webmcp list/invoke），缺失工具时回退到浏览器自动化。实验性功能，v0.36 可用，GitHub：https://github.com/vercel-labs/agent-browser
- **互动**: 505 赞、2.1 万+ 浏览、393 收藏
- **分类建议**: developer-tools / ai / open-source
- **链接**: https://x.com/ctatedev/status/2094850640253972706

## 11. Meta Muse Voice Transcribe — 实时多语言音频感知

- **作者**: @spencerbarnett（Meta Superintelligence Labs）
- **时间**: 2026-09-01 17:47 UTC
- **视频**: 约 54 秒演示
- **亮点**: 推出 Muse Voice Transcribe，Meta 首个实时音频感知模型。支持 70+ 语言，可进行 20+ 说话人 diarization。现已在 Meta AI macOS 应用中可用。研究博客：https://research.meta.ai/blog/introducing-muse-voice-transcribe
- **互动**: 72 赞、4000+ 浏览、30 收藏
- **分类建议**: ai / audio
- **链接**: https://x.com/spencerbarnett/status/2094844499696464249

## 12. Gemini — Agentic Video Understanding（主动目标导向视频理解）

- **作者**: @GoogleAIStudio
- **时间**: 2026-09-01 17:34 UTC
- **视频**: 约 59 秒演示
- **亮点**: 引入 agentic video understanding。模型不再固定帧率静态处理，而是主动决定看什么、以什么速度、用何种模态（帧/音频/转录），只拉取需要的信号。成本最高降 66%，token 消耗最高降 88%，同时提升准确率。现已通过 Gemini API 与 AI Studio 可用。
- **互动**: 2026 赞、18.9 万+ 浏览、1352 收藏
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/GoogleAIStudio/status/2094841307935957304

## 13. OpenArt Chat Mode — 对话式创作

- **作者**: @openart_ai
- **时间**: 2026-09-01 17:20 UTC
- **视频**: 约 50 秒演示
- **亮点**: 推出 Chat Mode。直接用自然语言告诉 OpenArt 想创建什么：一次请求多图多视频、粘贴 URL 转创意、简单对话修改、自动选模型与设置。无需 prompt 工程或在工具间切换。
- **互动**: 66 赞、3100+ 浏览
- **分类建议**: ai / design / consumer
- **链接**: https://x.com/openart_ai/status/2094837842468094360

---

## 已在 08-31 / 09-01 文档或目录中出现（仅交叉引用，不重复入队）

- **levelsio Infinite Slop 持续更新**（广告赞助、新闻片段、队列优化等）：已见 08-31 / 09-01 汇总
- **Runway Solaris**、**Monid**、**monoshot**、**Antigravity /boost** 等：已见 09-01 汇总

---

## 已过滤（不入库）

- 纯加密货币 / 代币 / meme / NFT 交易。
- 游戏 / 娱乐 / 影视 / 体育预告与个人生活视频。
- 政治、军事、新闻事件视频。
- 纯二次解读、教程或低信号个人 demo（无完整产品落地）。
- ship.mov 或第三方帮别人生成的发布片回复（非原始产品帖）。
- 硬件/消费电子非软件产品（如 Dyson AI 牙刷等，信号偏弱或非核心目录）。

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（x_keyword_search 搭配 `filter:videos` + `since:2026-08-31/09-01` + `min_faves` + launched/now live/introducing/just shipped/MCP/agent + from: watchlist 与高信号账号；x_semantic_search 语义检索产品发布与独立开发者 demo；x_thread_fetch 获取 Perplexity / CleanShot / GitHub / Linear / Notion / Higgsfield / WebMCP / Gemini 等完整上下文）。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-02-zh-summary.md` 写入 inbox（与其它 discovery PR 合并时用 `node scripts/merge-inbox.mjs` 做并集）。再按 AGENTS.md 配方正式发布。
