# 2026-09-17 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-16 上午至 2026-09-17 上午 CST（并补录 09-15 未被 09-16 文档收录的高信号片）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-15 / 09-16 已发现文档互补，不重复已入队条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-17-zh-summary.md
```

---

## 1. ElevenLabs Reception — 给小企业的 AI 前台

- **作者**：@ElevenLabs
- **时间**：2026-09-16 16:37 UTC
- **视频**：约 33 秒
- **亮点**：Introducing Reception。基于 ElevenAgents 的小企业 AI 前台：接听每一通来电、回答问题、预约工单、短信确认。声称错过一通电话就是丢掉一个客户；接入方式是「加网站就能在几分钟内跑起来」。跟帖给出产品站 https://www.reception.ai/ 与博客 https://elevenlabs.io/blog/reception。是本日观看量最高的官方发布片。
- **互动**：约 2068 赞、161 转发、121 引用、2008 收藏、71.2 万+浏览
- **分类建议**：ai / productivity / consumer
- **链接**：https://x.com/ElevenLabs/status/2100262886916358361
- **tweetId**：2100262886916358361

---

## 2. QuiverAI Arrow 2 — 可编辑矢量生成模型

- **作者**：@QuiverAI
- **时间**：2026-09-16 18:45 UTC
- **视频**：约 44 秒
- **亮点**：Introducing Arrow 2。新一代精确、可编辑矢量图形模型，质量更高、输出更快，App 与 API 同步上线。跟帖拆出 Arrow 2 Telos（把 Arrow 的基础设施 / 品味 / 速度接到前沿模型深度上）、一体化生成+编辑工作区（对话迭代、画布精修、产出可编辑 SVG）、以及开发者 API 平台 https://platform.quiver.ai/sign-in。博客：https://quiver.ai/blog/introducing-arrow-2-0。是本日质感最强的设计模型发布。
- **互动**：约 1969 赞、128 转发、46 引用、1564 收藏、11.6 万+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/QuiverAI/status/2100295136261349802
- **tweetId**：2100295136261349802

---

## 3. Unity × OpenAI Codex 官方插件

- **作者**：@unitygames
- **时间**：2026-09-16 15:53 UTC
- **视频**：约 9 秒
- **亮点**：Introducing the official Unity plugin for OpenAI Codex。第一方集成，直接出现在 OpenAI 通用插件目录。开发者本来就能拿 Codex 写 Unity，官方插件把引擎域知识写进 agent，由 Unity 工程师维护。短官方片，功能句清楚，观看量够入库。
- **互动**：约 765 赞、57 转发、11 引用、363 收藏、7.4 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/unitygames/status/2100251614091084085
- **tweetId**：2100251614091084085

---

## 4. iHermes — 在 iMessage 里用的 Hermes 个人助理

- **作者**：@dankrieg（@iHermesAgent / @raisi_ai）
- **时间**：2026-09-16 16:27 UTC
- **视频**：约 27 秒
- **亮点**：Introducing iHermes。基于 Hermes Agent + GBrain 记忆的个人助理，入口就是 iMessage：发一条短信开始、接常用 App、把任务交出去，它按步骤做、带着历史上下文、会主动跟进。目标是「不用自己搭整套 Hermes 基础设施」也能用上。https://ihermes.co/
- **互动**：约 370 赞、22 转发、16 引用、501 收藏、7.2 万+浏览
- **分类建议**：ai / productivity / consumer
- **链接**：https://x.com/dankrieg/status/2100260309336535218
- **tweetId**：2100260309336535218

---

## 5. Motion MCP for ChatGPT — 聊天里直接做动效

- **作者**：@motion_so
- **时间**：2026-09-16 17:46 UTC
- **视频**：约 30 秒
- **亮点**：Introducing the Motion MCP for ChatGPT。接上 MCP、交资产、描述效果，ChatGPT 在 Motion 里直接出想法、动画和转场。本帖发布片本身由 MCP 生成。是 09-14 Motion MCP for Codex、09-15 Codex for ads 同一产品线的 ChatGPT 通道发布，片可独立入库。
- **互动**：约 592 赞、47 转发、579 收藏、4.5 万+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/motion_so/status/2100280160234721660
- **tweetId**：2100280160234721660

---

## 6. Greptile Knowledge Base MCP — 把代码库知识交给编码 Agent

- **作者**：@greptile
- **时间**：2026-09-16 17:00 UTC
- **视频**：约 40 秒
- **亮点**：Introducing the Knowledge Base MCP。Greptile 维护「代码库每一块怎么工作 + 历史事故」知识库；从今天起 Codex / Claude 等编码 agent 可通过 MCP 读这份知识再写代码。片把产品句讲清，是本日最清楚的开发者基础设施发布之一。
- **互动**：约 222 赞、12 转发、12 引用、130 收藏、3.0 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/greptile/status/2100268607477273048
- **tweetId**：2100268607477273048

---

## 7. Figma iOS / iPadOS 27 UI Kit（含 Duo）

- **作者**：@figma
- **时间**：2026-09-16 19:35 UTC
- **视频**：约 18 秒
- **亮点**：watchlist 账号官方资源片。更新 iOS 与 iPadOS 27 UI Kit，并带上 Duo。Community 文件：https://www.figma.com/community/file/1651309003795292092/ios-and-ipados-27。不是新品牌子，但是完整的官方 walkthrough。
- **互动**：约 537 赞、47 转发、13 引用、117 收藏、2.7 万+浏览
- **分类建议**：design
- **链接**：https://x.com/figma/status/2100307610037875156
- **tweetId**：2100307610037875156

---

## 8. Command Code Desktop — 开源模型编码 Agent 桌面端

- **作者**：@CommandCodeAI
- **时间**：2026-09-16 15:42 UTC
- **视频**：约 46 秒
- **亮点**：Introducing Command Code Desktop App。Mac / Linux / Windows beta。多 agent、文件、Git、终端、浏览器预览、计划，以及 /design 即时改界面。下载：https://commandcode.ai/desktop。跟帖提到下一步是 computer use / sandbox / 云电脑。是本日最完整的编码桌面端首发片。
- **互动**：约 437 赞、29 转发、11 引用、115 收藏、1.5 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/CommandCodeAI/status/2100248865673031826
- **tweetId**：2100248865673031826

---

## 9. Launchvideo — 让 Agent 在代码库里做发布片

- **作者**：@flornkm
- **时间**：2026-09-16 16:54 UTC
- **视频**：约 16 秒
- **亮点**：Introducing Launchvideo。一组 skill 与参考，让 agent 直接在代码库里做出有品味的产品视频。本地优先、AI native、无订阅。https://www.launchvideo.dev/。短片把产品句与质感放得很清，是本日最对口的 indie 设计工具发布。
- **互动**：约 158 赞、5 转发、225 收藏、1.2 万+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/flornkm/status/2100267179212235125
- **tweetId**：2100267179212235125

---

## 10. Nunchux VC-Attention — 免重训的低比特注意力加速

- **作者**：@NunchuxAI
- **时间**：2026-09-16 22:16 UTC
- **视频**：约 48 秒
- **亮点**：Introducing VC-Attention。不重训的低比特注意力：在 MiniMax-H3 上相对 FlashAttention-4，B200 加速约 1.6×、B300 约 1.5×，保真度高于 SageAttention2，可与现有稀疏注意力叠加。两点创新：V-Smooth 降 value 量化误差、ExpCast-FP8 加速 softmax。专有扩展 Nunchux Attention 把加速推到 1.9× / 1.8×。MIT / CMU / Berkeley / Stanford / NVIDIA 联合。是研究向发布片，但演示完整、观看量够。
- **互动**：约 61 赞、18 转发、40 收藏、1.3 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/NunchuxAI/status/2100348155955183861
- **tweetId**：2100348155955183861

---

## 11. Headless Amplitude — Agent 成为 Amplitude 一等公民

- **作者**：@spenserskates（Amplitude CEO）
- **时间**：2026-09-16 18:03 UTC
- **视频**：约 74 秒
- **亮点**：Introducing Headless Amplitude。核心能力走 MCP（按最少 token 消耗优化）、开发者 CLI 管事件 / 实验 / flag / 项目、service account 让 bot 自己查。8 月 MCP 工具调用 630 万次，是 3 月的 5 倍。产品数据查询已是增长最快的 agent 用例。片把「不用再打开第 100 个 SaaS 仪表盘」讲清。
- **互动**：约 84 赞、8 转发、18 收藏、6100+浏览
- **分类建议**：developer-tools / ai / productivity
- **链接**：https://x.com/spenserskates/status/2100284471102840886
- **tweetId**：2100284471102840886

---

## 12. ASCII Magic v2 — 浏览器里的图像 / 视频特效工作台

- **作者**：@kail_designs
- **时间**：2026-09-16 17:25 UTC
- **视频**：约 59 秒
- **亮点**：Introducing ASCII Magic v2。重做界面；100+ 风格与 shader、每种效果独立动画、171 个 AI 生成预设、4K 导出、可叠加后期、节点编辑器、100+ 背景 / 40+ 动态背景；本周还将上 MCP。https://www.ascii-magic.com。近一分钟演示把能力面铺开。
- **互动**：约 59 赞、5 转发、42 收藏、4900+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/kail_designs/status/2100274944903193003
- **tweetId**：2100274944903193003

---

## 13. Paperclip Connectors — 给每个 Agent 配 App 权限

- **作者**：@papercliping
- **时间**：2026-09-16 18:49 UTC
- **视频**：约 31 秒
- **亮点**：Introducing Connectors in Paperclip。按岗位给 agent 配它需要的 App，选账户、选可执行动作。开源 agent 管理工作台的能力发布片，功能句清楚。
- **互动**：约 36 赞、20 收藏、8400+浏览
- **分类建议**：ai / productivity / developer-tools
- **链接**：https://x.com/papercliping/status/2100296015689703494
- **tweetId**：2100296015689703494

---

## 14. US Gov Graph — 联邦政府人事与职权图谱

- **作者**：@m_adams
- **时间**：2026-09-16 22:53 UTC
- **视频**：约 31 秒
- **亮点**：Introducing the US Gov Graph。用 AI 建模、监控美国各级政府的人员与职权位置，自称「Palantir for The People」。片把产品句讲清，偏 civic / 数据产品，可当 other / ai 看。
- **互动**：约 246 赞、36 转发、13 引用、179 收藏、1.0 万+浏览
- **分类建议**：ai / other
- **链接**：https://x.com/m_adams/status/2100357459827429534
- **tweetId**：2100357459827429534

---

## 15. Persona Band — Cal AI 创始人的下一部消费硬件（09-15 补录）

- **作者**：@zach_yadegari
- **时间**：2026-09-15 16:14 UTC
- **视频**：约 84 秒
- **亮点**：09-16 文档未收录。卖掉 Cal AI 之后的新产品 Introducing Persona。预售手环 https://yourpersona.com/band。片强调「别人没做对的界面，我们做对了」。观看量是本窗口最高的消费硬件发布片，建议按 hardware / consumer 审核，不必当软件工具入库。
- **互动**：约 4008 赞、112 转发、287 引用、2190 收藏、191 万+浏览
- **分类建议**：hardware / consumer
- **链接**：https://x.com/zach_yadegari/status/2099894590723465295
- **tweetId**：2099894590723465295

---

## 16. BuildBetter — AI Head of Product（09-15 补录）

- **作者**：@Spshulem
- **时间**：2026-09-15 18:06 UTC
- **视频**：约 139 秒（主帖）+多段部门向短片
- **亮点**：09-16 文档未收录。Introducing BuildBetter：自称第一款 AI Head of Product，找客户最想要什么、谁在流失、并自主推动研发去增收。跟帖按领导层 / 销售 / 成功 / 一键工作流拆开，产品站 https://www.buildbetter.ai/。是漏收里最完整的 B2B 发布长片。
- **互动**：约 491 赞、136 转发、65 引用、465 收藏、72.9 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/Spshulem/status/2099922862488355298
- **tweetId**：2099922862488355298

---

## 17. Kobra — 带声音的 Motion 组件库（09-15 补录）

- **作者**：@haaarshsingh
- **时间**：2026-09-15 15:34 UTC
- **视频**：约 37 秒
- **亮点**：09-16 文档未收录。Introducing Kobra。80+ 带声音的 motion 组件，定位 1:1 替代 shadcn/ui，基于 Tailwind、Base UI 与 shadcn/lint。https://kobra.systems/components/input-otp。片本身质感很强，适合入站当设计组件发布。
- **互动**：约 649 赞、41 转发、887 收藏、2.7 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/haaarshsingh/status/2099884604010242064
- **tweetId**：2099884604010242064

---

## 18. 其他高信号 / 跟进

- **LangChain Paid Media Agent**（@amal_irgashev，约 45 秒，4500+浏览）：开源付费投放分析 / 周报 / 预算改稿 agent。https://x.com/amal_irgashev/status/2100336425510269038
- **Photon × Render Codex-in-iMessage 模板**（约 105 秒，2900+浏览）：iMessage 里跑自己的 Codex agent。https://x.com/PhotonHQ/status/2100338181862502446
- **Relay for Developers**（@advaitpaliwal，约 24 秒，2600+浏览）：`npx relaymessenger connect`，在路上跟 agent 说话。https://x.com/advaitpaliwal/status/2100332020815593620
- **Okara competitor agent**（@askOkara，约 32 秒，3400+浏览）：盯竞品定价 / 页面 / 文案 / LinkedIn / X 等 100+ 信号。https://x.com/askOkara/status/2100212914494026034
- **OrcaRouter local ↔ cloud observability**（约 25 秒，3600+浏览）：本地 agent 痕迹与网关生产流量统一 orca-trace。https://x.com/OrcaRouter/status/2100233656463929671
- **Wisp Telegram MCP**（约 101 秒，1400+浏览）：私密接 Telegram，token 留在设备。https://x.com/usewisp_io/status/2100272771330920466
- **Notion × Claude 门店巡访 MCP 案例**（约 27 秒，1.4 万+浏览，案例片非新功能首发）：https://x.com/NotionHQ/status/2100284304177909803
- **Keiki**（@nizzyabi，09-15，约 57 秒，3.1 万+浏览）：在用户已有 App 里做面向客户的 AI agent。https://x.com/nizzyabi/status/2099883276072600000
- **Rowboat**（@segmenta，09-15，约 47 秒，3.2 万+浏览）：开源、可自托管的多人工作助理，共享白板后 `@rowboat implement it`。https://x.com/segmenta/status/2099918163916054891
- **SocialQuack**（@ThePeterMick，09-15，约 14 秒，6.1 万+浏览）：买断制社媒排期，可让 Claude / ChatGPT 直接排一个月内容。https://x.com/ThePeterMick/status/2099774171060285537

## 已在 09-14 / 09-15 / 09-16 文档中出现（仅交叉引用）

Gemini 3.8 Live / Live Extended Thinking、Taste Labs Brand API、magicX AI Autocomplete、bg0、mem0 Gateway、Notion 默认 Agent 指令、pgrust v0.3、Motion Codex for ads、freecode.sh、noupload.xyz、Adobe Premiere Generate Sound、ElevenLabs MCP、Cline Desktop、ObsidianUI、Motion MCP for Codex、Linear Loops、Inspo、Treg ChatGPT plugin、Calvin video skill、@sfinterface/numbers、GitHub PR 页改版。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（部分 MCP 实验、个人 AI 生成草稿片）
- 加密货币 / 代币 / NFT / launchpad（Argus $XAUM、Hylo XP、Feel.cash on Arc、Arc Mainnet、SHx 上所、Marscoin / fomo 交易复盘）
- 纯游戏 demo / 模组 / 卡牌（Final Fantasy Resonance、Dokkan Battle Motion、WWE SuperCard、Create: Progressive Engineering）
- 体育 / 娱乐 / 音乐发行（NFL 周报、WPBL Championship Cup、球队周边）
- 政治 / 新闻评论片、宗教讲道片
- Cloudflare Connect / GitHub Universe 会前预告（活动片非产品发布）
- Google Workspace 开学季 Gemini 用法串（教程向，非新功能首发）
- Claude Code 非官方 changelog bot 的版本播报
- Motion 自动回复的「Mosaic Motion video ready」生成结果帖

**已核对**：上述主条目 tweetId 均不在 `src/data/videos.json` 的代码检索命中结果中（该文件超过 1MB，按 tweetId 字符串检索无命中）。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-17-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
