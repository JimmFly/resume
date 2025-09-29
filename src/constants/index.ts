// Animation configuration constants
export const ANIMATION_CONFIG = {
  // Basic animation duration
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    globe: 1.0,
  },

  // Delay configuration
  delay: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.4,
  },

  // Easing functions
  easing: {
    easeOut: [0.25, 0.46, 0.45, 0.94],
    easeInOut: [0.4, 0, 0.2, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },

  // Viewport configuration
  viewport: {
    once: true,
    amount: 0.3,
  },
} as const

// Globe configuration
export const GLOBE_CONFIG = {
  // Shenzhen coordinates
  shenzhen: {
    latitude: 22.5431,
    longitude: 114.0579,
  },

  // Globe material configuration
  material: {
    roughness: 0.8,
    metalness: 0.1,
    shininess: 100,
    specular: 0x111111,
  },

  // Rotation configuration
  rotation: {
    speed: 0.005,
    autoRotate: true,
  },

  // Marker configuration
  marker: {
    color: '#64ffda',
    size: 0.02,
    glowIntensity: 2,
    glowOpacity: 0.3,
  },

  // 3D scene configuration
  position: [0, 0, 0] as [number, number, number],
  scale: 1.62,
  autoRotate: true,
  rotationSpeed: 0.15,
} as const

// Hero section content
export const HERO_CONTENT = {
  greeting: 'hero.greeting',
  name: 'hero.name',
  title: 'hero.title',
  description: 'hero.description',
  buttons: [
    {
      text: 'hero.contactMe',
      href: 'mailto:yangjinfei001@gmail.com',
      primary: true,
      external: false,
    },
    {
      text: 'hero.github',
      href: 'https://github.com/JimmFly',
      primary: false,
      external: true,
    },
  ],
} as const

// Parallax effect configuration
export const PARALLAX_CONFIG = {
  // Background layer parallax speed
  background: {
    slow: 0.2,
    medium: 0.4,
    fast: 0.6,
  },

  // Element parallax speed
  elements: {
    subtle: 0.1,
    normal: 0.3,
    strong: 0.5,
  },

  // Scroll threshold
  thresholds: {
    inView: 0.1,
    halfView: 0.5,
    fullView: 0.9,
  },

  // Parallax layer configuration
  layers: {
    hero: [
      { speed: 0.2, offset: 0 }, // Background slowest
      { speed: 0.4, offset: 0 }, // Midground
      { speed: 0.6, offset: 0 }, // Foreground fastest
    ],
    sections: [
      { speed: 0.1, offset: 0 }, // Background decoration
      { speed: 0.3, offset: 0 }, // Content elements
    ],
  },
} as const

// About section content
export const ABOUT_CONTENT = {
  title: 'about.title',
  description: ['about.description1', 'about.description2', 'about.description3'],
  cards: [
    {
      title: 'about.cards.experience.title',
      items: ['about.cards.experience.company', 'about.cards.experience.position'],
    },
    {
      title: 'about.cards.projects.title',
      items: ['about.cards.projects.affine', 'about.cards.projects.stack'],
    },
    {
      title: 'about.cards.contact.title',
      items: ['about.cards.contact.phone', 'about.cards.contact.email'],
    },
  ],
  advantages: [
    'about.advantages.technical',
    'about.advantages.experience',
    'about.advantages.learning',
    'about.advantages.teamwork',
    'about.advantages.innovation',
  ],
} as const

// Responsive breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Color theme
export const THEME_COLORS = {
  background: '#0a0a0f',
  text: '#f0f6ff',
  primary: '#64ffda',
  secondary: '#8892b0',
  accent: '#1a1a2e',
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tertiary: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    purple: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    orange: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  },
} as const

// Skills data
export const SKILLS_DATA = [
  // Frontend core technologies
  { name: 'React', level: 95, category: 'frontend' as const },
  { name: 'TypeScript', level: 90, category: 'frontend' as const },
  { name: 'JavaScript', level: 95, category: 'frontend' as const },
  { name: 'HTML5/CSS3', level: 95, category: 'frontend' as const },
  { name: 'ES6+', level: 90, category: 'frontend' as const },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' as const },
  { name: 'shadcn-ui', level: 85, category: 'frontend' as const },
  { name: 'radix-ui', level: 80, category: 'frontend' as const },

  // Backend and data
  { name: 'GraphQL', level: 85, category: 'backend' as const },
  { name: 'Node.js', level: 75, category: 'backend' as const },
  { name: 'MVC架构', level: 80, category: 'backend' as const },

  // Development tools
  { name: 'Git', level: 95, category: 'tools' as const },
  { name: 'Vite', level: 85, category: 'tools' as const },
  { name: 'Figma', level: 75, category: 'tools' as const },
  { name: 'Notion', level: 80, category: 'tools' as const },
  { name: 'AI Coding', level: 85, category: 'tools' as const },
] as const

// Work experience data
export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: 'experience.toeverything.company',
    position: 'experience.toeverything.position',
    period: 'experience.toeverything.period',
    location: 'experience.toeverything.location',
    description: 'experience.toeverything.description',
    achievements: [
      'experience.toeverything.achievements.architecture',
      'experience.toeverything.achievements.i18n',
      'experience.toeverything.achievements.admin',
      'experience.toeverything.achievements.components',
    ],
    technologies: ['React', 'TypeScript', 'GraphQL', 'Tailwind CSS', 'shadcn-ui'],
  },
] as const
