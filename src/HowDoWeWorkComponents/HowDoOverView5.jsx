import React from "react";
import "./HowDoWeWorkComponentsCss/HowDoOverView5.css";
import bgImage from "../HowDoWeWorkComponents/overview5.png";

const BiologicalServicesSection = () => {
  return (
    <div
      className="overviewbiological-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overviewbiological-overlay">
        <div className="overviewbiological-content">
          <h2 className="overviewbiological-heading">
            <span className="overviewbiological-number">05</span>
            <span className="overviewbiological-title">
              Biological services <br />
              and support
            </span>
          </h2>

          <p>
           We provide continuous laboratory monitoring and analytical control of biogas plant operations to ensure stable biological processes and optimal gas production. Regular testing of substrate quality, digestate characteristics, and biogas composition allows early detection of deviations and supports proactive process optimization.
          </p>

          <p>
            Based on laboratory results and operational data, we fine-tune substrate loading and unloading schedules, temperature regimes, and hydraulic retention times. Nutrient and trace element additives are carefully adjusted to maintain healthy microbial activity and maximize digestion efficiency.
          </p>

          <p>
            In addition to process optimization, we ensure the timely supply of genuine spare parts and critical components to minimize downtime and maintain uninterrupted plant operations. Preventive maintenance strategies are implemented to enhance equipment lifespan and operational reliability.
          </p>

          <p>
            We also offer repowering and modernization services for existing biogas plants. This includes upgrading outdated equipment, improving process efficiency, increasing capacity, and integrating advanced control systems to enhance performance, safety, and long-term profitability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BiologicalServicesSection;