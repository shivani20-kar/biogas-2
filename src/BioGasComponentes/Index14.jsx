import React, { useRef } from "react";
import "./CSS/Index14.css";

const BiogasUpgrade = () => {
  const tableRef = useRef(null);

  const goNext = () => {
    if (!tableRef.current) return;
    tableRef.current.scrollBy({
      left: 500, // पुढे किती scroll करायचं
      behavior: "smooth",
    });
  };

  const goBack = () => {
    if (!tableRef.current) return;
    tableRef.current.scrollBy({
      left: -500, // मागे किती scroll करायचं
      behavior: "smooth",
    });
  };

  return (
    <section className="biogasupgrade-wrapper">
      {/* ================= HEADER ================= */}
      <div className="biogasupgrade-header">
        <div className="biogasupgrade-header-text">
          <h1 className="biogasupgrade-title">Biogas upgrading plant</h1>
        </div>

        {/* ================= ARROWS ================= */}
        <div className="biogasupgrade-arrows">
          {/* LEFT */}
          <div className="arrow-hover-group arrow-left">
            <span className="arrow-hover-text">
              Go To <br /> Back
            </span>
            <button
              className="biogasupgrade-arrow-btn"
              onClick={goBack}
            >
              ←
            </button>
          </div>

          {/* RIGHT */}
          <div className="arrow-hover-group arrow-right">
            <button
              className="biogasupgrade-arrow-btn"
              onClick={goNext}
            >
              →
            </button>
            <span className="arrow-hover-text">
              Go To <br /> Next
            </span>
          </div>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="biogasupgrade-table-container">
        <div className="table-scroll" ref={tableRef}>
          {/* MAIN TABLE */}
          <table className="biogasupgrade-table">
            <colgroup>
              <col className="col-equipment" />
              <col className="col-small" />
              <col className="col-small" />
              <col className="col-medium" />
              <col className="col-medium" />
              <col className="col-medium" />
            </colgroup>

            <thead>
              <tr>
                <th>Equipment Name</th>
                <th>Instal. Pow. (kW)</th>
                <th>Quantity (pcs)</th>
                <th>Total installed power(kW)</th>
                <th>Working hours per day</th>
                <th>Consumption kWh per day</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Biogas upgrading plant</td>
                <td>349,7</td>
                <td>1</td>
                <td>349,7</td>
                <td>24,0</td>
                <td>8393,9</td>
              </tr>

              <tr>
                <td>Biomethane compressor plant</td>
                <td>217,3</td>
                <td>1</td>
                <td>217,3</td>
                <td>24,0</td>
                <td>5214,7</td>
              </tr>

              <tr>
                <td>Total installed power, kW</td>
                <td></td>
                <td></td>
                <td className="biogasupgrade-highlight">567,0</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>Total consumed electric energy, kWh per day</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="biogasupgrade-highlight">13609</td>
              </tr>

              <tr>
                <td>Average consumed electric power, kW</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="biogasupgrade-highlight">567</td>
              </tr>
            </tbody>
          </table>

          {/* ===== BOTTOM SINGLE ROW TABLE ===== */}
          <table className="biogasupgrade-table biogasupgrade-total-row">
            <colgroup>
              <col className="col-equipment" />
              <col className="col-small" />
              <col className="col-small" />
              <col className="col-medium" />
              <col className="col-medium" />
              <col className="col-medium" />
            </colgroup>

            <tbody>
              <tr>
                <td>Total average consumed electric power, kW</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="biogasupgrade-highlight">567</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BiogasUpgrade;
