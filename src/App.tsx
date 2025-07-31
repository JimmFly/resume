import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// Import page components
import ResumePage from './components/ResumePage'
import TablePage from './components/TablePage'

/**
 * Main App component with React Router setup
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ResumePage />} />
        <Route path='/table' element={<TablePage />} />
      </Routes>
    </Router>
  )
}

export default App
