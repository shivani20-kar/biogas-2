import React from "react";
import "./CSS/Index4.css";

const HLRSection = () => {
  return (
    <section className="hlr-section">
      {/* Header */}
      <div className="hlr-header">
        <div className="hlr-arrow">
            <svg className="arrow-svg" viewBox="0 0 120 180">
                        <polygon
                            points="0,0 84,0 120,90 84,180 0,180 36,90"
                            fill="#f2f2f2"
                            stroke="#e3262f"
                            strokeWidth="4"
                        />
                    </svg>
        </div>

        <div className="hlr-title">
          <h1>High-Load Reactor</h1>
          <h2>HLR : Advanced Biogas Technology for Napier Grass</h2>
        </div>
      </div>

      {/* Content */}
      <div className="hlr-content">
        <div className="hlr-left">
          <p>
            The <strong>High-Load Reactor (HLR)</strong> represents the next
            generation of biogas technology — highly efficient, compact, and
            cost-effective — making it the <strong>ideal solution for
            processing Napier grass</strong>.
          </p>

          <p>
            Compared to traditional <strong>Continuous Stirred Tank Reactors
            (CSTRs)</strong>, the HLR design is up to <strong>three times
            smaller</strong> and<strong> significantly more economical</strong>.
            For example, a  <strong> single 4,000 m³ HLR reactor</strong> is
            sufficient to produce <strong>10 tonnes per day (TPD) of Bio-CNG</strong>,
            while consuming less electrical energy and providing greater
            operational reliability than a conventional CSTR system.
          </p>

          <p>
            Globally, this technology has already proven its scalability.
            The <strong>world’s largest HLR-based biogas project</strong>,
            implemented by <strong>Zorg Biogas</strong>, achieves
            <strong>26 MW of electric power or 110 TPD of Bio-CNG</strong>,
            using <strong>sorghum and maize</strong> as feedstock. The same
            technology can efficiently process <strong>Napier grass or sugarcane</strong>,
            offering flexibility for diverse agricultural conditions.
          </p>
        </div>

        <div className="hlr-right">
          <p>
            At <strong>GD Planet</strong>, the smallest available HLR model
            produces <strong>5 TPD of Bio-CNG</strong> (equivalent to about
            <strong>1.2 MW</strong> of electric power). While smaller units —
            such as 2 TPD Bio-CNG or 500 kW plants —
            are technically possible, they are generally <strong>not economically viable</strong>
            due to fixed infrastructure and reactor costs.
          </p>

          <p>
            For a <strong>10 TPD Bio-CNG plant</strong> (approximately
            <strong>2.3 MW</strong> electrical capacity), the feedstock
            requirement depends on the dry matter (solid) content of Napier grass:
          </p>

          <ul>
            <li>120 tonnes per day with 33% total solids</li>
            <li>146 tonnes per daywith 27% total solids</li>
          </ul>

          <p>
            To meet this daily feed requirement, around <strong>500 acres of
            agricultural land</strong> is needed to cultivate sufficient Napier grass.
          </p>

          <p>
            This makes the HLR system not only <strong>technically superior</strong>
            but also <strong>highly sustainable and scalable</strong> — ideal for
            rural and agro-industrial bioenergy projects aiming to maximize energy
            output while minimizing costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HLRSection;
