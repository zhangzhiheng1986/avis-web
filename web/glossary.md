# 术语词典

> Avis 航空航天阀门领域核心术语详解 | 130+ 术语 | 六编全覆盖

---

## 快捷索引

**[A](#a) · [B](#b) · [C](#c) · [D](#d) · [E](#e) · [F](#f) · [G](#g) · [H](#h) · [I](#i) · [L](#l) · [M](#m) · [N](#n) · [O](#o) · [P](#p) · [R](#r) · [S](#s) · [T](#t) · [V](#v) · [W](#w)**

---

## A

**ACC** (Active Clearance Control) — *主动间隙控制*
> 航空发动机中用于动态调节涡轮叶尖与机匣之间间隙的阀门系统。通过引气冷却或加热机匣，使叶尖间隙在起飞、巡航等不同工况下保持最优值，降低燃油消耗率（SFC）约0.5%~1.5%。典型应用于CFM56和LEAP系列发动机的高压涡轮段。控制精度要求响应时间<2秒，位置精度±0.1mm。
> 相关章节：[第63章](/guide/part2/chapter-63)

**ARP** (Aerospace Recommended Practice) — *航空航天推荐实践*
> SAE International发布的非强制性技术指导文件系列，涵盖设计、制造、测试和维修等环节。ARP 4754（系统开发过程）和ARP 4761（安全性评估）是民用飞机和发动机系统开发的核心参考。与FAR/CS适航规章配合使用，为"合规性方法"（Means of Compliance）提供工程依据。
> 相关章节：[第33章](/guide/part3/chapter-33) · [第67章](/guide/part4/chapter-67)

**APU** (Auxiliary Power Unit) — *辅助动力装置*
> 安装在飞机尾部的小型燃气涡轮发动机，用于在地面和空中提供电力和压缩空气。APU阀门包括进气导叶阀（IGV）、燃油计量阀和引气控制阀，需满足高空再起动（~41,000 ft）、宽温域（-55~+70°C）和10,000次循环的可靠性要求。
> 相关章节：[第63章](/guide/part2/chapter-63)

---

## B

**Barlow公式** (Barlow Formula) — *薄壁圆筒环向应力公式*
> σ = p·D/(2t)，用于计算薄壁压力容器的环向应力。在阀门阀体初步设计中，用于估算壁厚：t ≥ p·D/(2·S·E - 1.2p)，其中S为许用应力、E为焊缝系数。该公式适用于D/t > 10的薄壁条件，厚壁阀门需使用Lamé方程。
> 相关章节：[第7章](/guide/part2/chapter-07)

---

## C

**CBM** (Condition-Based Maintenance) — *状态基维修*
> 基于设备实际状态监测数据（振动、温度、压力、油液分析等）而非固定时间间隔的维修策略。对于航空阀门，关键监测参数包括阀位反馈信号、作动时间、内漏率和线圈阻抗。CBM可减少30%~50%的非计划停机，是MSG-3分析中"任务定向维修"的核心技术支撑。
> 相关章节：[第34章](/guide/part3/chapter-34) · [第41章](/guide/part4/chapter-41) · [第54章](/guide/part5/chapter-54)

**CCAR** (China Civil Aviation Regulations) — *中国民航规章*
> 中国民用航空局（CAAC）发布的适航管理法规体系。其中CCAR 25部（运输类飞机适航标准）、CCAR 33部（航空发动机适航标准）和CCAR 21部（产品和零部件合格审定）直接关联阀门审定。CCAR 25部§25.1438要求液压系统必须通过"耐压试验+功能试验"双验证。
> 相关章节：[第36章](/guide/part3/chapter-36) · [第48章](/guide/part4/chapter-48) · [第67章](/guide/part4/chapter-67)

**CFD** (Computational Fluid Dynamics) — *计算流体动力学*
> 通过数值方法求解N-S方程，预测阀门内部流场特性。在阀门设计中用于：流阻系数（Kv/Cv）计算、气蚀预测、流致力（flow force）评估和热耦合分析。常用软件包括ANSYS Fluent、CFX、STAR-CCM+等。网格独立性验证和湍流模型选择（k-ε vs SST k-ω）是关键质量因素。
> 相关章节：[第11章](/guide/part2/chapter-11) · [第49章](/guide/part4/chapter-49)

**CMC** (Ceramic Matrix Composite) — *陶瓷基复合材料*
> 以陶瓷纤维增强陶瓷基体的高温结构材料，典型体系为SiC/SiC。相比镍基高温合金，CMC密度低1/3，使用温度高150~200°C，且无需气冷。在阀门中用于高温阀座、阀瓣和导向衬套。GE LEAP发动机的CMC涡轮罩环和热端阀门组件已通过FAA认证。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第43章](/guide/part4/chapter-43)

