import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import './Hero.css';

function Hero() {
  const [resumeOptions, setResumeOptions] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        
        <div className="content">
          <b className="intro">HELLO, I'M</b>

          <h1 className="hero-name">
            <Typewriter
              words={['Parth Lavti']}
              loop={1}
              cursor
              cursorStyle="."
              typeSpeed={150}
            />
          </h1>

          <h2 className="hero-role">
            <Typewriter
              words={[
                'B.Tech CSE Student',
                'Aspiring Software Developer',
                'Full Stack Developer',
              ]}
              loop={0}
              cursor
              cursorStyle="."
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="hero-description">
            I enjoy building practical web applications
            and solving real-world problems through technology.
          </p>

          <div className="hero-actions">

            <div className="hero-buttons">
              <button
                type="button"
                className="btn-primary"
                onClick={() => setResumeOptions((prev) => !prev)}
                aria-expanded={resumeOptions}
              >
                Download Resume
              </button>

              {resumeOptions && (
                <div className="options">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      window.location.href =
                        'http://localhost:8000/api/resume/pdf';
                    }}
                  >
                    PDF
                  </button>

                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => {
                      window.location.href =
                        'http://localhost:8000/api/resume/docx';
                    }}
                  >
                    Word
                  </button>
                </div>
              )}
            </div>

            <NavLink to="/projects" className="btn-projects">
              Explore My Work <span>↗</span>
            </NavLink>

          </div>
          <div className="hero-socials">

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              LinkedIn <span>↗</span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub <span>↗</span>
            </a>

            <a href="mailto:parthlavti5561@gmail.com">
              <FaEnvelope />
              Email <span>↗</span>
            </a>

          </div>
        </div>

        <div className="hero-card">
          <div className="hero-avatar">
            <span>PL</span>
          </div>

          <h2>Software Developer</h2>

          <p>MERN Stack · C++ · Problem Solving</p>

          <div className="tech-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
