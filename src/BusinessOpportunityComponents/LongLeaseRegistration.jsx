import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/LongLeaseRegistration.css";
import shapeImglandlease from "../Components/IMAGES/arrowVendor.png";

export default function LongLeaseRegistration() {
  return (
    <section className="longlease-wrapper">
      <div className="longlease-left-shape">
        <img src={shapeImglandlease} alt="shape" className="shape-img" />
      </div>

      <div className="longlease-content">
        <h1 className="longlease-title">
          Long <span>Lease </span>
        </h1>
        <p className="longlease-subtext">
          This Offer Only Satara District Villegers. Fill out the form, and we
          will contact you as soon as possible.
        </p>
      </div>
    </section>
  );
}
