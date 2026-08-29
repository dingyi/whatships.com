# 2026-08-28 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / product launch / MCP / agent 等，并覆盖 watchlist 里的 Cursor、Anthropic、Google、Replicate、Replit 等账号。

时间范围：2026-08-26 至 2026-08-28。已排除游戏宣发、政治、纯娱乐与无关教程。昨日 08-27 汇总已收录的条目（如 Gemini 3.5 Transcribe、Yutori Navigator n2、Runable Grow、Lava Desktop 等）本次不重复。

已通过 tweetId 核对，均未出现在 `src/data/videos.json` 中。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-28-zh-summary.md
```

---

## 1. Anthropic — Model Hardware Standard (MHS) 研究预览启动

- **作者**: @AnthropicAI
- **时间**: 2026-08-27 18:10 UTC
- **视频**: 约 132 秒主发布片 + 约 670 秒合作故事片
- **亮点**: 正式启动 Model Hardware Standard（MHS）第一阶段研究预览：让 AI agent 安全操作科研与先进制造中的物理设备。将原本需要数天/周的定制集成缩短至小时/分钟，提供可发现接口与安全操作保障。早期测试包括 Genentech 药物发现实验、HHMI Janelia 成像实验压缩、QuEra 量子计算机激光稳定从 58% 提升至 99.3%。邀请科学、机器人、电子与制造领域利益相关方加入预览。
- **互动**: 85 万+ 浏览、5300+ 赞、1800+ 收藏
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/AnthropicAI/status/2093038426140651791

## 2. Cursor — 从零创建 Web App + Origin 存储 + 一键部署 Vercel

- **作者**: @cursor_ai
- **时间**: 2026-08-27 20:45 UTC
- **视频**: 约 25 秒演示
- **亮点**: 现可在 Cursor 中从零创建新 Web App，代码存入 Origin，并一键部署到 Vercel。Changelog：https://cursor.com/changelog/start-from-scratch
- **互动**: 12 万+ 浏览、1700+ 赞、360+ 收藏
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/cursor_ai/status/2093077548649570777

## 3. Tavus — Sparrow-2 实时对话理解模型

- **作者**: @tavus
- **时间**: 2026-08-27 17:38 UTC
- **视频**: 约 301 秒主片 + 多段能力演示
- **亮点**: 推出 state-of-the-art 实时对话理解模型 Sparrow-2。让 Tavus PAL 理解对话发生了什么并决定下一步：何时听、等待、说话或继续说。解决鸡尾酒会问题，支持嘈杂环境；对话失败率仅 2.1%（约为对比系统的 1/4）。现已上线。
- **互动**: 2.2 万+ 浏览、340+ 赞、260+ 收藏
- **分类建议**: ai
- **链接**: https://x.com/tavus/status/2093030526785589582

## 4. Vellum — iOS / Android 移动端正式上线

- **作者**: @vellum_ai
- **时间**: 2026-08-27 17:00 UTC
- **视频**: 约 60 秒主发布片 + 多段场景演示
- **亮点**: 个人 AI 助手 Vellum 现已支持 iOS 与 Android。免费开源，支持本地/云助手、语音模式、一键集成（Gmail/Slack 等）、模型选择器、跨设备持久记忆、computer/browser use。同一记忆与工具可在桌面与手机间无缝切换。前 100 名注册享 30% 首月折扣。
- **互动**: 9.7 万+ 浏览、310+ 赞、150+ 收藏
- **分类建议**: ai / productivity / consumer
- **链接**: https://x.com/vellum_ai/status/2093020764400136289

## 5. Google — AI Mode 酒店预订 + 积分/里程显示 + 机票价格追踪

- **作者**: @Google
- **时间**: 2026-08-27 20:45 UTC
- **视频**: 多段（酒店约 75 秒、里程约 40 秒、价格追踪约 44 秒）
- **亮点**: AI Mode in Search 新增酒店预订（对话中发现并预订，Google Pay 安全完成）、航班/酒店积分与里程成本展示、以及 Google Flights 价格追踪直接嵌入对话（设置后邮件提醒降价）。
- **互动**: 主线程合计较高曝光
- **分类建议**: ai / consumer
- **链接**: https://x.com/Google/status/2093077355447091572 （同线程多帖）

## 6. Google / Replicate — Gemini Omni 1.1 Flash 视频生成与编辑

- **作者**: @Google / @replicate
- **时间**: 2026-08-27 16:11 / 17:27 UTC
- **视频**: Google 多段能力演示（视频参考、4K 放大等）；Replicate 约 10 秒
- **亮点**: Gemini Omni 1.1 Flash 最新多模态视频生成与编辑模型上线。支持场景延展、指定起止帧、视频输入参考、最高 4K 放大、360p 快速原型。已在 Replicate 可用。
- **互动**: Google 主帖 38 万+ 浏览、1500+ 赞
- **分类建议**: ai / motion
- **链接**: https://x.com/Google/status/2093008576487072064 ；https://x.com/replicate/status/2093027544576487865

## 7. Databricks — GLM 5.3 Flash 上线 Lakehouse

- **作者**: @databricks
- **时间**: 2026-08-27 19:54 UTC
- **视频**: 约 5 秒
- **亮点**: Z.ai GLM 5.3 Flash 开源权重模型现可在 Databricks 使用。OfficeQA Pro v2 上质量比 GLM-5.2 高 10%、成本仅 1/10，新增多模态支持。数据不出 Lakehouse，经 Unity Gateway 治理。
- **互动**: 2k+ 浏览
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/databricks/status/2093064663718097395

## 8. Replit — Intelligent Model Routing（智能模型路由）

- **作者**: @Replit
- **时间**: 2026-08-27 16:21 / 21:00 UTC
- **视频**: 约 12 秒 + 约 171 秒详细讲解
- **亮点**: 自动为每个任务选择最佳模型，兼顾质量、速度与效率，无需额外费用。最高可降低约 65% 成本，无需手动切换模型。
- **互动**: 数千浏览级
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/Replit/status/2093011104884560121 ；https://x.com/Replit/status/2093081124901671208

## 9. AgenC — 首款 AI Agent 硬件钱包（Device Wallet）

- **作者**: @signerless（AgenC 联合创始人）
- **时间**: 2026-08-27 21:18 UTC
- **视频**: 约 35 秒
- **亮点**: 基于 Ledger、wallet-cli 与 AgenC Core，让 agent 自主操作硬件钱包并签名交易，无需人类在环。定位「agent 经济的物理钱包」。
- **互动**: 早期
- **分类建议**: ai / developer-tools / crypto
- **链接**: https://x.com/signerless/status/2093085774744846649

## 10. open-agent-view — 开源多 Agent 统一仪表盘

- **作者**: @xhluca
- **时间**: 2026-08-27 19:48 UTC
- **视频**: 约 29 秒
- **亮点**: 开源仪表盘，统一管理 Claude、Codex、Pi、OpenCode、Muse Code、Qwen 等任意 coding agent。基于 Claude Agent View。GitHub：https://github.com/xhluca/open-agent-view
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/xhluca/status/2093063177541910535

## 11. Agent Opus — Song-to-Video（歌曲一键成片）

- **作者**: @AgentOpusAI
- **时间**: 2026-08-27 18:22 UTC
- **视频**: 约 68 秒
- **亮点**: 上传歌曲后，Agent Opus 自动根据音频构建场景、剪辑与节奏，一键生成发布级视频。现已对所有用户开放。
- **分类建议**: ai / motion
- **链接**: https://x.com/AgentOpusAI/status/2093041567061991812

## 12. OnlySlabs — MCP 上线（22 工具 / 14 市场）

- **作者**: @aibra（@OnlySlabs_）
- **时间**: 2026-08-27 18:03 UTC
- **视频**: 约 32 秒
- **亮点**: 面向收藏品「Grail Hunting」的 AI agent MCP 正式上线，覆盖 14 个市场的 22 个工具，让 agent 辅助寻宝。
- **分类建议**: ai / consumer
- **链接**: https://x.com/aibra/status/2093036761199124803

## 13. robocurve — 前沿机器人能力评测 Public Benefit 公司

- **作者**: @chooi_jeq
- **时间**: 2026-08-27 21:22 UTC
- **视频**: 约 107 秒
- **亮点**: 正式介绍 @robocurve：构建真实世界机器人评测并以中立第三方发布结果的 Public Benefit Corporation。
- **分类建议**: ai / hardware
- **链接**: https://x.com/chooi_jeq/status/2093086738218725720

## 14. Microduck — Hugging Face × Pollen 开源双足小机器人（$399）

- **作者**: @techniahqrobot（引用官方）
- **时间**: 2026-08-27 相关
- **视频**: 约 82 秒介绍
- **亮点**: Hugging Face 与 Pollen Robotics 推出 25 cm 开源双足 Microduck：15 电机、相机+深度/LiDAR、2 IMU、可抓取喙、50 Hz 策略控制、行走/蹲/跌倒恢复，可选轮式。含 SDK、MuJoCo 仿真与 RL 流水线。售价 $399。
- **分类建议**: hardware / ai
- **链接**: https://x.com/techniahqrobot/status/2093045035897905296

## 15. x402aff — Agent 经济联盟层

- **作者**: @aaronjmars
- **时间**: 2026-08-27 19:10 UTC
- **视频**: 约 5 秒
- **亮点**: 一行代码让 x402 端点支持联盟；无需许可加入与结算，链上锁定，专为 agent 经济设计。
- **分类建议**: ai / developer-tools
- **链接**: https://x.com/aaronjmars/status/2093053679259599283

---

## 已过滤（不入库）

- 游戏/影视宣发（GTA VI Extended Look、独立游戏角色宣布等）。
- 纯加密 meme / 交易代币发布、政治/军事新闻。
- 二次传播或低互动无关教程。
- 昨日汇总已覆盖的条目。

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（x_keyword_search 搭配 `filter:videos` + `since:2026-08-26` + `min_faves` + launched/now live/introducing/just shipped；指定 from: watchlist 账号；x_semantic_search 检索产品发布与独立开发者 demo；x_thread_fetch 展开关键线程）。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-28-zh-summary.md` 写入 inbox（与其它 discovery PR 合并时用 `node scripts/merge-inbox.mjs` 做并集，避免整文件覆盖丢掉 pending）。再按 AGENTS.md 配方正式发布。
