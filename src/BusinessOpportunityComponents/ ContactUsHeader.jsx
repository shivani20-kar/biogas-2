import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ ContactUsHeader.css";
import shapeImgcontact from "../Components/IMAGES/arrowVendor.png";

export default function ContactUsHeader() {
  return (
    <section className="contactussection-wrapper">
      {/* Left Angle Shape */}
      <div className="contactussection-left-shape">
        <img
          src={shapeImgcontact}
          alt="shape"
          className="contactussection-shape-img"
        />
      </div>

      {/* Text Content */}
      <div className="contactussection-content">
        <h1 className="contactussection-title">
          Contact <span>Us</span>
        </h1>
        <p className="contactussection-subtext">
          Fill out the form, and we will contact you as soon as possible.
        </p>
      </div>
    </section>
  );
}