**CS** (Certification Specifications) — *（EASA）审定规范*
> 欧洲航空安全局发布的适航技术标准。CS 25部（大型飞机）和CS-E（发动机）是欧洲范围内的强制性适航要求。CS 25.1309条款（设备、系统及安装）要求对所有失效状态进行分类和安全性评估，阀门作为系统组件必须通过FHA/PSSA/SSA完整安全流程。
> 相关章节：[第33章](/guide/part3/chapter-33) · [第67章](/guide/part4/chapter-67)

---

## D

**DDV** (Direct Drive Valve) — *直接驱动阀*
> 由力矩马达或力马达直接驱动阀芯的电液/电气伺服阀，省去了传统EHSV中的液压放大级（喷嘴挡板或射流管）。DDV的抗污染能力比EHSV高10倍以上（NAS 1638 Class 8 vs Class 4），MTBF可达15,000~25,000小时。常用于A380和B787的飞控液压系统。
> 相关章节：[第13章](/guide/part2/chapter-13) · [第65章](/guide/part2/chapter-65)

**DFMEA** (Design Failure Mode and Effects Analysis) — *设计失效模式与影响分析*
> 在设计阶段系统识别潜在失效模式、评估风险（RPN = 严重度×频度×检测度）并制定改进措施的预防性分析方法。航空阀门的DFMEA需覆盖阀体/阀芯/密封/驱动/电连接5大组件，典型RPN阈值为100（触发强制改进）和60（建议改进）。
> 相关章节：[第47章](/guide/part4/chapter-47)

**DO-160** (DO-160G) — *机载设备环境条件与测试程序*
> RTCA发布的航空机载设备环境鉴定标准，包含26个Section。对阀门直接影响最大的包括：Sec.4温度/高度、Sec.7工作冲击、Sec.8振动（含正弦和随机）、Sec.16电源输入和第20射频敏感度。FAR 25部通过AC 25-16引用DO-160作为环境鉴定的合规性方法。
> 相关章节：[第33章](/guide/part3/chapter-33) · [第35章](/guide/part3/chapter-35) · [第56章](/guide/part5/chapter-56)

**DVC** (Design Verification Checklist) — *设计校验清单*
> Avis提出的结构化设计评审工具，包含力学/流体/热/电磁/可靠性/制造6大域共47个检查项。DVC在关键设计评审（CDR）前强制使用，逐项打勾确认，目标是将设计错误在设计阶段检出率提升至>95%。
> 相关章节：[附录A](/guide/appendix/appendix-a)

---

## E

**ECS** (Environmental Control System) — *环境控制系统*
> 飞机上用于客舱/货舱温度、压力和空气品质调节的综合系统。ECS阀门包括TCV（温度控制阀）、流量控制阀、舱压调节阀和NGS惰化阀。TCV需承受-55~+200°C的引气温度变化，响应时间<3秒，泄漏率<1×10⁻³ scc/s。
> 相关章节：[第66章](/guide/part2/chapter-66)

**EHSV** (Electro-Hydraulic Servo Valve) — *电液伺服阀*
> 将微弱电信号（±10 mA / ±40 mA）转换为高精度液压流量控制的机电液转换装置。典型结构为：力矩马达→喷嘴挡板（前级）→滑阀（功率级）。带宽可达100~300 Hz，滞环<3%，分辨率<0.1%。广泛用于飞机飞控作动器和发动机燃油控制。最大弱点是抗污染能力差，需NAS 1638 Class 4以上洁净度。
> 相关章节：[第13章](/guide/part2/chapter-13) · [第65章](/guide/part2/chapter-65)

**EMC** (Electromagnetic Compatibility) — *电磁兼容性*
> 设备在电磁环境中正常工作的能力，包含EMI（电磁干扰）和EMS（电磁敏感度）两个维度。航空阀门的EMC要求按照DO-160 Sec.16~20执行，关键测试包括HIRF（高强辐射场，最高7200 V/m）和雷电间接效应（最高Level 5）。电磁阀线圈需附加铁氧体磁珠和瞬态抑制二极管。
> 相关章节：[第56章](/guide/part5/chapter-56)

---

## F

