import React, { type ReactNode } from 'react'
import ErrorBoundary from '../components/ErrorBoundary'

/**
 * Higher-order component: Add error boundary to component
 */
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorFallback?: ReactNode
) => {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary fallback={errorFallback}>
      <Component {...props} />
    </ErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`

  return WrappedComponent
}
