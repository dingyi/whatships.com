# 2026-09-14 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / plugin / MCP / agent 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-13 上午至 2026-09-14 上午 CST。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-13 已发现文档互补，不重复已入队条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-14-zh-summary.md
```

---

## 1. makefaster.dev — 自动研究循环加速前端

- **作者**：@pwnies（Jacob Miller，前 Figma / Atlassian / Microsoft）
- **时间**：2026-09-13 18:32 UTC
- **视频**：约 21 秒
- **亮点**：Just launched makefaster.dev。用约 $10k Fable API 额度跑过 GitHub 前 200 个仓库的加速实验，把常见赢法收成一个自动研究循环，反复找前端性能改进。跟帖说可直接接现有 Claude / Codex / Cursor 订阅，`npx makefaster` 即用，并发了 Show HN。是本日最清晰的 indie 工具发布片。
- **互动**：约 312 赞、14 转发、661 收藏、2.5 万+浏览
- **分类建议**：developer-tools / ai / design
- **链接**：https://x.com/pwnies/status/2099204649127673873
- **tweetId**：2099204649127673873

---

## 2. AgentNet Webagent — 站点几分钟变公开 Agent

- **作者**：@TheAgentNet
- **时间**：2026-09-13 17:23 UTC
- **视频**：约 12 秒
- **亮点**：Introducing Webagent。开源 harness：把网站交给它，几分钟生成面向公众的 agent，并能和其他 agent 对话。仓库：https://github.com/TheAgent-net/webagent。短片把产品句与流程讲清。
- **互动**：约 129 赞、16 转发、66 收藏。5.6 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/TheAgentNet/status/2099187195345330561
- **tweetId**：2099187195345330561

---

## 3. Framer Agent — 一分钟做 iPhone Duo 折叠滑块

- **作者**：@framer
- **时间**：2026-09-13 18:03 UTC
- **视频**：约 93 秒
- **亮点**：How to build the iPhone Duo folding slider with the Framer Agent。完整 walkthrough：重建区块 → 写 prompt → 按顺序上传帧 → 粘贴图片 → 播放。官方称 Framer Agent 一分钟内可做完。是 09-11 / 09-12 Framer Agent 3D、hover 之后的新能力演示片，不是新品牌子，但流程完整、适合入站。
- **互动**：约 62 赞、32 收藏。5400+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/framer/status/2099197195907973362
- **tweetId**：2099197195907973362

---

## 4. Tableau plugin for ChatGPT Work — 对话里出交互图表

- **作者**：@tableau
- **时间**：2026-09-13 22:00 UTC
- **视频**：约 28 秒
- **亮点**：新的 Tableau 插件进入 ChatGPT Work：在 AI 工作流里直接建、创建并发布 Tableau 可视化，全交互、零截图、用已有可信数据。是 Salesforce 体系里比较清楚的产品能力发布片。
- **互动**：约 16 赞、5 转发、1800+浏览
- **分类建议**：productivity / ai / developer-tools
- **链接**：https://x.com/tableau/status/2099256905239535988
- **tweetId**：2099256905239535988

---

## 5. Higgsfield × GPT-6 Astra + Photoshop — 动画师必须试

- **作者**：@higgsfield_ai
- **时间**：2026-09-13 00:44 UTC
- **视频**：约 15 秒
- **亮点**：We can’t hide it anymore… GPT-6 Astra + Photoshop。接 09-12 Motion Designer / After Effects 插件线，把能力延到 Photoshop 动画工作流。同日还有果蝇做 motion design、复刻动效师挑战片。
- **互动**：约 266 赞、153 收藏。2 万+浏览
- **分类建议**：ai / design / motion
- **链接**：https://x.com/higgsfield_ai/status/2098935884989321286
- **tweetId**：2098935884989321286

---

## 6. Higgsfield — Astra 让果蝇做 motion design

- **作者**：@higgsfield_ai
- **时间**：2026-09-13 02:24 UTC
- **视频**：约 25 秒
- **亮点**：GPT-6 Astra upgraded the fly. It’s doing motion design now。用一只被升级的果蝇做主角，展示 Astra 已能按动画原则做分镜与时序。属同一产品线的能力宣传片。
- **互动**：约 273 赞、53 收藏。2 万+浏览
- **分类建议**：ai / design / motion
- **链接**：https://x.com/higgsfield_ai/status/2098961015413313736
- **tweetId**：2098961015413313736

---

## 7. AgentLayer x402 MCP — 给 Agent 发现并付费

- **作者**：@agentlayer_ai
- **时间**：2026-09-13 12:09 UTC
- **视频**：约 13 秒
- **亮点**：Introducing agentlayer x402 mcp。粘贴链接 + Google/GitHub 登录，让 agent 发现并支付服务；一个钱包跨 Claude / Grok（ChatGPT 即将到）。不用本机安装或拉起虚拟机。有链上支付背景，但帖子本身是 MCP 产品发布片而非代币发售。
- **互动**：约 51 赞、7 收藏。4300+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/agentlayer_ai/status/2099108282514182290
- **tweetId**：2099108282514182290

---

## 8. Maestro — 三种方式做 Agent UI 测试

- **作者**：@maestro__dev
- **时间**：2026-09-13 14:02 UTC
- **视频**：约 35 秒
- **亮点**：开源 Agent UI 测试：用 coding agent、在 Maestro Studio 可视化 IDE 里一点一点点、或在编辑器里写完用 CLI 跑。三种路径都在同一产品里。约 35 秒演示把界面讲清。
- **互动**：约 20 赞、8 收藏。1500+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/maestro__dev/status/2099136570532250104
- **tweetId**：2099136570532250104

---

## 9. Ado — 周末黑出的多人 Figma/Paper 设计工作室

- **作者**：@adocomplete（Anthropic 社区 / Claude Code）
- **时间**：2026-09-13 23:32 UTC
- **视频**：约 28 秒
- **亮点**：Weekend hacking highlight：自已做了一个 Figma/Paper 式设计工作室，支持多人协作、AI 辅助设计、多格式导出代码。不是官方发布，但是高信号的设计工具 demo。
- **互动**：约 14 赞、5 收藏。1500+浏览
- **分类建议**：design / ai / developer-tools
- **链接**：https://x.com/adocomplete/status/2099280190635700659
- **tweetId**：2099280190635700659

---

## 10. MotionBricks × Unreal — 本地 CPU 上的实时 AI 动画

- **作者**：@Stefan_3D_AI
- **时间**：2026-09-13 12:25 UTC
- **视频**：约 49 秒
- **亮点**：可玩 MetaHuman，动画来自实时 AI，跑在 CPU 上。NVIDIA MotionBricks 被 localai-org 移植到 C++/GGML：0.73 GB 模型、免费、无需 GPU。作者写了 Unreal 插件，接了 15 种运动风格并修了卡顿、输入延迟与手腕。是清楚的开源插件发布/演示。
- **互动**：约 181 赞、149 收藏。8900+浏览
- **分类建议**：ai / design / developer-tools
- **链接**：https://x.com/Stefan_3D_AI/status/2099112302020546860
- **tweetId**：2099112302020546860

---

## 11. AppLlama MCP — 用 MCP 把差评 App 重做更好

- **作者**：@jaimintf（@appllamaio）
- **时间**：2026-09-13 20:09 UTC
- **视频**：约 28 秒
- **亮点**：用 AppLlama 筛出收入>$25k 且评分<4.5 的 iOS app，再用 AppLlama MCP 把差评产品重做更好。更像工作流演示而不是首发，但视频把产品能力展开得比较清。
- **互动**：约 36 赞、40 收藏。2300+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/jaimintf/status/2099228915768144207
- **tweetId**：2099228915768144207

---

## 12. OpenMAIC — 清华开源多 Agent 教室（第三方覆盖片）

- **作者**：@emelucrypto（覆盖，非官方账号）
- **时间**：2026-09-13 16:22 UTC
- **视频**：约 26 秒
- **亮点**：OpenMAIC：清华大学开源多 agent 教室。给话题或素材，生成交互课：AI 老师口播、AI 同学辩论、实时测验、仿真、白板、项目式学习、幻灯/导出 HTML、二十多项技能。MIT 协议。需要核对官方原帖/仓库后再入队。
- **互动**：约 45 赞。1500+浏览
- **分类建议**：ai / other
- **链接**：https://x.com/emelucrypto/status/2099171868502585553
- **tweetId**：2099171868502585553

---

## 13. 其他高信号 / 跟进

- **Higgsfield 应战动效师**（复刻 @The_Eniola1 的挑战片，约 12.5 万浏览）：https://x.com/higgsfield_ai/status/2098940163703631973
- **Higgsfield 果蝇 prompt motion**：https://x.com/higgsfield_ai/status/2098931815507767680
- **LandingBoost 更新**（明暗色 / 分享流 / 付费报告预览，功能迭代而非首发）：https://x.com/yusukelp/status/2099202613434872141
- **Fable 5 一句话做 onboarding**（@yeasindesign 第三方演示）：https://x.com/yeasindesign/status/2099102385029411200
- **StoryComet**（Meng To 用 Fable 5.1 三天做儿童互动书，覆盖片）：https://x.com/alex_verem/status/2099075241775608056
- **Shubham Saboo Agent 零代码快速课**（教程片，非产品发布）：https://x.com/Saboo_Shubham_/status/2099205136413593605
- **Northwise Data Center Tracker**（投资研究工具，偏金融内容）：https://x.com/InvestNorthwise/status/2099209623622320381

## 已在 09-12 / 09-13 文档中出现（仅交叉引用）

Spectrum UI SVG Charts、Higgsfield Motion Designer / AE 视差 / Illustrator / VFX、supermemory Console、HumanLayer 多人 Prompt、Capx Casa、LaunchReel、しゃべろぐ、TypeUI Methodical、Shottr MCP、Agnost、SpareDisk、Luvus 0.14.1、fal H3 Max、GPT-Rosalind、OpusClip AI Producer、Builder.io /webmcp、Boski、Bland、Notion Skills、Runway × Astra、Framer Agent hover / 3D。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（Galerra 更新、Componentry Annotated Text、3D Book Mockup Studio 等）
- 加密货币 / 代币 / NFT / 链上 mint（MerlinOS mint、Bank 代币、Ponsum $PONSUM、Corine agent tokenisation、Privatum 钱包、Anodos 银行 beta）
- 纯游戏 demo / App Store 小游戏（Bye Bye Breakfast、Broker Farmer Run）
- 体育 / 娱乐 / 音乐发行 / 影展（SB19、Zack Snyder TIFF、Above & Beyond）
- 政治 / 新闻评论片
- GitHub 「Today is for the programmers」文化短片、GitHub Universe badge
- Figma `Finals.svg`（09-12 已过滤）
- Framer 互动站点合集（案例展示，非新功能发布）
- 盗版 TradingView Premium、免费 API 聚合教程、纯作品集 reel

**已核对**：上述主条目 tweetId 均不在 `src/data/videos.json`，也不在当前 `src/data/inbox.json` 待审条目中。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-14-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
