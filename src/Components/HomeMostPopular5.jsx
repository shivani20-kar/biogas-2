import React from "react";
import "../Components/Css/HomeMostPopular5.css";
import popularImg from "../Components/IMAGES/mostpopular5.png";

const HomeMostPopular5 = () => {
  return (
    <section className="home-most-popular5">
      <div className="home-most-popular5__card">
        <img
          src={popularImg}
          alt="Most Popular"
          className="home-most-popular5__image"
        />

        {/* <div className="home-most-popular5__overlay">
          <h1 className="home-most-popular5__overlay-text">
            Animal Feed
          </h1>
        </div> */}
      </div>
    </section>
  );
};

export default HomeMostPopular5;
