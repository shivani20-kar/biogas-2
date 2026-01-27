import React from "react";
import "../Components/Css/HomeMostPopular6.css";
import popularImg from "../Components/IMAGES/mostpopular6.png";

const HomeMostPopular6 = () => {
  return (
    <section className="home-most-popular6">
      <div className="home-most-popular6__card">
        <img
          src={popularImg}
          alt="Most Popular"
          className="home-most-popular6__image"
        />

        {/* <div className="home-most-popular6__overlay">
          <h1 className="home-most-popular6__overlay-text">
            Animal Feed
          </h1>
        </div> */}
      </div>
    </section>
  );
};

export default HomeMostPopular6;
