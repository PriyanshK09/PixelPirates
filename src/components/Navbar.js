import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-logo">Logo</div>
      <div className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-box">
        <ul className="navbar-links">
          <li><a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a></li>
          <li><a href="#capabilities" onClick={() => setIsMenuOpen(false)}>Capabilities</a></li>
          <li><a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a></li>
          <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
        </ul>
      </div>
      <a href="#hire-me" className="navbar-hire" onClick={() => setIsMenuOpen(false)}>Hire Us</a>
    </nav>
  );
}

export default Navbar;