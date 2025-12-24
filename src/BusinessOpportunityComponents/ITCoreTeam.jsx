// ITCoreTeam.jsx
import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ITCoreTeam.css";

import img1 from "../Components/IMAGES/aniketsir.png";
import img2 from "../Components/IMAGES/riteshNikam.png";
import img3 from "../Components/IMAGES/shivaniKarhale.png";
import linkedin from "../Components/IMAGES/linkdin.png";

const ITCoreTeam = () => {
  const team = [
    { img: img1, linkedin: "https://www.linkedin.com/" },
    { img: img2, linkedin: "https://www.linkedin.com/" },
    { img: img3, linkedin: "https://www.linkedin.com/" },
  ];

  return (
    <section className="itcorex-wrapper">
      <h2 className="itcorex-title">
        IT Core<span className="x-highlight">X</span>
      </h2>

      <div className="itcorex-container">
        {team.map((member, index) => (
          <div className="itcorex-card" key={index}>
            
            {/* IMAGE */}
            <img src={member.img} className="itcorex-img" alt="team" />

            {/* LINKEDIN ICON - BELOW IMAGE */}
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="itcorex-link-wrapper"
            >
              <img src={linkedin} alt="LinkedIn" className="itcorex-linkedin" />
            </a>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ITCoreTeam;
