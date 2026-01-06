import React from "react";
import { Link } from "react-router-dom";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/GDTourism.css";
import GDTourismImg from "../Components/IMAGES/GDTourism.jpg";

export default function GDTourism() {
  return (
    <div className="gdtourism-container">
      <h1 className="gdtourism-title">GD Tourism</h1>
      <p className="gdtourism-subtitle">
        GD: The “Better Way” to achieve goals — building a One District, One
        Trillion Dollar Economy through energy and planetary sustainability. A
        district-level reference point for energy and village sustainability.
      </p>

      <div className="gdtourism-table-wrapper">
        <table className="gdtourism-table">
          <thead>
            <tr>
              <th>
                <div className="gdtourism-th-inner">Overview</div>
              </th>
              <th>
                <div className="gdtourism-th-inner">Village Solution</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="gdtourism-overview">
                <h3>GD Tourism</h3>
                <p>
                  GD Tourism is an initiative by GD Bio Gas that connects
                  sustainability with rural development. Our Village Nature
                  Tourism model promotes a lifestyle that is healthy for people,
                  economical for communities, and revolutionary for the
                  environment.
                </p>
                <p>
                  Our goal is to make every village a destination of
                  sustainability, where visitors don’t just travel—they witness
                  the future of rural innovation.
                </p>
              </td>

              <td className="gdtourism-village">
                <div className="gdtourism-card">
                  <img
                    src={GDTourismImg}
                    alt="Palshi Village"
                    className="gdtourism-card-img"
                  />
                  <div className="gdtourism-card-content">
                    <h4>Palshi</h4>
                    <p>
                      Sunergy was founded with a vision to drive sustainable
                      energy solutions that empower individuals, businesses, and
                      communities.
                    </p>
                    <Link to="/palshi">Learn more</Link>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
