import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/LandOwnerSection.css";

import landquoteImg from "../Components/IMAGES/white“ (1).png";

export default function RentSection() {
  return (
    <section className="landowner-wrapper">
      {/* LEFT RED BLOCK */}
      <div className="land-inner-wrapper">
        <div className="land-left">
          <img src={landquoteImg} alt="quote" className="land-quote-img" />

          {/* <h2 className="land-number">1800</h2> */}

          <p className="land-text">
            One Village <br /> One Project
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
         "Partner with GDBiogas <br /> for a predictable, long-<br />term revenue stream." 
        </p>
      </div>
    </section>
  );
}
