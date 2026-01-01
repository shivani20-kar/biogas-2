import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/PartnerRegistration.css";

export default function PartnerRegistration() {
  return (
    <section className="partner-wrapper">
      <div className="partner-left-shape">
       <svg xmlns="http://www.w3.org/2000/svg" width="150" height="260" viewBox="0 0 195 279" fill="none">
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
</svg>
      </div>

      <div className="partner-content">
        <h1 className="partner-title">
          Partner <span>Registration</span>
        </h1>
        <p className="partner-subtext">
          Fill out the form, and we will contact you <br/>as soon as possible.
        </p>
      </div>
    </section>
  );
}
