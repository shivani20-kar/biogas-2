import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/GDMart.css";

const GDMart = () => {
  return (
    <div className="gdmart-container">

      {/* Title */}
      <h1 className="gdmart-title">GD Mart</h1>

      {/* Subtitle */}
      <p className="gdmart-subtitle">
        "Vocal for Local" is a slogan used to promote the use of Indian-made
        products and services to strengthen the national economy and promote
        self-reliance
      </p>

      {/* Table Wrapper */}
      <div className="gdmart-table-wrapper">
        <table className="gdmart-table">

          <thead>
            <tr>
              <th>Overview</th>
              <th>Solutions</th>
            </tr>
          </thead>

          <tbody>

            {/* GD Mart (left side) + First right column row */}
            <tr>
              <td className="left-col" rowSpan="13">
                <a href="/gd-mart-overview" className="left-link">GD Mart</a>
              </td>

              <td>
                <a href="/agriculture-needs">Agriculture Needs</a>
              </td>
            </tr>

            <tr><td><a href="/animal-needs">Animal Needs</a></td></tr>
            <tr><td><a href="/farmer-needs">Farmer Needs</a></td></tr>
            <tr><td><a href="/organic-food">Organic Food, Vegetable & Grocery</a></td></tr>
            <tr><td><a href="/cold-storage">Cold Storage and Godowns</a></td></tr>
            <tr><td><a href="/food-processing-unit">Small Scale Food Processing Unit</a></td></tr>
            <tr><td><a href="/sports-cultural-campus">Sport and Cultural Campus</a></td></tr>

            {/* RIGHT SIDE COLUMN CONTINUES */}
            <tr><td><a href="/finance-agency">Finance & Agency Offices</a></td></tr>
            <tr><td><a href="/lease-rental">Lease Rental for Others</a></td></tr>
            <tr><td><a href="/ayush-clinic">Aayush Clinic With Panchakarma Massage & Spa</a></td></tr>
            <tr><td><a href="/cng-charging">CNG Pump & Electric Charging Station</a></td></tr>
            <tr><td><a href="/food-court">Food Court</a></td></tr>
            <tr><td><a href="/senior-citizen-club">Senior Citizen Club</a></td></tr>

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default GDMart;
