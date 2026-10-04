# 2026-10-04 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / now live / open source / plugin / MCP / agent / macOS app 等，并覆盖 GitHub、Supabase、Replit、Higgsfield 等 watchlist 账号。时间范围：2026-10-03 13:16 UTC（10-03 文档截止）至 2026-10-04 13:17 UTC（约 CDT 08:17 / CST 21:17）；补 10-03 上午未入队条目。不重复 09-30 / 10-01 / 10-03 已入队条目（含 MyGo、AgentCraft、Auday、Codex Mobile Dev）。已排除阅读量少于 500 的帖子，以及政治、纯娱乐、体育、音乐发行、加密货币代币 / NFT、纯游戏剧情与无关教程。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-04-zh-summary.md
```

---

## 1. Dialkit macOS — 开源参数面板

- **作者**：@mikelikesdesign（Head of Product Design @heyjasperai）
- **时间**：2026-10-04 00:19 UTC
- **视频**：约 29 秒
- **亮点**：Just shipped Dialkit macOS。基于 @joshpuckett Dialkit web 的开源 fork，作者做完 Dialkit iOS 后补的桌面端。产品设计工具首发短片，收藏明显高于赞。仓库 https://github.com/mikelikesdesign/dialkit-macos 本窗口收藏比最高的 indie 设计工具片。
- **互动**：约 253 赞、5 转发、4 引用、13 回复、374 收藏、2.3 万+浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/mikelikesdesign/status/2106539767039189269
- **tweetId**：2106539767039189269

---

## 2. EditDatVid — 浏览器本地视频编辑

- **作者**：@cneuralnetwork
- **时间**：2026-10-04 10:32 UTC
- **视频**：约 25 秒
- **亮点**：Launching EditDatVid。完全浏览器内、本地跑的开源视频编辑器，不上传素材。https://github.com/cneuralnetwork/editdatvid 今日上午最清晰的 indie 创作工具首发片。
- **互动**：约 131 赞、5 转发、13 回复、79 收藏、5900+浏览
- **分类建议**：motion / developer-tools
- **链接**：https://x.com/cneuralnetwork/status/2106693877889732623
- **tweetId**：2106693877889732623

---

## 3. GitHub Copilot app — diff / 终端 / 浏览器并排

- **作者**：@github
- **时间**：2026-10-03 18:05 UTC
- **视频**：约 175 秒
- **亮点**：watchlist 账号能力片。审 agent 代码通常要切标签；Copilot app 把 diff、终端和浏览器并排，用来检查、运行和预览。博客标题是 beginners guide，更像已有产品的演示而不是新入口，建议与官方发布记对照后再入库。https://github.blog/ai-and-ml/github-copilot/github-copilot-app-for-beginners-using-the-diff-terminal-and-browser/
- **互动**：约 224 赞、22 转发、10 引用、31 回复、62 收藏、7.7 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/github/status/2106445557535220101
- **tweetId**：2106445557535220101

---

## 4. Higgsfield Creator Partnership

- **作者**：@higgsfield
- **时间**：2026-10-03 17:09 UTC
- **视频**：约 50 秒
- **亮点**：Introducing the Higgsfield Creator Partnership Program。月度套餐、额外积分、新模型早鸟、伙伴社区与联盟收益。与 10-03 文档的 AI Influencer 不是同一产品入口，是创作者计划首发片。
- **互动**：约 911 赞、135 转发、62 引用、163 回复、482 收藏、9.5 万+浏览
- **分类建议**：ai / motion
- **链接**：https://x.com/higgsfield/status/2106431413373616254
- **tweetId**：2106431413373616254

---

## 5. FileTask — Figma 文件内待办插件

- **作者**：@thetimileyin
- **时间**：2026-10-03 15:17 UTC
- **视频**：约 91 秒
- **亮点**：FileTask 已上 Figma Community。待办清单住在文件里：加任务、勾选、接着上次的进度。产品设计工作流插件首发长片。https://www.figma.com/community/plugin/1687517364124566645/filetask-to-do-list
- **互动**：约 139 赞、14 转发、1 引用、2 回复、44 收藏、3000+浏览
- **分类建议**：design / productivity
- **链接**：https://x.com/thetimileyin/status/2106403336136122597
- **tweetId**：2106403336136122597

---

## 6. Empryo 3.9 — 手机遥控编码 agent

- **作者**：@BniWael
- **时间**：2026-10-03 22:21 UTC
- **视频**：约 206 秒
- **亮点**：Introducing Empryo for iPhone、iPad 和 Apple Watch。编码 agent 继续在电脑上跑，从口袋里驾驶：同一 Wi-Fi、Tailscale 或任意位置，端到端加密。3.9 还包括关窗后引擎继续跑、worktree 标签、实时语音、GPT-6 Astra 的 ultrafast 档、WSL。https://empryo.com 与 10-03 的 Conductor Mobile 是不同产品。
- **互动**：约 37 赞、4 转发、2 引用、16 回复、25 收藏、2300+浏览
- **分类建议**：ai / developer-tools / consumer
- **链接**：https://x.com/BniWael/status/2106510026105893226
- **tweetId**：2106510026105893226

---

## 7. Didit Events — 身份核验活动应用

- **作者**：@albertorosasg（@didit，YC W26）
- **时间**：2026-10-03 17:58 UTC
- **视频**：约 50 秒
- **亮点**：开源 Didit Events，定位类 Luma 的活动应用：申请加入时自拍验人，主办审批，入场相机识别签到，无票、无二维码，主办看不到自拍。活体检测、设备与 IP 信号、重复人脸、黑名单跑在 Didit 上。作者称 24 小时做完。
- **互动**：约 37 赞、5 转发、6 回复、3 收藏、1500+浏览
- **分类建议**：consumer / developer-tools
- **链接**：https://x.com/albertorosasg/status/2106443792098131991
- **tweetId**：2106443792098131991

---

## 8. Ody — 口袋里的视频剪辑 agent

- **作者**：@_kaitodev（@joinodysser）
- **时间**：2026-10-03 18:28 UTC
- **视频**：约 88 秒
- **亮点**：introducing Ody。视频剪辑 agent 可以看自己剪的片、迭代、搜素材，并按使用学习剪辑风格。App Store：https://apps.apple.com/us/app/ody-ai-video-editing-agent/id6789638925 阅读刚过 500，但是完整产品 demo。
- **互动**：约 34 赞、1 转发、2 回复、827 浏览
- **分类建议**：ai / motion / consumer
- **链接**：https://x.com/_kaitodev/status/2106451316197433571
- **tweetId**：2106451316197433571

---

## 9. dotstore — 网站 / agent 应用目录

- **作者**：@voidyaps
- **时间**：2026-10-03 10:19 UTC
- **视频**：约 38 秒
- **亮点**：Introducing https://www.dotstore.io/ 。定位是 web app、SaaS、agent、API 的「app store」。Launch week 从 10 月 5 日开始，目前是上架邀请而不是功能发布会。原 10-03 早扫未收录。
- **互动**：约 152 赞、16 转发、8 引用、47 回复、112 收藏、2.3 万+浏览
- **分类建议**：developer-tools / consumer
- **链接**：https://x.com/voidyaps/status/2106328172883317056
- **tweetId**：2106328172883317056

---

## 10. Releases — 跟踪自己发出应用的 Mac app

- **作者**：@flaviocopes
- **时间**：2026-10-03 00:08 UTC
- **视频**：约 287 秒
- **亮点**：免费开源 Mac 应用，跟踪作者发出的每个应用。https://flaviocopes.com/releases/ 落在 10-03 文档窗口内但未入队，本次补上。
- **互动**：约 32 赞、2 转发、1 回复、20 收藏、3400+浏览
- **分类建议**：developer-tools / consumer
- **链接**：https://x.com/flaviocopes/status/2106174390564159515
- **tweetId**：2106174390564159515

---

## 11. 其他高信号 / 跟进

- **Claude Code 2.1.289**（@ClaudeCodeLog，约 42 秒，2.8 万+浏览）：非官方 changelog。teammate 可经 agent.spawn 拉起共享 agent；用户插件不再覆盖组织管理的 MCP 登录文案；读拒绝规则覆盖 @ 提及的文件。能力变更，不是官方产品片。https://x.com/ClaudeCodeLog/status/2106525277618635228
- **NVIDIA skills 目录讲解**（@tsukiema_，约 18 秒，1400+浏览）：非官方片。`npx skills add nvidia/skills --list`，技能包含 SKILL.md、skill-card 与签名。教程而非首发。https://x.com/tsukiema_/status/2106425565402091575
- **OpenShell 讲解**（@aikonect_，约 329 秒，7800+浏览）：称 NVIDIA 开源 agent 沙箱。二创解读，不是官方账号片。https://x.com/aikonect_/status/2106682558310130161
- **Supabase Select 26**（@supabase）：黑客松现场，Fizz 获冠军。活动花絮，不是产品首发。https://x.com/supabase/status/2106581376086728767

## 排除

政治、体育、音乐发行、代币 / NFT、纯游戏剧情、二创广告模板、无关教程，以及阅读量低于 500 的帖子。加密发币板与链上支付片（SPLICE、Spare Card、Attention Agents、Collective Minds、AgentMint、GalaSwap）不入队。LuxAlgo Edge Stats 是交易统计引擎，按金融工具排除。Amjad 的 Replit Drift 是车辆漂移花絮，不是产品片。
