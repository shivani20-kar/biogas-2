import React, { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/IndustrialSector.css";

const IndustrialSector = () => {
  const [activeTab, setActiveTab] = useState("biogas");

  const tableData = {
    biogas: {
      overview: "GD for Biogas Manufacturing",
      solutions: [
        "Biogas",
        "Biogas Plants",
        "Biogas Outputs",
        "Benefits of Biogas",
        "Questions & Answers",
      ],
      products: [
        "Biogas to Electricity",
        "Biogas → Biomethane Upgrading",
        "Liquefication of Biomethane",
        "Slurry to Organic Fertilizer Upgrading",
      ],
    },

    advance_biofuel: {
      overview: "GD for Biofuels Manufacturing",
      solutions: [
        "Hydrochemical Process",
        "Hydrochemical Bio Refinery Plant",
        "Biofuels Outputs",
        "Benefits of Biofuels",
        "Questions & Answers",
      ],
      products: [
        "Hydrochar",
        "Advance Biofuels / Liquid Fuels",
        "Gasoline",
        "Sustainable Aviation Fuel (SAF)",
        "Diesel",
        "Bio Methane to CNG",
        "Bio Methane to LNG",
        "Green Hydrogen",
        "Fertilizer-Artificial Humic Substances (AHS)",
        "Green Chemicals",
      ],
    },

    feed_stock: {
      overview: "GD for Feed Stock Manifacturing",
      solutions: [
        "Napier Grass",
        "Silage Process",
        "Pellets & Briquettes Plant",
        "Feed Stock Outputs",
        "Benefits of Feed Stock",
        "Questions & Answers",
      ],
      products: ["Silage", "Pellets & Briquettes", "Biochar"],
    },

    biochemical: {
      overview: "GD for Biochemicals & Fertilizers Manifacturing",
      solutions: [
        "Enrich Slurry",
        "Anaerobic Digester Process (AD) ",
        "Biochemical & Fertilizer Plant",
        "Slurry Outputs",
        "Benefits of Liquid & Solid Slurry",
        "Questions & Answers",
      ],
      products: ["Bio-chemicals", "Organic Fertilizers"],
    },

    dairy: {
      overview: "GD for Dairy",
      solutions: [
        "Fresh Milk Processing ",
        "Dairy Processing Plant",
        "Medicine Plant",
        "Benefits of Organism",
        "Questions & Answers",
      ],
      products: ["Organic GDA2 Milk Dairy Products", "Medicine Products"],
    },

    agrobiogenics: {
      overview: "GD for Agrobiogenics",
      solutions: [
        "High-Value, Carbon-Negative Engineering",
        "Renewable Vegetation Resources",
        "Cluster Plant",
        "Benefits of Agrobiogenics",
        "Questions & Answers",
      ],
      products: [
        "Boards, Panels, Furniture Grade Sheets",
        "Biodegradable, Durable, Tableware",
        "Renewable Energy Bio-fertilizer, Bio-water",
        "Hybrid Fiber-Polymer Channels, Beams, Angels",
        "Carbon-Sunk Engineered Products",
        "Carbon Cycle Activisn (CCy-Act)",
        "Carbon Cycle Allignment (CCA)",
        "Carbon Fibre",
        "Cercarb (Ceramic + Carbon Fibre Composite)",
        "ERG-Engine (Energy Engine, Converting Scrap IC Engines)",
        "Nano Fibers (From Common Materials)",
        "Offset Quality Screen Printing",
        "Zero-waste, Zero-carbon Business Model",
        "Value Farm Module Micro Township",
        "Total Village Development Program",
      ],
      impact: [
        "Replace Deforestation-Driven Timber",
        "Reduce Single Use Plastics",
        "Capture Carbon & Regenerates Soil",
        "Replace Steel, Aluminum (No corrosion, low weight)",
      ],
    },

    food_beverage: {
      overview: "GD for Food & Beverage",
      solutions: ["2nd Phase"],
      products: ["2nd Phase"],
    },

    construction3d: {
      overview: "GD for 3D Constructions Home",
      solutions: [
        "Farmer Residency",
        "HI-TECH Animal Farm",
        "HI-TECH Poultry & Fishery Farm",
        "HI-TECH Vertical Farm",
      ],
      products: ["Farmer 3D Farm House"],
    },
  };

  const current = tableData[activeTab];

  return (
    <div className="sector-container">
      <h1 className="sector-title">Industrial Sector</h1>
      <p className="sector-subtitle">
        GD for energy sustainability solutions in the manufacturing sector.
      </p>

      {/* TOP TABS */}
      <div className="sector-top-tabs">
        {Object.keys(tableData).map((key) => (
          <span
            key={key}
            className={activeTab === key ? "active" : ""}
            onClick={() => setActiveTab(key)}
          >
            {tableData[key].overview}
          </span>
        ))}
      </div>

      {/* DYNAMIC TABLE */}
      <div className="sector-table-wrapper">
        <table className="sector-table">
          <thead>
            <tr>
              <th>Overview</th>
              <th>Solutions</th>
              <th>Products</th>
              {current.impact && <th>Impact</th>}
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{current.overview}</td>

              <td>
                <div className="cell-list">
                  {current.solutions?.map((item, i) => (
                    <a
                      key={i}
                      href={`/${activeTab}/solutions/${i}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </td>

              <td>
                <div className="cell-list products-list">
                  {current.products?.map((item, i) => (
                    <a
                      key={i}
                      href={`/${activeTab}/products/${i}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </td>

              {/* IMPACT column only if exists */}
              {current.impact && (
                <td>
                  <div className="cell-list">
                    {current.impact.map((item, i) => (
                      <a
                        key={i}
                        href={`/${activeTab}/impact/${i}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndustrialSector;
