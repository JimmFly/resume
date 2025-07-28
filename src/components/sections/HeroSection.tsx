import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useTranslation } from 'react-i18next'
import RealisticGlobe from '../three/RealisticGlobe'
import { GLOBE_CONFIG, PARALLAX_CONFIG } from '../../constants'
import { useAnimation } from '../../hooks/useAnimation'
import { useMultiLayerParallax } from '../../hooks/useParallax'

const HeroSection = React.memo(() => {
  const { t } = useTranslation()
  const { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } = useAnimation()
  const { getLayerStyle } = useMultiLayerParallax([...PARALLAX_CONFIG.layers.hero])

  const greeting = t('hero.greeting')
  const name = t('hero.name')
  const title = t('hero.title')
  const subtitle = t('hero.subtitle')
  const description = t('hero.description')
  const cta = t('hero.cta')
  const contactMe = t('hero.contactMe')
  const github = t('hero.github')

  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20'>
      {/* Background effects - Add parallax effect */}
      <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900' />
      <div
        className='absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl'
        style={getLayerStyle(0)}
      />
      <div
        className='absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'
        style={getLayerStyle(1)}
      />
      <div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl'
        style={getLayerStyle(2)}
      />

      <div className='container mx-auto px-6 text-center relative z-20'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          {/* Left content */}
          <motion.div className='flex-1' variants={fadeInLeft} initial='hidden' animate='show'>
            <motion.p className='text-primary font-mono mb-4' variants={fadeInUp}>
              {greeting}
            </motion.p>

            <motion.h1
              className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'
              variants={fadeInUp}
            >
              {name}
            </motion.h1>

            <motion.h2 className='text-xl md:text-2xl text-gray-300 mb-8' variants={fadeInUp}>
              {title}
            </motion.h2>

            <motion.p
              className='text-lg text-gray-400 mb-6 max-w-2xl leading-relaxed'
              variants={fadeInUp}
            >
              {subtitle}
            </motion.p>

            <motion.p
              className='text-base text-gray-500 mb-12 max-w-3xl leading-relaxed'
              variants={fadeInUp}
            >
              {description}
            </motion.p>

            <motion.div
              className='flex flex-wrap gap-4 justify-center sm:justify-start'
              variants={staggerContainer}
            >
              <motion.a
                href='#projects'
                className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap'
                variants={fadeInUp}
              >
                {cta}
              </motion.a>
              <motion.a
                href='#contact'
                className='border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 whitespace-nowrap'
                variants={fadeInUp}
              >
                {contactMe}
              </motion.a>
              <motion.a
                href='https://github.com/jimmfly'
                target='_blank'
                rel='noopener noreferrer'
                className='border-2 border-gray-500 text-gray-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap'
                variants={fadeInUp}
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
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

          {/* Right side 3D globe */}
          <motion.div
            className='flex-1 flex justify-center items-center relative'
            variants={fadeInRight}
            initial='hidden'
            animate='show'
          >
            <div className='relative w-96 h-96 md:w-[28rem] md:h-[28rem]'>
              <Canvas
                camera={{ position: [0, 0, 3], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
              >
                <Suspense fallback={null}>
                  {/* Ambient lighting - Enhanced brightness for global daylight */}
                  <ambientLight intensity={1.0} />

                  {/* Additional light source */}
                  <pointLight position={[-3, -2, -3]} intensity={0.2} color='#4a90e2' />

                  {/* 3D Globe */}
                  <RealisticGlobe
                    position={GLOBE_CONFIG.position}
                    scale={GLOBE_CONFIG.scale}
                    autoRotate={GLOBE_CONFIG.autoRotate}
                    rotationSpeed={GLOBE_CONFIG.rotationSpeed}
                  />

                  {/* Controls */}
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

        {/* Scroll down indicator */}
        <motion.div
          className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
          variants={fadeInUp}
          initial='hidden'
          animate='show'
        >
          <a href='#about' className='flex flex-col items-center text-primary'>
            <span className='text-sm mb-2'>{t('common.scrollDown')}</span>
            <svg
              className='w-6 h-6 animate-bounce'
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
