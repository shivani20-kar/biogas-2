import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/LandRegistration.css";
import shapeImgland from "../Components/IMAGES/arrowVendor.png";

export default function LandRegistration() {
  return (
    <section className="land-wrapper">
      <div className="land-left-shape">
        <img src={shapeImgland} alt="shape" className="shape-img" />
      </div>

      <div className="land-content">
        <h1 className="land-title">
          Land <span>Registration</span>
        </h1>
        <p className="land-subtext">
          This Offer Only Satara District Villegers. Fill out the form, and we
          will contact you as soon as possible.
        </p>
      </div>
    </section>
  );
}
 