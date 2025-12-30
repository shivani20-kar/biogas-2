import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ FarmersSection.css";
import farmersImg from "../Components/IMAGES/sippakorn-yamkasikorn-_dpxwkqkl7q-unsplash_south_asia_lady_cows-1440x596-1 1.png";

const FarmersSection = () => {
  return (
    <div className="farmers-section">
      {/* BACKGROUND GRAY BOXES */}
      <div className="gray-box top-box"></div>
      <div className="gray-box bottom-box"></div>

      {/* LEFT SIDE TEXT */}
      <div className="text-box">
        <p className="line">In short,</p>

        <p className="line highlight">
          <span className="red">DIGNITY</span> <span className="whitecolor">TO</span>
          <br />
          <span className="black">THE FAR</span> <span className="whitecolor">MERS</span>
        </p>

        <p className="line2">
          which, <br /> rightfully, is <br /> theirs.
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="image-box">
        <div className="gray-box"></div>
        <img src={farmersImg} alt="Farmer" />
      </div>
    </div>
  );
};

export default FarmersSection;
