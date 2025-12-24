import React from "react";
import "./CSS/Index5.css";
import fullimg from "../BioGasComponentes/Group 1000001823.png"

const HLRSectionTwo = () => {
  return (
    <section className="hlr-section-two">
      {/* Top Gray Header */}
      <div className="hlr-header-two">
        <div className="arrow-shape-two">
             <svg className="arrow-svg" viewBox="0 0 120 180">
                        <polygon
                            points="0,0 84,0 120,90 84,180 0,180 36,90"
                            fill="#f2f2f2"
                            stroke="#e3262f"
                            strokeWidth="4"
                        />
                    </svg>
        </div>

        <div className="header-text-two">
          <h1 className="title-two">GD Planet's</h1>
          <h2 className="subtitle-two">
            High-Load Reactor (HLR): Efficient Biogas <br />
            Solution for Napier Grass
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="hlr-content-two">
        <div className="hlr-left-two">
          <p>
            <strong>GD Planet</strong> offers a complete solution for converting
            <strong> Napier grass</strong> into high-quality
            <strong> biogas and Bio-CNG</strong> using a single, advanced
            <strong> High-Load Reactor (HLR) system.</strong> 
          </p>

          <p>
            The <strong>HLR technology</strong> is a breakthrough innovation that
            is <strong>three times smaller and
             more cost-efficient</strong> than the traditional
            <strong> Continuous Stirred Tank Reactor (CSTR)</strong>.
            For a <strong>20-tonnes-per-day (TPD)</strong> methane production
            capacity, only <strong>two HLR units</strong> are required — making
            the system compact, economical, and highly efficient.
          </p>

          <h4>GD Planet provides end-to-end project support including:</h4>
          <ul>
            <li>Detailed engineering design</li>
            <li>Equipment supply and installation supervision</li>
            <li>On-site training and plant start-up assistance</li>
            <li>Quality assurance during construction</li>
          </ul>

          <p className="small-text-two">
            Construction and installation are carried out by the customer under
            <strong> GD Planet’s expert supervision</strong>, with<strong>construction
            costs already included</strong>  in the total project budget.
          </p>
        </div>

        {/* Right */}
        <div className="hlr-right-two">
          <p>
            The <strong>reactor size and daily feedstock requirement </strong>depend on the
           <strong> Napier grass quality </strong>and <strong>harvesting age:</strong>
          </p>

          <ul>
            <li>
              For grass with <strong>33% total solids</strong> (harvested at
              ~120 days) → <strong>240 tonnes/day feedstock</strong>;
              <strong> 2 reactors of 4,245 m³</strong> each are required.
            </li>
            <li>
              For grass with <strong>27% total solids</strong> (harvested at
              ~80 days) → <strong>293 tonnes/day feedstock</strong>;
              <strong> 2 reactors of 5,281 m³</strong> each are needed.
            </li>
          </ul>

          <p>
            If the feedstock quality is uncertain, selecting the
            <strong> larger 5,281 m³ reactor model</strong> provides flexibility
            and ensures reliable performance.
          </p>

          <p>
            In cases where the Napier grass has higher solids and better quality,
            the same system can produce up to
            <strong> 25–27 TPD of Bio-CNG</strong>, exceeding the guaranteed
            minimum output of <strong>20 TPD</strong>.
          </p>

          <p>
            With <strong>GD Planet’s HLR technology</strong>, customers gain a
            <strong> proven, scalable, and cost-effective</strong> biogas
            solution designed for consistent performance, simplified operation,
            and maximum energy output from Napier grass.
          </p>
        </div>
      </div>
      <img  className="fullimg" src={fullimg} />
    </section>
  );
};

export default HLRSectionTwo;
