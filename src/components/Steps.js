import React from 'react';
import './Steps.css';

const steps = [
  { title: "Discovery", description: "We'll discuss your project goals and requirements." },
  { title: "Planning", description: "We'll create a detailed project plan and timeline." },
  { title: "Design", description: "We'll craft a stunning design that meets your needs." },
  { title: "Development", description: "We'll bring your design to life with clean, efficient code." },
  { title: "Launch", description: "We'll thoroughly test and deploy your new website." }
];

const Steps = () => {
  return (
    <section className="steps" id="process">
      <h2>You're 5 steps away from a new website...</h2>
      <div className="steps-list">
        {steps.map((step, index) => (
          <div className="step-item" key={index}>
            <div className="step-number">{index + 1}</div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps;