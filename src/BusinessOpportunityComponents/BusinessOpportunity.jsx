import React from 'react';
import '../BusinessOpportunityComponents/BusinessOpportunityCss/BusinessOpportunity.css';

const BusinessOpportunity = () => {
  return (
    <div className="business-opportunity">
      <div className='mainsub'>
        <h1 className="main-title">Business Opportunity</h1>
        <p className="subtitle">CD for energy sustainability solutions in the manufacturing sector.</p>
      </div>

      {/* ---------------- Business Table ---------------- */}
      <div className="table-container">
        <table className="business-table">
          <thead>
            <tr>
              <th>Overview</th>
              <th>Solutions</th>
              <th>Business Associate</th>
              <th>GD Mart Dealership</th>
              <th>GD Suppliers</th>
              <th>GD Agencies</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td rowSpan="5" className="overview-cell">
                <a href="/overview">GD Opportunity</a>
              </td>
              <td><a href="/solutions">Associate</a></td>
              <td><a href="/business-associate">Business Associate</a></td>
              <td><a href="/cd-mart-dealership">CNG & Electric Charging Station</a></td>
              <td><a href="/cd-suppliers">Napier Grass Supplier</a></td>
              <td><a href="/cd-agencies">Agri Consultant</a></td>
            </tr>

            <tr>
              <td><a href="/solutions">GD Mart Dealership</a></td>
              <td><a href="/business-associate">Senior Business Associate</a></td>
              <td><a href="/cd-mart-dealership">LNG & Electric Charging Station</a></td>
              <td><a href="/cd-suppliers">Biomass Powder Supplier</a></td>
              <td><a href="/cd-agencies">AHD Consultant </a></td>
            </tr>

            <tr>
              <td><a href="/solutions">GD Suppliers</a></td>
              <td></td>
              <td><a href="/cd-mart-dealership">Organic Fertilizer</a></td>
              <td><a href="/cd-suppliers">Plastic Waste Supplier</a></td>
              <td><a href="/cd-agencies">Investment & Finance Agency</a></td>
            </tr>

            <tr>
              <td><a href="/solutions">GD Agencies</a></td>
              <td></td>
              <td><a href="/cd-mart-dealership">Animal Feed- Biomass Pellets</a></td>
              <td></td>
              <td><a href="/cd-agencies">Real Estate Agency</a></td>
            </tr>

            <tr>
              <td><a href="/turnkey-solution">Turnkey Solution</a></td>
              <td></td>
              <td><a href="/cd-mart-dealership">Animal Feed- Silage</a></td>
              <td></td>
              <td><a href="/cd-agencies">Sportsman & Culture Activity Agency </a></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><a href="/cd-mart-dealership">Animal Feed- TMR</a></td>
              <td></td>
              <td><a href="/cd-agencies">Logistic Agency</a></td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* ---------------- Turnkey Table ---------------- */}
      <div className="turnkey-solution">
        <div className="table-container">
          <table className="turnkey-table">
            <thead>
              <tr>
                <th colSpan="3">Turnkey Solution For Smart Village</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><a href="/turnkey-solution">Co-Ownership of Biogas </a></td>
                <td><a href="/turnkey-solution">Co-Ownership of Milk Collection Centre</a></td>
                <td><a href="/turnkey-solution">Co-Ownership of ORC Production</a></td>
              </tr>

              <tr>
                <td><a href="/turnkey-solution">Co-Ownership of Bio Gas Upgradation</a></td>
                <td><a href="/turnkey-solution">Co-Ownership of Hydrochar & AHS Production</a></td>
                <td><a href="/turnkey-solution">Co-Ownership of Green Hydrogen Production</a></td>
              </tr>

              <tr>
                <td><a href="/turnkey-solution">Co-Ownership of CNG Pump & Electric Charging Station</a></td>
                <td><a href="/turnkey-solution">Co-Ownership of CNG Production</a></td>
                <td><a href="/turnkey-solution">Co-Ownership of Electricity Production</a></td>
              </tr>

              <tr>
                <td><a href="/turnkey-solution">Co-Ownership of Electricity Generation</a></td>
                <td><a href="/turnkey-solution">Co-Ownership of LNG Production</a></td>
                <td><a href="/turnkey-solution">Co-Ownership of Organic Fertilizers & Biochemicals Production</a></td>
              </tr>

              <tr>
                <td><a href="/turnkey-solution">Co-Ownership of Pipeline Cooking Gas Supplier</a></td>
                <td><a href="/turnkey-solution">Co-Ownership of LPG Production</a></td>
                <td><a href="/turnkey-solution">Co-Ownership Fertilizer Production</a></td>
                
              </tr>


              <tr>
                <td><a href="/turnkey-solution">Co-Ownership of Cold Storage & Godown</a></td>
                <td><a href="/turnkey-solution">Co-Ownership of SAF Production</a></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default BusinessOpportunity;
