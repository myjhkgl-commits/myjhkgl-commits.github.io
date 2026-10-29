// ============================================================
// 站点内容集中管理：孟玉佳 · 个人作品集
// 信息来源：个人简历（经典模版2-孟玉佳-中，2026）；作品图后续替换为真实作品即可
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
  age: '22 岁',
  email: 'myjhkgl@163.com',
  wechat: 'wydbs2311',
  phone: '15314407903',
  phoneFull: '+86 153 1440 7903',
  intent: '交互设计',
  education: {
    school: '潍坊学院',
    major: '数字媒体技术',
    degree: '本科',
    period: '2023.06 — 2027.06'
  },
  intro:
    '潍坊学院数字媒体技术专业本科在读，竞赛经验丰富。持有日语 N2、大学日语四级、日语六级证书，擅长以 AIGC 工作流提升创意生产效率，累计获国家级奖项 7 项、省级奖项 12 项。',
  intro2:
    '曾任学院心理服务中心朋辈部部长，统筹 30 人团队完成 200 人次心理访谈（有效率 95%）与 5 场大型问卷回收；暑期实习中负责新媒体短视频剪辑、内容运维与线上直播招生，完成引流、咨询对接与招生转化。求职方向：交互设计。',
  summary:
    '数字媒体技术专业本科生，具备完整 IP 形象设计、信息可视化、动态视觉与文创延展设计经验，熟练运用 PS、AI、AE、PR 等设计软件。擅长挖掘文化内核并转化为年轻化视觉语言，主导过大学生创新创业项目，拥有项目统筹、视觉创作与整套作品集落地能力。注重文化与设计融合，具备良好审美、叙事思维与团队协作能力，持续深耕交互与用户体验方向，乐于在实践中学习迭代。',
  portrait: asset('/portrait.jpg'),
  heroPoster: img(
    'Minimal dark abstract network of thin glowing blue dots and delicate connecting lines on pure black background, plexus technology style, subtle depth of field, cinematic, restrained, high-end',
    'landscape_16_9'
  )
}

export const aboutCards = [
  {
    title: '教育背景',
    value: '潍坊学院 · 数字媒体技术 · 2023.06 — 2027.06',
    desc: '本科在读，竞赛经验丰富，具备扎实版式、图形、字体与交互设计基础。'
  },
  {
    title: '证书能力',
    value: '日语 N2 / 大学日语四级 · 六级 / 中科院心理咨询师',
    desc: '兼具跨文化审美理解、设计心理洞察与 AIGC 创意生产效率。'
  },
  {
    title: '实践经历',
    value: '大创项目负责人 / 朋辈部部长 / 新媒体运营',
    desc: '主导「版」上春秋大创项目并顺利结项；统筹 30 人团队完成 200 人次心理访谈；实习期负责短视频运维与直播招生转化。'
  }
]

export const directions = [
  {
    title: '交互设计',
    desc: '以用户体验为核心，从信息架构、交互流程到界面视觉的完整设计推导。'
  },
  {
    title: 'AIGC 创意设计',
    desc: 'AI 主视觉生成、提示词工作流、概念拓展与后期精修落地。'
  },
  {
    title: '信息可视化',
    desc: '把文化脉络、工艺流程与数据关系转译为可读、可游的视觉叙事。'
  },
  {
    title: '新媒体视觉设计',
    desc: '公众号、抖音、小红书等内容视觉统一与运营素材设计。'
  }
]

export const stats = [
  { value: 19, suffix: '项', label: '国家级 · 省级获奖' },
  { value: 200, suffix: '人次', label: '心理访谈统筹（95% 有效）' },
  { value: 36000, suffix: '+', label: '项目笔记浏览量' },
  { value: 968, suffix: '+', label: '单篇笔记点赞数' }
]

