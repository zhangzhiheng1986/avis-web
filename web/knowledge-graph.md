---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 8d1cde234eeeb79bc6dcc81a4ef71839_kg_v2
    ReservedCode1: qHQT0xmS/UMU+VbU1gUriJpLhF1KEXPgNQ0hP0FeEAK3LrXYhwodhrnbyjOtVMES
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 8d1cde234eeeb79bc6dcc81a4ef71839_kg_v2
    ReservedCode2: qHQT0xmS/UMU+VbU1gUriJpLhF1KEXPgNQ0hP0FeEAK3LrXYhwodhrnbyjOtVMES
---

[Avis](/) > 知识图谱

# 知识图谱

> 航空航天阀门知识体系可视化探索 — 六大维度交互式图谱

---

## 1. 阀门分类学

<details open>
<summary>分类学树状图 — 航空航天阀门领域-系统-功能层次分类</summary>

以航空航天阀门为根节点，按领域—系统—功能逐级展开，覆盖航天推进阀门 7 大子类与航空阀门 5 大系统分支。

```mermaid
graph TD
  ROOT(("航空航天阀门"))

  ROOT --> SF["航天阀门"]
  ROOT --> AV["航空阀门"]

  SF --> SF1["液体火箭发动机阀"]
  SF --> SF2["卫星推进阀"]
  SF --> SF3["姿控阀"]
  SF --> SF4["增压阀"]
  SF --> SF5["火工阀"]

  SF1 --> SF1a["MFV · 主燃料阀"]
  SF1 --> SF1b["MOV · 主氧化剂阀"]
  SF1 --> SF1c["推力室冷却阀"]
  SF1 --> SF1d["预燃室阀"]

  SF2 --> SF2a["电热推力器阀"]
  SF2 --> SF2b["霍尔推力器阀"]
  SF2 --> SF2c["冷气推进阀"]

  SF3 --> SF3a["RCS · 推进剂阀"]
  SF3 --> SF3b["反作用轮锁紧阀"]

  SF4 --> SF4a["氦气增压阀"]
  SF4 --> SF4b["自生增压阀"]
  SF4 --> SF4c["贮箱泄压阀"]

  SF5 --> SF5a["电爆阀"]
  SF5 --> SF5b["切断阀"]
  SF5 --> SF5c["点火隔离阀"]

  AV --> AV1["发动机阀"]
  AV --> AV2["燃油阀"]
  AV --> AV3["液压阀"]
  AV --> AV4["ECS · 环境控制阀"]
  AV --> AV5["APU · 辅助动力阀"]

  AV1 --> AV1a["FMU · 燃油计量单元"]
  AV1 --> AV1b["VBV · 可调放气阀"]
  AV1 --> AV1c["VSV · 可调静叶阀"]
  AV1 --> AV1d["TBV · 瞬态放气阀"]
  AV1 --> AV1e["ACC · 主动间隙控制"]

  AV2 --> AV2a["PRSOV · 压力调节关断阀"]
  AV2 --> AV2b["HPV · 高压关断阀"]
  AV2 --> AV2c["FCV · 燃油控制阀"]
  AV2 --> AV2d["燃油分配阀"]

  AV3 --> AV3a["EHSV · 电液伺服阀"]
  AV3 --> AV3b["DDV · 直接驱动阀"]
  AV3 --> AV3c["优先阀"]
  AV3 --> AV3d["卸荷阀"]

  AV4 --> AV4a["TCV · 温度控制阀"]
  AV4 --> AV4b["NGS · 氮气发生系统阀"]
  AV4 --> AV4c["流量控制阀"]
  AV4 --> AV4d["舱压调节阀"]

  AV5 --> AV5a["进气导叶阀"]
  AV5 --> AV5b["燃油计量阀"]
  AV5 --> AV5c["引气控制阀"]

  classDef p1 fill:rgba(0,122,255,0.08),stroke:rgba(0,122,255,0.4),stroke-width:1px,color:#007AFF
  classDef p2 fill:rgba(255,149,0,0.08),stroke:rgba(255,149,0,0.4),stroke-width:1px,color:#C75B00
  classDef root fill:#fff,stroke:rgba(0,0,0,0.3),stroke-width:2px,color:#1D1D1F

  class ROOT root
  class SF,SF1,SF2,SF3,SF4,SF5,SF1a,SF1b,SF1c,SF1d,SF2a,SF2b,SF2c,SF3a,SF3b,SF4a,SF4b,SF4c,SF5a,SF5b,SF5c p1
  class AV,AV1,AV2,AV3,AV4,AV5,AV1a,AV1b,AV1c,AV1d,AV1e,AV2a,AV2b,AV2c,AV2d,AV3a,AV3b,AV3c,AV3d,AV4a,AV4b,AV4c,AV4d,AV5a,AV5b,AV5c p2
```

