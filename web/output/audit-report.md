# Avis 知识网络页面 — 全面审计报告

> **审计日期**: 2026-06-03  
> **审计范围**: `knowledge-network.html`（1179行）、`knowledge-graph-data.json`（62节点/84边）、`config.mjs`、`index.md`  
> **审计维度**: 代码质量 / 数据完整性 / 可视化 / 响应式 / 可访问性 / SEO / 性能 / 用户体验  
> **审计方法**: 静态代码审查 + 自动化数据验证脚本

---

## 问题总览

| 严重程度 | 数量 | 说明 |
|---------|------|------|
| 致命 (Critical) | 1 | CDN依赖无回退机制 — 页面完全不可用风险 |
| 严重 (High) | 5 | 数据不一致、竞态条件、可访问性缺失 |
| 中等 (Medium) | 8 | 响应式缺失、性能、边界处理 |
| 轻微 (Low) | 6 | 代码风格、冗余数据、体验微优化 |
| **合计** | **20** | |

---

## 一、致命问题 (Critical)

### C-1: CDN 依赖无完整性校验与无回退方案

- **位置**: `knowledge-network.html` 第6行
- **代码**:
  ```html
  <script src="https://d3js.org/d3.v7.min.js"></script>
  ```
- **风险**: CDN 不可用时整个页面白屏。无 `integrity` 哈希、无 `crossorigin`、无本地 fallback。
- **影响**: D3.js CDN 历史上发生过多次中断。对于知识库这类生产环境，单点故障不可接受。
- **修复建议**:
  ```html
  <script src="https://d3js.org/d3.v7.min.js"
          integrity="sha384-..." crossorigin="anonymous"></script>
  <script>window.d3 || document.write('<script src="/lib/d3.v7.min.js"><\/script>')</script>
  ```

---

## 二、严重问题 (High)

### H-1: 边数量硬编码为 83，实际数据含 84 条边

- **位置**: `knowledge-network.html` 第401行
- **代码**:
  ```html
  <span>边 <strong class="stat-val" id="stat-edges">83</strong></span>
  ```
- **实际值**: JSON 含 84 条边（自动化脚本已验证）
- **复现**: 页面加载时 `updateDetailStats()` 按 `linkData.length` 动态更新为 84，但若 JS 失败或未执行，用户将看到错误的 83。
- **修复**: 将硬编码值改为 84，或初始不写死数字、由 JS 动态填充。

### H-2: `ch38`（项目管理）在 VitePress 侧边栏存在但 JSON 数据中缺失

- **位置对比**:
  - `config.mjs` 第121行: `{ text: '第38章 项目管理', link: '/guide/part4/chapter-38' }`
  - `knowledge-graph-data.json`: 节点列表中无 `ch38`
- **影响**: 用户在知识网络图中看不到该章节，但侧边栏导航中可以看到并点击。属于数据不同步，破坏知识体系完整性。
- **修复**: 在 JSON 的 `nodes` 数组中添加 `ch38` 节点，并在 `edges` 中建立与 `ch37`/`ch39` 等的前置关系。

### H-3: `exitClusterMode()` 存在竞态条件

- **位置**: `knowledge-network.html` 第1067-1088行
- **代码**:
  ```javascript
  function exitClusterMode() {
    if (!isClustered) return;
    isClustered = true;       // 第1071行
    // ... 启动 200ms / 300ms CSS transition ...
    isClustered = false;      // 第1083行 — 在 transition 完成前就设回 false!
    setTimeout(() => updateDetailStats(), 350);
  }
  ```
- **问题**: `isClustered = false` 在 CSS transition 结束前执行。此时 zoom 事件若连续触发，可能重新进入 `enterClusterMode()`，导致两个 transition 互相覆盖、图层闪烁、显示异常。
- **修复**: 将 `isClustered = false` 移入最后一个 transition 的 `.on('end', ...)` 回调中。

### H-4: SVG 图形完全无 ARIA 标签 — 屏幕阅读器盲区

- **位置**: `knowledge-network.html` 第809-970行（整个 SVG 构建代码）
- **问题**: 力导向图对盲人/视障用户完全不可见。`<svg>` 缺 `role="img"` + `aria-label`，节点无 `aria-label` 或 `<title>` 子元素，交互无 `role="button"`。
- **影响**: WCAG 2.1 AA 级别不达标，无法通过可访问性合规审计。
- **修复**:
  - `<svg role="img" aria-label="Avis 知识网络力导向图，62个章节节点，84条知识关联边">`
  - 每个 `<g class="node-group">` 内添加 `<title>{d.label}: {d.description}</title>`
  - 键盘导航增加 `aria-activedescendant` 模式

