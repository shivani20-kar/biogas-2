import { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/HeroSection.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";


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
import img10 from "../Components/IMAGES/Home Page (10).png";
import img11 from "../Components/IMAGES/Home Page (11).png";

const HeroSection = () => {
 useEffect(() => {
  const cursorBox = document.querySelector(".cursor-box");

  const moveCursor = (e) => {
    if (cursorBox) {
      cursorBox.style.left = e.clientX + "px";
      cursorBox.style.top = e.clientY + "px";
    }
  };

  document.addEventListener("mousemove", moveCursor);

  return () => {
    document.removeEventListener("mousemove", moveCursor);
  };
}, []);


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
    "#2A00E7",
    "#00E717",
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [slideAnim, setSlideAnim] = useState(false);

const handlePrev = () => {
  setSlideAnim(false);
  setTimeout(() => {
    setActiveSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
    setSlideAnim(true);
  }, 20);
};

const handleNext = () => {
  setSlideAnim(false);
  setTimeout(() => {
    setActiveSlide((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
    setSlideAnim(true);
  }, 20);
};



  const images = [null, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

  const titles = [
    <>
<h1 className="sectionhero-title">
  <span style={{"--i": 0}}>Integrated Innovation,</span><br/>
  <span style={{"--i": 1}}>Advance Technology,</span><br/>
  <span style={{"--i": 2}}>Design, Construction,</span><br/>
  <span style={{"--i": 3}}>Market Delivery</span><br/>
  <span style={{"--i": 4}}>for Biogas,  Biofuels & Allied</span><br/>
  <span style={{"--i": 5}}>Manufacturing Ecosystems.</span><br/>
</h1>


    </>,
    <div className="animated-box" key={activeSlide}>
      <div className="title-row">
    <span>
      Discover Your Green <br />
      Planet With GD
    </span>
 <svg
  xmlns="http://www.w3.org/2000/svg"
  width="39"
  height="39"
  viewBox="0 0 41 41"
  style={{ cursor: "pointer" }}
  onClick={() => setActiveSlide(0)}
>
  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
  <path
    d="M14 27L27 14M27 14H16M27 14V25"
    stroke="#E63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
  </div>
    <p className="normal-text">Biogas <svg xmlns="http://www.w3.org/2000/svg" width="18" height="40" viewBox="0 0 18 66" fill="none">
  <g filter="url(#filter0_ddd_5336_22863)">
    <path d="M9 9V57" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </g>
  <defs>
    <filter id="filter0_ddd_5336_22863" x="0" y="0" width="18" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5336_22863"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_5336_22863" result="effect2_dropShadow_5336_22863"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_5336_22863" result="effect3_dropShadow_5336_22863"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_5336_22863" result="shape"/>
    </filter>
  </defs>
</svg> Biomethane <svg xmlns="http://www.w3.org/2000/svg" width="18" height="40" viewBox="0 0 18 66" fill="none">
  <g filter="url(#filter0_ddd_5336_22863)">
    <path d="M9 9V57" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </g>
  <defs>
    <filter id="filter0_ddd_5336_22863" x="0" y="0" width="18" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5336_22863"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_5336_22863" result="effect2_dropShadow_5336_22863"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_5336_22863" result="effect3_dropShadow_5336_22863"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_5336_22863" result="shape"/>
    </filter>
  </defs>
</svg>Advance Biofuel<br/> Food <svg xmlns="http://www.w3.org/2000/svg" width="18" height="40" viewBox="0 0 18 66" fill="none">
  <g filter="url(#filter0_ddd_5336_22863)">
    <path d="M9 9V57" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </g>
  <defs>
    <filter id="filter0_ddd_5336_22863" x="0" y="0" width="18" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5336_22863"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_5336_22863" result="effect2_dropShadow_5336_22863"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_5336_22863" result="effect3_dropShadow_5336_22863"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_5336_22863" result="shape"/>
    </filter>
  </defs>
</svg>Feed<svg xmlns="http://www.w3.org/2000/svg" width="18" height="40" viewBox="0 0 18 66" fill="none">
  <g filter="url(#filter0_ddd_5336_22863)">
    <path d="M9 9V57" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </g>
  <defs>
    <filter id="filter0_ddd_5336_22863" x="0" y="0" width="18" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5336_22863"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_5336_22863" result="effect2_dropShadow_5336_22863"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_5336_22863" result="effect3_dropShadow_5336_22863"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_5336_22863" result="shape"/>
    </filter>
  </defs>
</svg> Waste Treatment<svg xmlns="http://www.w3.org/2000/svg" width="18" height="40" viewBox="0 0 18 66" fill="none">
  <g filter="url(#filter0_ddd_5336_22863)">
    <path d="M9 9V57" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </g>
  <defs>
    <filter id="filter0_ddd_5336_22863" x="0" y="0" width="18" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5336_22863"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_5336_22863" result="effect2_dropShadow_5336_22863"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_5336_22863" result="effect3_dropShadow_5336_22863"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_5336_22863" result="shape"/>
    </filter>
  </defs>
</svg> Sustainability</p> 
</div>,
    <div className="animated-box" key={activeSlide}>
      <div className="title-row">
        <span>Explore GD Planet Solutions<br />For Biogas Co-Generation<br/></span>

     <svg
  xmlns="http://www.w3.org/2000/svg"
  width="39"
  height="39"
  viewBox="0 0 41 41"
  style={{ cursor: "pointer" }}
  onClick={() => setActiveSlide(0)}
>
  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
  <path
    d="M14 27L27 14M27 14H16M27 14V25"
    stroke="#E63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

  </div>
    <p className="normal-text">Renewable, Electrical, Cooking Gas & <br/> Thermal Engergy From</p>
    </div>,
     <div className="animated-box" key={activeSlide}>
      <div className="title-row"><span>Explore GD Planet Solutionns<br />For Biomethane Upgrading & Liquification<br/>
      </span>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="39"
  height="39"
  viewBox="0 0 41 41"
  style={{ cursor: "pointer" }}
   onClick={() => setActiveSlide(0)}
>
  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
  <path
    d="M14 27L27 14M27 14H16M27 14V25"
    stroke="#E63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg></div>
    <p className="normal-text">Sustainable, Renewable, Advance Biofuel</p></div>,

   <div className="animated-box">
      <div className="title-row">
        <span>Explore GD Planet Solutions<br />For The Waste Treatment<br/>
        </span>
     <svg
  xmlns="http://www.w3.org/2000/svg"
  width="39"
  height="39"
  viewBox="0 0 41 41"
  style={{ cursor: "pointer" }}
   onClick={() => setActiveSlide(0)}
>
  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
  <path
    d="M14 27L27 14M27 14H16M27 14V25"
    stroke="#E63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
    <p className="normal-text">Treatment of air emissions into atmosphere</p>
    </div>,

     <div className="animated-box" key={activeSlide}>
      <div className="title-row"> <span>Explore GD Planet Solutions<br />
For Organic Food, Feed to Human and Animals.<br/>
</span>
 <svg
  xmlns="http://www.w3.org/2000/svg"
  width="39"
  height="39"
  viewBox="0 0 41 41"
  style={{ cursor: "pointer" }}
 onClick={() => setActiveSlide(0)}
>
  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
  <path
    d="M14 27L27 14M27 14H16M27 14V25"
    stroke="#E63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
<p className="normal-text">Building a regenerative ecosystem that delivers pure organic <br/>nutrition to people and animals alike.</p></div>,
   
     <div className="animated-box" key={activeSlide}>
      <div className="title-row"> <span>Explore GD Planet Solutions<br />
For Smart & Sustainable Living<br/>
</span>
 <svg
  xmlns="http://www.w3.org/2000/svg"
  width="39"
  height="39"
  viewBox="0 0 41 41"
  style={{ cursor: "pointer" }}
   onClick={() => setActiveSlide(0)}
>
  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
  <path
    d="M14 27L27 14M27 14H16M27 14V25"
    stroke="#E63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
<p className="normal-text">Innovating today to build intelligent, sustainable <br/>ecosystems for tomorrow.</p></div>,
   
     <div className="animated-box" key={activeSlide}>
      <div className="title-row"> <span>Explore GD Planet Solutions
<br />For Marketing <br/>
</span>
 <svg
  xmlns="http://www.w3.org/2000/svg"
  width="39"
  height="39"
  viewBox="0 0 41 41"
  style={{ cursor: "pointer" }}
  onClick={() => setActiveSlide(0)}
>
  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
  <path
    d="M14 27L27 14M27 14H16M27 14V25"
    stroke="#E63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
<p className="normal-text">Vocal to Local One Stop Solution</p></div>,

    <div className="animated-box" key={activeSlide}>
      <div className="title-row"><span>Explore GD Planet Solutions
<br />For One District One Trillion Dollar Economy<br/>
</span>
 <svg
  xmlns="http://www.w3.org/2000/svg"
  width="39"
  height="39"
  viewBox="0 0 41 41"
  style={{ cursor: "pointer" }}
   onClick={() => setActiveSlide(0)}
>
  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
  <path
    d="M14 27L27 14M27 14H16M27 14V25"
    stroke="#E63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
<p className="normal-text">Planet Energy for Sujlam, Suflam to Swatantra Bharat, Samrudha Bharat</p></div>,
  
    <div className="animated-box" key={activeSlide}>
      <div className="title-row"><span>Explore GD Planet Turnkey Solutions
<br />For Green Revolution<br/>
</span>
 <svg
  xmlns="http://www.w3.org/2000/svg"
  width="39"
  height="39"
  viewBox="0 0 41 41"
  style={{ cursor: "pointer" }}
   onClick={() => setActiveSlide(0)}
>
  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
  <path
    d="M14 27L27 14M27 14H16M27 14V25"
    stroke="#E63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
<p className="normal-text">Thanks to make INDIA made to measure, Turnkey, <br/>
Reliable & Highly Performing Solutions </p></div>,

 <div className="animated-box" key={activeSlide}>
      <div className="title-row"><span>Explore GD Planet Solutions<br/> For 3D Construction </span>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="39"
  height="39"
  viewBox="0 0 41 41"
  style={{ cursor: "pointer" }}
   onClick={() => setActiveSlide(0)}
>
  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
  <path
    d="M14 27L27 14M27 14H16M27 14V25"
    stroke="#E63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
      <p className="normal-text">Innovative 3D construction solutions for faster,<br/> smarter, and sustainable development.</p></div>,

 <div className="animated-box">
      <div className="title-row"><span>Explore GD Planet Solutions<br/>
For Carbon Credit & Sustainable Tourism<br/>
</span>
 <svg
  xmlns="http://www.w3.org/2000/svg"
  width="39"
  height="39"
  viewBox="0 0 41 41"
  style={{ cursor: "pointer" }}
   onClick={() => setActiveSlide(0)}
>
  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
  <path
    d="M14 27L27 14M27 14H16M27 14V25"
    stroke="#E63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
    </div>
<p className="normal-text">Unlocking new revenue streams through verified carbon<br/> credits and sustainable tourism ecosystems.</p></div>
  ];

  return (
    <div className="hero">
      <div className="cursor-box">
  <div className="circle"></div>
  <span className="cursor-text">
    Click to Enter <br /> GD Planet
  </span>
</div>

      <div className="sectionheromainbackground">
        {activeSlide === 0 ? (
          <video autoPlay loop muted playsInline className="hero-video">
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : (
         <div className="hero-image-wrapper">
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Slide ${index}`}
      className={`hero-image ${activeSlide === index ? "active" : ""}`}
    />
  ))}
</div>

        )}
      </div>
      <div className="hero-content-overlay">
        <div className="header-row">
         <div className="logo-containerhero">
  <img
    src={logo}
    alt="GDBioGas Logo"
    className="logohero"
    onClick={() => setActiveSlide(0)}   
    style={{ cursor: "pointer" }}
  />
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
     <div
  className={`hero-arrow left-arrow ${activeSlide === 0 ? "hide-arrow" : ""}`}
  onClick={handlePrev}
>
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
  <path d="M3.435 6.01254H18.9742C19.2653 6.01254 19.509 6.1068 19.7053 6.29533C19.9018 6.48364 20 6.71745 20 6.99674C20 7.27604 19.9018 7.50984 19.7053 7.69815C19.509 7.88668 19.2653 7.98094 18.9742 7.98094H3.435L7.93784 12.3013C8.14117 12.4966 8.24158 12.725 8.23907 12.9866C8.23634 13.2482 8.13593 13.4808 7.93784 13.6844C7.72561 13.8878 7.48193 13.9929 7.2068 13.9997C6.93143 14.0065 6.68764 13.908 6.47542 13.7044L0.34979 7.82708C0.221681 7.70416 0.131414 7.57458 0.0789847 7.43832C0.0263286 7.30206 -4.76837e-07 7.15487 -4.76837e-07 6.99674C-4.76837e-07 6.83861 0.0263286 6.69142 0.0789847 6.55516C0.131414 6.4189 0.221681 6.28932 0.34979 6.1664L6.47542 0.289072C6.67898 0.093981 6.92049 -0.00236106 7.19996 4.41074e-05C7.47966 0.00266862 7.72561 0.105682 7.93784 0.309083C8.13593 0.512704 8.2385 0.743226 8.24557 1.00065C8.25264 1.25807 8.15006 1.4886 7.93784 1.69222L3.435 6.01254Z" fill="#E12D36"/>
</svg>
</div>


<div className="hero-arrow right-arrow" onClick={handleNext}>
  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
  <path d="M20.9283 15.3527L5.38906 15.3527C5.09797 15.3527 4.85429 15.2584 4.65802 15.0699C4.46153 14.8816 4.36328 14.6478 4.36328 14.3685C4.36328 14.0892 4.46153 13.8554 4.65802 13.6671C4.85429 13.4786 5.09797 13.3843 5.38906 13.3843L20.9283 13.3843L16.4254 9.06397C16.2221 8.86866 16.1217 8.64021 16.1242 8.37863C16.1269 8.11706 16.2274 7.88446 16.4254 7.68084C16.6377 7.47743 16.8813 7.37234 17.1565 7.36556C17.4319 7.35878 17.6756 7.4572 17.8879 7.66082L24.0135 13.5382C24.1416 13.6611 24.2319 13.7907 24.2843 13.9269C24.337 14.0632 24.3633 14.2104 24.3633 14.3685C24.3633 14.5266 24.337 14.6738 24.2843 14.8101C24.2319 14.9463 24.1416 15.0759 24.0135 15.1988L17.8879 21.0762C17.6843 21.2713 17.4428 21.3676 17.1633 21.3652C16.8836 21.3626 16.6377 21.2596 16.4254 21.0562C16.2274 20.8525 16.1248 20.622 16.1177 20.3646C16.1106 20.1072 16.2132 19.8766 16.4254 19.673L20.9283 15.3527Z" fill="#E12D36"/>
</svg>
</div>


      <div className="hero-bottom-wrapsectionhero">
       <div className="hero-title-wrapper">
  {titles[activeSlide]}
</div>


        <div className="circle-element">
          <img src={gif} alt="Animation" className="circle-gifhero" />
        </div>
      </div>

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
     <div className="timeline-mail">
  <svg
    width="44"
    height="23"
    viewBox="0 0 49 30"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <mask id="mailMask">
        <rect x="0" y="0" width="49" height="0" fill="white">
          <animate
            attributeName="height"
            from="0"
            to="30"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>
      </mask>
    </defs>

    {/* Animated fill */}
    <path
      d="M0.750153 1.11621L24.0236 10.6068L24.3068 10.7223L24.59 10.6068L47.8633 1.11621V19.5844L24.3068 29.1904L0.750153 19.5844V1.11621Z"
      fill="white"
      mask="url(#mailMask)"
    />

    {/* Outline */}
    <path
      d="M0.750153 1.11621L24.0236 10.6068L24.3068 10.7223L24.59 10.6068L47.8633 1.11621V19.5844L24.3068 29.1904L0.750153 19.5844V1.11621Z"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
</div>

    </div>
  );
};

export default HeroSection;
