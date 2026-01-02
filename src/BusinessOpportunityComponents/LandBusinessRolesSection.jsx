import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/LandBusinessRolesSection.css";

export default function LandBusinessRolesSection() {
  return (
    <section className="land-business-roles-wrapper">
      {/* ---------- TOP BULLET POINTS ---------- */}
      <div className="land-top-points">
        <ul>
          <li>
            GDBIOGAS , India's Leading Sustainable Energy organization is
            welcoming proposals for Co-Ownership or land selling.
          </li>

          <li>
            If you are interested in registering as a Business Associate,
            Dealer, Distributor, Supplier, Co-Owner, Agency, Service Provider
            with us, please fill the form and upload your proposal Below.
          </li>
        </ul>
      </div>

      {/* ---------- 4 CARDS GRID ---------- */}
      <div className="land-roles-grid">
        {/* ---- CARD 1 ---- */}
        <div className="land-role-card land-role-red">
          <div className="land-role-inner-border">
            <h3 className="land-role-title">The Role :</h3>
            <p className="land-role-text">
              Inviting Co-Owners and Land Partners for GD Gramshakti.
            </p>
          </div>
        </div>

        {/* ---- CARD 2 ---- */}
        <div className="land-role-card land-role-yellow">
          <div className="land-role-inner-border">
            <h3 className="land-role-title">The Vibe :</h3>
              <p className="land-role-text">
                Trustworthy, future-ready, and farmer-focused.<br/>
             
                Empowering rural communities with transparent collaboration.<br/>
            
                Driven by innovation, sustainability, and long-term growth.
              </p>
          </div>
        </div>
 
        {/* ---- CARD 3 ---- */}
        <div className="land-role-card land-role-blue">
          <div className="land-role-inner-border">
            <h3 className="land-role-title">The Goal :</h3>
            <p className="land-role-text">
              To create smart, zero-pollution energy villages across India.
            </p>
          </div>
        </div>

        {/* ---- CARD 4 ---- */}
        <div className="land-role-card land-role-orange">
          <div className="land-role-inner-border">
            <h3 className="land-role-title">You Are :</h3>
            <p className="land-role-text">
              A valued partner contributing land or co-ownership to build
              sustainable village infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
