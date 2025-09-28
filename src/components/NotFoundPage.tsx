import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

/**
 * 404 Not Found page component
 */
const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <motion.div
      className='min-h-screen flex items-center justify-center bg-background text-text p-8'
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='max-w-md mx-auto text-center'>
        <motion.div
          className='mb-8'
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className='text-6xl mb-4'>🔍</div>
          <h1 className='text-4xl font-bold text-primary mb-2'>404</h1>
          <h2 className='text-2xl font-bold text-primary mb-4'>Page Not Found</h2>
          <p className='text-secondary'>
            The page you're looking for doesn't exist or has been moved
          </p>
        </motion.div>

        <motion.div
          className='space-y-4'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={handleGoHome}
            className='bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 w-full'
          >
            Go Home
          </button>

          <button
            onClick={handleGoBack}
            className='block w-full text-secondary hover:text-primary transition-colors duration-200'
          >
            Go Back
          </button>
        </motion.div>

        <motion.div
          className='mt-8 text-sm text-secondary'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>If you believe this is an error, please contact support.</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NotFoundPage