### H-5: 无移动端/小屏适配 — 侧边栏 320px 固定宽度

- **位置**: `knowledge-network.html` 第64行 CSS
- **代码**:
  ```css
  #sidebar { width: 320px; min-width: 320px; }
  ```
- **问题**: 在 375px 宽手机上，侧边栏占 320px，canvas 仅剩 55px。无 `@media` 查询、无折叠/汉堡菜单机制。
- **修复**: 添加响应式断点 <768px 时将侧边栏改为底部抽屉或可折叠面板，参考 `index.md` 中已有的 `flex-wrap` 思路。

---

## 三、中等问题 (Medium)

### M-1: JSON 中 `partColors` / `relationStyles` 为死数据

- **位置**: `knowledge-graph-data.json` 第168-177行
- **问题**: JSON 末尾定义了 `partColors` 和 `relationStyles`，但 HTML 中的 D3 代码完全不读取它们，而是使用 JS 内硬编码的 `PART_COLORS` / `RELATION_STYLES` / `PART_COLORS_RGBA` 常量。
- **影响**: 维护两份颜色/样式定义，修改一处忘记改另一处将导致不一致。数据文件膨胀。
- **修复**: 二选一 — 要么 D3 代码从 JSON 动态读取样式（推荐，数据驱动），要么从 JSON 中删除死数据。

### M-2: `computeClusterEdges()` 中的冗余类型检查

- **位置**: `knowledge-network.html` 第598-601行
- **代码**:
  ```javascript
  const sp = nodeData.find(n => n.id === e.source || 
    n.id === (typeof e.source === 'object' ? e.source.id : ''))?.part;
  ```
- **问题**: `computeClusterEdges()` 在 `buildClusterVisuals()` 中调用，此时 force simulation 尚未启动（或刚刚 alpha 衰减为0），`e.source` 始终是字符串 ID。`typeof e.source === 'object'` 分支永远不会命中。代码冗余且有混淆风险。
- **修复**: 简化为 `n.id === e.source`。

### M-3: 力导向算法在聚类视图下持续无效计算

- **位置**: `knowledge-network.html` 第953-959行 simulation tick
- **问题**: 进入聚类模式（缩放<0.55）后，`nodeData` 上的 force simulation 照常运行，所有 62 个节点持续计算位置，但 DOM 层已被 `display:none` 隐藏。同时 `computeClusterCentroids()` 每帧重新计算各编中心点。
- **性能影响**: 持续 CPU 占用，浪费移动端电池。
- **修复**: 聚类模式下调用 `simulation.stop()`，退出时 `simulation.alpha(0.3).restart()`。

### M-4: 窗口 resize 无 debounce — 高频触发

- **位置**: `knowledge-network.html` 第972-978行
- **代码**:
  ```javascript
  window.addEventListener('resize', () => {
    // ...直接执行...
    simulation.alpha(0.3).restart();
  });
  ```
- **问题**: 拖动窗口边缘时每秒触发数十次，每次都重新设置 SVG 尺寸、center force 和重启 simulation，造成明显卡顿。
- **修复**: 添加 150ms debounce 或使用 `ResizeObserver`。

### M-5: 搜索无结果反馈

- **位置**: `knowledge-network.html` `handleSearch()` 函数，第684-734行
- **问题**: 搜索无匹配时，所有节点变为 0.06 透明度、所有边 0.03 透明度，画面几乎白屏，但无"未找到结果"的文字提示。用户无法判断是搜索失败还是页面崩溃。
- **修复**: 无匹配结果时在 info-panel 显示"未找到匹配章节"提示。

### M-6: 进场动画后有视觉跳跃

- **位置**: `knowledge-network.html` 第946-961行
- **代码**:
  ```javascript
  nodeData.forEach(n => { n.x = width / 2; n.y = height / 2; });
  simulation.alpha(1).restart();
  setTimeout(() => {
    nodeGroups.transition().duration(1000).style('opacity', 1);
    linkEls.transition().delay(200).duration(800).style('opacity', 0.4);
  }, 300);
  ```
