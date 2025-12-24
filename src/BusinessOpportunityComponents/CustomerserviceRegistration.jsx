import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/CustomerserviceRegistration.css";
import shapeImgService from "../Components/IMAGES/arrowVendor.png";

export default function CustomerserviceRegistration() {
  return (
    <section className="customerservice-wrapper"> 
      <div className="customerservice-left-shape">
        <img src={shapeImgService} alt="shape" className="shape-img" />
      </div>

      <div className="customerservice-content">
        <h1 className="customerservice-titlemain">
          Customer <span>Care</span>
        </h1>

        <p className="customerservice-subtext">
          Fill out the form, and we will contact you as soon as possible.
        </p>
      </div>
    </section>
  );
}
