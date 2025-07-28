import { useEffect, useState, useCallback } from 'react'

/**
 * Parallax scrolling effect Hook
 * @param speed Parallax speed, between 0-1, smaller values move slower
 * @param offset Initial offset
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
 * Returns the percentage progress of current page scroll
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
 * @param threshold Visibility threshold, between 0-1
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
 * Used to create multiple parallax layers with different speeds
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

  return {
    scrollY,
    layerOffsets,
    getLayerStyle: (index: number) => {
      // Safe array access to prevent object injection attacks
      const offset = layerOffsets.at(Math.max(0, Math.min(index, layerOffsets.length - 1))) ?? 0
      return {
        transform: `translateY(${offset}px)`,
        willChange: 'transform',
      }
    },
  }
}
