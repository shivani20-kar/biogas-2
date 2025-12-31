import React from "react";
import "./CSS/Index19.css";

const ProposalTable = () => {
  const data = [
    {
      proposal: "Biogas",
      capacities: ["3 TPD", "5 TPD", "7 TPD", "10 TPD"],
      materials: [
        "Napier Grass",
        "Maize Silage",
        "Press Mud",
        "Food Waste",
      ],
      cost: "18 Cr",
      defaultCapacity: "5 TPD",
      defaultMaterial: "Napier Grass",
    },
    {
      proposal: "Electricity",
      capacities: ["5 MW", "7.5 MW", "9.16 MW", "12 MW"],
      materials: [
        "Napier Grass",
        "Agricultural Waste", 
        "Biomass Pellets",
      ],
      cost: "20 Cr",
      defaultCapacity: "9.16 MW",
      defaultMaterial: "Napier Grass",
    },
    {
      proposal: "CNG",
      capacities: ["3 TPD", "5 TPD", "8 TPD"],
      materials: [
        "Napier Grass",
        "Press Mud",
        "Municipal Waste",
      ],
      cost: "25 Cr",
      defaultCapacity: "5 TPD",
      defaultMaterial: "Napier Grass",
    },
    {
      proposal: "LNG",
      capacities: ["5 TPD", "7 TPD", "10 TPD"],
      materials: [
        "Napier Grass",
        "Food Waste",
        "Agro Residue",
      ],
      cost: "27 Cr",
      defaultCapacity: "5 TPD",
      defaultMaterial: "Napier Grass",
    },
  ];

  return (
    <section className="proposal-wrapper">
      <div className="proposal-header">
        <div className="arrow-index">
          <svg className="arrow-svg" viewBox="0 0 120 180">
            <polygon
              points="0,0 84,0 120,90 84,180 0,180 36,90"
              fill="#f2f2f2"
              stroke="#e3262f"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div className="proposal-header-text">
          <h1 className="proposal-title">Discover</h1>
          <h2 className="proposal-subtitle">
            GD planet solutions for your business
          </h2>
          <p className="proposal-desc">
            Sustainable, Renewable Electrical & Biofuel Energy
          </p>
        </div>
      </div>

      <div className="proposal-table-container">
        <table className="proposal-table">
          <thead>
            <tr>
              <th>Proposal</th>
              <th>Plant Capacity</th>
              <th>Biogas Raw Material</th>
              <th>Turnkey Solution Project Cost</th>
              <th>Download</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td>{row.proposal}</td>

                {/* Capacity Dropdown */}
                <td>
                  <select className="table-dropdown" defaultValue={row.defaultCapacity}>
                    {row.capacities.map((cap, idx) => (
                      <option key={idx}>{cap}</option>
                    ))}
                  </select>
                </td>

                {/* Raw Material Dropdown */}
                <td>
                  <select className="table-dropdown" defaultValue={row.defaultMaterial}>
                    {row.materials.map((mat, idx) => (
                      <option key={idx}>{mat}</option>
                    ))}
                  </select>
                </td>

                <td>{row.cost}</td>

                <td className="download-cell">
                  <a href="#">
                    Download <span>⬇</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProposalTable;
