import React from "react";
import "./Css/InvestmentContact.css";

const InvestmentContact = () => {
  return (
    <section className="inv-contact-section">
      <div className="inv-contact-containerr">
        {/* Left Content */}
        <div className="inv-contact-left">
          <p className="inv-contact-text">
            For Investment Enquiries, <br />
            Strategic Partnerships & Detailed <br />
            Discussions ?
          </p>

          <a
            href="mailto:invest@gdbiogas.com"
            className="inv-contact-email"
          >
            invest@gdbiogas.com
          </a>
        </div>

        {/* Right Content */}
        <div className="inv-contact-right">
          <p className="inv-contact-reach">You can reach us:</p>
          <a href="tel:+919270956656" className="inv-contact-phone">
            +91 9270956656
          </a>
        </div>
      </div>
    </section>
  );
};

export default InvestmentContact;
