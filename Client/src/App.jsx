import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation,} from 'react-router-dom';
import './App.css';
import './index.css';

import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Certification from './components/certificate/Certificate';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import AllProjectsPage from './components/project/AllProject';
import AllSkillsPage from './components/skills/AllSkills';

function PortfolioPage() {
  const location = useLocation();

  useEffect(() => {
    const id = location.pathname === '/' ? 'home' : location.pathname.slice(1);
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [location.pathname]);

  return (
    <main>
      <section id="home" className="page-section">
        <Hero />
      </section>

      <section id="about" className="page-section">
        <About />
      </section>

      <section id="skills" className="page-section">
        <Skills />
      </section>

      <section id="projects" className="page-section">
        <Project />
      </section>

      <section id="education" className="page-section">
        <Education />
      </section>

      <section id="experience" className="page-section">
        <Experience />
      </section>

      <section id="certificates" className="page-section">
        <Certification />
      </section>

      <section id="contact" className="page-section">
        <Contact />
      </section>
    </main>
  );
}

function AppContent() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route
          path="/all-projects"
          element={<AllProjectsPage />}
        />

        <Route
          path="/all-skills"
          element={<AllSkillsPage />}
        />

        <Route
          path="*"
          element={<PortfolioPage />}
        />
      </Routes>
      
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