// ---------------- 学术经历 · 大学生创新创业项目 ----------------
export const academic = {
  label: 'COLLEGE INNOVATION PROJECT',
  badge: '大创项目',
  role: '项目负责人',
  period: '2025.06 — 2026.06',
  level: '大学生创新创业训练计划 · 校级项目 · 已顺利结项',
  title: '“版”上春秋，绘新视界',
  subtitle: '杨家埠木版年画信息可视化的现代转译',
  desc: '以杨家埠木版年画为研究对象，把非遗图像、纹样、色彩与工艺流程解构为可视化知识体系，并创新「门形双联」海报结构，探索非遗年轻化、数字化的传播路径。',
  items: [
    {
      no: '01',
      key: '项目管理',
      text: '统筹团队分工，完成调研方案设计、实地非遗采风与专家访谈，搭建完整项目研究框架。'
    },
    {
      no: '02',
      key: '研究分析',
      text: '对杨家埠年画图像、纹样、色彩、工艺流程进行符号解构，建立可视化知识体系。'
    },
    {
      no: '03',
      key: '视觉设计',
      text: '创新“门形双联”海报结构，运用 PS、AI 完成系列信息可视化海报、工艺图解与纹样再设计。'
    },
    {
      no: '04',
      key: '成果输出',
      text: '产出可视化设计作品、调研报告与项目研究报告书，小红书内容浏览量超 3.6 万、点赞数 968。'
    }
  ]
}

// ---------------- 学术经历 · 第二项大创（石榴文化） ----------------
export const academic2 = {
  label: 'COLLEGE INNOVATION PROJECT',
  badge: '大创项目',
  role: '项目负责人',
  period: '2026.06 — 至今',
  level: '大学生创新创业训练计划 · 校级项目 · 立项在研',
  title: '枣庄石榴文化数字化视觉建构',
  subtitle: '与中华民族共同体意识沉浸式传播',
  desc: '延续石榴文化研究脉络，围绕中华民族共同体意识传播，构建「IP 设计 + APP 应用 + 信息可视化」三位一体的数字化视觉系统，以沉浸式体验推动石榴文化的年轻化表达。',
  images: [
    asset('/projects/dachuang-shiliu/1.jpg'),
    asset('/projects/dachuang-shiliu/2.jpg'),
    asset('/projects/dachuang-shiliu/3.jpg')
  ],
  items: [
    {
      no: '01',
      key: 'IP 设计',
      text: '深化石榴文化 IP 形象体系，形成可延展的角色与纹样资产。'
    },
    {
      no: '02',
      key: 'APP 应用',
      text: '完成「籽律」自律打卡 APP 的界面与交互设计，融合农民画视觉语言。'
    },
    {
      no: '03',
      key: '成果转化',
      text: '阶段成果获中国好创意国赛三等奖、未来设计师 NCDA 省赛三等奖。'
    }
  ]
}

// ---------------- 获奖概览（据获奖证书统计） ----------------
export const awardsSummary = {
  total: 19,
  national: 7,
  province: 12,
  span: '2025.06 — 2026.08',
  note: '涵盖蓝桥杯、中国好创意、未来设计师 NCDA、米兰设计周、数媒竞赛等十余项赛事；另附校园荣誉、语言证书与项目、实习证明。',
  breakdown: [
    { label: '国家级一等奖', value: 1 },
    { label: '国家级二等奖', value: 2 },
    { label: '国家级三等奖', value: 4 },
    { label: '省级一等奖', value: 1 },
    { label: '省级二等奖', value: 4 },
    { label: '省级三等奖', value: 6 },
    { label: '省级铜奖', value: 1 }
  ]
}

