# 2026-10-09 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch）。窗口：2026-10-08 上午至 2026-10-09 13:20 UTC（约 CDT 08:20）。与 10-07 / 10-08 文档互补，不重复 GPT-6 / Intelligent UI、Claude Haiku 5.5、ChatGPT 插件走查、Copilot 本地路由、Envato Burst、fal H3 Max Relight、Jog、Builder.io skill、Runway 进 ChatGPT Astra、Figma agent 跨文件、Framer 设计系统 skill。排除阅读 < 500，以及政治、娱乐、体育、音乐、代币 / NFT、纯游戏与无关教程。不改 `src/data/videos.json` 或 `inbox.json`。

PR #294 已合入截至 00:49 UTC 的 18 条。本次补 `discoveries/2026-10-09-product-launch-videos.md`，并加今天上午 19–22。GitHub code search（`repo:dingyi/whatships.com`）未命中下列 tweetId。`videos.json` 超过 1MB 未能全文拉取，以仓库搜索未命中且未出现在已合入的 discovery 文档为准。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-09-zh-summary.md
```

---

## 1. Claude Dashboards 与 Claude Motion

- **作者**：@claudeai
- **时间**：2026-10-08 19:01 UTC
- **视频**：约 82 秒
- **亮点**：watchlist 账号官方功能首发，beta。Dashboards：接数据平台或 CRM，用自然语言提问，Claude 写查询并做出会随数据更新的看板，每张图都带查询。付费计划可用。Motion：把报告、图表或产品走查变成短动画，用代码写而不是视频模型，可以改字、数字和时间，再导出 MP4。Team / Enterprise 可用。同线程还宣布 Claude Docs、Slides、Design 退出 beta，含 Free 计划；团队和 Claude 可以一起改同一份文档、幻灯片或设计。https://claude.com/resources/articles/dashboards-and-motion
- **互动**：约 25862 赞、1615 转发、801 引用、522 回复、15421 收藏、194 万+浏览
- **分类建议**：ai / productivity / design
- **链接**：https://x.com/claudeai/status/2108271552991252810
- **tweetId**：2108271552991252810

---

## 2. GPT-6.1 Sol Ultrafast

- **作者**：@OpenAIDevs
- **时间**：2026-10-08 18:26 UTC
- **视频**：约 14 秒
- **亮点**：GPT-6.1 Sol 的 Ultrafast 模式当天向 API、Codex 和 ChatGPT Work 推出。官方说法是接近 Astra 的智能，速度最多约为 Sol Standard 的 8 倍。API 定价每百万 input $12、output $60。Codex / Work 侧目前给 Pro 500、符合条件的按量 Enterprise 和学分制 Edu；Enterprise 管理员要先开权限。支持美国和欧盟数据驻留，并给 GPT-6.1 Sol Fast、GPT-6 Luna Fast 补了欧盟驻留。是速度档发布，不是新模型首发。
- **互动**：约 4082 赞、272 转发、267 引用、329 回复、500 收藏、82.9 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/OpenAIDevs/status/2108262812489531498
- **tweetId**：2108262812489531498

---

## 3. Higgsfield Katana

- **作者**：@higgsfield
- **时间**：2026-10-08 20:33 UTC
- **视频**：约 78 秒
- **亮点**：Introducing Higgsfield Katana，由 Claude Motion 驱动，放在 Claude 里。上传参考后做可编辑的动态图形、产品发布片或短剪辑。当天通过 Higgsfield MCP 在 Claude 里可用。跟帖指向 https://higgsfield.ai/katana
- **互动**：约 1087 赞、216 转发、144 引用、67 回复、530 收藏、12.9 万+浏览
- **分类建议**：ai / motion / design
- **链接**：https://x.com/higgsfield/status/2108294775644585998
- **tweetId**：2108294775644585998

---

## 4. Nace NDI 1.0

- **作者**：@NaceAI
- **时间**：2026-10-08 17:51 UTC
- **视频**：约 65 秒
- **亮点**：文档处理小模型首发。自称在 Parse Index Normalized（6 个公开基准）排第一，文档解析接近 GPT-6 Astra、成本约十分之一。用 1500 万+金融文件训练。送 $25 额度，回复 NDI 可拿 Claude Code / Codex / OpenCode 等的单文件配置。https://www.nace.ai/ndi
- **互动**：约 417 赞、82 转发、32 引用、52 回复、248 收藏、57.7 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/NaceAI/status/2108253944489402575
- **tweetId**：2108253944489402575

---

## 5. Photon A2A（iMessage 群聊）

- **作者**：@danieltian（@photonhq）
- **时间**：2026-10-08 18:22 UTC
- **视频**：约 45 秒
- **亮点**：Introducing A2A in iMessage Group Chats。agent 可以发现其他 agent、找到电话号码，再拉进和你的群聊。面向商家和平台的开放 agent 接入。收藏明显高于赞，偏工具发布。https://photon.codes/beta
- **互动**：约 373 赞、23 转发、38 引用、65 回复、271 收藏、8.4 万+浏览
- **分类建议**：ai / consumer
- **链接**：https://x.com/danieltian/status/2108261717600063915
- **tweetId**：2108261717600063915

---

## 6. Agently 生成式界面

- **作者**：@ahmadafterhours（Agently）
- **时间**：2026-10-08 22:37 UTC
- **视频**：约 42 秒
- **亮点**：Introducing generative UI for the agentic era。不做固定 app 或看板，屏幕在提问时生成，对话中改形，用完消失。收藏远高于赞。https://agently.dev/access
- **互动**：约 207 赞、7 转发、5 引用、7 回复、271 收藏、1.7 万+浏览
- **分类建议**：ai / design / productivity
- **链接**：https://x.com/ahmadafterhours/status/2108325993979277417
- **tweetId**：2108325993979277417

---

## 7. GotEmail

- **作者**：@uaghazadae（Voprex Labs）
- **时间**：2026-10-08 20:05 UTC
- **视频**：约 71 秒
- **亮点**：Introducing GotEmail。Mac 原生邮件客户端，多个邮箱一个窗口，新信到达即显示。需要时用 AI 起草和摘要。约 4MB，纯 Swift，无订阅，终身授权、不限 Mac 数量。个人开发者产品片。帖子未给可解析的独立产品域名。
- **互动**：约 137 赞、5 转发、1 引用、13 回复、161 收藏、1.3 万+浏览
- **分类建议**：productivity / consumer
- **链接**：https://x.com/uaghazadae/status/2108287670547849241
- **tweetId**：2108287670547849241

---

## 8. Atomic Agent Desktop

- **作者**：@atomicagent_io
- **时间**：2026-10-08 22:35 UTC
- **视频**：约 45 秒
- **亮点**：本地优先的桌面 agent，支持 Mac、Windows、Linux。可在本地跑 Qwen、Gemma 等开源模型；TurboQuant 把本地模型上下文约扩大 4 倍；Atomic Fusion 让云端模型规划、最多 8 个本地 agent 执行。免费、无需账号，只有选中时才连云端。安装向导会按内存推荐模型，也可从 Claude Code、Codex、Hermes、OpenClaw 导入配置。https://atomicagent.io
- **互动**：约 46 赞、7 转发、11 引用、6 回复、52 收藏、1.1 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/atomicagent_io/status/2108325479082270746
- **tweetId**：2108325479082270746

---

## 9. Antigen

- **作者**：@antigenco（YC F25）
- **时间**：2026-10-08 23:10 UTC
- **视频**：约 34 秒
- **亮点**：Introducing Antigen。进攻性安全 agent：像攻击者一样探测攻击面，给出补丁供团队审，再测一遍确认漏洞已补。企业安全产品首发片。帖子未给独立产品域名。
- **互动**：约 74 赞、19 转发、9 引用、26 回复、17 收藏、5100+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/antigenco/status/2108334286978113634
- **tweetId**：2108334286978113634

---

## 10. Cursor /visualize 追问

- **作者**：@cursor_ai
- **时间**：2026-10-08 20:13 UTC
- **视频**：约 27 秒
- **亮点**：功能跟进，不是新命令首发。第一张图通常会引出下一个问题，在同一聊天里继续问，/visualize 会再出一张图。原功能 2026-09-29 已在 Agents Window 上线。
- **互动**：约 656 赞、45 转发、4 引用、46 回复、103 收藏、3.0 万+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/cursor_ai/status/2108289748628566496
- **tweetId**：2108289748628566496

---

## 11. Runway × Claude Motion

- **作者**：@runwayml
- **时间**：2026-10-08 20:06 UTC
- **视频**：约 29 秒
- **亮点**：官方集成片。先用 Claude Motion 做图表动画、客户走查或短讲解，再进 Runway 生成视频和图像。紧挨 Claude Motion 首发，不是新模型发布。
- **互动**：约 101 赞、11 转发、10 引用、8 回复、58 收藏、1.4 万+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/runwayml/status/2108287937272266800
- **tweetId**：2108287937272266800

---

## 12. Monid

- **作者**：@MonidHQ
- **时间**：2026-10-08 20:27 UTC
- **视频**：约 53 秒
- **亮点**：融资帖里带产品片。自称 agent 工具的 OpenRouter：运行时发现、调用并按次付费，一条连接覆盖约 2500 个 API（线索、SEO、营销、搜索、电商、行情、音视频 / 图像 / 3D、agent 邮件和电话），不要订阅。同期宣布融资 770 万美元。https://monid.ai
- **互动**：约 33 赞、3 转发、9 回复、18 收藏、1400+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/MonidHQ/status/2108293178365476931
- **tweetId**：2108293178365476931

---

## 13. Nefesh（Electrokare）

- **作者**：@MLeshchiner（@electrokare）
- **时间**：2026-10-08 18:17 UTC
- **视频**：约 107 秒
- **亮点**：Introducing Nefesh，人体生理基础模型的第一章。第一窗口是 ECG：从已有心电信号学心脏功能、结构和更广的生理问题。帖子称已在多个临床点、数万名患者上运行。面向医生和医疗负责人，不是消费级 app。
- **互动**：约 74 赞、16 转发、5 引用、34 回复、10 收藏、2400+浏览
- **分类建议**：ai / other
- **链接**：https://x.com/MLeshchiner/status/2108260630746534128
- **tweetId**：2108260630746534128

---

## 14. OpenRouter：Mercury Decide 零留存

- **作者**：@OpenRouter
- **时间**：2026-10-08 20:21 UTC
- **视频**：约 9 秒
- **亮点**：Inception AI 的 Mercury Decide 在 OpenRouter 上增加零数据留存付费端点，与免费端点并存。input 每百万 $0.02（标价 $0.04 的五折），output 和缓存 input 免费，上下文 66K。模型上架片，不是新模型首发。
- **互动**：约 74 赞、14 转发、1 引用、5 回复、16 收藏、6000+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/OpenRouter/status/2108291696572379521
- **tweetId**：2108291696572379521

---

## 15. AgentPhone 英国号码

- **作者**：@AgentPhoneHQ（YC P26）
- **时间**：2026-10-08 19:59 UTC
- **视频**：约 23 秒
- **亮点**：功能上线，不是产品首发。AI agent 可以领英国号码。注册送 $10 额度。https://agentphone.ai
- **互动**：约 42 赞、6 转发、7 引用、15 回复、10 收藏、1700+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/AgentPhoneHQ/status/2108286224125583680
- **tweetId**：2108286224125583680

---

## 16. Grok Imagine Video 1.5 Lite 上 AI Gateway

- **作者**：@vercel_dev
- **时间**：2026-10-08 21:32 UTC
- **视频**：约 8 秒
- **亮点**：SpaceXAI 的 Grok Imagine Video 1.5 Lite 在 Vercel AI Gateway 上线，最高 1080p。模型上架片，很短。https://vercel.com/changelog/grok-imagine-video-1-5-lite-on-ai-gateway
- **互动**：约 36 赞、6 转发、2 回复、4 收藏、1900+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/vercel_dev/status/2108309611350769715
- **tweetId**：2108309611350769715

---

## 17. Warp 接入 ChatGPT Go

- **作者**：@warpdotdev
- **时间**：2026-10-08 15:35 UTC
- **视频**：约 22 秒
- **亮点**：功能片。ChatGPT Go 订阅现在可以在 Warp 里用于终端提问或写代码。引用的是 Sign in with ChatGPT 把 Go 计划用量开放给合作应用的帖，不是 Warp 新产品首发。
- **互动**：约 12 赞、3 收藏、1700+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/warpdotdev/status/2108219690237747354
- **tweetId**：2108219690237747354

---

## 18. Minirouter 新闻搜索

- **作者**：@miniroutersh
- **时间**：2026-10-08 23:11 UTC
- **视频**：约 10 秒
- **亮点**：功能片。任意模型可以查本周新闻，返回带全文的文章，可按日期或站点过滤，每次搜索约 1.2 美分。片子很短。
- **互动**：约 16 赞、2 转发、3 引用、2 回复、2 收藏、1200+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/miniroutersh/status/2108334502602817993
- **tweetId**：2108334502602817993

---

## 19. Restyles

- **作者**：@viktoroddy（Design Rocket）
- **时间**：2026-10-09 09:35 UTC
- **视频**：约 324 秒
- **亮点**：Introducing Restyles。完整走查：拿一个喜欢的提示词，说它应该变成什么，看它重建自己。片子里做了四次。免费试用 https://motionsites.ai/restyle 。收藏高于赞，偏设计工具发布。
- **互动**：约 23 赞、2 转发、2 引用、5 回复、15 收藏、2200+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/viktoroddy/status/2108491429131833417
- **tweetId**：2108491429131833417

---

## 20. Shipper Astra for Shopify

- **作者**：@chhddavid（@shipper_now）
- **时间**：2026-10-09 09:18 UTC
- **视频**：约 26 秒
- **亮点**：Introducing Astra for Shopify。输入网站 URL，Shipper 把店铺转成原生移动应用。跟帖给了 https://shipper.now 。浏览刚过 500。
- **互动**：约 5 赞、1 转发、1 引用、1 回复、2 收藏、560+浏览
- **分类建议**：developer-tools / consumer
- **链接**：https://x.com/chhddavid/status/2108487246538236014
- **tweetId**：2108487246538236014

---

## 21. OpenCode iOS 0.34.1

- **作者**：@ryanvogel（@opencode / @anomalyco）
- **时间**：2026-10-09 12:43 UTC
- **视频**：约 5 秒
- **亮点**：OpenCode iOS 0.34.1。帖子写的是过去 24 小时里上线的内容。片子很短，是版本说明不是长走查。
- **互动**：约 37 赞、2 转发、1 回复、6 收藏、1000+浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/ryanvogel/status/2108538892227838157
- **tweetId**：2108538892227838157

---

## 22. yoagent

- **作者**：@yuanhao
- **时间**：2026-10-09 07:30 UTC
- **视频**：约 47 秒
- **亮点**：再次介绍 yoagent，给自进化 agent yoyo 用的 agent loop 库。讲循环的 5 种失败模式、Extension 契约，以及 rutis、DSH、pi 插件怎么接进来。可以跑在 Cloudflare Workers。收藏高于赞。不是当天从零首发，yoyo 自 3 月起已在跑。
- **互动**：约 20 赞、5 转发、2 引用、8 回复、18 收藏、920+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/yuanhao/status/2108460164411994236
- **tweetId**：2108460164411994236

---

## 跟进，不单独入队

- MagicPath 在 ChatGPT 里的设计走查（Figma 导入、站点 remix、GitHub 组件、Mobbin 流程），是功能讲解不是新产品首发：https://x.com/lukas_margerie/status/2108225181726429460
- Framer 的 Typesafe / Jev 站点是客户案例（4 天上线、480 万访问），不是新功能首发：https://x.com/framer/status/2108285896923759007
- Replit 的调研报告后续动作片是使用提示，不是新功能首发：https://x.com/Replit/status/2108316518488371413
- Google AMIE 是《柳叶刀》前瞻临床研究沟通片，不是面向用户的产品发布：https://x.com/Google/status/2108324514442461225
- Higgsfield Katana 社区预设：https://x.com/higgsfield/status/2108401556232327237
- Nace NDI 开发者向 15 秒片：https://x.com/NaceAI/status/2108420944146629080
- Dune 查询文件夹与图表时间范围是功能小片，且偏加密数据：https://x.com/hagaetc/status/2108526571053052209

## 已入队，不重复

GPT-6 与 Intelligent UI、Claude Haiku 5.5、ChatGPT 插件扩展走查、GitHub Copilot 本地模型路由、Envato Burst、fal H3 Max Relight、Jog、Builder.io /turn-into-app、Runway 进 ChatGPT Astra、Figma agent 跨文件、Framer 设计系统 skill，以及 10-08 文档其余条目。Runway 进 Astra 的帖（2107908620692389989）不重复；本窗口的 Runway × Claude Motion 是另一条。

## 排除

政治与执法宣传、体育节目、音乐与动画发行、代币 / NFT / 交易所社区层（PairIt、HEROES、Quip Points、ChainGPT Pad、Agent Desk、PulseGrid、Tokkers、LinqKit）、纯游戏（HoloCozy、Civica、Prospice、Dandelion Void、levelsio 浏览器 DOOM / Urban Terror）、播客、恶搞片（Joma 的 ChatGPT for Dishwashing）、Jetson 教程、Canva 分镜使用提示，以及阅读量低于 500 的帖子（含 TeaserKit 约 355、BlitzRecorder 约 154）。
