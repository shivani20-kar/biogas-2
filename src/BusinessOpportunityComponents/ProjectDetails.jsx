import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ProjectDetails.css";

export default function ProjectDetails() {
  return (
    <section className="project-wrapper">
      <h1 className="proje-titles">Project Details:</h1>
      <p className="proje-subtitles">
        15 acres of land required for each village project
      </p>

      <h2 className="section-title">Production Industries:</h2>

      <div className="industry-container">

        {/* LEFT COLUMN */}
        <div className="industry-column">
          <h3 className="red-heading">Service Industries: know as GD Mart</h3>
          <ul className="list">
            <li>Cold storage and warehousing</li>
            <li>Milk collection center</li>
            <li>Farmer's guest house</li>
            <li>Vertical farming</li>
            <li>Livestock farming (cattle, buffalo, goat, and fish)</li>
            <li>18 type of Dealer, Distributor, Consultancy network</li>
            <li>Shopping complex</li>
            <li>Banking and insurance services</li>
            <li>Sports support center</li>
            <li>Cultural center</li>
            <li>E-commerce platform</li>
            <li>Export facilitation center</li>
            <li>Ayush center</li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="industry-column">
          <h3 className="red-heading">Biogas plant (12.5 TPD capacity)</h3>
          <ul className="list">
            <li>Biogas purification</li>
            <li>Electricity generation</li>
            <li>Methane gas compression</li>
            <li>CNG production</li>
            <li>CO2 utilization</li>
            <li>Organic fertilizer production</li>
            <li>CNG and electric charging stations</li>
            <li>Pipeline gas supply</li>
            <li>Excess gas transport to LNG production</li>
          </ul>

          <h3 className="red-heading mt-30">Other Industries</h3>
          <ul className="list">
            <li>Milk Processing Plant</li>
            <li>Food processing units</li>
            <li>Agro Tourism</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
