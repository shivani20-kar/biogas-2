import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/CareergdSection.css";

export default function CareergdSection() {
  return (
    <section className="careergd-wrapper">
      <div className="careergd-left">
        <h1 className="careergd-title">
          With GD, you can seize <br />
          the opportunity to <br />
          create a custom-made <br />
          career.
        </h1>

        <div className="careergd-link-wrapper">
          <a href="#" className="careergd-link">
            Look up all the open position
          </a>
          <div className="careergd-arrow-btn">→</div>
        </div>
      </div>

      <div className="careergd-right">
        <p className="careergd-para">
          We want to create a work culture where everyone feels responsible for
          their own growth. Our aim is to encourage people to explore new
          opportunities within our Group, in India and abroad, by working on
          diverse projects — even those that involve collaboration across
          different locations and teams.
        </p>

        <p className="careergd-para">
          Our work environment is young, open, and informal. We encourage
          everyone to collaborate and contribute their ideas. With advanced
          technology and plenty of opportunities to grow, GD becomes a place
          where creativity and innovation can truly flourish.
        </p>
      </div>
    </section>
  );
}
