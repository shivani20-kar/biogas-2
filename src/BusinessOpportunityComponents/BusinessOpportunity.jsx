import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/BusinessOpportunity.css";

const BusinessOpportunity = () => {
  return (
    <div className="business-opportunity">
      {/* -------- TITLE -------- */}
      <div className="mainsub">
        <h1 className="main-title">Business Opportunity</h1>
        <p className="subtitle">
          CD for energy sustainability solutions in the manufacturing sector.
        </p>
      </div>

      {/* -------- BUSINESS TABLE -------- */}
      <div className="table-container">
        <table className="business-table">
          <thead>
            <tr>
              <th className="thb">Overview</th>
              <th className="thb">Solutions</th>
              <th className="thb">Business Associate</th>
              <th className="thb">GD Mart Dealership</th>
              <th className="thb">GD Suppliers</th>
              <th className="thb">GD Agencies</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="tdd" rowSpan={5}>
                <a href="/overview">GD Opportunity</a>
              </td>
              <td className="tdd"><a href="#">Associate</a></td>
              <td className="tdd"><a href="#">Business Associate</a></td>
              <td className="tdd"><a href="#">CNG & Electric Charging Station</a></td>
              <td className="tdd"><a href="#">Napier Grass Supplier</a></td>
              <td className="tdd"><a href="#">Agri Consultant</a></td>
            </tr>

            <tr>
              <td className="tdd"><a href="#">GD Mart Dealership</a></td>
              <td className="tdd"><a href="#">Senior Business Associate</a></td>
              <td className="tdd"><a href="#">LNG & Electric Charging Station</a></td>
              <td className="tdd"><a href="#">Biomass Powder Supplier</a></td>
              <td className="tdd"><a href="#">AHD Consultant</a></td>
            </tr>

            <tr>
              <td className="tdd"><a href="#">GD Suppliers</a></td>
              <td className="tdd"></td>
              <td className="tdd"><a href="#">Organic Fertilizer</a></td>
              <td className="tdd"><a href="#">Plastic Waste Supplier</a></td>
              <td className="tdd"><a href="#">Investment & Finance Agency</a></td>
            </tr>

            <tr>
              <td className="tdd"><a href="#">GD Agencies</a></td>
              <td className="tdd"></td>
              <td className="tdd"><a href="#">Animal Feed – Biomass Pellets</a></td>
              <td className="tdd"></td>
              <td className="tdd"><a href="#">Real Estate Agency</a></td>
            </tr>

            <tr>
              <td className="tdd"><a href="#">Turnkey Solution</a></td>
              <td className="tdd"></td>
              <td className="tdd"><a href="#">Animal Feed – Silage</a></td>
              <td className="tdd"></td>
              <td className="tdd"><a href="#">Sportsman & Culture Activity Agency</a></td>
            </tr>

            <tr>
              <td className="tdd"></td>
              <td className="tdd"></td>
              <td className="tdd"></td>
              <td className="tdd"><a href="#">Animal Feed – TMR</a></td>
              <td className="tdd"></td>
              <td className="tdd"><a href="#">Logistic Agency</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* -------- TURNKEY TABLE -------- */}
      <div className="table-container turnkey-solution">
        <table className="turnkey-table">
          <thead>
            <tr>
              <th className="thd" colSpan={3}>Turnkey Solution For Smart Village</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="tdd"><a href="#">Co-Ownership of Biogas</a></td>
              <td className="tdd"><a href="#">Co-Ownership of Milk Collection Centre</a></td>
              <td className="tdd"><a href="#">Co-Ownership of ORC Production</a></td>
            </tr>

            <tr>
              <td className="tdd"><a href="#">Co-Ownership of Bio Gas Upgradation</a></td>
              <td className="tdd"><a href="#">Co-Ownership of Hydrochar & AHS Production</a></td>
              <td className="tdd"><a href="#">Co-Ownership of Green Hydrogen Production</a></td>
            </tr>

            <tr>
              <td className="tdd"><a href="#">Co-Ownership of CNG Pump & Electric Charging Station</a></td>
              <td className="tdd"><a href="#">Co-Ownership of CNG Production</a></td>
              <td className="tdd"><a href="#">Co-Ownership of Electricity Production</a></td>
            </tr>

            <tr>
              <td className="tdd"><a href="#">Co-Ownership of Electricity Generation</a></td>
              <td className="tdd"><a href="#">Co-Ownership of LNG Production</a></td>
              <td className="tdd"><a href="#">Co-Ownership of Organic Fertilizers & Biochemicals Production</a></td>
            </tr>

            <tr>
              <td className="tdd"><a href="#">Co-Ownership of Pipeline Cooking Gas Supplier</a></td>
              <td className="tdd"><a href="#">Co-Ownership of LPG Production</a></td>
              <td className="tdd"><a href="#">Co-Ownership of Fertilizer Production</a></td>
            </tr>

            <tr>
              <td className="tdd"><a href="#">Co-Ownership of Cold Storage & Godown</a></td>
              <td className="tdd"><a href="#">Co-Ownership of SAF Production</a></td>
              <td className="tdd"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusinessOpportunity;
