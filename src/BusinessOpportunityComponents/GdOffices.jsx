import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/GdOffices.css";

import sataraImg from "../Components/IMAGES/satara.png";
import puneImg from "../Components/IMAGES/pune.png";
import palshiImg from "../Components/IMAGES/palshi.jpg";
export default function GdOffices() {
  return (
    <section className="gd-wrapper">
      <div className="gd-title-box">
<svg xmlns="http://www.w3.org/2000/svg" width="130" height="240" viewBox="0 0 195 279" fill="none">
  <g filter="url(#filter0_d_4678_24956)">
    <path d="M59.2649 133.613L6.21875 269.5H133.922L188.933 133.613L133.922 1.5H6.21875L59.2649 133.613Z" fill="none"/>
    <path d="M59.2649 133.613L6.21875 269.5H133.922L188.933 133.613L133.922 1.5H6.21875L59.2649 133.613Z" stroke="#E12D36" stroke-width="3"/>
  </g>
  <defs>
    <filter id="filter0_d_4678_24956" x="0" y="0" width="194.555" height="279" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4678_24956"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4678_24956" result="shape"/>
    </filter>
  </defs>
</svg>         <h2 className="gd-title">GD Offices</h2>
      </div>

      <div className="gd-cards-container">
        <div className="gd-card">
          <img src={sataraImg} alt="Satara Office" className="gd-card-img" />
          <div className="gd-card-content">
            <h3 className="office-name">Satara</h3>
            <p className="office-type">Head Office</p>
            <p className="office-address">
              2nd Floor Amruthdhara, Opp. IDBI Bank,
            
              Ravivar Peth Powai Naka Satara
            </p>
            <a
              href="https://www.google.com/maps/place/Amrut+Dhara+Apartment/@17.686948,74.0028001,830m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc23994c3fdadd5:0xe7db27e6a84f628e!8m2!3d17.686948!4d74.005375!16s%2Fg%2F1pyqvrrq7?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
              className="office-map-link"
            >
              Office On The Map <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M33.223 25.5016H10.5C10.0743 25.5016 9.718 25.358 9.431 25.0706C9.14367 24.7836 9 24.4273 9 24.0016C9 23.576 9.14367 23.2196 9.431 22.9326C9.718 22.6453 10.0743 22.5016 10.5 22.5016H33.223L26.6385 15.9171C26.3412 15.6195 26.1943 15.2713 26.198 14.8726C26.202 14.474 26.3488 14.1195 26.6385 13.8091C26.9488 13.4991 27.3052 13.339 27.7075 13.3286C28.1102 13.3183 28.4667 13.4683 28.777 13.7786L37.7345 22.7361C37.9218 22.9235 38.0538 23.121 38.1305 23.3286C38.2075 23.5363 38.246 23.7606 38.246 24.0016C38.246 24.2426 38.2075 24.467 38.1305 24.6746C38.0538 24.8823 37.9218 25.0798 37.7345 25.2671L28.777 34.2246C28.4793 34.522 28.1262 34.6688 27.7175 34.6651C27.3085 34.6611 26.9488 34.5041 26.6385 34.1941C26.3488 33.8838 26.1988 33.5325 26.1885 33.1401C26.1782 32.7478 26.3282 32.3965 26.6385 32.0861L33.223 25.5016Z" fill="#E12D36"/>
</svg>
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
             
              lajnsc;lkjanovh;oajdja;osln;dndaznljn
            </p>
            <a
              href="https://www.google.com/maps/place/Sneh+Properties/@18.5789214,73.7352727,83m/data=!3m1!1e3!4m6!3m5!1s0x3bc2bbef853962bd:0x896c1cd0aaf467c4!8m2!3d18.5789944!4d73.7354888!16s%2Fg%2F11hbfkz988?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
              className="office-map-link"
            >
              Office On The Map <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M33.223 25.5016H10.5C10.0743 25.5016 9.718 25.358 9.431 25.0706C9.14367 24.7836 9 24.4273 9 24.0016C9 23.576 9.14367 23.2196 9.431 22.9326C9.718 22.6453 10.0743 22.5016 10.5 22.5016H33.223L26.6385 15.9171C26.3412 15.6195 26.1943 15.2713 26.198 14.8726C26.202 14.474 26.3488 14.1195 26.6385 13.8091C26.9488 13.4991 27.3052 13.339 27.7075 13.3286C28.1102 13.3183 28.4667 13.4683 28.777 13.7786L37.7345 22.7361C37.9218 22.9235 38.0538 23.121 38.1305 23.3286C38.2075 23.5363 38.246 23.7606 38.246 24.0016C38.246 24.2426 38.2075 24.467 38.1305 24.6746C38.0538 24.8823 37.9218 25.0798 37.7345 25.2671L28.777 34.2246C28.4793 34.522 28.1262 34.6688 27.7175 34.6651C27.3085 34.6611 26.9488 34.5041 26.6385 34.1941C26.3488 33.8838 26.1988 33.5325 26.1885 33.1401C26.1782 32.7478 26.3282 32.3965 26.6385 32.0861L33.223 25.5016Z" fill="#E12D36"/>
</svg>
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
              Office On The Map <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <path d="M33.223 25.5016H10.5C10.0743 25.5016 9.718 25.358 9.431 25.0706C9.14367 24.7836 9 24.4273 9 24.0016C9 23.576 9.14367 23.2196 9.431 22.9326C9.718 22.6453 10.0743 22.5016 10.5 22.5016H33.223L26.6385 15.9171C26.3412 15.6195 26.1943 15.2713 26.198 14.8726C26.202 14.474 26.3488 14.1195 26.6385 13.8091C26.9488 13.4991 27.3052 13.339 27.7075 13.3286C28.1102 13.3183 28.4667 13.4683 28.777 13.7786L37.7345 22.7361C37.9218 22.9235 38.0538 23.121 38.1305 23.3286C38.2075 23.5363 38.246 23.7606 38.246 24.0016C38.246 24.2426 38.2075 24.467 38.1305 24.6746C38.0538 24.8823 37.9218 25.0798 37.7345 25.2671L28.777 34.2246C28.4793 34.522 28.1262 34.6688 27.7175 34.6651C27.3085 34.6611 26.9488 34.5041 26.6385 34.1941C26.3488 33.8838 26.1988 33.5325 26.1885 33.1401C26.1782 32.7478 26.3282 32.3965 26.6385 32.0861L33.223 25.5016Z" fill="#E12D36"/>
</svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
