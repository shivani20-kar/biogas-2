import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ FarmersSection.css";
import farmersImg from "../Components/IMAGES/farmersImg.png";

const FarmersSection = () => {
  return (
    <div className="farmers-section">
      {/* LEFT SIDE TEXT */}
      <div className="text-box">
        <p className="line">In short,</p>

        <p className="line">
          <span className="red">
            DIGN<span className="whitecolor">ITY TO</span>
          </span>{" "}
          <br />
          <span className="black">
            THE <span className="whitecolor">FARMERS</span>
          </span>
        </p>

        <p className="line2">
          which, <br /> rightfully, is <br /> theirs.
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="image-box">
        <img src={farmersImg} alt="farmer" className="farmer-image" />
      </div>
    </div>
  );
};

export default FarmersSection;
