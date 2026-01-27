import React, { useState } from "react";
import "../Components/Css/HomeBusinessSection.css";

import img1 from "../Components/IMAGES/business-img.png";
import img2 from "../Components/IMAGES/business-img2.png";
import img3 from "../Components/IMAGES/business-img3.png";
import img4 from "../Components/IMAGES/business-img4.png";
import img5 from "../Components/IMAGES/business-img5.png";
import img6 from "../Components/IMAGES/business-img6.png";
import img7 from "../Components/IMAGES/business-img7.png";
import img8 from "../Components/IMAGES/business-img8.png";
import img9 from "../Components/IMAGES/business-img9.png";
import img10 from "../Components/IMAGES/business-img10.png";

const data = [
  {
    number: "01",
    title: "Energy Feed Stock",
    img: img1,
    color: "#006DB0",
  },
  {
    number: "02",
    title: "Silage",
    img: img2,
    color: "#E12D36",
  },
  {
    number: "03",
    title: "TMR",
    img: img3,
    color: "#8A38F5",
  },
  {
    number: "04",
    title: "Biomass Pellets",
    img: img4,
    color: "#FF0DA2",
  },

  {
    number: "05",
    title: "Hydrochar Pellets",
    img: img5,
    color: "#FFD768",
  },
  {
    number: "06",
    title: "Biochemicals",
    img: img6,
    color: "#12B712",
  },

  {
    number: "07",
    title: "Biogas",
    img: img7,
    color: "#676767",
  },

  {
    number: "08",
    title: "CNG",
    img: img8,
    color: "#A6FF79",
  },

  {
    number: "09",
    title: "LNG",
    img: img9,
    color: "#0AA7CD",
  },

  {
    number: "10",
    title: "LPG",
    img: img10,
    color: "#F02D2F",
  },
];

const HomeBusinessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ HE FUNCTION ITHE ADD KAR
  const getVisibleNumbers = () => {
    const start = activeIndex;
    const reordered = [...data.slice(start), ...data.slice(0, start)];
    return reordered.slice(0, 14);
  };

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };
  return (
    <section className="home-business">
      {/* CENTER TITLE */}
      <h2 className="home-business__title">{data[activeIndex].title}</h2>

      {/* LEFT SECTION */}
      <div
        key={`left-${activeIndex}`}
        className="home-business__left slide-up"
        style={{ backgroundColor: data[activeIndex].color }}
      >
        <h1 className="home-business__heading">Our Business</h1>

        <div className="home-business__numbers-wrapper">
          <span className="home-business__line"></span>

          <div className="home-business__numbers">
            {data.map((item, i) => (
              <span
                key={i}
                className={`home-business__number ${
                  i === activeIndex ? "active" : ""
                }`}
              >
                {item.number}
              </span>
            ))}
          </div>
        </div>

        <button className="home-business__btn">Learn More</button>
      </div>

      {/* RIGHT SECTION */}
      <div
        key={`right-${activeIndex}`}
        className="home-business__right slide-down"
      >
        <img src={data[activeIndex].img} alt="" />

        <div className="home-business__nav">
          <span className="home-business__arrow" onClick={prev}>
            <svg width="8" height="18" viewBox="0 0 8 18">
              <path d="M0 9L8 18V0L0 9Z" fill="#fff" />
            </svg>
          </span>

          <span className="home-business__arrow" onClick={next}>
            <svg width="8" height="18" viewBox="0 0 8 18">
              <path d="M8 9L0 18V0L8 9Z" fill="#fff" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeBusinessSection;
