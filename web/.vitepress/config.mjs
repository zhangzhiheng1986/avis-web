import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Avis - 航空航天阀门研发智库',
  description: '全球航空航天阀门领域知识体系的活的大厦',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: false,

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'author', content: '小贤' }],
    ['meta', { name: 'keywords', content: '航空航天,阀门,研发设计,知识库,系统工程,流体力学,密封工程,可靠性工程' }],
    ['meta', { property: 'og:title', content: 'Avis - 航空航天阀门研发智库' }],
    ['meta', { property: 'og:description', content: '全球航空航天阀门领域知识体系的活的大厦 — 60万+字 · 57章 · 200+参考文献' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除搜索条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '手册', link: '/guide/part1-index' },
      { text: '知识图谱', link: '/knowledge-graph' },
      { text: '术语词典', link: '/glossary' },
      { text: '版本历史', link: '/changelog' },
      { text: '贡献', link: '/contributing' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '第一编 绪论与基础科学',
          collapsed: false,
          items: [
            { text: '第一编概述', link: '/guide/part1-index' },
            { text: '第1章 航空航天阀门概论', link: '/guide/part1/chapter-01' },
            { text: '第2章 流体力学基础', link: '/guide/part1/chapter-02' },
            { text: '第3章 热力学基础', link: '/guide/part1/chapter-03' },
            { text: '第4章 材料科学基础', link: '/guide/part1/chapter-04' },
            { text: '第5章 分类与选型方法论', link: '/guide/part1/chapter-05' }
          ]
        },
        {
          text: '第二编 设计工程',
          collapsed: true,
          items: [
            { text: '第二编概述', link: '/guide/part2-index' },
            { text: '第6章 驱动方式分类', link: '/guide/part2/chapter-06' },
            { text: '第7章 阀门静力学与结构应力分析', link: '/guide/part2/chapter-07' },
            { text: '第8章 动力学与运动学分析', link: '/guide/part2/chapter-08' },
            { text: '第9章 极端环境密封技术', link: '/guide/part2/chapter-09' },
            { text: '第10章 系统工程与需求开发', link: '/guide/part2/chapter-10' },
            { text: '第11章 CFD——控制方程、建模与工程实践', link: '/guide/part2/chapter-11' },
            { text: '第12章 密封工程设计', link: '/guide/part2/chapter-12' },
            { text: '第13章 电磁驱动阀设计', link: '/guide/part2/chapter-13' },
            { text: '第14章 气动阀与液压阀设计', link: '/guide/part2/chapter-14' },
            { text: '第15章 电机驱动阀设计', link: '/guide/part2/chapter-15' },
            { text: '第16章 火工阀与电爆阀设计', link: '/guide/part2/chapter-16' },
            { text: '第17章 单向阀与泄压阀设计', link: '/guide/part2/chapter-17' },
            { text: '第18章 精密加工与特种工艺——从锻造到微纳加工', link: '/guide/part2/chapter-18' },
            { text: '第19章 表面工程——从原子沉积到功能验证', link: '/guide/part2/chapter-19' },
            { text: '第21章 洁净与污染控制', link: '/guide/part2/chapter-21' },
            { text: '第22章 装配工艺', link: '/guide/part2/chapter-22' },
            { text: '第23章 无损检测', link: '/guide/part2/chapter-23' },
            { text: '第24章 增材制造——从粉末到飞行阀门的全链条', link: '/guide/part2/chapter-24' },
            { text: '第25章 氢氧发动机阀门', link: '/guide/part2/chapter-25' },
            { text: '第26章 可重复使用火箭阀门', link: '/guide/part2/chapter-26' }
          ]
        },
        {
          text: '第三编 制造工艺与试验验证',
          collapsed: true,
          items: [
            { text: '第三编概述', link: '/guide/part3-index' },
            { text: '第29章 焊接与钎焊技术', link: '/guide/part3/chapter-29' },
            { text: '第30章 热处理与材料性能调控', link: '/guide/part3/chapter-30' },
            { text: '第31章 飞行验证与在轨测试', link: '/guide/part3/chapter-31' },
            { text: '第32章 可靠性工程', link: '/guide/part3/chapter-32' },
            { text: '第33章 国际标准体系', link: '/guide/part3/chapter-33' },
            { text: '第34章 维修性与保障性工程', link: '/guide/part3/chapter-34' },
            { text: '第35章 测试与鉴定', link: '/guide/part3/chapter-35' },
            { text: '第36章 中国标准体系', link: '/guide/part3/chapter-36' }
          ]
        },
        {
          text: '第四编 系统工程与管理',
          collapsed: true,
          items: [
            { text: '第四编概述', link: '/guide/part4-index' },
            { text: '第37章 系统工程管理', link: '/guide/part4/chapter-37' },
            { text: '第38章 项目管理', link: '/guide/part4/chapter-38' },
            { text: '第39章 质量保证', link: '/guide/part4/chapter-39' },
            { text: '第40章 产品数据管理与数字化工程', link: '/guide/part4/chapter-40' },
            { text: '第41章 数字孪生与智能运维', link: '/guide/part4/chapter-41' },
            { text: '第42章 全球产业格局', link: '/guide/part4/chapter-42' },
            { text: '第43章 新型材料', link: '/guide/part4/chapter-43' },
            { text: '第45章 数字化验证与虚拟鉴定', link: '/guide/part4/chapter-45' },
            { text: '第46章 历史重大阀门故障分析与教训', link: '/guide/part4/chapter-46' },
            { text: '第47章 FMEA与FTA', link: '/guide/part4/chapter-47' },
            { text: '第48章 中国标准与型号实践', link: '/guide/part4/chapter-48' },
            { text: '第49章 常用仿真工具与软件生态', link: '/guide/part4/chapter-49' },
            { text: '第50章 材料与标准数据库', link: '/guide/part4/chapter-50' },
            { text: '第51章 术语表与缩略语', link: '/guide/part4/chapter-51' },
            { text: '第52章 参考文献与引用来源', link: '/guide/part4/chapter-52' }
          ]
        },
        {
          text: '第五编 前沿技术与未来发展',
          collapsed: true,
          items: [
            { text: '第五编概述', link: '/guide/part5-index' },
            { text: '第53章 压电与智能材料驱动阀门', link: '/guide/part5/chapter-53' },
            { text: '第54章 阀门传感器与状态监测系统', link: '/guide/part5/chapter-54' },
            { text: '第55章 阀门可靠性试验方法', link: '/guide/part5/chapter-55' },
            { text: '第56章 EMC与阀门电子兼容性', link: '/guide/part5/chapter-56' },
            { text: '第57章 绿色推进剂阀门兼容性', link: '/guide/part5/chapter-57' },
            { text: '第58章 核电推进阀门设计', link: '/guide/part5/chapter-58' },
            { text: '第59章 AI辅助阀门设计与优化', link: '/guide/part5/chapter-59' },
            { text: '第60章 阀门成本工程与经济性分析', link: '/guide/part5/chapter-60' }
          ]
        },
        {
          text: '第六编 扩展专题',
          collapsed: true,
          items: [
            { text: '第六编概述', link: '/guide/part6-index' },
            { text: '第61章 阀门驱动电子学', link: '/guide/part6/chapter-61' },
            { text: '第62章 小型航天器阀门', link: '/guide/part6/chapter-62' }
          ]
        },
        {
          text: '附录',
          collapsed: true,
          items: [
            { text: '附录概述', link: '/guide/appendix-index' },
            { text: '附录A 设计校验清单(DVC)', link: '/guide/appendix/appendix-a' },
            { text: '附录B 全球阀门型号参数速查表', link: '/guide/appendix/appendix-b' },
            { text: '附录C 常用材料许用应力速查', link: '/guide/appendix/appendix-c' },
            { text: '附录D 关键公式速查卡片', link: '/guide/appendix/appendix-d' },
            { text: '附录E 阀门FMECA故障速查', link: '/guide/appendix/appendix-e' }
          ]
        }
      ]
    },

    footer: {
      message: 'Avis — 全球航空航天阀门领域知识体系的活的大厦',
      copyright: 'Copyright © 2024-2026 小贤 · 保留部分权利 · CC BY-NC-SA 4.0'
    },

    docFooter: {
      prev: '上一章',
      next: '下一章'
    },

    outline: {
      level: [2, 3],
      label: '本章目录'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    editLink: {
      pattern: 'https://github.com/avis-aerospace/avis-web/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/avis-aerospace/avis-web' }
    ]
  },

  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true
    }
  }
})