> 图例：蓝色 = 航天阀门 | 橙色 = 航空阀门

</details>

---

## 2. 知识体系网络

<details>
<summary>知识体系网络 — 六编章节间的知识依赖关系</summary>

从概论出发，依先基础后专精、先设计后验证原则展开。实线 `→` 为前置依赖，虚线 `-.->` 为交叉引用。

```mermaid
graph TD
  subgraph P1 ["第一编 绪论与基础科学"]
    CH01["Ch.1 概论"]
    CH02["Ch.2 流体力学基础"]
    CH03["Ch.3 热力学基础"]
    CH04["Ch.4 材料科学基础"]
    CH05["Ch.5 分类与选型"]
  end

  subgraph P2 ["第二编 设计工程"]
    CH06["Ch.6 驱动方式"]
    CH09["Ch.9 极端环境密封"]
    CH10["Ch.10 系统工程"]
    CH13["Ch.13 电磁驱动阀"]
    CH14["Ch.14 气动液压阀"]
    CH16["Ch.16 火工电爆阀"]
    CH18["Ch.18 精密加工"]
    CH25["Ch.25 氢氧发动机阀"]
    CH26["Ch.26 可重复使用阀"]
    CH63["Ch.63 航空发动机阀"]
    CH65["Ch.65 液压系统阀"]
    CH66["Ch.66 ECS · 环境控制阀"]
  end

  subgraph P3 ["第三编 制造工艺与试验验证"]
    CH29["Ch.29 焊接钎焊"]
    CH31["Ch.31 飞行验证"]
    CH32["Ch.32 可靠性工程"]
    CH33["Ch.33 国际标准"]
    CH35["Ch.35 测试鉴定"]
    CH36["Ch.36 中国标准"]
  end

  subgraph P4 ["第四编 系统工程与管理"]
    CH37["Ch.37 系统工程管理"]
    CH39["Ch.39 质量保证"]
    CH41["Ch.41 数字孪生"]
    CH42["Ch.42 产业格局"]
    CH43["Ch.43 新型材料"]
    CH46["Ch.46 重大故障"]
    CH47["Ch.47 FMEA/FTA"]
    CH67["Ch.67 适航认证"]
  end

  subgraph P5 ["第五编 前沿技术与未来发展"]
    CH53["Ch.53 压电智能阀"]
    CH54["Ch.54 传感器监测"]
    CH57["Ch.57 绿色推进剂"]
    CH58["Ch.58 核电推进阀"]
    CH59["Ch.59 AI辅助设计"]
    CH60["Ch.60 成本工程"]
  end

  subgraph P6 ["第六编 扩展专题"]
    CH61["Ch.61 驱动电子学"]
    CH62["Ch.62 小型航天器阀"]
  end

  CH01 --> CH02
  CH01 --> CH03
  CH01 --> CH04
  CH01 --> CH05
  CH02 --> CH06
  CH03 --> CH09
  CH04 --> CH09
  CH04 --> CH10
  CH05 --> CH06
  CH06 --> CH13
  CH06 --> CH14
  CH06 --> CH16
  CH09 --> CH10
  CH10 --> CH13
  CH10 --> CH14
  CH10 --> CH18
  CH10 --> CH63
  CH13 --> CH63
  CH13 --> CH65
  CH14 --> CH63
  CH16 --> CH25
  CH18 --> CH29
  CH25 --> CH26
  CH63 --> CH65
  CH63 --> CH66
  CH29 --> CH31
  CH29 --> CH32
  CH31 --> CH35
  CH32 --> CH33
  CH32 --> CH35
  CH33 --> CH36
  CH35 --> CH67
  CH36 --> CH67
  CH37 --> CH39
  CH37 --> CH41
  CH37 --> CH42
  CH39 --> CH41
  CH41 --> CH43
  CH43 --> CH53
  CH46 --> CH47
  CH53 --> CH54
  CH53 --> CH57
  CH53 --> CH59
  CH54 --> CH60
  CH57 --> CH58
  CH59 --> CH60
  CH62 --> CH26
  CH26 -.-> CH63
  CH46 -.-> CH67
  CH09 -.-> CH66
  CH04 -.-> CH63
  CH02 -.-> CH63

  classDef p1 fill:rgba(0,122,255,0.08),stroke:rgba(0,122,255,0.4),stroke-width:1px,color:#007AFF
  classDef p2 fill:rgba(255,149,0,0.08),stroke:rgba(255,149,0,0.4),stroke-width:1px,color:#C75B00
  classDef p3 fill:rgba(52,199,89,0.08),stroke:rgba(52,199,89,0.4),stroke-width:1px,color:#248A3D
  classDef p4 fill:rgba(255,45,85,0.08),stroke:rgba(255,45,85,0.4),stroke-width:1px,color:#C01F3D
  classDef p5 fill:rgba(175,82,222,0.08),stroke:rgba(175,82,222,0.4),stroke-width:1px,color:#8944AB
  classDef p6 fill:rgba(90,200,250,0.08),stroke:rgba(90,200,250,0.4),stroke-width:1px,color:#3478A0

  class CH01,CH02,CH03,CH04,CH05 p1
  class CH06,CH09,CH10,CH13,CH14,CH16,CH18,CH25,CH26,CH63,CH65,CH66 p2
  class CH29,CH31,CH32,CH33,CH35,CH36 p3
  class CH37,CH39,CH41,CH42,CH43,CH46,CH47,CH67 p4
  class CH53,CH54,CH57,CH58,CH59,CH60 p5
  class CH61,CH62 p6
```

