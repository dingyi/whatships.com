# 2026-10-10 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch）。窗口：2026-10-09 16:00 UTC 至 2026-10-10 13:20 UTC（约 CST 00:00 至 08:20），补 10-09 文档之后的高信号片。与 10-08 / 10-09 文档互补，不重复 Claude Dashboards/Motion、GPT-6.1 Sol Ultrafast、Higgsfield Katana、Nace NDI、Photon A2A 等。排除阅读 < 500，以及政治、娱乐、体育、音乐、代币 / NFT、纯游戏与无关教程。不改 `src/data/videos.json` 或 `inbox.json`。

GitHub code search（`repo:dingyi/whatships.com`）未命中下列 tweetId。`videos.json` 超过 1MB 未能全文拉取，以仓库搜索未命中且未出现在已合入的 discovery 文档为准。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-10-zh-summary.md
```

---

## 1. Pine Computer

- **作者**：@StanleyWei4748（Pine AI）
- **时间**：2026-10-09 16:02 UTC
- **视频**：约 103 秒
- **亮点**：正式发布 Pine Computer。为 AI 重建的云端计算机，不是把人类电脑套给 agent。读结构化浏览器状态而非截图，支持并行多任务、长作业跨应用/文件，提供 Server SDK 与 Web SDK（可嵌入实时桌面，人工接管后交还）。私人 beta，博客给出 SaaS-Bench 对比（更小模型在正确计算机上超过更大模型 + Codex）。https://pinecomputer.io
- **互动**：约 8584 赞、752 转发、344 引用、551 回复、3123 收藏、2300 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/StanleyWei4748/status/2108588887790784897
- **tweetId**：2108588887790784897

---

## 2. Codex Composer Predictions

- **作者**：@OpenAIDevs
- **时间**：2026-10-09 18:22 UTC
- **视频**：约 16 秒
- **亮点**：Codex 桌面端 beta 功能（Pro 用户、本地任务）。根据对话与用户习惯预测下一条消息，Tab 接受或编辑后发送。可在 Settings 关闭。官方称为内部测试最受喜欢的新功能之一。https://help.openai.com/en/articles/20001601-composer-predictions-in-codex
- **互动**：约 4850 赞、230 转发、316 引用、353 回复、903 收藏、75.5 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/OpenAIDevs/status/2108624138369929725
- **tweetId**：2108624138369929725

---

## 3. Maritime

- **作者**：@mariagorskikh（@Maritime_sh，YC F26）
- **时间**：2026-10-09 18:56 UTC
- **视频**：约 72 秒
- **亮点**：Introducing Maritime，为 AI agent 提供云端基础设施。每个 agent 拥有自己的计算机，支持部署、管理与缩放，号称可跑数十亿 agent。托管从 $1/agent/月 起。产品发布片。
- **互动**：约 262 赞、36 转发、15 引用、71 回复、161 收藏、1.8 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/mariagorskikh/status/2108632744838488072
- **tweetId**：2108632744838488072

---

## 4. Infinite GTM Agent

- **作者**：@RiverKhan（@infiniteOS_）
- **时间**：2026-10-09 17:00 UTC
- **视频**：约 63 秒
- **亮点**：个人开发者发布 Infinite，号称世界最先进的 GTM agent。给定站点 + ICP 后自动跑成长漏斗：跟踪并克隆竞对广告、SEO/AEO、有机内容与邮件、Reddit/X 寻买、落地页 A/B 测试。定价 $50/月（对比代理商 $5k），可免费试用。
- **互动**：约 59 赞、4 转发、19 引用、44 回复、46 收藏、1.4 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/RiverKhan/status/2108603405103235330
- **tweetId**：2108603405103235330

---

## 5. Capy × Paper 集成

- **作者**：@capydotai
- **时间**：2026-10-09 18:29 UTC
- **视频**：约 322 秒
- **亮点**：Introducing Capy 与 Paper 的集成。Paper 跑在 Capy 的 VM 里，云端编码 agent 与团队可从任意设备一起做设计。最新更新已可用。长 demo 片。https://capy.ai/blog/paper-integration
- **互动**：约 117 赞、13 转发、15 引用、21 回复、39 收藏、1.2 万+浏览
- **分类建议**：ai / design / developer-tools
- **链接**：https://x.com/capydotai/status/2108625987219206241
- **tweetId**：2108625987219206241

---

## 6. Plannotator Inbox

- **作者**：@plannotator
- **时间**：2026-10-09 16:03 UTC
- **视频**：约 79 秒
- **亮点**：Introducing Plannotator Inbox。为 agent 工作流提供异步决策与反馈入口：agent 发送 markdown/HTML/diff 到有组织的 inbox，人类用原有注释 UX 回复。不是新的 agent 编排层，仍用现有 harness。免费、本地、开源。即将支持移动端。https://plannotator.ai/inbox/
- **互动**：约 208 赞、16 转发、9 引用、18 回复、177 收藏、9500+浏览
- **分类建议**：ai / developer-tools / productivity
- **链接**：https://x.com/plannotator/status/2108589088139886769
- **tweetId**：2108589088139886769

---

## 7. Vercel CLI：Agent 购买域名

- **作者**：@vercel_dev
- **时间**：2026-10-09 20:54 UTC
- **视频**：约 28 秒
- **亮点**：功能上线片。Agent 现在可通过 Vercel CLI 直接购买域名。https://vercel.com/changelog/agents-can-now-buy-domains-with-the-vercel-cli
- **互动**：约 116 赞、5 转发、15 引用、11 回复、35 收藏、3.6 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/vercel_dev/status/2108662483473125448
- **tweetId**：2108662483473125448

---

## 8. ChatGPT Dots 移动端自定义

- **作者**：@dkundel（OpenAI DevX）
- **时间**：2026-10-09 19:20 UTC
- **视频**：约 39 秒
- **亮点**：功能片。现在可从 ChatGPT 移动 App 创建并自定义自己的 dot，同时改善线程控制与 Codex 上下文。https://learn.chatgpt.com/docs/whats-new/dots-october-9-2026
- **互动**：约 114 赞、6 转发、12 回复、23 收藏、8400+浏览
- **分类建议**：ai / consumer
- **链接**：https://x.com/dkundel/status/2108638806585061774
- **tweetId**：2108638806585061774

---

## 9. Notion 搜索设置与 Sidebar Presets

- **作者**：@NotionHQ
- **时间**：2026-10-09 23:18 UTC 与 18:54 UTC
- **视频**：约 15 秒 / 24 秒
- **亮点**：功能更新片。Settings 现在可搜索；工作区管理员可设置 sidebar presets（新成员默认侧边栏，成员可从 + 菜单添加并自定义）。
- **互动**：搜索约 180 赞、9 转发、20699 浏览；presets 约 166 赞、5 转发、14970 浏览
- **分类建议**：productivity
- **链接**：https://x.com/NotionHQ/status/2108698564545380584 （搜索）；https://x.com/NotionHQ/status/2108632089579147488 （presets）
- **tweetId**：2108698564545380584 / 2108632089579147488

---

## 10. Replit This Week in Replit

- **作者**：@Replit
- **时间**：2026-10-09 23:45 UTC
- **视频**：约 422 秒（周更综合片）
- **亮点**：周更汇总。1) Replit Desktop for Windows 私人预览（与 Microsoft / NVIDIA 合作，本地隔离沙箱）；2) 单聊天跨项目工作；3) TikTok Ads MCP，可从 Replit 创建、发布并跟踪广告。https://replit.com/lp/desktop-preview
- **互动**：约 37 赞、8 转发、5176 浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/Replit/status/2108705386886742349
- **tweetId**：2108705386886742349

---

## 11. OpenArt：Ideogram 4.5

- **作者**：@openart_ai
- **时间**：2026-10-09 17:13 UTC
- **视频**：约 22 秒
- **亮点**：模型上架片。Ideogram 4.5 在 OpenArt 上线，支持提示后持续修改颜色、光线、文字等，细节更一致。https://openart.ai/suite/create-image/ideogram-4-5
- **互动**：约 40 赞、13 转发、1 引用、8 回复、9 收藏、2080+浏览
- **分类建议**：ai / design
- **链接**：https://x.com/openart_ai/status/2108606828661870895
- **tweetId**：2108606828661870895

---

## 12. Respan Span-01 Security

- **作者**：@RespanAI
- **时间**：2026-10-09 17:03 UTC
- **视频**：约 14 秒
- **亮点**：Introducing Span-01 Security，Respan Guardrails 后面的模型。在 4 个公开安全基准上表现领先（自称 79%）。可通过 Respan gateway 使用，或免费开启 Guardrails。
- **互动**：约 30 赞、8 转发、2 回复、13 收藏、958+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/RespanAI/status/2108604337417335269
- **tweetId**：2108604337417335269

---

## 跟进，不单独入队

- Coinbase Advanced 键盘快捷键（Brian Armstrong 用 AI 工具自己船到生产），是功能更新而非新产品发布：https://x.com/brian_armstrong/status/2108597711612305863
- Higgsfield Katana 做出的 PHYLLA 风格发布片是技能展示，不是新产品首发。
- ArchDev 新功能（公共路线图、Catch-Up 代码审查），产品已发布，浏览约 2450：https://x.com/CalvinGrunewald/status/2108690208090710239
- OpenWork 连接器在 OpenCode，浏览约 978：https://x.com/benjaminshafii/status/2108696545461936339

## 已入队，不重复

Claude Dashboards 与 Motion、GPT-6.1 Sol Ultrafast、Higgsfield Katana、Nace NDI、Photon A2A、Agently、GotEmail、Atomic Agent Desktop 等 10-09 文档条目。

## 排除

代币 / NFT / memecoin 发布（Pixelpad、FreshSend、QAI、Bunker bounty、Merrymen TRENCHER、Neriapad 等）、纯游戏 demo、政治与军事宣传、体育、低阅读量帖子（<500），以及无关教程与娱乐内容。