import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Hero.css';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return (
    <section className={`hero ${loaded ? 'loaded' : ''}`}>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="first-line">WE ARE</span>
          <div className="intro-box">
            <p className="intro-text">Creative Studio <strong>SPECIALIZED IN DESIGNING MODERN WEBSITES FOR STARTUPS</strong> WITH taste</p>
          </div>
          <span className="second-line">PIXEL PIRATES</span>
        </h1>
        <p className="tagline">Crafting Pixel Perfect Web Experiences</p>
        <div className="hero-buttons">
          <Link to="/hire-us">
            <Button text="Work with us" />
          </Link>
          <Link to="/#work">
            <Button text="See our work" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;