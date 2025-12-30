import React from "react";
import "./Css/HeroSection2page.css";
import worldMap from "./IMAGES/Map Image.png";

const HeroSectionSecondPage = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <h1>
            GD Biogas is an advanced biofuels and<br/> allied products manufacturing
            company.
          </h1>

          <p>
            Empowering rural communities through sustainable energy,<br/>
            livelihoods, and local growth.
          </p>
        </div>

        {/* RIGHT BUTTON */}
        <div className="hero-right">
          <button className="about-btn">About Company</button>
        </div>
      </div>

      {/* WORLD MAP */}
      <div className="map-container">
        <img src={worldMap} alt="World Map" />
      </div>

      {/* STATS */}
      <div className="stats-container">
        <div className="stat">
          <h2>3300</h2>
          <span>Targeted Villages</span>
        </div>

        <div className="stat">
          <h2>1800</h2>
          <span>Potential RNG Projects</span>
        </div>

        <div className="stat">
          <h2>18 K</h2>
          <span>Employment Generation</span>
        </div>

        <div className="stat">
          <h2>50 K</h2>
          <span>Self-Employed Entrepreneurs</span>
        </div>

        <div className="stat">
          <h2>1 L</h2>
          <span>Associated Farmers</span>
        </div>

        <div className="stat">
          <h2>1.5 L</h2>
          <span>Barrel and Into Grass</span>
        </div>

        <div className="stat">
          <h2>3 L</h2>
          <span>Supporting Milking Animal</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionSecondPage;
