import React from "react";
import "./CSS/Index10Fifteen.css";
import heatingImg from "./Heating System.png";

const HeatingSystem = () => {
  return (
    <div className="heating-wrapper">
      {/* LEFT IMAGE AREA */}
      <div className="heating-image-box">
        <img src={heatingImg} alt="Heating System" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="heating-content">
        <div className="heating-number">
          <h1>15</h1>
          <h2>Heating System (HT-01)</h2>
        </div>

        <p>
          The <strong>Heating System</strong> is an essential component of the{" "}
          <strong>biogas plant</strong>, designed to maintain a{" "}
          <strong>stable and optimal temperature</strong> within the{" "}
          <strong>fermenter</strong> to ensure efficient microbial activity and
          continuous biogas production.
        </p>

        <p>
          This system ensures <strong>uniform heat distribution</strong>{" "}
          throughout the plant using a combination of{" "}
          <strong>advanced thermal equipment</strong> and{" "}
          <strong>automated control mechanisms.</strong>
        </p>

        <h6 className="heating-setup">The heating setup comprises:</h6>

        <ul>
          <li>
            <strong>Circulation pumps</strong> for consistent heat transfer.
          </li>
          <li>
            <strong>High-efficiency heat exchangers</strong> for thermal energy
            exchange between the boiler and the process fluid.
          </li>
          <li>
            <strong>Heating manifolds and insulated pipelines</strong> for even
            temperature regulation across the system.
          </li>
        </ul>

        <p>
          The <strong>boiler</strong> generates heat, which is transferred to
          the <strong>heat carrier fluid</strong> (a water–ethylene glycol
          mixture) through the <strong>heat exchanger.</strong> The{" "}
          <strong>circulation pumps</strong> distribute the heated fluid
          throughout the fermenter circuit.
        </p>

        <p>
          The system maintains a{" "}
          <strong>fermenter inlet temperature of ~60°C</strong> and an{" "}
          <strong>outlet temperature of 40°C</strong>, ensuring optimum
          fermentation efficiency and biogas yield.
        </p>

        <p>
          Engineered for{" "}
          <strong>
            durability, energy efficiency, and operational reliability
          </strong>
          , the <strong>Heating System</strong> sustains the{" "}
          <strong>biological stability and productivity</strong> of the biogas
          plant.
        </p>

        {/* SPECIFICATIONS */}
        <div className="heating-specs">
          <h5 className="heating-spec-title">Specifications</h5>

          {/* 1 */}
          <h6 className="heating-spec-heading">
            Circulating pump feeding heat carrier heating
          </h6>
          <div className="heating-spec-row">
            <span>Flow</span>
            <span>30 m³ / h</span>
          </div>
          <div className="heating-spec-row">
            <span>Pressure</span>
            <span>1 bar</span>
          </div>

          {/* 2 */}
          <h6 className="heating-spec-heading">
            Circulating pump feeding heat carrier to the digester
          </h6>
          <div className="heating-spec-row">
            <span>Flow</span>
            <span>18 m³ / h</span>
          </div>
          <div className="heating-spec-row">
            <span>Pressure</span>
            <span>1.1 bar</span>
          </div>

          {/* 3 */}
          <h6 className="heating-spec-heading">
            The pumping station feeding propylene glycol
          </h6>
          <div className="heating-spec-row">
            <span>Flow</span>
            <span>0.8 m³ / h</span>
          </div>
          <div className="heating-spec-row">
            <span>Pressure</span>
            <span>4 bar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatingSystem;
