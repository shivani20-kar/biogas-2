import React from "react";
import "../Components/Css/HomeSustainabilitySection.css";
import sdg1 from "../Components/IMAGES/sdg.png"; 
import sdg2 from "../Components/IMAGES/sdg2.png";
import sdg3 from "../Components/IMAGES/sdg3.png";
import sdg4 from "../Components/IMAGES/sdg4.png"; 
import sdg5 from "../Components/IMAGES/sdg5.png";
import sdg6 from "../Components/IMAGES/sdg6.png";
import sdg7 from "../Components/IMAGES/sdg7.png"; 
import sdg8 from "../Components/IMAGES/sdg8.png";
import sdg9 from "../Components/IMAGES/sdg9.png";
import sdg10 from "../Components/IMAGES/sdg10.png"; 
import sdg11 from "../Components/IMAGES/sdg11.png";
import sdg12 from "../Components/IMAGES/sdg12.png";
import sdg13 from "../Components/IMAGES/sdg13.png"; 
import sdg14 from "../Components/IMAGES/sdg14.png";
import sdg15 from "../Components/IMAGES/sdg15.png";
import sdg16 from "../Components/IMAGES/sdg16.png"; 
import sdg17 from "../Components/IMAGES/sdg17.png";



const HomeSustainabilitySection = () => {
  return (
    <section className="home-sustainability-section">
      {/* LEFT CONTENT */}
      <div className="home-sustainability-content">
        <h1 className="home-sustainability-title">Sustainability</h1>

        <p className="home-sustainability-subtitle">
          Aligned With the 17 SDGs.
          <br />
          Committed to Real Impact.
        </p>

        <p className="home-sustainability-description">
          We integrate the 17 Sustainable Development Goals into{" "}
          <strong>every stage of our operations</strong>—turning sustainability
          into scalable action across <strong>energy</strong>,{" "}
          <strong>agriculture</strong>, <strong>livelihoods</strong>, and{" "}
          <strong>infrastructure</strong>.
        </p>

       <button className="home-sustainability-btn">
  <span className="hs-text">Know More</span>
  <span className="hs-icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 15 15" fill="none">
      <path
        d="M12.7483 3.51907L1.76037 14.507C1.55453 14.7128 1.31275 14.8156 1.03503 14.8155C0.757307 14.8156 0.515528 14.7128 0.309694 14.507C0.103859 14.3011 0.00102257 14.0593 0.00118376 13.7816C0.00102257 13.5039 0.103859 13.2621 0.309694 13.0563L11.2976 2.0684L4.92961 2.0684C4.64189 2.06824 4.40253 1.97088 4.21152 1.77633C4.02068 1.58161 3.92026 1.33919 3.91027 1.04906C3.91043 0.74909 4.00529 0.499331 4.19484 0.299783C4.38456 0.100074 4.62948 0.000220137 4.92961 0.000220137L13.5925 0.000220252C13.7737 0.000220252 13.9331 0.0318939 14.0705 0.09524C14.2082 0.158425 14.3353 0.248286 14.4518 0.364823C14.5684 0.481361 14.6582 0.608456 14.7214 0.746109C14.7848 0.8836 14.8164 1.04293 14.8164 1.22411L14.8164 9.88705C14.8163 10.1748 14.7165 10.4165 14.5171 10.6124C14.3174 10.8082 14.0676 10.9062 13.7676 10.9064C13.4775 10.8964 13.235 10.799 13.0403 10.6143C12.8456 10.4296 12.7483 10.1872 12.7483 9.88705L12.7483 3.51907Z"
        fill="#E12D36"
      />
    </svg>
  </span>
</button>

      </div>

      {/* RIGHT CARD */}
      {/* RIGHT CARD */}
<div className="home-sustainability-card">
  <div className="home-sdg-slider">
    <img src={sdg1} alt="SDG 1" />
    <img src={sdg2} alt="SDG 2" />
    <img src={sdg3} alt="SDG 3" />
    <img src={sdg4} alt="SDG 4" />
    <img src={sdg5} alt="SDG 5" />
    <img src={sdg6} alt="SDG 6" />
    <img src={sdg7} alt="SDG 7" />
    <img src={sdg8} alt="SDG 8" />
    <img src={sdg9} alt="SDG 9" />
    <img src={sdg10} alt="SDG 10" />
    <img src={sdg11} alt="SDG 11" />
    <img src={sdg12} alt="SDG 12" />
    <img src={sdg13} alt="SDG 13" />
    <img src={sdg14} alt="SDG 14" />
    <img src={sdg15} alt="SDG 15" />
    <img src={sdg16} alt="SDG 16" />
    <img src={sdg17} alt="SDG 17" />
   
  </div>
</div>

    </section>
  );
};

export default HomeSustainabilitySection;
