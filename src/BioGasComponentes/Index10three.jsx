import React from "react";
import "./CSS/Index10three.css";
import agitatorImg from "./Frame 2087327525.png"; // replace with your image path

const SubmersibleAgitator = () => {
  return (
    <div className="agitator-wrapper">
      <div className="agitator-left">
        <img src={agitatorImg} alt="Submersible Agitator" />
      </div>

      <div className="agitator-right">
        <div className="agitator-head">
        <h1>03</h1>
        <h2 className="agitator-title">
         Submersible Agitator (AG‑15 & AG‑16)
        </h2>
        </div>

        <h4 className="agitator-subtitle">
          Powerful and Reliable Mixing for Biogas Applications
        </h4>

        <p>
        The GD Planet Submersible Agitator (AG-15, AG-16) is engineered for continuous and efficient mixing of renewable raw materials (RRM) and liquid substrates such as manure, slurry, or agricultural residues within biogas reactors and storage tanks.
        </p>

        <p>
          This high‑performance mixer ensures complete homogenization of
          feedstock, prevents sedimentation, and maintains uniform substrate
          consistency — essential for stable and efficient biogas generation.
        </p>

        <h4>Engineered for Safety and Performance</h4>
        <p>
          The submersible agitator is driven by a robust electric motor designed
          for operation submerged and potentially explosive environments (Zone
          2). Fully compliant with the EU Directive 94/9/EC (ATEX) for early
          explosive atmospheres, ensuring reliable performance even under
          demanding biogas plant conditions.
        </p>

        <h4>Flexible Mounting and Smooth Adjustment</h4>
        <ul>
          <li>
            <strong>Universal Compatibility:</strong> Can be easily mounted on
            most standard sliding mast using the integrated motor support.
          </li>
          <li>
            <strong>4-Roller Guidance System:</strong> Ensures smooth, frictionless
            lifting and lowering of the agitator, even when the hauling cable is
            slightly angled.
          </li>
          <li>
            <strong>Adjustable Configuration:</strong> Compatible with 100x100 mm
          square  sliding masts (standard) or 8080 mm masts with simple roller
            adjustments.
          </li>
          <li>
            <strong>Easy Cable Management:</strong> The strain‑relief of the
            connection cable can be positioned either vertically or in-line with the motor to 
            suit installation needs.
          </li>
        </ul>

        <p>
          This modular and adaptable design allows simple installation, height
          adjustment, and maintenance, making it suitable for a wide range of
          tank configurations.
        </p>

        <h4>Durable Construction and Long Service Life</h4>
        <p>Each component of the AG-15 and AG-16 agitators is built with premium, corrosion-resistant materials for durability in aggressive environments:</p>
        <ul>
          <li>
            <strong>Geared Motor Housing:</strong> Made of spheroidal graphite iron(GGG40) for strength and vibration resistance.
          </li>
         
          <li>
            <strong>Propeller:</strong> Galvanized steel for long-lasting performance.
          </li>
           <li>
            <strong>Motor Support:</strong> Stainless steel for superior
            corrosion protection.
          </li>
        </ul>

        <p>
         The agitator is a sealed monoblock unit, ensuring water pressure-tight performance and minimal maintenance requirements. Its three-blade propeller, driven through a planetary gear system, delivers powerful and efficient mixing even with dense or fibrous substrates.
        </p>

        <h4 className="spec-title">Specifications</h4>
        <div className="spec-grid">
          <div>
            <p>Submersible agitator for the receiving tank (AG‑15)</p>
            <p className="spec-value">Nominal power: N=3.0 kW</p>
            <p className="spec-value">Quantity: 1 pcs</p>
          </div>
          <div>
            <p>Submersible agitator of the filtrate tank (AG‑16)</p>
            <p className="spec-value">Nominal power: N=3.0 kW</p>
            <p className="spec-value">Quantity: 1 pcs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmersibleAgitator;
