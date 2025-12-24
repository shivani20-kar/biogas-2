import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/DownloadMaterial.css";

const DownloadMaterial = () => {
  return (
    <div className="download-container">

      {/* Title */}
      <h1 className="download-title">Download Material</h1>
      <p className="download-subtitle">
        Company brochures and questionnaires for various industries
      </p>

      {/* Table Section */}
      <div className="download-table-wrapper">
        <table className="download-table">

          <thead>
            <tr>
              <th className="download-overview">Overview</th>
              <th className="download-solutions">Solutions</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                <a href="company-brochure" >
                  Company brochure
                </a>
              </td>

              <td>
                <a href="questionnaire" >
                  Questionnaires
                </a>
              </td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default DownloadMaterial;
