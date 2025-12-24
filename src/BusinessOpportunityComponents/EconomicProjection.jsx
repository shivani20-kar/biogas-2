import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/EconomicProjection.css";

import village from "../Components/IMAGES/samrudhVillage.png";
import tahasil from "../Components/IMAGES/samrudhaTahsil.png";
import district from "../Components/IMAGES/samrudhDistrict.png";
import state from "../Components/IMAGES/samrudhaState.png";
import bharat from "../Components/IMAGES/samarudhaBharat.png";

const EconomicProjection = () => {
  return (
    <section className="economic-wrapper">
      <h2 className="economic-title">
        Economic Projections: “One District One Trillion Dollars agro base economy.”
      </h2>

      <div className="economic-grid">

        <div className="eco-card">
          <img src={village} alt="Samrudha Village" className="eco-img" />
          <div className="eco-content">
            <h3 className="eco-heading">Samrudha Village</h3>
            <p>
              800 to 1000 acres area,<br />
              Family Size: 100 to 500 household family<br />
              Turnover: 50 Cr + p.a.
            </p>
          </div>
        </div>

        <div className="eco-card">
          <img src={tahasil} alt="Samrudha Tahasil" className="eco-img" />
          <div className="eco-content">
            <h3 className="eco-heading">Samrudha Tahasil</h3>
            <p>
              150 to 275 villages<br />
              Turnover: 100 Cr plus
            </p>
          </div>
        </div>

        <div className="eco-card">
          <img src={district} alt="Samrudha District" className="eco-img" />
          <div className="eco-content">
            <h3 className="eco-heading">Samrudha District</h3>
            <p>
              10 to 12 Tahasil, Turnover: Approx. 4000 Cr Plus
            </p>
          </div>
        </div>

        <div className="eco-card">
          <img src={state} alt="Samrudha State" className="eco-img" />
          <div className="eco-content">
            <h3 className="eco-heading">Samrudha State</h3>
            <p>
              30 plus Districts, Turnover: approx. 1,20,000 Cr plus
            </p>
          </div>
        </div>

        <div className="eco-card">
          <img src={bharat} alt="Samrudha Bharat" className="eco-img" />
          <div className="eco-content">
            <h3 className="eco-heading">Samrudha Bharat</h3>
            <p>
              30 to 40 Trillion dollars turnover only agro-based small-scale
              development under smart village in GD Gram Shakti
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EconomicProjection;
