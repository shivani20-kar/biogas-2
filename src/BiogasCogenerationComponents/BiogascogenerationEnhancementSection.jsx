import React, { useState } from "react";
import "./BiogasCogenerationCss/BiogascogenerationEnhancementSection.css";

import img1 from "./enhancement.png";
import img2 from "./enhancementsustain.png";
import img3 from "./enhancementmeasures.png";
import img4 from "./enhancementintegration.png";

const slides = [
  {
    count: "01",
    title: "Enhancement",
    text: "Organic waste is converted into a resource for producing renewable electricity and thermal energy, while also generating digestate, a nutrient-rich fertilizer that can be reintegrated into the agricultural cycle.",
    image: img1,
  },
  {
    count: "02",
    title: "Sustainability",
    text: "Biogas cogeneration plants promote environmental protection by replacing fossil fuels with renewable energy sources in the power generation process.",
    image: img2,
  },
  {
    count: "03",
    title: "Efficiency Measures",
    text: "Cogeneration from biogas provides dispatchable energy, supporting grid stability by complementing non-programmable renewable sources like photovoltaic and wind energy.",
    image: img3,
  },

  {
    count: "04",
    title: "Integration",
    text: "Biogas cogeneration delivers strong economic advantages by reducing energy costs while providing an additional source of income for the agricultural sector.",
    image: img4,
  },
];

const BiogascogenerationEnhancementSection = () => {
  const [index, setIndex] = useState(0);

  const TOTAL_SLIDES = 4; 

  const prev = () => {
    setIndex((i) => (i > 0 ? i - 1 : i));
  };

  const next = () => {
    setIndex((i) => (i < TOTAL_SLIDES - 1 ? i + 1 : i));
  };

  return (
    <section className="biogascogeneration-enhancement-section">
      <div
        className="biogascogeneration-enhancement-slider"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="biogascogeneration-enhancement-slide" key={i}>
            {/* LEFT */}
            <div className="biogascogeneration-enhancement-left">
              <span className="biogascogeneration-enhancement-count">
                {slide.count}
              </span>
              <h2 className="biogascogeneration-enhancement-title">
                {slide.title}
              </h2>
            </div>

            {/* RIGHT */}
            <div className="biogascogeneration-enhancement-right">
              <img src={slide.image} alt={slide.title} />

              {/* ARROWS */}
              <div className="biogascogeneration-enhancement-arrows">
                <span className="biogascogeneration-arrow" onClick={prev}>
                  <svg width="8" height="18" viewBox="0 0 8 18">
                    <path d="M0 9L8 18V0L0 9Z" fill="#000" />
                  </svg>
                </span>

                <span className="biogascogeneration-arrow" onClick={next}>
                  <svg width="8" height="18" viewBox="0 0 8 18">
                    <path d="M8 9L0 18V0L8 9Z" fill="#000" />
                  </svg>
                </span>
              </div>

              {/* TEXT */}
              <div className="biogascogeneration-enhancement-image-text">
                {slide.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BiogascogenerationEnhancementSection;
