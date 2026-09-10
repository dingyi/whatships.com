# 2026-09-10 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / MCP / open source / component / agent 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-08 至 2026-09-10。已排除政治、纯娱乐、游戏周边、加密货币代币与无关教程。与 09-07 已发现文档互补。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-10-zh-summary.md
```

---

## 1. CADArena — AI CAD 生成基准测试

- **作者**：@normalfactoryco
- **时间**：2026-09-09 23:21 UTC
- **视频**：约 8 秒主片 + 90 秒详细失败案例
- **亮点**：Introducing CADArena，跨工程师常用工具基准测试 AI CAD 生成能力。Agent 已能构建准确几何，但难以生成工程师可维护/编辑的 feature tree。配套分数对比与成本分析。
- **互动**：238 赞、1.4 万+ 浏览、104 收藏
- **分类建议**：ai / developer-tools / other
- **链接**：https://x.com/normalfactoryco/status/2097827866079826131

---

## 2. Vesence — Agent-Native Desktop（浏览器 Unix 桌面）

- **作者**：@HenrikTaro
- **时间**：2026-09-09 21:10 UTC
- **视频**：约 21 秒
- **亮点**：为人类与 Agent 构建的浏览器内 Unix-like 桌面。可组合工具、原生 DOCX/XLSX/PPTX 编辑、能力级审批门控。目标：让整个项目可委托。云端持久工作区。
- **互动**：57 赞、6.6k 浏览、60 收藏
- **分类建议**：ai / developer-tools / productivity
- **链接**：https://x.com/HenrikTaro/status/2097794847524495402

---

## 3. Stagehand — Browser Agent Evals（开源）

- **作者**：@Stagehanddev（@browserbase）
- **时间**：2026-09-09 19:08 UTC
- **视频**：约 8 秒
- **亮点**：Introducing Browser Agent Evals。用多种 harness 在 computer-use 任务上基准测试前沿与开源模型。完全开源，可通过 Evals CLI 复现。
- **互动**：22 赞、3.4k 浏览、9 收藏
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/Stagehanddev/status/2097764136965009838

---

## 4. Coinbase for Agents — 现已在 Grok 可用

- **作者**：@CoinbaseDev
- **时间**：2026-09-09 19:01 UTC
- **视频**：约 27 秒
- **亮点**：Coinbase for Agents 现已直接集成到 Grok。在 grok.com 连接 Coinbase 账户后，即可让 Grok 交易、分析与自动化金融工作流，无需 MCP 设置。
- **互动**：380 赞、18 万+ 浏览、144 收藏
- **分类建议**：ai / developer-tools / other
- **链接**：https://x.com/CoinbaseDev/status/2097762296986817012

---

## 5. Legend Diff — 超快 Diff 查看器（开源 macOS）

- **作者**：@jmeistrich（LegendApp）
- **时间**：2026-09-09 14:48 UTC
- **视频**：约 32 秒
- **亮点**：Introducing Legend Diff。处理仓库、PR、超过 100 万行的 .diff；半 bounce 以下、20MB 应用、45MB RAM、统一/分屏、语法高亮、React Native macOS、开源。
- **互动**：182 赞、6.3k 浏览、65 收藏
- **分类建议**：developer-tools / productivity
- **链接**：https://x.com/jmeistrich/status/2097698700944384004

---

## 6. Railway — Postgres 主版本一键升级

- **作者**：@Railway
- **时间**：2026-09-09 16:28 UTC
- **视频**：约 33 秒
- **亮点**：直接在 Railway 升级到更新的 Postgres 主版本。预检兼容性、升级前后自动备份、内置回滚选项。支持独立数据库与 HA 集群。
- **互动**：37 赞、3.1k 浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/Railway/status/2097723754566574118

---

## 7. Supabase — 现已成为 Gemini Enterprise 连接器

- **作者**：@supabase
- **时间**：2026-09-09 15:01 UTC
- **视频**：约 16 秒
- **亮点**：Supabase 现可作为 Gemini Enterprise 连接器。用自然语言查询项目并执行操作，与 GitHub、Linear、Jira 等工具并列。
- **互动**：71 赞、5.2k 浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/supabase/status/2097701910463631605

---

## 8. Iris — 更深层次的颜色调色板工具

- **作者**：@luusssso
- **时间**：2026-09-10 00:24 UTC
- **视频**：约 67 秒
- **亮点**：大多数调色板生成器只给出几个颜色。Iris 进一步定义颜色权重与比例。现已在 Lusso Archive Substack 可用。
- **互动**：30 赞、2.8k 浏览、10 收藏
- **分类建议**：design / productivity
- **链接**：https://x.com/luusssso/status/2097843525681357173

---

## 9. Reactor — H3 Reference Turbo Realtime（MiniMax）

- **作者**：@reactorworld
- **时间**：2026-09-09 18:17 UTC
- **视频**：约 23 秒
- **亮点**：Introducing H3 Reference Turbo Realtime（@MiniMax_AI 最新模型）。支持音视频流，最多 9 张参考图引导生成，控制力更强。今日在 Reactor 可用。
- **互动**：106 赞、9.7k 浏览、64 收藏
- **分类建议**：ai / design
- **链接**：https://x.com/reactorworld/status/2097751351296143567

---

## 10. Cutroom Studio — AI 产品发布视频工作室

- **作者**：@karankendre
- **时间**：2026-09-08 11:41 UTC
- **视频**：约 46 秒
- **亮点**：Introducing Cutroom Studio：用 MiniMax M3 把网站或 brief 转成故事板，逐场景编辑，导出 1080p。前 3 个视频免费，无需注册。
- **互动**：21 赞、3.2k 浏览、19 收藏
- **分类建议**：ai / design / productivity
- **链接**：https://x.com/karankendre/status/2097289257786450084

---

## 已在 09-07 文档或目录中出现（仅交叉引用，不重复入队）

spawn、Flip Workflows、FileTree、Wawa Sensei FPS、PanelUI、supermemory learner-1、Railway Cloud Agents、tldraw flash、HyperFrames、Ammaar GPT-6 Astra 游戏等。

## 已过滤（不入库）

- 各类 iPhone Duo 虚构/概念广告、政治会议介绍视频
- 加密货币交易/复制交易工具（FOMO trading、fomo MFA 等虽有视频但强绑定交易）
- 纯游戏/电竞/音乐发布、粉丝剪辑
- 纯教程、新闻剪辑、非产品核心的个人 demo 或低信号帖
- Receipt 新 UI（偏消费/收据激励，信号一般）

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-10-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
