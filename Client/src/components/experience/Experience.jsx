
import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      type: 'Internship',
      year: 'Summer 2026',
      title: 'IT / AI Intern',
      organization: 'Anytime Invest',
      description:
        'Worked on financial data processing and data engineering tasks involving Databricks, PySpark, SQL, and API development as part of the internship project.',
      technologies: [
        'Databricks',
        'PySpark',
        'SQL',
        'Node.js',
        'REST APIs',
        'Data Mart',
      ],
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        {/* Section Heading */}
        <div className="experience-heading">
          <p className="section-subtitle">PROFESSIONAL JOURNEY</p>

          <h2>
            My <span>Experience</span>
          </h2>

          <p>
            My internship experience, technical contributions,
            and professional learning.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article
              className="experience-item"
              key={item.id}
              style={{ '--item-index': index }}
            >
              <div className="experience-dot" />

              <div className="experience-card">
                <span className="experience-type">
                  {item.type}
                </span>

                <p className="experience-year">
                  {item.year}
                </p>

                <h3>{item.title}</h3>

                <h4>{item.organization}</h4>

                <p className="experience-description">
                  {item.description}
                </p>

                <div className="experience-tech">
                  {item.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
