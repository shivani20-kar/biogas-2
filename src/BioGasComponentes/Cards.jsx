import React, { useState } from "react";
import "./CSS/Cards.css";
import { useNavigate } from "react-router-dom";


const cardData = [
  "Powering The Future of Agriculture With Bioenergy",
  "High Energy Yield From Green Crops",
  "Silage Preparation A Key Step Before Biogas Production",
  "High Load Reactor Advance Biogas Technology For Napier Grass",
  "GD Planets High Load Reactor Efficient Biogas Solution For Napier Grass",
  "Raw Material Potential",
  "Biogas Plant Charactersticks",
  "Working Principle",
  "Technological",
  "Main equitpment",
  "Specification List",
  "Appendices",
];


const CardsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
   const navigate = useNavigate();

  const handleCardClick = (index) => {
  // FIRST CARD ONLY
  if (index === 0) {
    navigate("/biogas#index1");
  }
   if (index === 1) {
      navigate("/biogas#index2");
    }
     if (index === 2) {
      navigate("/biogas#index3");
    }
      if (index === 3) {
      navigate("/biogas#index4");
    }
      if (index === 4) {
      navigate("/biogas#index5");
    }
     if (index === 5) {
      navigate("/biogas#index6");
    }
     if (index === 6) {
      navigate("/biogas#index7");
    }
     if (index === 7) {
      navigate("/biogas#index8");
    }
    if (index === 8) {
      navigate("/biogas#index9");
    }
    if (index === 9) {
      navigate("/biogas#index10");
    }
};


  return (
    <div className="cards-wrapper">
      {cardData.map((title, index) => (
        <div
          key={index}
          className={`card ${activeIndex === index ? "active" : ""}`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          onClick={() => handleCardClick(index)}
        >
          {/* Number */}
          {activeIndex === index && (
            <div className="card-number">
              {String(index + 1).padStart(2, "0")}
            </div>
          )}

          <h3>{title}</h3>

          {activeIndex === index && (
            <div className="arrow-circle"><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#FFFFFF"><path d="M480-345 240-585l56-56 184 183 184-183 56 56-240 240Z"/></svg></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardsSection;
