import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Project.css';

const projects = [
  {
    id: 1,
    name: 'SkillProof',
    subtitle: 'SkillProof - AI + Blockchain Verified Resume Platform',
    description: 'SkillProof is a Web3-powered platform that verifies user skills using AI Quiz and stores proof on blockchain, generating a professional on-chain resume.',
    techStack: ['Html', 'css', 'js', 'Node.js', 'Express', 'OpenAI API', 'Monad Testnet'],
    github: 'https://github.com/pl743/SkillProof.git',
    demo: 'https://skill-proof-pi.vercel.app/',
    status: 'Project',
  },
  {
    id: 2,
    name: 'Wealth Management Analytical Platform',
    subtitle: 'Financial Data Engineering',
    description: 'The project organizes customer and investment data, builds a data warehouse, creates business-specific data marts, and makes data accessible through REST APIs. It also includes AI-assisted financial report generation.',
    techStack: ['PySpark', 'Databricks', 'SQL', 'OpenRouter API', 'Node.js', 'Express.js', 'Postman', 'PowerBi'],
    github: 'https://github.com/pl743/Wealth-Management-Analytic-Platform.git',
    demo: '',
    status: 'Project',
  },
  {
    id: 3,
    name: 'Personal Portfolio',
    subtitle: 'My Developer Portfolio',
    description: 'A responsive portfolio website showcasing my skills, projects, education and experience, with resume downloads and a contact section.',
    techStack: ['React', 'CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/pl743/Portfolio.git',
    demo: 'parth-lavti.vercel.app',
    status: 'Project.',
  },
  {
    id: 4,
    name: 'MediMitra',
    subtitle: 'Smart Healthcare Management Platform',
    description: 'A full-stack healthcare management platform that simplifies doctor appointments, lab test bookings, and medicine availability through a Smart Care Journey, real-time stock tracking, secure health record sharing, and intelligent appointment management for a seamless patient experience.',
    techStack: ['React', 'CSS', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/pl743/MediMitra.git',
    demo: '',
    status: 'In Progress',
  },
  {
    id: 5,
    name: 'AI-Based Crop Price Forecasting',
    subtitle: 'Machine Learning & Market Advisory System',
    description: 'It is an Academic Group Project. An ML-based system that forecasts crop prices using historical market data and helps farmers make informed selling decisions. It analyzes seasonal, environmental, and demand-related factors using regression models to generate data-driven market insights.',
    techStack: ['Python', 'Machine Learning', 'Linear Regression', 'Random Forest', 'XGBoost', 'SVR' ],
    github: 'https://github.com/Keshav446/Crop-Price-Forecasting-and-Market-Advisory-System-.git',
    demo: '',
    status: 'Project',
  },
];

const filters = ['All', 'React', 'Node.js', 'MongoDB', 'Python', 'SQL'];

function Project({ showAll = false }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) =>
          project.techStack.some(
            (tech) => tech.toLowerCase() === activeFilter.toLowerCase()
          )
        );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section
      className={`projects ${showAll ? 'all-projects-page' : ''}`}
      id={showAll ? 'all-projects' : 'projects'}
    >
      <div className="projects-container">
        <div className="projects-heading">
          <p className="section-subtitle">
            {showAll ? 'EXPLORE MY WORK' : "WHAT I'VE BUILT"}
          </p>

          <h2>
            {showAll ? 'All My ' : 'My '}
            <span>Projects</span>
          </h2>

          <p>
            {showAll
              ? 'Explore all my projects, technologies, and practical implementations.'
              : 'A selection of projects where I apply my skills to solve practical problems.'}
          </p>
        </div>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`filter-btn ${
                activeFilter === filter ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-top">
                <span className="project-number">
                  {String(project.id).padStart(2, '0')}
                </span>

                <span className="project-status">{project.status}</span>
              </div>

              <h3>{project.name}</h3>
              <h4>{project.subtitle}</h4>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.techStack.map((tech) => (
                  <span className="tech-badge" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="project-link demo-unavailable">
                    Demo not available
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="no-projects">
            No projects found for this technology.
          </p>
        )}

        {!showAll && (
          <div className="view-all-projects">
            <NavLink to="/all-projects" className="view-all-btn">
              View All Projects <span aria-hidden="true">↗</span>
            </NavLink>
          </div>
        )}

        {showAll && (
          <div className="back-to-projects">
            <NavLink to="/projects" className="back-projects-btn">
              ← Back to Portfolio
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
}

export default Project;
