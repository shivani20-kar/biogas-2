import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/OpenPositionsSection.css";
import bgImage from "../Components/IMAGES/joingdteambackground.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function OpenPositionsSection() {
  return (
    <section className="open-positions-wrapper">
      <img src={bgImage} alt="background" className="open-positions-bg" />

      <div className="open-positions-content">
        <h1 className="open-positions-title">Open positions</h1>
        <p className="open-positions-desc">Let's change the world together!</p>

        <button className="open-positions-btn">
          <span>Join GD Team</span>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
}
