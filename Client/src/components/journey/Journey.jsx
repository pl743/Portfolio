
import './Journey.css'

function Journey() {
  const journeyItems = [
    {
      type: 'Education',
      year: '2024 – Present',
      title: 'B.Tech in Computer Science & Engineering',
      organization: 'JK Lakshmipat University',
      description:
        'Learning software development, data structures, databases and modern web technologies while building practical projects.',
    },
    {
      type: 'Experience',
      year: 'Summer 2026',
      title: 'IT / AI Intern',
      organization: 'Anytime Invest',
      description:
        'Worked on financial data processing and data engineering tasks involving Databricks, PySpark, SQL and API development as part of the internship project.',
      technologies: ['Databricks', 'PySpark', 'SQL', 'Node.js', 'APIs'],
    },
    {
      type: 'Education',
      year: '2022 – 2024',
      title: 'Senior Secondary Education (Class XII)',
      organization: 'Kota Career Science Education Center',
      description:
        'Completed senior secondary education before beginning undergraduate studies.',
    },
  ]

  return (
    <section className="journey" id="journey">
      <div className="journey-container">
        <div className="journey-heading">
          <p className="section-subtitle">MY JOURNEY</p>
          <h2>
            Education & <span>Experience</span>
          </h2>
          <p>
            My academic background and professional experience.
          </p>
        </div>

        <div className="journey-timeline">
          {journeyItems.map((item, index) => (
            <article
              className="journey-item"
              key={`${item.type}-${item.year}`}
              style={{ '--item-index': index }}
            >
              <div className="journey-dot" />

              <div className="journey-card">
                <span className="journey-type">{item.type}</span>
                <p className="journey-year">{item.year}</p>

                <h3>{item.title}</h3>
                <h4>{item.organization}</h4>
                <p className="journey-description">
                  {item.description}
                </p>

                {item.technologies && (
                  <div className="journey-tech">
                    {item.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Journey
