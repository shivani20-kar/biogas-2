import React, { useRef } from "react";

import "./CSS/Index13.css";

const Appendix = () => {
  return (
    <section className="appendix-wrapper">
      {/* HEADER */}
      <div className="appendix-header">
        <div className="appendix-header-text">
          <h1 className="appendix-title">Appendix 4.1</h1>
          <p className="appendix-subtitle">
            Biogas plant (Napier grass 33% total solid)
          </p>
        </div>

        {/* ARROWS */}
        <div className="appendix-arrows">
          {/* LEFT ARROW */}
          <div className="arrow-hover-group arrow-left">
            <span className="arrow-hover-text">
              Go To
              <br /> Back
            </span>
            <button className="appendix-arrow-btn">←</button>
          </div>

          {/* RIGHT ARROW */}
          <div className="arrow-hover-group arrow-right">
            <button className="appendix-arrow-btn">→</button>
            <span className="arrow-hover-text">
              Go To
              <br /> Next
            </span>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="appendix-table-container">
        <div className="table-scroll">
          <table className="appendix-table">
            <thead>
              <tr>
                <th>Equipment Name</th>
                <th>Instal. Pow. (kW)</th>
                <th>Quantity (pcs)</th>
                <th>Total installed power (kW)</th>
                <th>Working hour per day</th>
                <th>Consumption kWh per day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Loader V=30 m3</td>
                <td>20,0</td>
                <td>2</td>
                <td>40,0</td>
                <td>8,0</td>
                <td>320,0</td>
              </tr>
              <tr>
                <td>Screw set.</td>
                <td>18,5</td>
                <td>2</td>
                <td>37,0</td>
                <td>8,0</td>
                <td>296,0</td>
              </tr>
              <tr>
                <td>Reactor Vertical agitator</td>
                <td>15,0</td>
                <td>10</td>
                <td>150,0</td>
                <td>18,0</td>
                <td>2700,0</td>
              </tr>
              <tr>
                <td>Submersible agitator in receiving tank</td>
                <td>5,0</td>
                <td>1</td>
                <td>5,0</td>
                <td>12,0</td>
                <td>60,0</td>
              </tr>
              <tr>
                <td>Submersible agitator in filtrate tank</td>
                <td>3,0</td>
                <td>1</td>
                <td>3,0</td>
                <td>12,0</td>
                <td>36,0</td>
              </tr>
              <tr>
                <td>Biogas cooling system</td>
                <td>56,0</td>
                <td>1</td>
                <td>56,0</td>
                <td>24,0</td>
                <td>1344,0</td>
              </tr>
              <tr>
                <td>Biogas compressor</td>
                <td>26,0</td>
                <td>2</td>
                <td>52,0</td>
                <td>12,0</td>
                <td>624,0</td>
              </tr>
              <tr>
                <td>Separator</td>
                <td>5,5</td>
                <td>2</td>
                <td>8,0</td>
                <td>8,0</td>
                <td>64,0</td>
              </tr>
              <tr>
                <td>Substrate pump to separator</td>
                <td>7,5</td>
                <td>2</td>
                <td>8,0</td>
                <td>8,0</td>
                <td>64,0</td>
              </tr>
              <tr>
                <td>Liquid substrate pump</td>
                <td>7,5</td>
                <td>1</td>
                <td>4,0</td>
                <td>2,0</td>
                <td>8,0</td>
              </tr>
              <tr>
                <td>Filtrate pump</td>
                <td>7,5</td>
                <td>1</td>
                <td>4,0</td>
                <td>2,0</td>
                <td>8,0</td>
              </tr>
              <tr>
                <td>Air compressor for gasholder lock</td>
                <td>1,5</td>
                <td>1</td>
                <td>1,5</td>
                <td>1,0</td>
                <td>1,5</td>
              </tr>
              <tr>
                <td>Air blower for double membrane</td>
                <td>1,0</td>
                <td>1</td>
                <td>1,0</td>
                <td>24,0</td>
                <td>24,0</td>
              </tr>
              <tr>
                <td>Digester cooling system</td>
                <td>4,0</td>
                <td>2</td>
                <td>8,0</td>
                <td>24,0</td>
                <td>192,0</td>
              </tr>
              <tr>
                <td>
                  Circulation pump for supplying heat carrier to the digester
                </td>
                <td>0,8</td>
                <td>2</td>
                <td>1,5</td>
                <td>24,0</td>
                <td>36,0</td>
              </tr>
              <tr>
                <td>
                  Circulation pump for supplying heat carrier to the digester
                  cooling system
                </td>
                <td>2,0</td>
                <td>2</td>
                <td>4,0</td>
                <td>24,0</td>
                <td>96,0</td>
              </tr>
              <tr>
                <td>
                  Circulating pump feeding hot water at technical building
                </td>
                <td>0,1</td>
                <td>1</td>
                <td>0,1</td>
                <td>24,0</td>
                <td>1,9</td>
              </tr>

              <tr>
                <td>Propylene glycol pump station</td>
                <td>0,8</td>
                <td>1</td>
                <td>0,8</td>
                <td>0,5</td>
                <td>0,4</td>
              </tr>

              <tr>
                <td>Drinage pump</td>
                <td>1,0</td>
                <td>2</td>
                <td>2,0</td>
                <td>0,5</td>
                <td>1,0</td>
              </tr>

              <tr>
                <td>Lighting of the biogas plant territory</td>
                <td>1,0</td>
                <td>1</td>
                <td>1,0</td>
                <td>8,0</td>
                <td>8,0</td>
              </tr>

              <tr>
                <td>Spot light for digesters inspection windows</td>
                <td>0,1</td>
                <td>1,0</td>
                <td>0,1</td>
                <td>0,5</td>
                <td>0,0</td>
              </tr>

              <tr>
                <td>Working lighting of switchboard</td>
                <td>0,1</td>
                <td>1,0</td>
                <td>0,1</td>
                <td>0,5</td>
                <td>0,1</td>
              </tr>

              <tr>
                <td>Total installed power, kW</td>
                <td></td>
                <td></td>
                <td className="appendix-highlight">447</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Total consumed electric energy, kWh per day</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="appendix-highlight">7011</td>
              </tr>

              <tr>
                <td>Total consumed power, kW</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="appendix-highlight">292</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Appendix;
