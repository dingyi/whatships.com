# 2026-10-15 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch）。窗口：2026-10-13 至 2026-10-15 01:15 UTC（约 CST 10-13 09:00 至 10-15 09:15）。与前序文档互补，不重复已合入条目。排除阅读 < 500，以及政治、娱乐、体育、音乐、代币 / NFT、纯游戏与无关教程。不改 `src/data/videos.json` 或 `inbox.json`。

GitHub code search（`repo:dingyi/whatships.com`）未命中下列 tweetId。以仓库搜索未命中且未出现在已合入的 discovery 文档为准。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-15-zh-summary.md
```

---

## 1. Constrained Decoding Models (CDMs)

- **作者**：@neal_k_patel（@scaledown_team）
- **时间**：2026-10-13 12:04 UTC
- **视频**：约 46 秒
- **亮点**：正式发布 Constrained Decoding Models (CDMs)。为生产工作负载设计的新 AI 模型架构，跳过 token-by-token 生成循环，专注一次性任务（Classify / Extract / Summarize）。支持 1M 多模态输入，号称 200x 更快、467x 更便宜，$0.05/M 输入 token（输出免费）。已上线 OpenRouter、Vercel、LangChain 等平台。https://scaledown.ai/
- **互动**：约 2414 赞、656 转发、188 引用、270 回复、2929 收藏、161.5 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/neal_k_patel/status/2109978626124898587
- **tweetId**：2109978626124898587

---

## 2. Mirelo SFX 2.0

- **作者**：@MireloAI
- **时间**：2026-10-14 13:23 UTC
- **视频**：约 73 秒
- **亮点**：Introducing Mirelo SFX 2.0。AI 视频音效生成模型，观看视频后移除未提示的音乐、保留对话，生成与动作同步的完整音效设计，支持长视频一致性。已通过 API、Runway、Fal 等上线。官方线程含多段 demo 与对比测试。https://mirelo.ai/
- **互动**：约 2289 赞、301 转发、294 引用、383 回复、2484 收藏、95.5 万+浏览
- **分类建议**：ai / design / motion
- **链接**：https://x.com/MireloAI/status/2110360787780800611
- **tweetId**：2110360787780800611

---

## 3. Kylon

- **作者**：@quinn_leng（@kylon_ai）
- **时间**：2026-10-13 15:53 UTC
- **视频**：约 67 秒
- **亮点**：Introducing Kylon，第一个为人类、agent 与工具提供的 company harness。支持跨 Codex、Claude、Devin、Gemini CLI、Replit Agent、Notion、Slack、Google Workspace 等大量工具协同工作。使多 agent 与工具更好一起运作。
- **互动**：约 1019 赞、112 转发、243 引用、281 回复、932 收藏、135.8 万+浏览
- **分类建议**：ai / developer-tools / productivity
- **链接**：https://x.com/quinn_leng/status/2110036327286886731
- **tweetId**：2110036327286886731

---

## 4. Odessia AI Travel Concierge

- **作者**：@FDavidsonT（@OdessiaTravel）
- **时间**：2026-10-14 17:09 UTC
- **视频**：约 85 秒
- **亮点**：正式发布 Odessia，一个 always-on AI 旅行与体验礼宾。通过简单文本对话规划并预订机票、酒店、餐厅、活动票，支持使用里程与优惠，持续检查更优选项。免费使用。产品发布视频。
- **互动**：约 622 赞、100 转发、190 引用、167 回复、489 收藏、68.6 万+浏览
- **分类建议**：ai / consumer / productivity
- **链接**：https://x.com/FDavidsonT/status/2110417685486141697
- **tweetId**：2110417685486141697

---

## 5. Journeys

- **作者**：@anandPa94（@tryscope_app，YC）
- **时间**：2026-10-14 18:29 UTC
- **视频**：约 56 秒
- **亮点**：Introducing Journeys。为 AI agent 访问解决 attribution 问题。可见见 agent 访问产品的时机、路径、转化、卡点，并提供一键修复建议。把 agent 流量转为收入。
- **互动**：约 306 赞、51 转发、108 引用、127 回复、167 收藏、10.7 万+浏览
- **分类建议**：ai / developer-tools / productivity
- **链接**：https://x.com/anandPa94/status/2110437830468210804
- **tweetId**：2110437830468210804

---

## 6. Workmate Workforce

- **作者**：@willruben（@workmate）
- **时间**：2026-10-14 15:49 UTC
- **视频**：约 68 秒
- **亮点**：正式发布 Workmate Workforce。一个自定义、协作的 AI agent 团队，基于公司现有工作流程与制度知识构建长运行 agent 队友。由模型无关平台与前端部署工程师支持。
- **互动**：约 202 赞、16 转发、112 引用、118 回复、76 收藏、5.3 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/willruben/status/2110397646145778075
- **tweetId**：2110397646145778075

---

## 7. Offhand MCP

- **作者**：@DeyuWu00（个人开发者，前 Amazon AGI）
- **时间**：2026-10-14 17:26 UTC
- **视频**：约 67 秒
- **亮点**：Introducing Offhand MCP。让 Grok Bot、Muse、Dot、Claude 等 agent 作为团队工作，无需复制粘贴即可在 agent 间交接任务。一分钟设置，支持手机端。
- **互动**：约 61 赞、5 转发、2 引用、13 回复、10 收藏、31.6 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/DeyuWu00/status/2110422063831998523
- **tweetId**：2110422063831998523

---

## 8. AgentPlay

- **作者**：@Aiswarya_Sankar（@EntelligenceAI）
- **时间**：2026-10-14 16:08 UTC
- **视频**：约 39 秒
- **亮点**：Introducing AgentPlay。自改进 coding agent harness。把现有 Claude Code、Codex、Cursor、Copilot 会话转为交互地图与可重播时间线，可见 agent 探索、失败与重试路径。免费、本地、开源。
- **互动**：约 235 赞、21 转发、26 引用、88 回复、197 收藏、2.5 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/Aiswarya_Sankar/status/2110402337533727182
- **tweetId**：2110402337533727182

---

## 9. RoboSimStudio

- **作者**：@keplerccccc
- **时间**：2026-10-14 16:20 UTC
- **视频**：约 54 秒
- **亮点**：Introducing RoboSimStudio。开源交互式 Agentic Robotics 工具包。给 Claude、GPT 等一段机器人擦拭视频，一小时内构建完整动力学数字孪生，支持模拟海绵、电缆、布料等。
- **互动**：约 266 赞、40 转发、10 引用、14 回复、195 收藏、9.7 万+浏览
- **分类建议**：ai / developer-tools / hardware
- **链接**：https://x.com/keplerccccc/status/2110405269171921243
- **tweetId**：2110405269171921243

---

## 10. AgentMail Calendar

- **作者**：@agentmail（YC）
- **时间**：2026-10-14 17:36 UTC
- **视频**：约 32 秒
- **亮点**：Introducing AgentMail Calendar。每个 AI agent inbox 现附带日历，agent 可预约会议、接受邀请并知道通话开始/结束时间。为 agent 工作流提供完整时间管理。
- **互动**：约 65 赞、6 转发、5 引用、12 回复、21 收藏、1.0 万+浏览
- **分类建议**：ai / developer-tools / productivity
- **链接**：https://x.com/agentmail/status/2110424638056804500
- **tweetId**：2110424638056804500

---

## 11. cinematic-shot Agent Skill

- **作者**：@1weiho（个人开发者，Raycast Ambassador）
- **时间**：2026-10-14 16:08 UTC
- **视频**：约 51 秒
- **亮点**：Introducing cinematic-shot，一个 agent skill，用于为产品录制电影级 hero shot。支持平滑 3D 相机运动与精美光照。`npx skills add 1weiho/cinematic-shot`。
- **互动**：约 302 赞、7 转发、22 回复、401 收藏、1.0 万+浏览
- **分类建议**：ai / design / developer-tools
- **链接**：https://x.com/1weiho/status/2110402425475698707
- **tweetId**：2110402425475698707

---

## 12. Dots for Marketing

- **作者**：@shivsakhuja（@GooseworksAI）
- **时间**：2026-10-13 14:59 UTC
- **视频**：约 52 秒
- **亮点**：Introducing Dots for Marketing（Gooseworks 插件）。把 OpenAI Dots 变成超级营销团队：研究品牌、规划活动、生成产品图与静态/视频广告、分析社交与性能。一次提示安装，提供初始 credits。
- **互动**：约 125 赞、12 转发、17 引用、46 回复、104 收藏、7.0 万+浏览
- **分类建议**：ai / productivity / design
- **链接**：https://x.com/shivsakhuja/status/2110022741646823775
- **tweetId**：2110022741646823775

---

## 跟进，不单独入队

- Google Gemini 4 Argon 能力展示视频（如 3D 场景、游戏等）更偏模型演示而非新产品首发。
- RP1 开源人形机器人平台：硬件开源项目发布，可视情况跟进。

## 已入队，不重复

前序文档中的 Gemini 4 Argon、Devin in Pylon、TasteSkill v2、diffr、Maritime 等。

## 排除

代币 / NFT / memecoin 发布、纯游戏 demo、政治与军事宣传、体育、低阅读量帖子（<500），以及无关教程与娱乐内容。
