# 知识图谱

> Avis 航空航天阀门知识体系的可视化探索 — 六大维度交互式图谱

---

## 锚点导航

- [阀门分类学](#1-阀门分类学树状图)
- [知识体系网络](#2-知识体系网络图)
- [航空/航天对比](#3-航空航天阀门对比图)
- [故障模式关联](#4-故障模式-原因-影响关联图)
- [标准体系](#5-标准体系层级图)
- [材料应用矩阵](#6-材料-应用-环境矩阵图)

---

## 1. 阀门分类学树状图

以「航空航天阀门」为根节点，按照领域—系统—功能的层次逐级展开，涵盖航天推进阀门的7大子类与航空阀门的5大系统分支。该分类体系对应 [第5章 分类与选型方法论](/guide/part1/chapter-05) 中的多维度分类框架。

```mermaid
mindmap
  root((航空航天阀门))
    航天阀门
      液体火箭发动机阀
        主燃料阀 MFV
        主氧化剂阀 MOV
        推力室冷却阀
        预燃室阀
      卫星推进阀
        电热推力器阀
        霍尔推力器阀
        冷气推进阀
      姿控阀
        RCS推进剂阀
        反作用轮锁紧阀
      增压阀
        氦气增压阀
        自生增压阀
        贮箱泄压阀
      火工阀
        电爆阀
        切断阀
        点火隔离阀
    航空阀门
      发动机阀
        FMU 燃油计量单元
        VBV 可调放气阀
        VSV 可调静叶阀
        TBV 瞬态放气阀
        ACC 主动间隙控制阀
      燃油阀
        PRSOV 压力调节关断阀
        HPV 高压关断阀
        FCV 燃油控制阀
        燃油分配阀
      液压阀
        EHSV 电液伺服阀
        DDV 直接驱动阀
        优先阀
        卸荷阀
      ECS阀
        TCV 温度控制阀
        NGS 氮气发生系统阀
        流量控制阀
        舱压调节阀
      APU阀
        进气导叶阀
        燃油计量阀
        引气控制阀
```

---

## 2. 知识体系网络图

展示Avis六编核心章节之间的知识依赖关系。从**第1章 概论**出发，依照先基础后专精、先设计后验证的原则逐层展开。实线箭头表示前置依赖（precursor），虚线表示交叉引用（reference），双线表示跨领域对比（contrast）。

```mermaid
graph TD
  CH01["Ch.1 航空航天阀门概论"]
  CH02["Ch.2 流体力学基础"]
  CH03["Ch.3 热力学基础"]
  CH04["Ch.4 材料科学基础"]
  CH05["Ch.5 分类与选型方法论"]
  CH06["Ch.6 驱动方式分类"]
  CH07["Ch.7 静力学与结构应力"]
  CH08["Ch.8 动力学与运动学"]
  CH09["Ch.9 极端环境密封"]
  CH10["Ch.10 系统工程与需求"]
  CH11["Ch.11 CFD控制方程"]
  CH12["Ch.12 密封工程设计"]
  CH13["Ch.13 电磁驱动阀"]
  CH14["Ch.14 气动与液压阀"]
  CH15["Ch.15 电机驱动阀"]
  CH16["Ch.16 火工与电爆阀"]
  CH17["Ch.17 单向阀与泄压阀"]
  CH25["Ch.25 氢氧发动机阀"]
  CH26["Ch.26 可重复使用阀"]
  CH63["Ch.63 航空发动机阀"]
  CH32["Ch.32 可靠性工程"]
  CH33["Ch.33 国际标准体系"]
  CH36["Ch.36 中国标准体系"]
  CH35["Ch.35 测试与鉴定"]
  CH47["Ch.47 FMEA与FTA"]
  CH46["Ch.46 重大故障分析"]
  CH53["Ch.53 压电与智能阀"]
  CH59["Ch.59 AI辅助设计"]
  CH41["Ch.41 数字孪生"]

  CH01 --> CH02
  CH01 --> CH03
  CH01 --> CH04
  CH01 --> CH05
  CH02 --> CH11
  CH03 --> CH09
  CH04 --> CH12
  CH05 --> CH06
  CH06 --> CH13
  CH06 --> CH14
  CH06 --> CH15
  CH06 --> CH16
  CH07 --> CH13
  CH07 --> CH14
  CH08 --> CH15
  CH09 --> CH12
  CH10 --> CH06
  CH12 --> CH17
  CH13 --> CH25
  CH14 --> CH25
  CH16 --> CH25
  CH25 --> CH26
  CH14 --> CH63
  CH13 --> CH63
  CH01 --> CH32
  CH10 --> CH32
  CH32 --> CH33
  CH33 --> CH36
  CH32 --> CH35
  CH35 --> CH47
  CH47 --> CH46
  CH25 -.-> CH63
  CH26 -.-> CH63
  CH53 -.-> CH59
  CH41 -.-> CH59
  CH46 ==> CH32
  CH33 ==> CH36
```

> 图例：`→` 前置依赖 | `-.->` 交叉引用 | `==>` 跨领域对比

---

## 3. 航空/航天阀门对比图

航空阀门与航天阀门虽然共享基础理论和设计方法，但在工作环境、寿命、可靠性模型、重量约束和标准体系上存在系统级差异。以下对比基于 [第25章](/guide/part2/chapter-25)、[第26章](/guide/part2/chapter-26)、[第63章](/guide/part2/chapter-63) 和 [第68章](/guide/part2/chapter-68) 的核心数据。

```mermaid
graph LR
  subgraph 航空阀门
    A1["工作环境<br/>-55~+350°C<br/>大气压~3MPa<br/>振动: 宽频随机"]
    A2["寿命要求<br/>10^4~10^6 循环<br/>视情维修<br/>MSG-3 分析驱动"]
    A3["可靠性<br/>MTBF 10^4~10^5 h<br/>冗余: 双通道/双余度<br/>FHA + SSA 安全流程"]
    A4["重量要求<br/>严格但非极致<br/>燃油效率驱动减重<br/>轻合金/复材应用"]
    A5["标准体系<br/>FAR/CS/CCAR 25部<br/>DO-160 环境鉴定<br/>SAE ARP 系列"]
    A6["典型应用<br/>FMU/PRSOV/HPV<br/>VBV/VSV/TCV<br/>EHSV/DDV"]
  end

  subgraph 航天阀门
    B1["工作环境<br/>-253~+3000°C<br/>真空~70MPa<br/>冲击: 瞬态高g"]
    B2["寿命要求<br/>1~100 循环(一次性)<br/>10~100 循环(复用)<br/>无维修设计"]
    B3["可靠性<br/>单点失效不可接受<br/>冗余: 串联关断+并联<br/>FMECA + FTA 闭环"]
    B4["重量要求<br/>极致减重<br/>每克成本 >$1000<br/>钛合金/铍/CMC"]
    B5["标准体系<br/>MIL-STD/NASA-STD<br/>SMC-S-016 鉴定<br/>GJB 军用标准"]
    B6["典型应用<br/>MFV/MOV/电爆阀<br/>氦气增压阀<br/>RCS推进剂阀"]
  end
```

---

## 4. 故障模式-原因-影响关联图

阀门在航空航天服役过程中面临六大典型故障模式。每种模式均有特定的失效机制、直接原因和工程缓解措施。该图谱整合了 [第46章 重大故障分析](/guide/part4/chapter-46)、[第47章 FMEA与FTA](/guide/part4/chapter-47) 和 [附录E FMECA速查](/guide/appendix/appendix-e) 的内容。

```mermaid
graph TD
  FM1["故障模式: 卡滞<br/>Sticking/Binding"]
  FM2["故障模式: 泄漏<br/>Leakage"]
  FM3["故障模式: 断裂<br/>Fracture"]
  FM4["故障模式: 腐蚀<br/>Corrosion"]
  FM5["故障模式: 磨损<br/>Wear"]
  FM6["故障模式: 电气故障<br/>Electrical Failure"]

  C1a["污染颗粒嵌入配合间隙"]
  C1b["热膨胀导致间隙消失"]
  C1c["润滑剂降解/挥发"]
  C2a["密封面疲劳/蠕变"]
  C2b["O形圈压缩永久变形"]
  C2c["焊接缺陷/微裂纹"]
  C3a["HCF高周疲劳"]
  C3b["LCF低周/热机械疲劳"]
  C3c["应力腐蚀开裂 SCC"]
  C4a["推进剂化学腐蚀"]
  C4b["电偶腐蚀"]
  C4c["高温氧化/硫化"]
  C5a["微动磨损 Fretting"]
  C5b["冲蚀 Erosion"]
  C5c["粘着磨损 Adhesive"]
  C6a["线圈短路/断路"]
  C6b["绝缘击穿"]
  C6c["连接器接触不良"]

  E1["阀门无法开关<br/>推力裕度丧失"]
  E2["推进剂/工质流失<br/>密封等级降级"]
  E3["结构完整性丧失<br/>灾难性失效"]
  E4["材料性能退化<br/>寿命缩短"]
  E5["配合间隙增大<br/>内漏加剧"]
  E6["指令响应失效<br/>丧失控制"]

  M1a["洁净度等级提升<br/>微粒过滤<10μm"]
  M1b["间隙热补偿设计<br/>CTE匹配"]
  M1c["固体润滑膜 MoS₂/PTFE"]
  M2a["金属密封 + 冗余密封"]
  M2b["FFKM/全氟醚耐温密封"]
  M2c["100%氦检漏 + 射线探伤"]
  M3a["S-N曲线 + Goodman修正"]
  M3b["热-力耦合FEA + 循环试验"]
  M3c["材料选择: Inconel 718/钛合金"]
  M4a["兼容性浸泡试验"]
  M4b["绝缘垫片 + 表面处理"]
  M4c["TBC热障涂层 + 耐热合金"]
  M5a["硬质涂层 CrN/TiN"]
  M5b["流道优化降低流速"]
  M5c["材料配对优化"]
  M6a["双绕组冗余设计"]
  M6b["HIRF/雷电防护"]
  M6c["金触点 + 密封连接器"]

  FM1 --> C1a --> E1 --> M1a
  FM1 --> C1b --> E1 --> M1b
  FM1 --> C1c --> E1 --> M1c
  FM2 --> C2a --> E2 --> M2a
  FM2 --> C2b --> E2 --> M2b
  FM2 --> C2c --> E2 --> M2c
  FM3 --> C3a --> E3 --> M3a
  FM3 --> C3b --> E3 --> M3b
  FM3 --> C3c --> E3 --> M3c
  FM4 --> C4a --> E4 --> M4a
  FM4 --> C4b --> E4 --> M4b
  FM4 --> C4c --> E4 --> M4c
  FM5 --> C5a --> E5 --> M5a
  FM5 --> C5b --> E5 --> M5b
  FM5 --> C5c --> E5 --> M5c
  FM6 --> C6a --> E6 --> M6a
  FM6 --> C6b --> E6 --> M6b
  FM6 --> C6c --> E6 --> M6c
```

---

## 5. 标准体系层级图

航空航天阀门需遵循从适航法规到产品标准的四级标准体系。顶层为 FAA、EASA、CAAC 三极适航当局的法规框架，逐层细化至阀门具体设计/鉴定标准。详见 [第33章 国际标准体系](/guide/part3/chapter-33) 和 [第36章 中国标准体系](/guide/part3/chapter-36)。

```mermaid
graph TD
  FAA["FAA 美国联邦航空局<br/>14 CFR Aeronautics"]
  EASA["EASA 欧洲航空安全局<br/>EU Regulations"]
  CAAC["CAAC 中国民用航空局<br/>CCAR 中国民航规章"]

  FAR25["FAR 25部<br/>运输类飞机适航标准"]
  FAR33["FAR 33部<br/>航空发动机适航标准"]
  CS25["CS 25部<br/>大型飞机审定规范"]
  CS_E["CS-E<br/>发动机审定规范"]
  CCAR25["CCAR 25部<br/>运输类飞机标准"]
  CCAR33["CCAR 33部<br/>发动机适航标准"]

  DO160["DO-160G<br/>机载设备环境条件与测试程序<br/>26个Section全覆盖"]

  SEC4["Sec.4 温度/高度"]
  SEC7["Sec.7 工作冲击/坠撞安全"]
  SEC8["Sec.8 振动"]
  SEC16["Sec.16 电源输入"]
  SEC18["Sec.18 音频传导敏感度"]
  SEC20["Sec.20 射频敏感度"]

  SAE["SAE 航空航天标准"]
  MIL["MIL 军用标准"]
  ARP["ARP 推荐实践"]
  NASA["NASA-STD 航天标准"]
  GJB["GJB 中国军用标准"]

  V_REQ["阀门级要求<br/>- 泄漏率 ≤ 1×10⁻⁶ scc/s GHe<br/>- 响应时间 ≤ 50 ms<br/>- 寿命循环 ≥ 设计寿命×1.5<br/>- 洁净度 ISO 14644 Class 5"]

  FAA --> FAR25
  FAA --> FAR33
  EASA --> CS25
  EASA --> CS_E
  CAAC --> CCAR25
  CAAC --> CCAR33

  FAR25 --> DO160
  FAR33 --> DO160
  CS25 --> DO160
  CS_E --> DO160
  CCAR25 --> DO160

  DO160 --> SEC4
  DO160 --> SEC7
  DO160 --> SEC8
  DO160 --> SEC16
  DO160 --> SEC18
  DO160 --> SEC20

  SEC4 --> SAE
  SEC8 --> SAE
  SEC4 --> MIL
  SEC7 --> MIL
  SEC8 --> NASA
  SAE --> ARP
  MIL --> ARP

  SAE --> V_REQ
  MIL --> V_REQ
  ARP --> V_REQ
  NASA --> V_REQ
  GJB --> V_REQ
```

---

## 6. 材料-应用-环境矩阵图

阀门材料的选择需匹配极端服役环境。从低温液氢到高温燃气，材料性能直接决定阀门的可靠性与寿命。本图谱覆盖 [第4章 材料科学基础](/guide/part1/chapter-04)、[第19章 表面工程](/guide/part2/chapter-19)、[第43章 新型材料](/guide/part4/chapter-43) 和 [第57章 绿色推进剂兼容性](/guide/part5/chapter-57)。

```mermaid
graph LR
  subgraph 金属材料
    IN718["Inconel 718<br/>镍基高温合金"]
    TI64["Ti-6Al-4V<br/>钛合金"]
    SS316["316L不锈钢"]
    AL6061["6061铝合金"]
    BECU["铍青铜<br/>CuBe"]
  end

  subgraph 非金属材料
    PTFE["PTFE<br/>聚四氟乙烯"]
    PEEK["PEEK<br/>聚醚醚酮"]
    FFKM["FFKM<br/>全氟醚橡胶"]
    FKM["FKM<br/>氟橡胶"]
    CMC["CMC<br/>陶瓷基复材"]
  end

  subgraph 涂层
    TBC["TBC 热障涂层<br/>YSZ/Gd₂Zr₂O₇"]
    CRN["CrN/TiN<br/>硬质涂层"]
    DLC["DLC<br/>类金刚石涂层"]
  end

  subgraph 工作环境
    CRYO["低温<br/>-253°C (LH2)<br/>-183°C (LOX)"]
    HIGH["高温<br/>+650°C 涡轮进口<br/>+1200°C 燃气"]
    CORR["腐蚀<br/>N₂O₄/肼/MMH<br/>绿色推进剂"]
    HP["高压<br/>>35MPa<br/>氦气/氢气"]
  end

  subgraph 应用
    ENG["发动机阀门<br/>MFV/MOV/FMU"]
    PROP["推进剂阀<br/>RCS/姿控"]
    TANK["增压/贮箱阀<br/>氦气/自生增压"]
    ACFT["飞机系统阀<br/>ECS/燃油/液压"]
  end

  IN718 --> HIGH --> ENG
  TI64 --> CRYO --> PROP
  SS316 --> CORR --> PROP
  AL6061 --> HP --> ACFT
  BECU --> CRYO --> TANK

  PTFE --> CRYO --> PROP
  PEEK --> HIGH --> ENG
  FFKM --> CORR --> PROP
  FKM --> HP --> ACFT
  CMC --> HIGH --> ENG

  TBC --> HIGH --> ENG
  CRN --> HP --> TANK
  DLC --> CORR --> PROP
```

---

## 图谱数据来源

| 图谱 | 核心数据源 |
|------|-----------|
| 阀门分类学 | [valve-taxonomy.json](<E:\Avis-System\knowledge-graph\ontology\valve-taxonomy.json>) — 6维度30节点 |
| 知识体系网络 | [chapter-relationships.json](<E:\Avis-System\knowledge-graph\cross-references\chapter-relationships.json>) — 104条知识依赖边 |
| 航空/航天对比 | [第25章](/guide/part2/chapter-25) [第26章](/guide/part2/chapter-26) [第63章](/guide/part2/chapter-63) [第68章](/guide/part2/chapter-68) |
| 故障模式关联 | [第46章](/guide/part4/chapter-46) [第47章](/guide/part4/chapter-47) [附录E](/guide/appendix/appendix-e) |
| 标准体系 | [第33章](/guide/part3/chapter-33) [第36章](/guide/part3/chapter-36) |
| 材料应用 | [第4章](/guide/part1/chapter-04) [第19章](/guide/part2/chapter-19) [第43章](/guide/part4/chapter-43) |

## 相关资源

- [术语词典](/glossary) — 130+术语详解
- [手册浏览](/guide/part1-index) — 六编72章完整内容
- [概念-章映射](<E:\Avis-System\knowledge-graph\cross-references\concept-chapter-map.json>) — 83个概念 × 关联章节