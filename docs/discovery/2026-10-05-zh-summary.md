# 2026-10-05 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / now available / plugin / MCP / agent / skill / open source 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-10-04 上午至 2026-10-05 13:21 UTC（约 CST 21:21；与 10-03 / 10-04 文档互补，不重复 AgentCraft / Auday / MyGo / Motionfly V2 / EditDatVid / FileTask 等已入队条目）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币 / NFT、纯游戏剧情与无关教程。抽查 tweetId 未出现在 `src/data/videos.json` 代码搜索结果中。

上午补扫（截稿 01:16 UTC 之后）补进截图检索、Cloudflare D1 studio、Claude Code cache skill、法律 Agent Skills、手机端 Hermes 与实时视频模型入口。官方大厂新模型首发仍然少。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-05-zh-summary.md
```

---

## 1. Promethee — 把工作变成多人游戏

- **作者**：@Nlacombe_
- **时间**：2026-10-04 19:32 UTC
- **视频**：约 105 秒
- **亮点**：Introducing Promethee，已对所有人开放。把专注与工作量变成多人游戏，用来提高表现。创始人 Nicolas 线程说明：侧项目先到 3000 用户，再与前 ClickUp / Telegram 的 @miron_puzanov 全职做。https://www.promethee.io/ 本窗口浏览量第一的产品首发长片。补扫时互动已明显高于早扫。
- **互动**：约 2957 赞、237 转发、125 引用、190 回复、3334 收藏、61.4 万+浏览
- **分类建议**：productivity / consumer
- **链接**：https://x.com/Nlacombe_/status/2106829867463627039
- **tweetId**：2106829867463627039

---

## 11. gyotaku — 截图文件夹的离线 Ctrl+F

- **作者**：@xevrion_the1（DevRel @workersio，YC F26）
- **时间**：2026-10-05 09:57 UTC
- **视频**：约 15 秒
- **亮点**：上午补扫。给截图文件夹做 Ctrl+F：输入图里出现过的词，毫秒级找回，完全离线、开源。跟帖仓库 https://github.com/xevrion/gyotaku 收藏明显高于转发，独立开发者工具首发短片。
- **互动**：约 246 赞、8 转发、3 引用、59 回复、126 收藏、5485+浏览
- **分类建议**：developer-tools / productivity
- **链接**：https://x.com/xevrion_the1/status/2107047524662157818
- **tweetId**：2107047524662157818

完整版见本地文件，此提交为修复占位符。下一次推送覆盖全文。
