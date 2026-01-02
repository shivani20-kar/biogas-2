import React from "react";
import "../BioGasComponentes/CSS/Index21.css";
import heroImg from "../BioGasComponentes/backgroundimg21.png";

const BackgroundSection = () => {
  return (
    <section className="backgroundsection-wrapper">
      {/* Animated background */}
      <div
        className="backgroundsection-animated"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      <div className="backgroundsection-overlay">
        <div className="backgroundsection-text">
          <h1>
            Thanks for Made-to-Measure,
            <br />
            Reliable & Highly Performing
            <br />
            GD Planet <span className="state-of-art">STATE OF ART </span>
            <br/>
            Turnkey Solution
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
