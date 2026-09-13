# 2026-09-13 产品发布视频发现汇总（Grok X 深度搜索）

使用 Grok 内置 X 搜索功能（x_keyword_search / x_semantic_search / x_thread_fetch），针对产品设计、科技公司、AI 公司及个人开发者发布的带视频帖子进行深度查询。筛选关键词包括 Introducing / just shipped / now live / plugin / MCP / agent / App Store 等，并覆盖 watchlist 账号与高互动独立开发者。时间范围：2026-09-12 上午至 2026-09-13 上午 CST。已排除政治、纯娱乐、体育、音乐发行、加密货币代币/NFT、纯游戏与无关教程。与 09-12 已发现文档互补，不重复已入队条目。

审核后可运行：

```bash
node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-13-zh-summary.md
```

详细条目见 `discoveries/2026-09-13-product-launch-videos.md`。

---

## 1. Spectrum UI SVG Charts — 一条 CLI 命令加动画图表

- **作者**：@arihantCodes
- **时间**：2026-09-12 14:42 UTC
- **视频**：约 72 秒
- **亮点**：Introducing SVG Charts。Spectrum UI（Vercel 支持）开源发布一套极简、可动画的 React 图表组件，一条 CLI 命令写进应用。官方约 72 秒演示把组件质感与安装路径讲清楚。
- **互动**：约 116 赞、165 收藏、6800+ 浏览
- **分类建议**：design / developer-tools
- **链接**：https://x.com/arihantCodes/status/2098784334383915025

---

## 2. Higgsfield × ChatGPT Astra — 动效设计师的 Cursor

- **作者**：@higgsfield_ai
- **时间**：2026-09-12 17:24 UTC（主帖）
- **视频**：约 20 秒（主帖）+多段能力演示
- **亮点**：官方称 Higgsfield 的 ChatGPT 插件 + GPT-6 Astra「像 Cursor，但是给动效设计师」。同日还发了 After Effects 视差 / 拍机解算与 CG 合成、Illustrator 失量向量化、Marvelous Designer 服装模拟等演示。是 09-12 文档中 Higgsfield Motion Designer 的继续能力发布片。
- **互动**：主帖约 195 赞、92 收藏、2 万+ 浏览
- **分类建议**：ai / design / motion
- **链接**：https://x.com/higgsfield_ai/status/2098824969124004135

---

## 3. supermemory Console — Agent 记忆控制台改版

- **作者**：@supermemory
- **时间**：2026-09-12 19:20 UTC
- **视频**：约 28 秒
- **亮点**：Introducing the new supermemory console。重做设计与 UX，并加新功能。官方短片展示新控制台界面，是 agent 记忆基础设施的清晰产品面更新。
- **互动**：约 71 赞、44 收藏、7400+ 浏览
- **分类建议**：ai / developer-tools / design
- **链接**：https://x.com/supermemory/status/2098854167670616328

---

## 4. HumanLayer 多人协作 Prompt — 团队共编一条指令

- **作者**：@dexhorthy（HumanLayer）
- **时间**：2026-09-12 23:09 UTC
- **视频**：约 74 秒
- **亮点**：coming soon：live multiplayer prompting。团队可以共编同一条 prompt；不要求云端 agent，笔记本 / Mac mini / 云端与 GitHub Actions 一次性会话都能用。建在 durable streams 与 Rivet actors 上。之前已上线计划的 Google Docs 式评论与实时 diff 流。小团队免费。
- **互动**：约 28 赞、15 收藏、1700+ 浏览
- **分类建议**：ai / developer-tools / productivity
- **链接**：https://x.com/dexhorthy/status/2098912016987730059

---

## 5. Capx Casa — Agent 公司的开源控制面

- **作者**：@0xCapx
- **时间**：2026-09-12 13:00 UTC
- **视频**：约 30 秒
- **亮点**：Introducing Capx Casa。把公司上下文变成可排序的运营计划，路由给专家 operator，审查产出并在人类控制下保持「公司大脑」。开源免费，跑在 Claude Code / Codex / Grok Build / Cursor / OpenCode 等已有 CLI 里。记忆落在 Markdown / JSON / JSONL，不住在一次 context window。
- **互动**：约 60 赞、16 转发、15 收藏、3400+ 浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/0xCapx/status/2098758531059188031

---

## 6. LaunchReel — 几分钟生成产品发布视频

- **作者**：@TTrimoreau
- **时间**：2026-09-12 12:18 UTC
- **视频**：约 85 秒
- **亮点**：Introducing LaunchReel.so。用一句话把产品变成专业发布片，去掉代理公司与剪辑师的高主预成本。官方账号 @launchreel0 同日还发了「一句话 → 约 30 秒出 5 条广告」的故事片。
- **互动**：约 34 赞、17 收藏、2500+ 浏览
- **分类建议**：ai / design / motion / productivity
- **链接**：https://x.com/TTrimoreau/status/2098748105285853190

---

## 7. しゃべろぐ / Shabelog — 记录孩子话语的育儿 App

- **作者**：@Moon_Lab5
- **时间**：2026-09-12 09:00 UTC（日文主帖）
- **视频**：约 14 秒
- **亮点**：独立开发者正式发布「しゃべろぐ」：记录与分享孩子说过的话。基本功能免费，浏览器版累计约 1900 人。同日补发英文版发布帖。是典型高互动的消费级 indie App 上架片。
- **互动**：日文主帖约 587 赞、119 转发、314 收藏、6.4 万+ 浏览
- **分类建议**：consumer
- **链接**：https://x.com/Moon_Lab5/status/2098698186164756798

---

## 8. TypeUI Methodical — 给 AI 用的转化导向设计 skill

