---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 8d1cde234eeeb79bc6dcc81a4ef71839_bca59eb05ed311f1b5095254007bceed
    ReservedCode1: 2hEhLBFwkWiiOqJrUFltRT9G+8WpiJ8FNhaDZGfawyk87PSMNMn2ow7agJtmnxE/FCfMHHxQs+0zCWLHWy5PzHJjlB/Uc2Nvv9gTkRYi2A9gcGzM1V8rOaPnAz+i75dPUvHWRsba6xTB65LAumfpmeqXi9ImVW2VgfGgtYRUIdZNu8tCufCBK+2GIiM=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 8d1cde234eeeb79bc6dcc81a4ef71839_bca59eb05ed311f1b5095254007bceed
    ReservedCode2: 2hEhLBFwkWiiOqJrUFltRT9G+8WpiJ8FNhaDZGfawyk87PSMNMn2ow7agJtmnxE/FCfMHHxQs+0zCWLHWy5PzHJjlB/Uc2Nvv9gTkRYi2A9gcGzM1V8rOaPnAz+i75dPUvHWRsba6xTB65LAumfpmeqXi9ImVW2VgfGgtYRUIdZNu8tCufCBK+2GIiM=
---



[Avis](/) > 术语词典

# 术语词典

> Avis 航空航天阀门领域核心术语详解 | 106+ 术语 | 六编全覆盖

---

## 按知识域浏览

