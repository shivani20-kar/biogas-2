import React, { useRef } from "react";
import "./Css/Investment5page.css";

import img10 from "./3D Construction.png";
import img9 from "./GD Farm.png";
import img8 from "./Food & Beverage.png";
import img7 from "./Organic A2 Milk.png";
import img6 from "./Agrobiogenics.png";
import img5 from "./Biochemical & Fertilizer.png";
import img4 from "./Biofuel.png";
import img3 from "./Biogas.png";
import img2 from "./Animal Feed.png";
import img1 from "./Feedstock.png"; 

const data = [
  { img: img1, title: (
      <>
        Feed Stock <br /> Industry
      </>
    ) },
  { img: img2, title: (<>Animal Feed<br/> Industry</>) },
  { img: img3, title: (<>Biogas<br/> Industry</>) },
  { img: img4, title: (<>Advance Biofuel <br/>Industry</>) },
  { img: img5, title: (<>Biochemical & Ferilizer<br/> Industry</>) },
  { img: img6, title: (<>Agrobiogenics<br/> Industry</>) },
  { img: img7, title: (<>Ornagic A2 Milk Dairy<br/> Industry</>)},
  { img: img8, title:(<>Food & Beverage<br/> Industry</> )},
  { img: img9, title: (<>GD Farm <br/>Industry</>) },
  { img: img10, title: (<>3D Construction<br/> Industry</>) }
];

const InvestmenteIndustrySectors = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="industry-section">
      <div className="industry-header">
        <h2>
          <span className="gd">GD Planet -</span>  <span className="black-text-in">Industry Sectors</span>
        </h2>

       <div className="arrow-controls-invest">
  <button className="arrow-btn left" onClick={scrollLeft}>
    <span className="arrow-hover-text">Go To<br/> Back</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7.3885 12.7508H18.75C18.9628 12.7508 19.141 12.679 19.2845 12.5353C19.4282 12.3918 19.5 12.2136 19.5 12.0008C19.5 11.788 19.4282 11.6098 19.2845 11.4663C19.141 11.3226 18.9628 11.2508 18.75 11.2508H7.3885L10.6807 7.95856C10.8294 7.80973 10.9028 7.63565 10.901 7.43631C10.899 7.23698 10.8256 7.05973 10.6807 6.90456C10.5256 6.74956 10.3474 6.66948 10.1462 6.66431C9.94492 6.65915 9.76667 6.73415 9.6115 6.88931L5.13275 11.3681C5.03908 11.4617 4.97308 11.5605 4.93475 11.6643C4.89625 11.7681 4.877 11.8803 4.877 12.0008C4.877 12.1213 4.89625 12.2335 4.93475 12.3373C4.97308 12.4411 5.03908 12.5399 5.13275 12.6336L9.6115 17.1123C9.76033 17.261 9.93692 17.3344 10.1413 17.3326C10.3458 17.3306 10.5256 17.2521 10.6807 17.0971C10.8256 16.9419 10.9006 16.7662 10.9058 16.5701C10.9109 16.3739 10.8359 16.1982 10.6807 16.0431L7.3885 12.7508Z" fill="white"/>
</svg>
  </button>

  <button className="arrow-btn right" onClick={scrollRight}>
    <span className="arrow-hover-text">Go To<br/> Next</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="11" viewBox="0 0 15 11" fill="none">
  <path d="M12.1115 6.08675H0.75C0.537167 6.08675 0.359 6.01492 0.2155 5.87125C0.0718332 5.72775 0 5.54958 0 5.33675C0 5.12392 0.0718332 4.94575 0.2155 4.80225C0.359 4.65858 0.537167 4.58675 0.75 4.58675H12.1115L8.81925 1.2945C8.67058 1.14567 8.59717 0.971583 8.599 0.77225C8.601 0.572917 8.67442 0.395668 8.81925 0.240501C8.97442 0.0855009 9.15258 0.00541641 9.35375 0.00024974C9.55508 -0.00491693 9.73333 0.0700831 9.8885 0.22525L14.3673 4.704C14.4609 4.79767 14.5269 4.89642 14.5653 5.00025C14.6038 5.10408 14.623 5.21625 14.623 5.33675C14.623 5.45725 14.6038 5.56942 14.5653 5.67325C14.5269 5.77708 14.4609 5.87583 14.3673 5.9695L9.8885 10.4483C9.73967 10.5969 9.56308 10.6703 9.35875 10.6685C9.15425 10.6665 8.97442 10.588 8.81925 10.433C8.67442 10.2778 8.59942 10.1022 8.59425 9.906C8.58908 9.70983 8.66408 9.53417 8.81925 9.379L12.1115 6.08675Z" fill="white"/>
</svg>
  </button>
</div>
 </div>

      <div className="industry-slider" ref={sliderRef}>
        {data.map((item, index) => (
          <div className="industrys-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="industry-label">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InvestmenteIndustrySectors;
