import React from "react";
import "./CSS/Index10Ten.css";
import dryerImg from "./Frame 2087327526 (1).png"; 

const BiogasDryer = () => {
  return (
    <section className="dryer-wrapper">
      {/* LEFT CONTENT */}
      <div className="dryer-left">
        <div className="dryer-heading">
          <span className="dryer-number">10</span>
          <h2>Biogas Dryer and Cooling (CHL-01)</h2>
        </div>

        <h4 className="sub-heading">
          Advanced Gas Cooling and Moisture Removal System
        </h4> 

        <p className="description">
          The <strong>Biogas Dryer and Cooling Unit (CHL-01) </strong>is a critical component of
          the biogas purification process. It is designed to <strong>reduce the
          temperature and humidity of raw biogas</strong> before further upgrading or
          compression.
          By integrating <strong>precision-engineered gas coolers and air-cooled liquid
          chillers,</strong> this system ensures the delivery of<strong> clean, dry, and
          temperature-stable biogas,</strong> optimizing downstream equipment performance and protecting sensitive components.
        </p>

        <h5>Performance and Safety Features</h5>
        <ul>
          <li>
            <strong>Efficient Moisture Separation:</strong> Rapid cooling
            condenses water vapor from the biogas stream, reducing moisture content and preventing corrosion in downstream systems.
          </li>
          <li>
            <strong>Optimized Gas Flow:</strong>The radial outlet gas chamber design
            ensures smooth  gas discharge with minimal turbulence and pressure loss.
          </li>
          <li>
            <strong>Maintenance Access:</strong>Equipped with an axial inspection opening, 
            allowing easy access for cleaning, inspection, and maintenance.
          </li>
          <li>
            <strong>Stable Cooling Efficiency:</strong> Integrated air-cooled
            chillers and dry coolers maintain a consistent operating temperature, even under variable load ambient conditions.
          </li>
        </ul>

        <h5>Key Advantages</h5>
        <ul>
          <li>High-efficiency <strong>gas cooling and drying</strong>for biogas plants</li>
          <li>Fully <strong> corrosion-resistant stainless steel construction</strong></li>
          <li>Compliant with <strong>European PED and AD standards</strong></li>
          <li><strong>Compact, modular design</strong> for easy integration into existing systems.</li>
          <li><strong>Low maintenance requirements</strong> with accessible inspection points</li>
          <li>Extended <strong>equipment lifespan</strong> throgh optimized temperature and moisture control. </li>
        </ul>

        
        <div className="specs">
            <h5>Specifications</h5>
          <p>Gas volume flow <span>2200 m³/h</span></p>
          <p>Gas inlet temperature <span>+50°C</span></p>
          <p>Gas outlet temperature <span>+20°C</span></p>
          <p>Cooling power <span>200 kW</span></p>
          <p>Engine power <span>54 kW</span></p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="dryer-right">
        <img src={dryerImg} alt="Biogas Dryer CHL-01" />
      </div>
    </section>
  );
};

export default BiogasDryer;
