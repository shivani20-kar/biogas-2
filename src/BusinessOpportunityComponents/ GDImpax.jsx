import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ GDImpax.css";

export default function GDImpax() {
  return (
    <div className="gdimpax-container">

      {/* TITLE */}
      <h1 className="gdimpax-title">GD ImPax</h1>
      <p className="gdimpax-subtitle">Opening doors to a better future</p>

      {/* TABLE */}
      <div className="gdimpax-table-wrapper">
        <table className="gdimpax-table">

          <thead>
            <tr>
              <th><div className="gdimpax-th-inner">Overview</div></th>
<th><div className="gdimpax-th-inner">Solutions</div></th>
<th><div className="gdimpax-th-inner">Products</div></th>

            </tr>
          </thead>

          <tbody>

            <tr>
              {/* OVERVIEW COLUMN */}
              <td rowSpan="8" className="gdimpax-overview">
                <a href="/gd-impax" className="gdimpax-sol-col">
                  GD Impax
                </a>
              </td>

              {/* SOLUTIONS */}
              <td className="gdimpax-sol-col">
                <a href="/multipurpose">Multi Purpose Facility</a>
              </td>

              {/* PRODUCTS */}
              <td>
                <a href="/animal-feeds">Animal Feeds</a>
              </td>
            </tr>

            <tr>
              <td className="gdimpax-sol-col">
                <a href="/profit-boost">Profit boosting advantages</a>
              </td>
              <td>
                <a href="/processed-foods">Processed Foods</a>
              </td>
            </tr>

            <tr>
              <td className="gdimpax-sol-col">
                <a href="/trade-centers">Trade Facilitation Centers</a>
              </td>
              <td>
                <a href="/organic-foods">Organic Vegetables & Foods</a>
              </td>
            </tr>

            <tr>
              <td className="gdimpax-sol-col">
                <a href="/logistics-management">Logistic Management</a>
              </td>
              <td>
                <a href="/energy-product">Energy Product</a>
              </td>
            </tr>

            <tr>
              <td className="gdimpax-sol-col">
                <a href="/light-manufacturing">Light Manufacturing</a>
              </td>
              <td>
                <a href="/gda2-milk">GDA2 Milk Product</a>
              </td>
            </tr>

            <tr>
              <td className="gdimpax-sol-col">
                <a href="/warehouse">Ware House</a>
              </td>
              <td>
                <a href="/furniture">Furniture</a>
              </td>
            </tr>

            <tr>
              <td className="gdimpax-sol-col">
                <a href="/showroom">Showroom</a>
              </td>
              <td>
                <a href="/crockery">Carboware Premium Carbon Crockery</a>
              </td>
            </tr>

            <tr>
              <td className="gdimpax-sol-col">
                <a href="/offices">Offices</a>
              </td>
              <td>
                <a href="/chemicals">Chemicals & Fertilizers</a>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
}
