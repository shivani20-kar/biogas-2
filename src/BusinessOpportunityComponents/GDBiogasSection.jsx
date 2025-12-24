import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/GDBiogasSection.css";
import quoteIcon from "../Components/IMAGES//“.png";
import gd from "../Components/IMAGES/gd1.png";

const GDBiogasSection = () => {
  return (
    <div className="biogas-wrapper">
      {/* LEFT SIDE */}
      <div className="left-box">
        <div className="brand-title">
          <span className="red-line"></span>
          GD B<span className="green-text">i</span>OGAS
        </div>

        <img className="quote-img" src={quoteIcon} alt="quote" />

        <div className="brand-desc">
          Manufacturer in advance renewable energy and agricultural allied
          products using world-class, advanced biogas & biofuel technology.
        </div>

        <div className="red-strip"></div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-box">
        <div className="blue-strip"></div>

        <div className="section-heading">Turnkey Solutions</div>

        <div className="section-para">
          We offer comprehensive turnkey solutions that encompass every aspect
          of biogas, CNG, LNG, Hydrogen, Biochar, Artificial Human Substance
          (AHS), Sustainable Aviation Fuel (SAF), Biomass pellets, LPG, animal
          feeds, and food processing plants. Our services include:
        </div>

        <ul className="service-list">
          <li>Designing and building customized solutions</li>
          <li>Procuring and managing raw materials</li>
          <li>Marketing and distribution support</li>
        </ul>

        <div className="section-heading">Our Mission</div>

        <div className="section-para">
          Our mission is to empower agricultural communities by providing
          innovative, sustainable, and efficient energy solutions. We strive to
          make renewable energy accessible and affordable, promoting a cleaner,
          greener future for all.
        </div>


        <img className="gd1" src={gd} alt="" />
      </div>
    </div>
  );
};

export default GDBiogasSection;
