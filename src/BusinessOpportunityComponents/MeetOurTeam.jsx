import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/MeetOurTeam.css";

import girishImage from "../Components/IMAGES/girishDhumal.png";
import tejaswitaImage from "../Components/IMAGES/tejaswitadhumal.png";
import ishitaImage from "../Components/IMAGES/ishitadhumal.png";
import colonimg from "../Components/IMAGES/“.png";
import linkedinIcon from "../Components/IMAGES/linkdin.png";
import gd2 from "../Components/IMAGES/gd2.png";

const MeetOurTeam = () => {
  return (
    <div className="team-wrapper"> 
          <div className="team-hero">
       
           <img className="gd2" src={gd2} alt="" />
        <div className="team-text-container">
          <h1 className="team-title">
            <span className="red-line"></span> Meet Our Team
          </h1>

          <img className="team-quote-icon" src={colonimg} alt="" />

          <h2 className="team-sub-title">GD Earth Planet for Anand Kranti</h2>

          <p className="team-tagline">
            A journey of transformation and sustainability.
          </p>
        </div>
      </div>

      {/* ---------- TEAM CARDS SECTION ---------- */}
      <div className="team-cards-wrapper">

        {/* FIRST BIG IMAGE */}
        <div className="team-card center-card">
          <img src={girishImage} alt="Girish Dhumal" className="team-card-img big-img" />

          {/* LINKEDIN ICON */}
          <a
            href="https://www.linkedin.com/in/girish-dhumal" 
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>

        {/* BOTTOM TWO SMALL IMAGES */}
        <div className="team-card-row">

          <div className="team-card small-card">
            <img src={tejaswitaImage} alt="Tejaswita Dhumal" className="team-card-img small-img" />

            <a
              href="https://www.linkedin.com/in/tejaswita-dhumal"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>

          <div className="team-card small-card">
            <img src={ishitaImage} alt="Ishita Dhumal" className="team-card-img small-img" />

            <a
              href="https://www.linkedin.com/in/ishita-dhumal"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-icon"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default MeetOurTeam;
