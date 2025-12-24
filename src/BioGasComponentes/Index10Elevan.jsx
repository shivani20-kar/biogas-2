import React from "react";
import "./CSS/Index10Elevan.css";
import compressorImg from "./Frame 2087327547 (2).png"; 

const BiogasCompressor = () => {
  return (
      <div className="compressor-wrapper">

        {/* LEFT IMAGE AREA */}
        <div className="compressor-image-box">
          <img src={compressorImg} alt="Biogas Compressor" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="compressor-content"> 
          <div className="compressor-number"><h1>11</h1>
          <h2>
            Biogas Compressor (BC-01, BC-02)
          </h2>
          </div>

          <h4>Efficient Gas Handling and Pressure Regulation System</h4>

          <p>
            The<strong>Biogas Compressor (BC-01, BC-02)</strong>  plays a vital role in maintaining
            continuous and stable biogas flow within the plant. It is engineered
            to<strong>  increase gas pressure and ensure efficient transfer </strong> of biogas
            from the <strong> gasholder storage system to the upgrading or utilization units.</strong> 
          </p>

          <h5>Technical Features</h5>
          <ul>
            <li>
              <strong>High-Efficiency Impeller Design:</strong><br/>The impeller geometry ensure<strong> progressive gas
              acceleration</strong> and minimal energy losses, optimizing pressure buildup and flow consistency.
            </li>
            <li>
              <strong>Low Vibration and Noise:</strong><br/> Dynamic balancing and precision engineering minimize vibration and sound levels, allowing for<strong> quiet, stable and long-term operation.</strong>
            </li>
            <li>
              <strong>Corrosion-Resistant Materials:</strong><br/>All gas-contact parts are constructed from<strong> anti-corrosive materials,</strong>
             providing long service life and safe handling of biogas containing trace elements like hydrogen sulfide (h2s) and moisture.
            </li>
            <li>
              <strong>Optimized Flow Control:</strong><br/>Designed for steady gas delivery,  Maintaining the <strong> required operational
              pressure (typically 80-150 mbar)</strong> for efficient downstream biogas upgrading.
            </li>
          </ul>

          <h5>Operational Purpose</h5>
          <p>The biogas compressor system is responsible for:</p>
          <ul>
            <li><strong>Transferring biogas </strong>from the <strong> gasholder storage unit </strong> to the<strong> biogas  upgrading plant.</strong></li>
            <li>Maintaining <strong> constant gas flow and pressure stability</strong> to ensure uninterrupted plant performance.</li>
            <li>Supporting <strong> pre-treatment and purification processes</strong> by providing a controlled gas feed.</li>
          </ul>

          
          <div className="specs">
            <h5 className="spec-title">Specifications</h5>
            <p>Flow rate <span>2200 m³/h</span></p>
            <p>Pressure <span>150 mbar</span></p>
            <p>Engine power <span>26 kW</span></p>
            <p>Quantity <span>2 pcs</span></p>
          </div>
        </div>

      </div>
  );
};

export default BiogasCompressor;