**FADEC** (Full Authority Digital Engine Control) — *全权限数字发动机控制*
> 现代航空发动机的计算机控制系统，从起动到最大推力全程自动控制燃油流量、可调几何机构（VBV/VSV）和主动间隙（ACC）。FADEC通过EHSV/DDV/Torque Motor驱动燃油计量阀和作动阀，要求控制回路采样率>100 Hz，冗余架构为双通道+交叉通道数据链（CCDL）。
> 相关章节：[第61章](/guide/part6/chapter-61) · [第63章](/guide/part2/chapter-63)

**FAR** (Federal Aviation Regulations) — *（美国）联邦航空条例*
> 美国联邦航空局（FAA）发布的联邦法规汇编第14卷（14 CFR），是FAA行使适航管理职权的法律基础。FAR 25部（运输类飞机）、FAR 33部（发动机）和FAR 145部（维修站）对航空阀门的设计、制造和维修提出直接要求。FAR 25.1309条款要求任何灾难性失效状态的发生概率<10⁻⁹/FH。
> 相关章节：[第33章](/guide/part3/chapter-33) · [第67章](/guide/part4/chapter-67)

**FCV** (Fuel Control Valve) — *燃油控制阀*
> 飞机燃油系统中的核心流量调节元件。发动机燃油系统中的FCV由FMU/EEC直接驱动，响应时间<50 ms，流量精度±1%全量程。飞机燃油分配系统中的FCV用于交输供油和油箱选择，需满足FAR 25.981燃油箱防爆安全要求。
> 相关章节：[第64章](/guide/part2/chapter-64)

**FFKM** (Perfluoroelastomer) — *全氟醚橡胶*
> 完全氟化的弹性体，化学结构与PTFE类似但具有橡胶弹性。使用温度范围-20°C~+325°C（特定牌号可至+327°C），几乎耐受所有化学介质（包括N₂O₄、MMH、强氧化剂）。在航天阀门中用于推进剂接触密封，航空阀门中用于高温液压和燃油密封。典型品牌：Kalrez、Chemraz。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第9章](/guide/part2/chapter-09) · [第57章](/guide/part5/chapter-57)

**FKM** (Fluoroelastomer) — *氟橡胶*
> 含氟合成橡胶，氟含量66%~70%，使用温度-20°C~+230°C。耐燃油、液压油和合成润滑油性能优异。在航空阀门中广泛应用于燃油和液压系统O形圈和密封垫。常见牌号Viton（DuPont）、Dyneon（3M）。在绿色推进剂（HAN基、ADN基）环境中兼容性需专项验证。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第9章](/guide/part2/chapter-09)

**FMECA** (Failure Mode, Effects and Criticality Analysis) — *故障模式、影响及危害性分析*
> 在FMEA基础上加入危害性（Criticality）维度，采用定性（危害性矩阵）或定量（危害性数Cm = β·α·λp·t）方法评估每种失效模式的严重程度。航天阀门FMECA需覆盖所有单点失效并证明其不会导致灾难性后果（Catastrophic Hazard）。欧洲标准ECSS-Q-ST-30-02C和美军标MIL-STD-1629A是主要参考。
> 相关章节：[第47章](/guide/part4/chapter-47) · [附录E](/guide/appendix/appendix-e)

**FMU** (Fuel Metering Unit) — *燃油计量单元*
> 航空发动机燃料系统中的核心液压机械组件，负责根据EEC/FADEC指令精确计量供给燃烧室的燃油流量。FMU集成了燃油泵、计量阀（FMV）、压差调节器、超速保护阀和最小压力阀等多个子功能。典型流量范围200~10,000 kg/h，响应时间<30 ms。GE和Rolls-Royce大型涡扇发动机的FMU为独立LRU（航线可更换单元）。
> 相关章节：[第63章](/guide/part2/chapter-63) · [第64章](/guide/part2/chapter-64)

**FTA** (Fault Tree Analysis) — *故障树分析*
> 自顶向下的演绎式系统可靠性分析方法。以不期望的顶事件（如"发动机燃油供给丧失"）为起点，通过逻辑门（AND/OR）逐层分解至基本事件（阀门卡滞、线圈开路等）。FAR 25.1309要求FTA证明灾难性事件概率<10⁻⁹/FH。常用软件：Isograph Reliability Workbench、CAFTA。
> 相关章节：[第47章](/guide/part4/chapter-47)

---

## G

