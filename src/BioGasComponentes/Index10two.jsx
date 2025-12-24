import React from "react";
import "./CSS/Index10two.css";
import tankImg from "./Rectangle 61.png"; 

const ReceivingTank = () => {
  return (
    <section className="rt-wrapper">
      <div className="rt-left">
        <div className="rt-number"><h1>02</h1>
        <h2 className="rt-title">Receiving Tank (RT-01) & Filtrate Tank (FT-01)</h2>
         </div>
        <h4 className="rt-subtitle">
          Reliable Storage and Mixing Solutions for Liquid Substrates
        </h4>

        <p className="rt-text">
          At <strong>GD Planet, </strong>the<strong> Receiving Tank (RT-01) </strong>and<strong> Filtrate Tank (FT-01)</strong> are
          designed to ensure efficient handling, storage, and preparation of
          liquid feedstock used in the biogas production process.
        </p>

        <p className="rt-text">
          These tanks serve as <strong> robust reinforced concrete reservoirs </strong>for the
          <strong>collection and temporary storage of liquid raw materials</strong> such as
          slurry, digestate filtrate, or other liquid substrates.
        </p>

        <h4 className="rt-section-title">Key Features and Design Advantages :</h4>
        <ul className="rt-list">
          <li>
            <strong>Reinforced Concrete Construction:</strong> <br/>Built with
            high‑strength reinforced concrete to ensure durability, leak‑proof
            performance, and long service life under continuous operation.
          </li>
          <li>
            <strong>Integrated Mixing System:</strong> <br/>Each tank is equipped
            with submersible agitators that maintain uniform consistency by
            preventing sedimentation and ensuring proper substrate
            homogenization before feeding into the reactor.
          </li>
          <li>
            <strong>Level Monitoring and Automation:</strong><br/> Advanced level
            sensors provide real‑time monitoring of substrate volume, enabling
            automated control and seamless integration with the plant’s central
            process system.
          </li>
        </ul>

        <h4 className="rt-section-titlee">Specifications</h4>
        <div className="rt-specs">
          <div className="spec-block">
            <h5>Receiving tank (RT‑01)</h5>
            <p>Diameter: <span>8.0 m</span></p>
            <p>Height: <span>2.5 m</span></p>
            <p>Total volume: <span>125 m³</span></p>
            <p>Quantity: <span>1 pcs</span></p>
          </div>

          <div className="spec-block">
            <h5>Filtrate tank (FT‑01)</h5>
            <p>Diameter: <span>8.0 m</span></p>
            <p>Height: <span>2.5 m</span></p>
            <p>Total volume: <span>125 m³</span></p>
            <p>Quantity: <span>1 pcs</span></p>
          </div>
        </div>
      </div>

      <div className="rt-right">
        <div className="rt-image-box">
          <img src={tankImg} alt="Receiving Tank" />
        </div>
      </div>
    </section>
  );
};

export default ReceivingTank;
