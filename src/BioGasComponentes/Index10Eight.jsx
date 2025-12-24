import React from "react";
import "./CSS/Index10Eight.css";
import separatorImg from "./Frame 2087327526.png"; 

const Separator = () => {
  return (
    <div className="separator-wrapper">
      {/* LEFT CONTENT */}
      <div className="separator-left">
        <div className="separator-number">
            <h1>08 </h1>

        <h2 className="separator-title">
          Separator (SR-01, SR-02)
        </h2>
        </div>

        <h4>Advanced Press Screw Separation for Solid-Liquid Processing</h4>
        <p>
          The <strong>GD Planet Press Screw Separator (models SR-01 and SR-02) is an 
            advanced solid–liquid separation system </strong>engineered for a wide range of
             industrial and agricultural applications — including<strong> biogas, bioethanol, and organic waste processing plants.</strong>
              Its innovative screw-press technology efficiently divides raw substrates into<strong> solid and liquid fractions,</strong>
               optimizing the feedstock for downstream processes such as digestion, composting, or nutrient recovery.
        </p>

        <h4>High-Performance Separation Technology</h4>
        <p>
The system operates by pressing the substrate through <strong> precision-engineered slotted screens </strong>
that separate solid particles from the liquid phase. As the solids accumulate, they form a <strong>natural filter layer, </strong>
which further enhances fine particle separation. This <strong>self-regulating filtration process </strong>ensures high separation efficiency and consistent output quality.
        </p>

        <h4>Adaptable to Various Feedstock Types</h4>
        <p>
The Press Screw Separator is designed to <strong>handle substrates with varying dry matter contents,</strong>
 including <strong>thick slurries up to 20% dry matter. </strong>
 Different slotted screen sizes and configurations allow for <strong>flexible adjustment </strong>
 to material composition, fiber length, and solid concentration. This adaptability makes it suitable for diverse biogas
  feedstocks such as<strong> manure, Napier grass digestate, and agro-industrial residues.</strong>
        </p>

        <h4>Key Features</h4>
        <ul>
          <li>Efficient<strong> solid-liquid separation</strong> for biogas, bioethanol and agricultural processes</li>
          <li>Handles substrates with up to<strong> 20% dry matter content</strong></li>
          <li><strong>Self-cleaning slotted screen design</strong> prevents clogging and ensures smooth operation.</li>
          <li><strong>Adjustable outlet regulator</strong> for customizable solid consistency</li>
          <li><strong>High-quality auger system</strong> for continuous and uniform solids discharge</li>
          <li><strong>Low maintanace and energy efficient </strong> operation</li>
          <li> Constructed from <strong>corrosion-resistant materials </strong>for long-term durability</li>
        </ul>

        <h3>Specifications</h3>
        <div className="specs">
          <p><span>Engine power</span><span>5.5 kW</span></p>
          <p><span>Flow rate</span><span>5–12 m³/h</span></p>
          <p><span>Quantity</span><span>2 pcs</span></p>
           <p><span>Equipment</span></p>
            <p><span>Frame</span></p>
             <p><span>Screw</span></p>
              <p><span>Sieve for the filtration Counterweights</span></p>
              <p><span>The design of the protective room</span></p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="separator-right">
        <img src={separatorImg} alt="Separator Machine" />
      </div>
    </div>
  );
};

export default Separator;
