import React, { useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/RoleVideosSection.css";

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
          What is the role of the 
          Commissioning  Engineer?
        </>
      ),
      align: "left",
      video: videoList.commissioning,
    },
    {
      
      text:(<> What is the  role of the CEO?</>),
      align: "right",
      video: videoList.ceo,
    },
   {
  text: (
    <>
      What is the role of the 
      IT Core<span className="red-x">X</span>?
    </>
  ),

      align: "left",
      video: videoList.itcorex,
    },
    {
      text: (
        <>
          What is the role of the
          Technical Project
          Co-ordinator? 
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
          // onClick={() => setActiveVideo(item.video)}
        >
          <div className="role-textvideo">{item.text}</div>

          <div className="video-box">
            <div className="play-icon-wrapper"  onClick={(e) => {
    e.stopPropagation(); // prevents parent click (safe)
    setActiveVideo(item.video);
  }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="play-icon" width="40" height="30" viewBox="0 0 38 44" fill="none">
  <path d="M37.5 21.6504L-2.03916e-06 43.301L-1.46405e-07 -0.00024578L37.5 21.6504Z" fill="black"/>
</svg>
              {/* <img src={playIcon} className="play-icon" alt="play" /> */}
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