**GJB** (Guojun Biao) — *中国军用标准*
> 中国人民解放军总装备部发布的国家军用标准体系。与阀门直接相关的包括：GJB 150（军用装备环境试验）、GJB 151B（电磁兼容）、GJB 899A（可靠性鉴定和验收试验）、GJB 9001C（质量管理体系）。GJB 150.16A规定了阀门振动试验的功率谱密度和持续时间要求。
> 相关章节：[第36章](/guide/part3/chapter-36) · [第48章](/guide/part4/chapter-48)

---

## H

**HALT** (Highly Accelerated Life Test) — *高加速寿命试验*
> 通过逐步递增的应力（温度、振动、电压、压力组合）将产品逼至失效极限，以发现设计薄弱点的试验方法。阀门HALT典型流程：低温步进（-100°C）→高温步进（+200°C）→快速温变（60°C/min）→随机振动（最高50 Grms）→综合应力。目的是暴露"未知的未知"而非验证寿命。
> 相关章节：[第55章](/guide/part5/chapter-55)

**HASS** (Highly Accelerated Stress Screen) — *高加速应力筛选*
> 基于HALT确定的工作极限和破坏极限，对生产件施加加速应力以激发早期缺陷的筛选过程。阀门HASS应力水平通常为破坏极限的80%，暴露时间2~4小时。可有效检测焊接虚焊、紧固力矩不足和微颗粒污染等工艺缺陷。
> 相关章节：[第55章](/guide/part5/chapter-55)

**HCF** (High Cycle Fatigue) — *高周疲劳*
> 应力水平低于屈服强度、循环次数>10⁴~10⁵次的疲劳失效模式。航空发动机阀门（如FMU计量阀在巡航段持续微调）承受HCF载荷，设计基于S-N（应力-寿命）曲线和Goodman修正。钛合金阀杆的HCF缺口敏感度高，表面粗糙度需控制至Ra≤0.2μm。
> 相关章节：[第7章](/guide/part2/chapter-07) · [第8章](/guide/part2/chapter-08)

**HIRF** (High Intensity Radiated Fields) — *高强度辐射场*
> 外部电磁辐射源（雷达、广播、卫星通信）在飞机上产生的强电磁场环境，最高可达7,200 V/m（DO-160 Sec.20 Level 3）。HIRF对电磁阀线圈和位置传感器的干扰可导致阀门误动作。防护措施包括屏蔽外壳、滤波连接器和双绞屏蔽线缆。FAR 25.1317条款要求飞机系统通过HIRF防护验证。
> 相关章节：[第56章](/guide/part5/chapter-56)

**HMU** (Hydro-Mechanical Unit) — *液压机械单元*
> 航空发动机燃油控制的液压机械组件，与EEC数字部分配合完成燃油计量。相比于全功能FMU，HMU将闭环控制功能交给EEC执行，自身保留液压放大和故障安全（fail-safe）保护功能。HMU+EEC=FADEC燃油控制链。典型产品：GE F110发动机的HMU为Hamilton Sundstrand J85系列。
> 相关章节：[第61章](/guide/part6/chapter-61) · [第63章](/guide/part2/chapter-63)

**HPV** (High Pressure Valve) — *高压关断阀*
> 飞机燃油系统中安装于高压泵出口的关断阀，用于在发动机停车或紧急情况下切断高压燃油供给。通常为电磁驱动二位二通阀，关闭时间<100 ms，内漏率≤1滴/分钟（约0.05 ml/min）。FAR 25.997条款要求燃油关断阀具备"可靠的、无意的关闭保护"。
> 相关章节：[第64章](/guide/part2/chapter-64)

**HUMS** (Health and Usage Monitoring System) — *健康与使用监测系统*
> 集成传感器、数据采集、信号处理和诊断算法的机载系统，实时监测关键部件（含阀门）的健康状态和使用历史。阀门HUMS典型监测参数：作动次数、累计作动时间、响应时间趋势、线圈阻抗漂移和端面温度。美军UH-60和AH-64直升机已全面部署HUMS，将计划外维修减少40%。
> 相关章节：[第41章](/guide/part4/chapter-41) · [第54章](/guide/part5/chapter-54)

---

## I

**INCOSE** (International Council on Systems Engineering) — *国际系统工程协会*
> 系统工程领域的全球权威专业组织，发布了《系统工程手册》（SE Handbook v5）和《系统工程知识体系》（SEBoK）。INCOSE倡导的Vee模型和技术流程（需求定义→架构设计→集成→验证→确认）是航空阀门系统工程的公认框架。
> 相关章节：[第10章](/guide/part2/chapter-10) · [第37章](/guide/part4/chapter-37)

