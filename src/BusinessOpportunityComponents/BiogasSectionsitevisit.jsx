import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/BiogasSectionsitevisit.css";
import biogassitevisit from "../Components/IMAGES/biogasSitevisitbackground.png";

const BiogasSectionsitevisit = () => {
  return (
    <section className="biogassitevisit-section">
      <div className="biogassitevisit-container">
        <img
          src={biogassitevisit}
          alt="Biogas Site Visit"
          className="biogassitevisit-image"
        />
      </div>
    </section>
  );
};

export default BiogasSectionsitevisit;
