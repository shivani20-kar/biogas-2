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
              <td className="two-links">
                <a href="#">Dealer</a>
                <span>  </span>
                <a href="#">Distributor</a>
              </td>
              <td></td><td></td><td></td>
            </tr>

            <tr>
              <td className="two-links">
                <a href="#">Supplier</a>
                <span>    </span>
                <a href="#">Agency</a>
              </td>
              <td></td><td></td><td></td>
            </tr>

            <tr>
              <td className="two-links">
                <a href="#">Co-Owner</a>
                <span>    </span>
                <a href="#">Partners</a>
              </td>
              <td></td><td></td><td></td>
            </tr>

            <tr>
              <td className="two-links">
                <a href="#">Associate</a>
                <span>    </span>
                <a href="#">Human Resources</a>
              </td>
              <td></td><td></td><td></td>
            </tr>

            <tr>
              <td className="two-links">
                <a href="#">Manager</a>
                <span>    </span>
                <a href="#">Director</a>
              </td>
              <td></td><td></td><td></td>
            </tr>

            <tr>
              <td className="two-links">
                <a href="#">CEO</a>
              </td>
              <td></td><td></td><td></td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default LoginTable;