// ---------------- 获奖证书墙 ----------------
// level: 'national' 国家级 | 'province' 省级 | 'language' 语言证书
export const certificates = [
  {
    id: 'a01',
    date: '2026.08',
    level: 'national',
    grade: '国赛三等奖',
    comp: '中国好创意（第二十届）暨全国数字艺术设计大赛',
    work: '《冠世榴韵》',
    team: '孟玉佳、宫雯雯、姜懿宸',
    image: asset('/awards/a01.jpg')
  },
  {
    id: 'a02',
    date: '2026.08',
    level: 'national',
    grade: '国赛三等奖',
    comp: '中国好创意（第二十届）暨全国数字艺术设计大赛',
    work: '《齐鲁好家风》',
    team: '孟玉佳、赵硕、赵路凯',
    image: asset('/awards/a02.jpg')
  },
  {
    id: 'a03',
    date: '2026.08',
    level: 'province',
    grade: '省赛三等奖',
    comp: '第14届未来设计师·全国高校数字艺术设计大赛（NCDA）山东赛区',
    work: '《冠世榴韵——枣庄石榴文化信息可视化》',
    team: '孟玉佳、宫雯雯、姜懿宸',
    image: asset('/awards/a03.jpg')
  },
  {
    id: 'a04',
    date: '2026.08',
    level: 'province',
    grade: '省赛三等奖',
    comp: '第14届未来设计师·全国高校数字艺术设计大赛（NCDA）山东赛区',
    work: '《齐鲁好家风》',
    team: '孟玉佳',
    image: asset('/awards/a04.jpg')
  },
  {
    id: 'a05',
    date: '2026.08',
    level: 'province',
    grade: '省赛三等奖',
    comp: '东方设计奖·全国高校创新设计大赛 山东赛区',
    work: '《齐鲁好家风》',
    team: '孟玉佳、赵硕、赵路凯',
    image: asset('/awards/a05.jpg')
  },
  {
    id: 'a06',
    date: '2026.06',
    level: 'national',
    grade: '总决赛二等奖',
    comp: '第十七届蓝桥杯全国总决赛 · 视觉艺术设计赛',
    work: '《东方骨西方格》',
    team: '孟玉佳、赵硕',
    image: asset('/awards/a06.jpg')
  },
  {
    id: 'a07',
    date: '2026.06',
    level: 'province',
    grade: '省赛二等奖',
    comp: '米兰设计周中国高校设计学科师生优秀作品展 山东赛区',
    work: '《齐鲁好家风》',
    team: '孟玉佳、赵硕、赵路凯',
    image: asset('/awards/a07.jpg')
  },
  {
    id: 'a08',
    date: '2026.06',
    level: 'province',
    grade: '省赛三等奖',
    comp: '米兰设计周中国高校设计学科师生优秀作品展 山东赛区',
    work: '《非遗·画鲤》',
    team: '孟玉佳、赵硕',
    image: asset('/awards/a08.jpg')
  },
  {
    id: 'a09',
    date: '2026.05',
    level: 'province',
    grade: '省赛一等奖',
    comp: '第十七届蓝桥杯大赛 · 视觉艺术设计赛 山东赛区',
    work: '《东方骨西方格》',
    team: '孟玉佳、赵硕',
    image: asset('/awards/a09.jpg')
  },
  {
    id: 'a10',
    date: '2026.05',
    level: 'province',
    grade: '省赛二等奖',
    comp: '第十七届蓝桥杯大赛 · 视觉艺术设计赛 山东赛区',
    work: '《齐鲁好家风》',
    team: '孟玉佳、赵硕、赵路凯',
    image: asset('/awards/a10.jpg')
  },
  {
    id: 'a11',
    date: '2025.12',
    level: 'national',
    grade: '一等奖',
    comp: '第三届全国大学生科技美术设计创新作品大赛',
    work: '《镌刻年华（年画）——年画信息可视化设计》',
    team: '孟玉佳',
    image: asset('/awards/a11.jpg')
  },
  {
    id: 'a12',
    date: '2025.12',
    level: 'national',
    grade: '二等奖',
    comp: '第三届全国大学生科技美术设计创新作品大赛',
    work: '《刻版之间》',
    team: '孟玉佳',
    image: asset('/awards/a12.jpg')
  },
  {
    id: 'a13',
    date: '2025.12',
    level: 'national',
    grade: '三等奖',
    comp: '第三届全国大学生科技美术设计创新作品大赛',
    work: '《非遗·画鲤》',
    team: '孟玉佳',
    image: asset('/awards/a13.jpg')
  },
  {
    id: 'a14',
    date: '2025.10',
    level: 'national',
    grade: '国赛三等奖',
    comp: '第十三届全国大学生数字媒体科技作品及创意竞赛 全国总决赛',
    work: '《马首归，功成圆》',
    team: '高东乐、孟玉佳、哈雨彤',
    image: asset('/awards/a14.jpg')
  },
  {
    id: 'a15',
    date: '2025.10',
    level: 'province',
    grade: '省赛二等奖',
    comp: '第十三届全国大学生数字媒体科技作品及创意竞赛 山东赛区',
    work: '《马首归，功成圆》',
    team: '高东乐、孟玉佳、哈雨彤',
    image: asset('/awards/a15.jpg')
  },
  {
    id: 'a16',
    date: '2025.10',
    level: 'province',
    grade: '省赛三等奖',
    comp: '第十三届全国大学生数字媒体科技作品及创意竞赛 山东赛区',
    work: '《刻版之间》',
    team: '孟玉佳',
    image: asset('/awards/a16.jpg')
  },
  {
    id: 'a17',
    date: '2025.08',
    level: 'province',
    grade: '省赛三等奖',
    comp: '第13届未来设计师·全国高校数字艺术设计大赛（NCDA）山东赛区',
    work: '《年画新生·世界名作的东方重构》',
    team: '孟玉佳',
    image: asset('/awards/a17.jpg')
  },
  {
    id: 'a18',
    date: '2025.08',
    level: 'province',
    grade: '铜奖',
    comp: '第六届东方创意之星创新设计大赛（省赛）',
    work: '《一纸年画——杨家埠木版年画信息可视化设计》',
    team: '孟玉佳',
    image: asset('/awards/a18.jpg')
  },
  {
    id: 'a19',
    date: '2025.06',
    level: 'province',
    grade: '省赛二等奖',
    comp: '第十六届蓝桥杯大赛 · 视觉艺术设计赛 山东赛区',
    work: '《一纸年画——杨家埠木版年画信息可视化设计》',
    team: '孟玉佳',
    image: asset('/awards/a19.jpg')
  },
  {
    id: 'l01',
    date: '2026.08',
    level: 'language',
    grade: '合格证书',
    comp: '大学日语四级考试（CJT-4）',
    work: '日语四级合格证书',
    team: '',
    image: asset('/awards/l01.jpg')
  },
  {
    id: 'l02',
    date: '2026.08',
    level: 'language',
    grade: '合格证书',
    comp: '大学日语六级考试（CJT-6）',
    work: '日语六级合格证书',
    team: '',
    image: asset('/awards/l02.jpg')
  },
  {
    id: 'l03',
    date: '2024.01',
    level: 'language',
    grade: 'N2 合格',
    comp: '日本語能力認定書（JLPT N2）· 2023 年 12 月考试',
    work: '日语能力考试 N2 合格证书',
    team: '',
    image: asset('/awards/l03.jpg')
  },
  // ---------- 校园荣誉 ----------
  {
    id: 'h01',
    date: '2024.12',
    level: 'campus',
    grade: '荣誉称号',
    comp: '潍坊学院学生工作处 · 2024-2025 学年',
    work: '「十佳班级心理委员」荣誉称号',
    team: '',
    image: asset('/awards/h01.jpg')
  },
  {
    id: 'h02',
    date: '2024.12',
    level: 'campus',
    grade: '荣誉称号',
    comp: '潍坊学院学生工作处 · 2024-2025 学年',
    work: '「优秀班级心理委员」荣誉称号',
    team: '',
    image: asset('/awards/h02.jpg')
  },
  {
    id: 'h03',
    date: '2024.10',
    level: 'campus',
    grade: '荣誉证书',
    comp: '共青团潍坊学院委员会 · 2024 年迎新志愿服务',
    work: '「优秀青年志愿者」荣誉证书',
    team: '',
    image: asset('/awards/h03.jpg')
  },
  {
    id: 'h04',
    date: '2024.09',
    level: 'campus',
    grade: '聘书',
    comp: '潍坊学院学生工作处 · 聘期 2024.09 — 2025.09',
    work: '第十三届大学生自律委员会朋辈辅导部部长聘书',
    team: '',
    image: asset('/awards/h04.jpg')
  },
  // ---------- 资质与项目证明 ----------
  {
    id: 'q01',
    date: '2024.01',
    level: 'proof',
    grade: '资质证书',
    comp: '中国科学院心理研究所 · 心理咨询师基础培训项目',
    work: '心理咨询师基础培训合格证书',
    team: '',
    image: asset('/awards/q01.jpg')
  },
  {
    id: 'p01',
    date: '2025年度',
    level: 'proof',
    grade: '校级立项',
    comp: '潍坊学院 2025 年大学生创新创业训练计划立项名单 · 项目负责人',
    work: '“版”上春秋，绘新视界——校级大创立项',
    team: '',
    image: asset('/awards/p01.jpg')
  },
  {
    id: 'p02',
    date: '2024年度',
    level: 'proof',
    grade: '结题通过',
    comp: '校级创新训练项目结题答辩名单 · 项目负责人',
    work: '心理健康知识本土化的平台建设与研究——结题答辩通过',
    team: '',
    image: asset('/awards/p02.jpg')
  },
  {
    id: 'p03',
    date: '2025.09',
    level: 'proof',
    grade: '实习证明',
    comp: '山东君师教育科技有限公司 · 自媒体运营岗（2025.07 — 2025.08）',
    work: '暑期实习证明',
    team: '',
    image: asset('/awards/p03.jpg')
  }
]

