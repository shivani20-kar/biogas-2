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
import img11 from "../Components/IMAGES/business-img11.png";
import img12 from "../Components/IMAGES/business-img12.jpg";
import img13 from "../Components/IMAGES/business-img13.png";
import img14 from "../Components/IMAGES/business-img14.png";
import img15 from "../Components/IMAGES/business-img15.jpg";
import img16 from "../Components/IMAGES/business-img16.png";
import img17 from "../Components/IMAGES/business-img17.png";
import img18 from "../Components/IMAGES/business-img18.png";
import img19 from "../Components/IMAGES/business-img19.jpg";
import img20 from "../Components/IMAGES/business-img20.png";
import img21 from "../Components/IMAGES/business-img21.png";
import img22 from "../Components/IMAGES/business-img22.png";
import img23 from "../Components/IMAGES/business-img23.png";
import img24 from "../Components/IMAGES/business-img24.png";
import img25 from "../Components/IMAGES/business-img25.png";

const data = [
  { number: "01", title: "Energy Feed Stock", img: img1, color: "#006DB0" },
  { number: "02", title: "Silage", img: img2, color: "#E12D36" },
  { number: "03", title: "TMR", img: img3, color: "#8A38F5" },
  { number: "04", title: "Biomass Pellets", img: img4, color: "#FF0DA2" },
  { number: "05", title: "Hydrochar Pellets", img: img5, color: "#FFD768" },
  { number: "06", title: "Biochemicals", img: img6, color: "#12B712" },
  { number: "07", title: "Biogas", img: img7, color: "#676767" },
  { number: "08", title: "CNG", img: img8, color: "#A6FF79" },
  { number: "09", title: "LNG", img: img9, color: "#0AA7CD" },
  { number: "10", title: "LPG", img: img10, color: "#F02D2F" },
  { number: "11", title: "SAF", img: img11, color: "#FF5100" },
  { number: "12", title: "Green Hydrogen", img: img12, color: "#4E5C71" },
  { number: "13", title: "Green Sulphur", img: img13, color: "#133475" },
  {
    number: "14",
    title: "Electricity Co-Generation",
    img: img14,
    color: "#A05FF4",
  },
  { number: "15", title: "Cooking Gas", img: img15, color: "#09FF00" },
  {
    number: "16",
    title: "CNG, LNG Refiling Station",
    img: img16,
    color: "#676767",
  },
  {
    number: "17",
    title: "Electric Charging Station",
    img: img17,
    color: "#12B712",
  },
  { number: "18", title: "Fertilizers", img: img18, color: "#A6FF79" },
  { number: "19", title: "3D Homes", img: img19, color: "#0AA7CD" },
  {
    number: "20",
    title: "Organic A2 Milk & Milk Products",
    img: img20,
    color: "#F02D2F",
  },
  { number: "21", title: "Plywood", img: img21, color: "##FF5100" },
  { number: "22", title: "Carbon Sunk", img: img22, color: "#4E5C71" },
  { number: "23", title: "Carbon Fiber", img: img23, color: "#133475" },
  { number: "24", title: "Carbon Credit", img: img24, color: "#A05FF4" },
  { number: "25", title: "Engineered Products", img: img25, color: "#09FF00" },
];

const HomeBusinessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState("up");

  const next = () => {
    setPrevIndex(activeIndex);
    setDirection("up");
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const prev = () => {
    setPrevIndex(activeIndex);
    setDirection("down");
    setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <section className="home-business">
      <h2 className="home-business__title">{data[activeIndex].title}</h2>

      {/* LEFT */}
      <div className="home-business__left">
        <div
          className="home-business__bg bg-static"
          style={{ backgroundColor: data[prevIndex].color }}
        />

        <div
          key={activeIndex}
          className={`home-business__bg ${
            direction === "up" ? "bg-slide-up" : "bg-slide-down"
          }`}
          style={{ backgroundColor: data[activeIndex].color }}
        />

        <h1 className="home-business__heading">Our Business</h1>

        <div className="home-business__numbers-wrapper">
          <span className="home-business__line"></span>

          <div className="home-business__numbers-mask">
            <div
              className="home-business__numbers"
              style={{
                transform: `translateY(-${activeIndex * 42}px)`,
              }}
            >
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
        </div>

        {/* ===== FIRST SLIDE BUTTON (as-it-is from your code) ===== */}
{activeIndex === 0 && (
  <button className="home-business__btn">
    <span className="btn-text">Learn More</span>

    <span className="btn-icon">
      <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
        <path
          d="M12.7483 3.51907L1.76037 14.507C1.55453 14.7128 1.31275 14.8156
          1.03503 14.8155C0.757307 14.8156 0.515528 14.7128 0.309694
          14.507C0.103859 14.3011 0.00102257 14.0593 0.00118376
          13.7816C0.00102257 13.5039 0.103859 13.2621
          0.309694 13.0563L11.2976 2.0684L4.92961 2.0684
          C4.64189 2.06824 4.40253 1.97088 4.21152 1.77633
          C4.02068 1.58161 3.92026 1.33919 3.91027 1.04906
          C3.91043 0.74909 4.00529 0.499331 4.19484 0.299783
          C4.38456 0.100074 4.62948 0.000220137 4.92961
          0.000220137L13.5925 0.000220252C13.7737
          0.000220252 13.9331 0.0318939 14.0705
          0.09524C14.2082 0.158425 14.3353 0.248286
          14.4518 0.364823C14.5684 0.481361 14.6582
          0.608456 14.7214 0.746109C14.7848
          0.8836 14.8164 1.04293 14.8164 1.22411
          L14.8164 9.88705C14.8163 10.1748 14.7165
          10.4165 14.5171 10.6124C14.3174
          10.8082 14.0676 10.9062 13.7676
          10.9064C13.4775 10.8964 13.235
          10.799 13.0403 10.6143C12.8456
          10.4296 12.7483 10.1872 12.7483
          9.88705L12.7483 3.51907Z"
          fill="#E12D36"
        />
      </svg>
    </span>
  </button>
)}

{/* ===== IMAGE STYLE TEXT + BUTTON (from 2nd slide onwards) ===== */}
{activeIndex !== 0 && (
  <div className="home-business__img-bottom">
    <p className="img-bottom-subtitle">
      Enterprise IT Management <br/>Software
    </p>

    <button className="home-business__btn img-bottom-btn">
      <span className="btn-text">Learn More</span>

    
         <span className="btn-icon">
      <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
        <path
          d="M12.7483 3.51907L1.76037 14.507C1.55453 14.7128 1.31275 14.8156
          1.03503 14.8155C0.757307 14.8156 0.515528 14.7128 0.309694
          14.507C0.103859 14.3011 0.00102257 14.0593 0.00118376
          13.7816C0.00102257 13.5039 0.103859 13.2621
          0.309694 13.0563L11.2976 2.0684L4.92961 2.0684
          C4.64189 2.06824 4.40253 1.97088 4.21152 1.77633
          C4.02068 1.58161 3.92026 1.33919 3.91027 1.04906
          C3.91043 0.74909 4.00529 0.499331 4.19484 0.299783
          C4.38456 0.100074 4.62948 0.000220137 4.92961
          0.000220137L13.5925 0.000220252C13.7737
          0.000220252 13.9331 0.0318939 14.0705
          0.09524C14.2082 0.158425 14.3353 0.248286
          14.4518 0.364823C14.5684 0.481361 14.6582
          0.608456 14.7214 0.746109C14.7848
          0.8836 14.8164 1.04293 14.8164 1.22411
          L14.8164 9.88705C14.8163 10.1748 14.7165
          10.4165 14.5171 10.6124C14.3174
          10.8082 14.0676 10.9062 13.7676
          10.9064C13.4775 10.8964 13.235
          10.799 13.0403 10.6143C12.8456
          10.4296 12.7483 10.1872 12.7483
          9.88705L12.7483 3.51907Z"
          fill="#E12D36"
        />
      </svg>
  
      </span>
    </button>
  </div>
)}


      </div>

      {/* RIGHT */}
      <div className="home-business__right">
        {/* PREVIOUS IMAGE */}
        <img
          className="home-business__img img-static"
          src={data[prevIndex].img}
          alt=""
        />

        {/* CURRENT IMAGE */}
        <img
          key={activeIndex}
          className={`home-business__img ${
            direction === "up" ? "img-slide-down" : "img-slide-up"
          }`}
          src={data[activeIndex].img}
          alt=""
        />

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
