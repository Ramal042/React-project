import React from "react";
import "./Hero2.css";

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>In-depth metrics</h1>
                <p>
                    Accurate, real-time reporting at your fingertips. <br /> Getting data has never been easier.
                </p>
                <div className="hero-buttons">
                    <a href="">Learn more</a>
                    <button className="btn-scroll-down">⬇</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="./Content Image.png" alt="Content Image" />
            </div>
        </section>
    );
}

export default Hero;
