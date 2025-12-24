import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/SitevisitRegistration.css";
import shapeImgcareers from "../Components/IMAGES/arrowVendor.png";

export default function SitevisitRegistration() {
  return (
    <section className="sitevisit-wrapper"> 
      <div className="sitevisit-left-shape">
        <img src={shapeImgcareers} alt="shape" className="shape-img" />
      </div>

      <div className="sitevisit-content">
        <h1 className="sitevisit-titlemain">
          Sitevisit 
        </h1>
        <p className="sitevisit-subtext">
          This Offer Only Satara District Villagers. Fill out the form, and we
          will contact you as soon as possible.
        </p>
      </div>
    </section>
  );
}
