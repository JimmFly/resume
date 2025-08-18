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
      image: '📚', // Use emoji instead of image
      link: 'https://affine.pro',
      github: 'https://github.com/toeverything/AFFiNE',
    },
    {
      id: 2,
      title: t('projects.adminPanel.title'),
      description: t('projects.adminPanel.description'),
      technologies: ['React', 'TypeScript', 'GraphQL', 'shadcn-ui', 'Tailwind CSS'],
      image: '⚙️', // Use emoji instead of image
      link: '#',
      github: 'https://github.com/toeverything/AFFiNE',
    },
    {
      id: 3,
      title: t('projects.i18n.title'),
      description: t('projects.i18n.description'),
      technologies: ['React', 'TypeScript', 'i18next', 'React-i18next'],
      image: '🌍', // Use emoji instead of image
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
          className='text-4xl md:text-5xl font-black mb-16 text-center heading-modern'
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <span className='heading-gradient'>{t('projects.title')}</span>
        </motion.h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className='group relative cursor-pointer'
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => setActiveProject(project)}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Enhanced gradient border effect */}
              <div
                className={`absolute -inset-1 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 ${
                  index % 3 === 0
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                    : index % 3 === 1
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-600'
                }`}
              ></div>

              <div className='relative card-modern overflow-hidden'>
                {/* Icon with enhanced styling */}
                <div className='mb-6 text-7xl flex justify-center transform group-hover:scale-110 transition-transform duration-300'>
                  <div
                    className={`p-4 rounded-2xl ${
                      index % 3 === 0
                        ? 'bg-cyan-500/10'
                        : index % 3 === 1
                          ? 'bg-purple-500/10'
                          : 'bg-emerald-500/10'
                    }`}
                  >
                    {project.image}
                  </div>
                </div>

                <h3
                  className={`text-2xl font-bold mb-4 group-hover:scale-105 transition-all duration-300 heading-modern ${
                    index % 3 === 0
                      ? 'text-cyan-400'
                      : index % 3 === 1
                        ? 'text-purple-400'
                        : 'text-emerald-400'
                  }`}
                >
                  {project.title}
                </h3>

                <p className='text-gray-300 mb-6 leading-relaxed text-modern line-clamp-3'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                        index % 3 === 0
                          ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                          : index % 3 === 1
                            ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                            : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                      }`}
                      style={{
                        animationDelay: `${techIndex * 0.1}s`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex justify-end'>
                  <button
                    className={`button-modern text-sm font-semibold border-2 transition-all duration-300 ${
                      index % 3 === 0
                        ? 'border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'
                        : index % 3 === 1
                          ? 'border-purple-500/50 text-purple-400 hover:bg-purple-500/10'
                          : 'border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10'
                    }`}
                  >
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
