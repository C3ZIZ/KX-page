import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import KnowledgeAcademy from './pages/KnowledgeAcademy/KnowledgeAcademy'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import Riciety from './pages/Products/Riciety/Riciety'
import Products from './pages/Products/Products'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academy" element={<KnowledgeAcademy />} />
        {/* Optional placeholders for Navbar links during testing */}
        <Route path="/about" element={<div className="text-white p-6">About page (placeholder)</div>} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/riciety" element={<Riciety />} />
        <Route path="/impact" element={<div className="text-white p-6">Impact page (placeholder)</div>} />
      </Routes>
    </>
  )
}

export default App
