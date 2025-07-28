// 动画配置常量
export const ANIMATION_CONFIG = {
  // 基础动画时长
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    globe: 1.0
  },
  
  // 延迟配置
  delay: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.4
  },
  
  // 缓动函数
  easing: {
    easeOut: [0.25, 0.46, 0.45, 0.94],
    easeInOut: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55]
  },
  
  // 视口配置
  viewport: {
    once: true,
    amount: 0.3
  }
} as const;

// 地球配置
export const GLOBE_CONFIG = {
  // 深圳坐标
  shenzhen: {
    latitude: 22.5431,
    longitude: 114.0579
  },
  
  // 地球材质配置
  material: {
    roughness: 0.8,
    metalness: 0.1,
    shininess: 100,
    specular: 0x111111
  },
  
  // 旋转配置
  rotation: {
    speed: 0.005,
    autoRotate: true
  },
  
  // 标记配置
  marker: {
    color: '#64ffda',
    size: 0.02,
    glowIntensity: 2,
    glowOpacity: 0.3
  },
  
  // 3D场景配置
  position: [0, 0, 0] as [number, number, number],
  scale: 1.62,
  autoRotate: true,
  rotationSpeed: 0.15
} as const;

// Hero区域内容
export const HERO_CONTENT = {
  greeting: '你好，我是',
  name: '杨晋飞',
  title: '前端开发工程师 · 3年经验 · 万有理论科技',
  description: '专注于React技术栈的前端开发工程师，拥有3年丰富经验。熟练掌握TypeScript、GraphQL、Tailwind CSS等现代前端技术，参与AFFiNE开源项目开发。擅长构建高质量、可复用的组件库，致力于打造优秀的用户体验。',
  buttons: [
    {
      text: '联系我',
      href: 'mailto:yangjinfei001@gmail.com',
      primary: true,
      external: false
    },
    {
      text: 'GitHub',
      href: 'https://github.com/JimmFly',
      primary: false,
      external: true
    }
   ]
 } as const;

// 视差效果配置
export const PARALLAX_CONFIG = {
  // 背景层视差速度
  background: {
    slow: 0.2,
    medium: 0.4,
    fast: 0.6
  },
  
  // 元素视差速度
  elements: {
    subtle: 0.1,
    normal: 0.3,
    strong: 0.5
  },
  
  // 滚动阈值
  thresholds: {
    inView: 0.1,
    halfView: 0.5,
    fullView: 0.9
  },
  
  // 视差层配置
  layers: {
    hero: [
      { speed: 0.2, offset: 0 },    // 背景最慢
      { speed: 0.4, offset: 0 },    // 中景
      { speed: 0.6, offset: 0 }     // 前景最快
    ],
    sections: [
      { speed: 0.1, offset: 0 },    // 背景装饰
      { speed: 0.3, offset: 0 }     // 内容元素
    ]
  }
} as const;

// About区域内容
export const ABOUT_CONTENT = {
  title: '关于我',
  description: [
    '我是杨晋飞，一名拥有3年丰富经验的前端开发工程师，目前就职于万有理论科技（杭州）有限责任公司。专注于React技术栈，熟练掌握TypeScript、GraphQL、Tailwind CSS等现代前端技术。',
    '在职业生涯中，我主导参与了AFFiNE开源项目的开发，这是一个可自部署的本地优先多人协同知识库。负责前端架构设计、国际化实现、admin panel开发等核心功能模块。',
    '我热衷于探索前沿技术，50% vibe coding，对AI应用开发方向保持高度兴趣。致力于构建高质量、可复用的组件库，追求优秀的用户体验和产品创新。'
  ],
  cards: [
    {
      title: '工作经历',
      items: [
        '万有理论科技（杭州）有限责任公司',
        '前端开发工程师 | 2022.06 - 2025.06'
      ]
    },
    {
      title: '核心项目',
      items: [
        'AFFiNE - 开源知识库',
        'React + TypeScript + GraphQL'
      ]
    },
    {
      title: '联系方式',
      items: [
        '📞 13008857268',
        '✉️ yangjinfei001@gmail.com'
      ]
    }
  ]
} as const;

// 响应式断点
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

// 颜色主题
export const THEME_COLORS = {
  background: '#0a192f',
  text: '#e6f1ff',
  primary: '#64ffda',
  secondary: '#8892b0',
  accent: '#112240'
} as const;

// 技能数据
export const SKILLS_DATA = [
  // 前端核心技术
  { name: 'React', level: 95, category: 'frontend' as const },
  { name: 'TypeScript', level: 90, category: 'frontend' as const },
  { name: 'JavaScript', level: 95, category: 'frontend' as const },
  { name: 'HTML5/CSS3', level: 95, category: 'frontend' as const },
  { name: 'ES6+', level: 90, category: 'frontend' as const },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' as const },
  { name: 'shadcn-ui', level: 85, category: 'frontend' as const },
  { name: 'radix-ui', level: 80, category: 'frontend' as const },
  
  // 后端与数据
  { name: 'GraphQL', level: 85, category: 'backend' as const },
  { name: 'Node.js', level: 75, category: 'backend' as const },
  { name: 'MVC架构', level: 80, category: 'backend' as const },
  
  // 开发工具
  { name: 'Git', level: 95, category: 'tools' as const },
  { name: 'Vite', level: 85, category: 'tools' as const },
  { name: 'Figma', level: 75, category: 'tools' as const },
  { name: 'Notion', level: 80, category: 'tools' as const },
  { name: 'AI Coding', level: 85, category: 'tools' as const }
] as const;