import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ProposalSection.css";

export default function ProposalSection() {
  return (
    <div className="proposal-section">
      <div className="proposalinner-section">
        <p className="proposal-text">
          I believe that this initiative can transform rural India and
          contribute significantly to the country's economic growth. I would be
          honored to discuss this proposal in further detail and explore
          possibilities for collaboration.
        </p>

        <p className="proposal-thanks">
          Thank you for considering our proposal.
        </p>

        <p className="proposal-sincerely">Sincerely,</p>

        <div className="signature-box">
          <div className="signature-line-top"></div>

          <div className="signature-content">
            <p>Girish Vitthal Dhumal</p>
            <p>Founder Director, GDBIOGAS PVT LTD</p>
            <p>Satara, Maharashtra 415001</p>
            <p>info.gdbiogas@gmail.com</p>
            <p>www.gdbiogas.com</p>
          </div>

          {/* <div className="signature-line-bottom"></div> */}
          <div className="red-border"></div>
        </div>
      </div>
    </div>
  );
}
