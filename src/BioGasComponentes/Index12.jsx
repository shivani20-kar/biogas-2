import React, { useRef, useEffect, useState } from "react";
import "./CSS/Index12.css";
import biogasImg from "./appendices image.png";

const AppendicesSection = () => {
  const bannerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
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
    <div className="appendices-wrapper">
      {/* HEADER */}
      <div className="appendices-header" ref={bannerRef}>
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

        <h1 className={`appendices-title ${visible ? "animate-text" : ""}`}>Appendices</h1>
      </div>

      {/* IMAGE SECTION */}
      <div className="appendices-image-section">
        <img src={biogasImg} alt="Biogas Plant" />
      </div>
    </div>
  );
};

export default AppendicesSection;
