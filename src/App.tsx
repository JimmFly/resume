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
  // For GitHub Pages, the base path should be the repository name
  if (import.meta.env.PROD) {
    return '/resume'
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