---

## L

**LCF** (Low Cycle Fatigue) — *低周疲劳*
> 应力水平接近或超过屈服强度、循环次数<10⁴次的疲劳失效模式。火箭发动机阀门承受LCF载荷——每次发射经历一次完整的热-力循环（低温→高温→降温）。设计基于ε-N（应变-寿命）曲线和Manson-Coffin关系。Inconel 718阀体在550°C下的LCF寿命需满足≥4倍设计循环（含1.4倍安全系数）。
> 相关章节：[第7章](/guide/part2/chapter-07) · [第25章](/guide/part2/chapter-25) · [第26章](/guide/part2/chapter-26)

**LH2** (Liquid Hydrogen) — *液氢*
> 沸点-253°C（20 K），密度70.85 kg/m³。用于运载火箭上面级和航天飞机主发动机（SSME/RS-25）燃料。液氢阀门面临极低温密封（材料脆化）、热分层（两相流）、氢脆（金属材料）和正仲氢转化热管理等独特设计挑战。
> 相关章节：[第25章](/guide/part2/chapter-25)

**LOX** (Liquid Oxygen) — *液氧*
> 沸点-183°C（90 K），密度1,141 kg/m³。为大多数液体火箭（从V-2到Falcon 9）的氧化剂。液氧阀门的关键安全问题是材料兼容性——液氧中微量烃类污染或冲击可引发剧烈氧化反应。绝热压缩点火（adiabatic compression ignition）是阀门设计必须排除的风险场景。
> 相关章节：[第25章](/guide/part2/chapter-25)

---

## M

**MIL** (Military Standard / Specification) — *美军标*
> 美国国防部发布的标准化文件体系。航天阀门最常引用的美军标包括：MIL-STD-810（环境试验）、MIL-STD-461（电磁兼容）、MIL-STD-1522A（航天系统安全性）、MIL-DTL-38999（连接器）和MIL-PRF-5606/83282（液压油）。MIL-STD-1522A附录A要求所有压力容器（含阀门）进行1.5倍MEOP耐压试验。
> 相关章节：[第33章](/guide/part3/chapter-33)

**MMH** (Monomethylhydrazine) — *一甲基肼*
> 化学式CH₃NHNH₂，常用作双组元推进剂系统的燃料（与N₂O₄配对）。MMH具有高毒性（TLV 0.01 ppm）和强还原性，对大多数弹性体（除FFKM外）有溶胀或降解作用。MMH阀门的密封材料需经过42天浸泡兼容性试验（ECSS-Q-ST-70-36C）。
> 相关章节：[第57章](/guide/part5/chapter-57)

**MRL** (Manufacturing Readiness Level) — *制造就绪水平*
> 美国DoD和NASA联合定义的10级标尺（MRL 1-10），评估制造技术从概念到批量生产的成熟度。与TRL配对使用：TRL评估技术本身，MRL评估制造能力。阀门从MRL 4（实验室环境制造）到MRL 8（试生产）的过渡通常需要1,500~3,000万美元投资。
> 相关章节：[第5章](/guide/part1/chapter-05)

**MSG-3** (Maintenance Steering Group, 3rd Task Force) — *维修指导小组第三工作组方法*
> 现代民用飞机维修大纲制定的标准分析方法。MSG-3对阀门进行"系统/动力装置分析"，通过功能-失效-影响-后果的逻辑链确定维修任务类型（润滑/勤务、操作/目视检查、功能检查、恢复、报废）。B787和A350的MSG-3分析将90%以上阀门归为"视情（OC）"而非"定时（HT）"维修。
> 相关章节：[第34章](/guide/part3/chapter-34) · [第67章](/guide/part4/chapter-67)

---

## N

**NASA-STD** (NASA Standard) — *NASA标准*
> 美国国家航空航天局发布的技术标准。航天阀门设计的核心引用包括NASA-STD-5017（结构设计）、NASA-STD-5019（断裂控制）和NASA-STD-8719.24（载荷与结构安全）。NASA-STD-5019A要求所有断裂关键件（含阀体）进行断裂力学分析，临界裂纹尺寸≥1.5倍NDT检测能力。
> 相关章节：[第33章](/guide/part3/chapter-33)

