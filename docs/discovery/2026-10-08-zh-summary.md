# 2026-10-08 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch）。窗口：2026-10-06 14:12 UTC 至 2026-10-08 01:11 UTC（约 CST 22:12 至次日 09:11），补 10-06 文档截稿之后的高信号片。与 10-05 / 10-06 文档互补，不重复 Higgsfield Genjutsu、Devin Dreaming、Genex、Cursor SDK steer、Cua Driver、Unusual Whales 插件首发、boat、Figma Motion、T3 Code、Together Link、Lifelong、omni-macos、Framer SEO skill、Pebble Sports。排除阅读 < 500，以及政治、娱乐、体育、音乐、代币 / NFT、纯游戏与无关教程。不改 `src/data/videos.json` 或 `inbox.json`。

GitHub code search 未命中下列 tweetId；`videos.json` 超过 1MB 未能全文拉取，以仓库搜索未命中且未出现在已合入的 discovery 文档为准。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-08-zh-summary.md
```

---

## 1. GPT-6 与 Intelligent UI

- **作者**：@OpenAI
- **时间**：2026-10-07 18:05 UTC
- **视频**：首发约 70 秒；线程另有 5 段约 16 秒的交互回答片
- **亮点**：GPT-6 和 Intelligent UI 开始向 ChatGPT 全员推出。回答可以由文字、图表和交互元素拼成，按问题选择形式；可以直接在对话里做小游戏、预算计算器这类工具。当天先给 Plus / Pro / Business / Enterprise（GPT-6 Sol），次日起扩到 Free / Go（GPT-6 Luna）。只动 Chat 标签，Work 和 Codex 用的模型不变。
- **互动**：约 15856 赞、1165 转发、891 引用、697 回复、4413 收藏、254 万+浏览
- **分类建议**：ai / consumer
- **链接**：https://x.com/OpenAI/status/2107894997538525580
- **tweetId**：2107894997538525580

---

## 2. Claude Haiku 5.5

- **作者**：@claudeai
- **时间**：2026-10-07 18:01 UTC
- **视频**：约 11 秒
- **亮点**：官方小模型首发。平均比 Haiku 4.5 便宜约 75%，编程、电脑操作和知识工作都有提升。面向高量、对成本敏感的任务，也能当 Opus 5.5 / Sonnet 5.5 的子 agent。第一个带可调 effort 的 Haiku，10 万 token 以下性价比更好。全平台可用，含 AWS、Google Cloud、Azure。同线程还把 Sonnet 5.5 的 cache read 降到每百万 token $0.10。https://www.anthropic.com/claude-haiku-5-5
- **互动**：约 35539 赞、2595 转发、1831 引用、1209 回复、4057 收藏、298 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/claudeai/status/2107894039626277339
- **tweetId**：2107894039626277339

---

## 3. ChatGPT 插件扩展走查

- **作者**：@OpenAIDevs
- **时间**：2026-10-07 20:12 UTC
- **视频**：约 151 秒
- **亮点**：官方走查，讲怎么用 plugin extensions 做更富的 ChatGPT 插件：从侧边栏启动、支持 @ 提及、加文件查看器。与 @coreyching 合作。产品功能片，不是新模型首发。
- **互动**：约 583 赞、37 转发、13 引用、49 回复、313 收藏、4.5 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/OpenAIDevs/status/2107927072165548276
- **tweetId**：2107927072165548276

---

## 4. GitHub Copilot 本地模型路由

- **作者**：@github
- **时间**：2026-10-07 18:12 UTC
- **视频**：约 154 秒
- **亮点**：Project HydraFusion 下一步：Copilot 即将按任务自动路由到本地模型，省 AI credits。帖子写明是 coming soon，不是当天全量开放。跟帖给了本地模型和沙箱工具的说明。https://commandline.microsoft.com/local-models-sandboxed-tools-github-windows/
- **互动**：约 225 赞、30 转发、6 引用、16 回复、53 收藏、4.0 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/github/status/2107896916595884177
- **tweetId**：2107896916595884177

---

## 5. Envato Burst mode

- **作者**：@envato
- **时间**：2026-10-07 20:00 UTC
- **视频**：约 45 秒
- **亮点**：一个粗想法一次出最多 6 个图像方向，最快约 10 倍，整批只花 1 个 AI credit。可以加风格参考或 Envato moodboard，创意控制分 focused / balanced / wild。Vary 从选中图再出 6 个方向，More like this 出相近方向，然后可以打磨、当视频首帧或进分镜。
- **互动**：约 429 赞、80 转发、116 引用、103 回复、225 收藏、40 万+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/envato/status/2107924147435115006
- **tweetId**：2107924147435115006

---

## 6. fal H3 Max Relight

- **作者**：@fal
- **时间**：2026-10-07 21:14 UTC
- **视频**：约 24 秒
- **亮点**：给已有视频改光。上传片子后在 Lighting studio 里选颜色、绕主体转灯、调强度和柔软度。H3 Max Relight 逐帧重打光，保留人物、运动、镜头和音轨。可以从平光换到黄金时刻、霓虹或品牌色。
- **互动**：约 130 赞、6 转发、4 引用、4 回复、41 收藏、9300+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/fal/status/2107942680470737049
- **tweetId**：2107942680470737049

---

## 7. Jog — agent 速度的 CI

- **作者**：@mattgapp
- **时间**：2026-10-07 21:14 UTC
- **视频**：约 31 秒
- **亮点**：Introducing Jog。托管 CI，放在独立快硬件上，对准 agent 快速出代码时的 CI 瓶颈。作者说上一个产品一个月 CI 最高约 5 万美元，自己曾用三台 MacBook 当 GitHub runner。跟帖写明改一行 GitHub workflow 就能接。https://usejog.com
- **互动**：约 97 赞、7 转发、4 引用、9 回复、112 收藏、1.6 万+浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/mattgapp/status/2107942692034683326
- **tweetId**：2107942692034683326

---

## 8. Builder.io /turn-into-app skill

- **作者**：@Steve8708
- **时间**：2026-10-07 18:20 UTC
- **视频**：约 102 秒
- **亮点**：一条命令把 agent 工作流变成带真 UI 的 agentic app。收藏远高于赞，偏工具发布而不是宣传片。
- **互动**：约 127 赞、7 转发、1 引用、6 回复、179 收藏、9300+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/Steve8708/status/2107898953379500223
- **tweetId**：2107898953379500223

---

## 9. Runway 进 ChatGPT Astra

- **作者**：@runwayml
- **时间**：2026-10-07 18:59 UTC
- **视频**：约 69 秒
- **亮点**：在同一个聊天窗口里给 Runway 下 brief、让它做、再给修改意见。官方集成片，不是模型对比。
- **互动**：约 46 赞、7 转发、3 引用、6 回复、11 收藏、8400+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/runwayml/status/2107908620692389989
- **tweetId**：2107908620692389989

---

## 10. Every 公司 agent（Claude Managed Agents）

- **作者**：@claudeai
- **时间**：2026-10-06 20:50 UTC
- **视频**：约 178 秒
- **亮点**：Every 团队用 Claude Managed Agents 做了一个公司 agent，全员在 Slack 里用，新模型出来时共享 skill。内部用开后再给订阅者。官方客户走查，不是新模型首发。线程指向完整对话：https://www.youtube.com/watch?v=z7cNbsr3b5s
- **互动**：约 2401 赞、131 转发、35 引用、167 回复、650 收藏、29.8 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/claudeai/status/2107574195978641911
- **tweetId**：2107574195978641911

---

## 11. v0 iOS 接 ChatGPT 订阅

- **作者**：@v0
- **时间**：2026-10-06 20:40 UTC
- **视频**：约 8 秒
- **亮点**：v0 iOS 现在可以用 ChatGPT 订阅额度。引用的是更早的网页端已可用帖，这条是 iOS 端功能片。
- **互动**：约 214 赞、14 转发、4 引用、8 回复、67 收藏、1.6 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/v0/status/2107571659842769322
- **tweetId**：2107571659842769322

---

## 12. Loom 视频提示

- **作者**：@vickiheart（@loom）
- **时间**：2026-10-07 19:44 UTC
- **视频**：约 29 秒
- **亮点**：新 Loom 上线，其中一项是用视频当提示。由 @zachwaugh、@rickmesser 和团队做，作者参与了这个功能。https://www.atlassian.com/software/loom
- **互动**：约 28 赞、4 转发、1 引用、4 回复、6 收藏、1000+浏览
- **分类建议**：productivity / ai
- **链接**：https://x.com/vickiheart/status/2107920024128381390
- **tweetId**：2107920024128381390

---

## 13. IMAI 品牌与产品工作区

- **作者**：@ViolaSchritter
- **时间**：2026-10-07 18:44 UTC
- **视频**：约 57 秒
- **亮点**：Introducing IMAI。做品牌和实体产品的 AI 工作区，把市场调研、产品设计、生产计划、营销、销售、零售和财务收到一处，也能接现有工具。帖子未给可解析的独立产品域名。
- **互动**：约 20 赞、6 转发、10 回复、3 收藏、2.4 万+浏览
- **分类建议**：design / ai / productivity
- **链接**：https://x.com/ViolaSchritter/status/2107904801812144559
- **tweetId**：2107904801812144559

---

## 14. Safesight / Saferide

- **作者**：@WillBrght（@safesightinc）
- **时间**：2026-10-07 21:16 UTC
- **视频**：约 141 秒
- **亮点**：给已有机器做安全运行的 Physical AI 基础设施。首个产品 Saferide，拍摄时约 2000 万美元 LOI / PO，发帖时约 4000 万，客户在零售、防务、汽车和建筑。公司首发片，不是机器人整机发布。
- **互动**：约 32 赞、18 转发、7 引用、16 回复、18 收藏、1.5 万+浏览
- **分类建议**：ai / hardware
- **链接**：https://x.com/WillBrght/status/2107943182906663256
- **tweetId**：2107943182906663256

---

## 15. Pane Workspaces

- **作者**：@ParsaKhaz
- **时间**：2026-10-07 19:56 UTC
- **视频**：约 62 秒
- **亮点**：Pane 支持 Mac、Windows、Linux，自动配一个 MCP，让 agent 发现并跨机器编排工作。每台机器装 Pane 和 Tailscale，登录 Tailscale 即可。
- **互动**：约 39 赞、6 转发、6 引用、14 回复、19 收藏、2200+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/ParsaKhaz/status/2107923062696091836
- **tweetId**：2107923062696091836

---

## 16. Figma agent 跨文件上下文

- **作者**：@figma
- **时间**：2026-10-07 23:24 UTC
- **视频**：约 18 秒
- **亮点**：功能片。让 Figma agent 从多个设计文件拿内容、读 FigJam 便利贴给设计文件加注释、从 Figma Slides 拿图再加效果。不是新产品首发。
- **互动**：约 78 赞、3 转发、10 回复、23 收藏、5700+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/figma/status/2107975388920259003
- **tweetId**：2107975388920259003

---

## 17. Fin 客户成功与 Intercom Copilot

- **作者**：@destraynor（@fin_ai / @intercom）
- **时间**：2026-10-07 20:05 UTC
- **视频**：约 8 秒
- **亮点**：同天发了一批：Fin 做客户成功，用 skill 处理没见过的问题；Operator 新功能；Intercom Helpdesk 新 Copilot 和 Human in the Loop；3 个新 CX 模型。片子很短，是发布宣告而不是长走查。
- **互动**：约 32 赞、4 转发、2 回复、8 收藏、2100+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/destraynor/status/2107925197210951788
- **tweetId**：2107925197210951788

---

## 18. Memo — 对讲机上的 AI

- **作者**：@fdotinc
- **时间**：2026-10-07 23:03 UTC
- **视频**：约 44 秒
- **亮点**：Introducing Memo。给已经在手里的对讲机做 AI，而不是等新硬件出来再写软件。Founders Inc 的产品介绍片，帖子未给独立产品链接。
- **互动**：约 25 赞、2 转发、3 回复、7 收藏、1300+浏览
- **分类建议**：ai / hardware
- **链接**：https://x.com/fdotinc/status/2107970008601219104
- **tweetId**：2107970008601219104

---

## 19. OpenBike MCP

- **作者**：@Neesh774
- **时间**：2026-10-07 20:02 UTC
- **视频**：约 14 秒
- **亮点**：个人开发者做的自行车共享 MCP，覆盖全球 18 个城市。https://openbike.neesh.page
- **互动**：约 43 赞、2 转发、9 回复、7 收藏、1000+浏览
- **分类建议**：developer-tools / consumer
- **链接**：https://x.com/Neesh774/status/2107924654635856333
- **tweetId**：2107924654635856333

---

## 20. Framer 设计系统 skill

- **作者**：@framer
- **时间**：2026-10-07 22:34 UTC
- **视频**：约 26 秒
- **亮点**：把 Framer 项目变成可复用设计系统，再做一个 skill 让 Agent 按站点的样式、组件和布局生新页。功能片，不是新产品首发。
- **互动**：约 19 赞、3 转发、5 回复、5 收藏、1800+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/framer/status/2107962735673872818
- **tweetId**：2107962735673872818

---

## 21. Islandcut

- **作者**：@NLRyanNL
- **时间**：2026-10-08 00:02 UTC
- **视频**：约 22 秒
- **亮点**：免费 UEFN 预告片工具。玩法和过场自动剪辑，按音乐节拍切，36 种转场、60+ 字体、logo 制作。个人开发者发布。https://github.com/NLRyanNL/island-cut/releases/tag/v0.1.1
- **互动**：约 43 赞、8 转发、1 引用、10 回复、28 收藏、948 浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/NLRyanNL/status/2107984960439414836
- **tweetId**：2107984960439414836

---

## 22. 画布上的交互设计工具

- **作者**：@thedesignely
- **时间**：2026-10-06 16:21 UTC
- **视频**：约 12 秒
- **亮点**：独立设计师做了几周的设计工具上线。在画布上做视觉、交互、3D 和效果，再嵌入或导出代码。浏览刚过 500。帖子链接是短链，未展开域名。
- **互动**：约 13 赞、2 回复、3 收藏、582 浏览
- **分类建议**：design
- **链接**：https://x.com/thedesignely/status/2107506453590274373
- **tweetId**：2107506453590274373

---

## 跟进，不单独入队

- Unusual Whales × ChatGPT 插件又发了一条约 151 秒的 now live 片，产品本身已在 10-06 文档入队：https://x.com/unusual_whales/status/2107983813510885846
- Framer 的 Jev 动画客户片是案例讲解，不是新功能首发：https://x.com/framer/status/2107515099711688925

## 已入队，不重复

Higgsfield Genjutsu / AI Influencer、Devin Dreaming / Agent Memory Repo、Genex、Cursor SDK steer、Cua Driver、Unusual Whales ChatGPT 插件首发、boat、Figma Motion、T3 Code、Together Link、Lifelong、omni-macos、Framer SEO skill、Pebble Sports，以及 10-05 文档里的 Promethee、Melty、text-to-CAD 等。

## 排除

政治、体育节目、音乐与动画发行、代币 / NFT / 交易所社区层、纯游戏更新与道具、播客、大会回顾、量化工作流教程，以及阅读量低于 500 的帖子。OSBook、Vibers、Guildhall、Fortnite 表情、EA FC 更新、Canva 播客、Supabase Select 回顾、Grok Bot 量化桌教程不入队。
