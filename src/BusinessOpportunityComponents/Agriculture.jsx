import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/Agriculture.css";

const Agriculture = () => {
  return (
    <div className="agri-container">

      <h1 className="agri-title">Agriculture Sector</h1>
      <p className="agri-subtitle">
        GD for energy sustainability solutions in the agricultural sector.
      </p>

      <div className="agri-table-wrapper">
        <table className="agri-table">
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
                <a href="/agriculture/overview">GD for Agriculture</a>
              </td>

              {/* SOLUTIONS */}
              <td>
                <a href="/agriculture/solutions/automated-vertical-farm">Automated Vertical Farm</a>
                <a href="/agriculture/solutions/leafy-greens">Leafy Greens Technology</a>
                <a href="/agriculture/solutions/stackgrow">StackGrow Vertical Farming Technology</a>
                <a href="/agriculture/solutions/microgreens">Microgreens Vertical Farming Technology</a>
                <a href="/agriculture/solutions/growtune">Growtune — The Control Centre of your Vertical Farm</a>
                <a href="/agriculture/solutions/berries">Berries Vertical Farming Technology</a>
                <a href="/agriculture/solutions/container">Container Vertical Farming Technology</a>
              </td>

              {/* PRODUCTS */}
              <td>
                <a href="/agriculture/products/leafy-green-vegetables">Leafy Green Vegetables</a>
                <a href="/agriculture/products/multi-green">Multi Green Vegetables</a>
                <a href="/agriculture/products/strawberry-raspberry">Strawberry, Raspberry</a>
                <a href="/agriculture/products/rd-lab">R&D-Laboratory</a>
                <a href="/agriculture/products/local-food">Local Food</a>
                <a href="/agriculture/products/gd-restaurant">GD Restaurant</a>
              </td>

            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Agriculture;
