import React, { useState } from 'react';
import './HireUs.css';

const HireUs = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    projectSize: '',
    timeline: '',
    budget: '',
    description: '',
    name: '',
    email: '',
    phone: ''
  });

  const [estimate, setEstimate] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock estimate calculation
    const baseRate = 50000; // in INR
    const projectTypeMultiplier = formData.projectType === 'ecommerce' ? 1.5 : 1;
    const projectSizeMultiplier = formData.projectSize === 'large' ? 2 : formData.projectSize === 'medium' ? 1.5 : 1;
    const timelineMultiplier = formData.timeline === 'urgent' ? 1.5 : 1;

    const mockEstimate = Math.round(baseRate * projectTypeMultiplier * projectSizeMultiplier * timelineMultiplier);
    setEstimate(mockEstimate);
  };

  return (
    <div className="hire-us">
      <h1>Hire Pixel Pirates</h1>
      <p className="subtitle">Let's create something extraordinary together</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectType">Project Type</label>
          <select name="projectType" id="projectType" required onChange={handleInputChange}>
            <option value="">Select project type</option>
            <option value="website">Website</option>
            <option value="webapp">Web Application</option>
            <option value="ecommerce">E-commerce</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="projectSize">Project Size</label>
          <select name="projectSize" id="projectSize" required onChange={handleInputChange}>
            <option value="">Select project size</option>
            <option value="small">Small (5-10 pages)</option>
            <option value="medium">Medium (10-20 pages)</option>
            <option value="large">Large (20+ pages)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="timeline">Timeline</label>
          <select name="timeline" id="timeline" required onChange={handleInputChange}>
            <option value="">Select timeline</option>
            <option value="standard">Standard</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget Range (INR)</label>
          <select name="budget" id="budget" required onChange={handleInputChange}>
            <option value="">Select budget range</option>
            <option value="low">₹50,000 - ₹2,00,000</option>
            <option value="medium">₹2,00,000 - ₹5,00,000</option>
            <option value="high">₹5,00,000+</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Project Description</label>
          <textarea name="description" id="description" rows="4" onChange={handleInputChange}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" id="name" required onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" onChange={handleInputChange} />
        </div>

        <button type="submit" className="submit-btn">Get Estimate</button>
      </form>

      {estimate && (
        <div className="estimate">
          <h2>Estimated Project Cost</h2>
          <p>₹{estimate.toLocaleString('en-IN')}</p>
          <p>This is a rough estimate based on the information provided. Our team will contact you with a more accurate quote after reviewing your project details.</p>
        </div>
      )}
    </div>
  );
};

export default HireUs;