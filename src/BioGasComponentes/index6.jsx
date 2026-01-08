import React, { useEffect, useRef, useState } from "react";
import "./CSS/Index6.css";

const RawMaterial = () => {
  const bannerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const titles = document.querySelectorAll(".table-title");

    // reset on refresh
    titles.forEach((title) => {
      title.classList.remove("animate-title");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === bannerRef.current) {
              setVisible(true);
              observer.unobserve(entry.target);
            } else if (entry.target.classList.contains("table-title")) {
              setTimeout(() => {
                entry.target.classList.add("animate-title");
              }, 300);
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -180px 0px",
      }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);
    titles.forEach((title) => observer.observe(title));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="raw-wrapper">
      {/* Header */}
      <div className="raw-header" ref={bannerRef}>
        <div className={`raw-arrow-shape ${visible ? "animate-arrow" : ""}`}>
          <svg className="arrow-svg" viewBox="0 0 120 180">
            <polygon
              points="0,0 84,0 120,90 84,180 0,180 36,90"
              fill="#f2f2f2"
              stroke="#e3262f"
              strokeWidth="4"
            />
          </svg>
        </div>
        <div className={`raw-header-content ${visible ? "animate-text" : ""}`}>
          <h1>Raw Material</h1>
          <p>Potential</p>
        </div>
      </div>

      <div className="tablle-center">
        {/* ================= TABLE 1 ================= */}
        <h2 className="table-title">
          Raw material potential from the napier grass 27% total
          solid(approximately 80 day-harvest)
        </h2>

        <div className="table-wrapper">
          <table className="table raw-table">
            <thead>
              <tr>
                <th className="raw-th">Substrate</th>
                <th className="raw-th">Quantity (tonnes/day)</th>
                <th className="raw-th">Quantity (tonnes/Year)</th>
                <th className="raw-th">DM content (%)</th>
                <th className="raw-th">ODM content (%)</th>
                <th className="raw-th">DM Quantity (tonnes/day)</th>
                <th className="raw-th">ODM Quantity (tonnes/day)</th>
                <th className="raw-th">Biogas Yield (m3/tonnes ODM)</th>
                <th className="raw-th">Biogas Yield (m3/day)</th>
                <th className="raw-th">Methane Content (%)</th>
                <th className="raw-th">Bio Methane/Bio-CNG (m3/day)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="raw-td">Napier Grass</td>
                <td className="raw-td">293.3</td>
                <td className="raw-td">107065</td>
                <td className="raw-td">27</td>
                <td className="raw-td">96</td>
                <td className="raw-td">79.20</td>
                <td className="raw-td">76.03</td>
                <td className="raw-td">690</td>
                <td className="raw-td">52462</td>
                <td className="raw-td">53</td>
                <td className="raw-td">27445</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= TABLE 2 ================= */}
        <h2 className="table-title">
          Raw material potential from the napier grass 30% total
          solid(approximately 80 day-harvest)
        </h2>

        <div className="table-wrapper">
          <table className="table raw-table">
            <thead>
              <tr>
                <th className="raw-th">Substrate</th>
                <th className="raw-th">Quantity (tonnes/day)</th>
                <th className="raw-th">Quantity (tonnes/Year)</th>
                <th className="raw-th">DM content (%)</th>
                <th className="raw-th">ODM content (%)</th>
                <th className="raw-th">DM Quantity (tonnes/day)</th>
                <th className="raw-th">ODM Quantity (tonnes/day)</th>
                <th className="raw-th">Biogas Yield (m3/tonnes ODM)</th>
                <th className="raw-th">Biogas Yield (m3/day)</th>
                <th className="raw-th">Methane Content (%)</th>
                <th className="raw-th">Bio Methane/Bio-CNG (m3/day)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="raw-td">Napier Grass</td>
                <td className="raw-td">293.3</td>
                <td className="raw-td">107065</td>
                <td className="raw-td">30</td>
                <td className="raw-td">96</td>
                <td className="raw-td">79.20</td>
                <td className="raw-td">76.03</td>
                <td className="raw-td">690</td>
                <td className="raw-td">52462</td>
                <td className="raw-td">53</td>
                <td className="raw-td">27445</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ================= TABLE 3 ================= */}
        <h2 className="table-title">
          Raw material potential from the napier grass 33% total
          solid(approximately 120 day-harvest)
        </h2>

        <div className="table-wrapper">
          <table className="table raw-table">
            <thead>
              <tr>
                <th className="raw-th">Substrate</th>
                <th className="raw-th">Quantity (tonnes/day)</th>
                <th className="raw-th">Quantity (tonnes/Year)</th>
                <th className="raw-th">DM content (%)</th>
                <th className="raw-th">ODM content (%)</th>
                <th className="raw-th">DM Quantity (tonnes/day)</th>
                <th className="raw-th">ODM Quantity (tonnes/day)</th>
                <th className="raw-th">Biogas Yield (m3/tonnes ODM)</th>
                <th className="raw-th">Biogas Yield (m3/day)</th>
                <th className="raw-th">Methane Content (%)</th>
                <th className="raw-th">Bio Methane/Bio-CNG (m3/day)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="raw-td">Napier Grass</td>
                <td className="raw-td">240</td>
                <td className="raw-td">87600</td>
                <td className="raw-td">33</td>
                <td className="raw-td">96</td>
                <td className="raw-td">79.20</td>
                <td className="raw-td">76.03</td>
                <td className="raw-td">690</td>
                <td className="raw-td">52462</td>
                <td className="raw-td">52</td>
                <td className="raw-td">27445</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RawMaterial;