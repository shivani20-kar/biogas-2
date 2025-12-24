import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/Banner.css";
import bannerImg from "../Components/IMAGES/bannerBackground.png"; 

export default function Banner() {
 return (
    <section className="banner-wrapper">
      
      {/* Background Image */}
      <img src={bannerImg} alt="Banner" className="banner-bg" />

      {/* Text Block */}
      <div className="banner-text">

        <div className="row">
          <p><span className="dot">•</span> No Waste</p>
          <p><span className="dot">•</span> No Pollution</p>
        </div>

        <div className="row center-row">
          <p><span className="dot">•</span> No Chemical Farming</p>
        </div>

      </div>

    </section>
  );
}
