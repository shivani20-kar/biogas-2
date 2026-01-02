import React, { useRef } from "react";
import "./CSS/Index16.css"; // Updated CSS file

const BioCNGEquipment = () => {
  const tableScrollRef = useRef(null);

  const scrollLeft = () => {
    tableScrollRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    tableScrollRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };
  return (
    <section className="BioCNGEquipment-wrapper">
      {/* HEADER */}
      <div className="BioCNGEquipment-header">
        <div className="BioCNGEquipment-header-text">
          <h1 className="BioCNGEquipment-title">
            Prices for equipment and services for <br /> 20 TPD BiO-CNG plant
          </h1>
        </div>

        {/* ARROWS */}
        <div className="BioCNGEquipment-arrows">
          <div className="arrow-hover-group arrow-left">
            <span className="arrow-hover-text">
              Go To
              <br /> Back
            </span>
            <button className="BioCNGEquipment-arrow-btn" onClick={scrollLeft}>
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

          <div className="arrow-hover-group arrow-right">
            <button className="BioCNGEquipment-arrow-btn" onClick={scrollRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <path
                  d="M20.9283 15.3527L5.38906 15.3527C5.09797 15.3527 4.85429 15.2584 4.65802 15.0699C4.46153 14.8816 4.36328 14.6478 4.36328 14.3685C4.36328 14.0892 4.46153 13.8554 4.65802 13.6671C4.85429 13.4786 5.09797 13.3843 5.38906 13.3843L20.9283 13.3843L16.4254 9.06397C16.2221 8.86866 16.1217 8.64021 16.1242 8.37863C16.1269 8.11706 16.2274 7.88446 16.4254 7.68084C16.6377 7.47743 16.8813 7.37234 17.1565 7.36556C17.4319 7.35878 17.6756 7.4572 17.8879 7.66082L24.0135 13.5382C24.1416 13.6611 24.2319 13.7907 24.2843 13.9269C24.337 14.0632 24.3633 14.2104 24.3633 14.3685C24.3633 14.5266 24.337 14.6738 24.2843 14.8101C24.2319 14.9463 24.1416 15.0759 24.0135 15.1988L17.8879 21.0762C17.6843 21.2713 17.4428 21.3676 17.1633 21.3652C16.8836 21.3626 16.6377 21.2596 16.4254 21.0562C16.2274 20.8525 16.1248 20.622 16.1177 20.3646C16.1106 20.1072 16.2132 19.8766 16.4254 19.673L20.9283 15.3527Z"
                  fill="#FFFFFF"
                />
              </svg>
            </button>
            <span className="arrow-hover-text">
              Go To
              <br /> Next
            </span>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="BioCNGEquipment-table-container">
        <div className="table-scroll" ref={tableScrollRef}>
          <table className="BioCNGEquipment-table">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Name</th>
                <th>Number of units</th>
                <th>Unit price, EUR</th>
                <th>Discounts</th>
                <th>Discounted unit price, EUR</th>
                <th>Discounted price sub-total, EUR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Project documentation</td>
                <td>1</td>
                <td>95 000</td>
                <td>0%</td>
                <td>95 000</td>
                <td>95 000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Supervision</td>
                <td>1</td>
                <td>40 000</td>
                <td>0%</td>
                <td>40 000</td>
                <td>40 000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Startup and training</td>
                <td>1</td>
                <td>40 000</td>
                <td>0%</td>
                <td>40 000</td>
                <td>40 000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Living and travel expenses</td>
                <td>1</td>
                <td>45 000</td>
                <td>0%</td>
                <td>45 000</td>
                <td>45 000</td>
              </tr>

              <tr>
                <td>5</td>
                <td>Delivery of the equipment</td>
                <td>8</td>
                <td>10 000</td>
                <td>0%</td>
                <td>10 000</td>
                <td>10 000</td>
              </tr>

              <tr>
                <td>6</td>
                <td>Laboratory</td>
                <td>1</td>
                <td>27 000</td>
                <td>0%</td>
                <td>27 000</td>
                <td>27 000</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Solid feeder (dosing buffer machine)</td>
                <td>2</td>
                <td>105 000</td>
                <td>0%</td>
                <td>105 000</td>
                <td>105 000</td>
              </tr>

              <tr>
                <td>8</td>
                <td>Screw conveyor</td>
                <td>1</td>
                <td>114 000</td>
                <td>0%</td>
                <td>114 000</td>
                <td>114 000</td>
              </tr>

              <tr>
                <td>9</td>
                <td>Digester vertical agitator</td>
                <td>12</td>
                <td>78 000</td>
                <td>0%</td>
                <td>78 000</td>
                <td>78 000</td>
              </tr>

              <tr>
                <td>10</td>
                <td>Frame for Digester vertical agitator pos 3</td>
                <td>12</td>
                <td>6 000</td>
                <td>0%</td>
                <td>6 000</td>
                <td>6 000</td>
              </tr>

              <tr>
                <td>11</td>
                <td>Substrate pump</td>
                <td>1</td>
                <td>31 000</td>
                <td>0%</td>
                <td>31 000</td>
                <td>31 000</td>
              </tr>

              <tr>
                <td>12</td>
                <td>Digested substrate pump</td>
                <td>2</td>
                <td>31 000</td>
                <td>0%</td>
                <td>31 000</td>
                <td>31 000</td>
              </tr>

              <tr>
                <td>13</td>
                <td>Filtrate supply pump</td>
                <td>2</td>
                <td>31 000</td>
                <td>0%</td>
                <td>31 000</td>
                <td>31 000</td>
              </tr>

              <tr>
                <td>14</td>
                <td>Substrate separation unit</td>
                <td>2</td>
                <td>56 000</td>
                <td>0%</td>
                <td>56 000</td>
                <td>56 000</td>
              </tr>

              <tr>
                <td>15</td>
                <td>Submersible agitator for receiving tank</td>
                <td>1</td>
                <td>10 000</td>
                <td>0%</td>
                <td>10 000</td>
                <td>10 000</td>
              </tr>

              <tr>
                <td>16</td>
                <td>Submersible agitator for filtrate tank</td>
                <td>1</td>
                <td>10 000</td>
                <td>0%</td>
                <td>10 000</td>
                <td>10 000</td>
              </tr>

              <tr>
                <td>17</td>
                <td>Over- and under pressure safeguard</td>
                <td>2</td>
                <td>7 000</td>
                <td>0%</td>
                <td>7 000</td>
                <td>7 000</td>
              </tr>

              <tr>
                <td>18</td>
                <td>Sight glasses/viewing windows with projector</td>
                <td>2</td>
                <td>6 000</td>
                <td>0%</td>
                <td>6 000</td>
                <td>6 000</td>
              </tr>

              <tr>
                <td>19</td>
                <td>Water supply and canalization system</td>
                <td>1</td>
                <td>48 000</td>
                <td>0%</td>
                <td>48 000</td>
                <td>48 000</td>
              </tr>

              <tr>
                <td>20</td>
                <td>Heat supply station</td>
                <td>1</td>
                <td>47 000</td>
                <td>0%</td>
                <td>47 000</td>
                <td>47 000</td>
              </tr>

              <tr>
                <td>21</td>
                <td>Dry-cooler cooling system for reactors</td>
                <td>2</td>
                <td>36 000</td>
                <td>36 000</td>
                <td>36 000</td>
              </tr>

              <tr>
                <td>22</td>
                <td>Automation and electric cabinet</td>
                <td>1</td>
                <td>290 000</td>
                <td>0%</td>
                <td>290 000</td>
                <td>290 000</td>
              </tr>

              <tr>
                <td>23</td>
                <td>Sensors (set)</td>
                <td>4</td>
                <td>25 000</td>
                <td>0%</td>
                <td>25 000</td>
                <td>25 000</td>
              </tr>

              <tr>
                <td>24</td>
                <td>Gasholder</td>
                <td>1</td>
                <td>89 000</td>
                <td>0%</td>
                <td>89 000</td>
                <td>89 000</td>
              </tr>

              <tr>
                <td>25</td>
                <td>Biogas chiller (Biogas cooling system)</td>
                <td>1</td>
                <td>118 000</td>
                <td>0%</td>
                <td>118 000</td>
                <td>118 000</td>
              </tr>

              <tr>
                <td>26</td>
                <td>Biogas blower</td>
                <td>2</td>
                <td>38 000</td>
                <td>0%</td>
                <td>38 000</td>
                <td>38 000</td>
              </tr>

              <tr>
                <td>27</td>
                <td>Desulphurization column with active coal</td>
                <td>2</td>
                <td>35 000</td>
                <td>0%</td>
                <td>35 000</td>
                <td>35 000</td>
              </tr>

              <tr>
                <td>28</td>
                <td>Biogas burner</td>
                <td>1</td>
                <td>128 000</td>
                <td>0%</td>
                <td>128 000</td>
                <td>128 000</td>
              </tr>

              <tr>
                <td>29</td>
                <td>Gas analyzer</td>
                <td>1</td>
                <td>27 000</td>
                <td>0%</td>
                <td>27 000</td>
                <td>27 000</td>
              </tr>

              <tr>
                <td>30</td>
                <td>Gas conditioning unit</td>
                <td>1</td>
                <td>41 000</td>
                <td>0%</td>
                <td>41 000</td>
                <td>41 000</td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <b>Total by GD PLANET </b>
                </td>
                <td>
                  <b>3 192 000</b>
                </td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <b>(equivalent in Crores)</b>
                </td>
                <td>
                  <b>29</b>
                </td>
              </tr>

              {/* Continue adding all rows */}
              <tr className="client-responsibility">
                <td></td>
                <td>
                  <b className="bold">Client responsibility</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr className="client-responsibility">
                <td>31</td>
                <td>Cascades (40 each)</td>
                <td>44</td>
                <td>22 000</td>
                <td>0%</td>
                <td>22 000</td>
                <td>22 000</td>
              </tr>

              <tr className="client-responsibility">
                <td>32</td>
                <td>Oxygen generator</td>
                <td>1</td>
                <td>60 000</td>
                <td>0%</td>
                <td>60 000</td>
                <td>60 000</td>
              </tr>

              <tr className="client-responsibility">
                <td>33</td>
                <td>Biomethane upgrading plant</td>
                <td>1</td>
                <td>1 400 000</td>
                <td>0%</td>
                <td>1 400 000</td>
                <td>1 400 000</td>
              </tr>

              <tr className="client-responsibility">
                <td>34</td>
                <td>Biomethane compressor plant</td>
                <td>1</td>
                <td>270 000</td>
                <td>0%</td>
                <td>270 000</td>
                <td>270 000</td>
              </tr>

              <tr className="client-responsibility">
                <td>35</td>
                <td>Gas chromatograph</td>
                <td>1</td>
                <td>80 000</td>
                <td>0%</td>
                <td>80 000</td>
                <td>80 000</td>
              </tr>

              <tr className="client-responsibility">
                <td>36</td>
                <td>Construction</td>
                <td>1</td>
                <td>1 600 000</td>
                <td>0%</td>
                <td>1 600 000</td>
                <td>1 600 000</td>
              </tr>

              <tr className="client-responsibility">
                <td>37</td>
                <td>Filtrate Storage</td>
                <td>1</td>
                <td>40 000</td>
                <td>0%</td>
                <td>40 000</td>
                <td>40 000</td>
              </tr>

              <tr className="client-responsibility">
                <td>38</td>
                <td>Weight control (truck scale)</td>
                <td>1</td>
                <td>35 000</td>
                <td>0%</td>
                <td>35 000</td>
                <td>35 000</td>
              </tr>

              <tr className="client-responsibility">
                <td></td>
                <td></td>
                <td>
                  <b>TOTAL by Client, EUR</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>4 453 000</td>
              </tr>

              <tr className="client-responsibility">
                <td></td>
                <td></td>
                <td>(equivalent in Crores) by Client</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <b>41</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BioCNGEquipment;
