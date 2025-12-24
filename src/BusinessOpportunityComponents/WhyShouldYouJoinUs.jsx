import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/WhyShouldYouJoinUs.css";

export default function WhyShouldYouJoinUs() {
  const items = [
    { number: "01", text: "Professional growth", color: "red" },
    { number: "02", text: "Continuing education", color: "blue" },
    { number: "03", text: "Social guarantees", color: "purple" },
    { number: "04", text: "Participation in green projects", color: "green" },
    { number: "05", text: "Village Development Program", color: "orange" },
    { number: "06", text: "One District, One Trillion Mission", color: "pink" },
  ];

  return (
    <section className="why-join-wrapper">
      <h2 className="why-join-title">Why should you join us?</h2>

      <p className="why-join-desc">
        Being part of the GD Biogas, GD Advance Biofuel, GD Planet, GD ImPax, GD Mart, GD Ecommerce, GD Farm, GD Food Processing, GD 3D Construction Homes, GD Trust, and GD NBFC teams will offer interesting work at the intersection of multiple industries: renewables, biotechnology, construction, mechanical engineering, energy, agritech, food systems, digital commerce, and financial services. In addition, we are a growing group operating in rapidly expanding sectors, driven by modern management practices and future-ready innovation.
      </p>

      <div className="why-join-cards">
        {items.map((item, index) => (
          <div key={index} className={`why-card border-${item.color}`}>
            <h3 className="why-card-number">{item.number}</h3>
            <p className="why-card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
