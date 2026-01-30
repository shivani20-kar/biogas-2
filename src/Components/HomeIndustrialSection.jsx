import React, { useState } from "react";
import "../Components/Css/HomeIndustrialSection.css";

import img1 from "../Components/IMAGES/HomeIndustrialSectionimg.png";
import img2 from "../Components/IMAGES/HomeIndustrialSectionimg2.png";
import img3 from "../Components/IMAGES/HomeIndustrialSectionimg3.png";
import img4 from "../Components/IMAGES/HomeIndustrialSectionimg4.png";
import img5 from "../Components/IMAGES/HomeIndustrialSectionimg5.png";
import img6 from "../Components/IMAGES/HomeIndustrialSectionimg6.png";
import img7 from "../Components/IMAGES/HomeIndustrialSectionimg7.png";
import img8 from "../Components/IMAGES/HomeIndustrialSectionimg8.png";
import img9 from "../Components/IMAGES/HomeIndustrialSectionimg9.png";
import img10 from "../Components/IMAGES/HomeIndustrialSectionimg10.png";

const HomeIndustrialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cards = [
    { id: 1, image: img1, title: "Feedstock " },
    { id: 2, image: img2, title: "Animal Feed" },
    { id: 3, image: img3, title: "Biogas" },
    { id: 4, image: img4, title: "Biofuel" },
    { id: 5, image: img5, title: "Biochemical & Fertilizer" },
    { id: 6, image: img6, title: "Agrobiogenics" },
    { id: 7, image: img7, title: "Organic A2 Milk" },
    { id: 8, image: img8, title: "Food & Beverage" },
    { id: 9, image: img9, title: "Food & Beverage" },
    { id: 10, image: img10, title: "3D Construction" },
  ];

  const cardsPerView = 3;
  const totalSlides = cards.length - cardsPerView + 1;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <section className="home-industrial-section">
      {/* TOP SECTION */}
      <div className="home-industrial-top">
        <div className="home-industrial-header">
          <div className="home-industrial-biggd">GD</div>

          <div className="home-industrial-title">
            <div className="home-industrial-planet">PLANET</div>
            <div className="home-industrial-solutions">
              INDUSTRIAL SOLUTIONS
            </div>
          </div>
        </div>

        <div className="home-industrial-desc">
          <div className="home-desc-left">
            <div className="home-desc-line" />
            <p>
              End-to-end renewable energy and circular
              <br />
              economy solutions for modern industries.
            </p>
          </div>

          <div className="home-desc-right">
            <div className="home-desc-line" />
            <p>
              Customized clean energy solutions for diverse
              <br />
              industrial ecosystems.
            </p>
          </div>
        </div>
      </div>

      {/* SLIDER SECTION */}
      <div className="home-industrial-bottom">
        <div className="slider-container">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {cards.map((card) => (
              <div className="home-industrial-card" key={card.id}>
                <img src={card.image} alt={card.title} />
                <div className="home-card-title">{card.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="slider-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`slider-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* ARROWS */}
        <div className="home-industrial-arrows">
          {/* LEFT */}
          <div
            className={`home-arrow left ${
              currentSlide === 0 ? "disabled" : ""
            }`}
            onClick={prevSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path
                d="M32 63.75C49.535 63.75 63.75 49.535 63.75 32C63.75 14.465 49.535 0.25 32 0.25C14.465 0.25 0.25 14.465 0.25 32C0.25 49.535 14.465 63.75 32 63.75Z"
                stroke="#9CAAAF"
                strokeWidth="0.8" 
                fill="none"
              />
              <path d="M28 32L34 40V24L28 32Z" fill="#08222B" />
            </svg>
          </div>

          {/* RIGHT */}
          <div
            className={`home-arrow right ${
              currentSlide === totalSlides - 1 ? "disabled" : ""
            }`}
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              style={{ transform: "rotate(180deg)" }}
            >
              <path
                d="M32 63.75C49.535 63.75 63.75 49.535 63.75 32C63.75 14.465 49.535 0.25 32 0.25C14.465 0.25 0.25 14.465 0.25 32C0.25 49.535 14.465 63.75 32 63.75Z"
                stroke="#9CAAAF"
                strokeWidth="0.8"
                fill="none"
              />
              <path d="M28 32L34 40V24L28 32Z" fill="#08222B" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIndustrialSection;
