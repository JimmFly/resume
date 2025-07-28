import { useState, useEffect } from 'react'
import { BREAKPOINTS } from '../constants'
import type { Breakpoint } from '../types'

/**
 * Custom hook: Responsive screen size detection
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
    return { width: 1024, height: 768 } // Default values
  })

  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>('lg')

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      setScreenSize({ width, height })

      // Determine current breakpoint
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

    // Initialize
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup function
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Check if matches specific breakpoint
  const isBreakpoint = (breakpoint: Breakpoint): boolean => {
    const breakpointOrder: Breakpoint[] = ['sm', 'md', 'lg', 'xl', '2xl']
    const currentIndex = breakpointOrder.indexOf(currentBreakpoint)
    const targetIndex = breakpointOrder.indexOf(breakpoint)
    return currentIndex >= targetIndex
  }

  // Check if mobile device
  const isMobile = currentBreakpoint === 'sm'

  // Check if tablet device
  const isTablet = currentBreakpoint === 'md'

  // Check if desktop device
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
 * Custom hook: Media query detection
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

    // Set initial value
    setMatches(mediaQuery.matches)

    // Add listener
    mediaQuery.addEventListener('change', handleChange)

    // Cleanup function
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [query])

  return matches
}

/**
 * Custom hook: Detect user preferences
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
