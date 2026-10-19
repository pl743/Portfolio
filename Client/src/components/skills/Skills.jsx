import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Skills.css';

const skillCategories = [
  {
    title: 'Full Stack Development',
    subtitle: 'Building complete web applications',
    icon: '</>',
    skills: [
      { name: 'HTML & CSS', level: 80, status: 'Comfortable' },
      { name: 'JavaScript', level: 70, status: 'Intermediate' },
      { name: 'React.js', level: 70, status: 'Intermediate' },
      { name: 'Node.js', level: 60, status: 'Beginner' },
      { name: 'Express.js', level: 50, status: 'Beginner' },
    ],
  },
  {
    title: 'Data Structures & Algorithms',
    subtitle: 'Logic, efficiency and problem solving',
    icon: '⌘',
    skills: [
      { name: 'Data Structures', level: 65, status: 'Practicing' },
      { name: 'Algorithms', level: 60, status: 'Practicing' },
      { name: 'Competitive Programming', level: 70, status: 'Practicing' },
    ],
  },
  {
    title: 'Core Computer Science',
    subtitle: 'Understanding the fundamentals',
    icon: '🛡️',
    skills: [
      { name: 'Operating Systems', level: 55, status: 'Intermediate' },
      { name: 'Computer Networks', level: 55, status: 'Learning' },
      { name: 'DBMS', level: 65, status: 'Intermediate' },
    ],
  },
  {
    title: 'Databases & Tools',
    subtitle: 'Data management and development tools',
    icon: '🗄️',
    skills: [
      { name: 'SQL', level: 70, status: 'Intermediate' },
      { name: 'MongoDB', level: 60, status: 'Beginner' },
      { name: 'Git & GitHub', level: 70, status: 'Intermediate' },
    ],
  },
  {
    title: 'Programming Language',
    subtitle: 'Programming Language to solve Problems',
    icon: '🗄️',
    skills: [
      { name: 'C++', level: 80, status: 'Comfortable' },
      { name: 'Python', level: 60, status: 'Intermediate' },
    ],
  },
];

function Skills({ showAll = false }) {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const visibleCategories = showAll
    ? skillCategories
    : skillCategories.slice(0, 2);

  useEffect(() => {
    const element = skillsRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`skills ${isVisible ? 'skills-visible' : ''} ${
        showAll ? 'all-skills-page' : ''
      }`}
      id={showAll ? 'all-skills' : 'skills'}
      ref={skillsRef}
    >
      <div className="skills-container">
        <div className="skills-heading">
          <p className="section-subtitle">
            {showAll ? 'EXPLORE MY EXPERTISE' : 'WHAT I WORK WITH'}
          </p>

          <h2>
            {showAll ? 'All My ' : 'My '}
            <span>Skills</span>
          </h2>

          <p className="skills-description">
            {showAll
              ? 'Explore the technologies, computer science fundamentals and tools I am learning and using.'
              : "Technologies, computer science fundamentals and tools I'm learning and using to build practical projects."}
          </p>
        </div>

        <div className="skills-grid">
          {visibleCategories.map((category, index) => (
            <article className="skill-card" key={category.title}>
              <div className="skill-card-top">
                <span className="category-icon">{category.icon}</span>

                <span className="skill-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="skill-card-heading">
                <h3>{category.title}</h3>
                <p>{category.subtitle}</p>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-status">{skill.status}</span>
                    </div>

                    <div
                      className="skill-bar"
                      role="progressbar"
                      aria-label={`${skill.name} - ${skill.status}`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={isVisible ? skill.level : 0}
                    >
                      <div
                        className="skill-progress"
                        style={{
                          '--skill-level': `${skill.level}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {!showAll && (
          <div className="view-all-skills">
            <NavLink to="/all-skills" className="view-all-skills-btn">
              View All Skills <span aria-hidden="true">↗</span>
            </NavLink>
          </div>
        )}

        {showAll && (
          <div className="back-to-skills">
            <NavLink to="/skills" className="back-skills-btn">
              ← Back to Portfolio
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
