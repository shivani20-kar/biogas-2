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
          <div className="careergd-arrow-btn"><svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68" fill="none">
  <path d="M41.5253 28.4797L25.4577 44.5473C25.1567 44.8483 24.8031 44.9987 24.397 44.9984C23.9909 44.9987 23.6374 44.8483 23.3364 44.5473C23.0354 44.2463 22.885 43.8928 22.8852 43.4866C22.885 43.0805 23.0354 42.727 23.3364 42.426L39.404 26.3584L30.0921 26.3584C29.6713 26.3582 29.3213 26.2158 29.042 25.9313C28.7629 25.6466 28.6161 25.2921 28.6015 24.8678C28.6017 24.4292 28.7404 24.064 29.0176 23.7722C29.295 23.4801 29.6532 23.3341 30.0921 23.3341L42.7599 23.3341C43.0248 23.3341 43.2578 23.3804 43.4589 23.473C43.6601 23.5654 43.846 23.6968 44.0164 23.8673C44.1868 24.0377 44.3182 24.2235 44.4106 24.4248C44.5033 24.6259 44.5496 24.8589 44.5496 25.1238L44.5496 37.7916C44.5493 38.2123 44.4034 38.5659 44.1119 38.8523C43.8198 39.1386 43.4545 39.282 43.0159 39.2822C42.5916 39.2676 42.2371 39.1252 41.9524 38.8551C41.6676 38.585 41.5253 38.2305 41.5253 37.7916V28.4797Z" fill="white"/>
</svg></div>
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
