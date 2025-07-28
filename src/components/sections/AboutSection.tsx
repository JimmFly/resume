import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PARALLAX_CONFIG } from '../../constants'
import { useAnimation } from '../../hooks/useAnimation'
import { useParallax, useInView } from '../../hooks/useParallax'

const AboutSection = React.memo(() => {
  const { t } = useTranslation()
  const { fadeInUp, staggerContainer, viewport } = useAnimation()
  const parallaxY = useParallax(PARALLAX_CONFIG.elements.subtle)
  const [sectionRef, inView] = useInView(PARALLAX_CONFIG.thresholds.inView)

  const description1 = t('about.description1')
  const description2 = t('about.description2')
  const description3 = t('about.description3')
  const advantages = {
    technical: t('about.advantages.technical'),
    experience: t('about.advantages.experience'),
    learning: t('about.advantages.learning'),
    teamwork: t('about.advantages.teamwork'),
    innovation: t('about.advantages.innovation'),
  }
  return (
    <section id='about' ref={sectionRef} className='section-container relative overflow-hidden'>
      {/* Background decorative elements - Parallax effect */}
      <div
        className='absolute top-10 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl'
        style={{ transform: `translateY(${Number(parallaxY || 0) * 0.5}px)` }}
      />
      <div
        className='absolute bottom-10 left-10 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl'
        style={{ transform: `translateY(${Number(parallaxY || 0) * 0.3}px)` }}
      />
      <motion.div
        className='max-w-4xl mx-auto relative z-10'
        variants={staggerContainer}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
        viewport={viewport}
      >
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 text-center font-heading'
          variants={fadeInUp}
        >
          <span className='bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent'>
            {t('about.title')}
          </span>
        </motion.h2>

        <div className='max-w-4xl mx-auto mb-12 px-4'>
          <motion.p
            className='text-base md:text-lg text-gray-300 mb-6 leading-relaxed'
            variants={fadeInUp}
          >
            {description1}
          </motion.p>
          <motion.p
            className='text-base md:text-lg text-gray-300 mb-6 leading-relaxed'
            variants={fadeInUp}
          >
            {description2}
          </motion.p>
          <motion.p
            className='text-base md:text-lg text-gray-300 mb-8 leading-relaxed'
            variants={fadeInUp}
          >
            {description3}
          </motion.p>
        </div>

        {/* Personal advantages cards */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-6xl mx-auto px-4'
          variants={staggerContainer}
        >
          {/* Work experience card */}
          <motion.div
            className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300'
            variants={fadeInUp}
          >
            <h3 className='text-xl font-semibold text-blue-400 mb-3'>
              {t('about.cards.experience.title')}
            </h3>
            <p className='text-gray-300 font-medium mb-2'>{t('about.cards.experience.company')}</p>
            <p className='text-gray-400 text-sm'>{t('about.cards.experience.position')}</p>
          </motion.div>

          {/* Core projects card */}
          <motion.div
            className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300'
            variants={fadeInUp}
          >
            <h3 className='text-xl font-semibold text-purple-400 mb-3'>
              {t('about.cards.projects.title')}
            </h3>
            <p className='text-gray-300 font-medium mb-2'>{t('about.cards.projects.affine')}</p>
            <p className='text-gray-400 text-sm'>{t('about.cards.projects.stack')}</p>
          </motion.div>

          {/* Contact information card */}
          <motion.div
            className='bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300'
            variants={fadeInUp}
          >
            <h3 className='text-xl font-semibold text-green-400 mb-3'>
              {t('about.cards.contact.title')}
            </h3>
            <p className='text-gray-300 text-sm mb-1'>{t('about.cards.contact.phone')}</p>
            <p className='text-gray-300 text-sm'>{t('about.cards.contact.email')}</p>
          </motion.div>
        </motion.div>

        {/* Personal advantages list */}
        <motion.div className='max-w-4xl mx-auto mb-12 px-4' variants={staggerContainer}>
          <motion.h3
            className='text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'
            variants={fadeInUp}
          >
            {t('about.advantages.title')}
          </motion.h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4'>
            {Object.entries(advantages).map(([key, value]) => (
              <motion.div
                key={key}
                className='flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30'
                variants={fadeInUp}
              >
                <div className='w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0'></div>
                <p className='text-gray-300 leading-relaxed'>{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
})

AboutSection.displayName = 'AboutSection'

export default AboutSection
