import React from "react";
import "./HowDoWeWorkComponentsCss/HowDoOverView2.css";
import bgImage from "../HowDoWeWorkComponents/overview2.png";

const DesignPermissions = () => {
  return (
    <section
      className="design-permissions-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* LEFT CONTENT PANEL */}
      <div className="design-permissions-panel">
        <div className="design-permissions-content">
          <h2 className="design-permissions-heading">
            <span className="design-step-number">02</span>
            <span className="design-step-title">Design and permissions</span>
          </h2>

          <p>
            We prepare a comprehensive general layout of the biogas plant, along
            with detailed engineering drawings for reinforced concrete
            structures and foundations. These designs are supported by precise
            static and structural calculations to ensure safety, durability, and
            compliance with applicable engineering standards.
          </p>

          <p>
            Our engineering scope also includes the complete design of utility
            systems such as gas pipelines, water supply and sewage networks,
            heating systems, boiler rooms, and all related process
            infrastructure. Each system is carefully integrated into the overall
            plant layout to ensure smooth operation, energy efficiency, and
            long-term reliability.
          </p>

          <p>
            In addition, we develop detailed electrical and power distribution
            schemes, covering control systems, safety mechanisms, and grid
            connectivity. These designs ensure stable plant operations,
            protection of equipment, and compliance with electrical and safety
            regulations
          </p>

          <p>
            Beyond engineering, we manage the statutory and regulatory process
            by organizing public hearings and coordinating with authorities to
            obtain all necessary approvals. This includes permits for
            construction and commissioning, green tariff or energy sale
            licenses, and required certifications, ensuring the project is fully
            compliant and ready for operation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignPermissions;
