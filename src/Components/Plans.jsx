import React from 'react';
import './Plans.css';

const Plans = () => {
  const plans = [
    { title: 'BASIC', price: '$100/Month', features: ['Smart workout plan', 'At home workouts'] },
    { title: 'PRO', price: '$150/Month', features: ['Pro GYMS', 'Smart workout plan', 'At home workouts'] },
    { title: 'PREMIUM', price: '$300/Month', features: ['ELITE Gyms & Classes', 'Pro GYMS', 'Smart workout plan', 'At home workouts', 'Personal Training'] }
  ];

  return (
    <section className="plans" id="plans">
      <h2 className="heading" data-aos="zoom-in-down">
        Our<span className="highlight"> Plans</span>
      </h2>
      <div className="plans-content" data-aos="zoom-in-up">
        {plans.map((plan, index) => (
          <div className="box" key={index}>
            <h3>
              {plan.title.substring(0, plan.title.length / 2)}
              <span className="highlight">{plan.title.substring(plan.title.length / 2)}</span>
            </h3>
            <h2>
              {plan.price.substring(0, plan.price.indexOf('/'))}
              <span className="highlight">{plan.price.substring(plan.price.indexOf('/'))}</span>
            </h2>
            <ul>
              {plan.features.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
            <a href="#">
              Join Now
              <i className='bx bx-right-arrow-alt'></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
  