import React from "react";
import "./HowDoWeWorkComponentsCss/HowDoOverView1.css";
import bgImage from "../HowDoWeWorkComponents/overview1.png";

const ConceptSection = () => {
  return (
    <div
      className="concept-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="concept-overlay">
        <div className="concept-content">
          <h2 className="concept-heading">
            <span className="concept-number">01</span>
            <span className="concept-title">
              Concept Development <br />
              and research
            </span>
          </h2>

          <p>
            We begin by conducting a detailed characterization of the available
            raw materials to understand their composition, quantity, and biogas
            yield potential. Based on this analysis, we accurately estimate the
            expected energy generation capacity of the project.
          </p>

          <p>
            Using these findings, we design a customized technological process
            that includes the selection of appropriate digestion technology,
            plant capacity, process flow, and supporting systems to ensure
            optimal efficiency and long-term performance.
          </p>

          <p>
            In parallel, a comprehensive financial model is developed, covering
            capital expenditure, operational costs, revenue projections, and
            return on investment to assess the commercial viability of the
            project.
          </p>

          <p>
            Before finalizing the biogas plant design, on-site inspections are
            carried out along with detailed geological and topographic surveys.
            These assessments ensure the suitability of the land, foundation
            stability, drainage, access, and infrastructure planning, enabling a
            safe, compliant, and cost-effective plant layout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConceptSection;
