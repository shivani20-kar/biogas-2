import React from "react";
import "./CSS/Index12.css";
import biogasImg from "./appendices image.png";

const AppendicesSection = () => {
  return (
    <div className="appendices-wrapper">
      {/* HEADER */}
      <div className="appendices-header">
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

        <h1 className="appendices-title">Appendices</h1>
      </div>

      {/* IMAGE SECTION */}
      <div className="appendices-image-section">
        <img src={biogasImg} alt="Biogas Plant" />
      </div>
    </div>
  );
};

export default AppendicesSection;
