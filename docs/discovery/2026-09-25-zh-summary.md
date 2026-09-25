# 2026-09-25 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / just launched / now live / now available / plugin / MCP / agent / desktop 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-22 至 2026-09-25 上午 CST（补录 09-21 文档之后的窗口）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-21 已发现文档互补，不重复已在 `src/data/videos.json` 的条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-25-zh-summary.md
```

---

## 1. OpenAI — GPT-6 Sol / Luna

- **作者**：@OpenAI
- **时间**：2026-09-22 18:12 UTC
- **视频**：约 8 秒官方品牌片
- **亮点**：Please welcome GPT-6 Sol and GPT-6 Luna to the GPT-6 universe。承接 Astra 的能力，做更快、更便宜的规模化工作模型；缓存与推理降本后，Sol / Luna API 比 GPT-5.6 促销价低 50%。本窗口 watchlist 官方视频里浏览量最高的新模型发布片之一。
- **互动**：约 5.3 万赞、5260 转发、3012 引用、6438 收藏、934 万+浏览
- **分类建议**：ai
- **链接**：https://x.com/OpenAI/status/2102460975790137662
- **tweetId**：2102460975790137662

---

## 2. OpenAI — ChatGPT Voice 接插件 / Astra / Work

- **作者**：@OpenAI
- **时间**：2026-09-23 17:12 UTC
- **视频**：约 125 秒
- **亮点**：ChatGPT Voice 现在可以用邮件 / 日历 / Slack 插件；可由 GPT-6 Astra、Sol、Luna 驱动；在 ChatGPT Work 的 Web / 移动端用说话写文档、幻灯片、站点与表格，或在浏览器里做复杂任务。全球随 App 最新版滚出。是 Sol/Luna 发布之后的产品化落地片，可独立入库。
- **互动**：约 1.2 万赞、889 转发、600 引用、2660 收藏、253 万+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/OpenAI/status/2102808325742322002
- **tweetId**：2102808325742322002

---

## 3. Odyssey — Agora-2 多智能体世界模型

- **作者**：@odysseyml
- **时间**：2026-09-24 15:37 UTC
- **视频**：主片约 57 秒 + 线程补充约 20 秒
- **亮点**：Introducing Agora-2。下一代多智能体世界模型，最多 20 个人与智能体在共享环境里实时交互；预览支持 4 人 vs 16 智能体。线程明确写「底下没有游戏引擎」。多人预览可现在尝试：https://odyssey.systems/introducing-agora-2 是本窗口世界模型类高信号发布片。
- **互动**：约 2016 赞、3761 转发、188 引用、911 收藏、74 万+浏览
- **分类建议**：ai / other
- **链接**：https://x.com/odysseyml/status/2103146841378586820
- **tweetId**：2103146841378586820

---

## 4. Google DeepMind — Gemini 3.8 Flash / Flash-Lite TTS

- **作者**：@GoogleDeepMind
- **时间**：2026-09-23 15:25 UTC
- **视频**：约 59 秒
- **亮点**：Create and deploy custom audio。Gemini 3.8 Flash TTS 可设计带口音与特征的独立声音；Flash-Lite TTS 面向效率与规模，可用自建风格或生产级声音库。watchlist 官方能力发布片。
- **互动**：约 552 赞、71 转发、35 引用、154 收藏、8.2 万+浏览
- **分类建议**：ai
- **链接**：https://x.com/GoogleDeepMind/status/2102781530867126505
- **tweetId**：2102781530867126505

---

## 5. GitHub Copilot — Claude Opus 5.5 全面可用

- **作者**：@github
- **时间**：2026-09-22 17:34 UTC
- **视频**：约 90 秒
- **亮点**：Claude Opus 5.5 在 GitHub Copilot 全面可用。早期测试：任务解决能力近 Opus 5，但步骤与 token 显著更少，多步任务出错恢复快。Copilot App / CLI / VS Code 均可用。Opus 5.5 官方首发片已在目录，本条是平台落地片，可独立入库。
- **互动**：约 373 赞、44 转发、8 引用、30 收藏、11.8 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/github/status/2102451479487324333
- **tweetId**：2102451479487324333

---

## 6. Perplexity — Portable Computer for Windows（AMD Ryzen AI Max）

- **作者**：@perplexity_ai
- **时间**：2026-09-24 16:35 UTC
- **视频**：约 41 秒
- **亮点**：Portable Computer for Windows 现在可用于 AMD Ryzen AI Max 系列。本机跑本地 AI agent，连接 App 与本地文件，可立即任务也可排程循环任务。与目录里 08-25 NVIDIA DGX Spark 版本同线产品的新平台落地片。
- **互动**：约 234 赞、35 转发、8 引用、37 收藏、4.3 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/perplexity_ai/status/2103161414919872628
- **tweetId**：2103161414919872628

---

## 7. Motion — GPT-6 for motion design

- **作者**：@motion_so
- **时间**：2026-09-22 21:05 UTC
- **视频**：约 30 秒
- **亮点**：Introducing GPT-6 for motion design。把想法、素材和视觉参考交给 Motion MCP，GPT-6 可以搭动画场景、字体与过渡，并在同一项目里迭代修改。09-16 MCP / 09-20 Muse 之后的新模型入口片，可独立入库。
- **互动**：约 182 赞、7 转发、3 引用、160 收藏、3.1 万+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/motion_so/status/2102504661374693678
- **tweetId**：2102504661374693678

---

## 8. Stripe — Checkout WebMCP

- **作者**：@stripe
- **时间**：2026-09-22 17:30 UTC
- **视频**：约 24 秒
- **亮点**：用 WebMCP 让 agent 在浏览器里完成支付，现已在 Stripe Checkout 上线。引用 Steve Kaliski：基准测试里 agent 有 WebMCP 时 token 少 42%、工具调用少 38%。https://docs.stripe.com/agentic-commerce/for-agents/webmcp
- **互动**：约 157 赞、16 转发、3 引用、74 收藏、1.9 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/stripe/status/2102450492185907620
- **tweetId**：2102450492185907620

---

## 9. Google Chrome — 学生向三项能力

- **作者**：@Google
- **时间**：2026-09-24 19:42 UTC
- **视频**：三条短片（约 27 秒 / 44 秒 / 27 秒）
- **亮点**：Introducing three new Chrome features。Gemini in Chrome 可对音视频提取要点、查具体信息；从打开的标签页 / Docs / 讲座视频直接出交互测验；电脑与手机之间发送标签页时保留滚动位置与进度。主帖无视频，建议入库线程里带演示的三条之一或三条都当同系列。https://blog.google/products-and-platforms/products/chrome/tips-for-school-and-studying/
- **互动**：主帖约 900 赞、372 收藏、29.8 万+浏览；子帖视频各约 1.1–2.2 万浏览
- **分类建议**：ai / productivity / consumer
- **链接**：https://x.com/Google/status/2103208484661760376（第一条带视频子帖；主帖 2103208482845647233）
- **tweetId**：2103208484661760376

---

## 10. GitHub Copilot — Dependabot 批量自动化

- **作者**：@github
- **时间**：2026-09-24 16:40 UTC
- **视频**：约 34 秒
- **亮点**：用 Copilot app automation 对 Dependabot PR 做第一遍：按风险分组、核对 CI、出短摘要。用自然语言写指令，可上班前排程。官方能力演示片，不是活动预告。
- **互动**：约 88 赞、12 转发、5 引用、38 收藏、2.6 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/github/status/2103162660384645199
- **tweetId**：2103162660384645199

---

## 11. Runway — Seedance 2.5 Draft mode

- **作者**：@runwayml
- **时间**：2026-09-24 17:10 UTC
- **视频**：约 55 秒
- **亮点**：New in Runway, Draft mode for Seedance 2.5。探索阶段更快、更省 credits，看中再 enhance 到全质量。目录已有 Seedance 2.5 上线片，本条是新工作流能力，可独立入库。
- **互动**：约 90 赞、8 转发、8 引用、28 收藏、1.0 万+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/runwayml/status/2103170291103154460
- **tweetId**：2103170291103154460

---

## 12. Stripe Link — 给 agent 的金融洞察

- **作者**：@link
- **时间**：2026-09-24 22:10 UTC
- **视频**：约 30 秒
- **亮点**：Introducing financial insights with Link。让 agent 根据近期消费给建议。美国可用：https://link.com/agents Stripe 自家付款层的 agent 能力片。
- **互动**：约 17 赞、4 引用、5 收藏、6500+浏览
- **分类建议**：developer-tools / ai / consumer
- **链接**：https://x.com/link/status/2103245675274334458
- **tweetId**：2103245675274334458

---

## 13. Motion — Muse for Movies

- **作者**：@motion_so
- **时间**：2026-09-24 20:30 UTC
- **视频**：约 120 秒
- **亮点**：Introducing Muse for Movies。让 Muse 写自己的人生电影：编故事、拆场景、写视觉方向，再把 prompt 交给 Motion 出片。09-20 Muse for motion design 的长形式扩展，片可独立入库。
- **互动**：约 18 赞、2 引用、6 收藏、1800+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/motion_so/status/2103220550034469293
- **tweetId**：2103220550034469293

---

## 14. Motion — Opus 5.5 做发布片

- **作者**：@motion_so
- **时间**：2026-09-23 15:48 UTC
- **视频**：约 30 秒
- **亮点**：Claude Opus 5.5 can make launch videos in Motion。交产品素材和口号，经 Motion MCP 搭场景；同项目里改 hook / 节奏 / 视觉。本片号称 one-shot。与 GPT-6 入口片属同产品线的新模型演示。
- **互动**：约 141 赞、17 转发、1 引用、146 收藏、9200+浏览
- **分类建议**：design / motion / ai
- **链接**：https://x.com/motion_so/status/2102787158658695311
- **tweetId**：2102787158658695311

---

## 15. Aria — Mac 本机助手 + Telegram

- **作者**：@secludedmi
- **时间**：2026-09-23 06:40 UTC
- **视频**：约 106 秒 walkthrough
- **亮点**：I built Aria for people who live on their Mac but aren’t always at the desk。LaunchAgent 安装、Telegram /help /status、主动 App 提醒、/run daily_digest、localhost UI、/ai 调 Cursor agent。Token 和密钥都留在本机。近两分钟真机流程清楚的 indie Mac 发布片。
- **互动**：约 8 赞、2 收藏、5800+浏览
- **分类建议**：productivity / developer-tools / ai
- **链接**：https://x.com/secludedmi/status/2102649288413311213
- **tweetId**：2102649288413311213

---

## 16. Ming Image-0.1 Design

- **作者**：@AdinaYakup（Hugging Face）
- **时间**：2026-09-22 19:38 UTC
- **视频**：约 43 秒
- **亮点**：Ant Group @TheInclusionAI 发布 Ming Image-0.1 Design：6B、MIT，面向文字密集设计图，原生 RGBA / 透明底，AA UI/UX 榜开源第一。开源模型发布演示片。
- **互动**：约 230 赞、30 转发、3 引用、142 收藏、1.5 万+浏览
- **分类建议**：ai / design
- **链接**：https://x.com/AdinaYakup/status/2102482670198411592
- **tweetId**：2102482670198411592

---

## 17. Google Photos — 五项更新

- **作者**：@Google
- **时间**：2026-09-24 17:37 UTC
- **视频**：主帖约 4 秒 + 线程多条短片
- **亮点**：Packed photo library? Make the most of your memories with these 5 Google Photos updates。线程包括 Gemini Spark 一句话选图、加亮、分享；wardrobe 虚拟试穿会自动盘点相册衣服。消费端能力包，主帖浏览量足以入队。
- **互动**：主帖约 134 赞、23 收藏、9.2 万+浏览
- **分类建议**：consumer / ai
- **链接**：https://x.com/Google/status/2103177026010292297
- **tweetId**：2103177026010292297

---

## 18. 其他高信号 / 跟进

- **Anthropic 分子生物实验室**（@AnthropicAI，约 75 秒，94 万+浏览）：生物学家用 Claude 做假设与文献，实验室工作由科学家完成。研究机构宣布片，非消费级产品首发，可当 other / ai 看。https://x.com/AnthropicAI/status/2102824961538920822
- **Claude Opus 5.5 explorations 线程**（@claudeai，主帖约 29 秒，117 万+浏览）：西瓜短篇、Earthrise、铅笔射击机、插槽机 UI、积木建模等 early explorations，非新产品首发。https://x.com/claudeai/status/2102471866635919731
- **Midjourney edit model 教程**（@midjourney，约 189 秒，2.5 万+浏览）：怎么用新 edit model 做角色一致。已有模型的 walkthrough，非首发。https://x.com/midjourney/status/2103208764648419598
- **Framer Skills 页面 mention**（@framer，约 20 秒，6500+浏览）：把 skill 指向含组件的页面作默认资源。目录已有 09-22 Framer Skills 首发片，本条是补充演示。https://x.com/framer/status/2102765990039998524
- **Warp 模型上架短片**（@warpdotdev）：GPT-6 Sol/Luna、Claude Opus 5.5、Grok 4.7 进 Warp Terminal / Agent CLI，各约 9–14 秒，3300–6700 浏览。平台对接片，可合并看。https://x.com/warpdotdev/status/2102777070099022134
- **Weave Code Boost**（@adambcohen93，约 30 秒，1600+浏览）：把 Claude / Codex max 与开源模型合到一处，挪尽代码 agent 补贴。https://x.com/adambcohen93/status/2103231141515772034
- **FundMyCompute**（@JayScambler，约 27 秒，4000+浏览）：带社区筹 compute credits 的模型路由器。https://x.com/JayScambler/status/2103211075038834894
- **Riftbound 卡面 Chrome 插件**（@overnumbered，约 19 秒，8.2 万+浏览）：直播里悬停看高清卡面。游戏周边工具，可当 consumer / other。https://x.com/overnumbered/status/2103154696009687202
- **Living CPI Data**（@albertocavallo / HBS IEM Lab，约 34 秒，1400+浏览）：AI agent 每日采集、扩展、质检全球 CPI。研究数据库发布。https://x.com/albertocavallo/status/2103264508051685800
- **ElevenCreative × Opus 5.5 MCP**（@ElevenCreative，约 6 秒，2.2 万+浏览）：在一次对话里做配音与广告，能力接入片而非新产品首发。https://x.com/ElevenCreative/status/2103168290592112688

## 已在目录或 09-21 文档中出现（仅交叉引用，不重复入队）

Claude Opus 5.5 官方首发片（@claudeai / 2102435511222890900，已在 `videos.json`）、Framer Skills 首发（@framer / 2102408056856609042）、FIND ⌘F、OmniNotch、Motion Muse、duo、Frameclip、JCR、Oh-My-Hermes、elia、Motion 自定义模板、GojiberryAI × Jev、booster_mjlab、Mirasim、OpenMuse、umbrelOS 2.0、Quiver 2.0、Alexandria、Tesseract、Runway DIFFUSE / Labs、Worker Previews。

## 已过滤（不入库）

- 阅读量少于 500 的帖子（Vovy notch agent、AgenticSidebar、Mia alpha 日记等）
- 加密货币 / 代币 / NFT / launchpad（Zop Agents launch coins、Token22、Pare / Spice Flow、Hyperdex Tokenized Baskets、Askr $ASKR、USDai / Kamino、ArcLite $LITE、arclUSDC、FomoFantasy、SpotiPaid、FAZE MCP、Ult 体育盘）
- 政治 / 外交 / 新闻评论（加拿大—越南战略伙伴、AI for All 课程宣讲、市政引见）
- 体育 / 娱乐 / 音乐发行（49ers、82WORLD 音乐节、Madonna / The Pretty Reckless 唱片、Bellagio 花园 walkthrough）
- 纯游戏 demo / 模组（Rift of the NecroDancer Level Editor 直播 VOD、Otherside Versus mode）
- 活动 / 会议预告（Cloudflare Connect、Supabase Select / Hypership Day、Figma Release Notes EP-008 活动预告片，非功能首发）
- 教程 / 作品集 / 非发布（Framer positioning / responsive 教程长片、Replit Hacking the 7 纪录片、Motion 模型对打纪录片、The Attention Playbook 课程售卖、Opus 5.5 一句话做 CRM 二创演示）
- 研究硬件实验短片（Google × Planet 搬 TPU 上天）

**已核对**：上述主条目 tweetId 均未在 `src/data/videos.json` 命中（Claude Opus 5.5 官方片 2102435511222890900 已在目录，仅交叉引用）。

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-25-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
