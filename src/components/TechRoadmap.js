import React, { useState, useEffect, useMemo } from 'react';
import './TechRoadmap.css';

const TechRoadmap = () => {
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  
  const roadmapData = useMemo(() => [
    {
      year: 2023,
      technologies: [
        { name: "HTML", description: "Markup language for creating web pages" },
        { name: "CSS", description: "Styling language for web pages" },
        { name: "JavaScript", description: "Programming language for web development" },
        { name: "Git", description: "Version control system for tracking changes in code" }
      ]
    },
    {
      year: 2024,
      technologies: [
        { name: "React", description: "JavaScript library for building user interfaces" },
        { name: "Node.js", description: "JavaScript runtime environment" },
        { name: "Express.js", description: "Web application framework for Node.js" },
        { name: "MongoDB", description: "NoSQL database for modern applications" }
      ]
    }
  ], []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveYear(prevYear => {
        const years = roadmapData.map(item => item.year);
        const currentIndex = years.indexOf(prevYear);
        return years[(currentIndex + 1) % years.length];
      });
    }, 5000);
  
    return () => clearInterval(interval);
  }, [roadmapData]);

  return (
    <div className="tech-roadmap">
      <h2>Our Technology Stack Roadmap</h2>
      <div className="roadmap-container">
        {roadmapData.map((yearData) => (
          <div 
            key={yearData.year} 
            className={`year-column ${yearData.year === activeYear ? 'active' : ''}`}
          >
            <h3>{yearData.year}</h3>
            <div className="tech-list">
              {yearData.technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <h4>{tech.name}</h4>
                  <p>{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechRoadmap;