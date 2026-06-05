# Avis 系统迭代路线图

> **编制日期**：2026-06-06  
> **基于**：E:\Avis-System\web\ 全量扫描 + 关键文件深度审查  
> **扫描范围**：86 个非依赖 .md 文件、7 个 public/ 资源、Vitepress 配置  

---

## 扫描统计速览

| 维度 | 数据 |
|------|------|
| 非 node_modules .md 文件 | **86 个** |
| 根级页面 | 7（index / about / architecture / changelog / contributing / glossary / knowledge-graph） |
| 编索引页 | 7（part1~6 + appendix） |
| 章节文件 | 64（part1:5 / part2:24 / part3:8 / part4:17 / part5:8 / part6:2） |
| 附录文件 | 5（A~E） |
| public/ 资源 | 7（logo.svg + css + knowledge-network.html x4 + json） |

---

## 一、已完成项

| # | 项目 | 交付物 | 状态 |
|---|------|--------|------|
| 1 | VitePress 静态站点搭建 | `config.mjs` + 主题 + 构建流水线 | 已完成 |
| 2 | 六编侧边栏导航 | `config.mjs` sidebar 配置覆盖 58 个章节链接 | 已完成 |
| 3 | 全文搜索（MiniSearch） | VitePress 内置本地搜索 + 中文界面 | 已完成 |
| 4 | MathJax 3 数学公式渲染 | `markdown.math: true` + markdown-it-mathjax3 | 已完成 |
| 5 | 响应式设计 | VitePress 默认主题自适应 | 已完成 |
| 6 | 知识图谱页（Mermaid 六维图谱） | `knowledge-graph.md`（569行，分类学/网络/对比/故障/标准/材料） | 已完成 |
| 7 | CI/CD 工作流 | `.github/workflows/deploy.yml` + peaceiris/actions-gh-pages | 已完成 |
| 8 | 术语词典页 | `glossary.md`（34.3 KB） | 已完成 |
| 9 | 版本历史页 | `changelog.md`（3.2 KB，V0.1→V5.0） | 已完成 |
| 10 | 贡献指南页 | `contributing.md`（4.2 KB） | 已完成 |
| 11 | 系统架构文档 | `architecture.md`（79 KB，12章节完整架构） | 已完成 |
| 12 | 附录 A~E | 设计校验清单/型号速查/材料应力/公式卡片/FMECA故障速查 | 已完成 |
| 13 | 基础 SEO 元标签 | `config.mjs` head 中 og:title/og:description/keywords | 已完成 |
| 14 | 知识网络交互页 | `public/knowledge-network.html`（D3.js 可视化） | 已完成 |

---

## 二、P0 紧急项（阻塞性问题）

### P0-1：GitHub 仓库地址全局不一致

**问题**：`config.mjs` 中 `editLink.pattern` 指向 `https://github.com/Avis8888/Avis`，但 `index.md` 和 `contributing.md` 中的链接指向 `https://github.com/avis-aerospace/avis-web`。两个仓库名不一致，会导致编辑链接 404 和社区入口混乱。

**影响**：用户点击"在 GitHub 上编辑此页"将跳转到错误仓库；贡献指引与实际仓库脱节。

**修复方案**：统一所有 GitHub URL 为实际部署仓库地址，涉及文件：
- `config.mjs` editLink.pattern
- `index.md` 底部参与共创链接
- `contributing.md` 和 `about.md`（如有引用）

**预估工时**：0.5h  
**交付物**：3 个文件修改 + 一致性验证

---

### P0-2：Part2 编索引页章节数不符

**问题**：`guide/part2-index.md` 声称"本编共21章"，但实际 `config.mjs` sidebar 中 Part2 包含 **24 个章节**（ch06~26 + ch63~66 + ch68）。航空专项章节（63-68）未被编索引统计。

**影响**：读者阅读编概述时会误判内容规模；索引页表格未列出航空专项章节入口。

**修复方案**：
1. 修正章节计数为"24章"
2. 在编索引表格中补充第63-66、68章的行项

**预估工时**：1h  
**交付物**：更新 `guide/part2-index.md`

---

### P0-3：Part4 编索引页章节数不符

**问题**：`guide/part4-index.md` 声称"本编共16章"，但实际 sidebar 包含 **17 个章节**（ch37~43 + ch45~52 + ch67 + ch69）。索引页未列出 ch67（航空阀门适航认证）和 ch69（航空阀门故障分析）。

**影响**：读者无法从编索引页发现这两个航空专项章节。

**修复方案**：
1. 修正章节计数为"17章"
2. 补充第67、69章的行项

**预估工时**：1h  
**交付物**：更新 `guide/part4-index.md`

---

### P0-4：public/ 下冗余备份文件待清理

