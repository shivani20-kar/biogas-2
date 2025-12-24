import React from "react";
import "./CSS/Index10Thirteen.css";
import flareImg from "./flare System.png";

const FlareSystem = () => {
  return (
    <div className="flare-wrapper">
      {/* LEFT IMAGE AREA */}
      <div className="flare-image-box">
        <img src={flareImg} alt="Flare System" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flare-content">
        <div className="flare-number">
          <h1>13</h1>
          <h2>Flare System (FL-01)</h2>
        </div>

        <h4>Safe and Controlled Combustion System</h4>

        <p>
          The <strong>Flare System (FL-01)</strong> is engineered for the
          <strong> safe and controlled combustion</strong> of excess biogas that
          cannot be utilized for energy generation. It ensures environmental
          safety by converting methane and other combustible gases into less
          harmful compounds through complete combustion.
        </p>

        <p>
          The <strong>flare assembly</strong> includes a{" "}
          <strong>high-efficiency burner</strong> and a series of{" "}
          <strong>control and monitoring components.</strong> The burner
          operates on the principle of gas injection and is equipped with:
        </p>
        <ul>
          <li>
            A <strong>precision combustion nozzle</strong> and{" "}
            <strong>injector system</strong> for consistent gas-air mixing.
          </li>
          <li>
            An <strong>adjustable air supply control mechanism</strong> to
            maintain optimal combustion.
          </li>
          <li>
            A <strong>flame protection tube</strong> to stabilize the flame and
            prevent backflow.
          </li>
          <li>
            A <strong>burner control system</strong> for automatic ignition,
            monitoring, and safety regulation.
          </li>
        </ul>

        <p>
          All major components in contact with biogas are{" "}
          <strong>constructed from stainless steel,</strong> ensuring corrosion
          resistance, durability, and long operational life under harsh
          conditions.
        </p>

        <p>
          The <strong>supporting framework</strong> securely holds the burner
          assembly in a vertical configuration and integrates a{" "}
          <strong>control cabinet.</strong> This control system houses all
          critical elements for{" "}
          <strong>
            ignition management, flame detection, and real-time monitoring,
          </strong>{" "}
          guaranteeing safe operation and compliance with environmental and
          safety standards.
        </p>

        <p>
          This <strong>flare system</strong> provides a{" "}
          <strong>reliable, efficient, and environmentally responsible</strong>{" "}
          solution for managing surplus biogas within the{" "}
          <strong>GD Planet</strong> biogas facility.
        </p>

        <div className="flare-specs">
          <h5 className="flare-spec-title">Specifications</h5>
          <p>
            Flow rate <span>2200 m³/h</span>
          </p>
          <p>
            Quantity <span>1 pcs</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlareSystem;
