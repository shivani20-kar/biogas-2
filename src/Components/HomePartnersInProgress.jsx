import React from "react";
import "../Components/Css/HomePartnersInProgress.css";

// logos
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

const logos = [
  zorgBiogasLogo,
  orkelLogo,
  abLogo,
  shaktimanLogo,
  tetrapak,
  skyLogo,
  farmerpLogo,
  karabLogo,
  mudbotsLogo,
  ecostanLogo,
  bioenergyLogo,
  growdieselLogo,
  gpsrenewablesLogo,
  godrejLogo,
  pyregLogo,
  cpmLogo,
  ifarmLogo,
  climatetechLogo,
  airpatekLogo,
];

const HomePartnersInProgress = () => {
  return (
    <section className="home-partners">
      <div className="home-partners__container">
        
        {/* Title */}
       <div className="home-partners__title">
  <span className="home-partners__dot">
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_7391_356520)">
    <mask id="path-2-inside-1_7391_356520" fill="white">
      <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"/>
    </mask>
    <path d="M0 8M16 8M16 8M0 8M8 0M16 8M8 16M0 8M8 16V12C5.79086 12 4 10.2091 4 8H0H-4C-4 14.6274 1.37258 20 8 20V16ZM16 8H12C12 10.2091 10.2091 12 8 12V16V20C14.6274 20 20 14.6274 20 8H16ZM8 0V4C10.2091 4 12 5.79086 12 8H16H20C20 1.37258 14.6274 -4 8 -4V0ZM8 0V-4C1.37258 -4 -4 1.37258 -4 8H0H4C4 5.79086 5.79086 4 8 4V0Z" fill="#F94006" mask="url(#path-2-inside-1_7391_356520)"/>
  </g>
  <defs>
    <clipPath id="clip0_7391_356520">
      <rect width="16" height="16" rx="8" fill="white"/>
    </clipPath>
  </defs>
</svg>
  </span>
  <h2>PARTNERS IN PROGRESS</h2>
</div>


        {/* Slider */}
        <div className="home-partners__slider">
          <div className="home-partners__track">
            {/* original */}
            {logos.map((logo, index) => (
              <div className="home-partners__slide" key={index}>
                <img src={logo} alt="partner" />
              </div>
            ))}

            {/* duplicate for infinite scroll */}
            {logos.map((logo, index) => (
              <div
                className="home-partners__slide"
                key={`duplicate-${index}`}
              >
                <img src={logo} alt="partner" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomePartnersInProgress;
