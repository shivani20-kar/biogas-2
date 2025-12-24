import React, { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/RoleVideosSection.css";
import playIcon from "../Components/IMAGES/Polygon 7.png";

const videoList = {
  commissioning: "https://www.youtube.com/embed/VIDEO_1",
  ceo: "https://www.youtube.com/embed/VIDEO_2",
  itcorex: "https://www.youtube.com/embed/VIDEO_3",
  coordinator: "https://www.youtube.com/embed/VIDEO_4",
};

export default function RoleVideosSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  const roles = [
    {
      text: (
        <>
          What is the role of the <br />
          Commissioning <br /> Engineer?
        </>
      ),
      align: "left",
      video: videoList.commissioning,
    },
    {
      text: "What is the role of the CEO?",
      align: "right",
      video: videoList.ceo,
    },
    {
      text: (
        <>
          What is the role of the <br />
          IT CoreX?
        </>
      ),
      align: "left",
      video: videoList.itcorex,
    },
    {
      text: (
        <>
          What is the role of the <br />
          Technical Project
          <br /> Co-ordinator? 
        </>
      ),
      align: "right",
      video: videoList.coordinator,
    },
  ];

  return (
    <section className="role-video-wrapper">
      {roles.map((item, index) => (
        <div
          key={index}
          className={`role-cardvideo ${
            item.align === "right" ? "right-card" : "left-card"
          }`}
          onClick={() => setActiveVideo(item.video)}
        >
          <div className="role-textvideo">{item.text}</div>

          <div className="video-box">
            <div className="play-icon-wrapper">
              <img src={playIcon} className="play-icon" alt="play" />
            </div>
          </div>
        </div>
      ))}

      {activeVideo && (
        <div className="video-popup">
          <div className="popup-content">
            <span className="close-btn" onClick={() => setActiveVideo(null)}>
              ×
            </span>
            <iframe
              src={activeVideo}
              title="role-video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
