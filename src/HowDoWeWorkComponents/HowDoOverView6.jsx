import React from "react";
import "./HowDoWeWorkComponentsCss/HowDoOverView6.css";
import bgImage from "../HowDoWeWorkComponents/overview6.png";

const SustainableResourceUtilization = () => {
  return (
    <section
      className="sustainable-resource-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* LEFT CONTENT PANEL */}
      <div className="sustainable-resource-panel">
        <div className="sustainable-resource-content">
          <h2 className="sustainable-resource-heading">
            <span className="sustainable-resource-step-number">06</span>
            <span className="sustainable-resource-step-title">
              Sustainable Resource Utilization
            </span>
          </h2>

          <p>
            Sustainable resource utilization is a core principle of the biogas
            project, focusing on the efficient and responsible use of locally
            available organic resources. Agricultural residues, animal manure,
            food waste, and other biodegradable materials are converted into
            clean, renewable energy, reducing dependence on fossil fuels and
            minimizing environmental pollution. By transforming waste into
            valuable energy, the project supports a circular economy and
            promotes long-term sustainability.
          </p>

          <p>
            The biogas production process is designed to maximize energy
            recovery while minimizing resource losses. Advanced digestion
            technologies and optimized process control ensure efficient
            substrate utilization, stable gas generation, and reduced methane
            leakage. Heat and power generated from biogas are used effectively
            within the system, further enhancing overall energy efficiency and
            reducing the project's carbon footprint.
          </p>

          <p>
            In addition to energy generation, the project produces nutrient-rich
            digestate as a valuable by-product. This digestate is safely
            processed and returned to agricultural land as an organic
            fertilizer, improving soil health, reducing the need for chemical
            fertilizers, and closing the nutrient loop. This integrated approach
            enhances agricultural productivity while preserving natural
            resources.
          </p>

          <p>
            Through sustainable resource utilization, the biogas project
            delivers environmental, economic, and social benefits. It reduces
            greenhouse gas emissions, supports waste management solutions,
            creates rural employment, and strengthens energy security. By
            aligning renewable energy generation with responsible resource
            management, the project contributes meaningfully to climate action
            and sustainable rural development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SustainableResourceUtilization;
