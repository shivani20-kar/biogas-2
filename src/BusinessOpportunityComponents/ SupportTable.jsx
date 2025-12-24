import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ SupportTable.css";

const SupportTable = () => {
  const rows = [
    {
      area: "India",
      phone: "0039 0306260000",
      email: "control.room@gruppoab.com",
    },
    {
      area: "India",
      phone: "0039 0306260000",
      email: "control.room@gruppoab.com",
    },
    {
      area: "India",
      phone: "0039 0306260000",
      email: "control.room@gruppoab.com",
    },
    {
      area: "India",
      phone: "0039 0306260000",
      email: "control.room@gruppoab.com",
    },
  ];

  return (
    <div className="support-container">
      <h2 className="support-title">
        For technical assistance,<br />you can contact us at these numbers:
      </h2>

      <table className="support-table">
        <thead>
          <tr>
            <th className="table-header">Area</th>
            <th className="table-header">Telephone n°</th>
            <th className="table-header">E-mail address</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">{row.area}</td>
              <td className="table-cell">{row.phone}</td>
              <td className="table-cell">{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupportTable;
