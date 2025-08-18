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
          className='text-4xl md:text-5xl font-black mb-16 text-center heading-modern'
          variants={fadeInUp}
        >
          <span className='heading-gradient'>{t('about.title')}</span>
        </motion.h2>

        <div className='max-w-4xl mx-auto mb-16 px-4'>
          <motion.p
            className='text-lg md:text-xl text-gray-300 mb-8 leading-relaxed text-modern'
            variants={fadeInUp}
          >
            {description1}
          </motion.p>
          <motion.p
            className='text-lg md:text-xl text-gray-300 mb-8 leading-relaxed text-modern'
            variants={fadeInUp}
          >
            {description2}
          </motion.p>
          <motion.p
            className='text-lg md:text-xl text-gray-300 mb-10 leading-relaxed text-modern'
            variants={fadeInUp}
          >
            {description3}
          </motion.p>
        </div>

        {/* Enhanced personal advantages cards */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 max-w-6xl mx-auto px-4'
          variants={staggerContainer}
        >
          {/* Work experience card */}
          <motion.div
            className='card-modern group hover:scale-[1.02] transition-all duration-500'
            variants={fadeInUp}
          >
            <div className='relative'>
              <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
              <div className='relative bg-background/90 rounded-3xl p-8'>
                <h3 className='text-2xl font-bold text-cyan-400 mb-4 heading-modern'>
                  {t('about.cards.experience.title')}
                </h3>
                <p className='text-gray-300 font-semibold mb-3 text-lg'>
                  {t('about.cards.experience.company')}
                </p>
                <p className='text-gray-400'>{t('about.cards.experience.position')}</p>
              </div>
            </div>
          </motion.div>

          {/* Core projects card */}
          <motion.div
            className='card-modern group hover:scale-[1.02] transition-all duration-500'
            variants={fadeInUp}
          >
            <div className='relative'>
              <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
              <div className='relative bg-background/90 rounded-3xl p-8'>
                <h3 className='text-2xl font-bold text-purple-400 mb-4 heading-modern'>
                  {t('about.cards.projects.title')}
                </h3>
                <p className='text-gray-300 font-semibold mb-3 text-lg'>
                  {t('about.cards.projects.affine')}
                </p>
                <p className='text-gray-400'>{t('about.cards.projects.stack')}</p>
              </div>
            </div>
          </motion.div>

          {/* Contact information card */}
          <motion.div
            className='card-modern group hover:scale-[1.02] transition-all duration-500'
            variants={fadeInUp}
          >
            <div className='relative'>
              <div className='absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
              <div className='relative bg-background/90 rounded-3xl p-8'>
                <h3 className='text-2xl font-bold text-emerald-400 mb-4 heading-modern'>
                  {t('about.cards.contact.title')}
                </h3>
                <p className='text-gray-300 mb-2'>{t('about.cards.contact.phone')}</p>
                <p className='text-gray-300'>{t('about.cards.contact.email')}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced personal advantages list */}
        <motion.div className='max-w-4xl mx-auto mb-16 px-4' variants={staggerContainer}>
          <motion.h3
            className='text-3xl font-bold text-center mb-12 heading-gradient heading-modern'
            variants={fadeInUp}
          >
            {t('about.advantages.title')}
          </motion.h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
            {Object.entries(advantages).map(([key, value], index) => (
              <motion.div key={key} className='group relative' variants={fadeInUp}>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200'></div>
                <div className='relative flex items-start gap-4 p-6 glass-card hover:scale-[1.02] transition-all duration-300'>
                  <div
                    className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 animate-pulse ${
                      index % 4 === 0
                        ? 'bg-cyan-400'
                        : index % 4 === 1
                          ? 'bg-purple-400'
                          : index % 4 === 2
                            ? 'bg-pink-400'
                            : 'bg-emerald-400'
                    }`}
                  ></div>
                  <p className='text-gray-300 leading-relaxed text-lg font-medium'>{value}</p>
                </div>
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
