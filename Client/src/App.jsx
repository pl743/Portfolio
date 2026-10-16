import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'

import Header from './components/header/Header'
import About from './components/about/About'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import Project from './components/project/Project'
import Journey from './components/journey/Journey'
import Certification from './components/certificate/Certificate'
import Contact from './components/contact/Contact'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(current => current === 'dark' ? 'light' : 'dark')
  }

  return (
    <BrowserRouter>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/certificates" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <div className="not-found">
              <h2>404 - Page Not Found</h2>
              <p>The page you are looking for does not exist.</p>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
