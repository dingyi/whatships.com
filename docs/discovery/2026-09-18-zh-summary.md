# 2026-09-18 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-17 上午至 2026-09-18 上午 CST。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-16 / 09-17 已发现文档互补，不重复已入队条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-18-zh-summary.md
```

---

## 1. OpenAI Astra for Law — 面向律所的 GPT-6 Astra 产品线

- **作者**：@OpenAI
- **时间**：2026-09-17 20:15 UTC
- **视频**：约 78 秒（主帖）+ 约 60 秒（法务插件跟帖）
- **亮点**：Astra for Law。用 GPT-6 Astra 加上法律分析 / 写作指令、精细工作设置，以及覆盖美国判例 / 法规 / 法院规则 / 行政裁决、超 2.3 亿 URL、每日更新的 Legal Search Index。跟帖拆出 Sullivan & Cromwell 协议分析器、Ropes & Gray 并购尽职、Cooley IPO 工具 GO Public；同时上线 26 个合作伙伴插件与 47 个社区插件（Thomson Reuters、Harvey、Legora、iManage 等）。初期通过 Trusted Access 向入选律所开放 ChatGPT 与 Codex，API 即将到来。是本日观看量最高的官方发布片。
- **互动**：约 9493 赞、601 转发、434 引用、3230 收藏、222 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/OpenAI/status/2100679992720142459
- **tweetId**：2100679992720142459

---

## 2. Claude Projects 重做 — 一次会话调度并行线程

- **作者**：@claudeai
- **时间**：2026-09-17 17:07 UTC
- **视频**：约 83 秒
- **亮点**：watchlist 账号官方能力片。Projects 现在从一条会话起步，入口是 Claude Code：你描述要做的事，Claude 调度多条并行线程，关上笔记本之后仍继续跑。跟帖：可像给首席办公室一样一次交多件事；Overview 面板看待办项，手机也能控线程；项目共享记忆与文件库；云端线程暂时访问不了本机文件 / 内网，本地支持即将到来。Pro / Max 云会话正在 beta，即将开放全体 Claude 用户。博客：https://claude.com/blog/projects-redesigned 候补：https://claude.com/form/projects
- **互动**：约 7806 赞、477 转发、295 引用、2952 收藏、156 万+浏览
- **分类建议**：ai / productivity / developer-tools
- **链接**：https://x.com/claudeai/status/2100632677904744716
- **tweetId**：2100632677904744716

---

## 3. Mio — 全队共享的 AI 员工

- **作者**：@arthaud_
- **时间**：2026-09-17 16:05 UTC
- **视频**：约 51 秒（主帖）+约 43 秒能力拆解
- **亮点**：Introducing Mio。口号是「杀掉 AI 助手，改为全队共享的 AI 员工」。住在 Slack、后台 24/7、接 3500+ 工具、尊重权限并请求批准、从每次交互学习、会主动提下一步。7 月 beta 以来声称省下数千小时、完成数万任务；2 人团队与 200 人团队都在用。前 100 家公司 $100 信用。https://www.mio.xyz/
- **互动**：约 1004 赞、84 转发、152 引用、211 收藏、97.4 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/arthaud_/status/2100617131201052996
- **tweetId**：2100617131201052996

---

## 4. CrowdReply Astra for Marketing — 用一个 MCP 做 AI 搜索排名

- **作者**：@Crowdreply_io
- **时间**：2026-09-17 16:54 UTC
- **视频**：约 42 秒
- **亮点**：Introducing Astra for Marketing。把网站丢进 GPT-6 Astra，用单一 MCP 在 169 秒内冲 AI 搜索排名。跟帖给出 https://crowdreply.io/mcp 与 24 小时免费可见度打分。是本日传播最开的营销工具发布片之一，口号强烈，需审核质感与请求是否足以入站。
- **互动**：约 790 赞、34 转发、1610 收藏、34.5 万+浏览
- **分类建议**：ai / productivity / other
- **链接**：https://x.com/Crowdreply_io/status/2100629367986716804
- **tweetId**：2100629367986716804

---

## 5. Lightreel Claude Marketing MCP — 在 Claude 里搜网红与广告

- **作者**：@lightreelai
- **时间**：2026-09-17 15:00 UTC
- **视频**：约 22 秒
- **亮点**：Introducing the Claude Marketing MCP。把 Lightreel 接进 Claude：找 Instagram 网红、写 TikTok hook、翻 Meta 广告库。短官方片，功能句清楚，观看量足入库。
- **互动**：约 496 赞、149 转发、23 引用、353 收藏、33.9 万+浏览
- **分类建议**：ai / productivity / design
- **链接**：https://x.com/lightreelai/status/2100600825307423095
- **tweetId**：2100600825307423095

---

## 6. Notion Skills API — 在 Notion 里编辑团队 Skills，各家 Agent 通用

- **作者**：@NotionHQ
- **时间**：2026-09-17 16:15 UTC
- **视频**：约 24 秒
- **亮点**：watchlist 账号官方发布。Introducing the Notion Skills API。团队在 Notion 里共同写 skill，通过 API 同步到 GitHub，ChatGPT / Claude / Grok Bot 等 agent 直接用；支持 `/` 快捷与管理员安装控制。可用 Vercel skills CLI：`npx skills add <notion url>` 或 `npx skills add notion`。博客：https://www.notion.com/blog/a-skills-library-for-every-agent
- **互动**：约 622 赞、42 转发、36 引用、488 收藏、11.3 万+浏览
- **分类建议**：productivity / ai / developer-tools
- **链接**：https://x.com/NotionHQ/status/2100619682718118397
- **tweetId**：2100619682718118397

---

## 7. Perplexity Computer — Effort 控制

- **作者**：@perplexity_ai
- **时间**：2026-09-17 16:08 UTC
- **视频**：约 11 秒
- **亮点**：watchlist 账号官方迭代片。在 Computer 的模型选择器里加 Effort presets：结合 orchestrator 模型与推理深度，控制任务做多深、花多少。Web 已上线，移动 / 桌面端即将到来。短片功能句清楚。
- **互动**：约 358 赞、29 转发、22 引用、63 收藏、9.8 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/perplexity_ai/status/2100617849677176992
- **tweetId**：2100617849677176992

---

## 8. terminal-browser Claude Code 插件

- **作者**：@RobKnight__（Zenbu / YC P26）
- **时间**：2026-09-17 16:26 UTC
- **视频**：约 16 秒
- **亮点**：Introducing the terminal-browser claude code plugin。直接在 Claude Code 里打开 terminal-browser。安装说明：https://github.com/zenbu-labs/terminal-browser/tree/main/claude-code-plugin。短片质感强，Claude Code 主程 Boris Cherny 跟帖表示吃惊。
- **互动**：约 545 赞、24 转发、388 收藏、7.9 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/RobKnight__/status/2100622380439683541
- **tweetId**：2100622380439683541

---

## 9. Memorable — Agent 的程序化记忆（YC S27）

- **作者**：@advaiytsane
- **时间**：2026-09-17 19:27 UTC
- **视频**：约 55 秒
- **亮点**：Introducing Memorable。Agent 不再在单一上下文窗里生老病死；成功跑次被蒸馏成可复用 procedure 图，下一次相近任务走图搜索而不是从零推理。CLI 已接 Claude Code / Codex / Cursor / Claude Cowork，并在 Garry Tan 的 GBrain、GStack 与 YC QM Harness 里跑过。https://www.memorable.sh/
- **互动**：约 178 赞、14 转发、10 引用、257 收藏、6.9 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/advaiytsane/status/2100668011673731441
- **tweetId**：2100668011673731441

---

## 10. Runway Enhance Frame Rate — 帧插值模型

- **作者**：@runwayml
- **时间**：2026-09-17 16:18 UTC
- **视频**：约 38 秒
- **亮点**：watchlist 账号官方新能力。Introducing Enhance Frame Rate。新帧插值模型，把任意素材转到 25 / 30 / 48 / 60 / 120 fps，以及 NTSC 59.94。https://app.runwayml.com/
- **互动**：约 388 赞、37 转发、31 引用、205 收藏、6.0 万+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/runwayml/status/2100620377005203564
- **tweetId**：2100620377005203564

---

## 11. Nautilo — 开源多用户 Org Harness

- **作者**：@Dan_Jeffries1
- **时间**：2026-09-17 15:15 UTC
- **视频**：约 88 秒（主帖）+多段深挖
- **亮点**：Launch day。Introducing Nautilo。开源、自托管的多用户 / 多 agent 工作区：Server + Desktop + Web + iOS + Android。每人一个 Genie；内置浏览器、办公套件、视频编辑、矢量设计、终端；可调度 Codex / Hermes / Claude Code。人与 agent 共同编辑同一份文稿，不是 prompt-and-pray。https://nautilo.ai/ 源码 https://github.com/agentsea/nautilo
- **互动**：约 223 赞、33 转发、15 引用、187 收藏、2.7 万+浏览
- **分类建议**：ai / productivity / developer-tools
- **链接**：https://x.com/Dan_Jeffries1/status/2100604658079191175
- **tweetId**：2100604658079191175

---

## 12. Figma node — 把 Frame 接进 Weave 工作流

- **作者**：@figma
- **时间**：2026-09-17 16:33 UTC
- **视频**：约 31 秒
- **亮点**：watchlist 账号官方能力片。Introducing Figma node：任意 Figma frame 连进 Weave 工作流，按品牌批量出内容、迭代 / 翻译 / 转视频，改设计后关联资产会跟着更新。现已对所有人开放。
- **互动**：约 246 赞、19 转发、106 收藏、1.8 万+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/figma/status/2100624143188394161
- **tweetId**：2100624143188394161

---

## 13. GPT-6 Astra for AI UGC — 开源爆款视频工作流

- **作者**：@shengkunye（@MonidHQ）
- **时间**：2026-09-17 19:47 UTC
- **视频**：约 24 秒
- **亮点**：Introducing GPT-6 Astra for AI UGC。开源了用 Astra 复制爆款视频的工作流，口号是用 $0.03/秒替掉 $60 人工 UGC。@hypitai × @MonidHQ。片本身是工作流演示，不是新品牌首发，但观看量与收藏量足以当 indie 工具片看。
- **互动**：约 148 赞、9 转发、8 引用、236 收藏、1.2 万+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/shengkunye/status/2100672978749096186
- **tweetId**：2100672978749096186

---

## 14. Replicate P-Video-2-Pro

- **作者**：@replicate × @PrunaAI
- **时间**：2026-09-17 14:16 UTC
- **视频**：约 15 秒
- **亮点**：Introducing P-Video-2-Pro。基于 MiniMax H3，几秒内出 5 秒 480p / 720p 视频；首周 5 折，起价 $0.01/秒。watchlist 账号上架片，功能句清楚。
- **互动**：约 153 赞、13 转发、104 收藏、9500+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/replicate/status/2100589658073698466
- **tweetId**：2100589658073698466

---

## 15. Nebula — 重做 Agent 与人的协作空间

- **作者**：@NebulaAI
- **时间**：2026-09-17 20:00 UTC
- **视频**：约 86 秒
- **亮点**：Introducing the new Nebula。Channels 里用文字 / 语音 / 视频协作；Nebula 编排工作区、记住一切并主动行动；可在任意设备上用任意工具造专门 agent，他们和团队住在同一个 channel；任务后台跑完再 ping。近一分钟演示把产品句讲清。
- **互动**：约 41 赞、8 转发、28 收藏、9100+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/NebulaAI/status/2100676280496845270
- **tweetId**：2100676280496845270

---

## 16. Krea Agent 视频编辑器

- **作者**：@krea_ai
- **时间**：2026-09-17 20:10 UTC
- **视频**：约 28 秒
- **亮点**：introducing a new video editor in Krea Agent。在生成片段上拼场景、延长、加音频。https://www.krea.ai/agent
- **互动**：约 105 赞、13 转发、50 收藏、6200+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/krea_ai/status/2100678711448334709
- **tweetId**：2100678711448334709

---

## 17. Motion × GPT-6 Astra — Astra 直接在 Motion 里做动效

- **作者**：@motion_so
- **时间**：2026-09-17 21:08 UTC
- **视频**：约 30 秒
- **亮点**：watchlist 账号同一产品线的模型通道发布。把 GPT-6 Astra 接进 Motion：交资产、给参考、描述视频，Astra 在 Motion 里搭场景 / 动画 / 转场并用 prompt 迭代。本帖视频即 Astra + Motion 生成。是 09-14 MCP for Codex、09-15 Codex for ads、09-16 MCP for ChatGPT 后的 Astra 通道，片可独立入库。
- **互动**：约 71 赞、6 转发、54 收藏、5300+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/motion_so/status/2100693323594015184
- **tweetId**：2100693323594015184

---

## 18. LM Studio Bionic — Introspection 与 Session References

- **作者**：@lmstudio
- **时间**：2026-09-17 21:53 UTC
- **视频**：约 10 秒
- **亮点**：Introducing Introspection and Session References。Bionic agent 可搜自己的 session 历史，处理长期上下文与多次 compaction；编辑器里用 `@` 引用其他 session。短官方能力片。
- **互动**：约 75 赞、6 转发、21 收藏、4700+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/lmstudio/status/2100704818545209378
- **tweetId**：2100704818545209378

---

## 19. ruNNtime — 浏览器里跑神经网络

- **作者**：@_jakubchmura（@swmansion）
- **时间**：2026-09-17 14:40 UTC
- **视频**：约 8 秒
- **亮点**：just shipped ruNNtime。基于 TypeGPU 的浏览器端神经网络库。演示是语音转文字 + 隐私过滤在 M4 Pro 上同时跑：说出邮箱在出屏前就被打黑。短 demo 路径清楚。
- **互动**：约 60 赞、12 转发、17 收藏、5300+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/_jakubchmura/status/2100595872971047075
- **tweetId**：2100595872971047075

---

## 20. 其他高信号 / 跟进

- **OpenAI 法务插件跟帖**（约 60 秒，7.1 万+浏览）：26 个合作伙伴 + 47 个社区插件。https://x.com/OpenAI/status/2100679997862330735
- **OpenCompany**（@senamakel，约 102 秒，6400+浏览）：把整家公司塞进笔记本的 agent hive mind，模板包括 VC / 律所 / 网红 / 软件公司 / 营销公司。https://x.com/senamakel/status/2100664161571324393
- **supermemory × Muse Code 插件**（约 37 秒，4200+浏览）：给 Meta Muse Code 加共享超级记忆。https://x.com/supermemory/status/2100625423726182819
- **Anthropic Science Blog GPU 优化**（约 18 秒，12.3 万+浏览）：Claude 为 30+开源生物模型写自定义 GPU 软件，推理平均快 4×并开源代码。研究向案例片，非消费级产品首发。https://x.com/AnthropicAI/status/2100701581109072332
- **Cohere North 2**（约 16 秒，1.3 万+浏览）：Coming October 2026 预告片，非现货上线。https://x.com/cohere/status/2100631803782443249
- **Framer Agent 4 个组件案例**（约 14 秒，2900+浏览）：能力展示 / 教学片，非新功能首发。https://x.com/framer/status/2100666871754440975
- **Framer Frames vs Stacks 教程**（约 207 秒，5200+浏览）：教学长片。https://x.com/framer/status/2100625813485797875
- **Papers with Code MCP**（@NielsRogge，约 76 秒，2800+浏览）：用 Claude Code + search_papers 研究 Jev 架构。https://x.com/NielsRogge/status/2100592786516951490
- **Diffusion Studio MCP + Chat**（@konstipaulus，约 436 秒教程，1800+浏览）：在应用里用语言剪视频或外接 agent。https://x.com/konstipaulus/status/2100593082466976116
- **Panelwind**（@KhalidDevLog，约 43 秒，1100+浏览）：面向 Expo / React Native 的 agent-first ESLint 插件。https://x.com/KhalidDevLog/status/2100578015788794129
- **Maxed AI Reels**（@MaxHirsch13，约 12 秒，2100+浏览）：健身 App 加 Reels，消费级迭代。https://x.com/MaxHirsch13/status/2100672979734573389
- **YouWare × Gemini 4 可飞直升机**（约 36 秒，3400+浏览）：产品案例 / playground，非新品牌首发。https://x.com/YouWareAI/status/2100653782103388493

## 已在 09-15 / 09-16 / 09-17 文档中出现（仅交叉引用）

ElevenLabs Reception、QuiverAI Arrow 2、Unity × Codex 插件、iHermes、Motion MCP for ChatGPT / Codex for ads、Greptile Knowledge Base MCP、Figma iOS 27 UI Kit、Command Code Desktop、Launchvideo、Gemini 3.8 Live、Taste Labs Brand API、magicX AI Autocomplete、bg0、mem0 Gateway、Persona Band、BuildBetter、Kobra。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（部分 MCP 实验、个人 AI 生成草稿、Agraris 链上 agent 注册表等）
- 加密货币 / 代币 / NFT / launchpad（$PERK、mog / $MOG、$PUP / NearKat、The Grotto L1）
- 纯游戏 demo / 模组 / 游戏发布（NoQuarter 游戏上线、Mech Strike on Roobet、PaperBoat PC 移植）
- 体育 / 娱乐 / 音乐发行（Ravens White Noise、Circa 老虎机、Hudson Williams 粉丝片）
- 政治 / 新闻评论片、军事募兵片、Glenn Beck 搞笑奖牌
- GitHub Universe 会前讲者预告、GitHub Podcast 热点片（活动 / 播客非产品发布）
- Julian Goldie 等二创解说长片（MiniMax Design / ElevenLabs MCP 教程向，非官方首发）
- VEED prompt-to-video 第三方工作流解说（非官方发布主帖）
- Bohdan Motion 发布片拆解教程（制片方案复盘，非新产品）

**已核对**：上述主条目 tweetId 均未在 `src/data/videos.json` 的代码检索命中结果中。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-18-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
