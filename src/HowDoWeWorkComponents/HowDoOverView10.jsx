import React from "react";
import "./HowDoWeWorkComponentsCss/HowDoOverView10.css";
import bgImage from "../HowDoWeWorkComponents/overview10.png";

const QualityEfficiency = () => {
  return (
    <section
      className="quality-efficiency-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* LEFT CONTENT PANEL */}
      <div className="quality-efficiency-panel">
        <div className="quality-efficiency-content">
          <h2 className="quality-efficiency-heading">
            <span className="quality-step-number">10</span>
            <span className="quality-step-title">Quality and efficiency</span>
          </h2>

          <p>
            Quality and efficiency are central to the biogas, advanced biofuel,
            and allied agriculture value addition initiatives. The project
            follows strict quality control protocols across the entire value
            chain—from feedstock sourcing and pre-treatment to energy generation
            and product finishing. Standardized operating procedures, regular
            testing, and compliance with applicable national and international
            standards ensure consistent output quality and reliable performance.
          </p>

          <p>
            Operational efficiency is achieved through optimized process design
            and advanced automation. Real-time monitoring systems track key
            parameters such as digestion stability, gas composition, conversion
            efficiency, and energy utilization. Continuous process optimization
            minimizes losses and maximizes output from each unit of raw
            material, resulting in higher overall plant efficiency and lower
            operating costs.
          </p>

          <p>
            For advanced biofuels and agriculture value-added products, quality
            assurance extends to upgrading, refining, and packaging processes.
            Biofuels are produced to meet specified purity and performance
            standards, biofertilizers, safety, and agronomic effectiveness. This
            ensures that all products deliver predictable results and meet
            customer expectations.
          </p>

          <p>
            By integrating robust quality management systems with efficiency-
            driven operations, the project enhances commercial viability and
            environmental performance. This disciplined approach not only
            improves profitability but also strengthens customer confidence, and
            reinforces the project's position as a dependable provider of
            renewable energy and sustainable agriculture solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityEfficiency;
