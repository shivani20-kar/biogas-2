import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/LoginTable.css";

const LoginTable = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">Log-IN</h1>
      <p className="login-subtitle">
        Company brochures and questionnaires for various industries
      </p>

      <div className="login-table-wrapper">
        <table className="login-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Banking & Corporate Insurance</th>
              <th>FPC</th>
              <th>Trust</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><a href="/login/company/dealer">Dealer</a></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><a href="/login/company/distributor">Distributor</a></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><a href="/login/company/supplier">Supplier</a></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><a href="/login/company/agency">Agency</a></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><a href="/login/company/co-owner">Co-Owner</a></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><a href="/login/company/partners">Partners</a></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><a href="/login/company/associate">Associate</a></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><a href="/login/company/hr">Human Resources</a></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><a href="/login/company/manager">Manager</a></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><a href="/login/company/director">Director</a></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><a href="/login/company/ceo">CEO</a></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoginTable;
