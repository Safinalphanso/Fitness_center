import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Home.css';


const Home = () => {
  useEffect(() => {
    const options = {
      strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss', 'Weight lifting', 'Running'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed('.multiple-text', options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="home-content" data-aos="fade-up" data-aos-duration="1500">
        <h3>Build Your</h3>
        <h1>Dream Physique</h1>
        <h3><span className="multiple-text"></span></h3>
        <p>Lorem ipsum dolor sit, bus earum, aliquam ipsa repellat iusto esse laudantium animi vitae consectetur obcaecati.</p>
        <a href="#" className="btn">Join Us</a>
      </div>
      <div className="home-img" data-aos="zoom-in" data-aos-duration="1500">
        <img src="assets/heroImage.png" alt="heroImage" />
      </div>
    </section>
  );
};

export default Home;
