# 2026-09-19 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-18 上午至 2026-09-19 上午 CST（并补录 09-17 未被 09-18 文档收录的高信号片）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-16 / 09-17 / 09-18 已发现文档互补，不重复已入队条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-19-zh-summary.md
```

---

## 1. Agentsky — Agent 市场（浏览器里用 40+ 编码 Agent）

- **作者**：@quxiaoyin（@agentsky_dev）
- **时间**：2026-09-18 15:17 UTC
- **视频**：约 78 秒
- **亮点**：We just launched Agentsky。口号是「OpenRouter 对模型，AgentSky 对 agent」。浏览器 / 手机 / 一条 API 直接调 Claude Code、Codex、OpenCode、Hermes、Pi 等 40+ agent，不用本地安装。碰到 Codex Astra 周限额时可把上下文交给 OpenCode + DeepSeek V4.1 继续跑；可在浏览器里对比 agent + 模型成本（同一 dashboard 任务 Astra $5.3 vs DeepSeek V4.1 $0.12）。https://agentsky.dev 是本日观看量最高的 indie Agent 基础设施首发片之一。
- **互动**：约 723 赞、168 转发、152 引用、273 收藏、153 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/quxiaoyin/status/2100967557314547943
- **tweetId**：2100967557314547943

---

## 2. Sherpa — Pocket FM 的连载小说写作 AI

- **作者**：@RohanNayak2（Pocket Entertainment / Pocket FM）
- **时间**：2026-09-18 18:45 UTC
- **视频**：约 207 秒
- **亮点**：Introducing Sherpa。面向连载小说 / 有声书的长篇故事工作流：一句话概念 → 世界与角色 → 季/弧/集/场层级规划 → 逐场生成 → 40 项编辑清单压测 → 一键配音并发到 Pocket FM。技术三点：Narrative World Model（角色状态图，百集不掉线）、Hierarchical Story Planner（动态重规划）、用 55 亿小时播放留存训出的 Prose Engine。公司称 ARR $250M → $500M、内部产出增 1200%。可免费试用。是本日最长、传播最开的消费级写作产品发布片。
- **互动**：约 2034 赞、286 转发、294 引用、2704 收藏、150 万+浏览
- **分类建议**：ai / consumer / productivity
- **链接**：https://x.com/RohanNayak2/status/2101019876269973593
- **tweetId**：2101019876269973593

---

## 3. AgentCloak — 浏览器里替 AI 拖敏感数据

- **作者**：@peteryared（@AgentCloakAI）
- **时间**：2026-09-18 14:47 UTC
- **视频**：约 118 秒
- **亮点**：Introducing AgentCloak。在浏览器端把姓名 / 电话 / 地址等敏感信息换成合理假数再送出，回答回来再换回真实值。口号是「用任何 AI，不交真实数据」。ChatGPT / Claude / 国内模型都能接；声称已有大企业在用，现在免费开放。近两分钟演示把产品句讲清，收藏量极高。
- **互动**：约 3425 赞、592 转发、96 引用、4133 收藏、147 万+浏览
- **分类建议**：ai / productivity / other
- **链接**：https://x.com/peteryared/status/2100960005289807961
- **tweetId**：2100960005289807961

---

## 4. Meta Muse Connectors — 给 Muse Agent 接任意 API

- **作者**：@finkd（Mark Zuckerberg / Meta Muse）
- **时间**：2026-09-18 23:03 UTC
- **视频**：约 8 秒
- **亮点**：watchlist 账号生态发布。Opening access for developers to build Muse connectors。开发者带 API，Muse 带 agent、浏览器与用户意图上下文；用户用自然语言点名服务，agent 接走。New connectors are live today。短片功能句清楚，观看量足入库。
- **互动**：约 2460 赞、188 转发、120 引用、691 收藏、24.2 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/finkd/status/2101084678640066765
- **tweetId**：2101084678640066765

---

## 5. Google Search Live — Gemini 3.8 Live 实时语音

- **作者**：@Google
- **时间**：2026-09-18 20:17 UTC
- **视频**：约 77 秒
- **亮点**：watchlist 账号官方能力片。Search Live 的实时帮助改由 Gemini 3.8 Live（最新音频模型）驱动，声称更自然。是 09-15 / 09-16 Gemini 3.8 Live 线的 Search 通道落地片，可独立入库。
- **互动**：约 460 赞、43 转发、5 引用、63 收藏、12.2 万+浏览
- **分类建议**：ai / consumer
- **链接**：https://x.com/Google/status/2101042933650571469
- **tweetId**：2101042933650571469

---

## 6. TasteCode — 面向设计质感的开源编码 Agent 桌面端

- **作者**：@LexnLin（@_TasteSkill，同帖 @blueemi99）
- **时间**：2026-09-18 07:00 UTC
- **视频**：约 44 秒（主帖）+约 33 秒（界面 walkthrough）
- **亮点**：Introducing TasteCode。TasteSkill 之后的桌面 ADE：专门 Design Mode 对付 AI slop UI；一个工作区接 Codex / Claude Code / Grok，带终端、浏览器预览、diff 与 checkpoint；用已有订阅、不额外收费。Windows + macOS Apple Silicon 公开 beta。开源：https://github.com/Leonxlnx/tastecode 下载 https://github.com/Leonxlnx/tastecode/releases 。同日 Product Hunt。是本日质感最强的 indie 设计工具桌面端首发。
- **互动**：约 869 赞、55 转发、8 引用、1014 收藏、7.7 万+浏览
- **分类建议**：design / developer-tools / ai
- **链接**：https://x.com/LexnLin/status/2100842256630534283
- **tweetId**：2100842256630534283

---

## 7. Shipper — 自称 System One Agent

- **作者**：@chhddavid（@shipper_now）
- **时间**：2026-09-18 12:00 UTC
- **视频**：约 27 秒
- **亮点**：Introducing Shipper。搭 Jev 发布热：称 TypeSafe Jev 上线 78 小时后用 14 小时做出「更好版」。口号是毫秒级做决策、只执行能赚钱的动作、路由/分类不走 LLM；同时写「Powered by ChatGPT-6 Astra & SOTA models」，口号有冲突，需审核质感与真实能力。跟帖 @chddaniel Introducing Jev for Website to App：贴 URL 出原生手机 App 并交店。观看量足入库但建议当 indie 跟风片而非新模型首发。
- **互动**：约 266 赞、14 转发、3 引用、505 收藏、8.7 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/chhddavid/status/2100917936806678916
- **tweetId**：2100917936806678916

---

## 8. simple-jev — 把任意 HF 模型 Jev 化的开源库

- **作者**：@picocreator（@FeatherlessAI）
- **时间**：2026-09-18 17:51 UTC
- **视频**：约 50 秒
- **亮点**：Introducing https://simple-jev.featherless.ai/ 。针对 Jev 不开源、没 vision：任意 Hugging Face 模型可 Jev-ify，带 API endpoint，已在 Featherless 生产环境跑。是本日最清楚的 Jev 生态开源对标片。
- **互动**：约 456 赞、40 转发、8 引用、674 收藏、3.1 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/picocreator/status/2101006253829046539
- **tweetId**：2101006253829046539

---

## 9. Trylle Magic Sessions — 从 issue 跑到 PR 的长任务

- **作者**：@stylessh（@trylle，前 Supabase）
- **时间**：2026-09-18 18:03 UTC
- **视频**：约 115 秒
- **亮点**：we just shipped Magic Sessions in Trylle。从仓库 issue 起步，发起任务、测试改动、开 PR。主帖是一条真实 issue 走完整个闭环的 walkthrough。https://trylle.com/home
- **互动**：约 88 赞、14 转发、29 引用、39 收藏、2.5 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/stylessh/status/2101009340144492667
- **tweetId**：2101009340144492667

---

## 10. Cline jev-browser — 给 Jev 一个浏览器

- **作者**：@cline
- **时间**：2026-09-18 21:09 UTC
- **视频**：约 17 秒
- **亮点**：Cline Desktop Marketplace 插件。Customize > Marketplace > Plugins > jev-browser；配 Vercel AI Gateway key 后，任务会在后台拉起 Chrome。短官方能力片，是 Jev 落地编码 agent 的关键一步。
- **互动**：约 247 赞、11 转发、1 引用、198 收藏、1.6 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/cline/status/2101056078872256935
- **tweetId**：2101056078872256935

---

## 11. Runway Ruby — Alpha 通道

- **作者**：@runwayml
- **时间**：2026-09-18 17:02 UTC
- **视频**：约 48 秒
- **亮点**：watchlist 账号官方新能力。Ruby 现在支持 alpha channel：转 HDR 时保留透明通道，一步完成。是 09-17 Enhance Frame Rate 后的同一产品线迭代片。
- **互动**：约 154 赞、14 转发、9 引用、63 收藏、2.1 万+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/runwayml/status/2100993913389539483
- **tweetId**：2100993913389539483

---

## 12. Inco Splash — 针对 Apple Silicon 的开源推理引擎

- **作者**：@inco_ai
- **时间**：2026-09-19 00:07 UTC
- **视频**：约 26 秒
- **亮点**：Meet Inco Splash。围绕模型 + Apple silicon 的开源推理引擎。Qwen3.8-27B 在 M5 Max 达 144 tok/s；decode 相对 Ollama 约 3×、oMLX 约 2×，agent 扇出子 agent 时近 4×。`brew install incoai/tap/splash` 后 `splash serve --model incoai/Qwen3.8-27B-Splash`。跟帖：LM Studio Bionic 当日支持；Apache-2.0 https://github.com/incoai/splash 博客 https://inco.ai/blog/splash/ 。M3+、macOS 26.4+、36 GB。
- **互动**：约 87 赞、26 转发、12 引用、56 收藏、1.1 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/inco_ai/status/2101100749623341513
- **tweetId**：2101100749623341513

---

## 13. Niantic Gaussian Splat Relighting

- **作者**：@NianticSpatial
- **时间**：2026-09-18 17:00 UTC
- **视频**：约 29 秒
- **亮点**：Introducing Gaussian Splat Relighting，已进 beta。用对齐 mesh 模拟照明再贴到 Gaussian splat 上，生成天气 / 时段变体，保留几何、导航与语义。面向 embodied / physical AI 训练。
- **互动**：约 127 赞、25 转发、2 引用、58 收藏、1.6 万+浏览
- **分类建议**：ai / other
- **链接**：https://x.com/NianticSpatial/status/2100993496077205840
- **tweetId**：2100993496077205840

---

## 14. Linear — .md / .txt 直接当内容

- **作者**：@linear
- **时间**：2026-09-18 15:34 UTC
- **视频**：约 11 秒
- **亮点**：watchlist 账号官方小迭代。把 .md 和 .txt 拖进 Linear 当正文而不是附件。短片功能句清楚。
- **互动**：约 147 赞、2 转发、1 引用、31 收藏、1.3 万+浏览
- **分类建议**：productivity / developer-tools
- **链接**：https://x.com/linear/status/2100971841330221306
- **tweetId**：2100971841330221306

---

## 15. ossrules.md — 开源项目的 agent 规则浏览器

- **作者**：@bentlegen（@modemdev）
- **时间**：2026-09-18 12:34 UTC
- **视频**：约 28 秒
- **亮点**：introducing ossrules.md。浏览头部开源项目怎么写 agent rule / skill 文件，把别人真在用的规则变成可浏览资料。短 indie 工具片，路径清楚。
- **互动**：约 159 赞、13 转发、175 收藏、8300+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/bentlegen/status/2100926535645458868
- **tweetId**：2100926535645458868

---

## 16. Commons — 人与 Agent 共同跑自治组织

- **作者**：@NicolaeRusan（同 @YondonFu @ericxtang @maxsbennett）
- **时间**：2026-09-18 18:54 UTC
- **视频**：约 75 秒
- **亮点**：Introducing Commons。人与 AI agent 一起建越来越自主的组织：agent 能不能端到端跑公司、维护公共好物、开做科学。近一分钟片把问题意识讲清。
- **互动**：约 65 赞、10 转发、4 引用、70 收藏、6100+浏览
- **分类建议**：ai / other
- **链接**：https://x.com/NicolaeRusan/status/2101022072525013220
- **tweetId**：2101022072525013220

---

## 17. smash.fun — 浏览器里玩 Melee，玩自己或 1000+ 他人

- **作者**：@turtlesoupy（前 OpenAI / Instagram）
- **时间**：2026-09-18 22:07 UTC
- **视频**：约 27 秒
- **亮点**：now live on smash.fun。Super Smash Bros Melee 支持：浏览器里玩自己或 1000+ 其他玩家角色。偏消费 / 娱乐产品，但作者背景和片质感足以当 consumer 发布看。
- **互动**：约 180 赞、10 转发、4 引用、115 收藏、1.1 万+浏览
- **分类建议**：consumer / other
- **链接**：https://x.com/turtlesoupy/status/2101070754184069602
- **tweetId**：2101070754184069602

---

## 18. Sim Search — Agent 用你的凭证建知识图（09-17 补录）

- **作者**：@emkara（@simdotai CEO）
- **时间**：2026-09-17 17:06 UTC
- **视频**：约 80 秒
- **亮点**：09-18 文档未收录。Introducing Sim Search。Agent 用你的凭证搭 agentic knowledge graph，做高上下文工作；全上下文构建 + 自适应学习。已在 Sim 上线。https://www.sim.ai 观看量高，建议补入库。
- **互动**：约 470 赞、132 转发、18 引用、187 收藏、9.0 万+浏览
- **分类建议**：ai / productivity / developer-tools
- **链接**：https://x.com/emkara/status/2100632411432476947
- **tweetId**：2100632411432476947

---

## 19. 其他高信号 / 跟进

- **Abide**（@OhansEmmanuel / @ColdteaAI，约 13 秒，2.2 万+浏览）：用 Jev 打分编码 agent 每一轮是否违规则（linter 写不出来的那些）。开源 https://github.com/coldteadotai/abide https://x.com/OhansEmmanuel/status/2101034822760288452
- **Diffusion Studio 开源发布片框架**（@konstipaulus，约 32 秒，1.4 万+浏览）：整条发布片在 Diffusion Studio 生成、没碰 timeline；09-17 已有 MCP + Chat 教程长片，本帖是开源/框架跟进。https://x.com/konstipaulus/status/2101027385734783283
- **Framer 3D transforms by prompt**（@framer，约 48 秒，5300+浏览）：watchlist 能力展示：提示词改样式、加 360° 旋转、播放。非新品牌首发。https://x.com/framer/status/2101002674804019282
- **Replit This Week**（@Replit，约 223 秒，3300+浏览）：Custom Connectors（Agent 接集成库外 API）+ Enterprise 审计日志扩 65+ 事件。周报向而非独立发布主帖。https://x.com/Replit/status/2101069744514490616
- **Addys AI**（@tryaddys，09-17，约 30 秒，1.3 万+浏览）：会议和消息变待办再自动把事做完。https://x.com/tryaddys/status/2100596393765147010
- **LaunchrCatalog**（@AFisolami，约 64 秒，1500+浏览）：筛选 X 上产品发布片的目录站 https://launchrcatalog.com 已有 100+ 片。观看量刚过线。https://x.com/AFisolami/status/2100898360177680883
- **opencode desktop session timeline**（@iamdavidhill，约 254 秒，3700+浏览）：设计 BTS / 打磨片，非新功能首发。https://x.com/iamdavidhill/status/2101015480160985571
- **Jev for Website to App**（@chddaniel，约 25 秒，3.5 万+浏览）：Shipper 同一产品线的 URL → 原生 App 通道。https://x.com/chddaniel/status/2100919415554617537
- **Known You**（@TobiasWhetton / @dateknown，约 26 秒，1900+浏览）：社交 / 约会产品功能上线，偏 consumer 社交。https://x.com/TobiasWhetton/status/2101037542275690819
- **GitHub Copilot 更新汇总**（@github，约 59 秒，3.1 万+浏览）：近期更新串烧，非单点首发。https://x.com/github/status/2100993288178479108

## 已在 09-16 / 09-17 / 09-18 文档中出现（仅交叉引用）

OpenAI Astra for Law、Claude Projects 重做、Mio、CrowdReply Astra for Marketing、Lightreel Claude Marketing MCP、Notion Skills API、Perplexity Computer Effort、terminal-browser 插件、Memorable、Runway Enhance Frame Rate、Nautilo、Figma node / iOS 27 UI Kit、Motion Astra / MCP for ChatGPT、Krea Agent 视频编辑器、LM Studio Bionic Introspection、OpenCompany、GPT-6 Astra for AI UGC、ElevenLabs Reception、QuiverAI Arrow 2、Unity × Codex 插件、Gemini 3.8 Live（模型本体）、Jev 原型发布（@CompleteSkeptic 09-15）。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（Videoflow studio npx、SceneShip 候补、个人 AI 生成草稿片等）
- 加密货币 / 代币 / NFT / launchpad（Biddy NFT sweep、$ASKR、Fonepad SMS 发币、COTI 2.0 预告、NodeRails 加密贷支付）
- 纯游戏 demo / 模组 / 周边（Hytale timed combo、Fortnite Youtooz、Valorant Agent Mastery 卡面）
- 体育 / 娱乐 / 音乐发行（Ayra Starr 现场、Anaheim Ducks Roger-vision、Nintendo High 动画）
- 政治 / 新闻评论片 / 军事战报（澳大利亚住房、移民纪录片、俄乌战报、选举民调）
- Cloudflare Connect / Supabase Select 会前讲者预告（活动片非产品发布）
- Replit 伦敦招聘片、Motion 自动回复的「Mosaic Motion video ready」生成结果帖
- Greg Isenberg Jev 解说播客长片（二创解说，非官方首发）
- Morphic 「Blood」 AI 动画短片（内容作品，非工具首发）
- Founders Inc 个人飞行车原型预告（硬件概念片，非可用产品）

**已核对**：上述主条目 tweetId 均未在 `src/data/videos.json` 的代码检索命中结果中（该文件超过 1MB，按 tweetId 字符串检索无命中）。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-19-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
