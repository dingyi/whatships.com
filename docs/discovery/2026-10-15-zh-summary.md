# 2026-10-15 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch）。窗口：2026-10-14 上午至 2026-10-15 上午 CST（约 UTC 10-13 16:00 至 10-15 04:00+，补至当日下午高信号）。与前序文档（含已合入的 10-15 早期条目）互补，不重复已合入条目。排除阅读 < 500，以及政治、娱乐、体育、音乐、代币 / NFT、纯游戏与无关教程。不改 `src/data/videos.json` 或 `inbox.json`。

GitHub code search（`repo:dingyi/whatships.com`）未命中下列新 tweetId。以仓库搜索未命中且未出现在已合入的 discovery 文档为准。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-15-zh-summary.md
```

---

## 1. Figma Config India 新功能（Code Layers / Specs / Payload / Guidelines）

- **作者**：@figma
- **时间**：2026-10-15 05:26-06:26 UTC
- **视频**：约 24-50 秒（多段）
- **亮点**：Config India 官方发布。Code Layers（open beta）：在 canvas 上与代码协作构建原型。Specs（open beta）：新的 markdown 上下文媒介，可跨 Figma 平台移动上下文。Payload 集成到 Figma Make，支持真实数据构建网站。Guidelines 与 Code Sources 给 agent 更多设计系统上下文。多段官方视频与 Dylan Field 帖。https://www.figma.com/blog/build-by-design/
- **互动**：单帖约 686 赞、52 转发、216 收藏、89 万+浏览（Specs）；汇总帖 1.1 万+浏览
- **分类建议**：design / ai / developer-tools
- **链接**：https://x.com/figma/status/2110618179982749940
- **tweetId**：2110618179982749940

---

## 2. React Bits 2.0

- **作者**：@davidhaz
- **时间**：2026-10-15 08:58 UTC
- **视频**：约 38 秒
- **亮点**：Introducing React Bits 2.0。动画 React 组件库重建，216 个组件更锐利、动画更流畅、从 presets 开始，设计工具完全重建。免费开源。线程含更多组件与工具视频。https://reactbits.dev
- **互动**：约 543 赞、23 转发、452 收藏、2.1 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/davidhaz/status/2110656515996832231
- **tweetId**：2110656515996832231

---

## 3. Hermes Agent Connectors

- **作者**：@sidbing（@NousResearch）
- **时间**：2026-10-14 20:22 UTC
- **视频**：约 68 秒
- **亮点**：Hermes Agent 推出 50+ connectors，无需账号即可用，支持多账号、权限限制、RBAC。链接 Nous Portal 自动同步。配合 Hermes v0.22.0 Threshold Release。
- **互动**：约 377 赞、21 转发、272 收藏、6.9 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/sidbing/status/2110466271880028192
- **tweetId**：2110466271880028192

---

## 4. torii

- **作者**：@jackson_felty
- **时间**：2026-10-14 23:36 UTC
- **视频**：约 50 秒
- **亮点**：introducing torii：你的 agents、你的订阅、你的机器。本地运行的 agent manager，通过 Telegram 连接 Claude Code / Codex，支持委派与账号轮换，开源。避免锁定生态系统。
- **互动**：约 40 赞、6 转发、54 收藏、3500+浏览
- **分类建议**：ai / developer-tools / productivity
- **链接**：https://x.com/jackson_felty/status/2110515064126259687
- **tweetId**：2110515064126259687

---

## 5. AA-Robotics v0.1

- **作者**：@ArtificialAnlys
- **时间**：2026-10-14 22:37 UTC
- **视频**：约 44 秒
- **亮点**：发布 AA-Robotics v0.1，评估前沿模型在物理世界中理解、规划与行动的能力（控制 6 轴机械臂）。GPT-6 Astra 领先。含任务与结果视频。
- **互动**：约 373 赞、38 转发、67 收藏、2.7 万+浏览
- **分类建议**：ai / developer-tools / hardware
- **链接**：https://x.com/ArtificialAnlys/status/2110500262628806787
- **tweetId**：2110500262628806787

---

## 6. Taste Motion Capture

- **作者**：@alexkehr（@buildtaste）
- **时间**：2026-10-14 18:10 UTC
- **视频**：约 36 秒
- **亮点**：just shipped Motion Capture to Taste。用 iPhone 录制任意交互，获得分解与 AI 重建 prompt，可注释喜欢/不喜欢的部分。
- **互动**：约 32 赞、2 转发、6 收藏、1000+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/alexkehr/status/2110432986466545932
- **tweetId**：2110432986466545932

---

## 7. epstein.md

- **作者**：@shipper_now
- **时间**：2026-10-15 07:43 UTC
- **视频**：约 27 秒
- **亮点**：Introducing epstein.md。一个 927k+ 字符的 .MD 文件，专门训练跳过 vibe coded AI slop 设计原则（无盒子阴影、无 emoji、无常见 AI 词等）。面向 indie hacker。
- **互动**：约 593 赞、25 转发、793 收藏、4.4 万+浏览
- **分类建议**：design / ai / developer-tools
- **链接**：https://x.com/shipper_now/status/2110637576935891122
- **tweetId**：2110637576935891122

---

## 8. Zoah MCP

- **作者**：@OpacityHQ
- **时间**：2026-10-14 14:39 UTC
- **视频**：约 138 秒
- **亮点**：Introducing Zoah MCP。你的 agent 现在可在设计 canvas 上工作，每个编辑落在你审查的 branch 上。
- **互动**：约 15 赞、5 转发、6 收藏、1500+浏览
- **分类建议**：design / ai / developer-tools
- **链接**：https://x.com/OpacityHQ/status/2110379851412840654
- **tweetId**：2110379851412840654

---

## 9. X on AgentWeb

- **作者**：@Andrey__HQ（@_agentweb）
- **时间**：2026-10-14 23:18 UTC
- **视频**：约 39 秒
- **亮点**：Introducing: X on AgentWeb。任何 agent 现在可看到 X 上发生的一切，不仅 Grok Bot。让 agent 注册即可。https://www.agentweb.us/
- **互动**：约 28 赞、6 转发、7 收藏、1500+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/Andrey__HQ/status/2110510647989403899
- **tweetId**：2110510647989403899

---

## 10. Grok Bot for AI SEO

- **作者**：@AIsaOneHQ
- **时间**：2026-10-14 22:32 UTC
- **视频**：约 27 秒
- **亮点**：Introducing Grok Bot for AI SEO。agent 可查询 ChatGPT、Claude、Gemini、Perplexity 等关于买家问题，检查 AI Overviews，看品牌推荐。
- **互动**：约 27 赞、4 转发、32 收藏、3100+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/AIsaOneHQ/status/2110498941892723075
- **tweetId**：2110498941892723075

---

## 跟进，不单独入队

- 前序 10-15 文档中的 CDMs、Mirelo SFX 2.0、Kylon、Odessia、Journeys 等已覆盖。
- 纯游戏、代币与娱乐已排除。

## 已入队，不重复

前序文档中的 Gemini 4 Argon 相关、Devin in Pylon、TasteSkill v2、AgentMail Calendar 等。

## 排除

代币 / NFT / memecoin 发布、纯游戏 demo、政治与军事宣传、体育、低阅读量帖子（<500），以及无关教程与娱乐内容。