**问题**：
- `knowledge-network_20260604_030611_370.html`（72 KB）
- `knowledge-network_20260604_033657_530.html`（58 KB）
- `knowledge-network_20260604_063932_444.html`（49 KB）

这三个是 `knowledge-network.html` 的带时间戳备份版本，总计 ~179 KB 冗余文件出现在生产部署目录中。

**影响**：Deploy 时会被打包到 dist/ 发送至 CDN，浪费带宽且暴露开发过程。

**修复方案**：删除三个备份文件，保留 `knowledge-network.html` 正式版本。

**预估工时**：0.25h  
**交付物**：清理后的 public/ 目录

---

## 三、P1 高优先级（用户体验显著提升）

### P1-1：补充章节编号缺口说明

**问题**：章节编号存在四处跳跃——ch20、ch27、ch28、ch44 缺失。虽然可能是预留编号，但没有任何文档说明原因。

**影响**：新读者可能误以为内容缺失或链接断裂。

**修复方案**：在 `architecture.md` 或根 `index.md` 中增加一段"章节编号说明"，解释预留编号的意图（如为未来内容预占、章节重组后废弃等）。

**预估工时**：0.5h  
**交付物**：一段编号说明文案

---

### P1-2：知识网络页迁移为 VitePress .md

**问题**：`knowledge-network.html` 是独立的纯 HTML 文件放在 public/ 中，不走 VitePress 模板渲染，无导航栏、无侧边栏、无搜索框，用户体验割裂。且 `config.mjs` nav 中直接链接到 `.html` 文件而非 VitePress 路由。

**影响**：用户从知识网络页返回需要浏览器后退，站点一致性被破坏。

**修复方案**：
1. 创建 `knowledge-network.md`（VitePress 页面），内嵌 D3.js 代码
2. 更新 nav 链接指向 `/knowledge-network`
3. 原 `public/knowledge-network.html` 可保留为备用或删除

**预估工时**：3h  
**交付物**：`knowledge-network.md` + config 更新

---

### P1-3：缺少 SEO 基础文件

**问题**：`public/` 下缺少 `robots.txt` 和 `sitemap.xml`。

**影响**：搜索引擎爬虫无法有效索引站点，影响 SEO 和可发现性。

**修复方案**：
- `robots.txt`：允许所有爬虫，指定 sitemap 位置
- `sitemap.xml`：列出所有页面 URL（可脚本生成）

**预估工时**：1h  
**交付物**：`public/robots.txt` + `public/sitemap.xml`

---

### P1-4：favicon 多尺寸缺失

**问题**：仅有 `logo.svg` 作为 favicon，缺少传统 `.ico` 和多尺寸 PNG 图标。部分浏览器/书签/移动端主屏幕可能无法正确显示。

**影响**：移动端添加到主屏幕时无图标。

**修复方案**：生成 32x32 / 180x180 / 192x192 / 512x512 尺寸 PNG，补充 `apple-touch-icon` 和 `manifest.json`。

**预估工时**：0.5h  
**交付物**：多尺寸图标 + manifest.json + config.mjs head 补充

---

### P1-5：Giscus 评论系统未集成

**问题**：`architecture.md` 中明确规划 Giscus 评论系统，但实际未实施。用户无法在章节页底部讨论。

**修复方案**：
1. 在 VitePress 主题中集成 Giscus 组件
2. 配置文件配置 GitHub Discussions 仓库映射

**预估工时**：2h  
**交付物**：Giscus 集成代码 + 主题更新

---

### P1-6：首页元数据过期

**问题**：`index.md` 关键数据区显示"当前版本 V5.0"、"核心章节 65"，但实际 V5.0 后已有增量（航空专项章节），且 OG description 中写"57章"，与 index.md 的"65章"矛盾。

**影响**：对外展示数据不一致，降低可信度。

**修复方案**：统一定义章节计数规则（核心章+航空专项=65+6？），更新 index.md 和 config.mjs OG description。

**预估工时**：0.5h  
**交付物**：index.md + config.mjs 更新

---

## 四、P2 中优先级（增强项）

### P2-1：缺失章节占位

**问题**：ch20、ch27、ch28、ch44 四个编号缺口无任何占位文件。Sidebar 也未列出这些编号。对于大型知识库，编号连续性有助于用户导航。

**修复方案**：
- 创建 4 个轻量占位页，标注"本章预留，规划中"及预计主题
- 在 sidebar 中以灰色/禁用样式显示或标注"(规划中)"

**预估工时**：1.5h  
**交付物**：4 个占位 .md + sidebar 配置更新

---

### P2-2：PDF 导出能力

**问题**：无章节 PDF 下载/导出功能。部分用户有离线阅读或打印需求。

**修复方案**：利用 VitePress 构建流程，在 build 后调用 Puppeteer/Playwright 自动生成 PDF，或提供"打印友好"样式。

