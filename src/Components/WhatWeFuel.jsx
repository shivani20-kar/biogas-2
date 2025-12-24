import React from "react";
import "./Css/WhatWeFuel.css";
// import farmImg from "./farm.jpg"; 
// import factoryImg from "./factory.jpg"; 

const WhatWeProduceSec = () => {
  return (
    <section className="fuel-produce-section">
      <div className="fuel-produce-left">
        {/* <h2 className="produce-title">WHAT WE PRODUCE</h2> */}
        <p className="fuel-produce-subtitle">
          WELCOME TO SOCIO SPACE – YOUR PREMIER CO-WORKING DESTINATION
        </p>
        <h3 className="fuel-produce-heading">
          PRODUCE CNG FUEL FOR ALL <br />
          TYPES OF VEHICLES AND <br />
          GENERATION
        </h3>
        <p className="fuel-produce-description">
          Biogas technology converts waste into clean electricity, delivering
          reliable power for farms, households, and small industries—reducing
          costs while promoting sustainable living.
        </p>
      </div>

      <div className="fuel-produce-right">
        {/* <img src={farmImg} alt="Farm" className="fuel-produce-image" />
        <img src={factoryImg} alt="Factory" className="fuel-produce-image" /> */}
      </div>
    </section>
  );
};

export default WhatWeProduceSec;
