import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/GDPositionIntro.css";

export default function GDPositionIntro() {
  return (
    <section className="gd-position-wrapper">
      <div className="gd-position-left">
        <h1 className="gd-position-title">
          What does it mean to be <br />
          an Positions in GD ?
        </h1>
      </div>

      <div className="gd-position-right">
        <p className="gd-position-desc">
          Curious about what a career looks like for positions at GD? Want to
          know about daily responsibilities, the skills you need, the tools
          you'll use, and how you can grow in your career?
        </p>

        <p className="gd-position-learn">
          Learn more from the real experiences of our team members!
        </p>
      </div>
    </section>
  );
}
