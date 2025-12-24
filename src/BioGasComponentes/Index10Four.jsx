import React from "react";
import "./CSS/Index10Four.css";
import reactorImg from "./Frame 2087327530.png"; 

const ReactorSection = () => {
  return (
    <div className="reactor-wrapper">
      {/* LEFT CONTENT */}
      <div className="reactor-left">
        <div className="reactor-no">
        <h1>04</h1>
        <h2 className="reactor-title">
          Reactor (R-01 & R-02)
        </h2>
        </div>

        <h4 className="reactor-subtitle">
          The Heart of the Biogas Production Process
        </h4>

        <p>
         The <strong>GD Planet Reactor (R-01 & R-02) </strong>is the central component of the 
         biogas production system, designed for <strong>optimal anaerobic fermentation </strong>of organic materials such as Napier grass, manure, and other renewable substrates. </p>

        <p>
          Engineered with<strong> precision, durability, and efficiency,</strong> the reactor
          ensures the perfect environment for continuous and stable <strong> biogas
          generation under thermophilic conditions.</strong>
        </p>

        <h4>Structural Design and Construction</h4>
        <p>
The reactor is constructed as a <strong> cylindrical reinforced concrete tank,</strong> a shape specifically chosen to ensure <strong>uniform mixing</strong> and <strong>optimal biological activity </strong>during fermentation.</p>
        <ul>
          <li>
            <strong>Material:</strong> Cast-in-situ reinforced concrete made
            using sulphate-resistant cement, ensuring exceptional resistance to chemical corrosion and long-term durability.
          </li>
          <li>
            <strong>Wall and Base Thickness:</strong> 250 mm, providing structural strength and stability under continuous operation.
          </li>
          <li>
            <strong>Internal Support:</strong> A central reinforced column with a cap structure support the concrete roof slab, enchancing load distrivution and durability.
          </li>
        </ul>

        <h4>Heating and Temperature Control</h4>
        <p>
To maintain the ideal temperature for<strong> thermophilic digestion (+52°C),</strong> the reactor is equipped with an <strong>integrated heating system:</strong></p>
        <ul>
          <li>
            <strong>Internal Heating Pipelines:</strong> Installed at the bottom and
            walls of the reactor to ensure even heat distribution.
          </li>
          <li>
            <strong>Temperature Stability:</strong> Enables consistent fermentation, maximizing biogas yeild and process efficiency.
          </li>
        </ul>

        <h4>Thermal Insulation and Energy Efficiency</h4>
        <p>
Energy efficiency is a key design feature of GD Planet’s reactors. The structure is <strong>thermally insulated </strong>to minimize heat loss and reduce energy consumption:</p>
        <ul>
          <li>
            <strong>Insulation Material:</strong> 100 mm extruded polystyrene foam (XPS) panels applied externally to the walls, roof and base.
          </li>
          <li>
            <strong>Moisture Protection:</strong> Roll-type damp-proofing membranes are added over the insulation layers to prevent water ingress.
          </li>
           <li>
            <strong>Protective Cladding:</strong> The insulation is shielded by shaped metal sheeting that safeguards against mechanical damage and rodent activity.
          </li>
        </ul>

        <h5>Specifications for the Napier grass 33% total solid</h5>
        <div className="spec-grid">
          <p>Height <span>8.0 m</span></p>
          <p>Diameter <span>26.0 m</span></p>
          <p>Total volume <span>4245 m³</span></p>
          <p>Usable volume <span>3979 m³</span></p>
          <p>Quantity <span>2 pcs</span></p>
        </div>
         <h5>Specifications for the Napier grass 27% total solid</h5>
        <div className="spec-grid">
          <p>Height <span>8.0 m</span></p>
          <p>Diameter <span>29.0 m</span></p>
          <p>Total volume <span>5284 m³</span></p>
          <p>Usable volume <span>4951 m³</span></p>
          <p>Quantity <span>2 pcs</span></p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="reactor-right">
        <img src={reactorImg} alt="Reactor" />
      </div>
    </div>
  );
};

export default ReactorSection;
