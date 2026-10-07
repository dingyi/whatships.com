# 2026-10-07 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch）。窗口：2026-10-06 14:12 UTC 至 2026-10-07 15:12 UTC（约 CST 22:12 至次日 09:12），补 10-06 文档截稿之后的高信号片。另补两条截稿前漏网：Mistral Large 4（13:06 UTC）与 Figma agent 出 beta（14:03 UTC），10-06 文档未入队。与 10-05 / 10-06 文档互补，不重复 Higgsfield Genjutsu、Devin Dreaming、Genex、Cursor SDK steer、Cua Driver 光标动效、Unusual Whales 早期插件片、boat、Figma Motion、T3 Code。排除阅读 < 500，以及政治、娱乐、体育、音乐、代币 / NFT、纯游戏与无关教程。不改 `src/data/videos.json` 或 `inbox.json`。

GitHub code search 未命中下列 tweetId；`videos.json` 超过 1MB 未能全文拉取，以仓库搜索未命中且未出现在已合入的 discovery 文档为准。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-07-zh-summary.md
```

---

## 1. Claude 进入 Google Docs / Sheets / Slides

- **作者**：@claudeai
- **时间**：2026-10-06 17:25 UTC
- **视频**：约 60 秒
- **亮点**：官方产品片。Claude 现在可以进 Google Docs、Sheets、Slides，这些文件也能在 Claude 里打开。Workspace 侧边栏读当前文件并原地编辑，每处修改可先审批再落地。本窗口浏览量最高的产品片。
- **互动**：约 24936 赞、1443 转发、648 引用、451 回复、6956 收藏、367 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/claudeai/status/2107522596845822135
- **tweetId**：2107522596845822135

---

## 2. Mistral Large 4（Le Chonk）

- **作者**：@MistralAI
- **时间**：2026-10-06 13:06 UTC
- **视频**：约 17 秒
- **亮点**：截稿前漏网。Meet Mistral Large 4，也叫 Le Chonk。1T 参数、49B 激活，原生多模态。当天 API 对所有人开放，权重预计 10 月底开源；可从欧洲 Mistral Cloud 部署。官方称美国 / 欧洲开放权重里聚合基准最好。
- **互动**：约 36094 赞、4057 转发、2499 引用、1757 回复、6086 收藏、377 万+浏览
- **分类建议**：ai
- **链接**：https://x.com/MistralAI/status/2107457414387622310
- **tweetId**：2107457414387622310

---

## 3. Figma agent 出 beta

- **作者**：@figma
- **时间**：2026-10-06 14:03 UTC
- **视频**：约 69 秒
- **亮点**：截稿前漏网，贴出在 10-06 截稿前 9 分钟。Figma agent 退出 beta，当天推出。跟帖博客：https://www.figma.com/blog/workflow-lab-staying-in-the-flow-with-the-figma-agent/
- **互动**：约 1507 赞、75 转发、98 引用、107 回复、707 收藏、77.7 万+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/figma/status/2107471912704327937
- **tweetId**：2107471912704327937

---

## 4. Overmind

- **作者**：@OvermindLab
- **时间**：2026-10-06 16:59 UTC
- **视频**：首发约 136 秒；线程另有可观测性、数据工坊、eval、训练四段短片
- **亮点**：把任何人变成 AI lab。从代码和 trace 建上下文图，整理训练 / eval 数据集，评测 prompt 和模型，再训更小的专用模型。权重自有，可托管或自跑。https://console.overmindlab.ai https://github.com/overmind-core/overmind
- **互动**：约 164 赞、23 转发、50 引用、57 回复、178 收藏、22.1 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/OvermindLab/status/2107516180474757291
- **tweetId**：2107516180474757291

---

## 5. Monid

- **作者**：@shengkunye（@MonidHQ）
- **时间**：2026-10-06 19:35 UTC
- **视频**：约 53 秒
- **亮点**：Introducing monid.ai，agent 工具的 openrouter。运行时发现、调用并按次付费，一个连接覆盖 2500 个 API（线索、SEO、搜索、电商、股票、视频 / 图像 / 音乐 / 3D、agent 邮件与电话），零订阅。同帖写了 770 万美元融资。https://monid.ai
- **互动**：约 792 赞、58 转发、57 引用、146 回复、584 收藏、15.2 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/shengkunye/status/2107555480658923945
- **tweetId**：2107555480658923945

---

## 6. Every 公司 agent（Claude Managed Agents）

- **作者**：@claudeai
- **时间**：2026-10-06 20:50 UTC
- **视频**：约 178 秒
- **亮点**：客户故事片，不是新模型首发。Every 团队用 Claude Managed Agents 做了一个 Slack 里的公司 agent，新模型出来时共享 skill；内部用开后再给订阅者。完整对话：https://www.youtube.com/watch?v=z7cNbsr3b5s
- **互动**：约 1170 赞、58 转发、17 引用、91 回复、351 收藏、14.2 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/claudeai/status/2107574195978641911
- **tweetId**：2107574195978641911

---

## 7. Cursor iOS 远程控制本机 agent

- **作者**：@cursor_ai
- **时间**：2026-10-06 23:46 UTC
- **视频**：约 39 秒
- **亮点**：可以从手机控制电脑上的 agent：查进度、回复、开新任务。agent 跑在本机，手机断网也继续。Enterprise 需管理员开关。https://cursor.com/mobile https://cursor.com/changelog/remote-control-local-agents
- **互动**：约 689 赞、50 转发、25 引用、96 回复、94 收藏、3.0 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/cursor_ai/status/2107618653701296162
- **tweetId**：2107618653701296162

---

## 8. Agentbox

- **作者**：@SavannahFeder
- **时间**：2026-10-06 20:19 UTC
- **视频**：约 139 秒
- **亮点**：Introducing Agentbox。把多个 agent 聊天窗收进一个收件箱，一个人管 20+ agent；需要人时才出声并自己排优先级。Mac 免费开源，走 Claude Code 或 Codex 套餐。https://agentbox.ac/?v=2
- **互动**：约 149 赞、9 转发、1 引用、29 回复、190 收藏、1.3 万+浏览
- **分类建议**：ai / developer-tools / productivity
- **链接**：https://x.com/SavannahFeder/status/2107566510386577695
- **tweetId**：2107566510386577695

---

## 9. Capy Guided Reviews

- **作者**：@0xluffy（@capydotai）
- **时间**：2026-10-06 22:05 UTC
- **视频**：约 21 秒
- **亮点**：Introducing Guided Reviews。大 diff 不再按文件顺序跳：概览先比对前后，文件按章节分组，核心改动在前，数据库 / 测试 / 生成文件在后。对应 Capy 0.4.4：市场插件、每个 PR 一份导读、自带 key 的自定义模型、无项目桌面线程。https://capy.ai/changelog/0.4.4
- **互动**：约 137 赞、11 转发、6 引用、7 回复、153 收藏、1.2 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/0xluffy/status/2107593041519501477
- **tweetId**：2107593041519501477

---

## 10. shapes

- **作者**：@anushkmittal
- **时间**：2026-10-06 22:00 UTC
- **视频**：约 28 秒
- **亮点**：introducing shapes.inc。和朋友、AI agent 一起协作。多人 agent 从底层做，做约会、周末、生日、学习小组、共同办公这类需要别人的事。https://shapes.inc
- **互动**：约 48 赞、3 转发、3 引用、11 回复、20 收藏、7122+浏览
- **分类建议**：ai / consumer / productivity
- **链接**：https://x.com/anushkmittal/status/2107591935334793514
- **tweetId**：2107591935334793514

---

## 11. motionmaxxing

- **作者**：@makwanatejas170
- **时间**：2026-10-06 18:21 UTC
- **视频**：约 20 秒
- **亮点**：agent skill，把 AI 动效拉到设计师片水平。同一 prompt 有 / 无 skill 对比。https://github.com/Tejashmakwana/motionmaxxing 收藏明显高于赞。
- **互动**：约 142 赞、6 转发、1 引用、13 回复、266 收藏、8300+浏览
- **分类建议**：motion / design / ai
- **链接**：https://x.com/makwanatejas170/status/2107536751485128909
- **tweetId**：2107536751485128909

---

## 12. OpenAI Decisions API

- **作者**：@RivMist（Emerging Products @OpenAI）
- **时间**：2026-10-06 20:55 UTC
- **视频**：约 46 秒
- **亮点**：Decisions API 公开 beta。演示里看屏幕，停顿时给上下文快捷动作，点击后交给 CUA 循环，帖子写比传统 CUA 快约 10 倍。不是 @OpenAI 官方账号首发，帖子未给独立文档链接。
- **互动**：约 55 赞、6 转发、3 引用、7 回复、25 收藏、7789+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/RivMist/status/2107575433038635292
- **tweetId**：2107575433038635292

---

## 13. Cua Cursor Motion

- **作者**：@trycua
- **时间**：2026-10-06 17:01 UTC
- **视频**：约 22 秒
- **亮点**：昨天的六种 Cua Driver 光标动效今天可以拿出去用。开源库，可从这六种起，也可自己画。10-06 已入队的是 Driver 内置动效片，这条是独立库。
- **互动**：约 133 赞、6 转发、2 引用、5 回复、66 收藏、7026+浏览
- **分类建议**：design / motion / developer-tools
- **链接**：https://x.com/trycua/status/2107516556020269281
- **tweetId**：2107516556020269281

---

## 14. supermemory API v5

- **作者**：@supermemory
- **时间**：2026-10-06 19:07 UTC
- **视频**：约 27 秒
- **亮点**：Introducing API v5，面向 agent 的记忆 API。container tag 改成 URL 里的 namespace，输出按 agent 上下文优化，一条 prompt 迁移，结果支持 Markdown 协商。
- **互动**：约 38 赞、1 转发、3 引用、5 回复、14 收藏、4657+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/supermemory/status/2107548316120891515
- **tweetId**：2107548316120891515

---

## 15. Hermes Desktop Bot Screen 走查

- **作者**：@tonbistudio
- **时间**：2026-10-06 18:38 UTC
- **视频**：约 358 秒
- **亮点**：不是新产品首发，是 Hermes Desktop Bot Screen 的真实项目走查：边看 agent 画工作流画布，边自己试，agent 能看到操作和报错。
- **互动**：约 118 赞、5 转发、2 引用、9 回复、110 收藏、8793+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/tonbistudio/status/2107540911358115857
- **tweetId**：2107540911358115857

---

## 16. Wavedash for iOS

- **作者**：@wavedash
- **时间**：2026-10-06 21:46 UTC
- **视频**：约 9 秒
- **亮点**：浏览器游戏平台的续玩能力，不是单款游戏发行片。桌面浏览器开局，iPhone 从断点继续。https://apps.apple.com/us/app/wavedash-app/id6786473690
- **互动**：约 34 赞、4 转发、3 引用、6 回复、7 收藏、1.1 万+浏览
- **分类建议**：consumer
- **链接**：https://x.com/wavedash/status/2107588274672075096
- **tweetId**：2107588274672075096

---

## 17. Taste 重设计

- **作者**：@alexkehr
- **时间**：2026-10-06 17:54 UTC
- **视频**：约 16 秒
- **亮点**：Taste 全面重设计，更像灵感工作区。灵感可以整理后交给 coding agent，减少通用 AI 视觉。新的 Taste profile 把设计风格写成文字，并有演变时间线。帖子未给独立产品链接。
- **互动**：约 34 赞、4 转发、6 回复、16 收藏、1533+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/alexkehr/status/2107530018532585948
- **tweetId**：2107530018532585948

---

## 18. WebMCP 实时协作演示

- **作者**：@boyney123
- **时间**：2026-10-06 17:13 UTC
- **视频**：约 101 秒
- **亮点**：架构协作工具里邀请 agent。演示 WebMCP 与 MCP Extensions 的实时协作，agent 能拖拽节点。偏能力演示，不是单独产品首发。
- **互动**：约 43 赞、1 转发、7 回复、34 收藏、3003+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/boyney123/status/2107519605727994050
- **tweetId**：2107519605727994050

---

## 19. Grok 4.7 上 Microsoft Foundry

- **作者**：@SpaceXAI（同日 @tetsuoai 另有一条约 14 秒片）
- **时间**：2026-10-07 00:04 UTC
- **视频**：约 19 秒
- **亮点**：Grok 4.7 已上 Microsoft Foundry。本窗口未搜到 @xai 官方账号的同主题视频，这条是第三方可用性片，入队前建议核对是否为官方发布。
- **互动**：约 318 赞、41 转发、14 引用、36 回复、14 收藏、3.3 万+浏览
- **分类建议**：ai
- **链接**：https://x.com/SpaceXAI/status/2107623124909060174
- **tweetId**：2107623124909060174

---

## 跟进，不单独入队

- Mistral Large 4 恶意软件逆向与 CTF 能力片，产品本身已在上文入队：https://x.com/MistralAI/status/2107532335294067106 https://x.com/MistralAI/status/2107532332253008234
- Unusual Whales 更长的 ChatGPT 插件演示，产品已在 10-06 文档入队：https://x.com/unusual_whales/status/2107621425708171451
- Google Earth AI 在刚果（金）埃博拉爆发中的使用故事，不是产品首发：https://x.com/Google/status/2107578325367701915
- Framer 这条是 Jev 动画访谈，不是功能发布：https://x.com/framer/status/2107515099711688925
- @tetsuoai 的 Foundry 短片与上文 SpaceXAI 同主题：https://x.com/tetsuoai/status/2107632680821236081

## 已入队，不重复

Higgsfield Genjutsu / AI Influencer、Devin Dreaming、Genex、Cursor SDK steer、Cua Driver 光标动效、Unusual Whales ChatGPT 插件早期片、boat、Figma Motion、T3 Code、Devin Memory 走查、Together Link、Lifelong for Caregivers、omni-macos、Framer Agent SEO skill、Pebble Sports、Promethee、Melty、cinetic、gyotaku。

## 排除

政治、体育节目、音乐与影视发行、代币 / NFT / 发币台（DexPad、PONS）、纯游戏更新与联动（Bloons TD 6、Eminence × Slime、Xbox 360 交叉游玩预告）、加密评估平台 AskBots、招聘与播客花絮，以及阅读量低于 500 的帖子。Arcturus 空间视频播放器更新浏览不足 500，不入队。
