import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT_CONTENT, PARALLAX_CONFIG } from '../../constants'
import { useAnimation } from '../../hooks/useAnimation'
import { useParallax, useInView } from '../../hooks/useParallax'

const AboutSection = React.memo(() => {
  const { fadeInUp, staggerContainer, viewport } = useAnimation()
  const parallaxY = useParallax(PARALLAX_CONFIG.elements.subtle)
  const [sectionRef, inView] = useInView(PARALLAX_CONFIG.thresholds.inView)
  return (
    <section id='about' ref={sectionRef} className='section-container relative overflow-hidden'>
      {/* 背景装饰元素 - 视差效果 */}
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
            {ABOUT_CONTENT.title}
          </span>
        </motion.h2>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div variants={fadeInUp}>
            {ABOUT_CONTENT.description.map((paragraph, index) => (
              <p key={index} className='text-gray-400 mb-6 leading-relaxed last:mb-0'>
                {paragraph}
              </p>
            ))}
          </motion.div>
          <motion.div className='space-y-4' variants={staggerContainer}>
            {ABOUT_CONTENT.cards.map((card, index) => (
              <motion.div
                key={index}
                className='bg-gray-800/50 p-4 rounded-lg border border-gray-700'
                variants={fadeInUp}
              >
                <h4 className='text-cyan-400 font-semibold mb-2'>{card.title}</h4>
                {card.items.map((item, itemIndex) => (
                  <p
                    key={itemIndex}
                    className={`text-sm ${itemIndex === 0 ? 'text-gray-300' : 'text-gray-400'}`}
                  >
                    {item}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
})

AboutSection.displayName = 'AboutSection'

export default AboutSection
