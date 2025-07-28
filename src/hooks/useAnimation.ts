import { useMemo } from 'react'
import { ANIMATION_CONFIG } from '../constants'
import type { ViewportConfig } from '../types'
import type { Variants } from 'framer-motion'

/**
 * Custom hook: Generate standardized animation configurations
 */
export const useAnimation = () => {
  const fadeInUp = useMemo(
    (): Variants => ({
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: ANIMATION_CONFIG.duration.normal,
          ease: [...ANIMATION_CONFIG.easing.easeOut],
        },
      },
    }),
    []
  )

  const fadeInDown = useMemo(
    (): Variants => ({
      hidden: { opacity: 0, y: -20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: ANIMATION_CONFIG.duration.normal,
          ease: [...ANIMATION_CONFIG.easing.easeOut],
        },
      },
    }),
    []
  )

  const fadeInLeft = useMemo(
    (): Variants => ({
      hidden: { opacity: 0, x: -20 },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: ANIMATION_CONFIG.duration.normal,
          ease: [...ANIMATION_CONFIG.easing.easeOut],
        },
      },
    }),
    []
  )

  const fadeInRight = useMemo(
    (): Variants => ({
      hidden: { opacity: 0, x: 20 },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: ANIMATION_CONFIG.duration.normal,
          ease: ANIMATION_CONFIG.easing.easeOut,
        },
      },
    }),
    []
  )

  const scaleIn = useMemo(
    (): Variants => ({
      hidden: { opacity: 0, scale: 0.8 },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: ANIMATION_CONFIG.duration.normal,
          ease: [...ANIMATION_CONFIG.easing.bounce],
        },
      },
    }),
    []
  )

  const staggerContainer = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: ANIMATION_CONFIG.delay.short,
          delayChildren: ANIMATION_CONFIG.delay.medium,
        },
      },
    }),
    []
  )

  const viewport = useMemo(
    (): ViewportConfig => ({
      once: ANIMATION_CONFIG.viewport.once,
      amount: ANIMATION_CONFIG.viewport.amount,
    }),
    []
  )

  return {
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    viewport,
  }
}

/**
 * Custom hook: Create animation configurations with delay
 */
export const useDelayedAnimation = (delay: number = 0) => {
  return useMemo(() => {
    const fadeInUp: Variants = {
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: ANIMATION_CONFIG.duration.normal,
          ease: [...ANIMATION_CONFIG.easing.easeOut],
          delay: delay,
        },
      },
    }

    const fadeInDown: Variants = {
      hidden: { opacity: 0, y: -20 },
      show: {
        opacity: 1,
        y: 0,
        transition: {
          duration: ANIMATION_CONFIG.duration.normal,
          ease: [...ANIMATION_CONFIG.easing.easeOut],
          delay: delay,
        },
      },
    }

    const fadeInLeft: Variants = {
      hidden: { opacity: 0, x: -20 },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: ANIMATION_CONFIG.duration.normal,
          ease: [...ANIMATION_CONFIG.easing.easeOut],
          delay: delay,
        },
      },
    }

    const fadeInRight: Variants = {
      hidden: { opacity: 0, x: 20 },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          duration: ANIMATION_CONFIG.duration.normal,
          ease: [...ANIMATION_CONFIG.easing.easeOut],
          delay: delay,
        },
      },
    }

    const scaleIn: Variants = {
      hidden: { opacity: 0, scale: 0.8 },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: ANIMATION_CONFIG.duration.normal,
          ease: [...ANIMATION_CONFIG.easing.bounce],
          delay: delay,
        },
      },
    }

    const viewport: ViewportConfig = {
      once: ANIMATION_CONFIG.viewport.once,
      amount: ANIMATION_CONFIG.viewport.amount,
    }

    return {
      fadeInUp,
      fadeInDown,
      fadeInLeft,
      fadeInRight,
      scaleIn,
      viewport,
    }
  }, [delay])
}
