import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`} aria-label="Main navigation">
      <Link to="/" className="navbar-logo">Logo</Link>
      <div className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar-box">
        <ul className="navbar-links">
          <li><Link to="/#work" onClick={() => setIsMenuOpen(false)}>Work</Link></li>
          <li><Link to="/#capabilities" onClick={() => setIsMenuOpen(false)}>Capabilities</Link></li>
          <li><Link to="/#process" onClick={() => setIsMenuOpen(false)}>Process</Link></li>
          <li><Link to="/#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</Link></li>
        </ul>
      </div>
      <Link to="/hire-us" className="navbar-hire" onClick={() => setIsMenuOpen(false)}>Hire Us</Link>
    </nav>
  );
}

export default Navbar;