| 知识域 | 术语数 | 核心术语 |
|--------|--------|----------|
| [**基础科学**](#基础科学) | 4 | CFD、Barlow公式、RPN、焊缝系数 |
| [**设计工程**](#设计工程) | 11 | DDV、DFMEA、DVC、EHSV、FCV、FMU、HMU、PRSOV、HPV、TCV、TAV |
| [**材料**](#材料) | 8 | CMC、FFKM、FKM、PTFE、PEEK、O形圈、SMA、TBC |
| [**制造工艺**](#制造工艺) | 2 | NDE、NDT |
| [**航天阀门**](#航天阀门) | 4 | LH2、LOX、MMH、RCS |
| [**航空阀门**](#航空阀门) | 9 | ACC、APU、ECS、FADEC、NGS、TBV、VBV、VSV、PWM |
| [**适航标准**](#适航标准) | 10 | ARP、CCAR、CS、DO-160、FAR、GJB、MIL、NASA-STD、SAE、MSG-3 |
| [**可靠性**](#可靠性) | 11 | CBM、FMECA、FTA、HALT、HASS、HCF、LCF、HIRF、HUMS、SCC、V&V |
| [**系统工程**](#系统工程) | 5 | INCOSE、MRL、SE、TRL、EMC |
| [**前沿技术**](#前沿技术) | 2 | DLC、CMC(前沿) |

---

## 快捷索引

**[A](#a) · [B](#b) · [C](#c) · [D](#d) · [E](#e) · [F](#f) · [G](#g) · [H](#h) · [I](#i) · [L](#l) · [M](#m) · [N](#n) · [O](#o) · [P](#p) · [R](#r) · [S](#s) · [T](#t) · [V](#v) · [W](#w)**

---


> 按 Ctrl+F / Cmd+F 可快速搜索术语

## A

> **ACC** (Active Clearance Control) — *主动间隙控制*
> 航空发动机中用于动态调节涡轮叶尖与机匣之间间隙的阀门系统。通过引气冷却或加热机匣，使叶尖间隙在不同工况下保持最优值，降低燃油消耗率（SFC）约0.5%~1.5%。控制精度要求响应时间<2秒，位置精度±0.1mm。
> 相关章节：[第63章](/guide/part2/chapter-63)
> 关联术语：**[FADEC](#f)** · **[VBV](#v)** · **[VSV](#v)** · **[TBV](#t)**

> **ARP** (Aerospace Recommended Practice) — *航空航天推荐实践*
> SAE International发布的非强制性技术指导文件系列。ARP 4754（系统开发过程）和ARP 4761（安全性评估）是民用飞机和发动机系统开发的核心参考，为"合规性方法"提供工程依据。
> 相关章节：[第33章](/guide/part3/chapter-33) · [第67章](/guide/part4/chapter-67)
> 关联术语：**[SAE](#s)** · **[FAR](#f)** · **[CS](#c)** · **[CCAR](#c)** · **[DO-160](#d)**

> **APU** (Auxiliary Power Unit) — *辅助动力装置*
> 安装在飞机尾部的小型燃气涡轮发动机，用于提供电力和压缩空气。APU阀门需满足高空再起动（~41,000 ft）、宽温域（-55~+70°C）和10,000次循环的可靠性要求。
> 相关章节：[第63章](/guide/part2/chapter-63)
> 关联术语：**[ECS](#e)** · **[TCV](#t)** · **[IGV](#补充缩略语速查)**

---

## B

> **Barlow公式** (Barlow Formula) — *薄壁圆筒环向应力公式*
> $$\sigma_h = \frac{p \cdot D}{2t}$$ 用于计算薄壁压力容器的环向应力。阀门阀体壁厚估算：$t \ge \frac{p \cdot D}{2 \cdot S \cdot E - 1.2p}$，其中$S$为许用应力、$E$为焊缝系数。适用于$D/t > 10$的薄壁条件，厚壁阀门需使用Lamé方程。
> 相关章节：[第7章](/guide/part2/chapter-07)
> 关联术语：**[焊缝系数](#w)** · **[ASME](#补充缩略语速查)** · **[NDT](#n)**

---

## C

> **CBM** (Condition-Based Maintenance) — *状态基维修*
> 基于设备实际状态监测数据（振动、温度、压力等）而非固定时间间隔的维修策略。对于航空阀门，关键监测参数包括阀位反馈信号、作动时间、内漏率和线圈阻抗。可减少30%~50%的非计划停机。
> 相关章节：[第34章](/guide/part3/chapter-34) · [第41章](/guide/part4/chapter-41) · [第54章](/guide/part5/chapter-54)
> 关联术语：**[HUMS](#h)** · **[MSG-3](#m)** · **[数字孪生](/guide/part4/chapter-41)**

> **CCAR** (China Civil Aviation Regulations) — *中国民航规章*
> CAAC发布的适航管理法规体系。CCAR 25部（运输类飞机）和CCAR 33部（发动机）直接关联阀门审定。CCAR 25.1438要求液压系统通过"耐压试验+功能试验"双验证。
> 相关章节：[第36章](/guide/part3/chapter-36) · [第48章](/guide/part4/chapter-48) · [第67章](/guide/part4/chapter-67)
> 关联术语：**[FAR](#f)** · **[CS](#c)** · **[GJB](#g)** · **[DO-160](#d)**

> **CFD** (Computational Fluid Dynamics) — *计算流体动力学*
> 通过数值方法求解Navier-Stokes方程预测阀门内部流场：
> $$\frac{\partial(\rho \mathbf{u})}{\partial t} + \nabla \cdot (\rho \mathbf{u}\mathbf{u}) = -\nabla p + \nabla \cdot \boldsymbol{\tau} + \rho \mathbf{g}$$
> 用于流阻系数计算、气蚀预测、流致力评估和热耦合分析。
> 相关章节：[第11章](/guide/part2/chapter-11) · [第49章](/guide/part4/chapter-49)
> 关联术语：**[Fluent](#补充缩略语速查)** · **[k-ε模型]** · **[流致力]**

> **CMC** (Ceramic Matrix Composite) — *陶瓷基复合材料*
> 以陶瓷纤维增强陶瓷基体的高温结构材料，典型体系为SiC/SiC。密度比镍基合金低1/3，使用温度高150~200°C，且无需气冷。GE LEAP发动机的CMC涡轮罩环和热端阀门组件已通过FAA认证。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第43章](/guide/part4/chapter-43)
> 关联术语：**[TBC](#t)** · **[Inconel](#补充缩略语速查)** · **[SiC]**

> **CS** (Certification Specifications) — *（EASA）审定规范*
> 欧洲航空安全局发布的适航技术标准。CS 25.1309条款要求对所有失效状态进行分类和安全性评估，阀门作为系统组件必须通过FHA/PSSA/SSA完整安全流程。
> 相关章节：[第33章](/guide/part3/chapter-33) · [第67章](/guide/part4/chapter-67)
> 关联术语：**[FAR](#f)** · **[CCAR](#c)** · **[EASA](#补充缩略语速查)** · **[DO-160](#d)**

---

## D

> **DDV** (Direct Drive Valve) — *直接驱动阀*
> 由力矩马达直接驱动阀芯的电液伺服阀，省去传统EHSV的液压放大级。抗污染能力比EHSV高10倍以上，MTBF可达15,000~25,000小时。常用于A380和B787的飞控液压系统。
> 相关章节：[第13章](/guide/part2/chapter-13) · [第65章](/guide/part2/chapter-65)
> 关联术语：**[EHSV](#e)** · **[EMA](#补充缩略语速查)** · **[力矩马达]**

> **DFMEA** (Design Failure Mode and Effects Analysis) — *设计失效模式与影响分析*
> 在设计阶段系统识别潜在失效模式的预防性分析方法。风险优先数：$RPN = S \times O \times D$，其中$S$=严重度、$O$=频度、$D$=检测度（1~1000）。航空阀门DFMEA需覆盖阀体/阀芯/密封/驱动/电连接5大组件。
> 相关章节：[第47章](/guide/part4/chapter-47)
> 关联术语：**[FMECA](#f)** · **[FTA](#f)** · **[RPN](#r)**

> **DO-160** (DO-160G) — *机载设备环境条件与测试程序*
> RTCA发布的航空机载设备环境鉴定标准，含26个Section。对阀门直接影响最大：Sec.4温度/高度、Sec.7工作冲击、Sec.8振动、Sec.16电源输入和Sec.20射频敏感度。
> 相关章节：[第33章](/guide/part3/chapter-33) · [第35章](/guide/part3/chapter-35) · [第56章](/guide/part5/chapter-56)
> 关联术语：**[FAR](#f)** · **[CS](#c)** · **[CCAR](#c)** · **[EMC](#e)** · **[HIRF](#h)**

> **DVC** (Design Verification Checklist) — *设计校验清单*
> Avis提出的结构化设计评审工具，含力学/流体/热/电磁/可靠性/制造6大域共47个检查项。DVC在CDR前强制使用，目标将设计错误检出率提升至>95%。
> 相关章节：[附录A](/guide/appendix/appendix-a)
> 关联术语：**[DFMEA](#d)** · **[CDR](#补充缩略语速查)** · **[V&V](#v)**

---

## E

> **ECS** (Environmental Control System) — *环境控制系统*
> 飞机上用于客舱/货舱温度、压力和空气品质调节的综合系统。ECS阀门包括TCV、流量控制阀、舱压调节阀和NGS惰化阀。
> 相关章节：[第66章](/guide/part2/chapter-66)
> 关联术语：**[TCV](#t)** · **[NGS](#n)** · **[APU](#a)** · **[PRSOV](#p)**

> **EHSV** (Electro-Hydraulic Servo Valve) — *电液伺服阀*
> 将微弱电信号（±10 mA）转换为高精度液压流量控制的机电液转换装置。典型结构：力矩马达→喷嘴挡板（前级）→滑阀（功率级）。带宽100~300 Hz，滞环<3%。最大弱点是抗污染能力差，需NAS 1638 Class 4以上洁净度。
> 相关章节：[第13章](/guide/part2/chapter-13) · [第65章](/guide/part2/chapter-65)
> 关联术语：**[DDV](#d)** · **[FMU](#f)** · **[FADEC](#f)** · **[PWM](#p)**

> **EMC** (Electromagnetic Compatibility) — *电磁兼容性*
> 设备在电磁环境中正常工作的能力，包含EMI和EMS两个维度。航空阀门EMC按照DO-160 Sec.16~20执行，关键测试包括HIRF（最高7200 V/m）和雷电间接效应（最高Level 5）。
> 相关章节：[第56章](/guide/part5/chapter-56)
> 关联术语：**[HIRF](#h)** · **[DO-160](#d)** · **[EMI]**

---

## F

> **FADEC** (Full Authority Digital Engine Control) — *全权限数字发动机控制*
> 现代航空发动机的计算机控制系统，从起动到最大推力全程自动控制燃油流量、可调几何机构（VBV/VSV）和主动间隙（ACC）。要求控制回路采样率>100 Hz，冗余架构为双通道+交叉通道数据链。
> 相关章节：[第61章](/guide/part6/chapter-61) · [第63章](/guide/part2/chapter-63)
> 关联术语：**[FMU](#f)** · **[HMU](#h)** · **[EEC](#补充缩略语速查)** · **[EHSV](#e)**

> **FAR** (Federal Aviation Regulations) — *（美国）联邦航空条例*
> FAA发布的14 CFR法规体系。FAR 25.1309条款要求灾难性失效状态的概率 $< 10^{-9} / \text{FH}$。FAR 33部直接约束航空发动机阀门的设计验证。
> 相关章节：[第33章](/guide/part3/chapter-33) · [第67章](/guide/part4/chapter-67)
> 关联术语：**[CS](#c)** · **[CCAR](#c)** · **[DO-160](#d)** · **[FAA](#补充缩略语速查)**

> **FCV** (Fuel Control Valve) — *燃油控制阀*
> 飞机燃油系统中的核心流量调节元件。FCV由FMU/EEC直接驱动，响应时间<50 ms，流量精度±1%全量程。需满足FAR 25.981燃油箱防爆安全要求。
> 相关章节：[第64章](/guide/part2/chapter-64)
> 关联术语：**[FMU](#f)** · **[PRSOV](#p)** · **[HPV](#h)** · **[FADEC](#f)**

> **FFKM** (Perfluoroelastomer) — *全氟醚橡胶*
> 完全氟化的弹性体，使用温度-20°C~+325°C，几乎耐受所有化学介质。航天阀门中用于推进剂接触密封，航空阀门中用于高温液压和燃油密封。典型品牌：Kalrez、Chemraz。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第9章](/guide/part2/chapter-09) · [第57章](/guide/part5/chapter-57)
> 关联术语：**[FKM](#f)** · **[PTFE](#p)** · **[O形圈](#o)** · **[MMH](#m)**

> **FKM** (Fluoroelastomer) — *氟橡胶*
> 含氟合成橡胶，氟含量66%~70%，使用温度-20°C~+230°C。耐燃油、液压油和合成润滑油性能优异。常见牌号Viton（DuPont）、Dyneon（3M）。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第9章](/guide/part2/chapter-09)
> 关联术语：**[FFKM](#f)** · **[PTFE](#p)** · **[O形圈](#o)** · **[绿色推进剂](/guide/part5/chapter-57)**

> **FMECA** (Failure Mode, Effects and Criticality Analysis) — *故障模式、影响及危害性分析*
> 在FMEA基础上加入危害性维度，定量危害性数：$C_m = \beta \cdot \alpha \cdot \lambda_p \cdot t$。航天阀门FMECA需覆盖所有单点失效并证明其不会导致灾难性后果。参考标准：ECSS-Q-ST-30-02C、MIL-STD-1629A。
> 相关章节：[第47章](/guide/part4/chapter-47) · [附录E](/guide/appendix/appendix-e)
> 关联术语：**[FTA](#f)** · **[DFMEA](#d)** · **[RPN](#r)** · **[MIL-STD-1629A]**

> **FMU** (Fuel Metering Unit) — *燃油计量单元*
> 航空发动机燃料系统中根据FADEC指令精确计量供给燃烧室燃油流量的液压机械组件。集成了燃油泵、计量阀（FMV）、压差调节器和超速保护阀。典型流量范围200~10,000 kg/h，响应时间<30 ms。
> 相关章节：[第63章](/guide/part2/chapter-63) · [第64章](/guide/part2/chapter-64)
> 关联术语：**[FADEC](#f)** · **[HMU](#h)** · **[EEC](#补充缩略语速查)** · **[FCV](#f)**

> **FTA** (Fault Tree Analysis) — *故障树分析*
> 自顶向下的演绎式系统可靠性分析方法。以顶事件为起点，通过逻辑门（AND/OR）逐层分解至基本事件。FAR 25.1309要求FTA证明灾难性事件概率 $< 10^{-9}/\text{FH}$。常用软件：Isograph Reliability Workbench、CAFTA。
> 相关章节：[第47章](/guide/part4/chapter-47)
> 关联术语：**[FMECA](#f)** · **[FMEA](#d)** · **[ARP 4761](#a)** · **[AND/OR门]**

---

## G

> **GJB** (Guojun Biao) — *中国军用标准*
> 中国军用标准体系。与阀门直接相关：GJB 150（环境试验）、GJB 151B（电磁兼容）、GJB 899A（可靠性鉴定）、GJB 9001C（质量管理）。
> 相关章节：[第36章](/guide/part3/chapter-36) · [第48章](/guide/part4/chapter-48)
> 关联术语：**[MIL](#m)** · **[CCAR](#c)** · **[NASA-STD](#n)**

---

## H

> **HALT** (Highly Accelerated Life Test) — *高加速寿命试验*
> 通过逐步递增应力将产品逼至失效极限以发现设计薄弱点的试验方法。阀门HALT典型流程：低温步进（-100°C）→高温步进（+200°C）→快速温变（60°C/min）→随机振动（最高50 Grms）→综合应力。
> 相关章节：[第55章](/guide/part5/chapter-55)
> 关联术语：**[HASS](#h)** · **[可靠性试验](/guide/part5/chapter-55)** · **[加速寿命ALT]**

> **HASS** (Highly Accelerated Stress Screen) — *高加速应力筛选*
> 基于HALT确定的工作极限和破坏极限，对生产件施加加速应力以激发早期缺陷。应力水平为破坏极限80%，暴露时间2~4小时。
> 相关章节：[第55章](/guide/part5/chapter-55)
> 关联术语：**[HALT](#h)** · **[可靠性试验](/guide/part5/chapter-55)**

> **HCF** (High Cycle Fatigue) — *高周疲劳*
> 循环次数 $> 10^4 \sim 10^5$ 次的疲劳失效模式，应力低于屈服强度。设计基于S-N曲线和Goodman修正。钛合金阀杆表面粗糙度需控制至 $R_a \le 0.2\,\mu\text{m}$。
> 相关章节：[第7章](/guide/part2/chapter-07) · [第8章](/guide/part2/chapter-08)
> 关联术语：**[LCF](#l)** · **[S-N曲线]** · **[Goodman修正]**

> **HIRF** (High Intensity Radiated Fields) — *高强度辐射场*
> 外部电磁辐射源产生的强电磁场环境，最高7,200 V/m（DO-160 Sec.20 Level 3）。HIRF对电磁阀线圈和位置传感器的干扰可导致阀门误动作。
> 相关章节：[第56章](/guide/part5/chapter-56)
> 关联术语：**[EMC](#e)** · **[DO-160](#d)** · **[雷电防护]**

> **HMU** (Hydro-Mechanical Unit) — *液压机械单元*
> 航空发动机燃油控制的液压机械组件，与EEC配合完成燃油计量。HMU保留液压放大和故障安全保护功能。HMU+EEC=FADEC燃油控制链。
> 相关章节：[第61章](/guide/part6/chapter-61) · [第63章](/guide/part2/chapter-63)
> 关联术语：**[FMU](#f)** · **[FADEC](#f)** · **[EEC](#补充缩略语速查)**

> **HPV** (High Pressure Valve) — *高压关断阀*
> 飞机燃油系统中安装于高压泵出口的关断阀，用于紧急切断高压燃油供给。关闭时间<100 ms，内漏率≤1滴/分钟。FAR 25.997要求具备"可靠的、无意的关闭保护"。
> 相关章节：[第64章](/guide/part2/chapter-64)
> 关联术语：**[PRSOV](#p)** · **[FCV](#f)** · **[FMU](#f)**

> **HUMS** (Health and Usage Monitoring System) — *健康与使用监测系统*
> 集成传感器、数据采集、信号处理和诊断算法的机载系统。阀门HUMS监测参数：作动次数、累计作动时间、响应时间趋势、线圈阻抗漂移和端面温度。美军UH-60/AH-64部署后将计划外维修减少40%。
> 相关章节：[第41章](/guide/part4/chapter-41) · [第54章](/guide/part5/chapter-54)
> 关联术语：**[CBM](#c)** · **[数字孪生](/guide/part4/chapter-41)** · **[传感器](/guide/part5/chapter-54)**

---

## I

> **INCOSE** (International Council on Systems Engineering) — *国际系统工程协会*
> 系统工程领域全球权威专业组织，发布了《系统工程手册》（SE Handbook v5）和SEBoK。INCOSE倡导的Vee模型是航空阀门系统工程的公认框架。
> 相关章节：[第10章](/guide/part2/chapter-10) · [第37章](/guide/part4/chapter-37)
> 关联术语：**[SE](#s)** · **[V&V](#v)** · **[Vee模型]**

---

## L

> **LCF** (Low Cycle Fatigue) — *低周疲劳*
> 循环次数 $< 10^4$ 次、应力接近屈服强度的疲劳失效模式。Manson-Coffin关系：
> $$\frac{\Delta\varepsilon}{2} = \frac{\sigma_f'}{E}(2N_f)^b + \varepsilon_f'(2N_f)^c$$
> 火箭发动机阀门每次发射经历一次完整热-力循环。Inconel 718在550°C下的LCF寿命需满足≥4倍设计循环（含1.4倍安全系数）。
> 相关章节：[第7章](/guide/part2/chapter-07) · [第25章](/guide/part2/chapter-25) · [第26章](/guide/part2/chapter-26)
> 关联术语：**[HCF](#h)** · **[Manson-Coffin]** · **[ε-N曲线]**

> **LH2** (Liquid Hydrogen) — *液氢*
> 沸点-253°C（20 K），密度70.85 kg/m³。用于运载火箭上面级和RS-25发动机燃料。液氢阀门面临极低温密封、热分层、氢脆和正仲氢转化热管理等独特挑战。
> 相关章节：[第25章](/guide/part2/chapter-25)
> 关联术语：**[LOX](#l)** · **[低温密封](/guide/part2/chapter-09)** · **[氢脆]**

> **LOX** (Liquid Oxygen) — *液氧*
> 沸点-183°C（90 K），密度1,141 kg/m³。为大多数液体火箭的氧化剂。液氧阀门的关键安全问题是材料兼容性——绝热压缩点火是阀门设计必须排除的风险场景。
> 相关章节：[第25章](/guide/part2/chapter-25)
> 关联术语：**[LH2](#l)** · **[低温密封](/guide/part2/chapter-09)** · **[绝热压缩]**

---

## M

> **MIL** (Military Standard / Specification) — *美军标*
> 美国国防部标准化文件体系。航天阀门常引用MIL-STD-810（环境试验）、MIL-STD-461（电磁兼容）、MIL-STD-1522A（航天系统安全性）。MIL-STD-1522A要求所有压力容器进行1.5倍MEOP耐压试验。
> 相关章节：[第33章](/guide/part3/chapter-33)
> 关联术语：**[GJB](#g)** · **[NASA-STD](#n)** · **[SAE](#s)**

> **MMH** (Monomethylhydrazine) — *一甲基肼*
> 化学式CH₃NHNH₂，双组元推进剂系统燃料（与N₂O₄配对）。高毒性（TLV 0.01 ppm），对大多数弹性体（除FFKM外）有溶胀作用。密封材料需经过42天浸泡兼容性试验（ECSS-Q-ST-70-36C）。
> 相关章节：[第57章](/guide/part5/chapter-57)
> 关联术语：**[FFKM](#f)** · **[N₂O₄](#补充缩略语速查)** · **[绿色推进剂](/guide/part5/chapter-57)**

> **MRL** (Manufacturing Readiness Level) — *制造就绪水平*
> DoD和NASA定义的10级标尺（MRL 1-10），评估制造技术成熟度。与TRL配对使用。阀门MRL 4到MRL 8过渡通常需1,500~3,000万美元。
> 相关章节：[第5章](/guide/part1/chapter-05)
> 关联术语：**[TRL](#t)** · **[制造就绪]** · **[NASA](#n)**

> **MSG-3** (Maintenance Steering Group, 3rd Task Force) — *维修指导小组第三工作组方法*
> 现代民用飞机维修大纲制定的标准分析方法。对阀门进行功能-失效-影响-后果逻辑链分析，确定维修任务类型。B787/A350将90%以上阀门归为"视情"而非"定时"维修。
> 相关章节：[第34章](/guide/part3/chapter-34) · [第67章](/guide/part4/chapter-67)
> 关联术语：**[CBM](#c)** · **[维修性](/guide/part3/chapter-34)** · **[FAR](#f)**

---

## N

> **NASA-STD** (NASA Standard) — *NASA标准*
> NASA技术标准。核心引用：NASA-STD-5017（结构设计）、NASA-STD-5019（断裂控制）。NASA-STD-5019A要求所有断裂关键件进行断裂力学分析，临界裂纹尺寸≥1.5倍NDT检测能力。
> 相关章节：[第33章](/guide/part3/chapter-33)
> 关联术语：**[MIL](#m)** · **[GJB](#g)** · **[SAE](#s)**

> **NDE** (Non-Destructive Evaluation) — *无损评价*
> 在NDT基础上增加定量评价维度。阀门NDE常用方法：数字射线（DR→CT三维重构）、相控阵超声（PAUT→缺陷三维定位）和涡流阵列（ECA→表面裂纹自动检测）。
> 相关章节：[第23章](/guide/part2/chapter-23)
> 关联术语：**[NDT](#n)** · **[CT](#补充缩略语速查)** · **[PAUT]**

> **NDT** (Non-Destructive Testing) — *无损检测*
> 不破坏工件的前提下检测其表面和内部缺陷。阀门常用：渗透检测（PT→表面开口缺陷）、射线检测（RT→内部气孔）、超声检测（UT→内部裂纹）和磁粉检测（MT→铁磁性材料表面裂纹）。
> 相关章节：[第23章](/guide/part2/chapter-23)
> 关联术语：**[NDE](#n)** · **[PT/RT/UT/MT]** · **[ASTM E1742]**

> **NGS** (Nitrogen Generation System) — *氮气发生系统*
> 飞机燃油箱惰化系统核心组件，通过空气分离模块（ASM）将引气中氧气从~21%降至~9%。FAR 25.981条款自2008年修正后强制要求安装燃油箱惰化系统。
> 相关章节：[第66章](/guide/part2/chapter-66)
> 关联术语：**[ECS](#e)** · **[FAR 25.981]** · **[ASM](#补充缩略语速查)**

---

## O

> **O形圈** (O-Ring) — *弹性体环形密封件*
> 最简单且应用最广的阀门密封元件。压缩率15%~25%，沟槽设计遵循AS 568系列。航空阀门常用：FKM（燃油/液压）、FFKM（推进剂/化学）、EPDM（磷酸酯液压油）。挑战者号事故后，O形圈低温弹性恢复成为航天阀门设计红线。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第9章](/guide/part2/chapter-09) · [第12章](/guide/part2/chapter-12)
> 关联术语：**[FFKM](#f)** · **[FKM](#f)** · **[PTFE](#p)** · **[密封工程设计](/guide/part2/chapter-12)**

---

## P

> **PEEK** (Polyetheretherketone) — *聚醚醚酮*
> 半结晶高性能热塑性塑料，$T_g \approx 143^\circ\text{C}$，$T_m \approx 343^\circ\text{C}$。连续使用温度260°C，拉伸强度~100 MPa。在阀门中用于阀座、导向环和电绝缘垫片。耐辐照剂量可达 $10^7$ Gy，适用于核电推进阀门。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第43章](/guide/part4/chapter-43) · [第58章](/guide/part5/chapter-58)
> 关联术语：**[PTFE](#p)** · **[FFKM](#f)** · **[CMC](#c)**

> **PRSOV** (Pressure Regulating and Shut-Off Valve) — *压力调节关断阀*
> 飞机燃油系统中兼具压力调节和关断功能的机电一体化阀门。将泵出口压力（10~20 MPa）调节为供油管路所需压力（3~7 MPa）。全关到全开<100 ms，稳态调解精度±2%。
> 相关章节：[第64章](/guide/part2/chapter-64)
> 关联术语：**[HPV](#h)** · **[FCV](#f)** · **[FMU](#f)**

> **PTFE** (Polytetrafluoroethylene) — *聚四氟乙烯*
> 摩擦系数极低（~0.04）、化学惰性极强的氟塑料。-200°C~+260°C宽温域适用。阀门中用作密封材料（V形填料、垫片）和阀座衬里。高压密封需添加填充物改善抗变形能力。品牌Teflon。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第12章](/guide/part2/chapter-12)
> 关联术语：**[PEEK](#p)** · **[FFKM](#f)** · **[FKM](#f)** · **[O形圈](#o)**

> **PWM** (Pulse Width Modulation) — *脉宽调制*
> 通过调节脉冲宽度控制输出平均电压/电流的调制方式。电磁阀中PWM用于比例控制——通过改变占空比调节线圈电流，线性控制阀芯位置。载波频率需避开阀芯机械共振频率（通常<200 Hz）。
> 相关章节：[第61章](/guide/part6/chapter-61)
> 关联术语：**[FADEC](#f)** · **[EHSV](#e)** · **[电磁阀](/guide/part2/chapter-13)**

---

## R

> **RCS** (Reaction Control System) — *反作用控制系统*
> 航天器姿态控制和小轨道机动的推进系统。RCS阀门要求：单脉冲最小开启时间≤10 ms、脉冲重复性±1 ms、累计循环寿命 $> 10^5$ 次。
> 相关章节：[第26章](/guide/part2/chapter-26) · [第62章](/guide/part6/chapter-62)
> 关联术语：**[TAV](#t)** · **[姿控阀](#1-阀门分类学树状图)** · **[MMH](#m)**

> **RPN** (Risk Priority Number) — *风险优先数*
> FMEA中用于风险排序的综合指标：$RPN = S \times O \times D$，取值范围1~1000。RPN≥100触发强制改进，60≤RPN<100建议评估。FAA AC 25.1309-1A指出RPN不能替代定性危害分级。
> 相关章节：[第47章](/guide/part4/chapter-47)
> 关联术语：**[DFMEA](#d)** · **[FMECA](#f)** · **[FTA](#f)**

---

## S

> **SAE** (SAE International) — *国际自动机工程师学会*
> 全球航空航天标准主要发布机构。SAE AS（标准）和ARP（推荐实践）覆盖设计、材料、测试和维修。AS 568（O形圈尺寸）和AS 4395（流体接头）是阀门设计中最常引用的两项标准。
> 相关章节：[第33章](/guide/part3/chapter-33)
> 关联术语：**[ARP](#a)** · **[FAR](#f)** · **[MIL](#m)**

> **SCC** (Stress Corrosion Cracking) — *应力腐蚀开裂*
> 拉伸应力和腐蚀介质共同作用引发的裂纹萌生与扩展。航空阀门常见SCC：铝合金阀体+含氯环境、马氏体不锈钢阀杆+硫化物介质。防范措施：材料选择（17-4PH H1150替代H900）、应力消除热处理和防护涂层。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第46章](/guide/part4/chapter-46)
> 关联术语：**[HCF](#h)** · **[LCF](#l)** · **[应力腐蚀]**

> **SE** (Systems Engineering) — *系统工程*
> 跨学科的结构化产品开发方法论，涵盖需求开发、架构设计、集成和验证确认全生命周期。NASA NPR 7123.1是航天系统工程的标准框架。
> 相关章节：[第10章](/guide/part2/chapter-10) · [第37章](/guide/part4/chapter-37)
> 关联术语：**[INCOSE](#i)** · **[V&V](#v)** · **[Vee模型]**

> **SMA** (Shape Memory Alloy) — *形状记忆合金*
> 在特定温度下可恢复预设形状的智能材料。NiTi（Nitinol）相变温度 $A_f$ 可在-100°C~+100°C范围内定制。在阀门中用于温控自力式阀、火工替代解锁机构和自适应密封。
> 相关章节：[第53章](/guide/part5/chapter-53)
> 关联术语：**[压电驱动阀](/guide/part5/chapter-53)** · **[智能材料]** · **[Nitinol]**

---

## T

> **TAV** (Thruster Actuator Valve) — *推力器作动阀*
> 航天器推力器核心快响应阀门，控制推进剂精确脉冲供给。典型指标：响应时间≤5 ms、关闭时间≤8 ms、内漏率≤1×10⁻⁵ scc/s GHe、脉冲重复性±0.5 ms。电磁驱动+永磁偏置+金属硬密封架构。Moog和Marotta是主要供应商。
> 相关章节：[第13章](/guide/part2/chapter-13) · [第26章](/guide/part2/chapter-26) · [第62章](/guide/part6/chapter-62)
> 关联术语：**[RCS](#r)** · **[EHSV](#e)** · **[Moog](#补充缩略语速查)**

> **TBC** (Thermal Barrier Coating) — *热障涂层*
> 沉积在高温金属基底上的陶瓷隔热层，MCrAlY粘结层（~100μm）+ YSZ陶瓷顶层（~250μm），可降低基底温度100~200°C。航空发动机涡轮阀门高温阀座已应用。先进Gd₂Zr₂O₇体系工作温度可达1400°C。
> 相关章节：[第19章](/guide/part2/chapter-19) · [第43章](/guide/part4/chapter-43)
> 关联术语：**[CMC](#c)** · **[CrN](#补充缩略语速查)** · **[YSZ](#补充缩略语速查)**

> **TBV** (Transient Bleed Valve) — *瞬态放气阀*
> 航空发动机压气机稳定性控制阀门，在瞬态工况时快速打开防止喘振。打开时间<100 ms，流量容量达总核心流量的5%~15%。
> 相关章节：[第63章](/guide/part2/chapter-63)
> 关联术语：**[VBV](#v)** · **[VSV](#v)** · **[ACC](#a)** · **[喘振]**

> **TCV** (Temperature Control Valve) — *温度控制阀*
> 飞机ECS中混合热/冷路空气以控制供气温度的三通比例阀。控制精度输出温度波动<±2°C，响应时间<5 s。B787的TCV采用电动+双余度位置反馈架构。
> 相关章节：[第66章](/guide/part2/chapter-66)
> 关联术语：**[ECS](#e)** · **[NGS](#n)** · **[PRSOV](#p)**

> **TRL** (Technology Readiness Level) — *技术就绪水平*
> NASA提出的9级技术成熟度评估标尺。阀门TRL关键节点：TRL 4（实验室功能验证）、TRL 5（相关环境缩比验证）、TRL 6（相关环境工程样机）、TRL 9（飞行成功）。TRL 6到TRL 9的飞行鉴定是投入最大阶段（18~36个月）。
> 相关章节：[第5章](/guide/part1/chapter-05)
> 关联术语：**[MRL](#m)** · **[NASA](#n)** · **[飞行鉴定](/guide/part3/chapter-35)**

---

## V

> **V&V** (Verification and Validation) — *验证与确认*
> Validation（确认）："构建了正确的产品吗？"；Verification（验证）："正确构建了产品吗？"。阀门V&V方法：分析、检查、演示和测试。核心标准：DO-178C（软件）、ARP 4754A（系统）、NASA-STD-7009（模型）。
> 相关章节：[第10章](/guide/part2/chapter-10) · [第35章](/guide/part3/chapter-35) · [第37章](/guide/part4/chapter-37)
> 关联术语：**[SE](#s)** · **[INCOSE](#i)** · **[DO-178C]** · **[ARP 4754A](#a)**

> **VBV** (Variable Bleed Valve) — *可变放气阀*
> 航空发动机低压压气机出口放气阀门，在低转速时释放部分空气维持压气机稳定裕度。CFM56的VBV系统含12个放气活门，由单个液压作动器通过柔性轴同步驱动。
> 相关章节：[第63章](/guide/part2/chapter-63)
> 关联术语：**[VSV](#v)** · **[TBV](#t)** · **[ACC](#a)** · **[CFM56]**

> **VSV** (Variable Stator Vane) — *可变静子叶片*
> 航空发动机高压压气机前几级角度可调静子叶片系统。通过改变静叶安装角调节气流攻角。位置精度±1°，同步性要求<0.5°。
> 相关章节：[第63章](/guide/part2/chapter-63)
> 关联术语：**[VBV](#v)** · **[TBV](#t)** · **[ACC](#a)** · **[FADEC](#f)**

---

## W

> **焊缝系数** (Weld Joint Efficiency) — *焊接接头系数*
> 焊接接头强度与母材强度的比值，用于壁厚计算：
> $$t \ge \frac{p \cdot D}{2 \cdot S \cdot E - 1.2p}$$
> ASME BPVC Sec.VIII Div.1：全透射双面焊 100% RT → $E=1.0$；全透射单面焊 抽样RT → $E=0.85$；角焊缝 → $E=0.45$。阀门承压焊缝通常要求 $E \ge 0.85$。
> 相关章节：[第7章](/guide/part2/chapter-07) · [第29章](/guide/part3/chapter-29)
> 关联术语：**[Barlow公式](#b)** · **[ASME](#补充缩略语速查)** · **[NDT](#n)**

---

## 补充缩略语速查

| 缩写 | 全称 | 中文 |
|------|------|------|
| ACM | Air Cycle Machine | 空气循环机 |
| ADN | Ammonium Dinitramide | 二硝酰胺铵（绿色推进剂） |
| ASM | Air Separation Module | 空气分离模块 |
| CCDL | Cross Channel Data Link | 交叉通道数据链 |
| CDR | Critical Design Review | 关键设计评审 |
| CTE | Coefficient of Thermal Expansion | 热膨胀系数 |
| DLC | Diamond-Like Carbon | 类金刚石涂层 |
| EEC | Electronic Engine Control | 电子发动机控制器 |
| EPDM | Ethylene Propylene Diene Monomer | 三元乙丙橡胶 |
| FAA | Federal Aviation Administration | 美国联邦航空局 |
| EASA | European Union Aviation Safety Agency | 欧洲航空安全局 |
| CAAC | Civil Aviation Administration of China | 中国民用航空局 |
| FHA | Functional Hazard Assessment | 功能危害评估 |
| HAN | Hydroxylammonium Nitrate | 硝酸羟胺（绿色推进剂） |
| IGV | Inlet Guide Vane | 进口导叶 |
| LRU | Line Replaceable Unit | 航线可更换单元 |
| MEOP | Maximum Expected Operating Pressure | 最大预期工作压力 |
| MTBF | Mean Time Between Failures | 平均故障间隔时间 |
| N₂O₄ | Nitrogen Tetroxide | 四氧化二氮 |
| PSSA | Preliminary System Safety Assessment | 初步系统安全性评估 |
| SFC | Specific Fuel Consumption | 燃油消耗率 |
| SSA | System Safety Assessment | 系统安全性评估 |
| YSZ | Yttria-Stabilized Zirconia | 氧化钇稳定氧化锆 |
| CrN | Chromium Nitride | 氮化铬（硬质涂层） |

---

## 术语统计

- **正文术语**：82个详解条目（含关联术语交叉引用）
- **补充缩略语**：24条速查
- **总计**：**106条术语**，覆盖航空航天阀门全领域
- **知识域**：基础科学(4) · 设计工程(11) · 材料(8) · 制造工艺(2) · 航天阀门(4) · 航空阀门(9) · 适航标准(10) · 可靠性(11) · 系统工程(5) · 前沿技术(2) · 缩略语速查(24)

---

## 贡献术语

如发现缺失的重要术语，请通过 GitHub Issue 提交，格式如下：

```
**术语名称（中文）** / **English Name** / 缩写
- 定义：（100-200字详解，含技术原理、应用场景、相关标准）
- 相关章节：
- 关联术语：
- 参考文献：
```
*（内容由AI生成，仅供参考）*
*（内容由AI生成，仅供参考）*
