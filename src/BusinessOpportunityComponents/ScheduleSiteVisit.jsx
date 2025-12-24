import React, { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ScheduleSiteVisit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ScheduleSiteVisit() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [activeTab, setActiveTab] = useState("paid");
  const today = "29/11/2025";

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
            <FontAwesomeIcon icon={faCalendar} className="date-icon" />
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
