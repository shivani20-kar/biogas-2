import React, { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ ContactHeadOffice.css";

export default function ContactHeadOffice() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
    file: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <>
      <section className="headoffice-wrapper">
        <h1 className="headoffice-title">
          Still issue not solved? <br />
          Connect with our <span>Head Office</span>
        </h1>

        <div className="headoffice-form-box">
          <form className="headoffice-form" onSubmit={handleSubmit}>
            {/* NAME */}
            <div className="float-input">
              <input
                type="text"
                name="name"
                placeholder=" "
                value={form.name}
                onChange={handleChange}
                required
              />
              <label>Name</label>
            </div>

            {/* CONTACT */}
            <div className="float-input">
              <input
                type="text"
                name="contact"
                placeholder=" "
                value={form.contact}
                onChange={handleChange}
                required
              />
              <label>Contact Number</label>
            </div>

            {/* EMAIL */}
            <div className="float-input">
              <input
                type="email"
                name="email"
                placeholder=" "
                value={form.email}
                onChange={handleChange}
                required
              />
              <label>Email ID</label>
            </div>

            {/* MESSAGE */}
            <div className="float-input">
              <textarea
                name="message"
                placeholder=" "
                value={form.message}
                onChange={handleChange}
                required
              />
              <label>Message</label>
            </div>

            {/* FILE */}
            <div className="float-input file-box">
              <input type="file" name="file" onChange={handleChange} />
              <label>Attach File here</label>
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="headoffice-submit submit-btn">
              <span>Submit</span>
              <i className="arrow">→</i>
            </button>
          </form>
        </div>
      </section>

      {/* POPUP */}
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
