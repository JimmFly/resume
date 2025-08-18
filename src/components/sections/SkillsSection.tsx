import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { SKILLS_DATA, ANIMATION_CONFIG, PARALLAX_CONFIG } from '../../constants'
import { useAnimation } from '../../hooks/useAnimation'
import { useParallax, useInView } from '../../hooks/useParallax'
import type { SkillBarProps } from '../../types'

const SkillsSection: React.FC = React.memo(() => {
  const { t } = useTranslation()
  const { fadeInUp, staggerContainer, viewport } = useAnimation()
  const parallaxY = useParallax(PARALLAX_CONFIG.elements.normal)
  const [sectionRef, inView] = useInView(PARALLAX_CONFIG.thresholds.inView)

  const skillCategories = useMemo(
    () => ({
      frontend: SKILLS_DATA.filter(skill => skill.category === 'frontend'),
      backend: SKILLS_DATA.filter(skill => skill.category === 'backend'),
      tools: SKILLS_DATA.filter(skill => skill.category === 'tools'),
    }),
    []
  )

  return (
    <section
      id='skills'
      ref={sectionRef}
      className='section-container bg-accent/10 relative overflow-hidden'
    >
      {/* Background decorative elements - Parallax effect */}
      <div
        className='absolute top-20 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl'
        style={{ transform: `translateY(${Number(parallaxY || 0) * 0.4}px)` }}
      />
      <div
        className='absolute bottom-20 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl'
        style={{ transform: `translateY(${Number(parallaxY || 0) * 0.6}px)` }}
      />
      <div className='max-w-4xl mx-auto relative z-10'>
        <motion.h2
          className='text-4xl md:text-5xl font-black mb-16 text-center heading-modern'
          variants={fadeInUp}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          viewport={viewport}
        >
          <span className='heading-gradient'>{t('skills.title')}</span>
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Frontend skills */}
          <motion.div
            className='group relative'
            variants={fadeInUp}
            initial='hidden'
            whileInView='show'
            viewport={viewport}
          >
            <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative card-modern'>
              <h3 className='text-2xl font-bold mb-8 text-cyan-400 heading-modern'>
                {t('skills.frontend')}
              </h3>
              <motion.div
                className='space-y-5'
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={viewport}
              >
                {skillCategories.frontend.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Backend skills */}
          <motion.div
            className='group relative'
            variants={fadeInUp}
            initial='hidden'
            whileInView='show'
            viewport={viewport}
            transition={{ delay: ANIMATION_CONFIG.delay.medium }}
          >
            <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative card-modern'>
              <h3 className='text-2xl font-bold mb-8 text-purple-400 heading-modern'>
                {t('skills.backend')}
              </h3>
              <motion.div
                className='space-y-5'
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={viewport}
              >
                {skillCategories.backend.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Tools and others */}
          <motion.div
            className='group relative md:col-span-2 lg:col-span-1'
            variants={fadeInUp}
            initial='hidden'
            whileInView='show'
            viewport={viewport}
            transition={{ delay: ANIMATION_CONFIG.delay.long }}
          >
            <div className='absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative card-modern'>
              <h3 className='text-2xl font-bold mb-8 text-emerald-400 heading-modern'>
                {t('skills.tools')}
              </h3>
              <motion.div
                className='space-y-5'
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={viewport}
              >
                {skillCategories.tools.map(skill => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

const SkillBar: React.FC<SkillBarProps> = React.memo(({ skill }) => {
  const { t } = useTranslation()
  const { fadeInUp } = useAnimation()

  return (
    <motion.div variants={fadeInUp} className='group'>
      <div className='flex justify-between mb-3'>
        <span className='text-text font-semibold text-lg'>
          {t(`skills.names.${skill.name}`, skill.name)}
        </span>
        <span className='text-primary font-bold text-lg'>{skill.level}%</span>
      </div>
      <div className='relative w-full bg-gray-800/50 rounded-full h-3 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-gray-700/50 to-gray-600/50 rounded-full'></div>
        <motion.div
          className='relative h-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-lg'
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{
            duration: ANIMATION_CONFIG.duration.globe,
            delay: ANIMATION_CONFIG.delay.medium,
            ease: 'easeOut',
          }}
        />
        <motion.div
          className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full'
          initial={{ x: '-100%' }}
          whileInView={{ x: '100%' }}
          transition={{
            duration: 1.5,
            delay: ANIMATION_CONFIG.delay.long,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.div>
  )
})

export default SkillsSection
