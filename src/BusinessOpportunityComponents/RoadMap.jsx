import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/RoadMap.css";

export default function RoadMap() {
  return (
    <div className="roadmap-wrapper">
      <h2 className="roadmap-title">Road Map</h2>

      {/* TOP ROW */}
      <div className="roadmap-row top-row">
        <div className="roadmap-box box-red">Project Cost <br />100 Cr</div>
        <div className="roadmap-arrow"></div>

        <div className="roadmap-box box-orange">GD Contribution <br />5 Cr</div>
        <div className="roadmap-arrow"></div>

        <div className="roadmap-box box-blue">Security Deposit <br />45 Lakh</div>
        <div className="roadmap-arrow"></div>

        <div className="roadmap-box box-gold">Co-Ownership <br />5 Cr</div>
        <div className="corner-arrow"></div> {/* corner arrow to dashed box */}
      </div>

      {/* VERTICAL DASHED LINE + MIDDLE + FOOTER */}
      <div className="roadmap-vertical-connector">
        <div className="roadmap-dashed-box">
          <div className="roadmap-row mid-row">
            <div className="roadmap-box box-darkblue">Long Lease Land <br />15 Acres</div>
            <div className="roadmap-arrow"></div>

            <div className="roadmap-box box-green">25 Business Entrepreneur & Co-Owner's</div>
            <div className="roadmap-arrow"></div>

            <div className="roadmap-box box-pink">Project Execution <br />Period 1 Year</div>
          </div>
        </div>

        <div className="roadmap-footer">
          GD THE GRAMSHAKTI MULTI WEBS PROJECTS <br />
          <span>(Rural Village Development Program)</span>
        </div>
      </div>
    </div>
  );
}
