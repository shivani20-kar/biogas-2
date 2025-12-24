import React from 'react';
import '../BusinessOpportunityComponents/BusinessOpportunityCss/Investment.css';

const Investment = () => {
  return (
    <div className="investment-business-opportunity">
      <div className='investment-mainsub'>
        <h1 className="investment-main-title">Investment</h1>
        <p className="investment-subtitle">GD for energy sustainability solutions in the manufacturing sector.</p>
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
              <td rowSpan="5" className="investment-overview-cell">
                Investment in biogas & Advance Biofuel
              </td>
              <td><a href="/Solutions">BOT (Built-Operate-Transfer)</a></td>
              <td rowSpan="1"><a href="/product">Biogas & Allied Product Refinery</a></td>
            </tr>

            <tr>
              <td><a href="/Solutions">BOO (Built-Own-Operate)</a></td>
               <td rowSpan="2"><a href="/product">Advance Biofuel Refinery</a></td>
            </tr>

            <tr>
              <td><a href="/Solutions">BOOT (Built-Own-Operate-Transfer)</a></td>
             
            </tr>

            <tr>
              <td><a href="/Solutions">BLT (Built-Lease-Transfer)</a></td>
            </tr>

            <tr>
              <td><a href="/Solutions">BFO (Built-Finance-Operate)</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Investment;