export const certFilters = [
  { key: 'all', label: '全部', match: () => true },
  { key: 'national', label: '国家级', match: (c) => c.level === 'national' },
  { key: 'province', label: '省级', match: (c) => c.level === 'province' },
  { key: 'language', label: '语言证书', match: (c) => c.level === 'language' },
  { key: 'campus', label: '校园荣誉', match: (c) => c.level === 'campus' },
  { key: 'proof', label: '资质与证明', match: (c) => c.level === 'proof' }
]

// ---------------- 技能 / 语言 ----------------
export const skills = [
  {
    group: '设计工具',
    en: 'DESIGN TOOLS',
    items: [
      { name: 'Adobe Photoshop', level: '精通' },
      { name: 'Adobe Illustrator', level: '精通' },
      { name: 'After Effects / Premiere', level: '动态视觉与剪辑' },
      { name: 'WPS Office', level: '精通' },
      { name: 'MS Excel', level: '精通' }
    ]
  },
  {
    group: '语言能力',
    en: 'LANGUAGE',
    items: [
      { name: '日语', level: 'N2' },
      { name: '日语', level: '专业四级' },
      { name: '日语', level: '专业六级' }
    ]
  },
  {
    group: '资质证书',
    en: 'CERTIFICATES',
    items: [
      { name: '中科院心理咨询师', level: '基础培训证书' },
      { name: '机动车驾驶证', level: 'C1' }
    ]
  }
]

