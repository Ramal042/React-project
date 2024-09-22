import React, { useState } from 'react';
import './Card.css'

const PricingCards = () => {
    const [activeCard, setActiveCard] = useState(null);

    const handleCardClick = (card) => {
        setActiveCard(card);
    };

    return (
        <>
        <div className="div-cards">
            <div
                onClick={() => handleCardClick('starter')}
                className={`card ${activeCard === 'starter' ? 'active'  : ''}`}
            >
                <p>Starter</p>
                <h1>Free</h1>
                <p>1 Website</p>
                <p>5 GB Hosting</p>
                <p>Limited Support</p>
                <button>Get Started</button>
            </div>
            <div
                onClick={() => handleCardClick('premium')}
                className={`card ${activeCard === 'premium' ? 'active' : ''}`}
            >
                <p>Premium</p>
                <h1>$29/month</h1>
                <p>10 Websites</p>
                <p>15 GB Hosting</p>
                <p>Premium Support</p>
                <button>Get Started</button>
            </div>
            <div
                onClick={() => handleCardClick('enterprise')}
                className={`card ${activeCard === 'enterprise' ? 'active' : ''}`}
                >
                <p>Enterprise</p>
                <h1>$49/month</h1>
                <p>Unlimited Websites</p>
                <p>50 GB Hosting</p>
                <p>Premium Support</p>
                <button>Get Started</button>
            </div>
        </div>
                </>
    );
};

export default PricingCards;
