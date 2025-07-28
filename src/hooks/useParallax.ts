import { useEffect, useState, useCallback } from 'react'

/**
 * Parallax scrolling effect Hook
 * Creates a parallax effect based on scroll position, useful for background images or element movements
 * @param speed Parallax speed multiplier, range 0-1, smaller values move slower, 0 means no movement, 1 means synchronized with scroll
 * @param offset Initial offset in pixels
 * @returns Object containing scroll position, parallax offset, and transform styles
 */
export const useParallax = (speed: number = 0.5, offset: number = 0) => {
  const [scrollY, setScrollY] = useState(0)
  const [parallaxOffset, setParallaxOffset] = useState(offset)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    setScrollY(currentScrollY)
    setParallaxOffset(offset + currentScrollY * speed)
  }, [speed, offset])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return {
    scrollY,
    parallaxOffset,
    transform: `translateY(${parallaxOffset}px)`,
    style: {
      transform: `translateY(${parallaxOffset}px)`,
      willChange: 'transform',
    },
  }
}

/**
 * Scroll progress Hook
 * Calculates and returns the current scroll progress percentage, useful for progress bar displays
 * @returns Scroll progress percentage, range 0-100
 */
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(Math.min(100, Math.max(0, scrollPercent)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialize

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

/**
 * Element visibility detection Hook
 * Uses the Intersection Observer API to detect if an element is visible in the viewport, useful for lazy loading and animation triggers
 * @param threshold Visibility threshold, range 0-1, 0 means the element is just entering the viewport, 1 means the element is fully visible
 * @returns Returns an array containing the ref setting function and visibility status
 */
export const useInView = (threshold: number = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold }
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, threshold])

  return [setRef, isInView] as const
}

/**
 * Multi-layer parallax effect Hook
 * Creates multiple parallax layers with different movement speeds, useful for rich visual hierarchies
 * @param layers Array of parallax layer configurations, each layer contains speed and optional initial offset
 * @returns Object containing scroll position, layer offsets, and method to get layer styles
 */
export const useMultiLayerParallax = (layers: { speed: number; offset?: number }[]) => {
  const [scrollY, setScrollY] = useState(0)
  const [layerOffsets, setLayerOffsets] = useState<number[]>(layers.map(layer => layer.offset || 0))

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      const newOffsets = layers.map(layer => {
        const baseOffset = layer.offset || 0
        return baseOffset + currentScrollY * layer.speed
      })

      setLayerOffsets(newOffsets)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [layers])

  /**
   * Get the CSS transform style for a specific layer
   * @param index Layer index
   * @returns CSS transform style object
   */
  const getLayerStyle = (index: number) => {
    // Safe array access to prevent out-of-bounds
    const offset = layerOffsets.at(Math.max(0, Math.min(index, layerOffsets.length - 1))) ?? 0
    return {
      transform: `translateY(${offset}px)`,
      willChange: 'transform',
    }
  }

  return {
    /** Current scroll position */
    scrollY,
    /** Array of offsets for each layer */
    layerOffsets,
    /** Method to get layer styles */
    getLayerStyle,
  }
}
