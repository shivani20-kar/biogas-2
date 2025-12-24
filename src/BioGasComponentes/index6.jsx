import React from "react";
import "./CSS/Index6.css";

const RawMaterial = () => {
  return (
    <section className="raw-wrapper">
      {/* Header */}
      <div className="raw-header">
        <div className="raw-arrow-shape">
             <svg className="arrow-svg" viewBox="0 0 120 180">
                        <polygon
                            points="0,0 84,0 120,90 84,180 0,180 36,90"
                            fill="#f2f2f2"
                            stroke="#e3262f"
                            strokeWidth="4"
                        />
                    </svg>
        </div>
        <div>
          <h1>Raw Material</h1>
          <p>Potential</p>
        </div>
      </div>

     <div className="tablle-center">
      <h2 className="table-title">
        Raw material potential from the napier grass 27% total
        solid(approximately 80 day-harvest)
      </h2>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Substrate</th>
             <th>Quantity (tonnes/day)</th>
              <th>Quantity (tonnes/Year)</th>
              <th>DM content (%)</th>
              <th>ODM content (%)</th>
              <th>DM Quantity (tonnes/day)</th>
              <th>ODM Quantity (tonnes/day)</th>
              <th>Biogas Yield (m3/tonnes ODM)</th>
              <th>Biogas Yield (m3/day)</th>
              <th>Methane Content (%)</th>
              <th>Bio Methane/Bio-CNG (m3/day)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Napier Grass</td>
              <td>293.3</td>
              <td>107065</td>
              <td>27</td>
              <td>96</td>
              <td>79.20</td>
              <td>76.03</td>
              <td>690</td>
              <td>52462</td>
              <td>53</td>
              <td>27445</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 2 */}
      <h2 className="table-title">
        Raw material potential from the napier grass 30% total
        solid(approximately 80 day-harvest)
      </h2>

      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Substrate</th>
             <th>Quantity (tonnes/day)</th>
              <th>Quantity (tonnes/Year)</th>
              <th>DM content (%)</th>
              <th>ODM content (%)</th>
              <th>DM Quantity (tonnes/day)</th>
              <th>ODM Quantity (tonnes/day)</th>
              <th>Biogas Yield (m3/tonnes ODM)</th>
              <th>Biogas Yield (m3/day)</th>
              <th>Methane Content (%)</th>
              <th>Bio Methane/Bio-CNG (m3/day)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Napier Grass</td>
              <td>293.3</td>
              <td>107065</td>
              <td>27</td>
              <td>96</td>
              <td>79.20</td>
              <td>76.03</td>
              <td>690</td>
              <td>52462</td>
              <td>53</td>
              <td>27445</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 3 */}
       <h2 className="table-title">
        Raw material potential from the napier grass 33% total
        solid(approximately 120 day-harvest)
      </h2>

      <div className="table-wrapper">
       <table className="table">
          <thead>
            <tr>
             <th>Substrate</th>
             <th>Quantity (tonnes/day)</th>
              <th>Quantity (tonnes/Year)</th>
              <th>DM content (%)</th>
              <th>ODM content (%)</th>
              <th>DM Quantity (tonnes/day)</th>
              <th>ODM Quantity (tonnes/day)</th>
              <th>Biogas Yield (m3/tonnes ODM)</th>
              <th>Biogas Yield (m3/day)</th>
              <th>Methane Content (%)</th>
              <th>Bio Methane/Bio-CNG (m3/day)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Napier Grass</td>
              <td>240</td>
              <td>87600</td>
              <td>33</td>
              <td>96</td>
              <td>79.20</td>
              <td>76.03</td>
              <td>690</td>
              <td>52462</td>
              <td>52</td>
              <td>27445</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </section>
  );
};

export default RawMaterial;
