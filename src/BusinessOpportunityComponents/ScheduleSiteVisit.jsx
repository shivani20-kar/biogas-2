import React, { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ScheduleSiteVisit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ScheduleSiteVisit() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [activeTab, setActiveTab] = useState("paid");
 const today = new Date().toLocaleDateString("en-GB");


  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <section className="sitevisit-section">
      <div className="top-red-area">
        <h1 className="sitevisitSchedule-title">
          SCHEDULE <span>A SITE VISIT</span>
        </h1>

        <div className="date-container">
          <div className="small-date-box">
            {/* <FontAwesomeIcon icon={faCalendar} className="date-icon" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 96 96" fill="none">
  <path d="M20 88C17.8 88 15.9167 87.2167 14.35 85.65C12.7833 84.0833 12 82.2 12 80V24C12 21.8 12.7833 19.9167 14.35 18.35C15.9167 16.7833 17.8 16 20 16H24V8H32V16H64V8H72V16H76C78.2 16 80.0833 16.7833 81.65 18.35C83.2167 19.9167 84 21.8 84 24V80C84 82.2 83.2167 84.0833 81.65 85.65C80.0833 87.2167 78.2 88 76 88H20ZM20 80H76V40H20V80ZM20 32H76V24H20V32ZM48 56C46.8667 56 45.9167 55.6167 45.15 54.85C44.3833 54.0833 44 53.1333 44 52C44 50.8667 44.3833 49.9167 45.15 49.15C45.9167 48.3833 46.8667 48 48 48C49.1333 48 50.0833 48.3833 50.85 49.15C51.6167 49.9167 52 50.8667 52 52C52 53.1333 51.6167 54.0833 50.85 54.85C50.0833 55.6167 49.1333 56 48 56ZM32 56C30.8667 56 29.9167 55.6167 29.15 54.85C28.3833 54.0833 28 53.1333 28 52C28 50.8667 28.3833 49.9167 29.15 49.15C29.9167 48.3833 30.8667 48 32 48C33.1333 48 34.0833 48.3833 34.85 49.15C35.6167 49.9167 36 50.8667 36 52C36 53.1333 35.6167 54.0833 34.85 54.85C34.0833 55.6167 33.1333 56 32 56ZM64 56C62.8667 56 61.9167 55.6167 61.15 54.85C60.3833 54.0833 60 53.1333 60 52C60 50.8667 60.3833 49.9167 61.15 49.15C61.9167 48.3833 62.8667 48 64 48C65.1333 48 66.0833 48.3833 66.85 49.15C67.6167 49.9167 68 50.8667 68 52C68 53.1333 67.6167 54.0833 66.85 54.85C66.0833 55.6167 65.1333 56 64 56ZM48 72C46.8667 72 45.9167 71.6167 45.15 70.85C44.3833 70.0833 44 69.1333 44 68C44 66.8667 44.3833 65.9167 45.15 65.15C45.9167 64.3833 46.8667 64 48 64C49.1333 64 50.0833 64.3833 50.85 65.15C51.6167 65.9167 52 66.8667 52 68C52 69.1333 51.6167 70.0833 50.85 70.85C50.0833 71.6167 49.1333 72 48 72ZM32 72C30.8667 72 29.9167 71.6167 29.15 70.85C28.3833 70.0833 28 69.1333 28 68C28 66.8667 28.3833 65.9167 29.15 65.15C29.9167 64.3833 30.8667 64 32 64C33.1333 64 34.0833 64.3833 34.85 65.15C35.6167 65.9167 36 66.8667 36 68C36 69.1333 35.6167 70.0833 34.85 70.85C34.0833 71.6167 33.1333 72 32 72ZM64 72C62.8667 72 61.9167 71.6167 61.15 70.85C60.3833 70.0833 60 69.1333 60 68C60 66.8667 60.3833 65.9167 61.15 65.15C61.9167 64.3833 62.8667 64 64 64C65.1333 64 66.0833 64.3833 66.85 65.15C67.6167 65.9167 68 66.8667 68 68C68 69.1333 67.6167 70.0833 66.85 70.85C66.0833 71.6167 65.1333 72 64 72Z" fill="#282828"/>
</svg>
            <p className="date-format">DD/MM/YYYY</p>
          </div>
          <div className="big-date-box">
            <p className="today-text">Today's Date</p>
            <h2 className="today-date">{today}</h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="visit-tabs">
          <button
            className={`tab ${activeTab === "paid" ? "active" : ""}`}
            onClick={() => setActiveTab("paid")}
          >
            Paid Site Visit
          </button>
          <button
            className={`tab ${activeTab === "free" ? "active" : ""}`}
            onClick={() => setActiveTab("free")}
          >
            Free Site Visit
          </button>
        </div>

        <p className="visit-description">
          {activeTab === "paid"
            ? "Get an in-depth, guided tour of our entire plant. Visitors receive complete access, including inner areas of the facility, operations room, technology sections, and process zones. Our expert team will walk you through every stage of the project, giving you a deeper understanding of our technology, safety standards, and operations."
            : "Register for a free site visit to get an overview of our plant. Access main areas and learn about our technology and operations. Our team will guide you through the key stages of the project."}
        </p>
      </div>

      {/* Form Section */}
      <div className="form-frame-outervisit">
        <div className="form-frame-innervisit">
          <form className="sitevisit-form" onSubmit={handleSubmit}>
            <div className="input-box">
              <input type="text" required placeholder=" " />
              <label>Name</label>
            </div>

            <div className="input-box">
              <input type="text" required placeholder=" " />
              <label>Time: Fixed 10:00 am To 12:00 pm</label>
            </div>

            <div className="input-box">
              <input
                type="date"
                required
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
              <label>Date</label>
            </div>

            <div className="input-box">
              <input type="text" required placeholder=" " />
              <label>Contact Number</label>
            </div>

            <div className="input-box">
              <input type="email" required placeholder=" " />
              <label>Email ID</label>
            </div>

            {/* Paid: Payment field */}
            {activeTab === "paid" && (
              <div className="input-box">
                <input type="text" required placeholder=" " />
                <label>Payment</label>
              </div>
            )}

            {/* Message field only for Free Site Visit */}
            {activeTab === "free" && (
              <div className="input-box">
                <input type="text" required placeholder=" " />
                <label>Message</label>
              </div>
            )}

            {/* No. of Visitors for both Paid and Free */}
            <div className="input-box">
              <select required defaultValue="">
                <option value="" disabled hidden></option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <label>No. of Visitors</label>
            </div>

            <button type="submit" className="submit-btn">
              <span>{activeTab === "paid" ? "Submit" : "Register"}</span>
              <FontAwesomeIcon icon={faArrowRight} className="arrow" />
            </button>
          </form>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ×
            </button>

            <h1 className="popup-title">Thank You..!</h1>
            <p className="popup-sub">For Connecting</p>

            <p className="popup-text">
              Our IT Core<span className="red-x">X</span> Team will
              <br />
              Contact You Soon
            </p>

            <button className="popup-done" onClick={() => setShowPopup(false)}>
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
