import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.module.scss'

import { LanguageProvider } from '@context/LanguageContext'
import { ThemeProvider } from '@context/ThemeContext'

import Home from '@pages/Home'
import Developer from '@pages/Developer'
import IvyMontgomery from '@pages/IvyMontgomery'
import AtletikBezelye from '@pages/AtletikBezelye'

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Developer" element={<Developer />} />
            <Route path="/IvyMontgomery" element={<IvyMontgomery />} />
            <Route path="/AtletikBezelye" element={<AtletikBezelye />} />
            <Route path="*" element={<div className="not-found"><h1>404 - Page Not Found</h1></div>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
