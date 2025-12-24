import React from "react";
import "./CSS/Index9.css";

const Technological = () => {
  return (
    <div className="tech-wrapper">
      {/* Header */}
      <div className="tech-header">
        <div className="tech-arrow-shape">  <svg className="arrow-svg" viewBox="0 0 120 180">
                        <polygon
                            points="0,0 84,0 120,90 84,180 0,180 36,90"
                            fill="#f2f2f2"
                            stroke="#e3262f"
                            strokeWidth="4"
                        />
                    </svg></div>

        <div className="tech-titlee">
          <h1>Technological</h1>
          <p>process of biogas production</p>
        </div>
      </div>

      {/* Content */}
      <h3>Overview</h3>
      <div className="tech-content">
         <p>
            Napier grass is transported to the biogas plant, unloaded into
            loaders, and fed in controlled portions into the reactors using
            augers. Inside the reactors, the substrate is maintained at a
            constant thermophilic temperature of 52°C, supported by dry cooling
            systems to prevent overheating during hot weather. The material is
            periodically mixed by vertical agitators to ensure uniform digestion
            conditions. The digestion process lasts an average of 33 days, after
            which the digestate is pumped to a separator that divides it into
            solid and liquid biofertilizer. The solid fraction is collected and
            transported for storage, while the liquid filtrate flows to a
            dedicated storage tank. Meanwhile, the biogas generated in the
            reactors rises and is transferred through pipelines to an external
            gas holder, which is protected by a durable weather-resistant
            membrane secured with a specialized fastening system to ensure safe
            and reliable gas storage.
          </p>
<div className="tech-columns">
          <p>
            To protect the gas holder from overpressure, the digesters are
            equipped with safety valves that activate at 5 mbar and release
            excess biogas into the atmosphere. The gas collected in the gas
            holders then flows through a pipeline to a biogas cooler with a
            condensate removal system, after which it enters a compressor that
            increases the pressure to 80–150 mbar to meet engine requirements.
            The compressed gas passes through activated carbon filters to remove
            hydrogen sulfide (H₂S), and then enters the biogas upgrading unit,
            where CO₂ and other soluble gases are removed to produce high-purity
            methane (about 99%), clean and dry. All processes in the plant are
            monitored and controlled automatically from a central control room,
            which features a unified control system that allows any module of
            the biogas plant to be operated in either automatic or manual mode,
            both locally and remotely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technological;
