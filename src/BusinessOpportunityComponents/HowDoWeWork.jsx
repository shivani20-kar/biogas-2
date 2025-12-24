import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/HowDoWeWork.css";

const HowDoWeWork = () => {
  return (
    <div className="work-container">

      {/* Title */}
      <h1 className="work-title">How Do We Work</h1>
      <p className="work-subtitle">
        GD for energy sustainability solutions in the manufacturing sector.
      </p>

      {/* Table Section */}
      <div className="work-table-wrapper">
        <table className="work-table">
          
          <thead>
            <tr>
              <th className="work-overview">Overview</th>
              <th className="work-solutions">Solutions</th>
            </tr>
          </thead>

          <tbody>

            {/* Row 1 */}
            <tr>
              <td>Complete turnkey approach to All Industries</td>
              <td>
                <a href="#">Concept Development and Research</a>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td></td>
              <td>
                <a href="#">Design and Permissions</a>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td></td>
              <td>
                <a href="#">Equipment Supply and Installation</a>
              </td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td></td>
              <td>
                <a href="#">Commissioning</a>
              </td>
            </tr>

            {/* Row 5 */}
            <tr>
              <td></td>
              <td>
                <a href="#">Biological and After-Sale Services</a>
              </td>
            </tr>

            {/* Row 6 */}
            <tr>
              <td></td>
              <td>
                <a href="#">Sustainable Resource Utilization</a>
              </td>
            </tr>

            {/* Row 7 */}
            <tr>
              <td></td>
              <td>
                <a href="#">Community Engagement Initiative</a>
              </td>
            </tr>

            {/* Row 8 */}
            <tr>
              <td></td>
              <td>
                <a href="#">Continuous Improvement Strategies</a>
              </td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default HowDoWeWork;
