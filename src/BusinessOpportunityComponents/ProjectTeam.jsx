import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ProjectTeam.css";

import img1 from "../Components/IMAGES/muhaiminIqbal.png";
import img2 from "../Components/IMAGES/raviKale.png";
import img3 from "../Components/IMAGES/badrinathTapase.png";
import img4 from "../Components/IMAGES/altafShaikh.png";
import img5 from "../Components/IMAGES/sunilGaikwad.png";
import img6 from "../Components/IMAGES/shreyashPawar.png";

import linkedin from "../Components/IMAGES/linkdin.png";

const ProjectTeam = () => {
  const team = [
    { img: img1, link: "https://www.linkedin.com/" },
    { img: img2, link: "https://www.linkedin.com/" },
    { img: img3, link: "https://www.linkedin.com/" },
    { img: img4, link: "https://www.linkedin.com/" },
    { img: img5, link: "https://www.linkedin.com/" },
    { img: img6, link: "https://www.linkedin.com/" },
  ];

  return (
    <section className="project-team-wrapper">
      <h2 className="project-team-title">GD Project Team</h2>

      <div className="project-team-container">
        {team.map((member, index) => (
          <div className="project-card" key={index}>
            <img src={member.img} className="project-img" alt="team" />

            {/* LINKEDIN ICON */}
            <a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-linkedin-wrapper"
            >
              <img src={linkedin} className="project-linkedin-icon" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectTeam;
