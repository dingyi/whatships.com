# 2026-08-29 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / product launch / MCP / agent 等，并覆盖 watchlist 账号与高互动独立开发者。

时间范围：2026-08-27 至 2026-08-29。已排除政治、纯娱乐、游戏宣发与无关教程。与开放 PR #93 / #96 / #97 互补，重点补充高信号官方与独立产品发布视频。

已通过 tweetId 核对，均未出现在 `src/data/videos.json` 中（截至本搜索时）。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-29-zh-summary.md
```

---

## 1. Hugging Face / Pollen Robotics — Microduck 开源 RL 机器人

- **作者**: @Thom_Wolf / @pollenrobotics
- **时间**: 2026-08-27 10:31 UTC
- **视频**: 约 51 秒官方发布片 + 后续动作演示
- **亮点**: 首款真正可及的 RL 机器人 Microduck。25cm 开源双足，15 个执行器，内置相机、扬声器、LiDAR、NFC、蓝牙、WiFi 等传感器。可自行用强化学习训练，开箱即用预置策略：走路、坐下、蹲下、滑旱冰、用可动喙捡物、跌倒自恢复。售价低于 $400。模拟器与订购：相关链接见帖。
- **互动**: 主帖 7200+ 赞、200万+ 浏览；@pollenrobotics 后续帖数千赞
- **分类建议**: hardware / ai
- **链接**: https://x.com/Thom_Wolf/status/2092923071829049592
- **相关**: https://x.com/pollenrobotics/status/2092990523522838959

## 2. Warp — Agent 自改进循环（Self-improvement loops）

- **作者**: @warpdotdev
- **时间**: 2026-08-27 16:57 UTC
- **视频**: 约 204 秒演示
- **亮点**: 引入 self-improvement loops。Agent 可通过回顾过往对话改进 Skills：按自定义标准打分对话 → 隔离失败 → 生成 Skill 改进。申请访问：https://www.warp.dev/factories/request-access
- **互动**: 264 赞、12万+ 浏览、300 收藏
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/warpdotdev/status/2093019984993595698

## 3. Diffusion Studio — 开源视频编辑器（编辑即代码）

- **作者**: @konstipaulus（@diffusionhq，YC F24）
- **时间**: 2026-08-28 14:26 UTC
- **视频**: 约 42 秒演示
- **亮点**: 开源视频编辑器，把每一次编辑都变成代码。解决 Agent 丢失上下文与不可修改输出的问题——代码成为新数据库。可手动编辑后转为可复用 Skill，批量应用到所有视频。GitHub: https://github.com/diffusionstudio/editor
- **互动**: 1546 赞、7.1万+ 浏览、1657 收藏
- **分类建议**: developer-tools / ai / motion
- **链接**: https://x.com/konstipaulus/status/2093344586315747706

## 4. Higgsfield — Gemini Omni 1.1 Flash 上线

- **作者**: @higgsfield
- **时间**: 2026-08-28 21:22 UTC
- **视频**: 约 77 秒演示
- **亮点**: Gemini Omni 1.1 Flash 现已在 Higgsfield 可用。新创意控制：首尾帧生成中间内容、场景扩展至 40s、360p 低成本测试并升至 1080p/4K。
- **互动**: 152 赞、8700+ 浏览
- **分类建议**: ai / motion
- **链接**: https://x.com/higgsfield/status/2093449273329451338

## 5. HumanPost — 真人美国账号矩阵发 TikTok

- **作者**: @itsmehakvohra（@humanpostco）
- **时间**: 2026-08-28 21:21 UTC
- **视频**: 约 50 秒发布片
- **亮点**: 推出 HumanPost。为品牌雇佣 10/100/1000 个美国真人运营的专用社交媒体账号，针对垂直预热，零 VPN。用户提供内容，负责账号与发布。官网：https://humanpost.co/
- **互动**: 113 赞、1万+ 浏览、145 收藏
- **分类建议**: productivity / marketing
- **链接**: https://x.com/itsmehakvohra/status/2093448950384820647

## 6. Shipsales — 开发者自主销售 Agent

- **作者**: @ShalomFractn
- **时间**: 2026-08-28 18:44 UTC
- **视频**: 约 38 秒演示
- **亮点**: Shipsales 上线。面向能做产品但不会卖的开发者的自主销售 Agent：粘贴链接后自动找指名买家、写真实 pitch、跟进、追踪点击到转化。https://www.shipsales.tech
- **互动**: 31 赞、6.5万+ 浏览
- **分类建议**: ai / productivity
- **链接**: https://x.com/ShalomFractn/status/2093409460752412825

## 7. Spline — Hana V2（MCP 支持）

- **作者**: @splinetool
- **时间**: 2026-08-27 17:06 UTC
- **视频**: 约 38 秒演示
- **亮点**: Hana V2 正式引入 MCP 支持。可通过 MCP 或应用内 Agent 生成、导入带 PBR 的 GLB/GLTF、新导出（SVG/PDF）、WebGPU 画布、更好矢量编辑等。博客：https://blog.spline.design/hana-v2
- **互动**: 202 赞、1.8万+ 浏览
- **分类建议**: design / ai / developer-tools
- **链接**: https://x.com/splinetool/status/2093022350455574896

## 8. Rippling — MCP Server 正式上线

- **作者**: @callen_raveret（Rippling 平台产品负责人）
- **时间**: 2026-08-27 15:37 UTC
- **视频**: 约 33 秒演示
- **亮点**: 推出 Rippling MCP Server。不同于简单包装人类 API，它让 Agent 写代码完成工作并只返回答案。专为 Agent 任务设计。
- **互动**: 152 赞、15万+ 浏览、172 收藏
- **分类建议**: developer-tools / ai / enterprise
- **链接**: https://x.com/callen_raveret/status/2092999850128273739

## 9. Google — AI Mode 酒店预订 + 航班相关能力

- **作者**: @Google
- **时间**: 2026-08-27 20:45 UTC
- **视频**: 多条约 40–75 秒演示
- **亮点**: AI Mode in Search 现支持对话式酒店发现与预订（含评价对比，Google Pay 完成）；航班/酒店里程积分显示；价格追踪提醒直接进入 AI Mode。
- **互动**: 各帖数千至数万浏览
- **分类建议**: ai / consumer
- **链接**: https://x.com/Google/status/2093077355447091572

## 10. Fluoddity — 粒子自组织探索工具

- **作者**: @OA_paperclips
- **时间**: 2026-08-28 21:08 UTC
- **视频**: 约 18 秒演示
- **亮点**: 个人工具 Fluoddity 上线网页版（由 Opus 5 重建）。数十万粒子自组织成各种结构，支持变异与人工选择探索可能性。https://Fluoddity.com
- **互动**: 78 赞、2400+ 浏览
- **分类建议**: other / design
- **链接**: https://x.com/OA_paperclips/status/2093445516919279867

## 11. Ojin — Human AI Agents（Product Hunt 上线）

- **作者**: @Ojin_ai
- **时间**: 2026-08-27 09:04 UTC
- **视频**: 约 97 秒演示
- **亮点**: Human AI Agents 在 Product Hunt 上线。可一边说一边听，中途打断、改主意、语尾拖沓也能接上。一张照片 + 描述 + 选声音即可，亚 200ms 响应。
- **互动**: 67 赞、13万+ 浏览
- **分类建议**: ai / consumer
- **链接**: https://x.com/Ojin_ai/status/2092900957721907467

## 12. beUI Pro — 动画插图库上线

- **作者**: @saurra3h
- **时间**: 2026-08-28 20:56 UTC
- **视频**: 约 43 秒演示
- **亮点**: Animated Illustrations 现已上线 beUI Pro。23 个打磨精良、可定制插图，用于功能卡片、产品区块、工作流与 UI 状态。可单独安装、拥有源码。https://pro.beui.dev/illustrations
- **互动**: 64 赞、2300+ 浏览、59 收藏
- **分类建议**: design / developer-tools
- **链接**: https://x.com/saurra3h/status/2093442534022185425

## 13. 404 — 3JS 游戏生成器

- **作者**: @404gen_
- **时间**: 2026-08-28 19:22 UTC
- **视频**: 约 44 秒演示
- **亮点**: 正式推出 404 的 3JS 游戏生成器。指向 repo 后，描述游戏即可用 404 生成的资产产出可玩游戏。Repo: https://github.com/404-Repo/404-game-recipe
- **互动**: 29 赞、4000+ 浏览
- **分类建议**: developer-tools / ai
- **链接**: https://x.com/404gen_/status/2093419016597520506

## 14. Maxfusion — Ad Mutator（MCP）

- **作者**: @MaxfusionAI
- **时间**: 2026-08-27 11:00 UTC
- **视频**: 约 29 秒演示
- **亮点**: 推出 Ad Mutator。投入一条赢家广告创意，即可替换演员、场景、服装、产品等生成无限变体。现已在 Maxfusion MCP 中上线。
- **互动**: 592 赞、42万+ 浏览
- **分类建议**: ai / marketing
- **链接**: https://x.com/MaxfusionAI/status/2092930123003769272

---

## 已过滤（不入库）

- 纯加密货币 / 代币 / meme 项目（Grok Chain、WAVE、$XPUMP 等）。
- 游戏 / 电竞 / 影视预告（METRO 2039、MARVELTokon 等）。
- 政治广告评测、监控系统调查等非产品发布。
- 纯二次传播或低信号个人 demo 无完整产品落地。
- 与既有 PR（#93/#96/#97）高度重叠的条目仅作交叉引用。

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（x_keyword_search 搭配 `filter:videos` + `since:2026-08-27/28` + `min_faves` + launched/now live/introducing/just shipped/MCP + from: watchlist 账号；x_semantic_search 语义检索产品发布与独立开发者 demo；x_thread_fetch 获取完整上下文）。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-29-zh-summary.md` 写入 inbox（与其它 discovery PR 合并时用 `node scripts/merge-inbox.mjs` 做并集）。再按 AGENTS.md 配方正式发布。
