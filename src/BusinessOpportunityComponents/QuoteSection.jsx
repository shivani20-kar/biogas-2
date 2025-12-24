import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/QuoteSection.css";

// IMPORT YOUR QUOTE IMAGE HERE
import quoteImg from "../Components/IMAGES/white“ (1).png";

export default function QuoteSection() {
  return (
    <section className="quote-wrapper">
      {/* LEFT RED BLOCK */}
      <div className="quoteinner-wrapper">
        <div className="quote-left">
          <img src={quoteImg} alt="quote" className="quote-img" />

          <h2 className="quote-number">25</h2>

          <p className="quote-text">
            Champions <br /> per Village.
          </p>
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div className="quote-right">
        <p className="quote-righttext">Your Ambition.
          <br />
        Our Platform.
          <br />
        Let's Grow.</p>
      </div>
    </section>
  );
}
