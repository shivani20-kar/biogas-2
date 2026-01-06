import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/Investment.css";

const Investment = () => {
  return (
    <div className="investment-business-opportunity">
      <div className="investment-mainsub">
        <h1 className="investment-main-title">Investment</h1>
        <p className="investment-subtitle">
          GD for energy sustainability solutions in the manufacturing sector.
        </p>
      </div>

      {/* ---------------- Investment Table ---------------- */}
      <div className="investment-table-container">
        <table className="investment-business-table">
          <thead>
            <tr>
              <th>Overview</th>
              <th>Solutions</th>
              <th>Product</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {/* Overview */}
              <td rowSpan="5" className="investment-overview-cell">
                <a href="/investment/biogas-advanced-biofuel">
                  Investment in biogas & Advance Biofuel
                </a>
              </td>

              {/* Solution */}
              <td>
                <a href="/solutions/bot">BOT (Built-Operate-Transfer)</a>
              </td>

              {/* Product */}
              <td>
                <a href="/products/biogas-allied-refinery">
                  Biogas & Allied Product Refinery
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="/solutions/boo">BOO (Built-Own-Operate)</a>
              </td>

              <td rowSpan="2">
                <a href="/products/advanced-biofuel-refinery">
                  Advance Biofuel Refinery
                </a>
              </td>
            </tr>

            <tr>
              <td>
                <a href="/solutions/boot">BOOT (Built-Own-Operate-Transfer)</a>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>
                <a href="/solutions/blt">BLT (Built-Lease-Transfer)</a>
              </td>
              <td></td>
            </tr>

            <tr>
              <td>
                <a href="/solutions/bfo">BFO (Built-Finance-Operate)</a>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Investment;
