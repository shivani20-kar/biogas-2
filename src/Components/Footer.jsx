import React from "react";
import "../Components/Css/Footer.css";
import logoImg from "../Components/IMAGES/gdwhitelogo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      {/* RED FOOTER OVERLAY */}
      <div className="gd-footer">
        <div className="footer-content">
          {/* LEFT SECTION */}
          <div className="left-section">
            <h2>
              We have completed biogas plants & Advance Biofuel for various
              Agriculture & Allied industries
            </h2>

            <p>
              Discover GD Planet’s innovative and sustainable project portfolio
            </p>

            <button className="contact-btn">Contact Us</button>

            <div className="social-icons">
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="right-section">
            <img src={logoImg} className="footer-logo" alt="logo" />
          </div>
        </div>
      </div>

      {/* COPYRIGHT BELOW ON SAME BACKGROUND IMAGE */}
      <div className="copyright">
        © 2024 – Toni Järvinen @tonijrv – Privacy Policy • Cookies • Terms &
        Conditions
      </div>
    </footer>
  );
}
