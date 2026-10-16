
import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML & CSS', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'React.js', level: 70 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'Express.js', level: 65 },
      { name: 'MongoDB', level: 60 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 75 },
      { name: 'C++', level: 75 },
      { name: 'SQL', level: 65 },
    ],
  },
];

function Skills() {
  const skillsRef = useRef(null);
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

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
          <h2>My <span>Skills</span></h2>
          <p className="skills-description">
            Technologies and tools I'm learning and using
            to build practical projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.title}>
              <div className="skill-card-heading">
                <span className="category-icon">
                  {category.icon}
                </span>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-info">
                      <span>{skill.name}</span>

                      <span
                        className="skill-tooltip"
                        role="tooltip"
                      >
                        {skill.level}% proficiency
                      </span>
                    </div>

                    <div
                      className="skill-bar"
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuemin="0"
                      aria-valuemax="100"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
