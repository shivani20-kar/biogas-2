import React, { useRef, useEffect, useState } from "react";
import "./CSS/Index18.css";

import imgSatara from "../BioGasComponentes/industries-satara.png";
import imgPatan from "../BioGasComponentes/industries-patan.png";
import imgPalshi from "../BioGasComponentes/industries-palshi.png";

const Industries = () => {
  const bannerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="industries-wrapper">
      {/* ================= HEADER ================= */}
      <div className="industries-header" ref={bannerRef}>
        <div className={`arrow-index ${visible ? "animate-arrow" : ""}`}>
          <svg className="arrow-svg" viewBox="0 0 120 180">
            <polygon
              points="0,0 84,0 120,90 84,180 0,180 36,90"
              fill="#f2f2f2"
              stroke="#e3262f"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div
          className={`industries-header-text ${visible ? "animate-text" : ""}`}
        >
          <h1 className="industries-title">Industries</h1>
          <p className="industries-subtitle">GD planet plants</p>
        </div>
      </div>
      {/* ================= CARDS ================= */}
      <div className="industries-cards">
        <div className="industry-card">
          <img src={imgSatara} alt="Satara Plant" />
          <div className="industry-card-content">
            <h3>Satara</h3>
            <p>Project Capacity : 5 TPD CNG Using Napier Grass</p>
            <span className="industry-link">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M33.223 25.5016H10.5C10.0743 25.5016 9.718 25.358 9.431 25.0706C9.14367 24.7836 9 24.4273 9 24.0016C9 23.576 9.14367 23.2196 9.431 22.9326C9.718 22.6453 10.0743 22.5016 10.5 22.5016H33.223L26.6385 15.9171C26.3412 15.6195 26.1943 15.2713 26.198 14.8726C26.202 14.474 26.3488 14.1195 26.6385 13.8091C26.9488 13.4991 27.3052 13.339 27.7075 13.3286C28.1102 13.3183 28.4667 13.4683 28.777 13.7786L37.7345 22.7361C37.9218 22.9235 38.0538 23.121 38.1305 23.3286C38.2075 23.5363 38.246 23.7606 38.246 24.0016C38.246 24.2426 38.2075 24.467 38.1305 24.6746C38.0538 24.8823 37.9218 25.0798 37.7345 25.2671L28.777 34.2246C28.4793 34.522 28.1262 34.6688 27.7175 34.6651C27.3085 34.6611 26.9488 34.5041 26.6385 34.1941C26.3488 33.8838 26.1988 33.5325 26.1885 33.1401C26.1782 32.7478 26.3282 32.3965 26.6385 32.0861L33.223 25.5016Z"
                  fill="#E12D36"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="industry-card">
          <img src={imgPatan} alt="Patan Plant" />
          <div className="industry-card-content">
            <h3>Patan</h3>
            <p>Project Capacity : 10 TPD Biogas to CNG Using Napier Grass</p>
            <span className="industry-link">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M33.223 25.5016H10.5C10.0743 25.5016 9.718 25.358 9.431 25.0706C9.14367 24.7836 9 24.4273 9 24.0016C9 23.576 9.14367 23.2196 9.431 22.9326C9.718 22.6453 10.0743 22.5016 10.5 22.5016H33.223L26.6385 15.9171C26.3412 15.6195 26.1943 15.2713 26.198 14.8726C26.202 14.474 26.3488 14.1195 26.6385 13.8091C26.9488 13.4991 27.3052 13.339 27.7075 13.3286C28.1102 13.3183 28.4667 13.4683 28.777 13.7786L37.7345 22.7361C37.9218 22.9235 38.0538 23.121 38.1305 23.3286C38.2075 23.5363 38.246 23.7606 38.246 24.0016C38.246 24.2426 38.2075 24.467 38.1305 24.6746C38.0538 24.8823 37.9218 25.0798 37.7345 25.2671L28.777 34.2246C28.4793 34.522 28.1262 34.6688 27.7175 34.6651C27.3085 34.6611 26.9488 34.5041 26.6385 34.1941C26.3488 33.8838 26.1988 33.5325 26.1885 33.1401C26.1782 32.7478 26.3282 32.3965 26.6385 32.0861L33.223 25.5016Z"
                  fill="#E12D36"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="industry-card">
          <img src={imgPalshi} alt="Palshi Plant" />
          <div className="industry-card-content">
            <h3>Palshi</h3>
            <p>
              Project Capacity : 10 TPD Biogas to CNG Using Napier Grass &
              Agriculture Waste
            </p>
            <span className="industry-link">
              Learn More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M33.223 25.5016H10.5C10.0743 25.5016 9.718 25.358 9.431 25.0706C9.14367 24.7836 9 24.4273 9 24.0016C9 23.576 9.14367 23.2196 9.431 22.9326C9.718 22.6453 10.0743 22.5016 10.5 22.5016H33.223L26.6385 15.9171C26.3412 15.6195 26.1943 15.2713 26.198 14.8726C26.202 14.474 26.3488 14.1195 26.6385 13.8091C26.9488 13.4991 27.3052 13.339 27.7075 13.3286C28.1102 13.3183 28.4667 13.4683 28.777 13.7786L37.7345 22.7361C37.9218 22.9235 38.0538 23.121 38.1305 23.3286C38.2075 23.5363 38.246 23.7606 38.246 24.0016C38.246 24.2426 38.2075 24.467 38.1305 24.6746C38.0538 24.8823 37.9218 25.0798 37.7345 25.2671L28.777 34.2246C28.4793 34.522 28.1262 34.6688 27.7175 34.6651C27.3085 34.6611 26.9488 34.5041 26.6385 34.1941C26.3488 33.8838 26.1988 33.5325 26.1885 33.1401C26.1782 32.7478 26.3282 32.3965 26.6385 32.0861L33.223 25.5016Z"
                  fill="#E12D36"
                />
              </svg>
            </span>
          </div>
        </div>
        {/* ================= REFERENCES BUTTON ================= */}
        <div className="industries-reference">
          <span>References</span>
          <div className="reference-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 41 41"
              style={{ cursor: "pointer" }}
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#E12D36" />
              <path
                d="M14 27L27 14M27 14H16M27 14V25"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
