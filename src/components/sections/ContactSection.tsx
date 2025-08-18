import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useParallax, useInView } from '../../hooks/useParallax'
import { PARALLAX_CONFIG } from '../../constants'

const ContactSection = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const parallaxY = useParallax(PARALLAX_CONFIG.elements.subtle)
  const [sectionRef, inView] = useInView(PARALLAX_CONFIG.thresholds.inView)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Build email content
    const subject = encodeURIComponent(`${t('contact.form.emailSubject')} ${formData.name}`)
    const body = encodeURIComponent(
      `${t('contact.form.name')}: ${formData.name}\n` +
        `${t('contact.form.email')}: ${formData.email}\n\n` +
        `${t('contact.form.message')}:\n${formData.message}\n\n` +
        `---\n${t('contact.form.sentAt')}: ${new Date().toLocaleString()}`
    )

    // Open email client
    const mailtoLink = `mailto:yangjinfei001@gmail.com?subject=${subject}&body=${body}`
    window.open(mailtoLink, '_blank')

    // Show success status
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset submit status for user to submit again
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }

  return (
    <section
      id='contact'
      ref={sectionRef}
      className='section-container bg-accent/10 relative overflow-hidden'
    >
      {/* Background decorative elements - Parallax effect */}
      <div
        className='absolute top-20 right-20 w-36 h-36 bg-cyan-500/8 rounded-full blur-2xl'
        style={{ transform: `translateY(${Number(parallaxY || 0) * 0.4}px)` }}
      />
      <div
        className='absolute bottom-20 left-20 w-28 h-28 bg-blue-500/8 rounded-full blur-2xl'
        style={{ transform: `translateY(${Number(parallaxY || 0) * 0.6}px)` }}
      />
      <div
        className='absolute top-1/3 left-1/3 w-20 h-20 bg-purple-500/10 rounded-full blur-xl'
        style={{ transform: `translateY(${Number(parallaxY || 0) * 0.3}px)` }}
      />
      <div className='relative z-10'>
        <motion.h2
          className='text-4xl md:text-5xl font-black mb-12 text-center heading-modern'
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <span className='heading-gradient'>
            {t('contact.title')}
          </span>
        </motion.h2>
        <motion.p
          className='text-gray-300 text-center mb-16 max-w-2xl mx-auto text-xl text-modern'
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t('contact.subtitle')}
        </motion.p>

        <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Enhanced contact information */}
          <motion.div
            className='group relative'
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <div className='absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative card-modern'>
              <h3 className='text-2xl font-bold mb-8 text-cyan-400 heading-modern'>{t('contact.info')}</h3>

              <div className='space-y-6 mb-10'>
                <div className='flex items-center group/item hover:scale-105 transition-transform duration-300'>
                  <div className='w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-6 group-hover/item:shadow-glow transition-all duration-300'>
                    <svg
                      className='w-7 h-7 text-cyan-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='text-gray-400 text-base font-medium'>{t('contact.email')}</p>
                    <a
                      href='mailto:yangjinfei001@gmail.com'
                      className='text-text hover:text-cyan-400 transition-colors text-lg font-semibold'
                    >
                      yangjinfei001@gmail.com
                    </a>
                  </div>
                </div>

                <div className='flex items-center group/item hover:scale-105 transition-transform duration-300'>
                  <div className='w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mr-6 group-hover/item:shadow-glow transition-all duration-300'>
                    <svg
                      className='w-7 h-7 text-purple-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='text-gray-400 text-base font-medium'>{t('contact.phone')}</p>
                    <a
                      href='tel:+8613008857268'
                      className='text-text hover:text-purple-400 transition-colors text-lg font-semibold'
                    >
                      13008857268
                    </a>
                  </div>
                </div>

                <div className='flex items-center group/item hover:scale-105 transition-transform duration-300'>
                  <div className='w-14 h-14 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center mr-6 group-hover/item:shadow-glow transition-all duration-300'>
                    <svg
                      className='w-7 h-7 text-emerald-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <p className='text-gray-400 text-base font-medium'>{t('contact.location')}</p>
                    <p className='text-text text-lg font-semibold'>{t('contact.locationValue')}</p>
                  </div>
                </div>
              </div>

              <h3 className='text-2xl font-bold mb-6 text-emerald-400 heading-modern'>{t('contact.social')}</h3>
              <div className='flex space-x-4'>
                <a
                  href='https://github.com/JimmFly'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-14 h-14 rounded-2xl bg-gradient-to-r from-gray-700/50 to-gray-600/50 flex items-center justify-center text-gray-300 hover:text-white hover:shadow-glow transition-all duration-300 hover:scale-110'
                >
                  <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 24 24'>
                    <path
                      fillRule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a
                  href='https://x.com/Jimm_Fly'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600/50 to-blue-500/50 flex items-center justify-center text-blue-300 hover:text-white hover:shadow-glow transition-all duration-300 hover:scale-110'
                >
                  <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Enhanced contact form */}
          <motion.div
            className='group relative'
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className='absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
            <div className='relative card-modern'>
              <h3 className='text-2xl font-bold mb-8 text-purple-400 heading-modern'>{t('contact.form.title')}</h3>

              {isSubmitted ? (
                <motion.div
                  className='text-center p-8'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='w-20 h-20 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-3xl flex items-center justify-center mx-auto mb-6'>
                    <svg
                      className='w-10 h-10 text-emerald-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h4 className='text-2xl font-bold text-emerald-400 mb-4 heading-modern'>
                    {t('contact.form.success')}
                  </h4>
                  <p className='text-gray-300 text-lg'>{t('contact.form.successMessage')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='group'>
                    <label htmlFor='name' className='block text-gray-300 text-lg font-semibold mb-3'>
                      {t('contact.form.name')}
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-6 py-4 rounded-2xl bg-gray-800/50 border-2 border-gray-700/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-text text-lg transition-all duration-300 group-hover:border-purple-500/50'
                      placeholder='Your Name'
                    />
                  </div>

                  <div className='group'>
                    <label htmlFor='email' className='block text-gray-300 text-lg font-semibold mb-3'>
                      {t('contact.form.email')}
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-6 py-4 rounded-2xl bg-gray-800/50 border-2 border-gray-700/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-text text-lg transition-all duration-300 group-hover:border-purple-500/50'
                      placeholder='your.email@example.com'
                    />
                  </div>

                  <div className='group'>
                    <label htmlFor='message' className='block text-gray-300 text-lg font-semibold mb-3'>
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className='w-full px-6 py-4 rounded-2xl bg-gray-800/50 border-2 border-gray-700/50 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-text text-lg resize-none transition-all duration-300 group-hover:border-purple-500/50'
                      placeholder='Your message...'
                    />
                  </div>

                  <motion.button
                    type='submit'
                    className='w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex justify-center items-center shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed'
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className='animate-spin -ml-1 mr-3 h-6 w-6 text-white'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        <svg
                          className='w-6 h-6 mr-3'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                          />
                        </svg>
                        {t('contact.form.send')}
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
