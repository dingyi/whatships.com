# 2026-10-06 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch）。窗口：2026-10-05 13:21 UTC 至 2026-10-06 14:12 UTC（约 CST 21:21 至次日 22:12），补 10-05 文档截稿之后的高信号片。与 10-04 / 10-05 文档互补，不重复 Promethee / Melty / Genex 之前已入队条目、text-to-CAD 首发、Higgsfield AI Influencer 早期片。排除阅读 < 500，以及政治、娱乐、体育、音乐、代币 / NFT、纯游戏与无关教程。不改 `src/data/videos.json` 或 `inbox.json`。

GitHub code search 未命中下列 tweetId；`videos.json` 超过 1MB 未能全文拉取，以仓库搜索未命中且未出现在已合入的 discovery 文档为准。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-06-zh-summary.md
```

---

## 1. Higgsfield Genjutsu / AI Influencer

- **作者**：@higgsfield
- **时间**：2026-10-05 14:16 UTC
- **视频**：约 49 秒
- **亮点**：官方片写明用自己的脸或从零做 AI influencer，再用 Genjutsu 跟热点。现已在 Higgsfield 和 ChatGPT Extension 可用，最多 5 次免费生成。与 10-05 已入队的 AI Influencer 同系列，这条是截稿后的可用性 / Genjutsu 片，浏览量级别不同。
- **互动**：约 2412 赞、3455 转发、198 引用、280 回复、1430 收藏、114 万+浏览
- **分类建议**：ai / motion / consumer
- **链接**：https://x.com/higgsfield/status/2107112781854245256
- **tweetId**：2107112781854245256

---

## 2. Devin Dreaming / Agent Memory Repo

- **作者**：@cognition
- **时间**：2026-10-05 17:44 UTC
- **视频**：约 34 秒
- **亮点**：Introducing Dreaming。跨会话建工作偏好记忆图，夜间自我清理过期记录并挖潜在信息。同步开源 Agent Memory Repo：记忆以文件存在、用 Git 版本化，也能当 agent 会话间的留言板。早期实验里多个 Devin 会自发用它协调。https://cognition.com/agent-memory-repo https://devin.ai/blog/memory-and-dreaming
- **互动**：约 1597 赞、120 转发、90 引用、91 回复、1326 收藏、24.4 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/cognition/status/2107165034463867001
- **tweetId**：2107165034463867001

---

## 3. Genex — 用 AI 做游戏的桌面应用

- **作者**：@genex_games
- **时间**：2026-10-05 16:39 UTC
- **视频**：约 62 秒
- **亮点**：Introducing Genex。开源 MIT 桌面端，用来做游戏而不是游戏发行片。本地模型，或接 Claude Code / ChatGPT 订阅；自改进 harness；Three.js + Blender、Meshy 等工具，Unity / Unreal 插件预告。收藏远高于赞。https://genex.games/desktop
- **互动**：约 2028 赞、169 转发、18 引用、82 回复、2618 收藏、9.1 万+浏览
- **分类建议**：developer-tools / ai / design
- **链接**：https://x.com/genex_games/status/2107148754633507237
- **tweetId**：2107148754633507237

---

## 4. Cursor SDK 运行中 steer

- **作者**：@cursor_ai
- **时间**：2026-10-05 16:08 UTC
- **视频**：约 20 秒
- **亮点**：运行中可以纠偏 Cursor SDK agent。`run.steer()` 把消息加到下一轮；子 agent 正在做事则进后台继续。线程还写了后台子 agent 结果回传、自定义工具的 MCP annotation，以及按账号开放的自定义 system prompt。https://cursor.com/docs/sdk/changelog
- **互动**：约 979 赞、63 转发、38 引用、90 回复、148 收藏、7.8 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/cursor_ai/status/2107141004482793827
- **tweetId**：2107141004482793827

---

## 5. Cua Driver 光标动效

- **作者**：@trycua
- **时间**：2026-10-05 16:53 UTC
- **视频**：首发约 30 秒；线程另有 6 段约 7–10 秒的单动效片
- **亮点**：给 agent 光标加了 6 种手调动效：Comet swoop、Signature arc（新默认）、Spring settle、Magnetic、Adaptive，Classic 仍保留。从 82 种里留下，开源。`cua-driver config set cursor.motion.style`。https://cua.ai/docs/cua-driver
- **互动**：约 670 赞、35 转发、10 引用、20 回复、631 收藏、7.5 万+浏览
- **分类建议**：ai / design / developer-tools
- **链接**：https://x.com/trycua/status/2107152124891246978
- **tweetId**：2107152124891246978

---

## 6. Unusual Whales ChatGPT 插件

- **作者**：@unusual_whales
- **时间**：2026-10-06 00:31 UTC
- **视频**：约 12 秒
- **亮点**：期权流、市场数据和交易信号插件进 ChatGPT。产品集成首发，不是行情解读。https://chatgpt.com/plugins/plugin_asdk_app_6978ec2d58fc8191b41100b978036969
- **互动**：约 57 赞、3 转发、19 回复、22 收藏、5.7 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/unusual_whales/status/2107267342594142626
- **tweetId**：2107267342594142626

---

## 7. boat — agent 全虚机沙箱

- **作者**：@AniC_dev（@boatdotdev）
- **时间**：2026-10-05 15:30 UTC
- **视频**：约 132 秒
- **亮点**：给 agent 的全 VM 沙箱，自助最高约 2000 并发，带桌面和浏览器。发布片本身由 Claude 在一组 boat VM 上做出来。https://boat.dev
- **互动**：约 346 赞、30 转发、15 引用、44 回复、189 收藏、3.2 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/AniC_dev/status/2107131198975938901
- **tweetId**：2107131198975938901

---

## 8. Figma Motion 文字动画与音频

- **作者**：@figma
- **时间**：2026-10-05 18:57 UTC
- **视频**：约 45 秒
- **亮点**：Figma Motion 现在可以做文字动画和音频。产品功能片，不是 Source Material 播客。社区文件：https://www.figma.com/community/file/1682540379260940278/figma-motion-updates
- **互动**：约 335 赞、31 转发、17 引用、23 回复、95 收藏、2.3 万+浏览
- **分类建议**：design / motion
- **链接**：https://x.com/figma/status/2107183336724836358
- **tweetId**：2107183336724836358

---

## 9. T3 Code 线程内可视化

- **作者**：@theo
- **时间**：2026-10-06 00:39 UTC
- **视频**：约 24 秒
- **亮点**：T3 Code 加上应用内可视化，agent 可以在线程里做动态界面。主要由 @davis7 做。跟帖说 agent 会拿到跟主题一起的 CSS token。
- **互动**：约 519 赞、10 转发、3 引用、56 回复、119 收藏、1.3 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/theo/status/2107269392874782873
- **tweetId**：2107269392874782873

---

## 10. Devin Memory 走查

- **作者**：@dabit3
- **时间**：2026-10-05 23:42 UTC
- **视频**：约 73 秒
- **亮点**：同一天 Memory / Dreaming 的更长走查。持久、会自我清理的会话记忆；标准开源，也能用在其他 harness。引用的是 Cognition 官方首发帖，视频是另一条。
- **互动**：约 93 赞、15 转发、1 引用、14 回复、16 收藏、9100+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/dabit3/status/2107255152008949951
- **tweetId**：2107255152008949951

---

## 11. Together Link

- **作者**：@nutlope
- **时间**：2026-10-05 16:06 UTC
- **视频**：约 57 秒
- **亮点**：把开源模型接进 coding harness 的 CLI。按任务自动选模型，支持 Claude Code、Codex、OpenCode，带花费和用量。beta，做了约 6 周。https://www.together.ai/link
- **互动**：约 73 赞、2 转发、3 引用、26 回复、45 收藏、5500+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/nutlope/status/2107140278624944590
- **tweetId**：2107140278624944590

---

## 12. Lifelong for Caregivers

- **作者**：@raztronaut
- **时间**：2026-10-05 22:08 UTC
- **视频**：约 34 秒
- **亮点**：Introducing Lifelong for Caregivers。给照顾别人健康的人单独做的体验，已上线。帖子未给独立产品链接。
- **互动**：约 47 赞、3 转发、2 引用、13 回复、39 收藏、6200+浏览
- **分类建议**：consumer / health
- **链接**：https://x.com/raztronaut/status/2107231455177036167
- **tweetId**：2107231455177036167

---

## 13. omni-macos

- **作者**：@hxiao
- **时间**：2026-10-05 21:56 UTC
- **视频**：约 145 秒
- **亮点**：Apple Silicon 上的语义 Finder。全本地多模态搜索，给人和 agent 用；处理重复文件、增量编辑和文件夹级 CRUD，避免索引卡住 GPU。几个月前就发过，这条是变成日常工具后的演示。
- **互动**：约 22 赞、6 回复、21 收藏、1600+浏览
- **分类建议**：productivity / ai
- **链接**：https://x.com/hxiao/status/2107228465183506630
- **tweetId**：2107228465183506630

---

## 14. Framer Agent SEO skill

- **作者**：@framer
- **时间**：2026-10-05 21:00 UTC
- **视频**：约 22 秒
- **亮点**：在 Framer Agent 聊天里用 `/seo-check` 查并改 metadata、社交预览、图片 alt 和其他 SEO 设置。功能片，不是新产品首发。
- **互动**：约 22 赞、2 转发、1 引用、5 回复、13 收藏、2200+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/framer/status/2107214422657872064
- **tweetId**：2107214422657872064

---

## 15. Pebble Sports

- **作者**：@ericmigi
- **时间**：2026-10-06 00:14 UTC
- **视频**：约 44 秒
- **亮点**：Pebble Sports 重新上到 Pebble Time 2 和 Round 2。MLB、美式足球、男子大学篮球、NFL、NBA、NHL、英超实时比分。https://apps.repebble.com/sports_52e04d79d8561de30700002e
- **互动**：约 31 赞、3 回复、1 收藏、1300+浏览
- **分类建议**：consumer / hardware
- **链接**：https://x.com/ericmigi/status/2107263148814483714
- **tweetId**：2107263148814483714

---

## 跟进，不单独入队

- text-to-CAD 进入 Codex 官方插件目录，产品本身已在早先文档入队：https://x.com/earthtojake/status/2107235748860895259
- Cognition Ranch 2026 是招聘花絮，不是产品片：https://x.com/cognition/status/2107268310236795023
- Figma Source Material 是创意参考播客，不是产品发布：https://x.com/figma/status/2107218148768235662

## 已入队，不重复

Promethee、Melty、GitHub Copilot app 并排、Pixel Art VFX Generator、Dialkit macOS、Framer Skills / 3D Agent、Oneira、CranL Agentic、X-Design、cinetic、gyotaku、手机 Hermes、Aside PIP v2、d1-studio、Vivix W1、Time Machine、cache-warmer、Watchtower、Legora Skills、Havyn、shadcnuikit、text-to-CAD 首发、Higgsfield AI Influencer 早期片。

## 排除

政治、体育节目、音乐与动画发行、代币 / NFT / 赌场升级、纯游戏城市扩展、招聘花絮、播客与二创广告模板，以及阅读量低于 500 的帖子。Arcade、Solbook、OpenFloor、GAMBA Keno、Lagos Life 城市扩展、Kamen Rider 剧集不入队。
