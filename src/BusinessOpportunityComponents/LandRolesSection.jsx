import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/LandRolesSection.css";

export default function LandRolesSection() {
  return (
    <section className="landroles-wrapper">
      {/* -------- TOP BULLETS -------- */}
      <div className="landroles-top-points">
        <ul>
          <li>
            GDBIOGAS, India's Leading Sustainable Energy organization is
            welcoming proposals for Co-Ownership or land selling.
          </li>

          <li>
            If you are interested in Co-Owner Of GD Gramshakti or Land selling,
            please fill the form and upload your proposal Below.
          </li>
        </ul>
      </div>

      {/* -------- FOUR CARDS -------- */}
      <div className="landroles-cards-grid">
        {/* CARD 1 */}
        <div className="land-card land-card-pink">
          <div className="land-card-border">
            <h3 className="land-card-title">The Role :</h3>
            <p className="land-card-text">
              Inviting Co-Owners and Land Partners for GD Gramshakti.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="land-card land-card-brown">
          <div className="land-card-border">
            <h3 className="land-card-title">The Vibe :</h3>
            <p className="land-card-text">
              Trustworthy, future-ready, and farmer-focused.
              <br />
              Empowering rural communities with transparent collaboration.
              <br />
              Driven by innovation, sustainability, and long-term growth.
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="land-card land-card-blue">
          <div className="land-card-border">
            <h3 className="land-card-title">The Goal :</h3>
            <p className="land-card-text">
              To create smart, zero-pollution energy villages across India.
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="land-card land-card-yellow">
          <div className="land-card-border">
            <h3 className="land-card-title">You Are :</h3>
            <p className="land-card-text">
              A valued partner contributing land or co-ownership to build
              sustainable village infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
