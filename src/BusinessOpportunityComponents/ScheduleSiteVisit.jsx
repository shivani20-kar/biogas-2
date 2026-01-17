import React, { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ScheduleSiteVisit.css";

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
           <div className="input-box">
                <input type="text" required placeholder=" " />
                <label>Payment</label>
              </div>
          
            {/* No. of Visitors for both Paid and Free */}
           <div className="input-box select-box">
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


            <button type="submit" className="submit-btnsche">
             <span class="submit-text">Submit</span>
 <span class="sub-icon"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 15 15" fill="none">
  <path d="M12.7483 3.51907L1.76037 14.507C1.55453 14.7128 1.31275 14.8156 1.03503 14.8155C0.757307 14.8156 0.515528 14.7128 0.309694 14.507C0.103859 14.3011 0.00102257 14.0593 0.00118376 13.7816C0.00102257 13.5039 0.103859 13.2621 0.309694 13.0563L11.2976 2.0684L4.92961 2.0684C4.64189 2.06824 4.40253 1.97088 4.21152 1.77633C4.02068 1.58161 3.92026 1.33919 3.91027 1.04906C3.91043 0.74909 4.00529 0.499331 4.19484 0.299783C4.38456 0.100074 4.62948 0.000220137 4.92961 0.000220137L13.5925 0.000220252C13.7737 0.000220252 13.9331 0.0318939 14.0705 0.09524C14.2082 0.158425 14.3353 0.248286 14.4518 0.364823C14.5684 0.481361 14.6582 0.608456 14.7214 0.746109C14.7848 0.8836 14.8164 1.04293 14.8164 1.22411L14.8164 9.88705C14.8163 10.1748 14.7165 10.4165 14.5171 10.6124C14.3174 10.8082 14.0676 10.9062 13.7676 10.9064C13.4775 10.8964 13.235 10.799 13.0403 10.6143C12.8456 10.4296 12.7483 10.1872 12.7483 9.88705L12.7483 3.51907Z" fill="#E12D36"/>
</svg></span> </button>
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
