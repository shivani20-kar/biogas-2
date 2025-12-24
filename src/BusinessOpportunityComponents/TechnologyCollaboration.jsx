import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/TechnologyCollaboration.css";

import zorgBiogasLogo from "../Components/IMAGES/zorg1.png";
import orkelLogo from "../Components/IMAGES/0rkel2.png";
import abLogo from "../Components/IMAGES/ab3.png";
import shaktimanLogo from "../Components/IMAGES/shaktiman4.png";
import tetrapak from "../Components/IMAGES/tetra5.png";
import skyLogo from "../Components/IMAGES/sky6.png";
import farmerpLogo from "../Components/IMAGES/farmerp7.png";
import karabLogo from "../Components/IMAGES/karab8.png";
import mudbotsLogo from "../Components/IMAGES/mudbots9.png";
import ecostanLogo from "../Components/IMAGES/ecostan10.png";
import bioenergyLogo from "../Components/IMAGES/bioenergy11.png";
import growdieselLogo from "../Components/IMAGES/growdiesel12.png";
import gpsrenewablesLogo from "../Components/IMAGES/gpsrenewables13.png";
import godrejLogo from "../Components/IMAGES/godrej14.png";
import pyregLogo from "../Components/IMAGES/pyreg15.png";
import cpmLogo from "../Components/IMAGES/cpm16.png";
import ifarmLogo from "../Components/IMAGES/ifarm17.jpg";
import climatetechLogo from "../Components/IMAGES/climatetech18.png";
import airpatekLogo from "../Components/IMAGES/airpatek19.png";

import colonimg from "../Components/IMAGES/white“ (1).png";

const TechnologyCollaboration = () => {
  return (
    <div className="technology-collaboration">
      {/* ---------------- HEADER SECTION ---------------- */}
      <div className="collaboration-header-section">
        <div className="collaboration-main-heading">
          <span className="collaborationred-line"></span> Technology
          Collaboration
        </div>

        <img className="collaborationimg" src={colonimg} alt="" />

        <div className="collaboration-sub-heading">
          Advancing Together Through Smart Technology Partnerships
        </div>

        <div className="collaboration-tagline">
          A journey of transformation and sustainability.
        </div>
      </div>

      {/* ---------------- SLIDER SECTION ---------------- */}
      <div className="slider-container">
        <div className="logo-slider">
          <img src={zorgBiogasLogo} className="slide-logo" alt="" />
          <img src={orkelLogo} className="slide-logo" alt="" />
          <img src={abLogo} className="slide-logo" alt="" />
          <img src={shaktimanLogo} className="slide-logo" alt="" />
          <img src={tetrapak} className="slide-logo" alt="" />
          <img src={skyLogo} className="slide-logo" alt="" />
          <img src={farmerpLogo} className="slide-logo" alt="" />
          <img src={karabLogo} className="slide-logo" alt="" />
          <img src={mudbotsLogo} className="slide-logo" alt="" />

          <img src={ecostanLogo} className="slide-logo" alt="" />
          <img src={bioenergyLogo} className="slide-logo" alt="" />
          <img src={growdieselLogo} className="slide-logo" alt="" />
          <img src={gpsrenewablesLogo} className="slide-logo" alt="" />
          <img src={godrejLogo} className="slide-logo" alt="" />
          <img src={pyregLogo} className="slide-logo" alt="" />
          <img src={cpmLogo} className="slide-logo" alt="" />
          <img src={ifarmLogo} className="slide-logo" alt="" />
          <img src={climatetechLogo} className="slide-logo" alt="" />
          <img src={airpatekLogo} className="slide-logo" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TechnologyCollaboration;
