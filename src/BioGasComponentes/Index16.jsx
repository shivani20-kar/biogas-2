import React from "react";
import "./CSS/Index16.css"; // Updated CSS file

const BioCNGEquipment = () => {
  return (
    <section className="BioCNGEquipment-wrapper">
      {/* HEADER */}
      <div className="BioCNGEquipment-header">
        <div className="BioCNGEquipment-header-text">
          <h1 className="BioCNGEquipment-title">
            Prices for equipment and services for <br /> 20 tpd bioCNG plant
          </h1>
        </div>

        {/* ARROWS */}
        <div className="BioCNGEquipment-arrows">
          <div className="arrow-hover-group arrow-left">
            <span className="arrow-hover-text">
              Go To
              <br /> Back
            </span>
            <button className="BioCNGEquipment-arrow-btn">←</button>
          </div>
          <div className="arrow-hover-group arrow-right">
            <button className="BioCNGEquipment-arrow-btn">→</button>
            <span className="arrow-hover-text">
              Go To
              <br /> Next
            </span>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="BioCNGEquipment-table-container">
        <div className="table-scroll">
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
                  <b>TOTALby Client, EUR</b>
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
