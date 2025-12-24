import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/LongLeaseBusinessRolesSection.css";

export default function LongLeaseBusinessRolesSection() {
  return (
    <section className="longlease-business-roles-wrapper">
      {/* ---------- TOP BULLET POINTS ---------- */}
      <div className="longlease-top-points">
        <ul>
          <li>
             GDBIOGAS , India's Leading Sustainable Energy organization is welcoming proposals for Long Lease.
          </li>

          <li>
        If you are interested in Lease to GD Gramshakti please fill the form  and upload your proposal Below.
          </li>
        </ul>
      </div>

      {/* ---------- 4 CARDS GRID ---------- */}
      <div className="longlease-roles-grid">
        {/* ---- CARD 1 ---- */}
        <div className="longlease-role-card longlease-role-red">
          <div className="longlease-role-inner-border">
            <h3 className="longlease-role-title">The Role :</h3>
            <p className="longlease-role-text">
             Inviting Land Owners for Long-Lease Partnerships.
            </p>
          </div>
        </div>

        {/* ---- CARD 2 ---- */}
        <div className="longlease-role-card longlease-role-yellow">
          <div className="longlease-role-inner-border">
            <h3 className="longlease-role-title">The Vibe :</h3>
            <ul className="longlease-role-list">
              <p className="longlease-role-text">
                Transparent, Sustainable, Opportunity-Driven.
              </p>
              <p className="longlease-role-text">
               Future-focused with reliable, long-term commitments.
              </p>
              <p className="longlease-role-text">
                Empowering villages through ethical and inclusive partnerships.
              </p>
            </ul>
          </div>
        </div>

        {/* ---- CARD 3 ---- */}
        <div className="longlease-role-card longlease-role-blue">
          <div className="longlease-role-inner-border">
            <h3 className="longlease-role-title">The Goal :</h3>
            <p className="longlease-role-text">
              To build zero-pollution smart energy villages through long-term land collaboration.
            </p>
          </div>
        </div>

        {/* ---- CARD 4 ---- */}
        <div className="longlease-role-card longlease-role-orange">
          <div className="longlease-role-inner-border">
            <h3 className="longlease-role-title">You Are :</h3>
            <p className="longlease-role-text">
             A valued partner enabling clean energy and rural development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
