import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading" data-aos="zoom-in-down">Our <span className="highlight">Services</span></h2>
      <div className="services-content" data-aos="zoom-in-up">
        {['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss', 'Weight lifting', 'Running'].map((service, index) => (
          <div className="row" key={index}>
            <img src={`assets/image${index + 1}.jpg`} alt={service} />
            <h4>{service}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
