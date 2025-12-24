import React, { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/CareerForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CareerForm() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setShowPopup(true);
  };

  return (
    <>
      <section className="contact-section-container-career">
        <div className="contact-top-text-career">
          <p className="green-textvendor-career">
            Don't just deal. Build. Become a Growth Partner..
          </p>
        </div>

        <section className="contactform-wrapper-career">
          
          {/* Red Bars Left */}
          <div className="red-bars-career red-bars-left-career">
            <div className="red-linevendor-career"></div>
            <div className="red-linevendor-career"></div>
          </div>

          {/* Outer Frame */}
          <div className="form-outer-frame-career">
            
            {/* Inner White Frame */}
            <div className="form-inner-frame-career">

              {/* Upload style form */}
              <form className="upload-style-form-career" onSubmit={handleSubmit}>
                
                <div className="upload-header-career">
                  Upload Here
                </div>

                <div className="upload-box-career">
                  <p>Click to browse or<br />drag and drop your files</p>
                  <input type="file" className="hidden-file-input-career" />
                </div>

                {/* Original animated button */}
                <button type="submit" className="submit-btn-career">
                  <span>Submit</span>
                  <FontAwesomeIcon className="arrow-career" icon={faArrowRight} />
                </button>

              </form>

            </div>
          </div>

          {/* Red Bars Right */}
          <div className="red-bars-career red-bars-right-career">
            <div className="red-linevendor-career"></div>
            <div className="red-linevendor-career"></div>
          </div>

        </section>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay-career">
          <div className="popup-box-career">
            <button
              className="popup-close-career"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>

            <h1 className="popup-title-career">Thank You..!</h1>
            <p className="popup-sub-career">For Connecting</p>
            <p className="popup-text-career">
              Our IT Core<span className="red-x-career">X</span> Team as soon as
              <br />
              Contact With You 
            </p>

            <button
              className="popup-done-career"
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
