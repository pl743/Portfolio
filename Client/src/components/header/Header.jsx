import { NavLink } from 'react-router-dom'
import logo from '../../assets/p-logo.avif'
import './Header.css'

function Header({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand-logo">
        <img src={logo} className="logo" alt="Logo" />
        <b>Parth.folio</b>
      </NavLink>

      <ul className="navbar-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Project</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        <li><NavLink to="/certificates">Certificates</NavLink></li>
        <li><NavLink className="connect-link" to="/contact">Let's Connect</NavLink></li>
      </ul>

      <button type="button" className="toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
      {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}

export default Header