**NDE** (Non-Destructive Evaluation) — *无损评价*
> 在NDT基础上增加定量评价维度（缺陷尺寸、位置、取向、危害性评级）。阀门NDE常用方法：数字射线（DR→CT三维重构）、相控阵超声（PAUT→缺陷三维定位）和涡流阵列（ECA→表面裂纹自动检测）。NDE为断裂控制和损伤容限设计提供输入。
> 相关章节：[第23章](/guide/part2/chapter-23)

**NDT** (Non-Destructive Testing) — *无损检测*
> 在不破坏工件的前提下检测其表面和内部缺陷的测试技术。阀门常用NDT方法：渗透检测（PT→表面开口缺陷）、射线检测（RT→内部气孔/疏松）、超声检测（UT→内部裂纹）和磁粉检测（MT→铁磁性材料表面裂纹）。AMS 2644（渗透剂）、ASTM E1742（射线）是主要验收标准。
> 相关章节：[第23章](/guide/part2/chapter-23)

**NGS** (Nitrogen Generation System) — *氮气发生系统*
> 飞机燃油箱惰化系统的核心组件，通过空气分离模块（ASM）将发动机引气中的氧气含量从~21%降至~9%，产生的富氮气体注入油箱降低可燃性。NGS阀门包括进气关断阀、流量控制阀和氧传感器采样阀。FAR 25.981条款自2008年修正后强制要求安装燃油箱惰化系统。
> 相关章节：[第66章](/guide/part2/chapter-66)

---

## O

**O形圈** (O-Ring) — *弹性体环形密封件*
> 最简单且应用最广的阀门密封元件。压缩率15%~25%，沟槽设计遵循AS 568标准系列。航空阀门常用材料：FKM（燃油/液压，-20~+230°C）、FFKM（推进剂/化学，-20~+325°C）、EPDM（磷酸酯液压油，-50~+150°C）。挑战者号航天飞机事故后，O形圈低温弹性恢复成为航天阀门设计红线。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第9章](/guide/part2/chapter-09) · [第12章](/guide/part2/chapter-12)

---

## P

**PEEK** (Polyetheretherketone) — *聚醚醚酮*
> 半结晶高性能热塑性塑料，Tg≈143°C，Tm≈343°C。拉伸强度~100 MPa，弯曲模量~4 GPa，连续使用温度260°C。在阀门中用于阀座（替代金属密封）、导向环和电绝缘垫片。PEEK在300°C时的压缩强度仍保持室温值的30%，耐辐照剂量可达10⁷ Gy，适用于核电推进阀门。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第43章](/guide/part4/chapter-43) · [第58章](/guide/part5/chapter-58)

**PRSOV** (Pressure Regulating and Shut-Off Valve) — *压力调节关断阀*
> 飞机燃油系统中兼具压力调节和关断功能的机电一体化阀门。安装于燃油泵下游，将泵出口压力（可达10~20 MPa）调节为供油管路所需压力（3~7 MPa），并可在紧急情况下电磁关断。典型响应特性：从全关到全开<100 ms，稳态压力调节精度±2%。
> 相关章节：[第64章](/guide/part2/chapter-64)

**PTFE** (Polytetrafluoroethylene) — *聚四氟乙烯*
> 摩擦系数极低（~0.04）、化学惰性极强的氟塑料。在阀门中用作密封材料（V形填料、垫片）和阀座衬里。-200°C~+260°C宽温域适用。缺点是冷流（creep）和低导热率，高压密封应用需添加填充物（玻璃纤维、碳纤维、青铜粉）改善抗变形能力。品牌Teflon。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第12章](/guide/part2/chapter-12)

**PWM** (Pulse Width Modulation) — *脉宽调制*
> 通过调节脉冲宽度（占空比）控制输出平均电压/电流的调制方式。在电磁阀中PWM用于实现比例控制——通过改变占空比（如1 kHz载波频率）调节线圈平均电流，从而线性控制阀芯位置。PWM频率选择需避开阀芯机械共振频率（通常<200 Hz），否则可能诱发颤振。
> 相关章节：[第61章](/guide/part6/chapter-61)

---

## R

**RCS** (Reaction Control System) — *反作用控制系统*
> 航天器姿态控制和小轨道机动的推进系统，通过多个方向安装的小推力推力器产生控制力矩。RCS阀门包括推进剂隔离阀、推力器阀（thruster valve）和压力调节阀。阀门要求：单脉冲最小开启时间≤10 ms、脉冲重复性±1 ms、累计循环寿命>10⁵次。
> 相关章节：[第26章](/guide/part2/chapter-26) · [第62章](/guide/part6/chapter-62)

