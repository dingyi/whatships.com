# 2026-10-14 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索（x_keyword_search / x_semantic_search / x_thread_fetch）。窗口：2026-10-12 至 2026-10-14 09:15 CST（约 UTC 10-12 00:00 至 10-14 01:15）。与前序文档互补，不重复已合入条目。排除阅读 < 500，以及政治、娱乐、体育、音乐、代币 / NFT、纯游戏与无关教程。不改 `src/data/videos.json` 或 `inbox.json`。

GitHub code search（`repo:dingyi/whatships.com`）未命中下列 tweetId。以仓库搜索未命中且未出现在已合入的 discovery 文档为准。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-10-14-zh-summary.md
```

---

## 1. Gemini 4 Argon 在 Gemini App 与 Antigravity 集成

- **作者**：@GeminiApp（Google）
- **时间**：2026-10-13 16:08 UTC
- **视频**：约 7 秒
- **亮点**：Gemini 4 Argon 正在 Gemini App 全球推出（Pro/Ultra 订阅者）。编码能力大幅提升，Google Antigravity 的 agentic coding 界面现可直接在 macOS Gemini App 中切换聊天与编码。支持生成可分享 Web App、3D 文件、幻灯片与报告，并连接 40+ App。官方发布线程含多段 demo 视频。https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/
- **互动**：约 305 赞、13 转发、3 引用、5 回复、29 收藏、4.4 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/GeminiApp/status/2110039888901063072
- **tweetId**：2110039888901063072

---

## 2. Figma Make 集成 Gemini 4 Argon

- **作者**：@figma
- **时间**：2026-10-13 23:14 UTC
- **视频**：约 11 秒
- **亮点**：Gemini 4 Argon 正在 Figma Make 推出。早期测试显示适合构建交互原型、3D 视觉与游戏；创建细致 SVG 动画与现实运动效果；独立探索视觉方向；处理复杂多步编码任务。官方功能推出片。
- **互动**：约 65 赞、3 转发、9 回复、21 收藏、5500+浏览
- **分类建议**：design / ai
- **链接**：https://x.com/figma/status/2110147281647210535
- **tweetId**：2110147281647210535

---

## 3. Devin 集成 Pylon

- **作者**：@cognition
- **时间**：2026-10-13 18:01 UTC
- **视频**：约 21 秒（主片）+ 多段解释视频
- **亮点**：Introducing Devin in Pylon。加速 Median Time to Fix (MTTF)。Devin 与 Pylon 同步，客服与工程师可用同一 agent 从 bug 报告协作到 PR 合并修复。新客户 $15,000 credits。官方集成发布片。https://devin.ai/integrations/pylon
- **互动**：约 173 赞、22 转发、9 引用、11 回复、36 收藏、1.7 万+浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/cognition/status/2110068304383725720
- **tweetId**：2110068304383725720

---

## 4. TasteSkill v2

- **作者**：@LexnLin（个人开发者）
- **时间**：2026-10-13 21:34 UTC
- **视频**：约 64 秒
- **亮点**：从零重建 TasteSkill，发布 v2。给 coding agent 提供艺术方向、资产与浏览器验证以确认工作。读 brief 、选择方向、获取真实图片/地图等资产并信用，再在浏览器中打开页面验证并修复 slop。`npx skills add Leonxlnx/taste-skill`。发布视频本身也用 Cinetic + Opus 5.5 制作。https://github.com/Leonxlnx/taste-skill
- **互动**：约 706 赞、27 转发、8 引用、36 回复、806 收藏、2.0 万+浏览
- **分类建议**：ai / developer-tools / design
- **链接**：https://x.com/LexnLin/status/2110122106537050584
- **tweetId**：2110122106537050584

---

## 5. diffr 结构化 Diff 库

- **作者**：@sidharthkmenon（个人开发者）
- **时间**：2026-10-13 21:12 UTC
- **视频**：约 113 秒
- **亮点**：Introducing diffr，Rust & WASM 基础的美丽结构化 diff 库。可作为 Claude Code mod、TUI 以及纯客户端网站（全跑在 WASM）。开源。长 demo 视频展示效果。https://diffr.fast/ https://dev.fast/blog/diffr/
- **互动**：约 62 赞、3 转发、3 引用、16 回复、34 收藏、8400+浏览
- **分类建议**：developer-tools
- **链接**：https://x.com/sidharthkmenon/status/2110116575399551202
- **tweetId**：2110116575399551202

---

## 6. Replit 多项目从新聊天启动

- **作者**：@Replit
- **时间**：2026-10-13 21:00 UTC
- **视频**：约 13 秒
- **亮点**：Replit Agent 现可从新聊天直接找到并工作于现有项目，无需先打开项目。说“给我的项目加搜索”即可，Agent 用项目文件与上下文作为后台任务运行编辑。同一聊天可跨多个项目更新定价、设计风格等。功能推出片。
- **互动**：约 17 赞、2 转发、4 回复、3 收藏、2900+浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/Replit/status/2110113354899660944
- **tweetId**：2110113354899660944

---

## 7. ana kate 周期与孕期跟踪 App

- **作者**：@conservmillen
- **时间**：2026-10-14 00:38 UTC
- **视频**：约 168 秒
- **亮点**：发布 ana kate，面向基督徒女性的周期与孕期跟踪 App。从经期到产后，提供科学基础且根植于圣经的身体与孕期洞察。构建近两年，现开放等待列表。产品发布视频。
- **互动**：约 65 赞、6 转发、1 引用、7 回复、4 收藏、4600+浏览
- **分类建议**：consumer
- **链接**：https://x.com/conservmillen/status/2110168251711779183
- **tweetId**：2110168251711779183

---

## 8. Gojiberry AI GTM Feedback Loop

- **作者**：@gojiberryai
- **时间**：2026-10-13 19:00 UTC
- **视频**：约 64 秒
- **亮点**：发布 GTM feedback loop。从结果、消息、目标与跨千次活动学习，自动适配下一步行动。无需盲目跟进或猜测什么有效，用真实数据驱动更智能活动。一个活动学习，全部活动更智能。产品更新视频。
- **互动**：约 28 赞、5 转发、4 引用、6 回复、22 收藏、3800+浏览
- **分类建议**：ai / productivity
- **链接**：https://x.com/gojiberryai/status/2110083256553279831
- **tweetId**：2110083256553279831

---

## 9. Montage Agent Skill

- **作者**：@swaglord__420
- **时间**：2026-10-13 19:50 UTC
- **视频**：约 59 秒
- **亮点**：Introducing montage! 一个 agent skill，用于把你与朋友的照片与视频拼接成 mp4。描述氛围并指向素材堆，agent 排序、选择动作镜头、丢弃噪声与重复，交出视频。支持 Live Photos、Google Photos 导出等。可适配节奏并导出到 CapCut 等。
- **互动**：约 25 赞、1 回复、8 收藏、880+浏览
- **分类建议**：ai / productivity / consumer
- **链接**：https://x.com/swaglord__420/status/2110095975620702386
- **tweetId**：2110095975620702386

---

## 10. bInference 设备端私密 AI 聊天

- **作者**：@getbinference
- **时间**：2026-10-13 20:35 UTC
- **视频**：约 36 秒
- **亮点**：AI 聊天现仅存在你的设备上。用 passkey 加密锁定，服务器无副本。可导出为单一封闭文件，或用 QR 代码从手机迁移到笔记本。支持 250+ 模型（提供商不保留数据）。可查看每一个请求。产品发布视频。
- **互动**：约 40 赞、11 转发、1 引用、2 回复、1 收藏、1100+浏览
- **分类建议**：ai / consumer
- **链接**：https://x.com/getbinference/status/2110107180150202803
- **tweetId**：2110107180150202803

---

## 跟进，不单独入队

- Nebius Hark Pro 现已上线（实时 AI 推理）：更像公司宣传片而非深度产品 demo。
- MotorMind 零样本机器人操控：更偏研究论文与实验演示。
- PBS PS5 Broadcast Stream：硬件级 payload，非主流产品发布。

## 已入队，不重复

前序文档中的 Claude Dashboards、Codex Composer、Pine Computer、Maritime 等。

## 排除

代币 / NFT / memecoin 发布、纯游戏 demo、政治与军事宣传、体育、低阅读量帖子（<500），以及无关教程与娱乐内容。
