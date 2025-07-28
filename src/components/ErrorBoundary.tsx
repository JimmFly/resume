import { Component, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import type { ErrorBoundaryState, ErrorInfo } from '../types'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

/**
 * Error boundary component - Catch JavaScript errors in child components
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state to show fallback UI on next render
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error information
    console.error('ErrorBoundary caught an error:', error, errorInfo)

    // Update state
    this.setState({
      error,
      errorInfo,
    })

    // Call error callback
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined })
  }

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
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
              <div className='text-6xl mb-4'>⚠️</div>
              <h1 className='text-2xl font-bold text-primary mb-2'>Something went wrong</h1>
              <p className='text-secondary'>
                The page encountered an unexpected error, please try refreshing
              </p>
            </motion.div>

            <motion.div
              className='space-y-4'
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={this.handleRetry}
                className='bg-primary text-background px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200'
              >
                Retry
              </button>

              <button
                onClick={() => window.location.reload()}
                className='block w-full text-secondary hover:text-primary transition-colors duration-200'
              >
                Refresh Page
              </button>
            </motion.div>

            {/* Show error details in development environment */}
            {import.meta.env.DEV && this.state.error && (
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
                      {this.state.error.message}
                    </pre>
                  </div>
                  <div>
                    <strong>Error Stack:</strong>
                    <pre className='mt-1 p-2 bg-background/50 rounded text-xs overflow-auto max-h-32'>
                      {this.state.error.stack}
                    </pre>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <strong>Component Stack:</strong>
                      <pre className='mt-1 p-2 bg-background/50 rounded text-xs overflow-auto max-h-32'>
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </motion.details>
            )}
          </div>
        </motion.div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
