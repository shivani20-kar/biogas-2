import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/LandOwnerSection.css";

import landquoteImg from "../Components/IMAGES/white“ (1).png";

export default function LandOwnerSection() {
  return (
    <section className="landowner-wrapper">
      {/* LEFT RED BLOCK */}
      <div className="land-inner-wrapper">
        <div className="land-left">
          <img src={landquoteImg} alt="quote" className="land-quote-img" />

          <h2 className="land-number">1800</h2>

          <p className="land-text">
            Opportunity <br /> for Land <br /> Owners.
          </p>
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div className="land-right">
        <p className="land-right-text">
          <h1 className="gs-title">
            <span className="gs-blue">G</span>RAMSHAKT
            <span className="gs-green">i</span>
          </h1>
          Smart Villages. <br />
          Zero Pollution. <br />
          Infinite Opportunities.
        </p>
      </div>
    </section>
  );
}
