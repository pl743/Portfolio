import React, { useEffect, useRef, useState } from 'react';
import './Certificate.css';
import DBMS_cert from '../../assets/DBMS_cert.png';
import Redhat_cert from '../../assets/Redhat_cert.png';

const certificates = [
  {
    id: 1,
    title: 'Database Management Systems (DBMS) - Part 1',
    platform: 'Infosys Springboard',
    date: 'Nov 2025',
    image: DBMS_cert,
    certificateUrl: 'https://drive.google.com/file/d/1Hmi_NxCDC74nLeuU7fhrWdK78ObmVWQo/view',
    skills: ['DBMS', 'MySQL', 'Normalization', 'Relational Database'],
  },
  {
    id: 2,
    title: 'Red Hat System Administration I (RH124 - RHA) - Ver. 10',
    platform: 'Red Hat',
    date: 'Apr 2026',
    image: Redhat_cert,
    certificateUrl: 'https://www.credly.com/badges/ef00d565-4899-4424-8c7c-c078e6ba7a00/public_url',
    skills: ['Linux', 'Red Hat Linux'],
  },
];

const achievements = [
  {
    id: 1,
    title: 'Hackathon Participation',
    organization: 'LNMHACKS',
    year: '2026',
    description:
      'Participated in a hackathon and collaborated on a Web3-based project.',
    type: 'Hackathon',
  },
  {
    id: 2,
    title: 'Relay Coding Challenge',
    organization: 'HACKJKLU v5.0',
    year: '2026',
    description:
      'Secured 2nd place at BIT-BY-BIT. The Relay Coding Challenge during HackJKLU v5.0!',
    type: 'Achievement',
  },
];

function Certification() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`certification ${
        isVisible ? 'certification-visible' : ''
      }`}
      id="certification"
      ref={sectionRef}
    >
      <div className="certification-container">

        <div className="certification-heading">
          <p className="section-subtitle">PROOF OF LEARNING</p>
          <h2>Certifications & <span>Achievements</span></h2>
          <p>
            Certifications, learning milestones and experiences
            that reflect my growth.
          </p>
        </div>

        <div className="certification-section-title">
          <h3>My Certifications</h3>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article
              className="certificate-card"
              key={certificate.id}
            >
              <div className="certificate-image">
                {certificate.image ? (
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="certificate-placeholder">
                    <span>🏅</span>
                    <p>Certificate Preview</p>
                  </div>
                )}
              </div>

              <div className="certificate-content">
                <span className="certificate-platform">
                  {certificate.platform}
                </span>

                <h4>{certificate.title}</h4>
                <p className="certificate-date">
                  Issued: {certificate.date}
                </p>

                <div className="certificate-skills">
                  {certificate.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                {certificate.certificateUrl ? (
                  <a
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    View Certificate ↗
                  </a>
                ) : (
                  <span className="certificate-pending">
                    Certificate link not added
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="certification-section-title achievements-title">
          <h3>Achievements & Participation</h3>
        </div>

        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <article
              className="achievement-card"
              key={achievement.id}
            >
              <div className="achievement-icon">
                {achievement.type === 'Hackathon' ? '🚀' : '🏆'}
              </div>

              <span className="achievement-type">
                {achievement.type}
              </span>

              <h4>{achievement.title}</h4>
              <p className="achievement-organization">
                {achievement.organization} · {achievement.year}
              </p>
              <p className="achievement-description">
                {achievement.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certification;
