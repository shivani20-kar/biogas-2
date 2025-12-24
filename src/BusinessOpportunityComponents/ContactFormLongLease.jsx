import React, { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ContactFormLongLease.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ContactFormLongLease() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setShowPopup(true); 
  }; 

  return (
    <>
      <section className="contact-section-container-longLease">
        <div className="contact-top-text-longLease">
          <p className="green-textvendor-longLease">
            Don't just deal. Build. Become a Growth Partner..
          </p>
        </div>

        <section className="contactform-wrapper-longLease">
          {/* Red Bars Left */}
          <div className="red-bars-longLease red-bars-left-longLease">
            <div className="red-linevendor-longLease"></div>
            <div className="red-linevendor-longLease"></div>
          </div>

          {/* Outer Frame */}
          <div className="form-outer-frame-longLease">
            {/* Inner White Frame */}
            <div className="form-inner-frame-longLease">
              <form className="contact-form-longLease" onSubmit={handleSubmit}>
                <input type="text" placeholder="Owner / Broker Name" required />
                <input type="text" placeholder="Village Name" required />
                <input type="text" placeholder="Land Mark" required />
                <input type="text" placeholder="Area - Number of Acres" required />
                <input type="text" placeholder="Contact Number" required />
                <input type="email" placeholder="Email ID" required />

                <button type="submit" className="submit-btn-longLease">
                  <span>Submit</span>
                  <FontAwesomeIcon className="arrow-longLease" icon={faArrowRight} />
                </button>
              </form>
            </div>
          </div>

          {/* Red Bars Right */}
          <div className="red-bars-longLease red-bars-right-longLease">
            <div className="red-linevendor-longLease"></div>
            <div className="red-linevendor-longLease"></div>
          </div>
        </section>
      </section>

      {/* -------------------- POPUP ------------------------ */}
      {showPopup && (
        <div className="popup-overlay-longLease">
          <div className="popup-box-longLease">
            <button
              className="popup-close-longLease"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>

            <h1 className="popup-title-longLease">Thank You..!</h1>
            <p className="popup-sub-longLease">For Connecting</p>
            <p className="popup-text-longLease">
              Our IT Core<span className="red-x-longLease">X</span> Team as soon as
              <br />
              Contact With You
            </p>

            <button
              className="popup-done-longLease"
              onClick={() => setShowPopup(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}
