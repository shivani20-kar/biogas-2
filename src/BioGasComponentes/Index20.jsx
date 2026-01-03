import React, { useState } from "react";
import "./CSS/Index20.css";

export default function ContactDiscover() {
  const initialForm = {
    name: "",
    contact: "",
    email: "",
    message: "",
    file: null,
  };

  const [form, setForm] = useState(initialForm);
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

  const closePopup = () => {
    setShowPopup(false);
    setForm(initialForm);
  };

  return (
    <>
      <section className="discover-wrapper">
        <div className="discover-form-box">
          <form className="discover-form" onSubmit={handleSubmit}>
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

            {/* FILE (UPDATED) */}
            <div className="float-input file-box">
              <input
                type="file"
                id="fileInput"
                name="file"
                onChange={handleChange}
              />
              <label htmlFor="fileInput">
                {form.file ? form.file.name : "Attach File here"}
              </label>
            </div>

            {/* SUBMIT */}
            <button type="submit" className="discover-submit">
              <span>Submit</span>
              <i className="sub-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 41 41"
                  style={{ cursor: "pointer" }}
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="#FFFFFF" />
                  <path
                    d="M14 27L27 14M27 14H16M27 14V25"
                    stroke="#E12D36"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </button>
          </form>
        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="popup-close" onClick={closePopup}>
              ×
            </button>
            <h1 className="popup-title">Thank You..!</h1>
            <p className="popup-sub">For Connecting</p>
            <p className="popup-text">
              Our IT Core<span className="red-x">X</span> Team as soon as
              <br />
              Contact With You
            </p>
            <button className="popup-done" onClick={closePopup}>
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}