export const interests = ['心理学', 'UX 设计', '读书', '自媒体博主']

export const experience = [
  {
    kind: '实习经历',
    period: '2026.01 — 2026.09',
    org: '潍坊企形文化创意有限公司',
    role: '中文字库字形设计',
    desc: '负责中文字库字形设计与字符制作；参与与方正集团联合开发的《方正古风宋》项目，完成字形打磨与细节校对，该字体预计 2026 年 12 月上线；另参与《圆融隶》《明体》等多款商用字库开发，规范笔画结构、统一字体视觉风格。'
  },
  {
    kind: '实习经历',
    period: '2025.07 — 2026.09',
    org: '山东君师教育科技有限公司',
    role: '新媒体运营',
    desc: '负责新媒体账号短视频剪辑与内容运维，持续提升账号活跃度；策划并执行线上直播招生活动，通过直播内容优化吸引目标用户，完成引流、咨询对接与招生转化。'
  },
  {
    kind: '社团与组织',
    period: '2024.09 — 2025.09',
    org: '潍坊学院自律委员会心理中心朋辈部',
    role: '部长',
    desc: '对 30 人团队进行科学任务分配，高效完成 200 人次心理访谈活动（有效率 95%）及 5 场大型问卷的设计与回收。'
  }
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
    year: '2025',
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
    year: '2026',
    category: '信息可视化',
    title: '丹若榴叙——枣庄石榴文化信息可视化设计',
    desc: '从历史源流、文化寓意、产业价值与城市品牌四个维度，将枣庄石榴文化转译为可读、可游的信息可视化叙事。作品以参赛名《冠世榴韵》获第二十届中国好创意国赛三等奖。',
    tags: ['信息可视化', '文化叙事', '国赛三等奖'],
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
    desc: '以刻刀与色版为线索，含《根系华夏·一纸开花》等三幅作品，梳理年画发展源流、产地关联与风格流变，拆解典型图像与画店元素，展现文化根系。',
    tags: ['信息可视化', '木版年画', '非遗'],
    image: asset('/projects/04/1.jpg'),
    images: [
      asset('/projects/04/1.jpg'), asset('/projects/04/2.jpg'), asset('/projects/04/3.jpg'), asset('/projects/04/4.jpg')
    ]
  },
  {
    id: '05',
    year: '2026',
    category: '长卷插画 · 主题创作',
    title: '齐鲁好家风',
    desc: '以两部长卷插画为载体，围绕「廉洁」核心，选取焦裕禄等十四位齐鲁人物串联古今廉洁家风故事；以「时空传家」为表现形式融合传统与当代。作品获第二十届中国好创意国赛三等奖。',
    tags: ['插画', '主题创作', '国赛三等奖'],
    image: asset('/projects/05/1.jpg'),
    images: [
      asset('/projects/05/1.jpg'), asset('/projects/05/2.jpg'), asset('/projects/05/3.jpg'), asset('/projects/05/4.jpg'), asset('/projects/05/5.jpg'), asset('/projects/05/6.jpg'), asset('/projects/05/7.jpg'), asset('/projects/05/8.jpg'), asset('/projects/05/9.jpg'), asset('/projects/05/10.jpg')
    ]
  },
  {
    id: '06',
    year: '2025',
    category: 'IP 形象设计 · 民族文化',
    title: '籽灵·榴园奇遇 —— 石榴籽 IP 设计',
    desc: '以石榴籽喻中华民族共同体，主角籽灵拥有标志性翡翠绿瞳，衍生 56 个民族形象并融合传统民族服饰；依托漫画、盲盒文创等载体，用年轻化潮玩视觉传递多元共生观念。',
    tags: ['IP 设计', '民族文化', '文创延展'],
    image: asset('/projects/06/1.jpg'),
    images: [
      asset('/projects/06/1.jpg'), asset('/projects/06/2.jpg'), asset('/projects/06/3.jpg'), asset('/projects/06/4.jpg'), asset('/projects/06/5.jpg')
    ]
  },
  {
    id: '09',
    year: '2025',
    category: '信息可视化 · 非遗',
    title: '刻版之间——杨家埠木版年画×西方画派',
    desc: '提取年画传统配色、木版肌理与吉祥符号，与野兽派、波普、后印象派、立体主义四大画派风格碰撞，采用「AIGC + 人工优化」路线完成信息可视化呈现。作品获全国大学生数媒科技作品及创意竞赛省级三等奖。',
    tags: ['信息可视化', '非遗', '东西方融合'],
    image: asset('/projects/09/1.jpg'),
    images: [
      asset('/projects/09/1.jpg'), asset('/projects/09/2.jpg'), asset('/projects/09/3.jpg'), asset('/projects/09/4.jpg'), asset('/projects/09/5.jpg')
    ]
  },
  {
    id: '10',
    year: '2025',
    category: 'UI/UX · APP 设计',
    title: '籽律 APP——自律成长打卡应用',
    desc: '以石榴文化为精神内核、农民画风格为视觉语言的自律打卡 APP：LOGO 融合石榴与时钟，任务、图鉴、小组、个人四大板块兼顾自律记录与社交分享，用年轻化国风弱化自律的枯燥感。',
    tags: ['UI/UX', 'APP 设计', '国风视觉'],
    image: asset('/projects/10/1.jpg'),
    images: [
      asset('/projects/10/1.jpg'), asset('/projects/10/2.jpg'), asset('/projects/10/3.jpg'), asset('/projects/10/4.jpg'), asset('/projects/10/5.jpg')
    ]
  }
]

