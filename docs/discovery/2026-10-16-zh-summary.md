# 2026-10-16 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch）。窗口：2026-10-14 至 2026-10-16 09:15 CST（主要补 10-15 高信号片）。与 10-14 文档互补，不重复已合入条目。排除阅读 < 500，以及政治、娱乐、体育、音乐、代币 / NFT、纯游戏与无关教程。不改 `src/data/videos.json` 或 `inbox.json`。

GitHub code search（`repo:dingyi/whatships.com`）未命中下列 tweetId。以仓库搜索未命中且未出现在已合入的 discovery 文档为准。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-16-zh-summary.md
```

---

## 1. Krea 3 Beta

- **作者**：@krea_ai
- **时间**：2026-10-15 15:49 UTC
- **视频**：约 60 秒
- **亮点**：开放 Krea 3 beta，图像编辑新 frontier。端到端 2K 编辑 <8 秒，质量对标 Nano Banana Pro / GPT Image 2.5；支持 bounding box 控制与精确多轮编辑。官方发布片含演示与研究背景。
- **互动**：约 1547 赞、163 转发、146 引用、163 回复、669 收藏、31.4 万+浏览
- **分类建议**：ai / design / motion
- **链接**：https://x.com/krea_ai/status/2110760037128012146
- **tweetId**：2110760037128012146

---

## 2. inflight 原型反馈层

- **作者**：@ridd_design（个人开发者）
- **时间**：2026-10-15 15:05 UTC
- **视频**：约 82 秒
- **亮点**：Introducing inflight，原型缺失的反馈层。支持任意 agent、钉住评论 + 视频，并将反馈转为 Claude 的下一步行动。面向现代设计团队加速决策。https://inflight.co
- **互动**：约 789 赞、72 转发、63 引用、181 回复、507 收藏、10.2 万+浏览
- **分类建议**：design / ai / productivity
- **链接**：https://x.com/ridd_design/status/2110748819847630872
- **tweetId**：2110748819847630872

---

## 3. React Bits 2.0

- **作者**：@davidhaz
- **时间**：2026-10-15 08:58 UTC
- **视频**：约 38 秒（+跟进片）
- **亮点**：Introducing React Bits 2.0。库重建，组件更锐利、动画更流畅并从预设开始；设计工具从零重建。216 个动画 React 组件，免费开源。含 Texture Lab、Shape Magic、Background Studio 等工具套件。https://reactbits.dev
- **互动**：约 1402 赞、66 转发、10 引用、68 回复、1370 收藏、6.3 万+浏览
- **分类建议**：design / developer-tools / motion
- **链接**：https://x.com/davidhaz/status/2110656515996832231
- **tweetId**：2110656515996832231

---

## 4. earshot（AI agent 耳朵）

- **作者**：@LexnLin（个人开发者）
- **时间**：2026-10-15 23:40 UTC
- **视频**：约 22 秒
- **亮点**：Introducing earshot。给 AI coding agent 提供“耳朵”：本地 CPU 运行，可听声音、判断与生成自己的好声音（earshot forge 让 agent 写代码生成声音、听、打分、重写循环）。视频中所有声音均由代码生成。解决 Opus 5.5 等生成发布视频时 sfx 糟糕问题。
- **互动**：约 347 赞、16 转发、5 引用、37 回复、294 收藏、8300+浏览
- **分类建议**：ai / developer-tools / design
- **链接**：https://x.com/LexnLin/status/2110878517197975717
- **tweetId**：2110878517197975717

---

## 5. Beeline（人与 agent 团队聊天）

- **作者**：@usebeelineapp
- **时间**：2026-10-15 21:15 UTC
- **视频**：约 84 秒
- **亮点**：Introducing Beeline，人类与 agent 的团队聊天。持久房间 + 短暂角落；GitHub 作为骨干（worktrees、直接开 PR）；1500+ App 集成（Composio）；自动注册登录；实时计算机使用观看；全团队实时语音。任意 agent/订阅/哈纳斯。完全开源 MIT。https://usebeeline.app https://github.com/Beeline-Work/beeline
- **互动**：约 33 赞、2 转发、1 引用、2 回复、9 收藏、31 万+浏览
- **分类建议**：ai / developer-tools / productivity
- **链接**：https://x.com/usebeelineapp/status/2110842064686514654
- **tweetId**：2110842064686514654

---

## 6. Devin Oncall

- **作者**：@cognition
- **时间**：2026-10-15 17:49 UTC
- **视频**：约 55 秒
- **亮点**：Introducing Devin Oncall。Devin 自动调查告警与 bug，帮助团队诊断并解决生产事故。已为一些大公司每天处理数千告警，与 Datadog、Dynatrace、Sentry 等集成。https://devin.ai/oncall https://devin.ai/blog/introducing-devin-oncall
- **互动**：约 634 赞、61 转发、68 引用、48 回复、196 收藏、9.3 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/cognition/status/2110790097369010292
- **tweetId**：2110790097369010292

---

## 7. Vercel Drives

- **作者**：@vercel
- **时间**：2026-10-15 17:42 UTC
- **视频**：约 22 秒
- **亮点**：Vercel Drives 一般可用。现可在 Vercel 上运行有状态 agent（persistent storage）。解决大多数 agent demo 刷新即失效的问题。https://vercel.com/blog/introducing-vercel-drives-persistent-storage-for-agents
- **互动**：约 407 赞、26 转发、17 引用、35 回复、167 收藏、5.4 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/vercel/status/2110788459803938944
- **tweetId**：2110788459803938944

---

## 8. GPT-Live-1.1 新语音

- **作者**：@OpenAI
- **时间**：2026-10-15 18:19 UTC
- **视频**：约 41 秒
- **亮点**：GPT-Live-1.1 带来新语音、更好口音与更少“checking...”。更新到 ChatGPT Voice、Codex 与 dots；新增法语、德语、印地语、墨西哥西班牙语、韩语、日语语音。今天全用户推出，API 即将支持。
- **互动**：约 8049 赞、571 转发、367 引用、558 回复、1325 收藏、73 万+浏览
- **分类建议**：ai / consumer
- **链接**：https://x.com/OpenAI/status/2110797830361436604
- **tweetId**：2110797830361436604

---

## 9. Envato Edit with AI

- **作者**：@envato
- **时间**：2026-10-15 20:04 UTC
- **视频**：约 34 秒
- **亮点**：发布 Edit with AI。从 2900 万+ 人工创作资产开始，用 AI 编辑（改背景、光线、格式等），保留真实感同时避免纯 AI 生成的虚假感。商用许可。官方功能推出片。
- **互动**：约 195 赞、55 转发、129 引用、74 回复、259 收藏、29.7 万+浏览
- **分类建议**：design / ai / motion
- **链接**：https://x.com/envato/status/2110824137531019567
- **tweetId**：2110824137531019567

---

## 10. Notion 按钮自动化消息 agent

- **作者**：@NotionHQ
- **时间**：2026-10-15 21:59 UTC
- **视频**：约 17 秒
- **亮点**：新功能。Button automations 现可消息你的 agents。给按钮添加 prompt，团队任何人点击即可触发工作流。
- **互动**：约 222 赞、17 转发、2 引用、12 回复、86 收藏、1.2 万+浏览
- **分类建议**：productivity / ai
- **链接**：https://x.com/NotionHQ/status/2110853125389029437
- **tweetId**：2110853125389029437

---

## 跟进，不单独入队

- OpenAI Devs Sites 一般可用 + Codex 硬件项目展示站（短视频，功能推出）。
- Venice 上线 Muse Spark / Hy4 Preview（短视频公告）。
- PrismML Bonsai 2 三元小模型系列（多为图片/文字，视频为二次分享）。

## 已入队，不重复

前序文档中的 Gemini 4 Argon、Figma Make、Devin 集成、TasteSkill 等条目。

## 排除

代币 / NFT / memecoin 发布、纯游戏 demo、政治与军事宣传、体育、低阅读量帖子（<500），以及无关教程与娱乐内容。