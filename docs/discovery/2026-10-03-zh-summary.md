# 2026-10-03 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / now live / now available / plugin / MCP / agent / Codex / Claude Code 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-10-01 下午至 2026-10-03 13:16 UTC（约 CST 21:16；与 10-01 文档互补，不重复 09-30 / 10-01 已入队条目）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币 / NFT、纯游戏剧情与无关教程。抽查 tweetId 未出现在 `src/data/videos.json` 代码搜索结果中。

本文件在已有 PR #273 上补扫：原 21 条保留；新增 AgentCraft、Auday、MyGo、Codex Mobile Dev，以及 Motionfly / Pewbeam / claude-lightbox 跟进。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-03-zh-summary.md
```

---

## 1. Google × Planet — Project Suncatcher 在轨 TPU 原型

- **作者**：@Google
- **时间**：2026-10-01 23:34 UTC
- **视频**：约 26 秒
- **亮点**：watchlist 账号官方研究首发片。与 Planet 合作，在 SpaceX Transporter-18 上发射携带 4 颗 TPU 的原型卫星，作为 Project Suncatcher 第一步：验证可扩展机器学习基础设施能否进入轨道。未来数周采集辐射、热与物理应力数据，用于后续设计。本窗口浏览量第一的科技公司发布片。
- **互动**：约 5256 赞、629 转发、158 引用、208 回复、441 收藏、61.5 万+浏览
- **分类建议**：ai / hardware
- **链接**：https://x.com/Google/status/2105803583648100611
- **tweetId**：2105803583648100611

---

## 2. Higgsfield — AI Influencer

- **作者**：@higgsfield
- **时间**：2026-10-02 20:31 UTC
- **视频**：约 79 秒
- **亮点**：Introducing Higgsfield AI Influencer。创建自己的 AI influencer 并套进任意趋势。Higgsfield 与 ChatGPT 扩展各可免费生成最多 5 次，底层为 Genjutsu。跟进帖给出工作室入口 https://higgsfield.ai/ai-influencer-studio 。与 10-01 文档中的 Genjutsu Restyle 是不同产品入口，建议独立入库。
- **互动**：约 837 赞、81 转发、149 引用、72 回复、583 收藏、13.7 万+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/higgsfield/status/2106119916479037742
- **tweetId**：2106119916479037742

---

## 3. NVIDIA Toronto AI Lab — PixelUMM

- **作者**：@CongWei1230
- **时间**：2026-10-01 23:56 UTC
- **视频**：约 29 秒
- **亮点**：Introducing PixelUMM：去掉 VAE 与 ViT 的 encoder-free 统一多模态模型，直接在像素空间做图像 / 视频理解与生成。代码与权重当日公开。https://nv-tlabs.github.io/PixelUMM/ 本窗口研究模型首发片收藏比最高之一。
- **互动**：约 872 赞、124 转发、17 引用、18 回复、721 收藏、6.2 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/CongWei1230/status/2105808995910816159
- **tweetId**：2105808995910816159

---

## 4. Conductor — iPhone 云端 agent 团队

- **作者**：@charlieholtz（@conductor_build）
- **时间**：2026-10-01 21:19 UTC
- **视频**：约 12 秒
- **亮点**：Introducing Conductor Mobile。在 iPhone 上指挥一组云端 agent，已上 App Store。跟进帖给出下载链接 https://apps.apple.com/us/app/conductor-build/id6791228564 。独立开发者产品首发短片，浏览与收藏都高。
- **互动**：约 716 赞、24 转发、16 引用、60 回复、278 收藏、6.1 万+浏览
- **分类建议**：ai / developer-tools / consumer
- **链接**：https://x.com/charlieholtz/status/2105769644498002130
- **tweetId**：2105769644498002130

---

## 5. Prime Intellect — Prime Inference

- **作者**：@PrimeIntellect
- **时间**：2026-10-02 22:17 UTC
- **视频**：约 45 秒
- **亮点**：Introducing Prime Inference。自有推理栈已服务数万亿 token；生产栈约每天 600B token。GLM-5.3 部署在 OpenRouter 同类端点中偏快，声称 100% uptime、tool-call 错误率接近 0。线程拆了 prefill 调度、NVFP4 KV 压缩与 NVLink 传输。当日开放 serverless 与预留容量。https://www.primeintellect.ai/blog/prime-inference 入口：`prime inference chat` 或 OpenAI SDK 指向 https://api.pinference.ai/api/v1
- **互动**：约 531 赞、60 转发、28 引用、30 回复、222 收藏、5.7 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/PrimeIntellect/status/2106146483003384253
- **tweetId**：2106146483003384253

---

## 6. Notion — ChatGPT token sharing

- **作者**：@NotionHQ
- **时间**：2026-10-02 01:28 UTC
- **视频**：约 40 秒
- **亮点**：watchlist 账号能力片。ICYMI：本周早些时候上线与 ChatGPT 的 token sharing。从 ChatGPT 开始，把工作存进 Notion 给团队看，再用 ChatGPT 套餐在 Notion 里继续。本窗口补的是产品演示视频，若 09-30 图片宣布已入库可合并审。
- **互动**：约 213 赞、6 转发、4 引用、15 回复、54 收藏、2.2 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/NotionHQ/status/2105832138495176894
- **tweetId**：2105832138495176894

---

## 7. Pieter Levels — Urban Terror Web

- **作者**：@levelsio
- **时间**：2026-10-02 22:34 UTC
- **视频**：约 122 秒
- **亮点**：indie 发布长片。用 Fable 5.1 修通 6 个月前卡住的 Urban Terror WASM 移植：引擎 struct 比字节码预期长 4 字节，实体列表读偏。现可在浏览器跑 Quake 3 引擎模组，并带多人服务器。https://ut.pieter.com 属于可玩产品上线，不是纯游戏剧情片。
- **互动**：约 107 赞、1 转发、2 引用、35 回复、53 收藏、1.8 万+浏览
- **分类建议**：consumer / developer-tools
- **链接**：https://x.com/levelsio/status/2106150888289009666
- **tweetId**：2106150888289009666

---

## 8. Vercel — Jev for Python（AI SDK）

- **作者**：@vercel
- **时间**：2026-10-02 21:47 UTC
- **视频**：约 7 秒
- **亮点**：watchlist 账号官方能力片。Jev 进入 AI SDK for Python。演示两则实验：边打字分辨 Python / English，以及逐决策写 Python。`uv add ai`。https://vercel.com/blog/jev-for-python-engineers
- **互动**：约 83 赞、8 转发、1 引用、13 回复、34 收藏、1.6 万+浏览（补扫时约 5.5 万浏览）
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/vercel/status/2106139101422567748
- **tweetId**：2106139101422567748

---

## 9. Figma — 更接近 CSS 的交付特性

- **作者**：@figma
- **时间**：2026-10-02 17:56 UTC
- **视频**：约 29 秒
- **亮点**：watchlist 账号官方能力片。把设计交付拉近 CSS，handoff 即 ship。与 10-01 文档的 Custom animation styles / Lottie 不是同一条能力片，建议独立入库。评论区仍在追 relative units。
- **互动**：约 289 赞、22 转发、10 回复、113 收藏、1.4 万+浏览（补扫时约 2.4 万浏览）
- **分类建议**：design / developer-tools
- **链接**：https://x.com/figma/status/2106080919954313434
- **tweetId**：2106080919954313434

---

## 10. Codex — text-to-CAD 插件

- **作者**：@earthtojake
- **时间**：2026-10-02 20:33 UTC
- **视频**：约 28 秒
- **亮点**：text-to-cad plugin 已在 Codex 上线。可生成 STEP / STL / 3MF / GLB，并做打印、钣金、CNC、注塑的 DFM；可接到 Bambu、SendCutSend 等制造服务。开源免费，在 Codex 桌面应用内本地运行。indie 制造工具首发片，收藏明显高于赞。
- **互动**：约 235 赞、19 转发、5 引用、10 回复、259 收藏、9200+浏览（补扫时约 944 赞、1093 收藏、4.7 万浏览）
- **分类建议**：developer-tools / design
- **链接**：https://x.com/earthtojake/status/2106120308037947785
- **tweetId**：2106120308037947785

---

## 11. fal — Grok Imagine Video 1.5 Lite

- **作者**：@fal
- **时间**：2026-10-01 20:39 UTC
- **视频**：约 41 秒
- **亮点**：Grok Imagine Video 1.5 Lite 已在 fal 可用。该家族的轻量模型：文生视频与图生视频，原生音频，1–15 秒；480p / 720p / 1080p，7 种画幅。平台分发入口，不是 xAI 主账号首发。
- **互动**：约 77 赞、6 转发、2 引用、5 回复、19 收藏、7500+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/fal/status/2105759422223929375
- **tweetId**：2105759422223929375

---

## 12. FreeVideo — 笔记本上的 MiniMax H3

- **作者**：@HaochengXiUCB
- **时间**：2026-10-02 22:30 UTC
- **视频**：约 45 秒
- **亮点**：Introducing FreeVideo。把 MiniMax H3 + Video DeltaNet 带到已有硬件：最低约 8GB 显存 + 16GB 内存。带 ComfyUI、LoRA 与自定义工作流。https://github.com/FlashML-org/FreeVideo 开源本地视频生成首发片。
- **互动**：约 117 赞、30 转发、3 引用、6 回复、143 收藏、6600+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/HaochengXiUCB/status/2106149968994291933
- **tweetId**：2106149968994291933

---

## 13. Oh-My-Hermes — Hermes Agent 插件

- **作者**：@rlaope
- **时间**：2026-10-01 23:24 UTC
- **视频**：约 13 秒
- **亮点**：Introducing Oh-My-Hermes。不是替换 Hermes 的 harness，而是给 Hermes Agent 的智能插件：预规划、子 agent 队列、并行工具调用与评估、目标工程、循环截断、110+ 工程技能、长期记忆、Visual QA 与自定义 TUI。开源，单命令安装，仓库已 3000+ star。
- **互动**：约 70 赞、5 转发、1 引用、9 回复、104 收藏、6300+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/rlaope/status/2105801061856604211
- **tweetId**：2105801061856604211

---

## 14. clawdhouse — Claude Code 桌面吉祥物 mod

- **作者**：@ishuagra02
- **时间**：2026-10-02 21:45 UTC
- **视频**：约 37 秒
- **亮点**：Introducing clawdhouse。Claude Code mod：吉祥物当同事，一起读代码、测试通过时欢呼、空闲时睡觉，40 种心情。发布片自称用 Fable 5.5 制作。indie Claude Code 插件首发片。
- **互动**：约 78 赞、2 转发、6 回复、49 收藏、6000+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/ishuagra02/status/2106138602073641241
- **tweetId**：2106138602073641241

---

## 15. klef + e2e — Cloudflare Jev 视觉测试

- **作者**：@o_kwasniewski（@TesterArmy）
- **时间**：2026-10-02 17:38 UTC
- **视频**：约 36 秒
- **亮点**：Cloudflare Jev 刚可用后的集成演示：klef 驱动开源 e2e 测试框架，混合视觉与无障碍 API 跑端到端测试。不是 Cloudflare 官方账号片，但是本窗口最清晰的 Jev 测试 walkthrough 之一。
- **互动**：约 106 赞、12 转发、10 回复、82 收藏、6100+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/o_kwasniewski/status/2106076380551163999
- **tweetId**：2106076380551163999

---

## 16. Runway — Continuum（Labs）

- **作者**：@runwayml
- **时间**：2026-10-02 16:21 UTC
- **视频**：约 38 秒
- **亮点**：watchlist 账号 AI Summit 收尾片。联席 CEO Cristóbal Valenzuela 回顾生成视频演进，并介绍 Runway Labs 最新项目 Continuum。完整演讲尚未放出，登记 https://summit.runway.com/talks 。研发视野重于可注册产品入口，建议与 10-01 的 Praxis-1 / Ads 分开看，确认对外可用后再入库。
- **互动**：约 42 赞、3 转发、6 回复、8 收藏、5600+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/runwayml/status/2106057035884478609
- **tweetId**：2106057035884478609

---

## 17. image-viewer — Claude Code 图片预览 mod

- **作者**：@jarrodwatts
- **时间**：2026-10-02 22:44 UTC
- **视频**：约 13 秒
- **亮点**：Introducing image-viewer。Claude Code mod，把粘贴的图片渲染在提示输入框上方。https://github.com/jarrodwatts/claude-image-view 与 clawdhouse 是不同插件。
- **互动**：约 71 赞、5 转发、8 回复、53 收藏、3800+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/jarrodwatts/status/2106153410697564235
- **tweetId**：2106153410697564235

---

## 18. Replit — 本周：图表、新模型、Jev 集成

- **作者**：@Replit
- **时间**：2026-10-02 22:29 UTC
- **视频**：约 368 秒
- **亮点**：watchlist 账号周更长片。1) 聊天内交互图表，对 Agent 说 “let's visualize this”。2) 可选 GPT-6.1 Sol 与 Claude Sonnet 5.5，或继续 auto。3) Jev 经 Replit AI Integrations 可用，无需自管 API key，对 Agent 说用 jev-latest。https://docs.replit.com/chat/create-charts
- **互动**：约 19 赞、1 转发、2 引用、2 回复、1 收藏、3300+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/Replit/status/2106149526746591286
- **tweetId**：2106149526746591286

---

## 19. Inception — Mercury Voice

- **作者**：@_inception_ai
- **时间**：2026-10-02 19:09 UTC
- **视频**：约 122 秒
- **亮点**：本周推出 Mercury Voice，面向语音 agent 的 dLLM，声称端到端延迟比 GPT-6 Luna 低 2 倍以上。牙科前台演示中位数 <300ms（含工具调用）。Playground 可听；企业联系 sales@inceptionlabs.ai。与 10-01 文档的 Mercury Decide 是不同产品。
- **互动**：约 21 赞、4 转发、1 引用、3 回复、7 收藏、1100+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/_inception_ai/status/2106099344424460397
- **tweetId**：2106099344424460397

---

## 20. Reppo — 多 agent 评测工作流

- **作者**：@reppo
- **时间**：2026-10-02 20:54 UTC
- **视频**：约 222 秒
- **亮点**：Eval API 已支持多 agent 评测工作流。协作 agent 可拿到独立反馈与判断，避免评测被其他 agent 污染。面向安全、防务、医疗等高风险流程。产品能力长片，浏览偏低但时长完整。
- **互动**：约 45 赞、13 转发、1 引用、2 回复、1 收藏、1300+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/reppo/status/2106125721076924887
- **tweetId**：2106125721076924887

---

## 21. Angular DevTools — NativeScript 实机检查

- **作者**：@erkamyaman_ng
- **时间**：2026-10-02 18:41 UTC
- **视频**：约 38 秒
- **亮点**：刚发布 NativeScript 支持。可在模拟器里实时检查 NativeScript 应用的组件、signals、injectors 与 NgRx stores。致谢 @wwwalkerrun 与 @NativeScript。开发者工具能力片，阅读量刚过 500。
- **互动**：约 14 赞、6 转发、1 回复、3 收藏、670+浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/erkamyaman_ng/status/2106092270747361596
- **tweetId**：2106092270747361596

---

## 22. AgentCraft — Minecraft 里的多 agent harness（补扫）

- **作者**：@BlendiByl（eng @fal，前 @remade_ai）
- **时间**：2026-10-03 03:34 UTC
- **视频**：约 56 秒
- **亮点**：Introducing AgentCraft。开源多 agent harness，跑在 Minecraft 里：lead 拆目标，worker 在各自 git worktree 并行构建，需要人决时走到玩家面前。合并前在游戏里看真实 diff。Claude Agent SDK，自带 API key，指向自己的仓库。https://github.com/blendi-remade/agentcraft 产品是编码 agent 工作台，不是游戏发行片。补扫浏览量最高的新入口。
- **互动**：约 3529 赞、139 转发、56 引用、76 回复、1625 收藏、16.4 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/BlendiByl/status/2106226258984264042
- **tweetId**：2106226258984264042

---

## 23. Auday — Apple Watch 全天 AI 录音（补扫）

- **作者**：@auday_ai
- **时间**：2026-10-03 07:12 UTC
- **视频**：约 90 秒
- **亮点**：Introducing Auday，已上 Product Hunt 与 App Store。把 Apple Watch 变成全天录音器：语音之外结合健康、实时压力与位置，回看转录、时间线、亮点与 AI 对话。宣称几乎全部本地运行，自带 API key，无后端。买断 $9.99 首发价。消费硬件 + AI 产品首发长片。
- **互动**：约 133 赞、6 转发、9 回复、83 收藏、22.5 万+浏览
- **分类建议**：ai / consumer / hardware
- **链接**：https://x.com/auday_ai/status/2106281145545719983
- **tweetId**：2106281145545719983

---

## 24. MyGo — Go 桌面应用框架（补扫）

- **作者**：@localhost_5173（EGOIST）
- **时间**：2026-10-03 10:25 UTC
- **视频**：约 24 秒
- **亮点**：Introducing MyGo。纯 Go 桌面框架，webview 或原生 UI，定位在 GPUI 与 Tauri 之间，强调编译快。https://mygo.egoist.dev indie 开发者工具首发片。
- **互动**：约 432 赞、38 转发、7 引用、28 回复、219 收藏、1.7 万+浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/localhost_5173/status/2106329895752388803
- **tweetId**：2106329895752388803

---

## 25. Codex Mobile Dev — 移动端调试插件（补扫，窗口内漏网）

- **作者**：@lauridskern（Margelo / Callstack）
- **时间**：2026-10-02 15:46 UTC
- **视频**：约 20 秒（线程另有日志与性能两条短片）
- **亮点**：Introducing Mobile Dev。把移动端开发工具放进 Codex：流式日志修 bug，并让 Codex 使用应用做性能剖析。插件仓库 https://github.com/callstackincubator/codex-mobile-dev-plugin 与 text-to-CAD 是不同 Codex 插件。原 10-03 早扫未收录。
- **互动**：约 198 赞、44 转发、18 引用、28 回复、137 收藏、3.1 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/lauridskern/status/2106048205460803809
- **tweetId**：2106048205460803809

---

## 26. 其他高信号 / 跟进

- **Claude Code mods 讲解**（@lydiahallie，约 201 秒，4.8 万+浏览）：Anthropic 员工说明 mods 是带特殊函数的插件，可让代码在 Claude Code 内当中间件跑。教程而非新产品入口，可与 clawdhouse / image-viewer 对照。https://x.com/lydiahallie/status/2106127556491821499
- **Claude Code 2.1.288**（@ClaudeCodeLog，约 41 秒，1.2 万+浏览）：非官方 changelog。新增从提示直接跑 bash、可委派多步任务的 agent 命令、空提示按上方向键恢复 Ctrl+C 清掉的草稿。能力变更，不是官方产品片。https://x.com/ClaudeCodeLog/status/2106119715764531420
- **Claude 能力展示线程**（@claudeai）：可剖开的喷气发动机 3D（Opus 5.5，约 3.1 万浏览）、纸折城市（Sonnet 5.5）、跟随真实天气的西雅图像素漫步。模型演示，不是新入口。https://x.com/claudeai/status/2106125478956507480
- **Runway Summit 圆桌**（@runwayml，约 85 秒，6100+浏览）：Canva / ElevenLabs / Nebius 谈创意工具与 agent，非产品首发。https://x.com/runwayml/status/2106039692877762635
- **Liquid d1 桌面整理复现**（@helloiamleonie，约 7 秒，6100+浏览）：用 d1 复现 Jev 整理桌面，模型已在 OpenRouter。案例片。https://x.com/helloiamleonie/status/2105762398657482849
- **Motionfly 2.0**（@Motionfly_co，约 66 秒，1.0 万浏览）：声称用 1000+ 发布片训练，示例是给 Notion AI 生成的 launch video。产品是生成工具，成片是模板化样片，建议与官方发布片分开审。https://x.com/Motionfly_co/status/2106259342550806993
- **Pewbeam Alerts**（@darasoba，约 25 秒，1500+浏览）：演示软件新增定向警报，不打断演讲流。功能片，浏览刚过阈值。https://x.com/darasoba/status/2106280699216965805
- **claude-lightbox**（@arihantbansal，约 21 秒，约 850 浏览）：Claude CLI mod，粘贴图片全屏预览并可由后台 agent 配字幕。与 image-viewer 不同客户端。https://x.com/arihantbansal/status/2106348428699824561

## 已排除或低于阈值（不入队）

- 阅读量 <500：Dropday.ai（416）、Framer 模板 Nexli（487）、多个 indie 回复链只有 YouTube 外链。
- 加密 / 代币：Community Coins、Binance Wallet 功能片、cotch.fun、1win Token、Pons MCP 链上支付、OSBook Agent Quest、Hunter NFT。
- 政治、体育、音乐、纯游戏过场：SpaceX 新闻转载、NHL、K-pop、独立游戏预告、hololive Blu-ray、Disney Twisted-Wonderland、Cyber Paranoia OST。
- 疑似营销叙事而非可注册产品：Night Shift “5 agents overnight” 转帖、AgentEpstein 采集向 skill。
- 非产品片：Notion 万圣节蝙蝠短片、Cloudflare Birthday Week 员工访谈。

## 已在目录或 09-30 / 10-01 文档中出现（仅交叉引用，不重复入队）

GitHub HydraFusion、Figma Motion custom styles / Lottie、Gemini Skills、OpenAI dots 生态、Runway Praxis-1 / Ads、Ideogram 4.5、Inception Mercury Decide、Stripe Muse、Kiro workflows、Warp Factories。本文件只收 10-01 下午之后的新视频入口。
