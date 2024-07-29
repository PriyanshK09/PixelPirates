import React from 'react';
import './Portfolio.css';

const portfolioItems = [
  { id: 1, image: '/path/to/image1.jpg', title: 'Project 1', description: 'Description of Project 1' },
  { id: 2, image: '/path/to/image2.jpg', title: 'Project 2', description: 'Description of Project 2' },
  { id: 3, image: '/path/to/image3.jpg', title: 'Project 3', description: 'Description of Project 3' },
  { id: 4, image: '/path/to/image4.jpg', title: 'Project 4', description: 'Description of Project 4' },
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="work">
      <h2>A taste of what We can do for you</h2>
      <div className="portfolio-gallery">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.image} alt={item.title} />
            <div className="portfolio-item-overlay">
              <div className="portfolio-item-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;