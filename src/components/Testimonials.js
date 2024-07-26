import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechInnovate",
    quote: "Pixel Pirates delivered an exceptional website that not only met but exceeded our expectations. Their innovative approach and attention to detail truly set them apart.",
    image: "/images/john-doe.jpg"
  },
  {
    name: "Jane Smith",
    position: "Marketing Director, GrowthGenius",
    quote: "The team at Pixel Pirates is a perfect blend of professionalism, creativity, and responsiveness. Our new site has significantly boosted our online presence and user engagement.",
    image: "/images/jane-smith.jpg"
  },
  {
    name: "Sam Wilson",
    position: "Product Manager, FutureFlow",
    quote: "Working with Pixel Pirates was an absolute pleasure. They have a knack for understanding complex requirements and translating them into beautiful, functional designs.",
    image: "/images/sam-wilson.jpg"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-overlay"></div>
      <div className="testimonials-content">
        <h2>Client Success Stories</h2>
        <div className="testimonial-container">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon left" aria-hidden="true" />
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <FaQuoteRight className="quote-icon right" aria-hidden="true" />
                </div>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-image" />
                  <div className="author-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;