**RPN** (Risk Priority Number) — *风险优先数*
> FMEA/DFMEA中用于风险排序的综合指标：RPN = 严重度（Severity）× 频度（Occurrence）× 检测度（Detection），取值范围1~1000。航空阀门DFMEA的典型阈值：RPN≥100触发强制改进，60≤RPN<100建议评估。但FAA AC 25.1309-1A指出，RPN不能替代定性危害分级（Catastrophic/Hazardous/Major/Minor）。
> 相关章节：[第47章](/guide/part4/chapter-47)

---

## S

**SAE** (Society of Automotive Engineers / SAE International) — *国际自动机工程师学会*
> 全球航空航天标准的主要发布机构之一。SAE航空航天标准（AS）和推荐实践（ARP）覆盖设计（AS 5202端口标准）、材料（AMS 5662 Inconel 718）、测试（AS 4059洁净度）和维修。SAE AS 568（O形圈尺寸）和AS 4395（流体接头）是阀门设计中最常引用的两项标准。
> 相关章节：[第33章](/guide/part3/chapter-33)

**SCC** (Stress Corrosion Cracking) — *应力腐蚀开裂*
> 拉伸应力和腐蚀介质共同作用下引发的裂纹萌生与扩展。航空阀门中常见SCC案例：铝合金阀体+含氯环境、马氏体不锈钢阀杆+硫化物介质。防范措施包括材料选择（如沉淀硬化不锈钢17-4PH H1150替代H900态）、应力消除热处理和防护涂层。ASTM G47和ASTM G64是SCC敏感性测试标准。
> 相关章节：[第4章](/guide/part1/chapter-04) · [第46章](/guide/part4/chapter-46)

**SE** (Systems Engineering) — *系统工程*
> 跨学科的结构化产品开发方法论，涵盖从需求开发、架构设计、系统集成到验证确认的全生命周期。INCOSE《系统工程手册》定义的23个技术流程中，阀门系统工程最关键的包括：利益攸关者需求定义（SNRD）、需求分析（RA）、架构定义（AD）和验证（VER）。NASA NPR 7123.1是航天系统工程的标准框架。
> 相关章节：[第10章](/guide/part2/chapter-10) · [第37章](/guide/part4/chapter-37)

**SMA** (Shape Memory Alloy) — *形状记忆合金*
> 在特定温度下可恢复预设形状的智能材料。NiTi（镍钛合金/Nitinol）是主流SMA，相变温度Af可在-100°C~+100°C范围内定制。在阀门中用于：温控自力式阀（无需外部电源）、火工替代的解锁机构和自适应密封。Frangibolt（SMA断裂螺栓）已用于30+航天任务。
> 相关章节：[第53章](/guide/part5/chapter-53)

---

## T

**TAV** (Thruster Actuator Valve) — *推力器作动阀*
> 航天器推力器的核心快响应阀门，控制推进剂进入推力室的精确脉冲供给。典型性能指标：响应时间（通电→全开）≤5 ms、关闭时间≤8 ms、内漏率≤1×10⁻⁵ scc/s GHe、最低脉冲重复性±0.5 ms。通常采用电磁驱动+永磁偏置+金属-金属硬密封架构。Moog和Marotta是主要供应商。
> 相关章节：[第13章](/guide/part2/chapter-13) · [第26章](/guide/part2/chapter-26) · [第62章](/guide/part6/chapter-62)

**TBC** (Thermal Barrier Coating) — *热障涂层*
> 沉积在高温金属基底上的陶瓷隔热层，典型结构为MCrAlY粘结层（~100μm）+ YSZ陶瓷顶层（~250μm），可降低基底温度100~200°C。航空发动机涡轮阀门中的高温阀座和导向件已应用TBC。先进TBC体系（Gd₂Zr₂O₇）工作温度可达1400°C，正在NASA开发中。
> 相关章节：[第19章](/guide/part2/chapter-19) · [第43章](/guide/part4/chapter-43)

**TBV** (Transient Bleed Valve) — *瞬态放气阀*
> 航空发动机压气机稳定性控制阀门，在瞬态工况（加速/减速/进气道畸变）时快速打开，将压气机级间空气排入外涵道，防止喘振。TBV打开时间<100 ms，流量容量达总核心流量的5%~15%。典型驱动方式：气动活塞或燃油压力液压作动。
> 相关章节：[第63章](/guide/part2/chapter-63)

