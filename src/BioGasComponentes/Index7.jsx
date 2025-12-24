import React from "react";
import "./CSS/Index7.css";

const BiogasPlant = () => {
  return (
    <div className="biogas-wrapper-index">
      {/* Header */}
      <div className="biogas-header-index">
        <div className="arrow-index"> <svg className="arrow-svg" viewBox="0 0 120 180">
                        <polygon
                            points="0,0 84,0 120,90 84,180 0,180 36,90"
                            fill="#f2f2f2"
                            stroke="#e3262f"
                            strokeWidth="4"
                        />
                    </svg></div>
        <div>
          <h1>Biogas Plant</h1>
          <p>Characteristics</p>
        </div>
      </div>

      {/* Characteristics Table */}
      <div className="table-section">
        <table className="big-tabele">
          <thead className="big-tabel">
            <tr>
              <th>Characteristics</th>
              <th>Values</th>
              <th>Figures</th>
            </tr>
          </thead>
          <tbody className="tb-new">
            <tr>
              <td className="border-botom">Number of reactors</td>
              <td className="border-botom">  units</td>
              <td className="border-botom">2</td>
            </tr>

            <tr className="sub-head">
              <td colSpan="3">Reactor Napier grass 33% total solids</td>
            </tr>
            <tr>
              <td>a) volume:</td>
              {/* <td>m³</td>
              <td>777</td> */}
            </tr>
            <tr>
              <td>Work</td>
              <td>m3</td>
              <td>3979</td>
            </tr>
             <tr>
              <td>Overall</td>
              <td>m3</td>
              <td>4245</td>
            </tr>
            <tr>
              <td>b) Oganic load</td>
              <td>kgODM/ m3</td>
              <td>9.55</td>
            </tr>
            <tr>
              <td>c) Hydraulic retention time (gross)</td>
              <td>days</td>
              <td>35/33</td>
            </tr>
            <tr>
              <td>d) Overall dimensions of the reactor (diameter/ height)</td>
              <td>m</td>
              <td>26.0/8.0</td>
            </tr>
            <tr>
              <td className="border-botom">e) Temperature</td>
              <td className="border-botom">0 C</td>
              <td className="border-botom">+52</td>
            </tr>

            <tr className="sub-head">
              <td colSpan="3">Gasholder (external)</td>
            </tr>
            <tr>
              <td>a) volume:</td>
              <td>m3</td>
              <td>1500</td>
            </tr>
            <tr>
              <td>Number of gasholders</td>
              <td>units</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="border-botom">Dimensions of the gasholder (diameter / height)</td>
              <td className="border-botom">m</td>
              <td className="border-botom">15.4/11.8</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Employee Table */}
      <div className="employee-section">
        <h2>Number of employee</h2>
<table className="big-tabele">
        
            <tr className="small-tr">
              <th>Duties & Responsibility</th>
              <th>Shift 1</th>
              <th>Shift 2</th>
              <th>Shift 3</th>
            </tr>
         
          <tbody>
            <tr className="total-row">
              <td className="border-botom">Director</td>
              <td className="border-botom">1</td>
              <td className="border-botom">-</td>
              <td className="border-botom">-</td>
            </tr>
            <tr className="total-row">
              <td className="border-botom">Operator</td>
              <td className="border-botom">1</td>
              <td className="border-botom">1</td>
              <td className="border-botom">1</td>
            </tr>
            <tr className="total-row">
              <td className="border-botom">Driver</td>
              <td className="border-botom">1</td>
              <td className="border-botom">-</td>
              <td className="border-botom">-</td>
            </tr>
            <tr className="total-row">
              <td className="border-botom">Electrician</td>
              <td className="border-botom">1</td>
              <td className="border-botom">-</td>
              <td className="border-botom">-</td>
            </tr>
           <tr className="total-row">
              <td className="border-botom">Mechanic</td>
              <td className="border-botom">2</td>
              <td className="border-botom">-</td>
              <td className="border-botom">-</td>
            </tr>
            <tr className="total-row">
              <td className="border-botom">Total</td>
              <td className="border-botom">7</td>
              <td className="border-botom"></td>
              <td className="border-botom"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BiogasPlant;
