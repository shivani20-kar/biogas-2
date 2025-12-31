import React from "react";
import "./CSS/Index18.css";

import imgSatara from "../BioGasComponentes/industries-satara.png";
import imgPatan from "../BioGasComponentes/industries-patan.png";
import imgPalshi from "../BioGasComponentes/industries-palshi.png";

const Industries = () => {
  return (
    <section className="industries-wrapper">
      {/* ================= HEADER ================= */}
      <div className="industries-header">
        <div className="arrow-index">
          <svg className="arrow-svg" viewBox="0 0 120 180">
            <polygon
              points="0,0 84,0 120,90 84,180 0,180 36,90"
              fill="#f2f2f2"
              stroke="#e3262f"
              strokeWidth="4" 
            />
          </svg>
        </div>

        <div className="industries-header-text">
          <h1 className="industries-title">Industries</h1>
          <p className="industries-subtitle">GD planet plants</p>
        </div>
      </div>

      {/* ================= CARDS ================= */}
      <div className="industries-cards">
        <div className="industry-card">
          <img src={imgSatara} alt="Satara Plant" />
          <div className="industry-card-content">
            <h3>Satara</h3>
            <p>Project Capacity : 5 TPD CNG Using Napier Grass</p>
            <span className="industry-link">Learn More →</span>
          </div>
        </div>

        <div className="industry-card">
          <img src={imgPatan} alt="Patan Plant" />
          <div className="industry-card-content">
            <h3>Patan</h3>
            <p>Project Capacity : 10 TPD Biogas to CNG Using Napier Grass</p>
            <span className="industry-link">Learn More →</span>
          </div>
        </div>

        <div className="industry-card">
          <img src={imgPalshi} alt="Palshi Plant" />
          <div className="industry-card-content">
            <h3>Palshi</h3>
            <p>
              Project Capacity : 10 TPD Biogas to CNG Using Napier Grass &
              Agriculture Waste
            </p>
            <span className="industry-link">Learn More →</span>
          </div>
        </div>
        {/* ================= REFERENCES BUTTON ================= */}
        <div className="industries-reference">
          <span>References</span>
          <div className="reference-arrow">↗</div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
 