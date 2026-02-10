import React, { useState } from "react";

import worldMap from "../Components/IMAGES/map1.png";
import worldMap2 from "../Components/IMAGES/map2.png";
import worldMap3A from "../Components/IMAGES/map3a.png";
import worldMap3B from "../Components/IMAGES/mapbdaman.png";
import worldMap3C from "../Components/IMAGES/map3cmaharashtra.png";
import worldMap3CNashik from "../Components/IMAGES/map3cnashik.png";
import worldMap3CSatara from "../Components/IMAGES/map3csatara.png";
import worldMapBSilvassa from "../Components/IMAGES/mapbsilvassa.png";

/* SATARA TALUKA IMAGES */
import mapWai from "../Components/IMAGES/mapwai.png";
import mapKhandala from "../Components/IMAGES/mapkhandala.png";
import mapPhaltan from "../Components/IMAGES/mapphaltan.png";
import mapJaoli from "../Components/IMAGES/mapjaoli.png";
import mapMahabaleshwar from "../Components/IMAGES/mapmahabaleshwar.png";
import mapPatan from "../Components/IMAGES/mappatan.png";
import mapKarad from "../Components/IMAGES/mapkarad.png";
import mapKhatav from "../Components/IMAGES/mapkhatav.png";
import mapMan from "../Components/IMAGES/mapman.png";
import mapKoregaon from "../Components/IMAGES/mapkoregaon.png";
import mapSatara from "../Components/IMAGES/mapsatara.png";

import "../Components/Css/HomeLocationSection.css";

/* DOT */
const MapDot = ({ style, onClick }) => (
  <div className="home-map-svg-dot" style={style} onClick={onClick}>
    <svg viewBox="0 0 71 62">
      <circle cx="35" cy="31" r="4" fill="#F94006" />
      <circle className="pulse pulse-1" cx="35" cy="31" r="6" fill="#F94006" />
      <circle className="pulse pulse-2" cx="35" cy="31" r="9" fill="#F94006" />
      <circle className="pulse pulse-3" cx="35" cy="31" r="12" fill="#F94006" />
    </svg>
  </div>
);

const HomeLocationSection = () => {
  const [activeMap, setActiveMap] = useState("map1");
  const [sataraOverlay, setSataraOverlay] = useState(null);

  const getMap = () => {
    switch (activeMap) {
      case "map2":
        return worldMap2;
      case "map3a":
        return worldMap3A;
      case "mapbdaman":
        return worldMap3B;
      case "map3cmaharashta":
        return worldMap3C;
      case "map3cnashik":
        return worldMap3CNashik;
      case "map3csatara":
        return worldMap3CSatara;
      case "mapbsilvassa":
        return worldMapBSilvassa;
      default:
        return worldMap;
    }
  };

  const handleMapClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.clientX - rect.left >= rect.width / 2) {
      setActiveMap("map1");
      setSataraOverlay(null);
    }
  };

  return (
    <section className="home-location-section">
      <div className="home-location-container">
        <div className="home-location-header">
          <span className="home-location-tagline">
            GLOBAL REACH, LOCAL STRENGTH.
          </span>
          <h2 className="home-location-title">Our Location</h2>
          <p className="home-location-subtitle">
            We Operate from One Strategic Hub:
          </p>
        </div>

        <div className="home-map-wrapper">
          <img
            src={getMap()}
            alt="Map"
            className="home-world-map"
            onClick={handleMapClick}
          />

          {/* MAP 1 */}
          {activeMap === "map1" && (
            <MapDot
              style={{ top: "58%", left: "64.5%" }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveMap("map2");
              }}
            />
          )}

          {/* MAP 2 */}
          {activeMap === "map2" && (
            <>
              <MapDot
                style={{ top: "48.5%", left: "28.6%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMap("map3a");
                }}
              />
              <MapDot
                style={{ top: "57%", left: "33%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMap("mapbdaman");
                }}
              />
              <MapDot
                style={{ top: "64.5%", left: "36%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMap("map3cmaharashta");
                }}
              />
            </>
          )}

          {/* DAMAN */}
          {activeMap === "mapbdaman" && (
            <MapDot
              style={{ top: "55%", left: "37%" }}
              onClick={(e) => {
                e.stopPropagation();
                setActiveMap("mapbsilvassa");
              }}
            />
          )}

          {/* MAHARASHTRA */}
          {activeMap === "map3cmaharashta" && (
            <>
              <MapDot
                style={{ top: "24%", left: "27%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMap("map3cnashik");
                }}
              />
              <MapDot
                style={{ top: "55%", left: "28%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMap("map3csatara");
                }}
              />
            </>
          )}

          {/* SATARA TALUKA DOTS */}
          {activeMap === "map3csatara" && (
            <>
              <MapDot
                style={{ top: "20%", left: "31%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSataraOverlay("wai");
                }}
              />
              <MapDot
                style={{ top: "10%", left: "38%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSataraOverlay("khandala");
                }}
              />
              <MapDot
                style={{ top: "19%", left: "55%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSataraOverlay("phaltan");
                }}
              />
              <MapDot
                style={{ top: "31%", left: "29%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSataraOverlay("jaoli");
                }}
              />
              <MapDot
                style={{ top: "36%", left: "22%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSataraOverlay("mahabaleshwar");
                }}
              />
              <MapDot
                style={{ top: "70%", left: "30%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSataraOverlay("patan");
                }}
              />
              <MapDot
                style={{ top: "77%", left: "45%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSataraOverlay("karad");
                }}
              />
              <MapDot
                style={{ top: "58%", left: "58%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSataraOverlay("khatav");
                }}
              />
              <MapDot
                style={{ top: "40%", left: "67%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSataraOverlay("man");
                }}
              />
              <MapDot
                style={{ top: "38%", left: "45%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSataraOverlay("koregaon");
                }}
              />
              <MapDot
                style={{ top: "45%", left: "37%" }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSataraOverlay("satara");
                }}
              />
            </>
          )}

          {/* SATARA OVERLAY */}
          {activeMap === "map3csatara" && sataraOverlay && (
            <img
              src={
                sataraOverlay === "wai"
                  ? mapWai
                  : sataraOverlay === "khandala"
                    ? mapKhandala
                    : sataraOverlay === "phaltan"
                      ? mapPhaltan
                      : sataraOverlay === "jaoli"
                        ? mapJaoli
                        : sataraOverlay === "mahabaleshwar"
                          ? mapMahabaleshwar
                          : sataraOverlay === "patan"
                            ? mapPatan
                            : sataraOverlay === "karad"
                              ? mapKarad
                              : sataraOverlay === "khatav"
                                ? mapKhatav
                                : sataraOverlay === "man"
                                  ? mapMan
                                  : sataraOverlay === "satara"
                                    ? mapSatara
                                    : mapKoregaon
              }
              className="satara-overlay-map"
              alt="Satara Taluka"
              onClick={(e) => {
                e.stopPropagation();
                setSataraOverlay(null);
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeLocationSection;
