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
          <span className="collaborationred-line"></span>
          Technology Collaboration
        </div>

        <img className="collaborationimg" src={colonimg} alt="quote" />

        <div className="collaboration-sub-heading">
          Advancing Together <br />
          Through Smart Technology <br />
          Partnerships
        </div>

        <div className="collaboration-tagline">
          A journey of transformation <br />
          and sustainability.
        </div>
      </div>

      {/* ---------------- LOGO SLIDER SECTION ---------------- */}
      <div className="slider-containers">
        <div className="logo-slider">
          {/* ===== FIRST SET ===== */}
          <img src={zorgBiogasLogo} className="slide-logo" alt="Zorg Biogas" />
          <img src={orkelLogo} className="slide-logo" alt="Orkel" />
          <img src={abLogo} className="slide-logo" alt="AB" />
          <img src={shaktimanLogo} className="slide-logo" alt="Shaktiman" />
          <img src={tetrapak} className="slide-logo" alt="Tetra Pak" />
          <img src={skyLogo} className="slide-logo" alt="Sky" />
          <img src={farmerpLogo} className="slide-logo" alt="Farmer Partner" />
          <img src={karabLogo} className="slide-logo" alt="Karab" />
          <img src={mudbotsLogo} className="slide-logo" alt="Mudbots" />
          <img src={ecostanLogo} className="slide-logo" alt="Ecostan" />
          <img src={bioenergyLogo} className="slide-logo" alt="Bioenergy" />
          <img src={growdieselLogo} className="slide-logo" alt="Grow Diesel" />
          <img
            src={gpsrenewablesLogo}
            className="slide-logo"
            alt="GPS Renewables"
          />
          <img src={godrejLogo} className="slide-logo" alt="Godrej" />
          <img src={pyregLogo} className="slide-logo" alt="Pyreg" />
          <img src={cpmLogo} className="slide-logo" alt="CPM" />
          <img src={ifarmLogo} className="slide-logo" alt="iFarm" />
          <img
            src={climatetechLogo}
            className="slide-logo"
            alt="Climate Tech"
          />
          <img src={airpatekLogo} className="slide-logo" alt="Airpatek" />

          {/* ===== DUPLICATE SET (REQUIRED FOR INFINITE SCROLL) ===== */}
          <img src={zorgBiogasLogo} className="slide-logo" alt="Zorg Biogas" />
          <img src={orkelLogo} className="slide-logo" alt="Orkel" />
          <img src={abLogo} className="slide-logo" alt="AB" />
          <img src={shaktimanLogo} className="slide-logo" alt="Shaktiman" />
          <img src={tetrapak} className="slide-logo" alt="Tetra Pak" />
          <img src={skyLogo} className="slide-logo" alt="Sky" />
          <img src={farmerpLogo} className="slide-logo" alt="Farmer Partner" />
          <img src={karabLogo} className="slide-logo" alt="Karab" />
          <img src={mudbotsLogo} className="slide-logo" alt="Mudbots" />
          <img src={ecostanLogo} className="slide-logo" alt="Ecostan" />
          <img src={bioenergyLogo} className="slide-logo" alt="Bioenergy" />
          <img src={growdieselLogo} className="slide-logo" alt="Grow Diesel" />
          <img
            src={gpsrenewablesLogo}
            className="slide-logo"
            alt="GPS Renewables"
          />
          <img src={godrejLogo} className="slide-logo" alt="Godrej" />
          <img src={pyregLogo} className="slide-logo" alt="Pyreg" />
          <img src={cpmLogo} className="slide-logo" alt="CPM" />
          <img src={ifarmLogo} className="slide-logo" alt="iFarm" />
          <img
            src={climatetechLogo}
            className="slide-logo"
            alt="Climate Tech"
          />
          <img src={airpatekLogo} className="slide-logo" alt="Airpatek" />
        </div>
      </div>
    </div>
  );
};

export default TechnologyCollaboration;
