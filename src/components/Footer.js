import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-info">
          <h2 className="footer-title">Pixel Pirates</h2>
          <p>&copy; 2024 Pixel Pirates. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/PriyanshK09" target="_blank" rel="noopener noreferrer" aria-label="Github"><i className="fab fa-github"></i></a>
            <a href="https://x.com/PriyanshK09" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/mrpriyanshuniverse/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/priyanshk09/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;