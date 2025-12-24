import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/Catalogue.css";

const Catalogue = () => {
  return (
    <div className="catalogue-container">

      {/* Title Section */}
      <h1 className="catalogue-title">Catalogue</h1>
      <p className="catalogue-subtitle">
       GD for energy sustainability solutions in the manufacturing sector.
      </p>

      {/* Table */}
      <div className="catalogue-table-wrapper">
        <table className="catalogue-table">
          <thead>
            <tr>
              <th className="col-overview">Overview</th>
              <th className="col-solutions">Solutions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><a href="/biogas">Biogas</a></td>
              <td><a href="/biogas-equipment">Biogas Equipment CAT</a></td>
            </tr>

            <tr>
              <td><a href="/advance-biofuel">Advance Biofuel</a></td>
              <td><a href="/advance-biofuel-equipment">Advance Biofuel Equipment CAT</a></td>
            </tr>

            <tr>
              <td><a href="/feedstock-supply">Feed stock Supply</a></td>
              <td><a href="/feedstock-supply-equipment">Feed stock Supply Equipment CAT</a></td>
            </tr>

            <tr>
              <td><a href="/biomass-pelleting">Biomass Pelleting</a></td>
              <td><a href="/biomass-pelleting-equipment">Biomass Pelleting Equipment CAT</a></td>
            </tr>

            <tr>
              <td><a href="/cdr">CO₂ removal (CDR)</a></td>
              <td><a href="/cdr-equipment">CO₂ removal (CDR) Equipment CAT</a></td>
            </tr>

            <tr>
              <td><a href="/agrobiogenics">Agrobiogenics</a></td>
              <td><a href="/agrobiogenics-equipment">Agrobiogenics Equipment CAT</a></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Catalogue;
