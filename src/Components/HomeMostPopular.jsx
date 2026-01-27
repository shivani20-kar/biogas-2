import React from "react";
import "../Components/Css/HomeMostPopular.css";
import popularImg from "../Components/IMAGES/mostpopular1.png";
const HomeMostPopular1 = () => {
  return (
    <section className="home-most-popular">
      {/* Heading */}
      <h2 className="home-most-popular__title">Most popular</h2>

      {/* Image Card */}
      <div className="home-most-popular__card">
        <img
          src={popularImg}
          alt="Animal Feed"
          className="home-most-popular__image"
        />

        {/* Overlay */}
        {/* <div className="home-most-popular__overlay">
          <h1 className="home-most-popular__overlay-text">
            Animal Feed
          </h1>
        </div> */}
      </div>
    </section>
  );
};

export default HomeMostPopular1;
