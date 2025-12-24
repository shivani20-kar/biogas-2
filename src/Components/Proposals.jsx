import React from "react";
import { FaDownload } from "react-icons/fa";
import "./Css/Proposals.css";

const proposals = [
  {
    title: "Proposal for a plant 5 tonnes Bio-CNG per day using Napier grass",
  },
  {
    title: "Proposal for a plant 10 tonnes Bio-CNG per day using Napier grass",
  },
  {
    title: "Proposal for a plant 20 tonnes Bio-CNG per day using Napier grass",
  },
  {
    title:
      "Proposal for a Napier grass-based biogas plant 2.9MW electric power (40 TPD BioCNG equivalent)",
  },
  {
    title:
      "Proposal for a 1000 TPD Napier grass-based biogas plant producing 10–30 MW of power or 65–80 TPD of biomethane",
  },
];

const Proposals = () => {
  return (
    <section className="proposals">
      <ul>
        {proposals.map((item, index) => (
          <li key={index}>
            {item.title}
            <button className="download-btn">
              <FaDownload /> {/* FontAwesome icon from react-icons */}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Proposals;
