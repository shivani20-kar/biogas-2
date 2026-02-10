import React, { useState } from "react";
import "../Components/Css/HomeTurnkeySection.css";

import leftImage from "../Components/IMAGES/trunkeysectionimg.png";
import logo from "../Components/IMAGES/trunkey-logo.svg";
import logo1 from "../Components/IMAGES/trunkey-logo1.svg";
import logo2 from "../Components/IMAGES/trunkey-logo2.svg";
import logo3 from "../Components/IMAGES/trunkey-logo3.svg";
import logo4 from "../Components/IMAGES/trunkey-logo4.svg";
import logo5 from "../Components/IMAGES/trunkey-logo5.svg";
import logo6 from "../Components/IMAGES/trunkey-logo6.svg";
import logo7 from "../Components/IMAGES/trunkey-logo7.svg";
import logo8 from "../Components/IMAGES/trunkey-logo8.svg";
import logo9 from "../Components/IMAGES/trunkey-logo9.svg";
import logo10 from "../Components/IMAGES/trunkey-logo10.svg";

import honeyHex from "../Components/IMAGES/trunkeyhoney.png";
import redHex from "../Components/IMAGES/trunkeyred.png";

/* SINGLE HEX */
const Hex = ({ type }) => {
  return (
    <div
      className={`hex ${type}`}
      style={{
        backgroundImage:
          type === "hex--red" ? `url(${redHex})` : `url(${honeyHex})`,
      }}
    />
  );
};

const HomeTurnkeySection = () => {
  const redIndexes = [6, 13, 20, 29, 36, 45, 52];

  // State for current slide
  const [current, setCurrent] = useState(0);

  // Example data for each step
  const steps = [
    {
      count: "00/10",
      title: "Our Integrated Approach",
      desc: "One partner.Total project responsibility.",
      bg: "linear-gradient(208deg, #092934 0%, #05B5B0 100%)",
      logo: logo,
    },
    {
      count: "01/10",
      title: "Concept Development and research",
      desc: "Data-driven feasibility studies and innovative project conceptualization.",
      bg: "linear-gradient(208deg, #092934 0%, #13566C 100%)",
      logo: logo1,
    },
    {
      count: "02/10",
      title: "Design and permissions",
      desc: "Engineering design, statutory approvals, and regulatory clearances..",
      bg: "linear-gradient(208deg, #092934 0%, #0982FE 100%)",
      logo: logo2,
    },
    {
      count: "03/10",
      title: "Equipment supply and installation",
      desc: "Procurement, logistics, and precision on-site installation.",
      bg: "linear-gradient(208deg, #092934 0%, #12B712 100%)",
      logo: logo3,
    },
    {
      count: "04/10",
      title: "Commissioning",
      desc: "Testing, calibration, and seamless project handover.",
      bg: "linear-gradient(208deg, #092934 0%, #E12D36 100%)",
      logo: logo4,
    },
    {
      count: "05/10",
      title: "Biological services",
      desc: "Process optimization through advanced biological and microbial management.",
      bg: "linear-gradient(208deg, #092934 0%, #9DC506 100%)",
      logo: logo5,
    },
    {
      count: "06/10",
      title: "Sustainable Resource Utilization",
      desc: "Maximizing waste-to-energy efficiency and circular resource use.",
      bg: "linear-gradient(208deg, #092934 0%, #EF6C08 100%)",
      logo: logo6,
    },
    {
      count: "07/10",
      title: "Community Engagement Initiatives",
      desc: "Inclusive development through local participation and awareness programs.",
      bg: "linear-gradient(208deg, #092934 0%, #862DE5 100%)",
      logo: logo7,
    },
    {
      count: "08/10",
      title: "Continuous Improvement Strategies",
      desc: "Performance monitoring, upgrades, and operational excellence.",
      bg: "linear-gradient(208deg, #092934 0%, #0AA7CD 100%)",
      logo: logo8,
    },
    {
      count: "09/10",
      title: "Finance & Marketing",
      desc: "Project financing support, revenue models, and market linkage.",
      bg: "linear-gradient(208deg, #092934 0%, #FF0DA2 100%)",
      logo: logo9,
    },

    {
      count: "10/10",
      title: "Quality and efficiency",
      desc: "Strict quality control ensuring reliability, safety, and long-term performance.",
      bg: "linear-gradient(208deg, #092934 0%, #676767 100%)",
      logo: logo10,
    },
  ];

  const handleNext = () => {
    setCurrent((prev) => {
      if (prev === steps.length - 1) {
        return prev; // 10/10 नंतर पुढे जाणार नाही
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrent((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <section className="home-turnkey">
      {/* LEFT */}
      <div
        className="home-turnkey__left"
        style={{ backgroundImage: `url(${leftImage})` }}
      >
        <div className="home-turnkey__overlay" />

        <h1 className="home-turnkey__title">
          TURNKEY <br />
          <span className="home-turnkey__title2">APPROACH</span>
        </h1>

        <p className="home-turnkey__text">
          Clients receive complete, seamless services from one trusted partner.
        </p>

        <button className="home-turnkey__btn">
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

      {/* RIGHT */}
      <div
        className="home-turnkey__right"
        style={{ background: steps[current].bg }}
      >
        {/* CONTENT */}
        <div className="home-turnkey__content">
          <div className="home-turnkey__subtitle-wrap">
            <span className="home-turnkey__line"></span>
            <p className="home-turnkey__subtitle">END-TO-END</p>
          </div>

          <p className="home-turnkey__desc">
            PROJECT EXECUTION <br />
            DELIVERED SEAMLESSLY <br />
            BY <strong>ONE TRUSTED PARTNER.</strong>
          </p>

          <div className="home-turnkey__info">
            <p className="home-turnkey__count">
              <span className="count-active">
                {steps[current].count.split("/")[0]}
              </span>
              <span className="count-total">
                /{steps[current].count.split("/")[1]}
              </span>
            </p>

            <div className="home-turnkey__text-anim" key={current}>
              <p className="home-turnkey__approach">{steps[current].title}</p>
              <p className="home-turnkey__approach-desc">
                {steps[current].desc}
              </p>
            </div>
          </div>
        </div>

        {/* HONEYCOMB */}
        <div className="home-turnkey__pattern">
          {Array.from({ length: 12 }).map((_, row) => (
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
                      redIndexes.includes(index) ? "hex--red" : "hex--honey"
                    }
                  />
                );
              })}
            </div>
          ))}
        </div>

        <div className="home-turnkey__logo-wrap">
          <div className="logo-hex">
            <img key={current} src={steps[current].logo} alt="logo" />
          </div>
        </div>

        {/* NAV */}
        <div className="home-turnkey__nav">
          <span
            className={`home-turnkey__arrow ${current === 0 ? "disabled" : ""}`}
            onClick={handlePrev}
          >
            <svg width="8" height="18" viewBox="0 0 8 18">
              <path d="M0 9L8 18V0L0 9Z" fill="#fff" />
            </svg>
          </span>

          <span
            className={`home-turnkey__arrow ${
              current === steps.length - 1 ? "disabled" : ""
            }`}
            onClick={handleNext}
          >
            <svg width="8" height="18" viewBox="0 0 8 18">
              <path d="M8 9L0 18V0L8 9Z" fill="#fff" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeTurnkeySection;
