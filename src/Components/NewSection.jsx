import React from "react";
import "./NewSection.css";
import greenReturnImg from "./Rectangle 107.png";

const GreenReturnHero = () => {
  return (
    <section className="green-return-hero">
  <div className="green-return-image-box">
    <img src={greenReturnImg} className="green-return-image" />
  </div>

  <div className="green-return-overlay"></div>

  <div className="green-return-container">
    <h1 className="green-return-heading">
      Investors Benefit from <br />
      attractive returns and <br />
      security, through <br />
      renewable raw materials.
    </h1>
  </div>
</section>

  );
};

export default GreenReturnHero;
