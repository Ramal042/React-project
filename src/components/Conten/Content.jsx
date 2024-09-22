import React, { useState } from 'react';
import './Content.css';

export default function content() {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  return (
    <div className="content-container">
      <h1>Get the right plan <br /> for future product.</h1>
      <div className="content-toggle">
        <div
          className={`content-option ${selectedPlan === 'yearly' ? 'active' : ''}`}
          onClick={() => setSelectedPlan('yearly')}
        >
          Yearly
        </div>
        <div
          className={`content-option ${selectedPlan === 'monthly' ? 'active' : ''}`}
          onClick={() => setSelectedPlan('monthly')}
        >
          Monthly
        </div>
      </div>
    </div>
  );
};
