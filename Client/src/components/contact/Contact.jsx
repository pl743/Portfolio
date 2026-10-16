
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('');
    setIsSubmitting(true);

    try {
      const response = await fetch(
        'http://localhost:8000/api/contact',
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
        throw new Error(result.message || 'Message could not be sent');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      console.error('Contact submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="section-subtitle">GET IN TOUCH</p>
          <h2>Contact <span>Me</span></h2>
          <p>Have a project or opportunity in mind? Send me a message.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            maxLength={100}
            autoComplete="name"
            required
          />

          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            maxLength={254}
            autoComplete="email"
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Write your message..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            maxLength={2000}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="contact-success" role="status">
              Message sent successfully!
            </p>
          )}

          {status === 'error' && (
            <p className="contact-error" role="alert">
              Message could not be sent. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
