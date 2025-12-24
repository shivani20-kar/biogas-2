import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/HealthCare.css";

const HealthCare = () => {
  return (
    <div className="hc-container">

      <h1 className="hc-title">Health Care</h1>

      <p className="hc-subtitle">
        GD for printing fountains and statues to decorative fencing, monuments,
        and of course, homes, warehouses and farmer guest house. This is a new
        industry, but it will evolve very quickly in numerous directions.
      </p>

      <div className="hc-table-wrapper">
        <table className="hc-table">
          <thead>
            <tr>
              <th>Overview</th>
              <th>Solutions</th>
              <th>Products</th>
            </tr>
          </thead>

          <tbody>
            <tr>

              {/* OVERVIEW */}
              <td>
                <a href="#">GD for Health Care</a>
              </td>

              {/* SOLUTIONS — ALL LINKS IN ONE COLUMN */}
              <td className="hc-sol-col">
                <a href="#">Advance Agro Tourism</a>
                <a href="#">Senior Citizen Club Member</a>
                <a href="#">Stay With Indian Desi Cow</a>
                <a href="#">Meditation & Yoga</a>
                <a href="#">Pharma Care</a>
              </td>

              {/* PRODUCTS */}
              <td>
                <a href="#">Club Membership Products</a>
              </td>

            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default HealthCare;
