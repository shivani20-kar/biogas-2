import React from "react";
import "./CSS/Index10.css";
import feederImg from "./Rectangle 64.png"; 

const MainEquipment = () => {
  return (
    <div className="equipment-wrapper">
      {/* Header */}
      <div className="equipment-header">
        <div className="main-arrow-shape">
          <svg className="arrow-svg" viewBox="0 0 120 180">
                        <polygon
                            points="0,0 84,0 120,90 84,180 0,180 36,90"
                            fill="#f2f2f2"
                            stroke="#e3262f"
                            strokeWidth="4"
                        />
                    </svg>
        </div>
         <div className="main-titlee">
          <h1>Main Equipment's</h1>
        </div>
      </div>

      {/* Content */}
      <div className="equipment-content">
        {/* Left Image Box */}
        <div className="equipment-left">
          <img src={feederImg} alt="Solid Feeder System" />
        </div>

        {/* Right Text */}
        <div className="equipment-right">
          <div className="equipment-number">
            <h1>01</h1>

          <h3 className="equipment-text">Solid Feeder System (SF-01 & SF-02)</h3>
          </div>

          <h4>Efficient Biomass Feeding with Precision and Reliability</h4>

          <p>
            At<strong> GD Planet,</strong> our <strong>Solid Feeder units (SF-01 and SF-02) </strong>are
            engineered to deliver consistent, efficient, and low-maintenance
            feeding of solid biomass materials such as <strong> Napier grass, silage,
            or agricultural residues </strong> into the biogas production system.
          </p>

          <p>
            These feeders are the result of extensive testing and field
            application, designed to ensure <strong> maximum functionality,
            operational stability,</strong> and <strong>energy efficiency </strong>under diverse
            conditions.
          </p>

          <h5>Advanced Design for Smooth Material Flow</h5>
<p>The <strong>solid feeder’s robust construction </strong> and <strong> vertically oriented walls </strong> prevent
 material bridging and blockages — a common issue in conventional feeding systems. This ensures a smooth and uninterrupted flow of biomass into the reactor.</p>
          <ul>
            <li>
              <strong>No Material Build-up:</strong> The vertical wall design
              eliminates the risk of clogging.
            </li>
            <li>
              <strong>Consistent Feeding:</strong> Integrated conveyor chains and a
              precision milling unit allow uniform and continuous dosing.
            </li>
            <li>
              <strong>Adaptive Performance:</strong>The system is capable of handling a 
              wide range of feedstock types with varying moisture and particle
               sizes.
            </li>
          </ul>

          <div className="specifications">
            <h6>Specifications</h6>
            <div className="spec-row">
              <span>Length</span>
              <span>6.7 m</span>
            </div>
            <div className="spec-row">
              <span>Width</span>
              <span>3.6 m</span>
            </div>
            <div className="spec-row">
              <span>Height</span>
              <span>3.4 m</span>
            </div>
            <div className="spec-row">
              <span>Volume</span>
              <span>30 m³</span>
            </div>
            <div className="spec-row">
              <span>Quantity</span>
              <span>2 pcs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainEquipment;