- **问题**: `setTimeout` 300ms 是硬编码，如果 simulation 尚未稳定（alpha 仍较大），用户会看到节点在淡入过程中仍在剧烈移动，体验不精致。
- **修复**: 监听 `simulation.on('end', ...)` 后再启动淡入动画，或检查 alpha 值。

### M-7: 节点 label 使用了废弃 API `tspan` 上的 `x` 属性

- **位置**: `knowledge-network.html` 第894-899行
- **代码**:
  ```javascript
  el.append('tspan').attr('x', 0).attr('dy', 0).text(ch);
  if (cn) el.append('tspan').attr('x', 0).attr('dy', 11).text(cn);
  ```
- **问题**: `<tspan>` 上设置 `x=0` 在部分 SVG 渲染器中会造成未定义行为（`x` 应从父级 `<text>` 继承）。D3 v7 文档推荐使用 `dx` / `dy` 相对偏移。
- **修复**: 将 `attr('x', 0)` 改为 `attr('dx', 0)`。

### M-8: 侧边栏 `#stats` 边数字在聚类模式切换时短暂显示错误值

- **位置**: `updateClusterStats()` / `updateDetailStats()`，第1098-1108行
- **问题**: `exitClusterMode` 中 `updateDetailStats()` 通过 350ms `setTimeout` 延迟执行，但 `updateClusterStats()` 在 `enterClusterMode` 中立即执行。频繁缩放时可能出现数字闪烁。
- **修复**: 统一延迟策略或使用 `requestAnimationFrame`。

---

## 四、轻微问题 (Low)

### L-1: 页面缺少 `<meta name="description">` 和 Open Graph 标签

- **位置**: `knowledge-network.html` `<head>` 区域
- **对比**: `config.mjs` 中全局配置了 `og:title`、`og:description` 等标签，但知识网络页面是独立 HTML，不走 VitePress 模板，缺少 SEO 元数据。
- **修复**: 添加 description 和 OG 标签。

### L-2: 聚类节点 tooltip 中的 importance 硬编码为 0

- **位置**: `knowledge-network.html` `buildClusterVisuals()` 第1058行
- **代码**:
  ```javascript
  showTooltip(evt, { ..., importance: 0 });
  ```
- **影响**: tooltip 中不显示星级，但并非 bug（聚类节点也确实不需要星级）。代码一致性可改进。
- **修复**: 移除 `importance: 0` 或改为空字符串。

### L-3: Part 6 仅有 2 个节点但聚类圆大小与 Part 1（5节点）相同

- **位置**: `buildClusterVisuals()` 第1031行，`r: 28` 硬编码
- **问题**: 各编聚类圆半径均为 28px，无法直观反映各编的节点数量差异。
- **修复**: 聚类圆半径映射为 `Math.max(18, 10 + count * 3.5)`，让 Part 6 的圆明显小于 Part 2。

### L-4: `updateInfoPanel` 中的 `setTimeout(120ms)` 硬编码延迟

- **位置**: `knowledge-network.html` 第663-678行
- **问题**: 通过 CSS class `fading` 实现过渡后，用 120ms setTimeout 等待动画完成再更新内容。跨设备不可靠。
- **修复**: 使用 `transitionend` 事件。

### L-5: 无暗色模式切换过渡动画

- **位置**: 第38行 `body` CSS 中使用 `transition: background 0.4s ease, color 0.4s ease`
- **问题**: 仅有 `background` 和 `color` 过渡，但 SVG 节点颜色由 JS `updateAllColors()` 直接设置 `attr()`，无 CSS transition。切换主题时节点颜色瞬间跳变，与侧边栏的平滑过渡不协调。
- **修复**: 为 `.node-group circle` 添加 `transition: fill 0.3s ease`。

### L-6: `knowledge-graph.md` 文件不存在

- **位置**: 任务指定路径 `E:\Avis-System\web\public\knowledge-graph.md`
- **状态**: 文件不存在。如果该文件应为知识图谱的 Markdown 说明文档，建议创建；如果是计划中但未实现，应从文档引用中移除。

---

## 五、数据完整性专项审计

### 5.1 节点-边一致性

