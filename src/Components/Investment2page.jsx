import React from "react";
import "./Css/Investment2page.css";
import footprint from "./Rectangle 161.png";

const Congratulations = () => {
  return (
    <section
      className="congrats-section"
      style={{ backgroundImage: `url(${footprint})` }}
    >
      <div className="congrats-overlay">
        <div className="congrats-card">
          <div className="congrats-content">
            {/* Left */}
            <div className="left">
              <h2>Congratulations!</h2>
              <p>
                Your decision to invest reflects strong financial discipline,
                as the ability to save consistently is the foundation of
                successful investing.
              </p>
              <p >
                You've taken the first step towards building wealth and
                securing your financial future!
              </p>
            </div>

            {/* Right */}
            <div className="right">
              <p>
                <strong>GDBiogas</strong> emerged as a problem solver for the
                biogas plant industry. We have built turnkey systems,
                developed solutions for problems and increased the
                efficiency of biogas plants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Congratulations;
