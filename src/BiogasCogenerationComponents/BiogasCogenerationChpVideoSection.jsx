import React, { useState } from "react";
import "./BiogasCogenerationCss/BiogasCogenerationChpVideoSection.css";

const BiogasCogenerationChpVideoSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* OUTER CONTAINER */}
      <section className="biogas-chp-outer">
        {/* INNER BLUE SECTION */}
        <div className="biogas-chp-video">
          {/* TEXT */}
          <div className="biogas-chp-content">
            <h2>
              Technologies and <br />
              operating process of <br />
              a biogas CHP plant
            </h2>
          </div>

          {/* RED VIDEO BOX */}
          <div
            className="biogas-video-box"
            onClick={() => setOpen(true)}
          >
            <div className="biogas-play-btn">
              {/* SVG PLAY ICON */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="24"
                viewBox="0 0 38 44"
                fill="none"
                className="play-svg"
              >
                <path
                  d="M37.5 21.6504L0 43.301V0L37.5 21.6504Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO POPUP */}
      {open && (
        <div className="video-popup">
          <div className="popup-content">
            <span
              className="close-btn"
              onClick={() => setOpen(false)}
            >
              ×
            </span>

            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Biogas CHP Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default BiogasCogenerationChpVideoSection;
