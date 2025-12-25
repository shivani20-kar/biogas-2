import React from "react";
import "./CSS/Index10Twel.css";
import plantImg from "./Frame 2087327530 (2).png";

const Desulphurization = () => {
  return (
    <div className="desul-wrapper">
      {/* Left Content */} 
      <div className="desul-left">
        <div className="section-number"> 
            <h1>12</h1>
        <h2 className="section-title">Desulphurization System</h2>
        </div>

        <h4 className="section-subtitle">
          Three-Stage Hydrogen Sulfide (H₂S) Removal for Clean Biogas
        </h4>
 
        <p>
          The <strong>GD Planet Desulphurization System </strong>is designed to efficiently
         <strong> remove hydrogen sulfide (H₂S) </strong>from biogas through a <strong>three-stage
          purification process,</strong> ensuring gas purity and long-term protection
          of downstream equipment.
        </p>

        <p>
          This system combines chemical,<strong> biological, and adsorptive-based
          treatments </strong>to achieve optimal sulfur reduction and enhance biogas
          quality for upgrading or combustion.
        </p>

        <h5>Stage 1 – Chemical Pre-Treatment (Ferric Hydroxide Addition)</h5>
        <p>
          In the first stage, Ferric Hydroxide (Fe(OH)₃) is introduced into the
          biogas stream or substrate. Ferric compounds react with hydrogen
          sulfide (H₂S) to form insoluble iron sulfide, effectively capturing
          sulfur at the source.
        </p>
    <p>This chemical pre-treatment significantly reduces the initial H₂S concentration, laying the foundation for efficient biological treatment in the next phase. </p>
   <h6 className="equation">
          Reaction Example: H₂S + Fe(OH)₃ → Fe₂S₃ + H₂O
        </h6>

        <h5>Stage 2 – Biological Desulphurization</h5>
<p>In the second stage, controlled aeration introduces a small amount of air into the fermenter headspace. Specialized sulfur-oxidizing bacteria (e.g., Thiobacillus species) utilize this oxygen to biologically convert residual hydrogen sulfide (H₂S) into elemental sulfur (S⁰) and water (H₂O).</p>
<p>This natural process is highly efficient and environmentally friendly, reducing sulfur concentrations to approximately 80 ppm.</p>
        <h6 className="equation">
          Simplified Reaction: 2 H₂S + O₂ → 2 S + 2 H₂O
        </h6>



        <h5>Stage 3 – Activated Carbon Filtration</h5>
        <p>
         In the final stage, the biogas passes through activated carbon filters, which provide adsorptive purification. Activated carbon has a strong affinity for residual H₂S and organic sulfur compounds, ensuring that any remaining traces of sulfur are completely removed.
        </p>
        <p>After this stage, the H₂S concentration is reduced to 0 ppm, producing clean, high-quality biogas ready for upgrading or use in engines and turbines.
</p>
 <h6 className="equations">
Reaction Example: H₂S + Fe(OH)₃ → Fe₂S₃ + H₂O
        </h6>
 <h6>Key Advantages</h6>
        <ul className="advantages">
         
          <li>Three-stage system for complete H₂S removal (up to 0 ppm)</li>
          <li>Combines chemical, biological, and physical adsorption methods</li>
          <li>Extends lifespan of CHP units, compressors, and upgrading systems</li>
          <li>Environmentally sustainable and energy-efficient process</li>
          <li>Easy integration into existing biogas plant operations</li>
        </ul>
        <div className="specs">
            <h5>Specifications</h5>
          <p>Air compressor <span>5 m3/h</span></p>
          <p>The volume of charcoal (CF-01, CF02) <span>300 kg</span></p>
          <p>Gas outlet temperature <span>2 pcs</span></p>
        </div>
      </div>

      {/* Right Image */} 
      <div className="desul-right">
        <img src={plantImg} alt="Desulphurization Plant" />
      </div>
    </div>
  );
};

export default Desulphurization;
