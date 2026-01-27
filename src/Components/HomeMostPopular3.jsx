import React from "react";
import "../Components/Css/HomeMostPopular3.css";
import popularImg from "../Components/IMAGES/mostpopular3.png";

const HomeMostPopular3 = () => {
  return (
    <section className="home-most-popular3">
      <div className="home-most-popular3__card">
        <img
          src={popularImg}
          alt="Most Popular"
          className="home-most-popular3__image"
        />

        {/* <div className="home-most-popular3__overlay">
          <h1 className="home-most-popular3__overlay-text">
            Animal Feed
          </h1>
        </div> */}
      </div>
    </section>
  );
};

export default HomeMostPopular3;
