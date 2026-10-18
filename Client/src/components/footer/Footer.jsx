import { NavLink } from 'react-router-dom'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <NavLink to="/" className="footer-home">
        Home ↑
      </NavLink>

      <p className="copyright">
        © 2026 Parth Lavti. All rights reserved.
      </p>

      <div className="social">
        <a
          href="https://github.com/pl743"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <b><FaGithub /> Github</b>
        </a>

        <a
          href="https://www.linkedin.com/in/parthlavti20/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <b><FaLinkedin /> Linkdin</b>
        </a>
      </div>
    </footer>
  )
}

export default Footer
