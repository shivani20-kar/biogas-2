import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ FinanceTeam.css";

import img1 from "../Components/IMAGES/joyashishMaitra.png";
import img2 from "../Components/IMAGES/veenaPednekar.png";
import img3 from "../Components/IMAGES/shraddhaKandude.png";
import img4 from "../Components/IMAGES/uttamMalik.png";

import linkedinIcon from "../Components/IMAGES/linkdin.png";

const FinanceTeam = () => {
  const team = [
    {
      img: img1,
      link: "https://www.linkedin.com/in/joyashish-maitra"
    },
    {
      img: img2,
      link: "https://www.linkedin.com/in/veena-pednekar"
    },
    {
      img: img3,
      link: "https://www.linkedin.com/in/shraddha-kandude"
    },
    {
      img: img4,
      link: "https://www.linkedin.com/in/uttam-malik"
    }
  ];

  return (
    <section className="finance-team-section">
      <h2 className="finance-team-title">GD Finance & Investment Team</h2>

      <div className="finance-team-container">
        {team.map((person, index) => (
          <div key={index} className="finance-card">
            <img src={person.img} className="finance-img" alt="team" />

            {/* LINKEDIN ICON BELOW IMAGE */}
            <a
              href={person.link}
              target="_blank"
              rel="noopener noreferrer"
              className="finance-linkedin"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinanceTeam;
