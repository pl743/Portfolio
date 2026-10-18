
import React, { useEffect, useRef, useState } from 'react';
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
      { name: 'Competetive Programming', level: 70, status: 'Practicing' },
    ],
  },
  {
    title: 'Core Computer Science',
    subtitle: 'Understanding the fundamentals',
    icon: '🛡️',
    skills: [
      { name: 'Operating Systems', level: 55, status: 'Learning' },
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
];

function Skills() {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      className={`skills ${isVisible ? 'skills-visible' : ''}`}
      id="skills"
      ref={skillsRef}
    >
      <div className="skills-container">
        <div className="skills-heading">
          <p className="section-subtitle">WHAT I WORK WITH</p>

          <h2>
            My <span>Skills</span>
          </h2>

          <p className="skills-description">
            Technologies, computer science fundamentals and tools
            I'm learning and using to build practical projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <article className="skill-card" key={category.title}>
              <div className="skill-card-top">
                <span className="category-icon">
                  {category.icon}
                </span>

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
                      <span className="skill-name">
                        {skill.name}
                      </span>

                      <span className="skill-status">
                        {skill.status}
                      </span>
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
      </div>
    </section>
  );
}

export default Skills;
