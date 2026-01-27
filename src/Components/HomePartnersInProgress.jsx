import React from "react";
import "../Components/Css/HomePartnersInProgress.css";

// import your logos
import logo1 from "../Components/IMAGES/partner.svg";
import logo2 from "../Components/IMAGES/partner2.svg";
import logo3 from "../Components/IMAGES/partner3.svg";
import logo4 from "../Components/IMAGES/partner4.svg";
import logo5 from "../Components/IMAGES/partner5.svg";
import logo6 from "../Components/IMAGES/partner6.svg";
import logo7 from "../Components/IMAGES/partner7.svg";
import logo8 from "../Components/IMAGES/partner8.svg";
import logo9 from "../Components/IMAGES/partner9.svg";
import logo10 from "../Components/IMAGES/partner10.svg";
import logo11 from "../Components/IMAGES/partner11.svg";

const HomePartnersInProgress = () => {
  return (
    <section className="home-partners">
      <div className="home-partners__container">
        {/* Title */}
        <div className="home-partners__title">
          <span className="home-partners__dot">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_6902_141174)">
                <mask id="path-2-inside-1_6902_141174" fill="white">
                  <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" />
                </mask>
                <path
                  d="M0 8M16 8M16 8M0 8M8 0M16 8M8 16M0 8M8 16V12C5.79086 12 4 10.2091 4 8H0H-4C-4 14.6274 1.37258 20 8 20V16ZM16 8H12C12 10.2091 10.2091 12 8 12V16V20C14.6274 20 20 14.6274 20 8H16ZM8 0V4C10.2091 4 12 5.79086 12 8H16H20C20 1.37258 14.6274 -4 8 -4V0ZM8 0V-4C1.37258 -4 -4 1.37258 -4 8H0H4C4 5.79086 5.79086 4 8 4V0Z"
                  fill="#F94006"
                  mask="url(#path-2-inside-1_6902_141174)"
                />
              </g>
              <defs>
                <clipPath id="clip0_6902_141174">
                  <rect width="16" height="16" rx="8" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <h2>PARTNERS IN PROGRESS</h2>
        </div>

        {/* Logos */}
        <div className="home-partners__logos">
          <img src={logo1} alt="partner" className="home-partners__logo" />
          <img src={logo2} alt="partner" className="home-partners__logo" />
          <img src={logo3} alt="partner" className="home-partners__logo" />
          <img src={logo4} alt="partner" className="home-partners__logo" />
          <img src={logo5} alt="partner" className="home-partners__logo" />
          <img src={logo6} alt="partner" className="home-partners__logo" />
          <img src={logo7} alt="partner" className="home-partners__logo" />
          <img src={logo8} alt="partner" className="home-partners__logo" />
          <img src={logo9} alt="partner" className="home-partners__logo" />
          <img src={logo10} alt="partner" className="home-partners__logo" />
          <img src={logo11} alt="partner" className="home-partners__logo" />
        </div>
      </div>
    </section>
  );
};

export default HomePartnersInProgress;
