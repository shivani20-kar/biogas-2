// Benefits.jsx
import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/Benefits.css";

const Benefits = () => {
  return (
    <div className="benefits-wrapper">
      <section className="benefits-section">
        <h2 className="benefits-title">
          Benefits to Villagers and mostly Small farmers:
        </h2>
        <ul className="benefits-list">
          <li>Contract farming</li>
          <li>Modern farming guidance</li>
          <li>Discounts on products</li>
          <li>Opportunity to become shareholders</li>
          <li>MSP-based buying and selling</li>
          <li>
            3D construction printing for integrated Animal farming and living
          </li>
          <li>Priority to local youth for dealerships and distributorships</li>
          <li>Organic farming certification</li>
          <li>Farmer doorsteps pickup goods and delivery services</li>
        </ul>
      </section>

      <section className="benefits-section">
        <h2 className="benefits-title">Women and Boys Empowerment:</h2>
        <ul className="benefits-list">
          <li>
            Employment opportunities for women and youth in various village
            industries
          </li>
          <li>Skill development programs for women and youth</li>
          <li>Support for women-led enterprises and startups</li>
          <li>Access to education and healthcare services</li>
        </ul>
      </section>
    </div>
  );
};

export default Benefits;