> 39 个核心章节节点 · 48 条知识依赖边

</details>

---

## 3. 航空/航天对比

<details>
<summary>航空/航天对比 — 两域阀门系统级差异</summary>

航空与航天阀门共享基础理论，但在工作环境、寿命模型、可靠性架构和标准体系上存在系统级差异。

```mermaid
graph LR
  subgraph AERO ["航空阀门"]
    A1["工作环境<br/>-55~+350°C<br/>大气压~3MPa<br/>宽频随机振动"]
    A2["寿命要求<br/>10⁴~10⁶ 循环<br/>视情维修<br/>MSG-3 分析驱动"]
    A3["可靠性<br/>MTBF 10⁴~10⁵ h<br/>双通道/双余度<br/>FHA + SSA 流程"]
    A4["重量要求<br/>严格但非极致<br/>轻合金/复材应用<br/>燃油效率驱动减重"]
    A5["标准体系<br/>FAR/CS/CCAR 25部<br/>DO-160 环境鉴定<br/>SAE ARP 系列"]
    A6["典型应用<br/>FMU · PRSOV · HPV<br/>VBV · VSV · TCV<br/>EHSV · DDV"]
  end

  subgraph SPACE ["航天阀门"]
    B1["工作环境<br/>-253~+3000°C<br/>真空~70MPa<br/>瞬态高g冲击"]
    B2["寿命要求<br/>1~100 循环(一次性)<br/>10~100 循环(复用)<br/>无维修设计"]
    B3["可靠性<br/>单点失效不可接受<br/>串联关断+并联冗余<br/>FMECA + FTA 闭环"]
    B4["重量要求<br/>极致减重<br/>每克成本 >$1000<br/>钛合金/铍/CMC"]
    B5["标准体系<br/>MIL-STD/NASA-STD<br/>SMC-S-016 鉴定<br/>GJB 军用标准"]
    B6["典型应用<br/>MFV · MOV · 电爆阀<br/>氦气增压阀<br/>RCS · 推进剂阀"]
  end

  classDef p1 fill:rgba(0,122,255,0.08),stroke:rgba(0,122,255,0.4),stroke-width:1px,color:#007AFF
  classDef p2 fill:rgba(255,149,0,0.08),stroke:rgba(255,149,0,0.4),stroke-width:1px,color:#C75B00

  class A1,A2,A3,A4,A5,A6 p2
  class B1,B2,B3,B4,B5,B6 p1
```

