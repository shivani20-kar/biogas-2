import React from "react";
import "./HowDoWeWorkComponentsCss/HowDoOverView3.css";
import bgImage from "../HowDoWeWorkComponents/overview3.png";

const EquipmentSection = () => {
  return (
    <div
      className="overviewequipment-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overviewequipment-overlay">
        <div className="overviewequipment-content">
          <h2 className="overviewequipment-heading">
            <span className="overviewequipment-number">03</span>
            <span className="overviewequipment-title">
              Equipment supply <br />
              and installation
            </span>
          </h2>

          <p>
           We begin by finalizing and negotiating detailed technical specifications with equipment suppliers to ensure full compliance with project requirements, performance standards, and quality benchmarks. This process ensures that all equipment is optimally selected, standardized, and aligned with the overall plant design.
          </p>

          <p>
           We then organize secure storage and coordinated delivery of all biogas plant equipment. Our team closely supports and monitors every stage of transportation, including quality inspection and acceptance at the manufacturing site, proper loading and packaging, documentation and declaration, logistics management, customs clearance where applicable, and safe unloading at the project location.
          </p>

          <p>
            Throughout the logistics process, strict quality control measures are applied to prevent damage, delays, or non-compliance. This end-to-end oversight ensures that all components arrive on-site in perfect condition and ready for installation.
          </p>

          <p>
            Finally, we carry out the complete installation, integration, and bundling of process equipment, electrical cabinets, and automation systems. This includes mechanical assembly, electrical connections, and control system integration to ensure seamless operation, system reliability, and readiness for commissioning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EquipmentSection;
