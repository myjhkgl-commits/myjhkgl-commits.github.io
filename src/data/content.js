// ============================================================
// 站点内容集中管理：孟玉佳 · 个人作品集
// 信息来源：个人简历（2026）；作品图后续替换为真实作品即可
// ============================================================

export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const img = (prompt, size = 'landscape_16_9') =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=${size}`

export const profile = {
  name: '孟玉佳',
  nameEn: 'MENG YUJIA',
  roles: ['平面设计师', 'AIGC 创意设计', '交互设计'],
  location: '山东 · 潍坊',
  email: 'mylhgk@163.com',
  wechat: 'wydbs2311',
  phone: '15314407903',
  intent: '交互设计',
  intro:
    '潍坊学院数夕媒体技术专业本科在读，竞赛经验丰富。持有日语 N2 证书、日语四级证书、日语六级证书，擅长以 AIGC 工作流提升创意生产效率，获得国奖省奖共计 19 项。',
  intro2:
    '曾任学院心理服务中心朋辈部部长，统筹 30 人团队、策划多场百人规模活动；暑期实习中主导「名师说」系列活动线上视觉与自媒体运营，单场活动报名突破 3000 人，海报制作效率提升 40%。求职方向：交互设计。',
  portrait: asset('/portrait.jpg'),
  heroPoster: img(
    'Minimal dark abstract network of thin glowing blue dots and delicate connecting lines on pure black background, plexus technology style, subtle depth of field, cinematic, restrained, high-end',
    'landscape_16_9'
  )
}

export const aboutCards = [
  {
    title: '教育背景',
    value: '潍坊学院 · 数字媒体技术 · 字体设计 · 交互设计',
    desc: '本科在读，竞赛经验丰富，具备扎实版式、图形、字体与交互设计基础。'
  },
  {
    title: '证书能力',
    value: '平面设计师 / AIGC / 日语 N2 / 日语四级 / 日语六级',
    desc: '兼具传统平面功底、AI 创意生产效率与跨文化审美理解。'
  },
  {
    title: '实践经历',
    value: '活动视觉 / 新媒体运营 / 字体设计',
    desc: '参与活动统筹与线上视觉运营，能把创意转化为实际传播效果；参与字体设计项目，与方正公司对接完成“明朝体”字体开发，预计 2026 年 12 月上线。'
  }
]

export const directions = [
  {
    title: '电商视觉设计',
    desc: '商品卖点提炼、首图/详情页视觉、促销专题与转化导向版式。'
  },
  {
    title: 'AIGC 创意设计',
    desc: 'AI 主视觉生成、提示词工作流、概念拓展与后期精修落地。'
  },
  {
    title: '品牌视觉设计',
    desc: '品牌基础视觉、海报、包装、字体与图形系统化表达。'
  },
  {
    title: '新媒体视觉设计',
    desc: '公众号、抖音、小红书等内容视觉统一与运营素材设计。'
  }
]
export const stats = [
  { value: 3000, suffix: '+', label: '单场活动报名人次' },
  { value: 40, suffix: '%', label: '海报制作提效' },
  { value: 20, suffix: '%', label: '账号粉丝增长' },
]

export const projects = [
  {
    id: '01',
    year: '2024',
    category: '字体设计 · 二十四节气',
    title: '东方骨·西方格',
    desc: '以甲骨文为字源，取蒙德里安几何分割为格法，将二十四节气拆解为色块与线条的视觉秩序——东方之骨，西方之格。',
    tags: ['字体设计', '二十四节气', '信息可视化'],
    image: asset('/projects/01/1.jpg'),
    images: [
      asset('/projects/01/1.jpg'), asset('/projects/01/2.jpg'), asset('/projects/01/3.jpg'), asset('/projects/01/4.jpg'), asset('/projects/01/5.jpg')
    ]
  },
  {
    id: '02',
    year: '2024',
    category: 'IP 形象设计 · 杨家埠木版年画',
    title: '非遗·画鲤',
    desc: '从杨家埠年画《年年有余》中提取鲤鱼符号，开发「小画鲤」IP 角色及文创延展，让非遗以更年轻的面貌走进日常生活。',
    tags: ['IP 设计', '非遗', '文创'],
    image: asset('/projects/02/1.jpg'),
    images: [
      asset('/projects/02/1.jpg'), asset('/projects/02/2.jpg'), asset('/projects/02/3.jpg'), asset('/projects/02/4.jpg'), asset('/projects/02/5.jpg'), asset('/projects/02/6.jpg'), asset('/projects/02/7.jpg')
    ]
  },
  {
    id: '03',
    year: '2025',
    category: '信息可视化',
    title: '冠世榴韵——枣庄石榴文化信息可视化设计',
    desc: '从历史源流、文化寓意、产业价值与城市品牌四个维度，将枣庄石榴文化转译为可读、可游的信息可视化叙事。',
    tags: ['信息可视化', '文化叙事', '数据设计'],
    image: asset('/projects/03/1.jpg'),
    images: [
      asset('/projects/03/1.jpg'), asset('/projects/03/2.jpg'), asset('/projects/03/3.jpg'), asset('/projects/03/4.jpg'), asset('/projects/03/5.jpg')
    ]
  },
  {
    id: '04',
    year: '2025',
    category: '信息可视化 · 非遗',
    title: '镌刻年华——杨家埠木版年画信息可视化设计',
    desc: '以刻刀与色版为线索，将杨家埠木版年画的工艺流程、题材谱系与文化生态映射为信息可视化长卷。',
    tags: ['信息可视化', '木版年画', '非遗'],
    image: asset('/projects/04/1.jpg'),
    images: [
      asset('/projects/04/1.jpg'), asset('/projects/04/2.jpg'), asset('/projects/04/3.jpg'), asset('/projects/04/4.jpg')
    ]
  },
  {
    id: '05',
    year: '2025',
    category: '长卷插画 · 主题创作',
    title: '齐鲁好家风',
    desc: '选取杨震、焦裕禄、谷牧等十四位齐鲁人物，以廉洁齐家为脉络，绘就两幅长卷插画，讲述齐鲁家风的时代传承。',
    tags: ['插画', '主题创作', '长卷'],
    image: asset('/projects/05/1.jpg'),
    images: [
      asset('/projects/05/1.jpg'), asset('/projects/05/2.jpg'), asset('/projects/05/3.jpg'), asset('/projects/05/4.jpg'), asset('/projects/05/5.jpg'), asset('/projects/05/6.jpg'), asset('/projects/05/7.jpg'), asset('/projects/05/8.jpg'), asset('/projects/05/9.jpg'), asset('/projects/05/10.jpg')
    ]
  },
  {
    id: '06',
    year: '2025',
    category: 'UI/UX · 产品设计',
    title: '籽律——基于冠世榴韵的自律成长 APP 设计',
    desc: '以枣庄石榴文化为品牌内核，围绕「自律成长」构建每日打卡、习惯养成与榴园养成的产品闭环，将文化IP与用户行为激励融合。',
    tags: ['UI设计', '产品设计', 'APP'],
    image: asset('/projects/06/1.jpg'),
    images: [
      asset('/projects/06/1.jpg'), asset('/projects/06/2.jpg'), asset('/projects/06/3.jpg'), asset('/projects/06/4.jpg'), asset('/projects/06/5.jpg')
    ]
  }
]

export const strengths = [
  {
    no: '01',
    title: 'AIGC 创意生产',
    en: 'AI-CRAFTED VISUALS',
    desc: '持有 AIGC 技能证书，获全国 AIGC 创意设计大赛国家级三等奖，善用 AI 工作流让创意生产兼顾效率与质感。',
    points: ['AIGC 视觉生成工作流', '提示词工程与精修', 'AI 海报与主视觉']
  },
  {
    no: '02',
    title: '平面与品牌视觉',
    en: 'GRAPHIC & BRAND',
    desc: '持有平面设计师资格证，多项作品获国家级、省级设计奖项，版式与包装功底扎实。',
    points: ['海报与版式设计', '品牌与包装设计', '字体与图形设计']
  },
  {
    no: '03',
    title: '内容运营与转化',
    en: 'CONTENT × GROWTH',
    desc: '深度参与公众号、抖音、小红书矩阵运营，实习期内助力账号粉丝增长近 20%、课程咨询量提升 30%。',
    points: ['公众号 / 抖音 / 小红书', '内容策划与视觉统一', '数据驱动迭代']
  },
  {
    no: '04',
    title: '日语 × 设计心理学',
    en: 'LANGUAGE × PSYCHOLOGY',
    desc: '日语 N2 水平可精准理解日本市场审美语境，兼具中科院心理咨询师基础培训背景，洞察用户与消费心理。',
    points: ['日语 N2', '消费心理洞察', '跨文化审美研究']
  }
]

export const navLinks = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于' },
  { href: '#work', label: '作品' },
  { href: '#capabilities', label: '能力' },
  { href: '#direction', label: '方向' },
  { href: '#contact', label: '联系' }
]