> 图例：橙色 = 航空阀门 | 蓝色 = 航天阀门

</details>

---

## 4. 故障模式关联

<details>
<summary>故障模式关联 — 六类典型失效的因果链条</summary>

整合重大故障分析、FMEA/FTA 和 FMECA 速查内容，展示 6 种失效模式的完整因果链与缓解措施。

```mermaid
graph TD
  FM1["故障: 卡滞<br/>Sticking/Binding"]
  FM2["故障: 泄漏<br/>Leakage"]
  FM3["故障: 断裂<br/>Fracture"]
  FM4["故障: 腐蚀<br/>Corrosion"]
  FM5["故障: 磨损<br/>Wear"]
  FM6["故障: 电气故障<br/>Electrical Failure"]

  C1a["污染颗粒嵌入配合间隙"]
  C1b["热膨胀导致间隙消失"]
  C1c["润滑剂降解/挥发"]
  C2a["密封面疲劳/蠕变"]
  C2b["O形圈压缩永久变形"]
  C2c["焊接缺陷/微裂纹"]
  C3a["HCF · 高周疲劳"]
  C3b["LCF · 低周/热机械疲劳"]
  C3c["SCC · 应力腐蚀开裂"]
  C4a["推进剂化学腐蚀"]
  C4b["电偶腐蚀"]
  C4c["高温氧化/硫化"]
  C5a["微动磨损 Fretting"]
  C5b["冲蚀 Erosion"]
  C5c["粘着磨损 Adhesive"]
  C6a["线圈短路/断路"]
  C6b["绝缘击穿"]
  C6c["连接器接触不良"]

  E1["影响: 阀门无法开关<br/>推力裕度丧失"]
  E2["影响: 工质流失<br/>密封等级降级"]
  E3["影响: 结构完整性丧失<br/>灾难性失效"]
  E4["影响: 材料性能退化<br/>寿命缩短"]
  E5["影响: 配合间隙增大<br/>内漏加剧"]
  E6["影响: 指令响应失效<br/>丧失控制"]

  M1a["缓解: 洁净度提升<br/>微粒过滤 10μm"]
  M1b["缓解: 间隙热补偿<br/>CTE 匹配设计"]
  M1c["缓解: 固体润滑膜<br/>MoS₂ / PTFE"]
  M2a["缓解: 金属密封<br/>+ 冗余密封"]
  M2b["缓解: FFKM<br/>全氟醚耐温密封"]
  M2c["缓解: 100% 氦检漏<br/>+ 射线探伤"]
  M3a["缓解: S-N 曲线<br/>+ Goodman 修正"]
  M3b["缓解: 热-力耦合 FEA<br/>+ 循环试验"]
  M3c["缓解: 材料选择<br/>Inconel 718 / 钛合金"]
  M4a["缓解: 兼容性浸泡试验"]
  M4b["缓解: 绝缘垫片<br/>+ 表面处理"]
  M4c["缓解: TBC 热障涂层<br/>+ 耐热合金"]
  M5a["缓解: 硬质涂层<br/>CrN / TiN"]
  M5b["缓解: 流道优化<br/>降低流速"]
  M5c["缓解: 材料配对优化"]
  M6a["缓解: 双绕组冗余设计"]
  M6b["缓解: HIRF/雷电防护"]
  M6c["缓解: 金触点<br/>+ 密封连接器"]

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

  classDef fail fill:rgba(255,45,85,0.1),stroke:rgba(255,45,85,0.5),stroke-width:2px,color:#C01F3D
  classDef cause fill:rgba(255,149,0,0.08),stroke:rgba(255,149,0,0.4),stroke-width:1px,color:#C75B00
  classDef effect fill:rgba(0,122,255,0.08),stroke:rgba(0,122,255,0.4),stroke-width:1px,color:#007AFF
  classDef mitig fill:rgba(52,199,89,0.08),stroke:rgba(52,199,89,0.4),stroke-width:1px,color:#248A3D

  class FM1,FM2,FM3,FM4,FM5,FM6 fail
  class C1a,C1b,C1c,C2a,C2b,C2c,C3a,C3b,C3c,C4a,C4b,C4c,C5a,C5b,C5c,C6a,C6b,C6c cause
  class E1,E2,E3,E4,E5,E6 effect
  class M1a,M1b,M1c,M2a,M2b,M2c,M3a,M3b,M3c,M4a,M4b,M4c,M5a,M5b,M5c,M6a,M6b,M6c mitig
```

