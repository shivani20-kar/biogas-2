import React from "react";
import "./CSS/Index10Nine.css";
import gasImg from "./Frame 2087327547 (1).png"; 

const Gasholder = () => {
  return (
    <div className="gasholder-wrapper">
      <div className="gasholder-left">
        <div className="imagee-box">
          <img src={gasImg} alt="Gasholder" />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="gasholder-right">
        <div className="gas-number">
            <h1>09</h1>
        <h2>
           Gasholder (GH-01)
        </h2>
        </div>

        <h4>High-Performance Biogas Storage and Pressure Equalization System</h4>

        <p>
         The <strong>Gasholder (GH-01)</strong> is an integral component of the biogas plant,
          designed to <strong>store biogas safely and maintain stable system pressure and gas composition. </strong>
          Engineered with advanced materials and precision fabrication methods, the gasholder ensures<strong> efficient, secure, and durable gas storage</strong>
           under a wide range of operating conditions.
        </p>

        <h5>Two-Layer Membrane Construction</h5>
        <p>The gasholder features a dual-layer membrane design for optimal performance and protection:</p>
        <ul>
          <li>
            <strong>Outer Membrane:</strong> Made from PVC-coated polyester fabric with UV-resistant treatment, providing excellent weatherproofing and durability against environmental stress such as sunlight, rain, and temperature fluctuations.
          </li>
          <li>
            <strong>Inner Membrane: </strong>Constructed from PELD (Polyethylene Low-Density), the gas-retaining membrane ensures high impermeability to methane and maintains the desired internal pressure.
          </li>
          <p>The membranes are precisely <strong> cut on CNC-controlled (NC) machines </strong> and <strong> welded using high-frequency technology, </strong>
          resulting in <strong> superior seam integrity, longevity, and structural reliability</strong> compared to conventional manual welding methods.</p>
        </ul>

        <h5>Material Specifications and Performance</h5>
        <ul>
          <li><strong>Methane Permeation:</strong> ≤ 260 cm³/m²/ bar- ensuring excellent gas retention and minimal leakage.</li>
          <li><strong>Temperature Range:</strong> Operational between <strong>−30°C to +60°C</strong>, enabling year-round stability in diverse climatic conditions.</li>
          <li><strong>Membrane Durability:</strong> Resistant to UV, radiation, corrosion & mechanial stress.</li>
        </ul>
        <p>These features collectively ensure the gasholder’s <strong>high operational reliability, minimal maintenance, </strong> and long service life.</p>

        <div className="spec-box">
            <h4>Specifications</h4>
          <p>Height: <strong>11.8 m</strong></p>
          <p>Diameter: <strong>15.4 m</strong></p>
          <p>Total Volume: <strong>1500 m³</strong></p>
          <p>Quantity: <strong>1 pcs</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Gasholder;
