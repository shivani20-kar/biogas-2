import React from "react";
import "./Css/IndustrialHome.css";
import background  from "./IMAGES/background.jpg";

const IndustrialHome = () => {
  return (
    <div className="heros">
      <img className="backgroundimage" src={background} />
      <div className="heros-section">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <a href="/">Main</a>
            </li>
            <li>
              <a href="/industries-main">Industry Solution</a>
            </li>
            <li aria-current="page">Napier Grass Based Bio-CNG Plants</li>
          </ol>
        </nav>

        {/* Hero Content */}
        <div className="hero-data">
          <h1>Napier Grass Based Bio-CNG Plants</h1>
          <p>
            Napier grass is an excellent feedstock for producing green biomethane
            (Bio-CNG/CBG), offering a sustainable solution for clean energy
            generation and rural employment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustrialHome;
