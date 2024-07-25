import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="testimonial">
      <div className="footer-content">
        <p>&copy; 2024 Pixel Pirates. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/PriyanshK09" aria-label="Github"><i className="fab fa-github"></i></a>
          <a href="https://x.com/PriyanshK09" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/mrpriyanshuniverse/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/priyanshk09/" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form action="#" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;