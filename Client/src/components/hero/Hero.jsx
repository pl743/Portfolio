import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

function Hero() {
  const [ResumeOptions, setResumeOptions] = useState(false);

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
                'MERN Stack Developer',
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

          
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => setResumeOptions(!ResumeOptions)}
            >
              Download Resume
            </button>

            {ResumeOptions && (
              <div className="options">
                <button
                  className="btn-secondary"
                  onClick={() =>
                    window.location.href = 'http://localhost:8000/api/resume/pdf'
                  }
                >
                  PDF
                </button>

                <button
                  className="btn-secondary"
                  onClick={() =>
                    window.location.href = 'http://localhost:8000/api/resume/docx'
                  }
                >
                  Word
                </button>
              </div>
            )}
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
