import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { GLOBE_CONFIG, PARALLAX_CONFIG } from '../../constants'
import { useAnimation } from '../../hooks/useAnimation'
import { useMultiLayerParallax } from '../../hooks/useParallax'
import RealisticGlobe from '../three/RealisticGlobe'

/**
 * Hero section component - Main display area of the website homepage1
 * Contains 3D globe model, personal introduction and multi-layer parallax effects
 */
const HeroSection = React.memo(() => {
  // Internationalization translation hook
  const { t } = useTranslation()
  // Animation effects hook - get various animation variants
  const { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } = useAnimation()
  // Multi-layer parallax effect hook - get layer style functions
  const { getLayerStyle } = useMultiLayerParallax([...PARALLAX_CONFIG.layers.hero])

  // Get all required translation texts
  const greeting = t('hero.greeting')
  const name = t('hero.name')
  const title = t('hero.title')
  const subtitle = t('hero.subtitle')
  const description = t('hero.description')
  const cta = t('hero.cta')
  const contactMe = t('hero.contactMe')
  const github = t('hero.github')
  const download = t('hero.download')

  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20'>
      {/* Background effect layer - contains gradient background and multi-layer parallax glow effects */}
      {/* Main background gradient - sophisticated dark gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900' />

      {/* Enhanced glow effects with modern colors */}
      <div
        className='absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl'
        style={getLayerStyle(0)}
      />
      <div
        className='absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl'
        style={getLayerStyle(1)}
      />
      <div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-indigo-500/8 to-purple-500/8 rounded-full blur-3xl'
        style={getLayerStyle(2)}
      />

      <div className='container mx-auto px-6 text-center relative z-20'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-16'>
          {/* Left content area - personal introduction and action buttons */}
          <motion.div className='flex-1' variants={fadeInLeft} initial='hidden' animate='show'>
            <motion.p
              className='text-primary font-mono mb-6 text-lg tracking-wide'
              variants={fadeInUp}
            >
              {greeting}
            </motion.p>

            <motion.h1
              className='text-6xl md:text-8xl font-black mb-8 heading-modern tracking-tighter'
              variants={fadeInUp}
            >
              <span className='bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                {name}
              </span>
            </motion.h1>

            <motion.h2
              className='text-2xl md:text-3xl text-gray-300 mb-10 font-medium'
              variants={fadeInUp}
            >
              {title}
            </motion.h2>

            <motion.p
              className='text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed font-medium'
              variants={fadeInUp}
            >
              {subtitle}
            </motion.p>

            <motion.p
              className='text-lg text-gray-500 mb-16 max-w-3xl leading-relaxed'
              variants={fadeInUp}
            >
              {description}
            </motion.p>

            <motion.div
              className='flex flex-wrap gap-6 justify-center sm:justify-start'
              variants={staggerContainer}
            >
              <motion.a
                href='#projects'
                className='button-modern bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:shadow-glow whitespace-nowrap'
                variants={fadeInUp}
              >
                {cta}
              </motion.a>
              <motion.a
                href='#contact'
                className='button-modern border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 whitespace-nowrap'
                variants={fadeInUp}
              >
                {contactMe}
              </motion.a>
              <motion.a
                href={`${import.meta.env.BASE_URL}resume_cn_onepage.pdf`}
                download
                className='button-modern border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 flex items-center justify-center gap-2 whitespace-nowrap'
                variants={fadeInUp}
              >
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2'
                  />
                  <path strokeLinecap='round' strokeLinejoin='round' d='M7 10l5 5m0 0l5-5m-5 5V4' />
                </svg>
                {download}
              </motion.a>
              <motion.a
                href='https://github.com/jimmfly'
                target='_blank'
                rel='noopener noreferrer'
                className='button-modern border-2 border-gray-500/50 text-gray-400 hover:bg-gray-500/10 flex items-center justify-center gap-3 whitespace-nowrap'
                variants={fadeInUp}
              >
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                    clipRule='evenodd'
                  />
                </svg>
                {github}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side 3D globe display area */}
          <motion.div
            className='flex-1 flex justify-center items-center relative'
            variants={fadeInRight}
            initial='hidden'
            animate='show'
          >
            {/* 3D globe container - enhanced with glow effect */}
            <div className='relative w-96 h-96 md:w-[32rem] md:h-[32rem]'>
              {/* Ambient glow behind globe */}
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-2xl animate-glow' />

              {/* Three.js Canvas - 3D rendering canvas */}
              <Canvas
                className='relative z-10'
                camera={{ position: [0, 0, 3], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
              >
                <Suspense fallback={null}>
                  {/* Enhanced lighting setup */}
                  <ambientLight intensity={1.2} />
                  <pointLight position={[-3, -2, -3]} intensity={0.3} color='#4a90e2' />
                  <pointLight position={[3, 2, 3]} intensity={0.2} color='#a855f7' />

                  {/* 3D globe model component */}
                  <RealisticGlobe
                    position={GLOBE_CONFIG.position}
                    scale={GLOBE_CONFIG.scale}
                    autoRotate={GLOBE_CONFIG.autoRotate}
                    rotationSpeed={GLOBE_CONFIG.rotationSpeed}
                  />

                  {/* Orbit controls */}
                  <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    autoRotate={false}
                    minDistance={2}
                    maxDistance={6}
                  />
                </Suspense>
              </Canvas>
            </div>
          </motion.div>
        </div>

        {/* Enhanced scroll down indicator */}
        <motion.div
          className='absolute bottom-12 left-1/2 transform -translate-x-1/2'
          variants={fadeInUp}
          initial='hidden'
          animate='show'
        >
          <a href='#about' className='flex flex-col items-center text-primary group'>
            <span className='text-sm mb-3 font-medium tracking-wide group-hover:text-purple-400 transition-colors'>
              {t('common.scrollDown')}
            </span>
            <svg
              className='w-7 h-7 animate-bounce group-hover:text-purple-400 transition-colors'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 14l-7 7m0 0l-7-7m7 7V3'
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'

export default HeroSection
