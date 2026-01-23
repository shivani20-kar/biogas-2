import React, { useState, useEffect } from "react";
import "../Components/Css/HeroVision.css";

import heroImage1 from "../Components/IMAGES/herovision.png";
import heroImage2 from "../Components/IMAGES/herovision2.png";
import heroImage3 from "../Components/IMAGES/herovision3.png";
import heroImage4 from "../Components/IMAGES/herovision4.png";
import heroImage5 from "../Components/IMAGES/herovision5.png";
import heroImage6 from "../Components/IMAGES/herovision6.png";
import heroImage7 from "../Components/IMAGES/herovision7.png";

const HeroVision = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 DATA SAME AS YOURS (NO CHANGE)
  const slides = [
    {
      text: "Targeted Villages",
      count: "3300",
      image: heroImage1,
    },
    {
      text: "Potential Energy Project",
      count: "1800",
      image: heroImage2,
    },
    {
      text: "Employment Generation",
      count: "18000",
      image: heroImage3,
    },
    {
      text: "Self employed entrepreneurs",
      count: "50000",
      image: heroImage4,
    },
    {
      text: "Associated farmers",
      count: "100000",
      image: heroImage5,
    },
    {
      text: "Baren land converted into energy grass",
      count: "150000 Acre’s",
      image: heroImage6,
    },
    {
      text: "Supporting to milking animals",
      count: "130000",
      image: heroImage7,
    },
  ];

  // 🔥 AUTO SLIDE – PERFECT SYNC
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="hero-vision">
      {/* ================= LEFT RED PANEL ================= */}
      <div className="hero-leftvision">
        <p className="hero-company-text">
          GDBiOGAS is an advanced biofuels and allied products manufacturing
          company.
        </p>

        <div className="hero-title-wrapper">
          <div className="hero-vertical-line"></div>
          <h1 className="hero-main-title">
            <span className="line-small">Asia's First</span>
            <span className="line-big with-line">District</span>
            <span className="line-big with-line">Trillion</span>
            <span className="line-medium">Business</span>
            <span className="line-medium-m">Model</span>
          </h1>
        </div>

        <div className="hero-bottom">
          <div className="hero-bottom-text">
            <p className="hero-location-text">In Maharashtra, India</p>
            <p className="hero-description-text">
              Empowering rural communities through sustainable energy,
              livelihoods, and local growth.
            </p>
          </div>

          <div className="hero-bottom-cta">
            <span className="hero-bottom-cta-span">See Industry</span>
            <span className="cta-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 57 57"
                fill="none"
              >
                <path
                  d="M34.6031 23.7309L21.2134 37.1206C20.9626 37.3714 20.668 37.4967 20.3296 37.4965C19.9911 37.4967 19.6965 37.3714 19.4457 37.1206C19.1948 36.8698 19.0695 36.5751 19.0697 36.2367C19.0695 35.8983 19.1948 35.6037 19.4457 35.3528L32.8353 21.9632H25.0754C24.7248 21.963 24.4331 21.8443 24.2004 21.6073C23.9678 21.37 23.8454 21.0746 23.8333 20.721C23.8335 20.3555 23.9491 20.0511 24.18 19.808C24.4112 19.5646 24.7097 19.4429 25.0754 19.4429L35.6319 19.4429C35.8527 19.4429 36.0469 19.4815 36.2144 19.5587C36.3822 19.6357 36.537 19.7452 36.679 19.8872C36.8211 20.0292 36.9306 20.1841 37.0076 20.3519C37.0847 20.5194 37.1233 20.7136 37.1233 20.9343L37.1233 31.4908C37.1231 31.8415 37.0016 32.1361 36.7586 32.3747C36.5152 32.6134 36.2108 32.7328 35.8452 32.733C35.4917 32.7208 35.1963 32.6022 34.959 32.3771C34.7217 32.152 34.6031 31.8566 34.6031 31.4908L34.6031 23.7309Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* ================= RIGHT IMAGE PANEL ================= */}
      <div className="hero-rightvision">
        {/* BACKGROUND IMAGES */}
        <div className="background-images">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`background-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={slide.image} alt={slide.text} className="hero-image" />
            </div>
          ))}
        </div>

        {/* TOP FIXED TEXT */}
        <div className="hero-overlay-top">
          <p className="hero-overlay-top-p">
            Vision 2036: <br />
            Satara as a <br />
            Global Green <br />
            Economy <br />
            District
          </p>
        </div>

        {/* 🔥 BOTTOM TEXT – KEY BASED (SYNC FIX) */}
        <div className="hero-overlay-bottom">
          <div key={currentIndex} className="slide-content slide-in">
            <div className="text-wrapper">
              <p className="hero-bottom-text-large">{currentSlide.text}</p>
              <h2 className="hero-bottom-number-large">{currentSlide.count}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVision;
