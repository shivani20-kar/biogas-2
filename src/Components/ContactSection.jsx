import React, { useState, useEffect, useRef } from "react";
import './Css/ContactSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    postcode: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const [visibleSections, setVisibleSections] = useState({
    form: false,
    map: false,
  });

  const formRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("form-section")) {
              setVisibleSections((prev) => ({ ...prev, form: true }));
            } else if (entry.target.classList.contains("map-section")) {
              setVisibleSections((prev) => ({ ...prev, map: true }));
            }
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of element is visible
    );

    if (formRef.current) observer.observe(formRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted!");
    setFormData({
      name: "",
      street: "",
      city: "",
      postcode: "",
      contactNumber: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact">
      <div
        ref={formRef}
        className={`form-section ${visibleSections.form ? "animate" : ""}`}
      >
        <h3>
          Looking for a solution
          <br />
          for your <span>business?</span>
        </h3>
        <p className="subtitle">
          Fill out the form, and we will contact you as soon as possible.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Contact Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
            required
          />
          <div className="row">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="postcode"
              placeholder="Postcode"
              value={formData.postcode}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="submit-btn">
            <span>Submit</span>{" "}
            <FontAwesomeIcon className="arrow" icon={faArrowRight} />
          </button>
        </form>

        <h4 className="contacttitle">Contacts</h4>
        <div className="contact-info">
          <FontAwesomeIcon icon={faPhone} />
          <div className="contact-item">
            <span>Phone</span>
            <div className="highlight">111 111 111</div>
          </div>

          <FontAwesomeIcon icon={faEnvelope} />
          <div className="contact-item">
            <span>Email</span>
            <div className="highlight">info@company.com</div>
          </div>
        </div>
      </div>

      <div
        ref={mapRef}
        className={`map-section ${visibleSections.map ? "animate" : ""}`}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60614.29088237958!2d73.96224402217858!3d17.6804638788598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc237e1d2d6b7b1%3A0x403bfbca0df89b1f!2sSatara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1730131800000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          title="map"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
