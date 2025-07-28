// Basic type definitions
export interface Skill {
  name: string
  level: number // 1-100
  category: 'frontend' | 'backend' | 'tools'
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image?: string
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

export interface ContactInfo {
  email: string
  phone?: string
  location: string
  linkedin?: string
  github?: string
  website?: string
}

// Animation related types
export interface AnimationVariants {
  [key: string]: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      staggerChildren?: number
      ease?: number[]
    }
  }
  hidden: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
  show: {
    opacity: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      staggerChildren?: number
      ease?: number[]
    }
  }
}

export interface ViewportConfig {
  once: boolean
  amount?: number
  margin?: string
}

// Globe component related types
export interface GlobeProps {
  scale?: number
  autoRotate?: boolean
  rotationSpeed?: number
  showMarker?: boolean
  markerPosition?: {
    latitude: number
    longitude: number
  }
}

export interface MarkerProps {
  position: [number, number, number]
  color?: string
  size?: number
  glowIntensity?: number
}

// Component Props types
export interface SkillBarProps {
  skill: Skill
}

export interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

// Error boundary related types
export interface ErrorInfo {
  componentStack: string
}

export interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

// Performance monitoring types
export interface PerformanceMetrics {
  renderTime: number
  componentName: string
  timestamp: number
}

// Responsive related types
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface ResponsiveValue<T> {
  base: T
  sm?: T
  md?: T
  lg?: T
  xl?: T
  '2xl'?: T
}

// Theme related types
export interface ThemeColors {
  background: string
  text: string
  primary: string
  secondary: string
  accent: string
}

export type ColorKey = keyof ThemeColors
