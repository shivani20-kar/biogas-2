import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/FaqCategories.css";

export default function FaqCategories() {
  const categories = [
    "Biogas Industry",
    "Advance Biofuel",
    "Feed Stock",
    "Bio Chemical & Fertilizers",
    "Milk Dairy",
    "Agrobiogenic",
    "Food & Beverage",
    "3D Construction",
    "Agro Tourism",
    "GD Film",
  ];

  return (
    <section className="faq-wrapper">
      <h2 className="faq-title">FAQS</h2>

      <p className="faq-subtitle">
        We’ve answered the big questions, but if you still have something on
        your mind, we’re here to help. Choose your industry.
      </p>

      <div className="faq-grid">
        {categories.map((item, index) => (
          <div className="faq-card" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
