import React, { useState } from 'react';
import './Project.css';

const projects = [
  {
    id: 1,
    name: 'CRIMS',
    subtitle: 'Crime Record & Investigation Management System',
    description:
      'A web application to manage crime records, investigation details and related information through a centralized system.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/YOUR_USERNAME/CRIMS',
    demo: '',
    status: 'Project',
  },
  {
    id: 2,
    name: 'Personal Portfolio',
    subtitle: 'My Developer Portfolio',
    description:
      'A responsive portfolio website showcasing my skills, projects, education and experience, with resume downloads and a contact section.',
    techStack: ['React', 'CSS', 'Node.js', 'Express'],
    github: 'https://github.com/YOUR_USERNAME/YOUR_PORTFOLIO',
    demo: '',
    status: 'In Progress',
  },
  {
    id: 3,
    name: 'Wealth Management Data Mart',
    subtitle: 'Financial Data Engineering',
    description:
      'A data engineering project focused on organizing financial datasets, creating fact and dimension tables, and preparing data for analytics.',
    techStack: ['Python', 'PySpark', 'Databricks', 'SQL'],
    github: 'https://github.com/YOUR_USERNAME/WEALTH-DATA-MART',
    demo: '',
    status: 'Project',
  },
];

const filters = [
  'All',
  'React',
  'Node.js',
  'MongoDB',
  'Python',
  'SQL',
];

function Project() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) =>
          project.techStack.includes(activeFilter)
        );

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-subtitle">WHAT I'VE BUILT</p>
          <h2>My <span>Projects</span></h2>
          <p>
            A selection of projects where I apply my skills
            to solve practical problems.
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
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-top">
                <span className="project-number">
                  0{project.id}
                </span>
                <span className="project-status">
                  {project.status}
                </span>
              </div>

              <h3>{project.name}</h3>
              <h4>{project.subtitle}</h4>

              <p className="project-description">
                {project.description}
              </p>

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

      </div>
    </section>
  );
}

export default Project;
