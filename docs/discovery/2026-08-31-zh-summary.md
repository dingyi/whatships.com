# 2026-08-31 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 launched / now live / introducing / just shipped / MCP / agent 等，并覆盖 watchlist 账号与高互动独立开发者（如 @levelsio）。

时间范围：2026-08-29 至 2026-08-31。已排除政治、纯娱乐、游戏宣发、加密货币代币与无关教程。与 08-29 / 08-30 已入库 / 已发现文档互补，重点补充本周末新出现的高信号官方与独立产品发布视频。

已核对本次主条目 tweetId（Infinite Slop / Hoodmaps Crime / beUI Pro / Almanac / Atonomi 等），未出现在 `src/data/videos.json` 中。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-31-zh-summary.md
```

---

## 1. levelsio — Infinite Slop（无限 AI 生成直播流）

- **作者**: @levelsio
- **时间**: 2026-08-29 17:34 UTC（后续 30 日持续更新）
- **视频**: 约 53 秒发布演示 + 后续多段更新视频
- **亮点**: 推出 Infinite Slop（后注册 InfiniteSlop.ai）。基于 @fal 赞助的 Minimax H3 Max（50x 加速，15 秒视频仅需 9 秒生成）构建的无限交互式 AI 生成直播流。聊天输入内容会生成下一段视频，并尽量与前序连贯形成故事线。后续更新包括竖屏支持、队列 upvote 机制、播放下一集提示等。单日观看 3.7 万+，峰值 2000+ 并发。
- **互动**: 主帖 6300+ 赞、169 万+ 浏览、3500+ 收藏
- **分类建议**: ai / consumer / motion
- **链接**: https://x.com/levelsio/status/2093754163343593802
- **相关**: https://x.com/levelsio/status/2094004712869601555 、 https://x.com/levelsio/status/2094129020770164871

## 2. levelsio — Hoodmaps Crime mode（街区犯罪数据）

- **作者**: @levelsio
- **时间**: 2026-08-30 18:54 UTC
- **视频**: 约 50 秒演示
- **亮点**: Hoodmaps 新增 Crime mode。在已有 3D 建筑 + Income mode 基础上，加入实时暴力犯罪数据可视化（先覆盖纽约，后续扩展全美与全球）。利用 AI 处理多源数据归一化与更新，降低传统数据收集成本。目标是让城市问题可视化，便于公众了解。
- **互动**: 314 赞、5.7 万+ 浏览、132 收藏
- **分类建议**: consumer / data
- **链接**: https://x.com/levelsio/status/2094136744367346006
- **相关**: 3D buildings + Income mode https://x.com/levelsio/status/2093651364953952609

## 3. beUI Pro — 新组件块（动画侧边栏 + 日历规划器）

- **作者**: @saurra3h
- **时间**: 2026-08-30 20:56 UTC
- **视频**: 约 71 秒演示
- **亮点**: just shipped 3 个新 beUI Pro 块：2 个带动画的可折叠侧边栏（含 morphing 搜索）、日历规划器（月/周视图、过滤、事件创建与删除）。均可组合、响应式，可直接嵌入应用。站点：https://pro.beui.dev
- **互动**: 20 赞、1400+ 浏览
- **分类建议**: design / developer-tools
- **链接**: https://x.com/saurra3h/status/2094167374303801581

## 4. Almanac — Agent 支付（AgentCard 合作）

- **作者**: @kushagrchitkar（@usealmanac）
- **时间**: 2026-08-29 22:58 UTC
- **视频**: 约 32 秒演示
- **亮点**: 推出 Almanac payments，与 @agentcardhq 合作。让 AI Agent 拥有独立支付卡，而非访问用户卡片。支持预订、订阅、买咖啡等场景，Agent 可真正完成工作闭环。站点：https://usealmanac.com
- **互动**: 56 赞、4800+ 浏览、35 收藏
- **分类建议**: ai / developer-tools / payments
- **链接**: https://x.com/kushagrchitkar/status/2093835614156476521

## 5. Atonomi Agents — 客户获取 Agent 市场

- **作者**: @everestchris6
- **时间**: 2026-08-30 16:25 UTC
- **视频**: 约 22 秒发布片
- **亮点**: 推出 Atonomi Agents。租用 Agent 自动为业务获取客户：找线索 → 寄实体明信片推销服务 + 成品效果渲染图。现已上线。
- **互动**: 39 赞、2 万+ 浏览、64 收藏
- **分类建议**: ai / marketing / productivity
- **链接**: https://x.com/everestchris6/status/2094099290482438275

## 6. Framer — 交互式网站展示

- **作者**: @framer
- **时间**: 2026-08-30 21:13 UTC
- **视频**: 约 11 秒
- **亮点**: 展示 4 个用 Framer 制作的高交互网站。偏能力宣传与案例片，非全新产品发布，但为 watchlist 官方带视频帖。
- **互动**: 34 赞、2900+ 浏览
- **分类建议**: design
- **链接**: https://x.com/framer/status/2094171717325455794

## 7. imgnAI — 发现与搜索系统上线

- **作者**: @imgn_ai
- **时间**: 2026-08-30 15:16 UTC
- **视频**: 约 10 秒
- **亮点**: 重大更新上线：自动标签、标题与搜索友好描述；支持按标签与模型浏览图库。新帖几分钟内可被索引，旧目录逐步完善。后续将部署更新 H3 模型。
- **互动**: 34 赞、1300+ 浏览
- **分类建议**: ai / design
- **链接**: https://x.com/imgn_ai/status/2094081914780983407

---

## 已在 08-29 / 08-30 文档或目录中出现（仅交叉引用，不重复入队）

- **GitHub Issues 新能力**（固定视图、头像 reaction 等）: https://x.com/github/status/2093825400178917519 — 已见 08-30 汇总
- **Notion Agent 微更新多段视频**: 已见 08-30 汇总
- **Sodium / Result WebMCP**: 已见 08-30 汇总
- **beUI Pro Animated Illustrations**（08-28）: 已见 08-29 汇总

---

## 已过滤（不入库）

- 纯加密货币 / 代币 / meme / prediction market 交易 Agent（Rainmaker、Orca、Pons 等）。
- 游戏 / 娱乐 / 影视 / 体育预告。
- 政治、军事、新闻事件视频。
- 纯二次解读、教程或低信号个人 demo（无完整产品落地）。
- ship.mov 帮别人生成的发布片回复（非原始产品帖）。
- invideo Agent 使用案例（非产品本身发布）。

---

**搜索方法**: 全程仅使用 Grok 自带 X 搜索工具（x_keyword_search 搭配 `filter:videos` + `since:2026-08-29/30` + `min_faves` + launched/now live/introducing/just shipped/MCP/agent + from: watchlist 与 levelsio 等；x_semantic_search 语义检索产品发布与独立开发者 demo；x_thread_fetch 获取 Infinite Slop / Almanac / Atonomi 等完整上下文）。未使用任何其他 API 或第三方服务。

**下一步**: 审核通过后运行 `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-08-31-zh-summary.md` 写入 inbox（与其它 discovery PR 合并时用 `node scripts/merge-inbox.mjs` 做并集）。再按 AGENTS.md 配方正式发布。