export const strengths = [
  {
    no: '01',
    title: '项目统筹与落地',
    en: 'PROJECT LEADERSHIP',
    desc: '主导大学生创新创业项目「版」上春秋并顺利结项，统筹团队分工、实地采风与专家访谈，完整跑通「研究—设计—成果」全流程。',
    points: ['大创项目负责人', '团队协作与任务分配', '调研方案与研究报告']
  },
  {
    no: '02',
    title: '文化转译与视觉叙事',
    en: 'CULTURE → VISUAL',
    desc: '擅长挖掘文化内核并转化为年轻化视觉语言，在信息可视化、IP 形象与长卷插画间建立统一叙事，累计 19 项国家级、省级奖项背书。',
    points: ['信息可视化体系搭建', 'IP 形象与文创延展', '符号解构与再设计']
  },
  {
    no: '03',
    title: '平面与动态视觉',
    en: 'GRAPHIC & MOTION',
    desc: '熟练运用 PS、AI、AE、PR 等软件，覆盖海报版式、字体图形、工艺图解与短视频剪辑，兼顾静态质感与动态表达。',
    points: ['海报与版式设计', '字体与图形设计', '短视频剪辑与动效']
  },
  {
    no: '04',
    title: '设计心理与跨文化',
    en: 'PSYCHOLOGY × LANGUAGE',
    desc: '持有中科院心理咨询师基础培训证书与日语 N2 / 专业四级 / 专业六级证书，可精准洞察用户心理并理解日本市场审美语境。',
    points: ['用户与消费心理洞察', '日语 N2 及专业四六级', '跨文化审美研究']
  }
]

export const navLinks = [
  { href: '#home', label: '首页' },
  { href: '#about', label: '关于' },
  { href: '#work', label: '作品' },
  { href: '#awards', label: '获奖' },
  { href: '#capabilities', label: '能力' },
  { href: '#direction', label: '方向' },
  { href: '#contact', label: '联系' }
]
