import React, { useRef, useEffect, useState } from "react";
import "./Css/Investment3page.css";
// import { ReactComponent as ArrowIcon } from "./arrow.svg";
import img1 from "./Rectangle 103.png";
import img2 from "./Rectangle 103 (1).png";
import img3 from "./Rectangle 103 (2).png";
import img4 from "./Rectangle 103 (3).png";
import img5 from "./Rectangle 103 (4).png";
import img6 from "./Rectangle 103 (15).png";
import img7 from "./Rectangle 103 (7).png";
import img8 from "./Rectangle 103 (8).png";
import img9 from "./Rectangle 103 (9).png";
import img10 from "./Rectangle 103 (10).png";
import img11 from "./Rectangle 103 (11).png";
import img12 from "./Rectangle 103 (13).png";
import img13 from "./Rectangle 103 (14).png";
import img14 from "./Rectangle 103 (16).png";
import img15 from "./Rectangle 103 (17).png";

const products = [
  { id: 1, title: "Biogas & Allied Product Refinery", img: img1 },
  { id: 2, title: "Advance Biofuel Refinery", img: img2 },
  { id: 3, title: "CO2", img: img3 },
  { id: 4, title: "Animal Feeds", img: img4 },
  { id: 5, title: "Energy Feedstock", img: img5 },
  { id: 6, title: "Bio Fertilizer", img: img6 },
  { id: 7, title: "Bio Chemicals", img: img7 },
  { id: 8, title: "Organic A2 Milk Product", img: img8 },
  { id: 9, title: "Eco Wood Composites", img: img9 },
  { id: 10, title: "Carbon Sunk Cement", img: img10 },
  { id: 11, title: "Carbon Graphite", img: img11 },
  { id: 12, title: "3D Construction", img: img12 },
  { id: 13, title: "Turnkey Smart Village", img: img13 },
  { id: 14, title: "Gd Tourism", img: img14 },
  { id: 15, title: "Carbon Crebit", img: img15 },
];
export default function InvestmetProducts() {
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
    <section className="products-section">
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

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-image">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="product-content">
              <h3>{item.title}</h3>
             <span className="card-arrow">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15 15"
  >
    <path d="M12.7483 3.51907L1.76037 14.507C1.55453 14.7128 1.31275 14.8156 1.03503 14.8155C0.757307 14.8156 0.515528 14.7128 0.309694 14.507C0.103859 14.3011 0.00102257 14.0593 0.00118376 13.7816C0.00102257 13.5039 0.103859 13.2621 0.309694 13.0563L11.2976 2.0684L4.92961 2.0684C4.64189 2.06824 4.40253 1.97088 4.21152 1.77633C4.02068 1.58161 3.92026 1.33919 3.91027 1.04906C3.91043 0.74909 4.00529 0.499331 4.19484 0.299783C4.38456 0.100074 4.62948 0.000220137 4.92961 0.000220137L13.5925 0.000220252C13.7737 0.000220252 13.9331 0.0318939 14.0705 0.09524C14.2082 0.158425 14.3353 0.248286 14.4518 0.364823C14.5684 0.481361 14.6582 0.608456 14.7214 0.746109C14.7848 0.8836 14.8164 1.04293 14.8164 1.22411L14.8164 9.88705C14.8163 10.1748 14.7165 10.4165 14.5171 10.6124C14.3174 10.8082 14.0676 10.9062 13.7676 10.9064C13.4775 10.8964 13.235 10.799 13.0403 10.6143C12.8456 10.4296 12.7483 10.1872 12.7483 9.88705L12.7483 3.51907Z" />
  </svg>
</span>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
