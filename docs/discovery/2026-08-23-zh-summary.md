# 2026-08-23 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / product launch / feature drop / MCP 等，并聚焦高互动、有官方演示视频的内容。以下为 2026-08-21 至 08-22 新增高质量候选（待 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-23-zh-summary.md` 追加至 inbox 后由 /admin 审核）。

已通过 tweetId 核对，均未出现在 `src/data/videos.json` 中。

## 1. Runway — Runway Ruby（SDR 到 HDR 视频转换模型）
- **作者**: @runwayml
- **时间**: 2026-08-21 14:24 UTC
- **视频**: ~50 秒官方介绍 + 后续可用公告
- **亮点**: 推出 Runway Ruby——新模型可将 SDR 视频转换为最高 16-bit HDR，支持 ProRes 与 EXR 序列。兼容任何已上传视频或生成输出（最长 30 秒）。随后宣布对 Max 计划与 Enterprise 用户开放，支持 16-bit EXR、10/12-bit ProRes/HEVC，BT.2020 色彩 + PQ/HLG。
- **互动**: 17 万+ 浏览、723 赞、103 转发、370 收藏
- **分类建议**: ai / video / creative-tools
- **链接**: https://x.com/runwayml/status/2090807248402682101

## 2. Simular — Sai-Fi（通过 Meta Ray-Ban 眼镜控制 AI Agent）
- **作者**: @SimularAI
- **时间**: 2026-08-21 22:19 UTC
- **视频**: ~61 秒演示
- **亮点**: 推出开源应用 Sai-Fi，可通过 Meta Ray-Ban 眼镜语音与 AI Agent Sai 对话。Sai 是自主计算机使用 Agent，可看屏幕、移动鼠标、打字，即使离开也能继续工作。底层是 Sai API 与跨设备语音助理；眼镜只是原型接口，真正目标是随时随地可达的自主计算机。同时开放 Sai API 给开发者。
- **互动**: 7.4 万+ 浏览、70 赞、21 转发、27 收藏
- **分类建议**: ai / hardware / developer-tools / robotics
- **链接**: https://x.com/SimularAI/status/2090926852974297577

## 3. Comms — Comms MCP（给 Agent 真实手机号码）
- **作者**: @commsbyosis
- **时间**: 2026-08-21 18:13 UTC
- **视频**: ~61 秒介绍 + 多段场景演示
- **亮点**: 推出 Comms MCP。即日起可给 Agent 分配真实手机号码。Agent 可自主处理：挽回弃单客户（短信沟通并收款）、预约更多通话、收集真实反馈、即时回答产品问题。一站式业务通信能力。
- **互动**: 2.2k+ 浏览、29 赞、1 转发、27 收藏
- **分类建议**: ai / communication / sales / developer-tools
- **链接**: https://x.com/commsbyosis/status/2090864926222954700

## 4. WonderingApp — 自适应 AI 课程（YC 支持）
- **作者**: @HcwXd（@wonderingapp）
- **时间**: 2026-08-22 00:35 UTC
- **视频**: ~13 秒介绍
- **亮点**: 推出首个真正适应「学什么、怎么学、什么时候有空」的 AI 课程。以往个性化只改内容，现在同时适配学习方式（播客/视觉/交互练习/实时对话）与时间碎片（3 分钟通勤或整下午）。从目标与现有基础出发生成个人课程。Early access 今日开放。
- **互动**: 4.2k+ 浏览、62 赞、6 转发、50 收藏
- **分类建议**: ai / education / productivity
- **链接**: https://x.com/HcwXd/status/2090961037545853161

## 5. Amicro — Motion Anime（UI 微交互动画集合）
- **作者**: @SubhanHQ
- **时间**: 2026-08-22 13:44 UTC
- **视频**: ~71 秒演示
- **亮点**: 推出 Motion Anime——精选弹簧、滑动、流体微交互集合。一条 CLI 命令即可为应用添加美观交互图表。属于 Amicro 开源项目（GitHub 已有 1.96k+ stars）。
- **互动**: 2.1 万+ 浏览、696 赞、63 转发、752 收藏
- **分类建议**: design / developer-tools / open-source / frontend
- **链接**: https://x.com/SubhanHQ/status/2091159458693194045

