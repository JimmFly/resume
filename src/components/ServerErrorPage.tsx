import { motion } from 'framer-motion'

interface ServerErrorPageProps {
  error?: Error
  onRetry?: () => void
}

/**
 * 500 Server Error page component
 */
const ServerErrorPage = ({ error, onRetry }: ServerErrorPageProps) => {
  const handleGoHome = () => {
    window.location.href = '/'
  }

  const handleRefresh = () => {
    window.location.reload()
  }

  const handleRetry = () => {
    if (onRetry) {
      onRetry()
    } else {
      handleRefresh()
    }
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
          <div className='text-6xl mb-4'>🚫</div>
          <h1 className='text-4xl font-bold text-primary mb-2'>500</h1>
          <h2 className='text-2xl font-bold text-primary mb-4'>Server Error</h2>
          <p className='text-secondary'>Something went wrong on our end. Please try again later</p>
        </motion.div>

        <motion.div
          className='space-y-4'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={handleRetry}
            className='bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 w-full'
          >
            Try Again
          </button>

          <button
            onClick={handleGoHome}
            className='block w-full text-secondary hover:text-primary transition-colors duration-200'
          >
            Go Home
          </button>

          <button
            onClick={handleRefresh}
            className='block w-full text-secondary hover:text-primary transition-colors duration-200'
          >
            Refresh Page
          </button>
        </motion.div>

        {/* Show error details in development environment */}
        {import.meta.env.DEV && error && (
          <motion.details
            className='mt-8 text-left bg-accent/20 p-4 rounded-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <summary className='cursor-pointer text-primary font-medium mb-2'>
              Error Details (Development Mode)
            </summary>
            <div className='text-sm text-secondary space-y-2'>
              <div>
                <strong>Error Message:</strong>
                <pre className='mt-1 p-2 bg-background/50 rounded text-xs overflow-auto'>
                  {error.message}
                </pre>
              </div>
              <div>
                <strong>Error Stack:</strong>
                <pre className='mt-1 p-2 bg-background/50 rounded text-xs overflow-auto max-h-32'>
                  {error.stack}
                </pre>
              </div>
            </div>
          </motion.details>
        )}
      </div>
    </motion.div>
  )
}

export default ServerErrorPage
