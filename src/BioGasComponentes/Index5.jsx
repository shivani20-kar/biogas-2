import React, { useEffect, useRef, useState } from "react";
import "./CSS/Index5.css";
import fullimg from "../BioGasComponentes/Group 1000001823.png";

const HLRSectionTwo = () => {
  const imgRef = useRef(null);
  const bannerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === bannerRef.current) {
              setVisible(true);
              observer.unobserve(entry.target);
            } else if (entry.target === imgRef.current) {
              imgRef.current.classList.add("animate");
            }
          }
        });
      },
      { threshold: 0.35 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);
    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hlr-section-two">
      {/* ================= HEADER ================= */}
      <div className="hlr-header-two" ref={bannerRef}>
        <div className={`arrow-shape-two ${visible ? "animate-arrow" : ""}`}>
          <svg className="arrow-svg" viewBox="0 0 120 180">
            <polygon
              points="0,0 84,0 120,90 84,180 0,180 36,90"
              fill="#f2f2f2"
              stroke="#e3262f"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div className={`header-text-two ${visible ? "animate-text" : ""}`}>
          <h1 className="title-two">GD Planet's</h1>
          <h2 className="subtitle-two">
            High-Load Reactor (HLR): Efficient Biogas <br />
            Solution for Napier Grass
          </h2>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="hlr-content-two">
        <div className="hlr-left-two">
          <p>
            <strong>GD Planet</strong> offers a complete solution for converting
            <strong> Napier grass</strong> into high-quality
            <strong> biogas and Bio-CNG</strong> using a single, advanced
            <strong> High-Load Reactor (HLR) system.</strong>
          </p>

          <p>
            The <strong>HLR technology</strong> is a breakthrough innovation
            that is <strong>three times smaller and more cost-efficient</strong>{" "}
            than the traditional
            <strong> Continuous Stirred Tank Reactor (CSTR)</strong>. For a{" "}
            <strong>20-tonnes-per-day (TPD)</strong> methane production
            capacity, only <strong>two HLR units</strong> are required.
          </p>

          <h4>GD Planet provides end-to-end project support including:</h4>
          <ul>
            <li>Detailed engineering design</li>
            <li>Equipment supply and installation supervision</li>
            <li>On-site training and plant start-up assistance</li>
            <li>Quality assurance during construction</li>
          </ul>
        </div>

        <div className="hlr-right-two">
          <p>
            Reactor size depends on <strong>Napier grass quality</strong> and
            <strong> harvesting age</strong>.
          </p>

          <ul>
            <li>
              <strong>33% total solids</strong> → 240 TPD feedstock;
              <strong> 2 × 4,245 m³ reactors</strong>
            </li>
            <li>
              <strong>27% total solids</strong> → 293 TPD feedstock;
              <strong> 2 × 5,281 m³ reactors</strong>
            </li>
          </ul>

          <p>
            Selecting the <strong>larger 5,281 m³ reactor</strong> ensures
            flexibility and reliable performance.
          </p>
        </div>
      </div>

      {/* ================= IMAGE ================= */}
      <div className="fullimg-wrapper">
        <img ref={imgRef} src={fullimg} alt="HLR System" className="fullimg" />
      </div>
    </section>
  );
};

export default HLRSectionTwo;