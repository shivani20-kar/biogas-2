import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ LetterToPM.css";
import flagImage from "../Components/IMAGES/flagImg.png";
import colonimg from "../Components/IMAGES/“.png";

const LetterToPM = () => {
  return (
    <div className="pm-wrapper">
      {/* LEFT SIDE */}
      <div className="pm-left">
        <p className="pm-to">
          To,
          <br />
          The Prime Minister of India
          <br />
          PMO Office
          <br />
          Delhi, India
        </p>

        <p className="pm-greeting">Dear Honorable Prime Minister,</p>

        <h2 className="pm-title">Swatantra Bharat... Samrudha Bharat...!!!</h2>

        <p className="pm-desc">
          I am writing to introduce a revolutionary project, <b>“GD Planet,”</b>{" "}
          aimed at transforming rural India through sustainable development. Our
          initiative,
          <b> “One Village, One Project,” </b> seeks to establish
          self-sufficient ecosystems in rural areas, generating employment
          opportunities and promoting economic growth.
        </p>

        <h3 className="pm-subtitle">Problems faced by rural areas:</h3>
        <ul className="pm-list">
          <li>Agricultural waste management</li>
          <li>Plastic waste management</li>
          <li>Human waste management</li>
          <li>Kitchen waste management</li>
          <li>Animal waste management</li>
          <li>Water waste management</li>
          <li>Pollution</li>
          <li>Floods and heavy rains</li>
          <li>Energy and mineral wars</li>
          <li>Unemployment</li>
          <li>Lack of advanced education</li>
          <li>
            Limited software knowledge in AI and machinery sensor technology
          </li>
          <li>Limited experience in agricultural technology</li>
          <li>Insufficient own contribution for project implementation</li>
        </ul>

        <h3 className="pm-subtitle">Solutions:</h3>

        <p className="pm-solution-title">
          GD Planet Solutions: Anand Kranti to Sudarshan Chakra growth
        </p>

        <ul className="pm-list">
          <li className="pm-highlight">
            <b>
              “One Village, One Project” → GD Planet – “Gram Shakti Multi-Web
              Project”
            </b>
          </li>
          <li>
            Manufacturing facility and service providers center in every village
          </li>
          <li>
            Tata Sons, Tata Trust, Farmer Producer Company (FPC), and allied
            company set-up model
          </li>

          <li>Required Government support:</li>
          <li>
            Gairan vacant land ( Govt. Waste land) allocated for long-term lease
            (15 acres)
          </li>
          <li>Bank Guarantee from state government</li>
          <li>100% FDI investment allowed</li>
          <li>
            Support funds from Environmental, CSR, and carbon credits benefits
            for own contribution to village project
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE FLAG + TEXT */}
      <div className="pm-right">
        <div className="pm-flag-box">
          <img src={flagImage} alt="flag" className="pm-flag" />

          {/* TEXT OVER FLAG */}
          <div className="pm-flag-text">
            <h2 className="pm-vikasit"> <span className="vikasred-line"></span> Vikasit Bharat</h2>

            <img className="vikasitimg" src={colonimg} alt="" />
            <p className="pm-appeal">
              Appeal to Honorable
              <br />
              Prime Minister
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default LetterToPM;
