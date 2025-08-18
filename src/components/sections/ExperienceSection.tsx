import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { EXPERIENCE_DATA, PARALLAX_CONFIG } from '../../constants'
import { useAnimation } from '../../hooks/useAnimation'
import { useParallax, useInView } from '../../hooks/useParallax'

const ExperienceSection = React.memo(() => {
  const { t } = useTranslation()
  const { fadeInUp, fadeInLeft, staggerContainer, viewport } = useAnimation()
  const parallaxY = useParallax(PARALLAX_CONFIG.elements.subtle)
  const [sectionRef, inView] = useInView(PARALLAX_CONFIG.thresholds.inView)

  return (
    <section
      id='experience'
      ref={sectionRef}
      className='section-container bg-accent/5 relative overflow-hidden'
    >
      {/* Background decorative elements - Parallax effect */}
      <div
        className='absolute top-20 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl'
        style={{ transform: `translateY(${Number(parallaxY || 0) * 0.3}px)` }}
      />
      <div
        className='absolute bottom-20 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl'
        style={{ transform: `translateY(${Number(parallaxY || 0) * 0.5}px)` }}
      />

      <motion.div
        className='max-w-6xl mx-auto relative z-10'
        variants={staggerContainer}
        initial='hidden'
        animate={inView ? 'show' : 'hidden'}
        viewport={viewport}
      >
        <motion.h2
          className='text-4xl md:text-5xl font-black mb-16 text-center heading-modern'
          variants={fadeInUp}
        >
          <span className='heading-gradient'>{t('experience.title')}</span>
        </motion.h2>

        <div className='space-y-12'>
          {EXPERIENCE_DATA.map((experience, index) => (
            <motion.div
              key={experience.id}
              className='group relative'
              variants={fadeInLeft}
              transition={{ delay: index * 0.2 }}
            >
              {/* Enhanced gradient border */}
              <div className='absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>

              <div className='relative card-modern'>
                {/* Modern timeline decoration */}
                <div className='absolute left-0 top-8 bottom-8 w-1.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-glow' />
                <div className='absolute left-[-6px] top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full shadow-lg animate-pulse' />

                <div className='ml-12'>
                  {/* Enhanced company and position information */}
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6'>
                    <div className='group-hover:scale-105 transition-transform duration-300'>
                      <h3 className='text-3xl font-black text-cyan-400 mb-3 heading-modern'>
                        {t(experience.company)}
                      </h3>
                      <h4 className='text-2xl font-bold text-purple-300 mb-2 heading-modern'>
                        {t(experience.position)}
                      </h4>
                    </div>
                    <div className='text-gray-300'>
                      <div className='text-xl font-semibold text-emerald-400'>
                        {t(experience.period)}
                      </div>
                      <div className='text-lg text-gray-400'>{t(experience.location)}</div>
                    </div>
                  </div>

                  {/* Enhanced job description */}
                  <p className='text-gray-300 mb-8 leading-relaxed text-lg text-modern'>
                    {t(experience.description)}
                  </p>

                  {/* Enhanced achievements */}
                  <div className='mb-8'>
                    <h5 className='text-2xl font-bold text-purple-400 mb-6 heading-modern'>
                      {t('experience.achievements')}
                    </h5>
                    <ul className='space-y-4'>
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          className='group flex items-start text-gray-300'
                          variants={fadeInUp}
                          transition={{ delay: index * 0.2 + achievementIndex * 0.1 }}
                        >
                          <span className='text-cyan-400 mr-4 mt-1 text-xl group-hover:text-purple-400 transition-colors'>
                            ▸
                          </span>
                          <span className='text-lg leading-relaxed text-modern group-hover:text-white transition-colors'>
                            {t(achievement)}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Enhanced technology stack */}
                  <div>
                    <h5 className='text-2xl font-bold text-emerald-400 mb-6 heading-modern'>
                      {t('experience.technologies')}
                    </h5>
                    <div className='flex flex-wrap gap-3'>
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className='px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300 rounded-xl text-sm font-semibold border border-cyan-500/20 hover:border-purple-500/30 hover:scale-105 transition-all duration-300'
                          variants={fadeInUp}
                          transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
})

ExperienceSection.displayName = 'ExperienceSection'

export default ExperienceSection
