import React from 'react';
import './Services.css';

const services = [
  {
    title: "White Label Webflow Development",
    description: "Your team's trusted Webflow Expert: on-demand support for overflow work and skill gaps.",
    icon: "fas fa-code"
  },
  {
    title: "Pay-as-you-go Webflow maintenance",
    description: "Need a slew of changes? New pages, performance tweaks, and more? No problem. I'm ready when you are.",
    icon: "fas fa-tools"
  },
  {
    title: "Figma/XD to Webflow development",
    description: "High-fidelity prototypes transformed into true-to-design Webflow websites, backed by experience, quality, and care.",
    icon: "fas fa-pencil-ruler"
  }
];

const Services = () => {
  return (
    <section className="services" id="capabilities">
      <h2>We bring projects to life</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <i className={`service-icon ${service.icon}`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;