**预估工时**：4h  
**交付物**：PDF 生成脚本 + 下载按钮

---

### P2-3：打印样式优化

**问题**：VitePress 默认主题在打印时导航栏/侧边栏仍显示，浪费纸张和墨水。

**修复方案**：在 `apple-theme.css` 中补充 `@media print` 规则，隐藏导航/侧边栏/页脚。

**预估工时**：1h  
**交付物**：打印样式 CSS

---

### P2-4：工具链脚本实现

**问题**：`architecture.md` 中规划的 `tools/scripts/stats.py`（字数/章节统计）和 `tools/scripts/lint.py`（死链/交叉引用校验）尚未实现。

**修复方案**：
- `stats.py`：遍历所有 .md，统计汉字数、表格数、公式数、图片数
- `lint.py`：基于 config.mjs sidebar 检测死链

**预估工时**：3h  
**交付物**：`tools/scripts/stats.py` + `tools/scripts/lint.py`

---

### P2-5：结构化数据标注（Schema.org）

**问题**：页面无 JSON-LD 结构化数据，搜索引擎富文本摘要（Rich Snippet）无法生成。

**修复方案**：首页添加 `WebSite` / `Book` 类型的 JSON-LD，章节页添加 `Article` / `TechArticle` 类型。

**预估工时**：1h  
**交付物**：JSON-LD 代码片段 + config/theme 集成

---

### P2-6：Dark Mode 适配验证

**问题**：VitePress 支持 dark mode，但自定义的 `apple-theme.css` 中 Mermaid 图表的颜色定义、知识图谱页的 HTML 内联样式是否在 dark mode 下可读未验证。

**修复方案**：逐一验证各页面 dark mode 效果，修复 contrast 问题。

**预估工时**：2h  
**交付物**：修复后的 CSS + 验证截图

---

## 五、P3 远期规划

### P3-1：AI 智能问答（RAG）

**描述**：基于 60 万字知识库，构建 RAG 检索增强问答，用户可用自然语言提问阀门技术问题。  
**预估工时**：40h+  
**交付物**：RAG 引擎 + API 接口 + 前端问答组件  
**依赖**：知识库内容结构化 → embedding 向量化 → LLM 接入

---

### P3-2：D3.js 交互式知识图谱升级

**描述**：当前 knowledge-network.html 为静态 HTML。升级为可拖拽、缩放、搜索的 D3 force-graph，支持节点点击跳转至对应章节。  
**预估工时**：20h  
**交付物**：交互式知识图谱组件

---

### P3-3：多语言国际化

**描述**：英文版核心章节翻译（AI 初译 + 专家审校），VitePress 国际化路由（`/en/`）。  
**预估工时**：80h+  
**交付物**：英文版 20+ 核心章节 + i18n 配置

---

### P3-4：在线 RFC 提案系统

**描述**：基于 GitHub Issues + 自定义表单的 RFC 在线提交流程，内嵌至站点。  
**预估工时**：15h  
**交付物**：RFC 表单页面 + GitHub API 集成

---

### P3-5：版本 Diff 对比视图

**描述**：任意两个版本间的章节内容 Diff 高亮展示。  
**预估工时**：10h  
**交付物**：Diff 对比页面组件

---

### P3-6：贡献者网络图

**描述**：基于 Git 提交统计的可视化贡献者协作网络。  
**预估工时**：8h  
**交付物**：D3.js 贡献者图谱

---

### P3-7：数字孪生集成

**描述**：与仿真工具对接，将阀门数字孪生数据嵌入知识库。  
**预估工时**：待评估  
**交付物**：接口标准 + 示例集成

---

## 六、工时汇总

| 优先级 | 项目数 | 预估总工时 |
|--------|--------|-----------|
| P0 紧急 | 4 | **2.75h** |
| P1 高优 | 6 | **7.5h** |
| P2 中等 | 6 | **12.5h** |
| P3 远期 | 7 | **173h+** |
| **合计** | **23** | **~196h** |

---

## 七、建议执行顺序

```
Week 1:  P0-1 → P0-2 → P0-3 → P0-4  (修复阻塞性问题，2.75h)
Week 2:  P1-6 → P1-1 → P1-4  (数据一致性 + SEO基础，1.5h)
Week 3:  P1-2 → P1-3  (知识网络迁移 + sitemap，4h)
Week 4:  P1-5  (Giscus集成，2h)
Month 2: P2-4 → P2-1 → P2-3 → P2-5 → P2-6 → P2-2  (工具链 + 增强，12.5h)
Month 3+: P3 各项按需启动
```

---

> **编制者**：File Agent 自动扫描分析  
> **下一步**：请确认优先级排序，或针对特定条目发起执行
