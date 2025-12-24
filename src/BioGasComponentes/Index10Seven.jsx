import React from "react";
import "./CSS/Index10Seven.css";
import pumpImg from "./Frame 2087327525 (1).png";

const PumpEquipment = () => {
  return (
    <section className="pump-section">
      {/* LEFT IMAGE */}
      <div className="pump-left">
        <img src={pumpImg} alt="Pump Equipment" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="pump-right">
        <div className="pump-number">
          <h1>07</h1>

        <h2 className="pump-title">
          Pump Equipment (PU-01, PU-02, PU-03, PU-04)
        </h2>
        </div>

        <h4 className="pump-subtitle">
          Efficient and Reliable Substrate Transfer System
        </h4>

        <p>
          The <syrong>GD Planet Pump System (models PU-01 to PU-04)</syrong> is designed for the
         <syrong> efficient transfer of substrates </syrong>throughout the biogas plant—ensuring smooth
          material flow between reactors, tanks, and other process units.
        </p>

        <p>
          Each pump is engineered for <syrong>durability, performance, and easy
          maintenance,</syrong> forming a critical part of the plant’s continuous
          operation cycle.
        </p>

        <h5>Optimized Design for High Performance</h5>
        <p>
          Every pump in the GD Planet series is powered by a <strong>helical geared motor,</strong>
          providing <strong>high torque, low energy consumption,</strong> and reliable
          performance under demanding biogas conditions. The <strong>stator features a hopper-style inlet,</strong> enabling optimal feeding of thick or fibrous substrates into the pumping chamber, minimizing blockages and ensuring consistent flow.
        </p>

        <h5>Built for Durability and Easy Maintenance</h5>
        <p>
         The pump’s design includes a <strong> wear-protected universal joint </strong> with an integrated feeding screw and a <strong>robust bearing pedestal </strong>that supports the close-coupled drive system. 
         The <strong>self-centering drive shaft</strong> enhances alignment, reduces vibration, and extends operational life.
          Each pump is positioned for<strong> easy accessibility,</strong> allowing operators to perform inspections, servicing, or replacement without disrupting plant operations. </p>

        <h5 className="spec-heading">Specifications</h5>

        <div className="spec-block">
          <h6>Substrate pump to separator (PU-01, PU-02)</h6>
          <p><span>Flow rate</span> 30 m³/hour</p>
          <p><span>Engine power</span> 7.5 kW</p>
          <p><span>Pressure</span> 4 bar</p>
          <p><span>Quantity</span> 2 pcs</p>
        </div>

        <div className="spec-block">
          <h6>Liquid substrate pump (PU-03)</h6>
          <p><span>Flow rate</span> 30 m³/hour</p>
          <p><span>Engine power</span> 7.5 kW</p>
          <p><span>Pressure</span> 4 bar</p>
          <p><span>Quantity</span> 1 pc</p>
        </div>

        <div className="spec-block">
          <h6>Filtrate pump (PU-04)</h6>
          <p><span>Flow rate</span> 30 m³/hour</p>
          <p><span>Engine power</span> 7.5 kW</p>
          <p><span>Pressure</span> 4 bar</p>
          <p><span>Quantity</span> 1 pc</p>
        </div>
      </div>
    </section>
  );
};

export default PumpEquipment;
