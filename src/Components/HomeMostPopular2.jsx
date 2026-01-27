import React from "react";
import "../Components/Css/HomeMostPopular.css";
import popularImg from "../Components/IMAGES/mostpopular2.png";

const HomeMostPopular2 = () => {
  return (
    <section className="home-most-popular2">
      <div className="home-most-popular2__card">
        <img
          src={popularImg}
          alt="Most Popular"
          className="home-most-popular2__image"
        />

        {/* <div className="home-most-popular2__overlay">
          <h1 className="home-most-popular2__overlay-text">
            Animal Feed
          </h1>
        </div> */}
      </div>
    </section>
  );
};

export default HomeMostPopular2;
