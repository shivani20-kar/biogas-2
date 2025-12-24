import React from "react";
import "./CSS/Index10Fourteen.css";
import plantImg from "./waterSupplyimg.png";

const WaterSupplySewerage = () => {
  return (
    <div className="ws-wrapper">
      {/* LEFT CONTENT */}
      <div className="ws-left">
        <div className="ws-header">
          <h1 className="ws-section-number">14</h1>
          <h2 className="ws-section-title">
            Water Supply and Sewerage System (WS-01)
          </h2>
        </div>

        <p className="ws-description">
          The <strong>Water Supply and Sewerage System</strong> is a critical
          infrastructure component of the{" "}
          <strong>GD Planet Biogas Facility</strong>, designed to ensure
          efficient management of clean and wastewater across the entire plant.
        </p>

        <p className="ws-description">
          This system supports <strong>biogas production processes</strong>,
          <strong> domestic water distribution</strong>, and
          <strong> fire safety operations</strong> through a fully integrated
          and automated network.
        </p>

        <h5 className="ws-subheading">The water supply system delivers:</h5>
        <ul className="ws-list">
          <li>
            <strong>Feed water</strong> for biogas plant operations
          </li>
          <li>
            <strong>Process water</strong> for cooling and auxiliary systems
          </li>
          <li>
            <strong>Domestic water</strong> for sanitation and utility areas
          </li>
          <li>
            <strong>Emergency water</strong> for the fire protection network
          </li>
        </ul>

        <p className="ws-description">
          At the core of the system are{" "}
          <strong>centrifugal single-stage pumps</strong>, which serve as the{" "}
          <strong>main pumping units.</strong> These pumps are engineered for
          high reliability and are capable of handling{" "}
          <strong>wastewater, domestic water, and sewage</strong> efficiently.
        </p>

        <p className="ws-description">
          The <strong>Pressure Boosting System</strong> ensures a{" "}
          <strong>stable and continuous water supply</strong> for all industrial
          and operational needs. It typically consists of{" "}
          <strong>two or three pumps connected in parallel,</strong> mounted on
          a <strong>common base frame,</strong> and integrated with{" "}
          <strong>control panels, valves, and protective fittings.</strong>
        </p>

        <p className="ws-description">
          This intelligent pumping configuration enables{" "}
          <strong>
            automatic load distribution, energy-efficient operation,
          </strong>{" "}
          and redundancy to prevent downtime.
        </p>

        <p className="ws-description">
          Overall, the{" "}
          <strong>GD Planet Water Supply and Sewerage System</strong> ensures{" "}
          <strong>
            consistent water quality, optimal pressure levels, and effective
            wastewater handling,
          </strong>{" "}
          maintaining environmental standards and operational safety across the
          biogas facility.
        </p>

        <div className="specs">
          <h5>Specifications</h5>

          <p>
            Drain pump
            <span>Equipment</span>
          </p>

          <p>
            Pressure 4 m Flow
            <span> Pump case control</span>
          </p>

          <p>
            2-3 m3 / h Engine
            <span>Stove-base gauges </span>
          </p>

          <p>
            24 kW
            <span>Check valves</span>
          </p>

          <p className="spec-sub">
            <span>Float switches</span>
          </p>

          <p className="spec-sub">
            <span>Brackets</span>
          </p>

          <p className="spec-sub">
            <span>Valves</span>
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="ws-right">
        <img src={plantImg} alt="Water Supply and Sewerage System" />
      </div>
    </div>
  );
};

export default WaterSupplySewerage;