> 6 种故障模式 · 18 条因果链 · 18 项缓解措施

</details>

---

## 5. 标准体系

<details>
<summary>标准体系层级 — 从适航法规到阀门产品要求</summary>

四级标准体系逐层收敛：适航当局 → 审定规章 → 设备环境标准 → 行业/产品标准。

```mermaid
graph TD
  FAA["FAA · 美国联邦航空局<br/>14 CFR Aeronautics"]
  EASA["EASA · 欧洲航空安全局<br/>EU Regulations"]
  CAAC["CAAC · 中国民用航空局<br/>CCAR 中国民航规章"]

  FAR25["FAR 25部<br/>运输类飞机适航标准"]
  FAR33["FAR 33部<br/>航空发动机适航标准"]
  CS25["CS 25部<br/>大型飞机审定规范"]
  CS_E["CS-E<br/>发动机审定规范"]
  CCAR25["CCAR 25部<br/>运输类飞机标准"]
  CCAR33["CCAR 33部<br/>发动机适航标准"]

  DO160["DO-160G<br/>机载设备环境条件与测试程序"]

  SEC4["Sec.4 温度/高度"]
  SEC5["Sec.5 温度变化"]
  SEC6["Sec.6 湿度"]
  SEC7["Sec.7 工作冲击/坠撞安全"]
  SEC8["Sec.8 振动"]
  SEC10["Sec.10 防水"]
  SEC16["Sec.16 电源输入"]
  SEC18["Sec.18 音频传导敏感度"]
  SEC19["Sec.19 感应信号敏感度"]
  SEC20["Sec.20 射频敏感度"]
  SEC24["Sec.24 结冰"]
  SEC25["Sec.25 静电放电"]

  SAE["SAE · 航空航天标准"]
  MIL["MIL · 军用标准"]
  ARP["ARP · 推荐实践"]
  NASA["NASA-STD · 航天标准"]
  GJB["GJB · 中国军用标准"]

  V_REQ["阀门级要求<br/>泄漏率 ≤ 1×10⁻⁶ scc/s<br/>响应时间 ≤ 50 ms<br/>寿命 ≥ 设计寿命×1.5<br/>洁净度 ISO 14644 Class 5"]

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
  DO160 --> SEC5
  DO160 --> SEC6
  DO160 --> SEC7
  DO160 --> SEC8
  DO160 --> SEC10
  DO160 --> SEC16
  DO160 --> SEC18
  DO160 --> SEC19
  DO160 --> SEC20
  DO160 --> SEC24
  DO160 --> SEC25

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

  classDef p1 fill:rgba(0,122,255,0.08),stroke:rgba(0,122,255,0.4),stroke-width:1px,color:#007AFF
  classDef p2 fill:rgba(255,149,0,0.08),stroke:rgba(255,149,0,0.4),stroke-width:1px,color:#C75B00
  classDef p3 fill:rgba(52,199,89,0.08),stroke:rgba(52,199,89,0.4),stroke-width:1px,color:#248A3D
  classDef p4 fill:rgba(255,45,85,0.08),stroke:rgba(255,45,85,0.4),stroke-width:1px,color:#C01F3D
  classDef p5 fill:rgba(175,82,222,0.08),stroke:rgba(175,82,222,0.4),stroke-width:1px,color:#8944AB

  class FAA,EASA,CAAC p1
  class FAR25,FAR33,CS25,CS_E,CCAR25,CCAR33 p2
  class DO160,SEC4,SEC5,SEC6,SEC7,SEC8,SEC10,SEC16,SEC18,SEC19,SEC20,SEC24,SEC25 p3
  class SAE,MIL,ARP,NASA,GJB p4
  class V_REQ p5
```

