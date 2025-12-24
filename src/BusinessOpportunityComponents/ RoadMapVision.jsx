import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ RoadMapVision.css";

import bambooImage from "../Components/IMAGES/vision1.png";
import beeImage from "../Components/IMAGES/vision2.png";
import planetsImage from "../Components/IMAGES/vision3.png";

export default function RoadMapVision() {
  return (
    <div className="vision-wrapper">
      <div className="visioninner-wrapper">
        <h2 className="vision-title">Vision:</h2>

        {/* TOP ROW */}
        <div className="vision-top">
          {/* BAMBOO */}
          <div className="vision-box bamboo-box">
            <div className="bamboo-border-box">
              <img src={bambooImage} className="bamboo-img" />
            </div>
            
          </div>

          {/* BEE - OUTSIDE HALF */}
          <div className="vision-box bee-box">
            <img src={beeImage} alt="Bee" className="vision-image" />
           
          </div>
        </div>

        {/* PLANETS - OUTSIDE HALF + FULL WIDTH */}
        <div className="vision-bottom">
          <div className="vision-box planets-box">
            <img src={planetsImage} alt="Planets" className="planets-img" />
          
          </div>
        </div>
      </div>
    </div>
  );
}
