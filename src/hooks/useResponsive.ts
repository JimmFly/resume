import { useState, useEffect } from 'react'
import { BREAKPOINTS } from '../constants'
import type { Breakpoint } from '../types'

/**
 * 自定义hook：响应式屏幕尺寸检测
 */
export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState<{
    width: number
    height: number
  }>(() => {
    if (typeof window !== 'undefined') {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }
    return { width: 1024, height: 768 } // 默认值
  })

  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('lg')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      setScreenSize({ width, height })

      // 确定当前断点
      if (width >= BREAKPOINTS['2xl']) {
        setCurrentBreakpoint('2xl')
      } else if (width >= BREAKPOINTS.xl) {
        setCurrentBreakpoint('xl')
      } else if (width >= BREAKPOINTS.lg) {
        setCurrentBreakpoint('lg')
      } else if (width >= BREAKPOINTS.md) {
        setCurrentBreakpoint('md')
      } else {
        setCurrentBreakpoint('sm')
      }
    }

    // 初始化
    handleResize()

    // 添加事件监听器
    window.addEventListener('resize', handleResize)

    // 清理函数
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 检查是否匹配特定断点
  const isBreakpoint = (breakpoint: Breakpoint): boolean => {
    const breakpointOrder: Breakpoint[] = ['sm', 'md', 'lg', 'xl', '2xl']
    const currentIndex = breakpointOrder.indexOf(currentBreakpoint)
    const targetIndex = breakpointOrder.indexOf(breakpoint)
    return currentIndex >= targetIndex
  }

  // 检查是否为移动设备
  const isMobile = currentBreakpoint === 'sm'

  // 检查是否为平板设备
  const isTablet = currentBreakpoint === 'md'

  // 检查是否为桌面设备
  const isDesktop = ['lg', 'xl', '2xl'].includes(currentBreakpoint)

  return {
    screenSize,
    currentBreakpoint,
    isBreakpoint,
    isMobile,
    isTablet,
    isDesktop,
  }
}

/**
 * 自定义hook：媒体查询检测
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // 设置初始值
    setMatches(mediaQuery.matches)

    // 添加监听器
    mediaQuery.addEventListener('change', handleChange)

    // 清理函数
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [query])

  return matches
}

/**
 * 自定义hook：检测用户偏好
 */
export const useUserPreferences = () => {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersHighContrast = useMediaQuery('(prefers-contrast: high)')

  return {
    prefersReducedMotion,
    prefersDarkMode,
    prefersHighContrast,
  }
}
