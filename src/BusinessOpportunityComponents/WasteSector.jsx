import React, { useRef } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/WasteSector.css";

const WasteSector = () => { 

  const containerRef = useRef(null);
  
    const scrollTable = (direction) => {
      if (!containerRef.current) return;
  
      const scrollAmount = 220; // adjust scroll distance
      containerRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    };
  return (
    <div className="waste-container">

      <h1 className="waste-title">Waste Sector</h1>

      <p className="waste-subtitle">
        GD for energy sustainability solutions in the Waste sector.
      </p>



      {/* Table */}
      <div className="table-wrapper">
        <div className="table-hero-arrows">
          <div className="arrow-left" onClick={() => scrollTable("left")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 20 14"
              fill="none"
            >
              <path
                d="M3.435 6.01254H18.9742C19.2653 6.01254 19.509 6.1068 19.7053 6.29533C19.9018 6.48364 20 6.71745 20 6.99674C20 7.27604 19.9018 7.50984 19.7053 7.69815C19.509 7.88668 19.2653 7.98094 18.9742 7.98094H3.435L7.93784 12.3013C8.14117 12.4966 8.24158 12.725 8.23907 12.9866C8.23634 13.2482 8.13593 13.4808 7.93784 13.6844C7.72561 13.8878 7.48193 13.9929 7.2068 13.9997C6.93143 14.0065 6.68764 13.908 6.47542 13.7044L0.34979 7.82708C0.221681 7.70416 0.131414 7.57458 0.0789847 7.43832C0.0263286 7.30206 0 7.15487 0 6.99674C0 6.83861 0.0263286 6.69142 0.0789847 6.55516C0.131414 6.4189 0.221681 6.28932 0.34979 6.1664L6.47542 0.289072C6.67898 0.093981 6.92049 -0.00236106 7.19996 4.41074e-05C7.47966 0.00266862 7.72561 0.105682 7.93784 0.309083C8.13593 0.512704 8.2385 0.743226 8.24557 1.00065C8.25264 1.25807 8.15006 1.4886 7.93784 1.69222L3.435 6.01254Z"
                fill="#E12D36"
              />
            </svg>
          </div>
          <div className="arrow-right" onClick={() => scrollTable("right")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 20 14"
              fill="none"
            >
              <path
                d="M16.565 7.98746H1.0258C0.73471 7.98746 0.490997 7.8932 0.294744 7.70467C0.0982536 7.51636 0 7.28255 0 7.00326C0 6.72396 0.0982536 6.49016 0.294744 6.30185C0.490997 6.11332 0.73471 6.01906 1.0258 6.01906H16.565L12.0622 1.69874C11.8588 1.50343 11.7584 1.27497 11.7609 1.01339C11.7637 0.751816 11.8641 0.519215 12.0622 0.315597C12.2744 0.112185 12.5181 0.00709534 12.7932 0.000314C13.0686 -0.00646726 13.3124 0.0919528 13.5246 0.295574L19.6502 6.17292C19.7783 6.29584 19.8686 6.42542 19.921 6.56168C19.9737 6.69794 20 6.84513 20 7.00326C20 7.16139 19.9737 7.30858 19.921 7.44484C19.8686 7.5811 19.7783 7.71068 19.6502 7.8336L13.5246 13.7109C13.321 13.906 13.0795 14.0024 12.8 13.9999C12.5203 13.9973 12.2744 13.8943 12.0622 13.6909C11.8641 13.4873 11.7615 13.2568 11.7544 12.9993C11.7474 12.7419 11.8499 12.5114 12.0622 12.3078L16.565 7.98746Z"
                fill="#E12D36"
              />
            </svg>
          </div>
        </div>


      <div className="waste-table-wrapper" ref={containerRef}>
        <table className="waste-table">
          <thead>
            <tr>
              <th>Overview</th>
              <th>Solutions</th>
              <th>Products</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>
                <a href="/waste/overview">GD for Waste</a>
              </td>

              <td>
                <a href="/waste/solutions/village-waste">Village Waste</a>
              </td>

              <td rowSpan={5}>
                <a href="/waste/products/advance-biofuels">Advance Biofuels</a>
              </td>
            </tr>

            <tr>
              <td></td>
              <td>
                <a href="/waste/solutions/municipal-waste">Municipal Waste</a>
              </td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td>
                <a href="/waste/solutions/industrial-waste">Industrial Waste</a>
              </td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td>
                <a href="/waste/solutions/orc-power">Industrial ORC to Power</a>
              </td>
              <td></td>
            </tr>

            <tr>
              <td></td>
              <td>
                <a href="/waste/solutions/sewage-slug-waste">Sewage Slug Waste</a>
              </td>
              <td></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default WasteSector;
