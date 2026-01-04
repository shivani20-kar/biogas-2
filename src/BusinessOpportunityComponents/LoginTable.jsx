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
              <td>
                <a href="#">Dealer</a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="#">Distributor</a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="#">Supplier</a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="#">Agency</a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="#">Co-Owner</a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="#">Partners</a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="#">Associate</a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="#">Human Resources</a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="#">Manager</a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="#">Director</a>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <a href="#">CEO</a>
              </td>
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
