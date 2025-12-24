import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ WorldMapSection.css";
import worldmap from "../Components/IMAGES/worldmapimage.jpg";

export default function WorldMapSection() {
  return (
    <section className="worldmap-section">
      <div className="worldmap-container">
        <img src={worldmap} alt="World Map" className="worldmap-img" />
      </div>
    </section>
  );
}
