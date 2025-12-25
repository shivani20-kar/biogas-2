import React from "react";
import "./CSS/Index10Sixteen.css";
import drycoolerImg from "./drycoolerimg.png";

const DryCooler = () => {
  return (
    <section className="drycooler-wrapper">
      {/* LEFT CONTENT */}
      <div className="drycooler-left">
        <div className="drycooler-heading">
          <span className="drycooler-number">16</span>
          <h2>Dry Cooler (Cooling Substrate System)</h2>
        </div>

        <p className="drycooler-description">
          The <strong>Dry Cooler</strong> is an integral part of the{" "}
          <strong>biogas plant’s thermal management system,</strong> designed to
          regulate and maintain the <strong>substrate temperature</strong>{" "}
          within the optimal operational range as defined by the{" "}
          <strong>technological process parameters.</strong>
        </p>

        <p className="drycooler-description">
          When the substrate temperature rises beyond the desired level —
          particularly during high-temperature feedstock operations — there is a
          risk of <strong>uncontrolled thermal buildup</strong> that can
          negatively impact microbial activity and process efficiency.
        </p>

        <p className="drycooler-description">
          To prevent this, the <strong>Dry Cooler</strong> automatically
          activates to <strong>dissipate excess heat,</strong> ensuring stable
          fermentation conditions. It is seamlessly integrated with the plant’s{" "}
          <strong>
            heating network, circulation system, and heat exchangers,
          </strong>{" "}
          enabling efficient thermal balancing across all process stages.
        </p>

        <p className="drycooler-description">
          This <strong>air-cooled system</strong> operates with high reliability
          and minimal energy consumption, providing{" "}
          <strong>
            precise temperature control, protection against overheating,
          </strong>{" "}
          and <strong>enhanced operational safety</strong> for continuous biogas
          production.
        </p>

        <div className="drycooler-specs">
          <h5>Specifications</h5>
          <p>
            Power (cooling) <span>100 kW</span>
          </p>
          <p>
            Length: <span>3,0 m</span>
          </p>
          <p>
            Width: <span>2,5 m</span>
          </p>
          <p>
            Height: <span>1,5 m</span>
          </p>
          <p>
            Power electrical <span>4 kW</span>
          </p>
          <p>
            Quantity: <span>2 pcs</span>
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="drycooler-right">
        <img src={drycoolerImg} alt="Dry Cooler System" />
      </div>
    </section>
  );
};

export default DryCooler;
