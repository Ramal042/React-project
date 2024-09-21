import React from 'react';
import './Hero.css';

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Grow your subscription business</h1>
        <p>
          Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.
        </p>
        <div className='div1'>
        <button className="get-started-btn">Get Started</button>
        <div className="arrow-down">&#x2193;</div>
        </div>
      </div>
      <div className="hero-image">
        <img src="./Hero 3D.png" alt="Hero Illustration" />
      </div>
    </section>
  );
};
