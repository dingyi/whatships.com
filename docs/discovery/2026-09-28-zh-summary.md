# 2026-09-28 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / now available / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-26 下午至 2026-09-28 上午 CST（主要补 09-26 / 09-27 文档截稿后的窗口，并补录 09-26 未被 09-27 收录的高信号片）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-26 / 09-27 已发现文档互补，不重复已入队条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-28-zh-summary.md
```

---

## 1. Pause 1.0 Flash — 一句话剪 20 小时的片

- **作者**：@Truffievfx（@pausevfx 联合创始人）；同日更早一条由创始人 @ravilevfx 发出
- **时间**：2026-09-26 14:12 UTC（高互动片）；2026-09-26 00:55 UTC（创始人首发）
- **视频**：约 28 秒 / 54 秒
- **亮点**：Introducing Pause 1.0 Flash。定位把「剪 20 小时」压成一条 prompt；自称能让剪辑/创作者提速 80 倍，beta 现已上线并打五折。https://www.pausevfx.com/ 本窗口浏览量最高的独立创意工具首发片，09-27 文档未收，本窗口补录。建议以 @Truffievfx 高互动片入库，创始人片作交叉引用。
- **互动**：高互动片约 863 赞、20 转发、48 引用、34 回复、1450 收藏、30.4 万+浏览；创始人片约 75 赞、17.8 万+浏览
- **分类建议**：ai / motion / design
- **链接**：https://x.com/Truffievfx/status/2103850308850139217（建议入库）；https://x.com/ravilevfx/status/2103649716299001991（创始人首发）
- **tweetId**：2103850308850139217

---

## 2. Agent Monitor — 看 coding agent 覆盖了什么、漏了什么

- **作者**：@woj4ke
- **时间**：2026-09-27 18:09 UTC
- **视频**：约 127 秒
- **亮点**：Introducing Agent Monitor。免费开源 IDE 扩展：显示 coding agent 覆盖了哪些区域、跳过了哪些、正在看什么。线程说明按 Security / Testing / UI/UX / Data 等 13 个焦点追踪每个会话；「Auth 重写了但 Testing 没动」可一键 Focus here。Images 视图按顺序保留 agent 看过的截图。本地规则打分，无模型、无遥测、无 API key。GitHub：https://github.com/mov-bx-0xb800/agent-monitor ；VS Code / Cursor 市场可装。本窗口浏览量第二的开发者工具长 walkthrough。
- **互动**：约 42 赞、5 转发、1 引用、8 回复、22 收藏、11.7 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/woj4ke/status/2104272175138267557
- **tweetId**：2104272175138267557

---

## 3. Space — 给人与 agent 用的云文件系统

- **作者**：@byjasonz（a16z speedrun）
- **时间**：2026-09-26 17:20 UTC
- **视频**：约 20 秒
- **亮点**：introducing Space: a cloud filesystem built for work。挂一块持久盘给人和 agent；云端工作体感接近本地；只流需要的字节、文件不压缩。跟帖给出新落地页 https://spacefs.com 09-27 文档未收，本窗口补录。
- **互动**：约 414 赞、20 转发、5 引用、11 回复、336 收藏、3.1 万+浏览
- **分类建议**：developer-tools / productivity / ai
- **链接**：https://x.com/byjasonz/status/2103897479938777423
- **tweetId**：2103897479938777423

---

## 4. Pulse — 看 Mac 卡在哪、空间被谁占

- **作者**：@saurra3h（@tracwellapp）
- **时间**：2026-09-27 16:23 UTC
- **视频**：约 79 秒
- **亮点**：introducing Pulse。Mac 应用：实时资源图、App 活动、磁盘占用可视化、可存快照；历史留在本机。https://pulsemac.app 真机 walkthrough，indie 系统工具首发片。
- **互动**：约 185 赞、7 转发、3 引用、15 回复、232 收藏、1.5 万+浏览
- **分类建议**：productivity / consumer
- **链接**：https://x.com/saurra3h/status/2104245547498639521
- **tweetId**：2104245547498639521

---

## 5. shadercn — 30+ shader 球体组件

- **作者**：@shadcnlabs
- **时间**：2026-09-27 11:18 UTC
- **视频**：约 15 秒
- **亮点**：Introducing shadercn。30+ shader orbs，一条命令装进项目；由 vgpu + TypeGPU 驱动，类型安全、可定制，对接 shadcn/ui。免费开源。同日还有 @radiumcoders 的 evilbuttons.com（28 个会躲、会怀疑、会故障的动画按钮），可作同生态跟进。
- **互动**：约 209 赞、10 转发、1 引用、10 回复、220 收藏、1.3 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/shadcnlabs/status/2104168766569685031
- **tweetId**：2104168766569685031

---

## 6. 订阅扫描器 — 信用卡账单里找出订阅并一键取消

- **作者**：@vibhu（Solana Foundation products）
- **时间**：2026-09-27 21:54 UTC
- **视频**：约 34 秒
- **亮点**：扫描信用卡账单，找出所有付费订阅，支持取消，并用 AI 一键搭一个「自己的版本」。等待名单式首发片，互动高、产品名未在主帖写出，审核时补产品名与官网。
- **互动**：约 183 赞、6 转发、7 引用、69 回复、49 收藏、3.5 万+浏览
- **分类建议**：consumer / productivity / ai
- **链接**：https://x.com/vibhu/status/2104328791514620165
- **tweetId**：2104328791514620165

---

## 7. taiga-s1 — 本地 1.2M 参数模型在 FreeCAD 里出零件

- **作者**：@sxhivs
- **时间**：2026-09-27 17:45 UTC
- **视频**：约 8 秒
- **亮点**：tiny 1.2M param system-1 模型，在 FreeCAD 里搭完整 3D 零件；约 1ms/决策、本地跑；agent 规划、taiga 执行。HF：https://huggingface.co/shhivv/taiga-s1 GitHub：https://github.com/shhivv/taiga-s1 下一步计划走系统辅助功能树，覆盖没有脚本 API 的 App。
- **互动**：约 309 赞、25 转发、2 引用、10 回复、281 收藏、9800+浏览
- **分类建议**：ai / developer-tools / design
- **链接**：https://x.com/sxhivs/status/2104266076469236040
- **tweetId**：2104266076469236040

---

## 8. Motion — Claude Opus 5.5 做发布片（MCP）

- **作者**：@motion_so
- **时间**：2026-09-26 21:13 UTC
- **视频**：约 30 秒
- **亮点**：Introducing Claude Opus 5.5 for launch videos。给想法、素材和视觉参考，经 Motion MCP 搭动画场景、字体与转场，片子仍可在 Motion 里继续改；改需求直接让 Claude 更新成片。本片由 Opus 生成。09-27 文档已把「Motion × Opus 5.5 创意简报汇编」记为跟进，本条是独立 MCP 入口首发片，可入库或与既有 Motion 条目合并审。
- **互动**：约 239 赞、15 转发、7 引用、28 回复、306 收藏、6.6 万+浏览
- **分类建议**：ai / motion / design
- **链接**：https://x.com/motion_so/status/2103956233107787982
- **tweetId**：2103956233107787982

---

## 9. Spaces — Omarchy Linux 工作区插件

- **作者**：@tornikegomareli
- **时间**：2026-09-27 06:27 UTC
- **视频**：约 10 秒
- **亮点**：Introducing Spaces，@OmarchyLinux 插件：每个工作区显示已开 App；悬停实时预览；跑 Claude Code 的终端带徽章——工作中转圈、等输入闪 `!`、完成打勾；有 agent 在等你的工作区也会脉冲。开源：https://github.com/tornikegomareli/omarchy-spaces 与 09-27 文档的 Flux for Omarchy 同生态、不同产品，可独立入库。
- **互动**：约 101 赞、4 转发、9 回复、66 收藏、2700+浏览
- **分类建议**：developer-tools / productivity
- **链接**：https://x.com/tornikegomareli/status/2104095674845286836
- **tweetId**：2104095674845286836

---

## 10. CadX Studio — 在 3D 画布上直接画，AI 出参数化几何

- **作者**：@johnsanthosh01（@CadX_Studio）
- **时间**：2026-09-27 16:00 UTC
- **视频**：约 42 秒
- **亮点**：Just shipped a big update。可在 3D 画布上直接画，让 AI 实时生成程序化、参数化几何。https://cadxstudio.in indie CAD 工具能力更新片，浏览量刚过线。
- **互动**：约 26 赞、1 转发、4 回复、32 收藏、2100+浏览
- **分类建议**：design / ai / developer-tools
- **链接**：https://x.com/johnsanthosh01/status/2104239778606751769
- **tweetId**：2104239778606751769

---

## 11. SwiftFairy 2026.9.2 — 大审计从分钟级到秒级

- **作者**：@hishnash
- **时间**：2026-09-27 11:37 UTC
- **视频**：约 28 秒
- **亮点**：We just shipped SwiftFairy 2026.9.2。大审计从分钟级压到秒级，结果几乎不占 agent 上下文。演示抓住 `Binding(get:set:)` 应写成模型上的 labeled subscript。版本更新片，非全新产品首发，可入库或与既有 SwiftFairy 条目合并。
- **互动**：约 64 赞、7 转发、2 回复、62 收藏、5400+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/hishnash/status/2104173605420777827
- **tweetId**：2104173605420777827

---

## 12. Frontier 3D — 本地 3D 动画，$0.10 / 分钟

- **作者**：@primalrobin
- **时间**：2026-09-27 19:34 UTC
- **视频**：约 25 秒
- **亮点**：Introducing: Frontier 3D。文案对比「3D 动画曾要几千美元一条」，现约 $0.10 / 分钟。跟帖称本地工具 + 260 人社区，入口在 Whop。更偏创作者工具/社群分发，审核时确认是否算独立产品入口。
- **互动**：约 112 赞、4 转发、13 回复、86 收藏、5500+浏览
- **分类建议**：motion / ai / other
- **链接**：https://x.com/primalrobin/status/2104293696195961321
- **tweetId**：2104293696195961321

---

## 13. 其他高信号 / 跟进

- **GitHub Copilot 并行 agent 教程**（@github，约 160 秒，3.3 万+浏览）：Did you know? 在 Copilot app 里并行跑多个 agent，每会话独立 Git worktree 与上下文。官方教程片，非新入口首发。https://x.com/github/status/2104298872029741366
- **Hoodmaps × Hotelist**（@levelsio，约 30 秒，5.3 万+浏览）：Hoodmaps 接入 Hotelist，点 Hotels 看区域可订酒店。已有产品的变现功能片，非新产品首发。https://x.com/levelsio/status/2104318653487288455
- **Framer /one-thing skill**（@_CalMorris，约 37 秒，1100+浏览）：Skills 已随 Framer 上线后，把「一次只改一件事」做成可复用 skill。09-22 / 09-26 / 09-27 已收 Framer Skills / launch-check，本条是员工自制 skill 演示。https://x.com/_CalMorris/status/2104297263556075847
- **Framer 互动站点集锦**（@framer，约 9 秒，3200+浏览）：4 个互动站点展示，非新功能首发。https://x.com/framer/status/2104297163782316167
- **Higgsfield AI-motion 管线短片**（@higgsfield_ai，约 10 秒，4.3 万+浏览）：Opus 5.5 脚本 → Higgsfield 视觉 → Blender 三维 → AE 合成 → Suno / Soundly。09-27 已收 Production Skills Bundle / Seedance 2.5 API，本条是管线展示。https://x.com/higgsfield_ai/status/2103958391144227149
- **evilbuttons.com**（@radiumcoders，约 77 秒，1550+浏览）：28 个「邪恶」shadcn/ui 动画按钮，开源一条命令安装。与 shadercn 同生态，浏览量刚过线。https://x.com/radiumcoders/status/2104180409064190088
- **RSI agent swarm 模拟器**（@wenhaocha1，约 78 秒，9400+浏览）：用真实 RSI 实验生成任务 DAG，让 swarm 重放，先研究规模再烧钱。研究工具发布。https://x.com/wenhaocha1/status/2104317646627906044
- **3D Map Projector**（@techartist_，约 26 秒，3000+浏览）：Opus 5.5 做的发光地球投影到柱/锥/平面，Tissot 圆显示拉伸。实验作品，非产品入口。https://x.com/techartist_/status/2104264916089864304
- **SharkNinja AquaReach**（@ritwikpavan，约 108 秒，3.1 万+浏览）：第三方硬件评测/发布说明，非品牌官方片。https://x.com/ritwikpavan/status/2104273003966324968

## 已在目录或 09-26 / 09-27 文档中出现（仅交叉引用，不重复入队）

Focant、Higgsfield Production Skills Bundle、Higgsfield API Seedance 2.5 原生 1080p、Flux for Omarchy、jevgrep、DeepSeek Harness Preview、open-slide 2.0、Tarout、Takeone、Caddy、Framer /launch-check、Pewbeam motion background、arsumbrisai、Showrunner、OpenRouter typesafe/jev-router、Railway 免登录免费 VM、Notion Column permissions、Runway Layers、Figma Vertical wrap、Clicky Collaborators。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（GetEdge 发布片技能、部分 MCP / launch-video skill 草稿、Screenify Studio 低互动帖等）
- 加密货币 / 代币 / NFT / launchpad（Gifted.tech TikTok Solana launchpad、DOMAIN Pump.fun、ArcID / Futur Pad / Liege / Webagent 链上 agent 身份与劳动市场、$GARRI、Stockback 收据换代币、Halo SERV hackathon 退款协议、D3 Frontier on Solana）
- 政治 / 新闻评论（USDOT SMART 空管工具宣传片、伊朗海峡/油轮、以色列选举播客）
- 体育 / 娱乐 / 音乐发行（VMA 介绍、Ricky Martin 中场、NFL、BBNaija、Heated Rivalry、Pokémon 20 周年）
- 纯游戏 demo / ROM hack（KARP DIEM GBA 小游戏、街机柜翻新）
- 教程 / 作品集 / 非发布（Opus 5.5 做闪粉贴纸、Tony Dinh / Steven Tey 用 Opus 出片示范、Pexo / InVideo 三方演示、launch video 工作室推销）
- 成人内容 / 无关角色集

**已核对**：上述主条目 tweetId 未在 `src/data/videos.json` 代码检索中命中；也未出现在 09-26 / 09-27 discovery 主条目。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-28-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
