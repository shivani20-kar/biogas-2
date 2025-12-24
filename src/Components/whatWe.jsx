import React from "react";
import "./Css/WhatWe.css";
// import farmImg from "./farm.jpg"; 
// import factoryImg from "./factory.jpg"; 

const WhatWeProduce = () => {
  return (
    <section className="produce-section">
      <div className="produce-left">
        <h2 className="produce-title">WHAT WE PRODUCE</h2>
        <p className="produce-subtitle">
          WELCOME TO SOCIO SPACE – YOUR PREMIER CO-WORKING DESTINATION
        </p>
        <h3 className="produce-heading">
          PRODUCE ELECTRICITY FOR <br />
          AGRI FARM, HOME, SMALL <br />
          INDUSTRIES.
        </h3>
        <p className="produce-description">
          Biogas technology converts waste into clean electricity, delivering
          reliable power for farms, households, and small industries—reducing
          costs while promoting sustainable living.
        </p>
      </div>

      <div className="produce-right">
        {/* <img src={farmImg} alt="Farm" className="produce-image" />
        <img src={factoryImg} alt="Factory" className="produce-image" /> */}
      </div>
    </section>
  );
};

export default WhatWeProduce;
