import { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/HeroSection.css";
import { Link } from "react-router-dom";

import logo from "../Components/IMAGES/Logowhite.png";
import gif from "../Components/IMAGES/maingif.gif";

import heroVideo from "../Components/IMAGES/heroVideo.mp4";

// 9 IMAGES
import img1 from "../Components/IMAGES/Home Page (1).png";
import img2 from "../Components/IMAGES/Home Page (2).png";
import img3 from "../Components/IMAGES/Home Page (3).png";
import img4 from "../Components/IMAGES/Home Page (4).png";
import img5 from "../Components/IMAGES/Home Page (5).png";
import img6 from "../Components/IMAGES/Home Page (6).png";
import img7 from "../Components/IMAGES/Home Page (7).png";
import img8 from "../Components/IMAGES/Home Page (8).png";
import img9 from "../Components/IMAGES/Home Page (9).png";

const HeroSection = () => {
  const dots = [
    "#0AA7CD",
    "#05B5B0",
    "#9DC506",
    "#F7B905",
    "#DC0529",
    "#C21D75",
    "#EF6C08",
    "#862DE5",
    "#E700B5",
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const images = [null, img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const titles = [
    <>
      Integrated Innovation,<br />
      Advance Technology,<br />
      Design, Construction,<br />
      Market Delivery<br />
      for Biofuel & Allied<br />
      Manufacturing Ecosystems
    </>,
    <>Green Energy Solutions<br />With GD Biogas</>,
    <>Biomethane & Biofuel<br />Future Energy</>,
    <>Waste to Energy<br />Sustainable Systems</>,
    <>Industrial Biogas<br />Power Solutions</>,
    <>Agriculture & Rural<br />Energy Growth</>,
    <>Smart Waste<br />Management</>,
    <>Renewable Power<br />Generation</>,
    <>Clean Cooking Gas<br />& Thermal Energy</>,
    <>Future Ready<br />Green Planet</>,
  ];

  return (
    <div className="hero">
      {/* ================= BACKGROUND ================= */}
      <div className="sectionheromainbackground">
        {activeSlide === 0 ? (
          <video autoPlay loop muted playsInline className="hero-video">
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src={images[activeSlide]}
            alt="Hero Background"
            className="hero-image"
          />
        )}
      </div>

      {/* ================= HEADER ================= */}
      <div className="hero-content-overlay">
        <div className="header-row">
          <div className="logo-containerhero">
            <img src={logo} alt="GDBioGas Logo" className="logohero" />
          </div>

          <div className="nav-common">
            <div className="nav-section-common">
              <h3 className="nav-title-common">GD Biogas for</h3>
              <ul className="nav-list-common">
                <li><Link to="/business">Business opportunity</Link></li>
                <li><Link to="/investors">Investors</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/catalogue">Catalogue</Link></li>
                <li><Link to="/how-we-work">How Do We Work</Link></li>
                <li><Link to="/download">Download Material</Link></li>
                <li><Link to="/login">Log-in</Link></li>
              </ul>
            </div>

            <div className="nav-section-common">
              <h3 className="nav-title-common">GD Planet for</h3>
              <ul className="nav-list-common">
                <li><Link to="/industrial">Industrial Sector</Link></li>
                <li><Link to="/agriculture">Agriculture</Link></li>
                <li><Link to="/waste">Waste</Link></li>
                <li><Link to="/3d-concrete">3D ConcreteHome</Link></li>
                <li><Link to="/healthcare">Health Care</Link></li>
                <li><Link to="/mart">GD Mart</Link></li>
                <li><Link to="/imbaw">GD ImBaw</Link></li>
                <li><Link to="/tourism">GD Tourism</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TITLE + GIF ================= */}
      <div className="hero-bottom-wrapsectionhero">
        <div className="sectionhero-title">
          {titles[activeSlide]}
        </div>

        <div className="circle-element">
          <img src={gif} alt="Animation" className="circle-gifhero" />
        </div>
      </div>

      {/* ================= TIMELINE ================= */}
      <div className="timeline-line"></div>

      <div className="timeline-dots">
        {dots.map((color, index) => (
  <span
    key={index}
    className={`timeline-dot ${
      activeSlide === index + 1 ? "active" : ""
    }`}
    style={{ backgroundColor: color }}
    onClick={() => setActiveSlide(index + 1)}
  ></span>
))}

      </div>
    </div>
  );
};

export default HeroSection;