| 检查项 | 结果 |
|-------|------|
| Edge source 引用的 node 是否存在 | 全部通过 (84/84) |
| Edge target 引用的 node 是否存在 | 全部通过 (84/84) |
| 是否存在孤立节点（无任何边连接） | 无 |
| 是否存在重复 node.id | 无 |
| 必填字段完整性 (id/label/part/importance/url/description) | 全部节点通过 |

### 5.2 各编分布

| 编 | 节点数 | 占比 | 说明 |
|----|--------|------|------|
| 第1编 (基础理论) | 5 | 8.1% | ch01-ch05 |
| 第2编 (设计工程) | 25 | 40.3% | ch06-ch26 + ch63-ch66 + ch68 — 知识点最密集 |
| 第3编 (验证标准) | 8 | 12.9% | ch29-ch36 |
| 第4编 (管理前瞻) | 14 | 22.6% | ch37-ch50 + ch67 + ch69 |
| 第5编 (新兴技术) | 8 | 12.9% | ch53-ch60 |
| 第6编 (电子航天) | 2 | 3.2% | ch61-ch62 — 节点偏少，可能是发展中的编 |

### 5.3 章节编号缺口

`[20, 27, 28, 38, 44, 51, 52]` — 共 7 个编号缺失：

| 缺失章号 | 是否在侧边栏 | 说明 |
|---------|------------|------|
| ch20 | 否 | 无此章节（可能是预留或跳号） |
| ch27 | 否 | 无此章节 |
| ch28 | 否 | 无此章节 |
| **ch38** | **是** | **项目管理 — 侧边栏中有但 JSON 缺失，见 H-2** |
| ch44 | 否 | 无此章节 |
| ch51 | 否 | 无此章节（术语表/参考文献通常不参与知识网络可视化） |
| ch52 | 否 | 无此章节（参考文献同上） |

### 5.4 边的关系类型分布

| 类型 | 数量 | 占比 |
|------|------|------|
| precursor (前置知识) | 56 | 66.7% |
| reference (交叉引用) | 17 | 20.2% |
| contrast (对比对照) | 7 | 8.3% |
| followup (深化拓展) | 2 | 2.4% |
| deepen (深度关联) | 2 | 2.4% |

---

## 六、修复优先级路线图

### Phase 1 — 立即修复 (本周)
1. **C-1**: 添加 CDN integrity hash + 本地 fallback
2. **H-1**: 修正硬编码边数为 84
3. **H-3**: 修复 `exitClusterMode` 竞态条件

### Phase 2 — 高优先级 (本月)
4. **H-2**: 将 `ch38` 添加到 JSON 数据中
5. **H-5**: 实现移动端响应式布局
6. **M-1**: 统一颜色/样式定义源（JSON 或 JS 二选一）
7. **M-3**: 聚类模式下暂停 force simulation

### Phase 3 — 可访问性与体验 (下月)
8. **H-4**: 添加 SVG ARIA 标签
9. **M-4**: resize debounce
10. **M-5**: 搜索无结果反馈
11. **L-1**: 补充 SEO meta 标签
12. **L-3**: 聚类圆大小反映节点数

### Phase 4 — 持续优化
13. 其余 Medium 和 Low 问题

---

## 七、质量评估总览

| 维度 | 评分 | 简要 |
|------|------|------|
| 代码质量 | 7/10 | 整体结构清晰，Apple HIG 设计还原度高；竞态条件、硬编码需修复 |
| 数据完整性 | 8/10 | 边-节点一致性完全正确，仅 ch38 缺失；死数据需清理 |
| 可视化质量 | 8.5/10 | 力导向布局、聚类模式、进场动画设计精良；label渲染可优化 |
| 响应式设计 | 2/10 | 无移动端适配，侧边栏固定宽度在小屏上占满空间 |
| 可访问性 | 2/10 | 键盘导航有基础支持，但 ARIA 完全缺失 |
| SEO | 4/10 | 独立页面缺少 meta 标签和结构化数据 |
| 性能 | 6/10 | 无懒加载、无 sim 暂停优化、无 debounce；但轻量数据量下仍可接受 |
| 用户体验 | 7.5/10 | 搜索、tooltip、信息面板交互流畅；进场动画有跳跃、无结果反馈缺失 |

**综合评分: 5.6/10** — 可视化内核质量高，但生产化准备不足，在可访问性、响应式和可靠性方面存在显著短板。

---

*审计完成。报告生成于 2026-06-03。*
