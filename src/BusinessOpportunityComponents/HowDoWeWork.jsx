import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/HowDoWeWork.css";

const HowDoWeWork = () => {
  return (
    <div className="work-container">
      {/* Title */}
      <h1 className="work-titlewe">How Do We Work</h1>
      <p className="work-subtitle">
        GD for energy sustainability solutions in the manufacturing sector.
      </p>

      {/* Table Section */}
      <div className="work-table-wrapper">
        <table className="work-tablewe">
          <thead>
            <tr>
              <th className="work-overview">Overview</th>
              <th className="work-solutions">Solutions</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr>
              <td>
                <a href="/overview/turnkey-approach">
                  Complete turnkey approach to All Industries
                </a>
              </td>
              <td>
                <a href="/solutions/concept-development">
                  Concept Development and Research
                </a>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>
                <a href="/overview/turnkey-approach"></a>
              </td>
              <td>
                <a href="/solutions/design-permissions">
                  Design and Permissions
                </a>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td>
                <a href="/overview/turnkey-approach"></a>
              </td>
              <td>
                <a href="/solutions/equipment-installation">
                  Equipment Supply and Installation
                </a>
              </td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td>
                <a href="/overview/turnkey-approach"></a>
              </td>
              <td>
                <a href="/solutions/commissioning">Commissioning</a>
              </td>
            </tr>

            {/* Row 5 */}
            <tr>
              <td>
                <a href="/overview/turnkey-approach"></a>
              </td>
              <td>
                <a href="/solutions/after-sale-services">
                  Biological and After-Sale Services
                </a>
              </td>
            </tr>

            {/* Row 6 */}
            <tr>
              <td>
                <a href="/overview/turnkey-approach"></a>
              </td>
              <td>
                <a href="/solutions/resource-utilization">
                  Sustainable Resource Utilization
                </a>
              </td>
            </tr>

            {/* Row 7 */}
            <tr>
              <td>
                <a href="/overview/turnkey-approach"></a>
              </td>
              <td>
                <a href="/solutions/community-engagement">
                  Community Engagement Initiative
                </a>
              </td>
            </tr>

            {/* Row 8 */}
            <tr>
              <td>
                <a href="/overview/turnkey-approach"></a>
              </td>
              <td>
                <a href="/solutions/continuous-improvement">
                  Continuous Improvement Strategies
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HowDoWeWork;
