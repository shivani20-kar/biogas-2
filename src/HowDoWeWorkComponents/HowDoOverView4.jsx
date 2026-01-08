import React from "react";
import "./HowDoWeWorkComponentsCss/HowDoOverView4.css";
import bgImage from "../HowDoWeWorkComponents/overview4.png";

const Commissioning = () => {
  return (
    <section
      className="commissioning-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* LEFT CONTENT PANEL */}
      <div className="commissioning-panel">
        <div className="commissioning-content">
          <h2 className="commissioning-heading">
            <span className="commissioning-step-number">04</span>
            <span className="commissioning-step-title">Commissioning</span>
          </h2>

          <p>
            We initiate the commissioning phase by conducting comprehensive dry tests of all installed equipment to verify mechanical integrity, alignment, and operational readiness. In parallel, hydraulic testing of tanks and pipelines is performed to ensure leak-free performance, pressure resistance, and compliance with safety standards.
          </p>

          <p>
            Following successful testing, we coordinate the delivery and controlled introduction of the bacterial inoculum required for anaerobic digestion. This step is carefully managed to establish optimal biological conditions within the digesters and to support stable and efficient biogas production.
          </p>

          <p>
           The biogas & advance biofuel plant is then started up progressively, moving from zero operation to on-set and design performance characteristics. Process parameters are continuously monitored and adjusted to achieve stable gas yield, system balance, and operational reliability.
          </p>

          <p>
           During this phase, we also provide comprehensive training to plant operators, covering equipment operation, process control, safety procedures, and routine maintenance. This ensures a smooth handover and enables the operating team to manage the plant efficiently and independently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Commissioning;