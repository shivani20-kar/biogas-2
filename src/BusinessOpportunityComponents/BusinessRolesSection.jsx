import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/BusinessRolesSection.css";

export default function BusinessRolesSection() {
  return (
    <section className="business-roles-wrapper">
      
      {/* ---------- TOP BULLET POINTS ---------- */}
      <div className="top-points">
        <ul>
          <li>
            GDBIOGAS, India's Leading Sustainable Energy organization is
            welcoming proposals.
          </li>

          <li>
            If you are interested in registering as a Business Associate,
            Dealer, Distributor, Supplier, Co-Owner, Agency, Service Provider
            with us, please fill the form and upload your proposal here – 
            only pdf, docx, doc.
          </li>
        </ul>
      </div>

      {/* ---------- 4 CARDS GRID ---------- */}
      <div className="roles-grid">

        {/* ---- CARD 1 ---- */}
        <div className="role-card role-red">
          <div className="role-inner-border">
            <h3 className="role-title">The Role :</h3>
            <p className="role-text">
             We aren't only looking for employees, dealers, or middlemen. We are looking for Growth Partners ready to co-own their territory.
            </p>
          </div>
        </div>

        {/* ---- CARD 2 ---- */}
        <div className="role-card role-yellow">
          <div className="role-inner-border">
            <h3 className="role-title">The Vibe :</h3>
            <ul className="role-list">
              <li>
                <b>Own It:</b> You run the show in your area. You are the agency.
              </li>
              <li>
                <b>Scale It:</b> No caps on revenue. The more you build, 
                the more you earn.
              </li>
              <li>
                <b>Collaborate:</b> You get full access to our infrastructure,
                supply chain, and branding.
              </li>
            </ul>
          </div>
        </div>

        {/* ---- CARD 3 ---- */}
        <div className="role-card role-blue">
          <div className="role-inner-border">
            <h3 className="role-title">The Goal :</h3>
            <p className="role-text">
             We provide the product/service. You provide the hustle. We both win.
            </p>
          </div>
        </div>

        {/* ---- CARD 4 ---- */}
        <div className="role-card role-orange">
          <div className="role-inner-border">
            <h3 className="role-title">You Are :</h3>
            <p className="role-text">
             A networker, a creator, and someone who wants the freedom of a founder with the backing of an established brand.
            </p> 
          </div> 
        </div>

      </div>

    </section>
  );
}
