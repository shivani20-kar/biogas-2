import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/Construction3D.css";

const Construction3D = () => {
  return (
    <div className="construction-container">
      <h1 className="construction-title">3D Constructions</h1>

      <p className="construction-subtitle">
        GD for printing fountains and statues to decorative fencing, monuments,
        and of course, homes, warehouses and farmer guest house. This is a new
        industry, but it will evolve very quickly in numerous directions.
      </p>

      <div className="construction-table-wrapper">
        <table className="construction-table">
          <thead>
            <tr className="construction-header">
              <th>Overview</th>
              <th>Solutions</th>
              <th>Products</th>
            </tr>
          </thead>

          <tbody>
            {/* ROW 1 */}
            <tr>
              <td className="overview-col" rowSpan="15">
                <a href="/3d-overview">GD for 3D Constructions</a>
              </td>

              <td className="solutions-col">
                <a href="/3d-solution-moving">
                  Moving Concrete With a Computer Controller
                </a>
              </td>

              <td className="products-col">
                <a href="/3d-affordable-housing">Affordable Housing</a>
              </td>
            </tr>

            {/* ROW 2 */}
            <tr>
              <td className="solutions-col">
                <a href="/3d-solution-robotics">5-Axis Robotics</a>
              </td>

              <td className="products-col">
                <a href="/3d-farmer-guest-house">Farmer Guest House</a>
              </td>
            </tr>

            {/* ROW 3 */}
            <tr>
              <td className="solutions-col">
                <a href="/3d-solution-uses">Uses & Benefits</a>
              </td>

              <td className="products-col">
                <a href="/3d-monument-letters">Monument Letters</a>
              </td>
            </tr>

            {/* ROW 4 */}
            <tr>
              <td className="solutions-col">
                <a href="/3d-solution-questions">Questions & Answers</a>
              </td>

              <td className="products-col">
                <a href="/3d-fens-walls">Fens & Walls</a>
              </td>
            </tr>

            {/* ROW 5 */}
            <tr>
              <td className="solutions-col"></td>
              <td className="products-col">
                <a href="/3d-signs">Signs</a>
              </td>
            </tr>

            {/* ROW 6 */}
            <tr>
              <td className="solutions-col"></td>
              <td className="products-col">
                <a href="/3d-planters">Planters</a>
              </td>
            </tr>

            {/* ROW 7 */}
            <tr>
              <td className="solutions-col"></td>
              <td className="products-col">
                <a href="/3d-fireplaces">Fireplaces</a>
              </td>
            </tr>

            {/* ROW 8 */}
            <tr>
              <td className="solutions-col"></td>
              <td className="products-col">
                <a href="/3d-monuments">Monuments</a>
              </td>
            </tr>

            {/* ROW 9 */}
            <tr>
              <td className="solutions-col"></td>
              <td className="products-col">
                <a href="/3d-fountains">Fountains</a>
              </td>
            </tr>

            {/* ROW 10 */}
            <tr>
              <td className="solutions-col"></td>
              <td className="products-col">
                <a href="/3d-boulders">Boulders</a>
              </td>
            </tr>

            {/* ROW 11 */}
            <tr>
              <td className="solutions-col"></td>
              <td className="products-col">
                <a href="/3d-retainer-block">Retainer Block</a>
              </td>
            </tr>

            {/* ROW 12 */}
            <tr>
              <td className="solutions-col"></td>
              <td className="products-col">
                <a href="/3d-drainage">Drainage</a>
              </td>
            </tr>

            {/* ROW 13 */}
            <tr>
              <td className="solutions-col"></td>
              <td className="products-col">
                <a href="/3d-waterfalls">Waterfalls</a>
              </td>
            </tr>

            {/* ROW 14 */}
            <tr>
              <td className="solutions-col"></td>
              <td className="products-col">
                <a href="/3d-forming">Forming</a>
              </td>
            </tr>

            {/* ROW 15 */}
            <tr>
              <td className="solutions-col"></td>
              <td className="products-col">
                <a href="/3d-stairs">Stairs</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Construction3D;
