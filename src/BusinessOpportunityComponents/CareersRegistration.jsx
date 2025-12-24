import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/CareersRegistration.css";
import shapeImgcareers from "../Components/IMAGES/arrowVendor.png";

export default function CareersRegistration() {
  return (
    <section className="careers-wrapper"> 
      <div className="careers-left-shape">
        <img src={shapeImgcareers} alt="shape" className="shape-img" />
      </div>

      <div className="careers-content">
        <h1 className="careers-titlemain">
          Careers <span>Opportunity</span>
        </h1>
        <p className="careers-subtext">
          This Offer Only Satara District Villegers. Fill out the form, and we
          will contact you as soon as possible.
        </p>
      </div>
    </section>
  );
}
