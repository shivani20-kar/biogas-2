import React from "react";
import "./CSS/Index10Eighteen.css";
import sensorsystemImg from "./sensorsystemimg.png";

const SensorSystem = () => {
  return (
    <section className="sensorsystem-wrapper">
      {/* LEFT CONTENT */}
      <div className="sensorsystem-left">
        <div className="sensorsystem-heading">
          <span className="sensorsystem-number">18</span>
          <h2>Sensor System</h2>
        </div>

        <p className="sensorsystem-description">
          The <strong>sensor system</strong> serves as the foundation for
          accurate data collection and process control within the biogas plant.
          These sensors continuously{" "}
          <strong>monitor key physical parameters</strong> such as{" "}
          <strong>temperature, pressure, and moisture levels,</strong> ensuring
          stable and efficient plant performance.
        </p>

        <p className="sensorsystem-description">
          Each sensor is precisely calibrated to deliver{" "}
          <strong>highly reliable and real-time measurements,</strong> which are
          transmitted directly to the central automation unit for analysis and
          control adjustments. This enables the system to maintain{" "}
          <strong>optimal fermentation conditions,</strong> enhance safety, and
          reduce operational inefficiencies.
        </p>

        <p className="sensorsystem-description">
          The sensor network is supplied with{" "}
          <strong>complete installation kits,</strong> including all necessary
          fittings, mounting accessories, and protective housings to ensure{" "}
          <strong>
            easy installation, long service life, and resistance to harsh
            environmental conditions.
          </strong>
        </p>

        <div className="sensorsystem-specs">
          <h5>Specifications</h5>
          <p>Conductometric sensor</p>
          <p>Pressure Sensor / level</p>
          <p>Ultrasonic sensor</p>
          <p>Gas Pressure Sensor</p>
          <p>Temperature converters with protective sleeves</p>
          <p>The moisture sensor and the gas temperature</p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="sensorsystem-right">
        <img src={sensorsystemImg} alt="Sensor System" />
      </div>
    </section>
  );
};

export default SensorSystem;
