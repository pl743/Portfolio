import React, { useState } from 'react';
import {FaGithub, FaLinkedin, FaEnvelope, FaFilePdf, FaFileWord, FaArrowUpRightFromSquare, FaDownload, FaPaperPlane, FaUser} from 'react-icons/fa6';
import './Contact.css';

function Contact() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status) setStatus('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${API_URL}/api/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || 'Message could not be sent'
        );
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Contact submission failed:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-info">
          <p className="contact-eyebrow">
            GET IN TOUCH
          </p>

          <h2 className="contact-title">
            Let's make something{' '}
            <span>meaningful.</span>
          </h2>

          <p className="contact-description">
            Have a project idea, an opportunity, or just want
            to talk tech? My inbox is open.
          </p>

          <a
            className="contact-email"
            href="mailto:parthlavti5561@gmail.com"
          >
            parthlavti5561@gmail.com
            <FaArrowUpRightFromSquare />
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/pl743"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
              <FaArrowUpRightFromSquare className="social-arrow" />
            </a>

            <a
              href="https://www.linkedin.com/in/parthlavti20/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
              <FaArrowUpRightFromSquare className="social-arrow" />
            </a>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-resume">
            <a
              href={`${API_URL}/api/resume/pdf`}
              className="resume-button resume-primary"
            >
              <FaFilePdf />
              <span>Download CV · PDF</span>
              <FaDownload className="resume-download-icon" />
            </a>

            <a
              href={`${API_URL}/api/resume/docx`}
              className="resume-button resume-secondary"
            >
              <FaFileWord />
              <span>Download CV · DOCX</span>
              <FaDownload className="resume-download-icon" />
            </a>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-heading">
            <div className="contact-form-heading-left">
              <span className="contact-form-icon">
                <FaEnvelope />
              </span>

              <span className="contact-form-label">
                SEND A MESSAGE
              </span>
            </div>

            <span className="required-indicator" title="Required fields">
              ✳
            </span>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <label htmlFor="contact-name">
              Your name
            </label>

            <div className="contact-input-wrapper">
              <FaUser className="contact-input-icon" />

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="What should I call you?"
                value={formData.name}
                onChange={handleChange}
                maxLength={100}
                autoComplete="name"
                required
              />
            </div>

            <label htmlFor="contact-email">
              Email address
            </label>

            <div className="contact-input-wrapper">
              <FaEnvelope className="contact-input-icon" />

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                maxLength={254}
                autoComplete="email"
                required
              />
            </div>

            <label htmlFor="contact-message">
              Your message
            </label>

            <div className="contact-input-wrapper message-wrapper">
              <FaPaperPlane className="contact-input-icon" />

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me a little about it..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                maxLength={2000}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >
              <FaPaperPlane />
              <span>
                {isSubmitting ? 'Sending...' : 'Send message'}
              </span>
              {!isSubmitting && (
                <FaArrowUpRightFromSquare />
              )}
            </button>

            {status === 'success' && (
              <p className="contact-success" role="status">
                Message sent successfully! Thanks for reaching out.
              </p>
            )}

            {status === 'error' && (
              <p className="contact-error" role="alert">
                Message could not be sent. Please check your
                connection and try again.
              </p>
            )}

            <p className="contact-form-note">
              Your message is submitted to the portfolio backend.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
