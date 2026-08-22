import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
