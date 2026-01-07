import React, { useRef, useEffect, useState } from "react";
import "./Css/Investment4page.css";
import background from "./Rectangle-164.png"; 
const strengths = [
  { id: "01", title: "Concept Development and research", color: "#00d2ff" },
  { id: "02", title: "Design and permissions", color: "#00ffc3" },
  { id: "03", title: "Equipment supply and installation", color: "#ffb600" },
  { id: "04", title: "Commissioning", color: "#ff4500" },
  { id: "05", title: "Biological services", color: "#b6ff00" },
  { id: "06", title: "Sustainable Resource Utilization", color: "#00cfff" },
  { id: "07", title: "Community Engagement Initiatives", color: "#ff0000" },
  { id: "08", title: "Continuous Improvement Strategies", color: "#ff00c8" },
  { id: "09", title: "Marketing", color: "#e600ff" },
  { id: "10", title: "Quality and efficiency", color: "#00d2ff" },
];

const InvestStrengthSection = () => {
     const bannerRef = useRef(null);
      const [visible, setVisible] = useState(false);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setVisible(true);
                observer.unobserve(entry.target); // only animate once
              }
            });
          },
          { threshold: 0.3 } // triggers when 30% of banner is visible
        );
    
        if (bannerRef.current) observer.observe(bannerRef.current);
    
        return () => observer.disconnect();
      }, []);
  return (
<section
  className="strength-section"
  style={{
    backgroundImage: `url(${background})`,
  }}
>

      <div className="product-banner" ref={bannerRef}>
        <div className={`blue-arrow-shapee ${visible ? "animate-arrow" : ""}`}>
          <svg className="blue-arrow-svg" viewBox="0 0 120 180">
            <polygon
              points="0,0 84,0 120,90 84,180 0,180 36,90"
              fill="#8BBEF3"
              stroke="#e3262f"
              strokeWidth="3"
            />
          </svg>
        </div>
        <div className={`product-text ${visible ? "animate-text" : ""}`}>
          <h1 className="product-outline">Products</h1>
        </div>
      </div>

      <div className="strength-cards">
        {strengths.map((item) => (
          <div
            key={item.id}
            className="strength-card"
            style={{ borderColor: item.color }}
          >
            <span className="strength-number" style={{ backgroundColor: item.color }}>
                
              {item.id}
            </span>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <div className="turnkey-section">
        <h3>Turnkey Solutions</h3>
        <p>Clients receive complete, seamless services from one trusted partner.</p>
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default InvestStrengthSection;
