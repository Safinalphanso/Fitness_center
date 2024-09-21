import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-img" data-aos="zoom-in-down">
        <img src="assets/about.jpg" alt="About Us" />
      </div>
      <div className="about-content" data-aos="zoom-in-up">
        <h2 className="heading">Why Choose Us?</h2>
        <p>Our diverse membership base creates a friendly and supportive atmosphere, where you can make friends and stay motivated.</p>
        <p>Unlock your potential with our expert Personal Trainers.</p>
        <p>Elevate your fitness with practice sessions.</p>
        <p>We provide supportive management, for your fitness success.</p>
        <a href="#" className="btn">Book A Free Class</a>
      </div>
    </section>
  );
};

export default About;
