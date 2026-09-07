# 2026-09-07 产品发布视频发现（Grok 深度查询）

使用 Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch），聚焦产品设计、科技公司、AI 公司、或个人开发者发布的**带视频**产品发布/上线相关帖子。时间范围：2026-09-05 晚至 2026-09-07 上午（CST），与 `discoveries/2026-09-06-product-launch-videos.md` 互补。

筛选标准：真实产品/功能正式发布或刚上线，附带演示/介绍视频，优先高互动、官方或独立开发者账号。排除纯作品集、体育、娱乐、代币炒作、政治活动、成人硬件预告。周末流量偏低，本轮以独立开发者开源工具 + 硬件官方预热片 + 漏收的高互动发布为主。

可直接用 `node scripts/rebuild-inbox.mjs --from discoveries/2026-09-07-product-launch-videos.md` 重建 inbox 候选。

---

## 1. Huawei Mate XT 2 + HarmonyOS 7 — 三折叠旗舰发布会预热片（硬件）

- **作者**：Huawei (@Huawei)
- **推文**：https://x.com/Huawei/status/2096445653325115562
- **发布时间**：2026-09-06 03:49 UTC
- **视频时长**：约 7 秒
- **互动**：614 likes / 62 reposts / 15 quotes / 46 bookmarks / 99.4 万+ views
- **产品**：HUAWEI Mate XT 2 | ULTIMATE DESIGN + HarmonyOS 7
- **中文总结**：华为官方宣布将推出新一代三折叠 Mate XT 2（ULTIMATE DESIGN）并搭载 HarmonyOS 7，同步预告 9 月 7 日 02:45（GMT-4）全场景产品发布会直播。官方 7 秒片浏览量接近百万，是本窗口内互动最高的硬件发布预热片。建议以官方账号此条入库，第三方搬运片一律跳过。

---

## 2. Orbkit — 30+ 开源 WebGL Agent 状态光球组件（设计 / 开发者工具）

- **作者**：shawn. (@zzzzshawn)
- **推文**：https://x.com/zzzzshawn/status/2096548536972370319
- **发布时间**：2026-09-06 10:38 UTC
- **视频时长**：约 80 秒
- **互动**：379 likes / 18 reposts / 3 quotes / 461 bookmarks / 1.9 万+ views
- **产品**：Orbkit
- **中文总结**：独立设计工程师发布 Orbkit：30+ 免费开源 WebGL shader orb，面向 AI / 语音 Agent 的 idle / thinking / speaking 状态，基于 React + TypeScript + shadcn，可安装或直接拷代码。演示站 https://orbkit.zzzzshawn.cloud/ 。约 80 秒片把组件库做成产品发布，收藏远高于点赞，是本轮设计工具方向的高信号条目。备注：shader 原作者 @XorDev 指出其作品为非商用+署名许可，并非完全开源。

---

## 3. mobilecode — 开源移动端 OpenCode：会话旁嵌 iOS/Android 模拟器（开发者工具 / AI）

- **作者**：Rob Sandhu (@robsandhu)
- **推文**：https://x.com/robsandhu/status/2096264690578108868
- **发布时间**：2026-09-05 15:50 UTC
- **视频时长**：约 34 秒
- **互动**：418 likes / 34 reposts / 1 quote / 501 bookmarks / 2.4 万+ views
- **产品**：mobilecode
- **中文总结**：开源 mobilecode：OpenCode 的移动端 fork，在 AI 编程会话旁嵌入实时 iOS Simulator 与 Android 模拟器，底层用作者的 serve-avd 与 @Baconbrix 的 serve-sim。仓库 https://github.com/hsandhu/mobilecode 。09-06 文档漏收，本轮补入。收藏比极高，是把「Agent 写移动端 + 立刻在模拟器里看」做成产品的清晰发布。

---

## 4. VEED OpenEdit — 给 Claude 用的开源动态图形编辑器（AI / 设计）

- **作者**：VEED (@veedstudio)
- **推文**：https://x.com/veedstudio/status/2096584307020304840
- **发布时间**：2026-09-06 13:00 UTC
- **视频时长**：约 25 秒
- **互动**：53 likes / 10 reposts / 39 bookmarks / 2700+ views
- **产品**：VEED OpenEdit
- **中文总结**：VEED 正式介绍 OpenEdit：面向 Claude 的开源编辑器，一条 prompt 生成动态图形、字幕与 hook。发布片自称也由 OpenEdit 生成。仓库 https://github.com/veedstudio/open-edit 。8 月 29 日已有 Windows 版短片，本条是 9 月 6 日完整产品介绍片，适合作为 OpenEdit 的主入库条目。

---

## 5. open-media / 3D Shot Composer — AI 电影分镜参考工具开源并上线 MCP（AI / 创意工具）

