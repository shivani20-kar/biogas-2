import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/PartnerRegistration.css";
import shapeImg from "../Components/IMAGES/arrowVendor.png"; 

export default function PartnerRegistration() {
  return (
    <section className="partner-wrapper">
      <div className="partner-left-shape">
        <img src={shapeImg} alt="shape" className="shape-img" />
      </div>

      <div className="partner-content">
        <h1 className="partner-title">
          Partner <span>Registration</span>
        </h1>
        <p className="partner-subtext">
          Fill out the form, and we will contact you as soon as possible.
        </p>
      </div>
    </section>
  );
}
