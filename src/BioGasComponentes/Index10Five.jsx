import React from "react";
import "./CSS/Index10Five.css";
import agitatorImg from "./Frame 2087327547.png"; 

const ReactorAgitator = () => {
  return (
    <div className="reactor-wrapper-two">
      {/* LEFT IMAGE SECTION */}
      <div className="reactor-left-two">
        <div className="image-box-two">
          <img src={agitatorImg} alt="Reactor Vertical Agitator" />
        </div>
      </div>

      {/* RIGHT CONTENT SECTION */}
      <div className="reactor-right-two">
        <div className="reactor-header-two">
          <span className="reactor-number-two">05</span>
          <h2>Reactor Vertical Agitator (AG-01 … AG-14)</h2>
        </div>

        <h4>Efficient and Reliable Mixing for High-Solid Substrates</h4>

        <p>
          The <strong>GD Planet Reactor Vertical Agitators (AG-01 to AG-14)</strong> 
          are purpose-built to ensure efficient mixing, uniform fermentation, 
          and maximum gas yield inside the biogas reactor.
        </p>

        <p>
          Each agitator is designed with a focus on 
          <strong> energy efficiency, durability, and safety</strong>, 
          making it a key component of stable biogas plant operation.
        </p>

        <h4>Precision Engineering for High Performance</h4>

        <p>
          Our agitators are equipped with <strong>high-quality gear units and motors</strong> 
          sourced from <strong>renowned European manufacturers</strong>, ensuring consistent 
          performance and extended service life.
        </p>

        <p>
          All drive components meet <strong>ATEX safety standards</strong>, making them suitable 
          for use in <strong>potentially explosive environments</strong> such as anaerobic digesters.
        </p>

        <h4>Efficient Design and Long-Term Reliability</h4>

        <ul>
          <li>Suitable for substrates with <strong>13–18% total solids</strong></li>
          <li>Energy-efficient gear units and motors from top European brands</li>
          <li><strong>ATEX-certified</strong> for explosive zone operation</li>
          <li>Optimized impeller angle for effective and uniform mixing</li>
          <li>External motor mounting for safety and easy maintenance</li>
          <li>Long service life with minimal maintenance requirements</li>
        </ul>

        <div className="specs-two">
          <h4>Specifications for the Napier grass 33% total solid</h4>
          <div className="spec-row-two">
            <span>Engine power:</span>
            <span>N = 15 kW</span>
          </div>
          <div className="spec-row-two">
            <span>Quantity per digester:</span>
            <span>5 pcs</span>
          </div>
          <div className="spec-row-two">
            <span>Quantity total:</span>
            <span>10 pcs</span>
          </div>

          <h4>Specifications for the Napier grass 27% total solid</h4>
          <div className="spec-row-two">
            <span>Engine power:</span>
            <span>N = 15 kW</span>
          </div>
          <div className="spec-row-two">
            <span>Quantity per digester:</span>
            <span>7 pcs</span>
          </div>
          <div className="spec-row-two">
            <span>Quantity total:</span>
            <span>14 pcs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactorAgitator;
