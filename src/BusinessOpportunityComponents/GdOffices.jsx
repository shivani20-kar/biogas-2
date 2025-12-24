import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/GdOffices.css";

import sataraImg from "../Components/IMAGES/satara.png";
import puneImg from "../Components/IMAGES/pune.png";
import palshiImg from "../Components/IMAGES/palshi.jpg";
import shapeImgoffices from "../Components/IMAGES/arrowVendor.png";

export default function GdOffices() {
  return (
    <section className="gd-wrapper">
      {/* TOP HEADING WITH SHAPE */}
      <div className="gd-title-box">
        <img src={shapeImgoffices} alt="shape" className="gd-title-shape" />
        <h2 className="gd-title">GD Offices</h2>
      </div>

      {/* OFFICE CARDS */}
      <div className="gd-cards-container">
        {/* ---------- SATARA ---------- */}
        <div className="gd-card">
          <img src={sataraImg} alt="Satara Office" className="gd-card-img" />
          <div className="gd-card-content">
            <h3 className="office-name">Satara</h3>
            <p className="office-type">Head Office</p>
            <p className="office-address">
              2nd Floor Amruthdhara, Opp. IDBI Bank,
              <br />
              Ravivar Peth Powai Naka Satara
            </p>
            <a
              href="https://www.google.com/maps/place/Amrut+Dhara+Apartment/@17.686948,74.0028001,830m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc23994c3fdadd5:0xe7db27e6a84f628e!8m2!3d17.686948!4d74.005375!16s%2Fg%2F1pyqvrrq7?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
              className="office-map-link"
            >
              Office On The Map <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* ---------- PUNE ---------- */}
        <div className="gd-card">
          <img src={puneImg} alt="Pune Office" className="gd-card-img" />
          <div className="gd-card-content">
            <h3 className="office-name">Pune</h3>
            <p className="office-type">Head Office</p>
            <p className="office-address">
              Head Office jnaknhioheeuihcsckaqnw...
              <br />
              lajnsc;lkjanovh;oajdja;osln;dndaznljn
            </p>
            <a
              href="https://www.google.com/maps/place/Sneh+Properties/@18.5789214,73.7352727,83m/data=!3m1!1e3!4m6!3m5!1s0x3bc2bbef853962bd:0x896c1cd0aaf467c4!8m2!3d18.5789944!4d73.7354888!16s%2Fg%2F11hbfkz988?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
              className="office-map-link"
            >
              Office On The Map <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* ---------- PALSHI ---------- */}
        <div className="gd-card">
          <img src={palshiImg} alt="Palshi Office" className="gd-card-img" />
          <div className="gd-card-content">
            <h3 className="office-name">Palshi</h3>
            <p className="office-type">Head Office</p>
            <p className="office-address">
              At post Palshi Tal Koregaon Dist Satara
            </p>
            <a
              href="https://maps.app.goo.gl/QgFshAb8Fy9DsXi58"
              className="office-map-link"
            >
              Office On The Map <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
