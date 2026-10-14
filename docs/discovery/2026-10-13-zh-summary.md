# 2026-10-13 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch）。窗口：2026-10-10 之后至 2026-10-13 上午 CST（主要补 10-10 文档之后的高信号片，集中在 10-11 / 10-12）。与 10-09 / 10-10 文档互补，不重复 Pine Computer、Codex Composer Predictions、Maritime、Infinite GTM、Capy×Paper、Plannotator Inbox、Claude Dashboards/Motion、GPT-6.1 Sol Ultrafast、Higgsfield Katana 等。排除阅读 < 500，以及政治、娱乐、体育、音乐、代币 / NFT、纯游戏与无关教程。不改 `src/data/videos.json` 或 `inbox.json`。

GitHub code search（`repo:dingyi/whatships.com`）未命中下列 tweetId。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-13-zh-summary.md
```

---

## 1. Meta Muse Wonder 系列

- **作者**：@AIatMeta
- **时间**：2026-10-12 17:02 UTC
- **视频**：约 153 秒
- **亮点**：watchlist 相关官方模型首发。Introducing Muse Wonder 与 Muse Wonder Full，号称最强能力的 frontier 模型，面向个人与专业 agentic 任务。支持 Active Memory（跨对话上下文）与 Active Focus（长任务持续目标导向）。Muse Wonder 当天通过 Meta Model API 与 Muse Code 可用；Muse Wonder Full 仅 Muse Code 订阅者可用。将尽快上线个人 agent 产品 Muse。同线程有基准对比与研究博客链接。https://research.meta.ai/blog/muse-wonder
- **互动**：约 1760 赞、172 转发、149 引用、149 回复、288 收藏、15.2 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/AIatMeta/status/2109691148943999167
- **tweetId**：2109691148943999167

---

## 2. The X Subscription

- **作者**：@SpaceXSI
- **时间**：2026-10-12 23:08 UTC
- **视频**：约 10 秒
- **亮点**：统一计划发布。将 Grok、Cursor 与 X Premium 计划统一为 The X Subscription。从 Free 到 Ultra 五档，每档提供比替换计划更高的自有模型用量/美元。现有订阅者可保留或切换并关联账号。渐进推出，账单设置中查看可用性与限时优惠。短视频配图说明。
- **互动**：约 6724 赞、771 转发、692 引用、560 回复、1346 收藏、92.5 万+浏览
- **分类建议**：ai / consumer / developer-tools
- **链接**：https://x.com/SpaceXSI/status/2109783335296008414
- **tweetId**：2109783335296008414

---

## 3. Factory Environments

- **作者**：@FactoryAI
- **时间**：2026-10-12 19:09 UTC
- **视频**：约 34 秒（另有约 102 秒跟进片）
- **亮点**：云端 agent 沙盒一般可用。Introducing Environments，为 Droid 提供可复用的沙盒定义（仓库、工具、依赖），预先构建为便携镜像。支持并行长任务 Mission、自动化与不同团队/项目的机器上下文。云端运行可离线继续。https://factory.com/news/droids-now-have-a-fleet-of-sandboxes
- **互动**：约 280 赞、19 转发、52 引用、33 回复、95 收藏、3.0 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/FactoryAI/status/2109723187563184493
- **tweetId**：2109723187563184493

---

## 4. Restless

- **作者**：@gkoberger（@readme 创始人）
- **时间**：2026-10-12 18:07 UTC
- **视频**：约 75 秒
- **亮点**：Introducing Restless。面向 agent 的 API 产品层：每次调用、支持问题、PR、错误信息都让 API 为下一个 agent 变得更好。提供实时日志、托管 MCP（agent 可搜索/重放生产调用并将端点与文档作为工具）、错误响应自带修复步骤。一行命令初始化：`npx restless init`。https://www.restless.ai/
- **互动**：约 553 赞、673 转发、149 引用、117 回复、480 收藏、106 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/gkoberger/status/2109707495820464356
- **tweetId**：2109707495820464356

---

## 5. Sentient OS

- **作者**：@aditya_vellanki（YC F26）
- **时间**：2026-10-12 17:34 UTC
- **视频**：约 37 秒
- **亮点**：Introducing Sentient OS。设备端 AI，一夜之间理解用户整体生活，并以自己的光标在电脑上接手任务。由 Y Combinator、Afore Capital、Pioneer Fund 与 a16z Speedrun scout fund 背书。个人开发者产品发布片。
- **互动**：约 174 赞、16 转发、2 引用、34 回复、137 收藏、1.4 万+浏览
- **分类建议**：ai / productivity / consumer
- **链接**：https://x.com/aditya_vellanki/status/2109699200682524921
- **tweetId**：2109699200682524921

---

## 6. OpenAI Annotations + WebMCP

- **作者**：@OpenAIDevs
- **时间**：2026-10-12 18:42 UTC
- **视频**：约 154 秒
- **亮点**：功能演示片。Annotations 与 WebMCP 结合，让 agent 获得更多行动上下文。展示 @kagigz 如何用自定义注释控件与建议提示在 ChatGPT 浏览器中编辑场景并更新开支。https://learn.chatgpt.com/docs/annotations-extensibility
- **互动**：约 592 赞、39 转发、24 引用、82 回复、269 收藏、5.9 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/OpenAIDevs/status/2109716341490106869
- **tweetId**：2109716341490106869

---

## 7. Artificial Analysis AA-3D

- **作者**：@ArtificialAnlys
- **时间**：2026-10-12 23:40 UTC
- **视频**：约 40 秒（线程多片）
- **亮点**：新基准发布。AA-3D：评估 AI 模型作为 agent 在离线沙盒中根据文本 brief 构建交互式 3D 场景（three.js）的能力。55 个 brief、人类盲比投票排名。顶部 Claude Sonnet 5.5 / Opus 5.5 / GPT-6 Astra 等统计打平。含详细流程与结果视频。https://artificialanalysis.ai/articles/aa-3d
- **互动**：约 317 赞、32 转发、16 引用、34 回复、49 收藏、1.4 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/ArtificialAnlys/status/2109791341802885209
- **tweetId**：2109791341802885209

---

## 8. Higgsfield Katana 更新（aura farming）

- **作者**：@higgsfield
- **时间**：2026-10-12 19:32 UTC
- **视频**：约 72 秒
- **亮点**：功能更新片。Higgsfield Katana 现在对所有人开放 aura farming：选预设或上传编辑，添加角色照片，生成自己的版本。可通过 Higgsfield MCP 在 Claude 中使用 `/katana`。
- **互动**：约 614 赞、160 转发、10 引用、47 回复、233 收藏、4.5 万+浏览
- **分类建议**：ai / motion / design
- **链接**：https://x.com/higgsfield/status/2109728823017365536
- **tweetId**：2109728823017365536

---

## 9. Keyframe Labs persona-2.0-live

- **作者**：@KeyframeLabs
- **时间**：2026-10-12 22:06 UTC
- **视频**：约 65 秒
- **亮点**：Introducing 世界最表达与可控的 avatar 模型。支持词级表情精确控制，现实感与可扩展性领先。persona-2.0-live 进入 preview。https://keyframelabs.com
- **互动**：约 30 赞、5 转发、9 引用、12 回复、7 收藏、2300+浏览
- **分类建议**：ai / consumer / design
- **链接**：https://x.com/KeyframeLabs/status/2109767728680853968
- **tweetId**：2109767728680853968

---

## 10. Gravity Index

- **作者**：@trygravityai
- **时间**：2026-10-11 23:19 UTC
- **视频**：约 41 秒
- **亮点**：Introducing Gravity Index。免费的 1600+ 开发者工具目录，agent 可搜索找到适合任务的工具；每次调用 agent 获得分成（由列入品牌资助）。面向 agent 的工具发现网络。
- **互动**：约 129 赞、14 转发、7 引用、31 回复、106 收藏、1.4 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/trygravityai/status/2109423561945632981
- **tweetId**：2109423561945632981

---

## 11. Notion iPad 原生重建

- **作者**：@NotionHQ
- **时间**：2026-10-10 01:32 UTC
- **视频**：约 28 秒
- **亮点**：功能更新片。iPad 应用从主要 Web View 重建为原生。新增侧边栏与 inbox、Notion AI 与搜索；新编辑器即将到来。iOS 27 上可通过 Siri 查找/创建页面、开启 AI 聊天或记录会议笔记。
- **互动**：约 1637 赞、67 转发、43 引用、88 回复、253 收藏、20.8 万+浏览
- **分类建议**：productivity
- **链接**：https://x.com/NotionHQ/status/2108732487925117405
- **tweetId**：2108732487925117405

---

## 12. Cesium ion MCP Server

- **作者**：@CesiumJS
- **时间**：2026-10-12 21:04 UTC
- **视频**：约 56 秒
- **亮点**：功能上线。Cesium ion MCP Server 现已可用，将 3D 地理空间数据直接连接到已有 AI 工具，可在代码编辑器内构建、查询与测试。https://cesium.com/blog/2026/10/12/introducing-the-cesium-ion-mcp-server/
- **互动**：约 33 赞、6 转发、2 引用、18 收藏、1200+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/CesiumJS/status/2109752165472317777
- **tweetId**：2109752165472317777

---

## 13. Astrocade MCP

- **作者**：@PlayAstrocade
- **时间**：2026-10-12 17:39 UTC
- **视频**：约 38 秒
- **亮点**：Introducing Astrocade MCP。让 AI agent 成为游戏工作室：用 GPT-6.1 Sol、Opus 5.5 等构建更大游戏、发布到百万玩家并通过内容赚取。https://www.astrocade.com/create/mcp
- **互动**：约 120 赞、14 转发、5 引用、18 回复、104 收藏、7900+浏览
- **分类建议**：ai / developer-tools / consumer
- **链接**：https://x.com/PlayAstrocade/status/2109700538581569810
- **tweetId**：2109700538581569810

---

## 14. Boat.dev credentials proxying

- **作者**：@AniC_dev（@boatdotdev）
- **时间**：2026-10-12 23:22 UTC
- **视频**：约 74 秒
- **亮点**：功能上线片。在 Boat 沙盒中引入 LLM & API credentials proxying。开启后沙盒获得 mock key并安全路由到用户的凭证；支持团队使用、用量监控、密钥轮换与多配置文件。https://boat.dev
- **互动**：约 26 赞、4 转发、1 引用、5 回复、8 收藏、1000+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/AniC_dev/status/2109786742349832229
- **tweetId**：2109786742349832229

---

## 15. Saru AI Concierge

- **作者**：@TKhasnavis（@hello_saru，Speedrun）
- **时间**：2026-10-12 17:32 UTC
- **视频**：约 44 秒
- **亮点**：正式发布 Saru。面向消费品牌的 AI concierge，在 iMessage、Instagram 等对话表面上处理产品发现、购买、退换、客服与再激活，无需跳转。后台还有 AI 工作力持续优化体验。
- **互动**：约 56 赞、10 转发、18 回复、17 收藏、1.6 万+浏览
- **分类建议**：ai / consumer / productivity
- **链接**：https://x.com/TKhasnavis/status/2109698749501247946
- **tweetId**：2109698749501247946

---

## 跟进，不单独入队

- Alexandr Wang 个人帖介绍 Muse Wonder（短视频），与官方帖重叠。
- Overlap Campaigns（AI agent 跑 clipping campaign）为创作者工具上线，视频为产品发布片。

## 已入队，不重复

10-10 文档中的 Pine Computer、Codex Composer Predictions、Maritime、Infinite GTM Agent、Capy × Paper、Plannotator Inbox 等条目。

## 排除

政治/军事宣传、体育节目、音乐/动画发行、代币/NFT/memecoin 发布、纯游戏 demo、阅读量低于 500 的帖子，以及无关教程与娱乐内容。
