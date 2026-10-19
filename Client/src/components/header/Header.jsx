import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/p-logo.webp';
import './Header.css';

function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Education', path: '/education' },
    { label: 'Experience', path: '/experience' },
    { label: 'Certificates', path: '/certificates' },
  ];

  const connectLink = (
    <NavLink
      to="/contact"
      className="connect-link"
      onClick={closeMenu}
    >
      Let's Connect <span>↗</span>
    </NavLink>
  );

  return (
    <nav className="navbar">
      
      <NavLink to="/" className="brand-logo" onClick={closeMenu}>
        <img src={logo} className="logo" alt="Parth.folio logo" />
        <b>Parth.folio</b>
      </NavLink>

      <div
        id="mobile-navigation"
        className={`navbar-menu ${menuOpen ? 'menu-open' : ''}`}
      >
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          <li className="mobile-connect">
            {connectLink}
          </li>
        </ul>
      </div>

      <div className="desktop-connect">
        {connectLink}
      </div>

      <div className="navbar-actions">
        <button
          type="button"
          className="toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
