import React from "react";
import "./CSS/Index8.css";
import biogasImg from "./Gemini_Generated_Image_m8y7k3m8y7k3m8y7-removebg-preview 1.png"; 
const BiogasPlantTwo = () => {
  return (
    <div className="biogas-container-two">
      {/* HEADER */}
      <div className="biogas-header-two">
        <div className="header-arrow-two"> <svg className="arrow-svg" viewBox="0 0 120 180">
                        <polygon
                            points="0,0 84,0 120,90 84,180 0,180 36,90"
                            fill="#f2f2f2"
                            stroke="#e3262f"
                            strokeWidth="4"
                        />
                    </svg></div>
        <div>
          <h1>Biogas</h1>
          <p>Plant Working Principle</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="biogas-content-two">
        {/* LEFT */}
        <div className="biogas-left-two">
          <h3>Overview</h3>
          <p>
            A Biogas Plant uses biogas technology is based on the <strong>biochemical
            conversion</strong>  of organic materials into clean energy. This process
            transforms <strong>  complex organic compounds</strong>  (like carbohydrates, fats,
            and proteins) into <strong>  simpler molecules, </strong>  and ultimately into biogas —
            a renewable mixture primarily composed of <strong> methane (CH₄) </strong>  and  <strong> carbon
            dioxide (CO₂).</strong> 
          </p>

          <div className="image-box">
            <img src={biogasImg} alt="Biogas Process" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="biogas-right-two">
          <h3>The Conversion Process</h3>
          <p>
            The entire process takes place in an <strong> anaerobic environment —</strong>  meaning
            inside a sealed, oxygen-free tank called a<strong>  bioreactor.</strong>  Here,
            naturally occurring microorganisms break down organic waste in
           <strong>  three main stages:</strong> 
          </p>

          <h4>1. Hydrolysis – Breaking Down Complex Molecules</h4>
          <p>
            In the first stage,<strong>  hydrolytic bacteria </strong> break down large, complex
            organic molecules (such as carbohydrates, proteins, and fats) into
          <strong>   simpler soluble compounds</strong>  like <strong>  sugars, amino acids, and fatty acids.</strong>  This process can be summarized as:
          </p>
          
          <ul>
            <li>Organic compounds + H₂O → Organic acids + Alcohols</li>
          </ul>

          <h4>
            2. Acidogenesis and Acetogenesis – Converting to Organic Acids
          </h4>
          <p>
            Next, the <strong> acidogenic</strong>  and <strong> acetogenic bacteria </strong> convert these simple
            compounds into<strong>  volatile fatty acids, carbon dioxide (CO₂), hydrogen
            (H₂), and acetic acid.</strong> 
          </p>
          <p>During this stage, complex organic acids are broken down into <strong>C₁ compounds</strong> (simple organic acids), which serve as the main feedstock for the next step.</p>
          <ul>
            <li>C₅H₇NO₂ + HCO₃⁻ + H₂O → CH₄ + CO₂ + NH₄⁺</li>
          </ul>
          <p>This phase plays a critical role in balancing the biochemical environment for efficient gas production.</p>

          <h4>3. Methanogenesis – Producing Biogas</h4>
          <p>
            Finally,<strong>  methanogenic bacteria </strong> (methane-producing microbes) convert
            acetic acid, hydrogen, and carbon dioxide into<strong>  methane (CH₄)</strong>  and
           <strong>  water (H₂O).</strong> 
          </p>
          <p>Methanogens are highly sensitive microorganisms that thrive only in <strong> strictly anaerobic conditions</strong>  and require a longer 
          reproduction period. The efficiency of this stage directly affects the <strong> quantity and quality of biogas</strong>  produced.</p>
          <ul>
            <li>C₅H₇NO₂ + HCO₃⁻ + H₂O → CH₄ + CO₂ + NH₄⁺</li>
            
          </ul>
          <p>This phase plays a critical role in balancing the biochemical environment for efficient gas production.</p>
        </div>
      </div>
    </div>
  );
};

export default BiogasPlantTwo;
