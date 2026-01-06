import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ WorldMapSection.css";
import worldmap from "../Components/IMAGES/worldmapimage.jpg";

export default function WorldMapSection() {
  // dots data
  const locations = [
    {
      name: "Satara",
      coords: { top: "55%", left: "67%" },
      city: "SATARA",
      address: "Maharashtra, India. 415001",
      color: "red",
    },
    {
      name: "Pune",
      coords: { top: "50%", left: "70%" },
      city: "PUNE",
      address: "Maharashtra, India. 411001",
      color: "green",
    },
    {
      name: "Palshi",
      coords: { top: "57%", left: "72%" },
      city: "PALSHI",
      address: "Maharashtra, India. 414001",
      color: "blue",
    },
  ];

  return (
    <section className="worldmap-section">
      <div className="worldmap-container">
        <img src={worldmap} alt="World Map" className="worldmap-img" />

        {/* MAP DOTS */}
        {locations.map((loc, index) => (
          <div
            key={index}
            className="map-dot"
            style={{ top: loc.coords.top, left: loc.coords.left, background: loc.color }}
          >
            <div className="tooltip">
              <h4>GD<span>BIO</span>GAS</h4>
              <p className="city">{loc.city}</p>
              <p>{loc.address}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
