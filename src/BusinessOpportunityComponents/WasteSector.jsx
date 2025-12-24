import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/WasteSector.css";

const WasteSector = () => {
  return (
    <div className="waste-container">

      <h1 className="waste-title">Waste Sector</h1>

      <p className="waste-subtitle">
        GD for energy sustainability solutions in the Waste sector.
      </p>

      {/* Table */}
      <div className="waste-table-wrapper">
        <table className="waste-table">
          <thead>
            <tr>
              <th>Overview</th>
              <th>Solutions</th>
              <th>Products</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                <a href="/waste/overview">GD for Waste</a>
              </td>

              <td>
                <a href="/waste/solutions/village-waste">Village Waste</a>
              </td>

              <td rowSpan={5}>
                <a href="/waste/products/advance-biofuels">Advance Biofuels</a>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <a href="/waste/solutions/municipal-waste">Municipal Waste</a>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <a href="/waste/solutions/industrial-waste">Industrial Waste</a>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <a href="/waste/solutions/orc-power">Industrial ORC to Power</a>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <a href="/waste/solutions/sewage-slug-waste">Sewage Slug Waste</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default WasteSector;