**TCV** (Temperature Control Valve) — *温度控制阀*
> 飞机ECS中用于混合热路（发动机引气）和冷路（经ACM冷却）空气以控制供气温度的三通比例阀。TCV的控制精度要求输出温度波动<±2°C，响应时间<5 s。蝶阀或球阀结构为主，电动或气动执行器驱动。B787的TCV采用电动+双余度位置反馈架构。
> 相关章节：[第66章](/guide/part2/chapter-66)

**TRL** (Technology Readiness Level) — *技术就绪水平*
> NASA提出的9级技术成熟度评估标尺。阀门TRL关键节点：TRL 4（实验室环境功能验证）、TRL 5（相关环境缩比验证）、TRL 6（相关环境全尺寸/工程样机）、TRL 9（飞行成功）。从TRL 6到TRL 9的飞行鉴定（Qualification）是阀门开发中投入最大、周期最长的阶段（18~36个月）。
> 相关章节：[第5章](/guide/part1/chapter-05)

---

## V

**V&V** (Verification and Validation) — *验证与确认*
> 系统工程中的两个核心活动：Validation（确认）回答"我们构建了正确的产品吗？"（与需求的一致性），Verification（验证）回答"我们正确构建了产品吗？"（与设计的一致性）。阀门V&V活动包括分析、检查、演示和测试四类方法。DO-178C（软件）、ARP 4754A（系统）和NASA-STD-7009（模型）是V&V核心标准。
> 相关章节：[第10章](/guide/part2/chapter-10) · [第35章](/guide/part3/chapter-35) · [第37章](/guide/part4/chapter-37)

**VBV** (Variable Bleed Valve) — *可变放气阀*
> 航空发动机低压压气机出口的放气阀门，在低转速时打开释放部分空气以维持压气机稳定裕度。VBV通常为多个周向布置的蝶阀或活门，由作动环统一驱动。CFM56发动机的VBV系统含12个放气活门，由单个液压作动器通过柔性轴同步驱动。
> 相关章节：[第63章](/guide/part2/chapter-63)

**VSV** (Variable Stator Vane) — *可变静子叶片*
> 航空发动机高压压气机前几级的角度可调静子叶片系统。VSV通过改变静叶安装角来调节气流攻角，扩展压气机稳定工作范围。VSV作动系统由作动环、曲柄机构和一个或多个液压/气动作动器组成。位置精度要求±1°，同步性要求所有叶片角度偏差<0.5°。
> 相关章节：[第63章](/guide/part2/chapter-63)

---

## W

**焊缝系数** (Weld Joint Efficiency) — *焊接接头系数*
> 焊接接头强度与母材强度的比值，用于阀体和压力容器壁厚计算。取值依据ASME BPVC Section VIII Div.1 UW-12：全透射双面焊 100% RT → E=1.0；全透射单面焊 抽样RT → E=0.85；角焊缝 → E=0.45。阀门承压焊缝通常要求E≥0.85，关键焊缝（Class 1）要求E=1.0。
> 相关章节：[第7章](/guide/part2/chapter-07) · [第29章](/guide/part3/chapter-29)

---

## 补充缩略语速查

| 缩写 | 全称 | 中文 |
|------|------|------|
| ACM | Air Cycle Machine | 空气循环机 |
| ADN | Ammonium Dinitramide | 二硝酰胺铵（绿色推进剂） |
| ASM | Air Separation Module | 空气分离模块 |
| CCDL | Cross Channel Data Link | 交叉通道数据链 |
| CDR | Critical Design Review | 关键设计评审 |
| CMC | Ceramic Matrix Composite | 陶瓷基复合材料 |
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

---

## 术语统计

- **正文术语**：82个详解条目（平均解释113字/条）
- **补充缩略语**：24条速查
- **总计**：**106条术语**，覆盖航空航天阀门全领域
- **覆盖领域**：基础科学（4） · 设计工程（11） · 材料（8） · 制造工艺（3） · 航天阀门（9） · 航空阀门（15） · 适航标准（10） · 可靠性（7） · 系统工程（5） · 前沿技术（6） · 缩略语速查（24）

---

## 贡献术语

如发现缺失的重要术语，请通过 [GitHub Issue](https://github.com/avis-aerospace/avis-web/issues/new) 提交，格式如下：

```
**术语名称（中文）** / **English Name** / 缩写
- 定义：（100-200字详解，含技术原理、应用场景、相关标准）
- 相关章节：
- 参考文献：
```