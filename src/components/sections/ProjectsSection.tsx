import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useParallax, useInView } from '../../hooks/useParallax'
import { PARALLAX_CONFIG } from '../../constants'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
  github: string
}

const ProjectsSection = () => {
  const { t } = useTranslation()

  const projects: Project[] = [
    {
      id: 1,
      title: t('projects.affine.title'),
      description: t('projects.affine.description'),
      technologies: ['React', 'TypeScript', 'GraphQL', 'Tailwind CSS', 'shadcn-ui'],
      image: '📚', // 使用emoji代替图片
      link: 'https://affine.pro',
      github: 'https://github.com/toeverything/AFFiNE',
    },
    {
      id: 2,
      title: t('projects.adminPanel.title'),
      description: t('projects.adminPanel.description'),
      technologies: ['React', 'TypeScript', 'GraphQL', 'shadcn-ui', 'Tailwind CSS'],
      image: '⚙️', // 使用emoji代替图片
      link: '#',
      github: 'https://github.com/toeverything/AFFiNE',
    },
    {
      id: 3,
      title: t('projects.i18n.title'),
      description: t('projects.i18n.description'),
      technologies: ['React', 'TypeScript', 'i18next', 'React-i18next'],
      image: '🌍', // 使用emoji代替图片
      link: '#',
      github: 'https://github.com/toeverything/AFFiNE',
    },
  ]

  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const parallaxY = useParallax(PARALLAX_CONFIG.elements.normal)
  const [sectionRef, inView] = useInView(PARALLAX_CONFIG.thresholds.inView)

  return (
    <section id='projects' ref={sectionRef} className='section-container relative overflow-hidden'>
      {/* Background decorative elements - Parallax effect */}
      <div
        className='absolute top-16 right-16 w-40 h-40 bg-purple-500/8 rounded-full blur-2xl'
        style={{ transform: `translateY(${Number(parallaxY || 0) * 0.3}px)` }}
      />
      <div
        className='absolute bottom-16 left-16 w-32 h-32 bg-cyan-500/8 rounded-full blur-2xl'
        style={{ transform: `translateY(${Number(parallaxY || 0) * 0.5}px)` }}
      />
      <div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-blue-500/5 rounded-full blur-3xl'
        style={{
          transform: `translate(-50%, -50%) translateY(${Number(parallaxY || 0) * 0.2}px)`,
        }}
      />
      <div className='relative z-10'>
        <motion.h2
          className='text-3xl md:text-4xl font-bold mb-12 text-center font-heading'
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <span className='heading-gradient'>{t('projects.title')}</span>
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className='glass-card overflow-hidden cursor-pointer group'
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveProject(project)}
              whileHover={{ y: -5 }}
            >
              <div className='p-6'>
                <div className='mb-4 text-6xl flex justify-center'>{project.image}</div>
                <h3 className='text-xl font-semibold mb-2 text-primary group-hover:text-primary/80 transition-colors'>
                  {project.title}
                </h3>
                <p className='text-secondary mb-4 line-clamp-2'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className='px-2 py-1 bg-accent/50 rounded-full text-xs text-text'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex justify-end'>
                  <button className='text-primary text-sm hover:underline'>
                    {t('projects.viewDetails')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project details modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className='fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className='bg-accent max-w-2xl w-full rounded-lg overflow-hidden'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className='p-6'>
                <div className='flex justify-between items-center mb-4'>
                  <h3 className='text-2xl font-semibold text-primary'>{activeProject.title}</h3>
                  <button
                    onClick={() => setActiveProject(null)}
                    className='text-secondary hover:text-primary'
                  >
                    <svg
                      className='w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>

                <div className='mb-6 text-8xl flex justify-center py-8'>{activeProject.image}</div>

                <p className='text-secondary mb-6'>{activeProject.description}</p>

                <div className='mb-6'>
                  <h4 className='text-lg font-medium text-primary mb-2'>
                    {t('projects.technologies')}
                  </h4>
                  <div className='flex flex-wrap gap-2'>
                    {activeProject.technologies.map(tech => (
                      <span
                        key={tech}
                        className='px-3 py-1 bg-background/30 rounded-full text-sm text-text'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='flex gap-4'>
                  <a
                    href={activeProject.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-primary text-background font-medium rounded-md hover:bg-primary/90 transition-colors'
                  >
                    {t('projects.viewProject')}
                  </a>
                  <a
                    href={activeProject.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors'
                  >
                    {t('projects.viewCode')}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsSection
