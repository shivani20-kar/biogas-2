import React, { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ContactLayout.css";
import supportImg from "../Components/IMAGES/supportgirlContactUs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ContactLayout() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setShowPopup(true);
  };

  return (
    <>
      <section className="contact-main-wrapper">
        {/* ---------- LEFT IMAGE + TEXT ---------- */}
        <div className="contact-left-side">
          <div className="contact-left-img-box">
            <img src={supportImg} alt="Support Girl" className="contact-img" />
            <div className="contact-img-border-one"></div>
            <div className="contact-img-border-two"></div>
          </div>

          <p className="contact-left-caption">
            “GD Planet: Joining Hands to Restore the Planet.”
          </p>
        </div>

        {/* ---------- RIGHT FORM AREA ---------- */}
        <div className="contact-right-side">
          <div className="contact-frame-outer">
            <div className="contact-frame-inner">
              <form className="contact-form-box" onSubmit={handleSubmit}>
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
        </div>
      </section>

      {/* ---------- POPUP SECTION ---------- */}
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
