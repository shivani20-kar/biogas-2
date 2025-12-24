import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ Technology.css";

const Technology = () => {
  return (
    <div className="tech-container">

      <h1 className="tech-title">Technology</h1>
      <p className="tech-subtitle">
        GD for energy sustainability solutions in the manufacturing sector.
      </p>

      {/* Table */}
      <div className="tech-table-wrapper">
        <table className="tech-table">
          <thead>
            <tr>
              <th>Overview</th>
              <th>Solutions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <a href="/technology-overview">Biogas Technology</a>
              </td>
              <td>
                <a href="/technology-solutions">High-Load Reactor (HLR)</a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="/technology-overview">Advance Biofuel Technology</a>
              </td>
              <td>
                <a href="/technology-solutions">Hydrochemical Reactor</a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="/technology-overview">Feed stock Supply Technology</a>
              </td>
              <td>
                <a href="/technology-solutions">High-Density Bales</a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="/technology-overview">Pelleting Technology</a>
              </td>
              <td>
                <a href="/technology-solutions">Energy Pellets</a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="/technology-overview">CO₂ removal technology (CDR)</a>
              </td>
              <td>
                <a href="/technology-solutions">Active Bio-char</a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="/technology-overview">Agrobiogenics Technology (ABT)</a>
              </td>
              <td>
                <a href="/technology-solutions">Zero-Waste Zero-Carbon</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Technology;