## 6. Bezel Gallery — GPUI 基于 Block Editor
- **作者**: @tianyi_gc
- **时间**: 2026-08-22 13:29 UTC
- **视频**: ~50 秒演示
- **亮点**: 推出基于 GPUI 的 block editor，填补昂贵 AI SaaS 缺失的组件。可在线试用 https://bezel.gallery/。
- **互动**: 7.4k+ 浏览、153 赞、2 转发、130 收藏
- **分类建议**: developer-tools / design / ai / open-source
- **链接**: https://x.com/tianyi_gc/status/2091155761170976784

## 7. Phonon — 本地开源语音打字工具
- **作者**: @elliotarledge
- **时间**: 2026-08-22 17:07 UTC
- **视频**: ~2 分 33 秒演示
- **亮点**: 推出 Phonon——快速、本地、开源的语音打字工具，基于 Parakeet + Gemma 4。使用 OCR 获取屏幕上下文，保持极简，让你专注向模型表达想法。下载：https://phonon.sh
- **互动**: 3.3k+ 浏览、73 赞、4 转发、40 收藏
- **分类建议**: ai / productivity / open-source / developer-tools
- **链接**: https://x.com/elliotarledge/status/2091210582460375467

## 8. Agentic Productivity — Agent 生产力 90 天趋势开源仓库
- **作者**: @DavidOndrej1
- **时间**: 2026-08-22 19:05 UTC
- **视频**: ~3 分 52 秒介绍
- **亮点**: 推出开源仓库，展示你使用 Agent 的 90 天生产力趋势。100% 免费开源，2 分钟即可完成设置。
- **互动**: 5.2k+ 浏览、98 赞、1 转发、119 收藏
- **分类建议**: ai / productivity / open-source / developer-tools
- **链接**: https://x.com/DavidOndrej1/status/2091240448975073662

## 9. Swarms — MCP Scribe（OpenAPI 自动转 MCP Server）
- **作者**: @swarms_corp
- **时间**: 2026-08-22 20:49 UTC
- **视频**: ~16 秒介绍
- **亮点**: 推出 MCP Scribe——把 OpenAPI 规范自动转成生产级 MCP Server，把 API 操作暴露为模型可调用的工具。内置认证、重试、限流、响应处理与传输支持，无需重建基础设施即可把现有 API 接入 agentic 工作流。支持 OpenAPI 3.x / Swagger 2.0。
- **互动**: 2.2k+ 浏览、22 赞、7 转发、8 收藏
- **分类建议**: ai / developer-tools / open-source / infrastructure
- **链接**: https://x.com/swarms_corp/status/2091266592017416598

## 10. Nubit — Bitcoin Thunderbolt 开源（异步链下支付协议）
- **作者**: @nubit_org
- **时间**: 2026-08-22 20:32 UTC
- **视频**: ~30 秒介绍
- **亮点**: 正式开源 Bitcoin Thunderbolt——快速、安全、异步的比特币链下支付协议。研究论文被 ACM CCS 2026 接收。支持离线收发、无需路由或流动性再平衡。已结算超 $1B 交易价值、1000 万+ 交易、10 万+ 用户。
- **互动**: 4.8k+ 浏览、27 赞、5 转发、4 收藏
- **分类建议**: crypto / blockchain / open-source / research
- **链接**: https://x.com/nubit_org/status/2091262297281081719

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（x_keyword_search 搭配 filter:videos + since:2026-08-20/21/22 + min_faves + 关键词 launched/now live/introducing/just shipped/feature drop/MCP + from: 重点账号；x_semantic_search 语义检索；x_thread_fetch 获取完整线程与上下文）。聚焦产品设计、科技/AI 公司、个人开发者及高信号官方发布视频。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-23-zh-summary.md` 将候选写入 inbox，或手动挑选 tweetId 加入，再按 AGENTS.md 配方（syndication 补全 → posters:capture → 合并至 videos.json）正式发布。
