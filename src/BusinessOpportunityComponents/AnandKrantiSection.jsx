import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/AnandKrantiSection.css";
import anandKrantiSectionimg from "../Components/IMAGES/anandkrantisectionimg.png";

const AnandKrantiSection = () => {
  return (
    <div className="anand-kranti-main-container">
      {/* Left Image with Grey Blocks (As per design) */}
      <div className="image-wrapper">
        <img
          src={anandKrantiSectionimg}
          alt="Inspirational"
          className="main-image"
        />
      </div>

      {/* Right Text Section */}
      <div className="text-section">
        <p className="atitle-text">Inspired by the values of his idol,</p>

        <p className="orange-title">
          <span className="shrimant">SHRIMANT</span>
          <br></br> CHHATRAPATI SHIVAJI MAHARAJ,
        </p>

        <p className="adescription-text">
          who fought for Swaraj (self-rule) and self-sufficiency, Girish
          determination to create a sustainable future is a testament to the
          power of grassroots innovation. Just as Shivaji Maharaj's Swaraj
          movement empowered the people to take charge of their own destiny, GD
          Earth Planet for Anand Kranti movement aims to empower individuals and
          communities to take charge of their own sustainable future. As we move
          forward, let us draw strength from GD story and work together to build
          a brighter, more sustainable future for all - a true{" "}
          <span className="blue-text">“Anand Kranti”.</span>
        </p>
      </div>
    </div>
  );
};

export default AnandKrantiSection;
