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
          </div>

          <p className="contact-left-caption">
            GD Planet: Joining Hands to Restore the Planet.
          </p>
        </div>
        <div className="contact-right-side">
          <div className="contact-frame-outer">
            <div className="contact-frame-inner">
              <form className="contact-form-boxx" onSubmit={handleSubmit}>
               <div className="contact-form-box">
                 <input type="text" required />
  <label>Applicant Name</label>
                </div>

<div className="contact-form-box">
  <input type="text" required />
  <label>Product / Service Name</label>
</div>

<div className="contact-form-box">
  <input type="text" required />
  <label>Contact Number</label>
</div>

<div className="contact-form-box">
  <input type="email" required />
  <label>Email ID</label>
</div>

<div className="rows">
  <div className="contact-form-box-land">
    <input type="text" required />
    <label>Address</label>
  </div>

  <div className="contact-form-box-land">
    <input type="text" required />
    <label>Pincode</label>
  </div>
</div>


<div className="contact-form-box">
  <textarea required></textarea>
  <label>Message</label>
</div>


                <button type="submit" className="submit-btn">
                 <span class="submit-text">Submit</span>
 <span class="sub-icone"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 15 15" fill="none">
  <path d="M12.7483 3.51907L1.76037 14.507C1.55453 14.7128 1.31275 14.8156 1.03503 14.8155C0.757307 14.8156 0.515528 14.7128 0.309694 14.507C0.103859 14.3011 0.00102257 14.0593 0.00118376 13.7816C0.00102257 13.5039 0.103859 13.2621 0.309694 13.0563L11.2976 2.0684L4.92961 2.0684C4.64189 2.06824 4.40253 1.97088 4.21152 1.77633C4.02068 1.58161 3.92026 1.33919 3.91027 1.04906C3.91043 0.74909 4.00529 0.499331 4.19484 0.299783C4.38456 0.100074 4.62948 0.000220137 4.92961 0.000220137L13.5925 0.000220252C13.7737 0.000220252 13.9331 0.0318939 14.0705 0.09524C14.2082 0.158425 14.3353 0.248286 14.4518 0.364823C14.5684 0.481361 14.6582 0.608456 14.7214 0.746109C14.7848 0.8836 14.8164 1.04293 14.8164 1.22411L14.8164 9.88705C14.8163 10.1748 14.7165 10.4165 14.5171 10.6124C14.3174 10.8082 14.0676 10.9062 13.7676 10.9064C13.4775 10.8964 13.235 10.799 13.0403 10.6143C12.8456 10.4296 12.7483 10.1872 12.7483 9.88705L12.7483 3.51907Z" fill="#E12D36"/>
</svg></span> </button>
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
