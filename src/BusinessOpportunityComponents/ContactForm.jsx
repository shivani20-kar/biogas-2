import React, { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ContactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setShowPopup(true);
  };

  return (
    <>
      <section className="contact-section-container">
        <div className="contact-top-text">
          <p className="red-textvendor">• Stop working for a boss.</p>
          <p className="green-textvendor">• Start partnering for growth.</p>
        </div>

        <section className="contactform-wrapper">
          {/* Red Bars Left */}
          <div className="red-bars red-bars-left">
            <div className="red-linevendor"></div>
            <div className="red-linevendor"></div>
          </div>

          {/* Outer Frame */}
          <div className="form-outer-frame">
            {/* Inner White Frame */}
            <div className="form-inner-frame">
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Applicant Name" required />
                <input
                  type="text"
                  placeholder="Product / Service Name"
                  required
                />
                <input type="text" placeholder="Contact Number" required />
                <input type="email" placeholder="Email ID" required />

                <div className="row">
                  <input type="text" placeholder="Address" />
                  <input type="text" placeholder="Postcode" />
                </div>

                <textarea placeholder="Message"></textarea>

                <button type="submit" className="submit-btn">
                  <span>Submit</span>
                  <FontAwesomeIcon className="arrow" icon={faArrowRight} />
                </button>
              </form>
            </div>
          </div>

          {/* Red Bars Right */}
          <div className="red-bars red-bars-right">
            <div className="red-linevendor"></div>
            <div className="red-linevendor"></div>
          </div>
        </section>
      </section>

      {/* -------------------- POPUP ------------------------ */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ×
            </button>

            <h1 className="popup-title">Thank You..!</h1>
            <p className="popup-sub">For Connecting</p>
            <p className="popup-text">
              Our IT Core<span className="red-x">X</span> Team as soon as
              <br />
              Contact With You
            </p>

            <button className="popup-done" onClick={() => setShowPopup(false)}>
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}
