import React from "react";
import "../Components/Css/FarmerDignitySection.css";
import farmerImage from "../Components/IMAGES/farmerdignity.jpg";
import quoteMark from "../Components/IMAGES/Arrows.png"; 

const FarmerDignitySection = () => {
  return (
    <section className="farmer-dignity">
      {/* TOP IMAGE */}
      <div
        className="farmer-dignity__hero"
        style={{ backgroundImage: `url(${farmerImage})` }}
      >
        <div className="farmer-dignity__overlay" />

        <div className="farmer-dignity__hero-content">
          <h2>Dignity to the Farmer</h2>
          <p>
            Empowering Rural Hands with <br />
            Technology, Partnership & Respect
          </p>
        </div>
      </div>

      {/* BOTTOM BLUE STRIP */}
      <div className="farmer-dignity__bottom">
        <div className="farmer-dignity__quote">
          <div className="quote-mark">
            <img src={quoteMark} alt="Quote Mark" />
          </div>

          <p>
            When <br />
            farmers prosper, <br />
            rural India rises.
          </p>
        </div>

        <div className="farmer-dignity__description">
          <p>
            We believe farmers are not just producers — they are partners in nation-building. Through state-of-the-art technology and long-term partnerships, we enable rural farmers to earn stable, dignified incomes from energy crops, biochar, organic and vertical farming, dairy and milking systems, and high-value agri-products.
          </p>

          <p>
          By integrating sustainable energy, modern farming practices, and assured market linkages, we transform agriculture into a resilient, profitable, and future-ready livelihood. This is our commitment to restoring the dignity, independence, and rightful respect of every farmer — not as beneficiaries, but as stakeholders in growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FarmerDignitySection;
