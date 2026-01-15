import React, { useRef, useEffect, useState } from "react";
import "./CSS/Index19.css";

const ProposalTable = () => {
  const bannerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => observer.disconnect();
  }, []);

  const data = [
    {
      proposal: "Biogas",
      capacities: ["3 TPD", "5 TPD", "7 TPD", "10 TPD"],
      materials: ["Napier Grass", "Maize Silage", "Press Mud", "Food Waste"],
      cost: "18 Cr",
      defaultCapacity: "5 TPD",
      defaultMaterial: "Napier Grass",
    },
    {
      proposal: "Electricity",
      capacities: ["5 MW", "7.5 MW", "9.16 MW", "12 MW"],
      materials: ["Napier Grass", "Agricultural Waste", "Biomass Pellets"],
      cost: "20 Cr",
      defaultCapacity: "9.16 MW",
      defaultMaterial: "Napier Grass", 
    },
    {
      proposal: "CNG",
      capacities: ["3 TPD", "5 TPD", "8 TPD"],
      materials: ["Napier Grass", "Press Mud", "Municipal Waste"],
      cost: "25 Cr",
      defaultCapacity: "5 TPD",
      defaultMaterial: "Napier Grass",
    },
    {
      proposal: "LNG",
      capacities: ["5 TPD", "7 TPD", "10 TPD"],
      materials: ["Napier Grass", "Food Waste", "Agro Residue"],
      cost: "27 Cr",
      defaultCapacity: "5 TPD",
      defaultMaterial: "Napier Grass",
    },
  ];

  return (
    <section className="proposal-wrapper">
      {/* HEADER */}
      <div className="proposal-header" ref={bannerRef}>
        <div className={`arrow-indexo ${visible ? "animate-arrow" : ""}`}>
          <svg className="arrow-svg" viewBox="0 0 120 180">
            <polygon
              points="0,0 84,0 120,90 84,180 0,180 36,90"
              fill="#f2f2f2"
              stroke="#e3262f"
              strokeWidth="4"
            />
          </svg>
        </div>

        <div className={`proposal-header-text ${visible ? "animate-text" : ""}`}>
          <h1 className="proposal-title">Discover</h1>
          <h2 className="proposal-subtitle">
            GD planet solutions for your business
          </h2>
          <p className="proposal-desc">
            Sustainable, Renewable Electrical & Biofuel Energy
          </p>
        </div>
      </div>

      {/* TABLE */}
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
                <td className="dropdown-cell">
                  <select
                    className="table-dropdown"
                    defaultValue={row.defaultCapacity}
                  >
                    {row.capacities.map((cap, idx) => (
                      <option key={idx}>{cap}</option>
                    ))}
                  </select>
                  <span className="dropdown-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path d="M24 30L34 20H14L24 30Z" fill="black" />
                    </svg>
                  </span>
                </td>

                {/* Raw Material Dropdown */}
                <td className="dropdown-cell">
                  <select
                    className="table-dropdown"
                    defaultValue={row.defaultMaterial}
                  >
                    {row.materials.map((mat, idx) => (
                      <option key={idx}>{mat}</option>
                    ))}
                  </select>
                  <span className="dropdown-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <path d="M24 30L34 20H14L24 30Z" fill="black" />
                    </svg>
                  </span>
                </td>

                <td>{row.cost}</td>

                <td className="download-cell">
                  <a href="#">
                    Download{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <path
                          d="M24 30.823C23.759 30.823 23.5347 30.7845 23.327 30.7075C23.1193 30.6308 22.9218 30.4988 22.7345 30.3115L16.5155 24.0925C16.2182 23.7948 16.0713 23.4467 16.075 23.048C16.079 22.6493 16.2258 22.2948 16.5155 21.9845C16.8258 21.6745 17.1822 21.5143 17.5845 21.504C17.9872 21.4937 18.3437 21.6437 18.654 21.954L22.5 25.8V10.5C22.5 10.0743 22.6437 9.718 22.931 9.431C23.218 9.14367 23.5743 9 24 9C24.4257 9 24.782 9.14367 25.069 9.431C25.3563 9.718 25.5 10.0743 25.5 10.5V25.8L29.346 21.954C29.6437 21.6567 29.9968 21.5098 30.4055 21.5135C30.8145 21.5175 31.1742 21.6745 31.4845 21.9845C31.7742 22.2948 31.9242 22.6462 31.9345 23.0385C31.9448 23.4308 31.7948 23.7822 31.4845 24.0925L25.2655 30.3115C25.0782 30.4988 24.8807 30.6308 24.673 30.7075C24.4653 30.7845 24.241 30.823 24 30.823ZM12.6155 39C11.6052 39 10.75 38.65 10.05 37.95C9.35 37.25 9 36.3948 9 35.3845V31.4615C9 31.0358 9.14367 30.6795 9.431 30.3925C9.718 30.1052 10.0743 29.9615 10.5 29.9615C10.9257 29.9615 11.282 30.1052 11.569 30.3925C11.8563 30.6795 12 31.0358 12 31.4615V35.3845C12 35.5385 12.0642 35.6795 12.1925 35.8075C12.3205 35.9358 12.4615 36 12.6155 36H35.3845C35.5385 36 35.6795 35.9358 35.8075 35.8075C35.9358 35.6795 36 35.5385 36 35.3845V31.4615C36 31.0358 36.1437 30.6795 36.431 30.3925C36.718 30.1052 37.0743 29.9615 37.5 29.9615C37.9257 29.9615 38.282 30.1052 38.569 30.3925C38.8563 30.6795 39 31.0358 39 31.4615V35.3845C39 36.3948 38.65 37.25 37.95 37.95C37.25 38.65 36.3948 39 35.3845 39H12.6155Z"
                          fill="#0982FE"
                        />
                      </svg>
                    </span>
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
