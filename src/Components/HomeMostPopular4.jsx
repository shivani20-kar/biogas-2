import React from "react";
import "../Components/Css/HomeMostPopular4.css";
import popularImg from "../Components/IMAGES/mostpopular4.png";

const HomeMostPopular4 = () => {
  return (
    <section className="home-most-popular4">
      <div className="home-most-popular4__card">
        <img
          src={popularImg}
          alt="Most Popular"
          className="home-most-popular4__image"
        />

        {/* <div className="home-most-popular4__overlay">
          <h1 className="home-most-popular4__overlay-text">
            Animal Feed
          </h1>
        </div> */}
      </div>
    </section>
  );
};

export default HomeMostPopular4;
