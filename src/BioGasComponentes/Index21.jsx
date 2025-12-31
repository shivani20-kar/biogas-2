import React from "react";
import "../BioGasComponentes/CSS/Index21.css";
import heroImg from "../BioGasComponentes/backgroundimg21.png";

const BackgroundSection = () => {
  return (
    <section
      className="backgroundsection-wrapper"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="backgroundsection-overlay">
        <div className="backgroundsection-text">
          <h1>
            Thanks for Made-to-Measure,
            <br />
            Reliable & Highly Performing
            <br />
            GD Planet Turnkey Solution 
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