- **作者**：@typeui_sh
- **时间**：2026-09-12 10:59 UTC
- **视频**：约 29 秒
- **亮点**：Introducing a new design skill: Methodical。把大色块、干净间距的设计系统交给 AI provider 生成站点，强调转化。官方视频展示生成结果与版式语言。
- **互动**：约 34 赞、50 收藏、2900+ 浏览
- **分类建议**：design / ai
- **链接**：https://x.com/typeui_sh/status/2098728093883965781

---

## 9. Shottr MCP — Agent 夜里自动拍产品截图

- **作者**：@dipxsyy
- **时间**：2026-09-12 20:48 UTC
- **视频**：约 27 秒
- **亮点**：Introducing Shottr MCP。Agent 可以在你睡觉时给产品拍截图并做成质感图。开源仓库在 GitHub：DeepanshuMishraa/shottr-mcp。
- **互动**：约 13 赞、9 收藏、1200+ 浏览
- **分类建议**：design / developer-tools / ai
- **链接**：https://x.com/dipxsyy/status/2098876411893436713

---

## 10. Agnost — 捕捉 Agent 越界与产生幻觉

- **作者**：@StackDhruv
- **时间**：2026-09-12 13:52 UTC
- **视频**：约 43 秒
- **亮点**：Introducing Agnost。把生产环境里的 agent 接进去，定义规则，找到违规到具体消息，再用 Auto-improve 把重复失败变成修复。称已与 Google、Exa、Supermemory、Lindy 等团队合作。
- **互动**：约 18 赞、960+ 浏览
- **分类建议**：ai / developer-tools
- **链接**：https://x.com/StackDhruv/status/2098771636929658899

---

## 11. SpareDisk — 更快的 Diskbuddy 替代

- **作者**：@0xdevrel
- **时间**：2026-09-12 10:28 UTC
- **视频**：约 102 秒
- **亮点**：Introducing SpareDisk。强调速度、隐私与安全的 macOS 磁盘清理工具，Apple 沙箱 + 签证，正在审 App Store。对标 Diskbuddy 的卡顿与高内存。上线代码 SDLAUNCH，$2。近两分钟演示走完核心流程。
- **互动**：早期
- **分类建议**：productivity / consumer
- **链接**：https://x.com/0xdevrel/status/2098720288775311626

---

## 12. Luvus 0.14.1 — Agent mission control 跨本地/远程

- **作者**：@luvusdev
- **时间**：2026-09-12 10:36 UTC
- **视频**：约 1 秒标志动画 + changelog 截图（非完整演示片）
- **亮点**：just shipped 0.14.1：定时多 agent 自动化、持久多 SSH 机、本地/远程工作区并排、原生 Devin / OpenCode 2 / Kilo Code / Antigravity、全键盘操作、空间化 Mermaid、7 套新主题。视频本身极短，但是清晰的开源工具发布。
- **互动**：约 29 赞、2000+ 浏览
- **分类建议**：developer-tools / ai
- **链接**：https://x.com/luvusdev/status/2098722535936508243

---

## 13. 其他高信号 / 跟进

- **Higgsfield After Effects 视差**（@higgsfield_ai，ChatGPT 插件完成 3D 图层与拍机）：https://x.com/higgsfield_ai/status/2098852668945186863
- **Higgsfield 街拍 + 3D 模型 VFX**：https://x.com/higgsfield_ai/status/2098852559180193891
- **Higgsfield Illustrator 向量重建**：https://x.com/higgsfield_ai/status/2098832333860479485
- **Higgsfield 用对话做衣服**：https://x.com/higgsfield_ai/status/2098823660001964143
- **Filmera MCP 电影工作流**（第三方演示 Astra 连 MCP 出片，需核原帖）：https://x.com/EHuanglu/status/2098897542197239865
- **Vercel vgpu**（第三方覆盖片，agent-first WebGPU 库，非 Vercel 官方帖）：https://x.com/rammcodes/status/2098752941276766519
- **Unity Claude Code 插件**（09-11 已在传，09-12 仍有高流量覆盖片，不作新发布入队）：https://x.com/RoundtableSpace/status/2098588656554381796

## 已在 09-12 文档中出现（仅交叉引用）

fal H3 Max Camera Controls、OpenAI GPT-Rosalind、OpusClip AI Producer for ChatGPT、Builder.io /webmcp、Boski、Bland Agent Phone Plan、Notion Skills、Runway × Astra、Framer Agent hover、Screenshot Studio、Monid、Nuno AI、WebMCP Inspector、Product Hunt Astra Challenge。

## 已过滤（不入库）

- 加密货币 / 代币 / NFT / SocialFi（Signal $XMR/$ZEC、Trends App、NATION Trading、CredLens 钱包评分黑客松、3V3RYDAY P3OPL3 mint）
- 纯游戏 demo / Steam 愿望单 / OST
- 体育 / 娱乐 / 音乐发行 / 时装秀（Tommy Hilfiger、BanG Dream PV）
- 政治 / 新闻评论片
- 运动设计师招聘 reel、二创发布片模板、纯作品集
- Figma `Finals.svg`（高互动品牌短片，不是产品功能发布）
- Framer 互动站点合集（展示案例，非新功能发布）
- GitHub Universe badge 宣传
- 第三方 Grok / Claude Code 教程长视频

**搜索方法**：仅使用 Grok 内置 `x_keyword_search` / `x_semantic_search` / `x_thread_fetch`，未使用外部 X API。

**下一步**：审核本文 → `node scripts/rebuild-inbox.mjs --from docs/discovery/2026-09-13-zh-summary.md` → 本地 `/admin` 批准 → `pnpm inbox:apply` + poster capture。