> 3 大适航当局 · 6 部审定规章 · 12 项 DO-160 Section

</details>

---

## 6. 材料应用矩阵

<details>
<summary>材料应用矩阵 — 材料-环境-应用的映射关系</summary>

阀门材料选择需匹配极端服役环境，涵盖金属、非金属和涂层三大类共 13 种典型材料。

```mermaid
graph LR
  subgraph METAL ["金属材料"]
    IN718["Inconel 718<br/>镍基高温合金"]
    TI64["Ti-6Al-4V<br/>钛合金"]
    SS316["316L 不锈钢"]
    AL6061["6061 铝合金"]
    BECU["铍青铜 CuBe"]
  end

  subgraph NONMETAL ["非金属材料"]
    PTFE_M["PTFE<br/>聚四氟乙烯"]
    PEEK_M["PEEK<br/>聚醚醚酮"]
    FFKM_M["FFKM<br/>全氟醚橡胶"]
    FKM_M["FKM<br/>氟橡胶"]
    CMC_M["CMC<br/>陶瓷基复材"]
  end

  subgraph COATING ["涂层与表面处理"]
    TBC_C["TBC · 热障涂层<br/>YSZ/Gd₂Zr₂O₇"]
    CRN_C["CrN/TiN<br/>硬质涂层"]
    DLC_C["DLC<br/>类金刚石涂层"]
  end

  subgraph ENV ["工作环境"]
    CRYO["低温<br/>-253°C (LH2)<br/>-183°C (LOX)"]
    HIGH["高温<br/>+650°C 涡轮进口<br/>+1200°C 燃气"]
    CORR["腐蚀<br/>N₂O₄/肼/MMH<br/>绿色推进剂"]
    HP["高压<br/>>35MPa<br/>氦气/氢气"]
  end

  subgraph APP ["典型应用"]
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

  PTFE_M --> CRYO --> PROP
  PEEK_M --> HIGH --> ENG
  FFKM_M --> CORR --> PROP
  FKM_M --> HP --> ACFT
  CMC_M --> HIGH --> ENG

  TBC_C --> HIGH --> ENG
  CRN_C --> HP --> TANK
  DLC_C --> CORR --> PROP

  classDef p1 fill:rgba(0,122,255,0.08),stroke:rgba(0,122,255,0.4),stroke-width:1px,color:#007AFF
  classDef p2 fill:rgba(255,149,0,0.08),stroke:rgba(255,149,0,0.4),stroke-width:1px,color:#C75B00
  classDef p3 fill:rgba(52,199,89,0.08),stroke:rgba(52,199,89,0.4),stroke-width:1px,color:#248A3D
  classDef p4 fill:rgba(255,45,85,0.08),stroke:rgba(255,45,85,0.4),stroke-width:1px,color:#C01F3D
  classDef p5 fill:rgba(175,82,222,0.08),stroke:rgba(175,82,222,0.4),stroke-width:1px,color:#8944AB

  class IN718,TI64,SS316,AL6061,BECU p2
  class PTFE_M,PEEK_M,FFKM_M,FKM_M,CMC_M p3
  class TBC_C,CRN_C,DLC_C p4
  class CRYO,HIGH,CORR,HP p1
  class ENG,PROP,TANK,ACFT p5
```

> 13 种材料 · 4 类服役环境 · 4 种典型应用

</details>

---

*（内容由AI生成，仅供参考）*