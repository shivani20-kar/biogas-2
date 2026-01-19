import React, { useRef, useEffect, useState } from "react";
import "./Css/Investment4page.css";
import background from "./Rectangle-164.png"; 
const strengths = [
  { id: "01", title: "Concept Development and research", color: "#00CCE7" },
  { id: "02", title: "Design and permissions", color: "#20E3BB" },
  { id: "03", title: "Equipment supply and installation", color: "#FFAC26" },
  { id: "04", title: "Commissioning", color: "#FF5622" },
  { id: "05", title: "Biological services", color: "#9DC506" },
  { id: "06", title: "Sustainable Resource Utilization", color: "#05B5B0" },
  { id: "07", title: "Community Engagement Initiatives", color: "#DC0529" },
  { id: "08", title: "Continuous Improvement Strategies", color: "#C21D75" },
  { id: "09", title: "Marketing", color: "#E700B5" },
  { id: "10", title: "Quality and efficiency", color: "#0AA7CD" },
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
          <h1 className="product-outline">Strength</h1>
        </div>
      </div>

     <div className="strength-frame-wrapper">
  {strengths.map((item) => (
    <div key={item.id} className="strength-frame">
      
      {/* COLORED FRAME */}
      <div
        className="frame-mask"
        style={{ backgroundColor: item.color }}
      ></div>

      <div className="frame-content">
        <span
          className="frame-number"
          style={{ backgroundColor: item.color }}
        >
          {item.id}
        </span>

        <p className="frame-title">{item.title}</p>
      </div>

    </div>
  ))}
</div>



      <div className="turnkey-section">
        <div>
        <h3>Turnkey Solutions</h3>
        <p>Clients receive complete, seamless services from one trusted partner.</p>
      </div>
       <div> <button className="turnkey-btn">  <span class="turnkey-text">Learn More</span>
  <span class="turnkey-icon"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 15 15" fill="none">
  <path d="M12.7483 3.51907L1.76037 14.507C1.55453 14.7128 1.31275 14.8156 1.03503 14.8155C0.757307 14.8156 0.515528 14.7128 0.309694 14.507C0.103859 14.3011 0.00102257 14.0593 0.00118376 13.7816C0.00102257 13.5039 0.103859 13.2621 0.309694 13.0563L11.2976 2.0684L4.92961 2.0684C4.64189 2.06824 4.40253 1.97088 4.21152 1.77633C4.02068 1.58161 3.92026 1.33919 3.91027 1.04906C3.91043 0.74909 4.00529 0.499331 4.19484 0.299783C4.38456 0.100074 4.62948 0.000220137 4.92961 0.000220137L13.5925 0.000220252C13.7737 0.000220252 13.9331 0.0318939 14.0705 0.09524C14.2082 0.158425 14.3353 0.248286 14.4518 0.364823C14.5684 0.481361 14.6582 0.608456 14.7214 0.746109C14.7848 0.8836 14.8164 1.04293 14.8164 1.22411L14.8164 9.88705C14.8163 10.1748 14.7165 10.4165 14.5171 10.6124C14.3174 10.8082 14.0676 10.9062 13.7676 10.9064C13.4775 10.8964 13.235 10.799 13.0403 10.6143C12.8456 10.4296 12.7483 10.1872 12.7483 9.88705L12.7483 3.51907Z" fill="#E12D36"/>
</svg></span></button></div>
      </div>
    </section>
  );
};

export default InvestStrengthSection;
