import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ ProudlyIndianSection.css";
import colonimg from "../Components/IMAGES/“.png";


const ProudlyIndianSection = () => {
  return (
    <div className="pi-section">
      {/* LEFT GREY BOX */}
      <div className="pi-left-box">
        <img className="proudlyimg" src={colonimg} alt="" />

        <p className="pi-left-text">
          High-quality biogas equipment made in Germany France, US, Norway,
          Australia.
        </p>

        <p className="pi-left-text">
          Experienced team of <br /> Turnkey Solution providers
        </p>

        <p className="pi-left-text">
          Several superior biogas and allied product technologies
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="pi-right-content">
        <h2 className="pi-heading">Proudly Indian</h2>

        <p className="pi-small-text">
          We have something to be proud of <br />
          <span className="pi-bold">ANAND KRANTI</span>
        </p>

        <p className="pi-small-text">
          Introducing <span className="pi-bold">GDBIOGAS</span>, India’s
          revolutionary startup that’s transforming <span className="pi-bold">waste into wealth.</span>
        </p>

        <p className="pi-small-text">
          Our innovative solutions harness agricultural waste, plastic waste,
          and animal waste to produce clean advance energy, organic fertilizers,
          and other allied valuable products.
        </p>

        <p className="pi-red-line">
          Join the movement <br /> towards a sustainable <br /> future
        </p>

        <p className="pi-small-text">
          Let’s come together to create a cleaner, greener, and more prosperous
          India
        </p>
      </div>
    </div>
  );
};

export default ProudlyIndianSection;
