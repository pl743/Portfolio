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
              href="https://www.linkedin.com/in/parthlavti20/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              LinkedIn <span>↗</span>
            </a>

            <a
              href="https://github.com/pl743"
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

        
       
        
        <div className="tech-visual">
          <div className="tech-orbit orbit-one"></div>
          <div className="tech-orbit orbit-two"></div>

          <div className="tech-core">
            <span className="core-symbol">&lt;/&gt;</span>
            <span className="core-label">BUILD. CREATE. SOLVE.</span>
          </div>

          <div className="floating-tech tech-react">
            <i className="devicon dev-react">⚛</i>
            <span>React</span>
          </div>

          <div className="floating-tech tech-node">
            <i className="devicon">&lt;/&gt;</i>
            <span>Node.js</span>
          </div>

          <div className="floating-tech tech-mongo">
            <i className="devicon">◈</i>
            <span>MongoDB</span>
          </div>

          <div className="floating-tech tech-cpp">
            <i className="devicon">C++</i>
            <span>C++</span>
          </div>

          <div className="floating-tech tech-js">
            <i className="devicon">JS</i>
            <span>JavaScript</span>
          </div>

          <div className="tech-caption">
            <span className="tech-caption-dot"></span>
            Turning ideas into applications
          </div>
        </div>



      </div>
    </section>
  );
}

export default Hero;
