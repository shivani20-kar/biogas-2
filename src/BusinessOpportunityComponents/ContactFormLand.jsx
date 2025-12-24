import React, { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ContactFormLand.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ContactFormLand() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setShowPopup(true); 
  };

  return (  
    <>
      <section className="contact-section-container-land">
        <div className="contact-top-text-land">
          <p className="green-textvendor-land">Don't just deal. Build. Become a Growth Partner..</p> 
        </div>

        <section className="contactform-wrapper-land">
          {/* Red Bars Left */}
          <div className="red-bars-land red-bars-left-land">
            <div className="red-linevendor-land"></div>
            <div className="red-linevendor-land"></div>
          </div>

          {/* Outer Frame */}
          <div className="form-outer-frame-land">
            {/* Inner White Frame */}
            <div className="form-inner-frame-land">
              <form className="contact-form-land" onSubmit={handleSubmit}>
                <input type="text" placeholder="Owner / Broker Name" required />
                <input type="text" placeholder="Village Name" required />
                <input type="text" placeholder="Land Mark" required />
                <input type="text" placeholder="Area - Number of Acres" required />
                <input type="text" placeholder="Contact Number" required />
                <input type="email" placeholder="Email ID" required />

                <button type="submit" className="submit-btn-land">
                  <span>Submit</span>
                  <FontAwesomeIcon className="arrow-land" icon={faArrowRight} />
                </button>
              </form>
            </div>
          </div>

          {/* Red Bars Right */}
          <div className="red-bars-land red-bars-right-land">
            <div className="red-linevendor-land"></div>
            <div className="red-linevendor-land"></div>
          </div>
        </section>
      </section>

      {/* -------------------- POPUP ------------------------ */}
      {showPopup && (
        <div className="popup-overlay-land">
          <div className="popup-box-land">
            <button className="popup-close-land" onClick={() => setShowPopup(false)}>
              ×
            </button>

            <h1 className="popup-title-land">Thank You..!</h1>
            <p className="popup-sub-land">For Connecting</p>
            <p className="popup-text-land">
              Our IT Core<span className="red-x-land">X</span> Team as soon as
              <br />
              Contact With You
            </p>

            <button className="popup-done-land" onClick={() => setShowPopup(false)}>
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}
