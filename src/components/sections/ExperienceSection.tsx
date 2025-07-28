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
          className='text-3xl md:text-4xl font-bold mb-16 text-center font-heading'
          variants={fadeInUp}
        >
          {t('experience.title')}
        </motion.h2>

        <div className='space-y-8'>
          {EXPERIENCE_DATA.map((experience, index) => (
            <motion.div
              key={experience.id}
              className='glass-card p-8 relative'
              variants={fadeInLeft}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline decoration */}
              <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-cyan-400 rounded-full' />

              <div className='ml-8'>
                {/* Company and position information */}
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                  <div>
                    <h3 className='text-2xl font-bold text-primary mb-2'>
                      {t(experience.company)}
                    </h3>
                    <h4 className='text-xl font-semibold text-text mb-2'>
                      {t(experience.position)}
                    </h4>
                  </div>
                  <div className='text-secondary'>
                    <div className='text-lg font-medium'>{t(experience.period)}</div>
                    <div className='text-sm'>{t(experience.location)}</div>
                  </div>
                </div>

                {/* Job description */}
                <p className='text-secondary mb-6 leading-relaxed'>{t(experience.description)}</p>

                {/* Main achievements */}
                <div className='mb-6'>
                  <h5 className='text-lg font-semibold text-primary mb-3'>
                    {t('experience.achievements')}
                  </h5>
                  <ul className='space-y-2'>
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        className='flex items-start text-secondary'
                        variants={fadeInUp}
                        transition={{ delay: index * 0.2 + achievementIndex * 0.1 }}
                      >
                        <span className='text-primary mr-3 mt-1'>▸</span>
                        <span>{t(achievement)}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technology stack */}
                <div>
                  <h5 className='text-lg font-semibold text-primary mb-3'>
                    {t('experience.technologies')}
                  </h5>
                  <div className='flex flex-wrap gap-2'>
                    {experience.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20'
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
})

ExperienceSection.displayName = 'ExperienceSection'

export default ExperienceSection
