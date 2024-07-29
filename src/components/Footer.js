import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("/api/contact", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (response.ok) {
  //       alert("Message sent successfully!");
  //       setFormData({ name: "", email: "", message: "" });
  //     } else {
  //       alert("Failed to send message. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("An error occurred. Please try again later.");
  //   }
  // };

  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-info">
          <h2 className="footer-title">Pixel Pirates</h2>
          <p>Navigating the digital seas with cutting-edge web solutions.</p>
          <div className="contact-details">
            <p><i className="fas fa-map-marker-alt"></i> 123 Tech Harbor, Webville, 54321</p>
            <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
            <p><i className="fas fa-envelope"></i> ahoy@pixelpirates.dev</p>
          </div>
        </div>
        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-vision">
          <h3>Our Vision</h3>
          <ul>
            <li>Empowering startups with modern web solutions</li>
            <li>Creating impactful digital experiences</li>
            <li>Building long-lasting client relationships</li>
            <li>Innovating with the latest technologies</li>
            <li>Fostering a culture of creativity and excellence</li>
          </ul>
        </div>
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form name="contact" method="POST" netlify>
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} />
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} />
            <textarea name="message" placeholder="Your Message" required value={formData.message} ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://github.com/PriyanshK09" target="_blank" rel="noopener noreferrer" aria-label="Github"><i className="fab fa-github"></i></a>
          <a href="https://x.com/PriyanshK09" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/mrpriyanshuniverse/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/priyanshk09/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <p>&copy; 2024 Pixel Pirates. All rights reserved. | Web Development Experts</p>
      </div>
    </footer>
  );
}

export default Footer;
