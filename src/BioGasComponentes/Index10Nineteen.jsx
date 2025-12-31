import React from "react";
import "./CSS/Index10Nineteen.css";
import laboratoryImg from "./laboratorysystemimg.png";

const LaboratorySystem = () => {
  return (
    <div className="laboratorysystem-wrapper">
      {/* LEFT IMAGE AREA */}
      <div className="laboratorysystem-image-box">
        <img
          src={laboratoryImg}
          alt="Laboratory and Process Monitoring System"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="laboratorysystem-content">
        <div className="laboratorysystem-number">
          <h1>19</h1>
          <h2>Laboratory and Process Monitoring System</h2>
        </div>

        <p>
          The <strong>laboratory</strong> plays a vital role in ensuring the{" "}
          <strong>efficient and stable operation</strong> of the biogas plant by
          enabling continuous{" "}
          <strong>monitoring, testing, and optimization</strong> of both raw
          materials and fermentation processes.
        </p>

        <p>
          <strong>
            Equipped with advanced analytical instruments, the laboratory
            facilitates:
          </strong>
        </p>

        <ul>
          <li>
            <strong>Analysis of dry matter content</strong> in incoming raw
            materials and fermented mass to maintain optimal feedstock balance.
          </li>
          <li>
            <strong>Evaluation of the FOS/TAC ratio</strong> (volatile organic
            acids to total inorganic carbon), a key indicator of fermentation
            stability and process health.
          </li>
          <li>
            <strong>Assessment of substrate degradation efficiency</strong>{" "}
            within fermenters to determine the degree of organic matter
            conversion.
          </li>
          <li>
            <strong>Measurement of biogas yield and quality</strong>, ensuring
            consistent methane concentration and energy performance.
          </li>
          <li>
            <strong>Performance evaluation of the separator system</strong>,
            verifying effective solid–liquid separation and process
            optimization.
          </li>
        </ul>

        <p>
          By maintaining strict laboratory control, the biogas plant achieves{" "}
          <strong>
            maximum process efficiency, operational safety, and energy output
          </strong>
          , while ensuring <strong>long-term reliability</strong> and{" "}
          <strong>environmental compliance</strong>.
        </p>

        <div className="laboratorysystem-specs">
          <h5 className="laboratorysystem-spec-title">Specifications</h5>
          <p>Analytical scales</p>
          <p>Moisture analyzer</p>
          <p>Automatic titrator</p>
          <p>Laboratory pH meter</p>
          <p>Centrifuge</p>
          <p>A set of flasks</p>
        </div>
      </div>
    </div>
  );
};

export default LaboratorySystem;
