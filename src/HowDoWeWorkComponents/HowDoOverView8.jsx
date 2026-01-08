import React from "react";
import "./HowDoWeWorkComponentsCss/HowDoOverView8.css";
import bgImage from "../HowDoWeWorkComponents/overview8.png";

const ContinuousImprovementStrategies = () => {
  return (
    <section
      className="continuous-improvement-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* LEFT CONTENT PANEL */}
      <div className="continuous-improvement-panel">
        <div className="continuous-improvement-content">
          <h2 className="continuous-improvement-heading">
            <span className="continuous-improvement-step-number">08</span>
            <span className="continuous-improvement-step-title">
              Continuous Improvement Strategies
            </span>
          </h2>

          <p>
            Continuous improvement is integral to the long-term success of
            biogas, advanced biofuel, and allied agriculture value addition
            projects. The project adopts a data-driven approach by continuously
            monitoring operational performance, and product yields. Real-time
            process analytics and periodic performance reviews enable early
            identification of inefficiencies and support informed
            decision-making for ongoing optimization.
          </p>

          <p>
            Technological upgrades and process enhancements are systematically
            implemented to improve efficiency, reliability, and scalability.
            This includes refining digestion parameters, improving feedstock
            pre-treatment, integrating advanced upgrading technologies for
            biofuels, biochar, and bio-based chemicals. These improvements
            ensure consistent quality while maximizing resource utilization.
          </p>

          <p>
            The project also emphasizes continuous learning and capacity
            building. Regular training programs, skill upgrades, and knowledge
            exchange initiatives are conducted for operators, and partner
            farmers. Feedback from on-ground operations and stakeholders is
            actively incorporated into process improvements, fostering a culture
            of innovation and operational excellence.
          </p>

          <p>
            By embedding continuous improvement strategies across technical,
            operational, and agricultural value chains, the project enhances
            economic viability, environmental performance, and social impact.
            This adaptive and forward-looking approach ensures resilience to
            market changes and evolving sustainability standards, positioning
            the initiative as a future-ready platform for renewable energy and
            sustainable agriculture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContinuousImprovementStrategies;
