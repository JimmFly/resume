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
          className='text-3xl md:text-4xl font-bold mb-12 text-center font-heading'
          variants={fadeInUp}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          viewport={viewport}
        >
          <span className='bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent'>
            {t('skills.title')}
          </span>
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Frontend skills */}
          <motion.div
            className='glass-card p-6'
            variants={fadeInUp}
            initial='hidden'
            whileInView='show'
            viewport={viewport}
          >
            <h3 className='text-xl font-semibold mb-6 text-cyan-400'>{t('skills.frontend')}</h3>
            <motion.div
              className='space-y-4'
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={viewport}
            >
              {skillCategories.frontend.map(skill => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.div>

          {/* Backend skills */}
          <motion.div
            className='glass-card p-6'
            variants={fadeInUp}
            initial='hidden'
            whileInView='show'
            viewport={viewport}
            transition={{ delay: ANIMATION_CONFIG.delay.medium }}
          >
            <h3 className='text-xl font-semibold mb-6 text-cyan-400'>{t('skills.backend')}</h3>
            <motion.div
              className='space-y-4'
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={viewport}
            >
              {skillCategories.backend.map(skill => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.div>

          {/* Tools and others */}
          <motion.div
            className='glass-card p-6 md:col-span-2 lg:col-span-1'
            variants={fadeInUp}
            initial='hidden'
            whileInView='show'
            viewport={viewport}
            transition={{ delay: ANIMATION_CONFIG.delay.long }}
          >
            <h3 className='text-xl font-semibold mb-6 text-cyan-400'>{t('skills.tools')}</h3>
            <motion.div
              className='space-y-4'
              variants={staggerContainer}
              initial='hidden'
              whileInView='show'
              viewport={viewport}
            >
              {skillCategories.tools.map(skill => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

const SkillBar: React.FC<SkillBarProps> = React.memo(({ skill }) => {
  const { fadeInUp, viewport } = useAnimation()

  return (
    <motion.div variants={fadeInUp}>
      <div className='flex justify-between mb-1'>
        <span className='text-text'>{skill.name}</span>
        <span className='text-primary'>{skill.level}%</span>
      </div>
      <div className='w-full bg-background/50 rounded-full h-2.5'>
        <motion.div
          className='bg-primary h-2.5 rounded-full'
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{
            duration: ANIMATION_CONFIG.duration.globe,
            delay: ANIMATION_CONFIG.delay.medium,
          }}
          viewport={viewport}
        />
      </div>
    </motion.div>
  )
})

export default SkillsSection
