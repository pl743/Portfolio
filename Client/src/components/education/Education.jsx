
import './Education.css';

function Education() {
  const educationItems = [
    {
      id: 1,
      type: 'Undergraduate',
      year: '2024 – Present',
      title: 'B.Tech in Computer Science & Engineering',
      organization: 'JK Lakshmipat University',
      description:
        'Learning software development, data structures, databases, and modern web technologies while building practical projects.',
    },
    {
      id: 2,
      type: 'Senior Secondary',
      year: '2022 – 2024',
      title: 'Class XII',
      organization: 'Kota Career Science Education Center',
      description:
        'Completed senior secondary education before beginning undergraduate studies.',
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">

        {/* Section Heading */}
        <div className="education-heading">
          <p className="section-subtitle">ACADEMIC BACKGROUND</p>

          <h2>
            My <span>Education</span>
          </h2>

          <p>
            My academic journey and educational milestones.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-timeline">
          {educationItems.map((item, index) => (
            <article
              className="education-item"
              key={item.id}
              style={{ '--item-index': index }}
            >
              <div className="education-dot" />

              <div className="education-card">
                <span className="education-type">
                  {item.type}
                </span>

                <p className="education-year">
                  {item.year}
                </p>

                <h3>{item.title}</h3>

                <h4>{item.organization}</h4>

                <p className="education-description">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