- **作者**：Anu Anuja (@Anujatk14)
- **推文**：https://x.com/Anujatk14/status/2096628315700564293
- **发布时间**：2026-09-06 15:55 UTC
- **视频时长**：约 5 秒（本条）+ 约 132 秒（9 月 4 日主发布片 https://x.com/Anujatk14/status/2095962368048279801）
- **互动**：145 likes / 19 reposts / 218 bookmarks / 1.4 万+ views（本条）；主发布片 32 likes / 54 bookmarks
- **产品**：3D Shot Composer / open-media
- **中文总结**：独立开发者把 3D Shot Composer 做成完全开源并上线 MCP：450+ 镜头组合（机位、角度、FOV、运动、姿态），给图像模型当分镜参考，不必学 Blender。Agent（Claude Code / Codex）可直接按 MCP 搭场景或在其上加功能。仓库 https://github.com/Anujatk1999/open-media 。入库优先用 9 月 4 日约 132 秒主发布片，本条作为「开源 + MCP」节点。

---

## 6. Grok Bot Marketplace — SpaceXAI 上线 Bot 模板市场（AI / 生产力）

- **作者**：Sawyer Merritt (@SawyerMerritt)
- **推文**：https://x.com/SawyerMerritt/status/2095961467359006822
- **发布时间**：2026-09-04 19:45 UTC
- **视频时长**：约 16 秒
- **互动**：1292 likes / 112 reposts / 9 quotes / 676 bookmarks / 9.5 万+ views
- **产品**：Grok Bot template marketplace
- **中文总结**：SpaceXAI 上线 Grok Bot 模板市场，分类覆盖工程、销售、产品、运营、财务、设计等，地址 https://x.ai/bot/marketplace/personal 。本条是窗口内互动最高的市场发布片之一，09-06 文档未收。官方账号未发同款片，以本条高互动报道片入库。注意：大量二创解说片（Haggle Bot 省 10 万美元等）为同一产品的二次包装，不要重复入队。

---

## 7. YEEZY ARCHIVE — 2015–2026 全系列归档站上线（消费 / 设计目录）

- **作者**：crave (@yzycrave)
- **推文**：https://x.com/yzycrave/status/2096739955657654745
- **发布时间**：2026-09-06 23:18 UTC
- **视频时长**：约 70 秒
- **互动**：229 likes / 21 reposts / 2 quotes / 104 bookmarks / 1.1 万+ views
- **产品**：YEEZY ARCHIVE
- **中文总结**：独立站上线 YEEZY ARCHIVE：把 2015–2026 全部 YEEZY 单品收进一个可浏览目录，现已 live：https://yeezyarchive.net 。约 70 秒介绍片完成度高。属性更接近时尚档案站而非科技产品，是否入库由编辑决定；若收，归 `consumer` 或 `other`。

---

## 8. x402 Datasets — 按需生成 LLM 微调数据集（AI / 开发者工具）

- **作者**：BNN (@BNNBags)
- **推文**：https://x.com/BNNBags/status/2095963260407152884
- **发布时间**：2026-09-04 19:52 UTC
- **视频时长**：约 41 秒
- **互动**：27 likes / 6 reposts / 1 quote / 2 bookmarks / 1700+ views
- **产品**：x402 Layer Datasets / SGL LLM Training Lab
- **中文总结**：@x402_Layer 上线 Datasets：SGL LLM Training Lab 的第一个产品。给 prompt 即可生成合成训练数据，人类或 AI Agent（经 x402）都能调用，可选 SGL 私有去中心化网格上的开源模型或前沿闭源模型，已在 Singularity Cloud Network 上线。09-06 文档漏收。互动一般，但产品边界清楚；建议人工确认是否为真实可用产品后再入库。

---

## 备注

- 全部来自 Grok 内置 X 搜索，未使用任何外部 API 或 X 付费接口。
- 本轮补入 09-06 漏收：mobilecode、Grok Bot Marketplace、3D Shot Composer / open-media、x402 Datasets。
- 已跳过：09-06 已收录的 Grok Imagine Video 1.5、GitHub Copilot × Astra、Higgsfield 3D Jutsu、Notion MCP、Runway Team Plan、Replit MCP、Framer Agent、Omapager、glyphkit、Docs7、Context7 等。
- 已过滤：体育/娱乐/纪录片/音乐节、纯代币与 memecoin、政治竞选、成人/陪伴机器人预告（Somnia Model L）、纯作品集 reel、Framer 作品秀、GitHub 开源 AAC 项目 Cboard 介绍（非 GitHub 产品发布）、Deck（仍是 launching soon）、Quota（代币绑定推理币）、二创 Grok Bot 解说片。
- 建议人工审核后合并到 `src/data/videos.json`，或运行 `node scripts/rebuild-inbox.mjs --from discoveries/2026-09-07-product-launch-videos.md`。
- 日期：2026-09-07（查询当日，覆盖 09-05 下午至 09-07 上午 CST）。
