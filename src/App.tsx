import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// Import page components
import ResumePage from './components/ResumePage'
import TablePage from './components/TablePage'
import NotFoundPage from './components/NotFoundPage'

/**
 * Get the base name for React Router based on environment
 * In production (GitHub Pages), use the repository name as basename
 */
const getBasename = () => {
  if (import.meta.env.PROD && import.meta.env.VITE_BASE_URL) {
    return `/${import.meta.env.VITE_BASE_URL}`
  }
  return '/'
}

/**
 * Main App component with React Router setup
 */
function App() {
  return (
    <Router basename={getBasename()}>
      <Routes>
        <Route path='/' element={<ResumePage />} />
        <Route path='/table' element={<TablePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
