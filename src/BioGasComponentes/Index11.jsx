import React from "react";
import "./CSS/Index11.css";

const EquipmentSpecifications = () => {
  return (
    <div className="equipmentspecifications-wrapper">
      {/* Header */}
      <div className="equipmentspecifications-header">
        <div className="arrow-index">
          <svg className="arrow-svg" viewBox="0 0 120 180">
            <polygon
              points="0,0 84,0 120,90 84,180 0,180 36,90"
              fill="#f2f2f2"
              stroke="#e3262f"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div className="equipmentspecifications-title">
          <h1>Equipment</h1>
          <p>Specification List</p>
        </div>
      </div>

      {/* Table */}
      <div className="equipmentspecifications-table-section">
        <table className="equipmentspecifications-table">
          <thead>
            <tr className="equipmentspecifications-table-head">
              <th>NO</th>
              <th>Equipment</th>
              <th>Characteristic</th>
              <th>Quantity</th>
            </tr>
          </thead>

          <tbody className="equipmentspecifications-table-body">
            <tr>
              <td>
                {" "}
                <b>1</b>
              </td>
              <td>
                <b>Solid feeder</b>
              </td>
              <td>
                <b>V = 30 m³</b>
              </td>
              <td>
                <b>2</b>
              </td>
            </tr>
            <tr>
              <td>1.1</td>
              <td>Container bunker</td>
              <td></td>
              <td>2</td>
            </tr>
            <tr>
              <td>1.2</td>
              <td>Feeding screws</td>
              <td>set.</td>
              <td>2</td>
            </tr>

            <tr>
              <td>
                {" "}
                <b>2</b>
              </td>
              <td>
                <b>Submersible mixer</b>
              </td>
              <td>
                <b>N = 3.0 kW</b>
              </td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>2.1</td>
              <td>Airtight motor gearbox</td>
              <td></td>
              <td>1</td>
            </tr>
            <tr>
              <td>2.2</td>
              <td>Hydraulic screw (wear-resistant steel)</td>
              <td></td>
              <td>1</td>
            </tr>
            <tr>
              <td>2.3</td>
              <td>Mixer control mechanism</td>
              <td></td>
              <td>1</td>
            </tr>
            <tr>
              <td>2.4</td>
              <td>Electric motor mount</td>
              <td></td>
              <td>1</td>
            </tr>
            <tr>
              <td>2.5</td>
              <td>Set of fasteners</td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>
                {" "}
                <b>3</b>
              </td>
              <td>
                <b>Reactor vertical agitator</b>
              </td>
              <td>
                <b>N=15 kW</b>
              </td>
              <td>10,14</td>
            </tr>

            <tr>
              <td>3.1</td>
              <td>Airtight motor gearbox</td>
              <td></td>
              <td>10,14</td>
            </tr>

            <tr>
              <td>3.2</td>
              <td>Hydraulic screw (wear-resistant steel)</td>
              <td></td>
              <td>10,14</td>
            </tr>

            <tr>
              <td>3.3</td>
              <td>Shaft (adapted to the height of the fermenter)</td>
              <td></td>
              <td>10,14</td>
            </tr>

            <tr>
              <td>3.4</td>
              <td>Blade</td>
              <td></td>
              <td>10,14</td>
            </tr>

            <tr>
              <td>3.5</td>
              <td>Frequency converter</td>
              <td></td>
              <td>10,14</td>
            </tr>

            <tr>
              <td>3.6</td>
              <td>Mounting bracket to bottom of the mixer</td>
              <td></td>
              <td>10,14</td>
            </tr>

            <tr>
              <td>
                {" "}
                <b>4</b>
              </td>
              <td>
                <b>Safety valve of reactors</b>
              </td>
              <td></td>
              <td>
                <b>2 </b>
              </td>
            </tr>

            <tr>
              <td>
                {" "}
                <b>5</b>
              </td>
              <td>
                <b>Window with a searchlight</b>
              </td>
              <td>
                <b>set</b>
              </td>
              <td>
                <b>2</b>
              </td>
            </tr>

            <tr>
              <td>5.1</td>
              <td>Inspection window RD300 (mounts and sealant included)</td>
              <td>Ø300</td>
              <td>4</td>
            </tr>

            <tr>
              <td>5.2</td>
              <td>Spotlight (mount system bundled) VISULUX UL50 -G -H</td>
              <td>230V, 50W, IP65</td>
              <td>2</td>
            </tr>

            <tr>
              <td>
                <b>6</b>
              </td>
              <td>
                <b>Substrate digested pump</b>
              </td>
              <td>
                <b>30 m³/hour N = 7.5 kW</b>
              </td>
              <td>
                <b>2</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>7</b>
              </td>
              <td>
                <b>Separator</b>
              </td>
              <td>
                <b>N = 5.5 kW, Q = 8–12 m³/h</b>
              </td>
              <td>
                <b>2</b>
              </td>
            </tr>

            <tr>
              <td>7.1</td>
              <td>Body</td>
              <td></td>
              <td>2</td>
            </tr>

            <tr>
              <td>7.2</td>
              <td>Substrate Supply Pipe 4”</td>
              <td></td>
              <td>2</td>
            </tr>

            <tr>
              <td>7.3</td>
              <td>Engine – Gearbox</td>
              <td>N = 5.5 kW</td>
              <td>2</td>
            </tr>

            <tr>
              <td>7.4</td>
              <td>Frame</td>
              <td></td>
              <td>2</td>
            </tr>

            <tr>
              <td>7.5</td>
              <td>Screw</td>
              <td></td>
              <td>2</td>
            </tr>

            <tr>
              <td>7.6</td>
              <td>Sieve for filtration</td>
              <td></td>
              <td>2</td>
            </tr>

            <tr>
              <td>
                <b>8</b>
              </td>
              <td>
                <b>Filtrate pump</b>
              </td>
              <td>
                <b>30 m³/hour N = 7.5 kW</b>
              </td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>9</b>
              </td>
              <td>
                <b>Submersible mixer</b>
              </td>
              <td>
                <b>N = 3.0 kW</b>
              </td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>10</b>
              </td>
              <td>
                <b>PVC external gas holder</b>
              </td>
              <td>
                <b>Ø 15.4 m</b>
              </td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>10.1</td>
              <td>Weather protection film</td>
              <td>Ø 15.4 m</td>
              <td>1</td>
            </tr>

            <tr>
              <td>10.2</td>
              <td>
                Gasholder film PELD methane permeation max. 260 cm³/m²*d*1 bar,
                650 N/5cm biogas resistant
              </td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>10.3</td>
              <td>Air blower</td>
              <td>16A, 0.5 kW</td>
              <td>1</td>
            </tr>

            <tr>
              <td>10.4</td>
              <td>Excess and minimum pressure valve</td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>10.5</td>
              <td>Dome level sensor</td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>10.6</td>
              <td>Mounting system</td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>10.7</td>
              <td>Accessories</td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>10.8</td>
              <td>Safety valve</td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>
                <b>11</b>
              </td>
              <td>
                <b>Biogas Cooling System</b>
              </td>
              <td>
                <b>2200 m³/h</b>
              </td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>11.1</td>
              <td>Chiller</td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>11.2</td>
              <td>Heat exchanger</td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>11.3</td>
              <td>Polypropylene glycol tank</td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>
                <b>12</b>
              </td>
              <td>
                <b>Desulphurization system</b>
              </td>
              <td></td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>12.1</td>
              <td>Numbers of charcoal columns</td>
              <td>300 kg</td>
              <td>2</td>
            </tr>

            <tr>
              <td>
                <b>13</b>
              </td>
              <td>
                <b>Biogas compressor</b>
              </td>
              <td>
                <b>
                  Q = 2200 m³/h
                  <br />H = 150 mBar N = 26 kW
                </b>
              </td>
              <td>
                <b>2</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>14</b>
              </td>
              <td>
                <b>Biogas analyzer (CH4, CO2, H2S, O2)</b>
              </td>
              <td></td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>15</b>
              </td>
              <td>
                <b>Electromagnetic flow meter</b>
              </td>
              <td></td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>16</b>
              </td>
              <td>
                <b>Flare</b>
              </td>
              <td>
                <b>2200 m³/h</b>
              </td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>17</b>
              </td>
              <td>
                <b>Gas equipment included</b>
              </td>
              <td>
                <b>set</b>
              </td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>17.1</td>
              <td>Drainage pump with float</td>
              <td>
                DN = 50 Q = 1 m³/h
                <br />H = 13 m
              </td>
              <td>2</td>
            </tr>

            <tr>
              <td>
                <b>18</b>
              </td>
              <td>
                <b>The heat supply system</b>
              </td>
              <td>
                <b>set</b>
              </td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>18.1</td>
              <td>Diaphragm expansion tank</td>
              <td>
                V = 1000 IP = 6 Bar
                <br />T = 120°C
              </td>
              <td>1</td>
            </tr>

            <tr>
              <td>18.2</td>
              <td>Circulating pump for supplying heat carrier</td>
              <td>
                Q = 30 m³/h
                <br />H = 1 bar
              </td>
              <td>1</td>
            </tr>

            <tr>
              <td>18.3</td>
              <td>Propylene glycol feed pump station heating systems</td>
              <td>
                Q = 1.0 m³/h,H = 4 <br />
                bar
              </td>
              <td>1</td>
            </tr>

            <tr>
              <td>18.4</td>
              <td>
                Circulation pump for supplying heat carrier to the digester
              </td>
              <td>
                Q = 18 m³/H = 1.1 <br />
                bar
              </td>
              <td>1</td>
            </tr>

            <tr>
              <td>
                <b>19</b>
              </td>
              <td>
                <b>Water supply and sewerage system, complete, disassembled</b>
              </td>
              <td>
                <b>set</b>
              </td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>20</b>
              </td>
              <td>
                <b>
                  Automation with electrical equipment complete, disassembled
                </b>
              </td>
              <td>
                <b>set</b>
              </td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>20.1</td>
              <td>
                Incoming distribution cabinet with a set of automation DB-1
              </td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>20.2</td>
              <td>
                Incoming distribution cabinet with a set of automation DB-2
              </td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>
                <b>21</b>
              </td>
              <td>
                <b>Sensors, set</b>
              </td>
              <td></td>
              <td>
                <b>1</b>
              </td>
            </tr>

            <tr>
              <td>21.1</td>
              <td>Gas pressure sensor 0,025 Bar</td>
              <td></td>
              <td>2</td>
            </tr>

            <tr>
              <td>21.2</td>
              <td>Gas pressure sensor 0,4 Bar</td>
              <td></td>
              <td>2</td>
            </tr>

            <tr>
              <td>21.3</td>
              <td>Pressure sensor (substrate level) 1,0 Bar</td>
              <td></td>
              <td>3</td>
            </tr>

            <tr>
              <td>21.4</td>
              <td>Pressure sensor (substrate pressure) 2,5 Bar</td>
              <td></td>
              <td>3</td>
            </tr>

            <tr>
              <td>21.5</td>
              <td>Resistive thermometer (gas temperature)</td>
              <td></td>
              <td>3</td>
            </tr>

            <tr>
              <td>21.6</td>
              <td>
                Resistive thermometer with thermo well (fermenter substrate
                temperature)
              </td>
              <td></td>
              <td>3</td>
            </tr>

            <tr>
              <td>21.7</td>
              <td>
                Resistive thermometer with thermo-well (digester tank substrate
                temperature)
              </td>
              <td></td>
              <td>3</td>
            </tr>

            <tr>
              <td>21.8</td>
              <td>Resistive thermometer (heat conductor temperature)</td>
              <td></td>
              <td>3</td>
            </tr>

            <tr>
              <td>21.9</td>
              <td>Conductometric sensor of maximum level</td>
              <td></td>
              <td>2</td>
            </tr>

            <tr>
              <td>21.10</td>
              <td>Conductometric sensor of water level</td>
              <td></td>
              <td>4</td>
            </tr>

            <tr>
              <td>21.11</td>
              <td>Dome position sensor</td>
              <td></td>
              <td>1</td>
            </tr>

            <tr>
              <td>21.12</td>
              <td>Coolant pressure sensor</td>
              <td>
                SEN 3276 B065
                <br />
                G1/2 6Bar
              </td>
              <td>2</td>
            </tr>

            <tr>
              <td>21.13</td>
              <td>Humidity and gas temperature sensor</td>
              <td>ESFTF-I</td>
              <td>2</td>
            </tr>

            <tr>
              <td>
                <b>22</b>
              </td>
              <td>
                <b>Dry cooler 100kW heat pow.</b>
              </td>
              <td></td>
              <td>
                <b>2</b>
              </td>
            </tr>

            <tr>
              <td>
                <b>23</b>
              </td>
              <td>
                <b>Laboratory</b>
              </td>
              <td></td>
              <td>
                <b>1</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EquipmentSpecifications;
