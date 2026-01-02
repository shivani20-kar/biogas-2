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
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
              >
                <path
                  d="M3.435 6.01254H18.9742C19.2653 6.01254 19.509 6.1068 19.7053 6.29533C19.9018 6.48364 20 6.71745 20 6.99674C20 7.27604 19.9018 7.50984 19.7053 7.69815C19.509 7.88668 19.2653 7.98094 18.9742 7.98094H3.435L7.93784 12.3013C8.14117 12.4966 8.24158 12.725 8.23907 12.9866C8.23634 13.2482 8.13593 13.4808 7.93784 13.6844C7.72561 13.8878 7.48193 13.9929 7.2068 13.9997C6.93143 14.0065 6.68764 13.908 6.47542 13.7044L0.34979 7.82708C0.221681 7.70416 0.131414 7.57458 0.0789847 7.43832C0.0263286 7.30206 -4.76837e-07 7.15487 -4.76837e-07 6.99674C-4.76837e-07 6.83861 0.0263286 6.69142 0.0789847 6.55516C0.131414 6.4189 0.221681 6.28932 0.34979 6.1664L6.47542 0.289072C6.67898 0.093981 6.92049 -0.00236106 7.19996 4.41074e-05C7.47966 0.00266862 7.72561 0.105682 7.93784 0.309083C8.13593 0.512704 8.2385 0.743226 8.24557 1.00065C8.25264 1.25807 8.15006 1.4886 7.93784 1.69222L3.435 6.01254Z"
                  fill="#FFFFFF"
                />
              </svg>
            </button>
          </div>

          {/* RIGHT */}
          <div className="arrow-hover-group arrow-right">
            <button
              className="biogasupgrade-arrow-btn"
              onClick={goNext}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
  <path d="M20.9283 15.3527L5.38906 15.3527C5.09797 15.3527 4.85429 15.2584 4.65802 15.0699C4.46153 14.8816 4.36328 14.6478 4.36328 14.3685C4.36328 14.0892 4.46153 13.8554 4.65802 13.6671C4.85429 13.4786 5.09797 13.3843 5.38906 13.3843L20.9283 13.3843L16.4254 9.06397C16.2221 8.86866 16.1217 8.64021 16.1242 8.37863C16.1269 8.11706 16.2274 7.88446 16.4254 7.68084C16.6377 7.47743 16.8813 7.37234 17.1565 7.36556C17.4319 7.35878 17.6756 7.4572 17.8879 7.66082L24.0135 13.5382C24.1416 13.6611 24.2319 13.7907 24.2843 13.9269C24.337 14.0632 24.3633 14.2104 24.3633 14.3685C24.3633 14.5266 24.337 14.6738 24.2843 14.8101C24.2319 14.9463 24.1416 15.0759 24.0135 15.1988L17.8879 21.0762C17.6843 21.2713 17.4428 21.3676 17.1633 21.3652C16.8836 21.3626 16.6377 21.2596 16.4254 21.0562C16.2274 20.8525 16.1248 20.622 16.1177 20.3646C16.1106 20.1072 16.2132 19.8766 16.4254 19.673L20.9283 15.3527Z" fill="#FFFFFF"/>
</svg>
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
