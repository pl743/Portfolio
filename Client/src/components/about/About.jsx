import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import pic from '../../assets/my_pic.jpeg'

function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`about ${isVisible ? 'about-visible' : ''}`}
      id="about"
      ref={aboutRef}
    >
      <div className="about-container">

        <div className="about-heading">
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">

          <div className="about-image">
            <img
              src={pic}
              alt="Profile of Parth Lavti"
            />
          </div>

          <div className="about-text">
            <h3>Hi, I'm Parth Lavti </h3>

            <h4>
              Computer Science Student & Aspiring Software Developer
            </h4>

            <p>
              I'm a B.Tech Computer Science student passionate
              about software development, web technologies, and
              problem-solving. I enjoy building practical
              applications and turning ideas into working projects.
            </p>

            <p>
              Currently, I'm developing my skills in the MERN
              stack and Data Structures & Algorithms while
              exploring technologies that help me build useful
              and user-friendly applications.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">
                  Jaipur, Rajasthan, India
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Current Status</span>
                <span className="detail-value">
                  B.Tech Student
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Focus</span>
                <span className="detail-value">
                  MERN Stack Development
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
