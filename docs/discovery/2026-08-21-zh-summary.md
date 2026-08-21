# 每日产品发布视频发现报告 · 2026-08-21

使用 Grok 内置 X 搜索（x_keyword_search + x_semantic_search + filter:videos）深度查询产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子。聚焦产品发布、功能上线、demo/walkthrough 类内容。时间范围：2026-08-08 至 2026-08-21。

以下为筛选后的高相关候选（已排除游戏内购、纯娱乐、低质量内容）。建议维护者使用 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-21-zh-summary.md` 或手动审查后加入 `src/data/inbox.json` / `videos.json`。

---

## 1. Claude Academy（Anthropic / Claude）

- **Tweet**: https://x.com/claudeai/status/2090518650251804742
- **Tweet ID**: 2090518650251804742
- **作者**: @claudeai
- **发布时间**: 2026-08-20
- **视频**: 有（约 34 秒）
- **中文总结**: Anthropic 正式上线 Claude Academy——免费、开放的 AI 学习平台。无论是 AI 初学者还是日常重度用户，都有对应路径：从基础概念、如何与 AI 协作，到 Claude 具体产品（Code、Platform、MCP 等）的课程与教程。强调“教学与学习 AI 的方式”。高互动（1.1M+ 浏览、1万+ 赞）。

**适合分类**: ai / productivity

---

## 2. Spline V2（Spline）

- **Tweet**: https://x.com/splinetool/status/2090500256190603636
- **Tweet ID**: 2090500256190603636
- **作者**: @splinetool
- **发布时间**: 2026-08-20
- **视频**: 有（主视频约 57 秒，后续系列 demo）
- **中文总结**: Spline 完整重建 3D 编辑器，面向 agentic 时代发布 V2。新 UI、AI Agent Mode + Spline MCP（可连接任意 agent 生成/编辑可编辑 3D 场景）、更快 WebGPU 引擎、PBR/HDR、自定义代码/脚本、更小 runtime。桌面端也同步大改。典型产品发布演示视频。

**适合分类**: design / developer-tools

---

## 3. Notion Skills（Notion）

- **Tweet**: https://x.com/NotionHQ/status/2090500028393726026
- **Tweet ID**: 2090500028393726026
- **作者**: @NotionHQ
- **发布时间**: 2026-08-20
- **视频**: 有（约 37 秒）
- **中文总结**: Notion 推出 Skills 功能：把团队最佳实践变成可复用的“技能”，教给 Notion Agent。Agent 可自动加载、分享，也可用于本地 agents。从“每次从零开始”到“继承团队工作方式”。

**适合分类**: productivity / ai

---

## 4. Linear Coding Sessions 更新（Linear）

- **Tweet**: https://x.com/linear/status/2090485855395738077
- **Tweet ID**: 2090485855395738077
- **作者**: @linear
- **发布时间**: 2026-08-20
- **视频**: 有（约 17 秒）
- **中文总结**: Linear 的 coding sessions 现支持自定义环境 + 浏览器使用（测试与截图）。Agent 可自动配置 runtime、脚本和 env vars。提升 agent 在真实开发环境中的能力。

**适合分类**: developer-tools / productivity

---

## 5. Vercel Agent for Slack（Vercel）

- **Tweet**: https://x.com/vercel/status/2090172360410406988
- **Tweet ID**: 2090172360410406988
- **作者**: @vercel
- **发布时间**: 2026-08-19
- **视频**: 有（约 11 秒）
- **中文总结**: Vercel Agent 现可加入 Slack，拥有应用与 agent 的完整生产上下文。可在线程中 @vercel 创建计划/PR、回滚部署、更新配置。典型“把 agent 融入日常工作流”的发布。

**适合分类**: developer-tools / ai

---

## 6. Cursor 08-19 Changelog 系列功能（Cursor）

- **主 Tweet 示例**: https://x.com/cursor_ai/status/2090136966121599117 （/goal）
- **相关 IDs**: 2090136966121599117, 2090136962376081531, 2090136960295645431, 2090136958156546150 等
- **作者**: @cursor_ai
- **发布时间**: 2026-08-19
- **视频**: 多个短 demo 视频
- **中文总结**: Cursor 发布多项 agent 能力更新：
  - `/goal`：给 agent 长期目标，直到完成。
  - Subagents 可在独立虚拟机运行（隔离项目副本，用于测试或并行修复）。
  - 任意 skill 可变成 Custom Mode（始终 pinned）。
  - Cloud agents 可监控 PR、Slack 线程、定时任务，并自动推进至完成。
  系列短视频演示，适合作为产品更新条目或合并为一个 “Cursor agent updates”。

**适合分类**: developer-tools / ai

---

## 7. OJO — Design Agent Team Workspace（独立开发者 / 产品设计）

- **Tweet**: https://x.com/OJOaidesign/status/2089731834095489430
- **Tweet ID**: 2089731834095489430
- **作者**: @OJOaidesign
- **发布时间**: 2026-08-18
- **视频**: 有（约 83 秒）
- **中文总结**: 个人/小团队产品：OJO，首个 Design Agent Team Workspace。构建自己的设计 agent 团队、添加专属技能，从 idea 到产品策略、PRD、交互原型、可上线设计，全在可编辑画布上完成。强调“taste 可以被工程化”。高互动（50万+ 浏览）。

**适合分类**: design / ai

---

## 8. Framer 增长团队用例（Framer）

- **Tweet**: https://x.com/framer/status/2090529694668206420
- **Tweet ID**: 2090529694668206420
- **作者**: @framer
- **发布时间**: 2026-08-20
- **视频**: 有（约 12 秒）
- **中文总结**: 展示增长团队如何用 Framer + CMS + AI agents 快速构建漏斗各阶段页面（SEO、campaign、对比、用例、集成、客户故事等）。产品能力演示而非全新大版本，但仍属相关。

**适合分类**: design

---

## 其他值得关注（较低优先级）

- **OpenRouter + BFL FLUX Video Upscale**：https://x.com/OpenRouter/status/2090591152445796839（视频上线，AI 视频工具）
- **Dynadot MCP**：域名管理 MCP，连接 AI 平台（https://x.com/Dynadot/status/2090507791215776189）
- **Anthropic 蛋白质设计研究 demo**：https://x.com/AnthropicAI/status/2089842387845804246（更偏研究发布）

---

## 搜索方法说明（供复现）

- 关键词 + filter:videos + since:2026-08-01 / 2026-08-08
- from: 官方账号（OpenAI、AnthropicAI、claudeai、xai、cursor_ai、linear、vercel、NotionHQ、figma、runwayml、splinetool、framer、replit 等 watchlist 账号）
- 语义搜索：“product launch or demo video from AI company or tech startup or indie developer”
- 手动过滤：只保留真正产品/功能发布 + 带视频 + 有实质 demo 内容的帖子。

---

**提交说明**：此 MD 由 Grok 按 AGENTS.md 建议格式生成，便于 `rebuild-inbox.mjs` 自动拉取 syndication 数据并去重。请人工审查后决定是否进入 inbox / published。

报告生成时间：2026-08-21
