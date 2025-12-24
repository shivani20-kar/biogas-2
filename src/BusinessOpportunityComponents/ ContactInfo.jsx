import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/ ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      {/* Left Column */}
      <div className="contact-left">
        <p className="contact-label">
          For media inquiries, contact our press team:
        </p>
        <a href="mailto:pr@gdbiogas.com" className="contact-email">
          pr@gdbiogas.com
        </a>

        <p className="contact-label">Get in touch with our founders:</p>
        <a href="mailto:girish@gdbiogas.com" className="contact-email">
          girish@gdbiogas.com
        </a>

        <p className="contact-label">Would you like to join GD Farm?</p>
        <a href="mailto:hrfarm@gdbiogas.com" className="contact-email">
          hrfarm@gdbiogas.com
        </a>

        <p className="contact-label">Would you like to join GD Mart?</p>
        <a href="mailto:hrmart@gdbiogas.com" className="contact-email">
          hrmart@gdbiogas.com
        </a>

        <p className="contact-label">Would you like to join GD ImPax?</p>
        <a href="mailto:hrimpax@gdbiogas.com" className="contact-email">
          hrimpax@gdbiogas.com
        </a>

        <p className="contact-label">Would you like to join GD GramShaktti?</p>
        <a href="mailto:hrgramshaktti@gdbiogas.com" className="contact-email">
          hrgramshaktti@gdbiogas.com
        </a>
      </div>

      {/* Right Column */}
      <div className="contact-right">
        <p className="contact-label">
          Interested in our solution and want to know more?
        </p>
        <a href="mailto:sales@gdbiogas.com" className="contact-email">
          sales@gdbiogas.com
        </a>

        <p className="contact-phone-label">You can reach us:</p>
        <p className="contact-phone">+91 9270956656</p>
      </div>
    </div>
  );
};

export default ContactInfo;
