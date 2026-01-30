import React from "react";
import "../Components/Css/HomeTurnkeySection.css";

import leftImage from "../Components/IMAGES/trunkeysectionimg.png";
import logo from "../Components/IMAGES/Logowhite.png";

import honeyHex from "../Components/IMAGES/trunkeyhoney.png";
import redHex from "../Components/IMAGES/trunkeyred.png";

/* SINGLE HEX */
const Hex = ({ type }) => {
  return (
    <div
      className={`hex ${type}`}
      style={{
        backgroundImage:
          type === "hex--red"
            ? `url(${redHex})`
            : `url(${honeyHex})`,
      }}
    />
  );
};

const HomeTurnkeySection = () => {
  const redIndexes = [6, 13, 20, 29, 36, 45, 52];

  return (
    <section className="home-turnkey">
      {/* LEFT */}
      <div
        className="home-turnkey__left"
        style={{ backgroundImage: `url(${leftImage})` }}
      >
        <div className="home-turnkey__overlay" />

        <h1 className="home-turnkey__title">
          TURNKEY <br /> APPROACH
        </h1>

        <p className="home-turnkey__text">
          Clients receive complete, seamless services from one trusted partner.
        </p>

        <button className="home-turnkey__btn">Learn More</button>
      </div>

      {/* RIGHT */}
      <div className="home-turnkey__right">
        {/* CONTENT */}
        <div className="home-turnkey__content">
          <p className="home-turnkey__subtitle">END-TO-END</p>

          <p className="home-turnkey__desc">
            PROJECT EXECUTION <br />
            DELIVERED SEAMLESSLY <br />
            BY <strong>ONE TRUSTED PARTNER.</strong>
          </p>

          <p className="home-turnkey__count">00/10</p>

          <p className="home-turnkey__approach">Our Integrated Approach</p>

          <p className="home-turnkey__approach-desc">
            One partner. <br />
            Total project responsibility.
          </p>
        </div>

        {/* HONEYCOMB */}
        <div className="home-turnkey__pattern">
          {Array.from({ length: 10 }).map((_, row) => (
            <div
              className={`hex-row ${row % 2 !== 0 ? "offset" : ""}`}
              key={row}
            >
              {Array.from({ length: 7 }).map((_, col) => {
                const index = row * 7 + col;
                return (
                  <Hex
                    key={col}
                    type={
                      redIndexes.includes(index)
                        ? "hex--red"
                        : "hex--honey"
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* CENTER LOGO */}
        <div className="home-turnkey__logo-wrap">
          <div className="logo-hex">
            <img src={logo} alt="logo" />
          </div>
        </div>

        {/* NAV */}
        <div className="home-turnkey__nav">
          <span>&#10094;</span>
          <span>&#10095;</span>
        </div>
      </div>
    </section>
  );
};

export default HomeTurnkeySection;
