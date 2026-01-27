import React from "react";
import "../Components/Css/HomeWorkingWithGD.css";
import bgImage from "../Components/IMAGES/homeworkingwithGDbg.png";

const HomeWorkingWithGD = () => {
  return (
    <section
      className="home-working"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="home-working__overlay"></div>

      <div className="home-working__content">
        <h4 className="home-working__subtitle">You Want To</h4>

        <h1 className="home-working__title">
          Working With <span>GD</span>
        </h1>

        {/* List without li */}
        <div className="home-working__list">
          <div className="home-working__item">
            <span className="home-working__dot">
              {/* SVG Dot */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_6902_141374)">
                  <mask id="path-2-inside-1_6902_141374" fill="white">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" />
                  </mask>
                  <path
                    d="M0 8M16 8M16 8M0 8M8 0M16 8M8 16M0 8M8 16V12C5.79086 12 4 10.2091 4 8H0H-4C-4 14.6274 1.37258 20 8 20V16ZM16 8H12C12 10.2091 10.2091 12 8 12V16V20C14.6274 20 20 14.6274 20 8H16ZM8 0V4C10.2091 4 12 5.79086 12 8H16H20C20 1.37258 14.6274 -4 8 -4V0ZM8 0V-4C1.37258 -4 -4 1.37258 -4 8H0H4C4 5.79086 5.79086 4 8 4V0Z"
                    fill="#F94006"
                    mask="url(#path-2-inside-1_6902_141374)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6902_141374">
                    <rect width="16" height="16" rx="8" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Career
          </div>

          <div className="home-working__item">
            <span className="home-working__dot">
              {/* SVG Dot */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_6902_141374)">
                  <mask id="path-2-inside-1_6902_141374" fill="white">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" />
                  </mask>
                  <path
                    d="M0 8M16 8M16 8M0 8M8 0M16 8M8 16M0 8M8 16V12C5.79086 12 4 10.2091 4 8H0H-4C-4 14.6274 1.37258 20 8 20V16ZM16 8H12C12 10.2091 10.2091 12 8 12V16V20C14.6274 20 20 14.6274 20 8H16ZM8 0V4C10.2091 4 12 5.79086 12 8H16H20C20 1.37258 14.6274 -4 8 -4V0ZM8 0V-4C1.37258 -4 -4 1.37258 -4 8H0H4C4 5.79086 5.79086 4 8 4V0Z"
                    fill="#F94006"
                    mask="url(#path-2-inside-1_6902_141374)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6902_141374">
                    <rect width="16" height="16" rx="8" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Business Opportunity
          </div>

          <div className="home-working__item">
            <span className="home-working__dot">
              {/* SVG Dot */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_6902_141374)">
                  <mask id="path-2-inside-1_6902_141374" fill="white">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" />
                  </mask>
                  <path
                    d="M0 8M16 8M16 8M0 8M8 0M16 8M8 16M0 8M8 16V12C5.79086 12 4 10.2091 4 8H0H-4C-4 14.6274 1.37258 20 8 20V16ZM16 8H12C12 10.2091 10.2091 12 8 12V16V20C14.6274 20 20 14.6274 20 8H16ZM8 0V4C10.2091 4 12 5.79086 12 8H16H20C20 1.37258 14.6274 -4 8 -4V0ZM8 0V-4C1.37258 -4 -4 1.37258 -4 8H0H4C4 5.79086 5.79086 4 8 4V0Z"
                    fill="#F94006"
                    mask="url(#path-2-inside-1_6902_141374)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6902_141374">
                    <rect width="16" height="16" rx="8" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Investment
          </div>

          <div className="home-working__item">
            <span className="home-working__dot">
              {/* SVG Dot */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clipPath="url(#clip0_6902_141374)">
                  <mask id="path-2-inside-1_6902_141374" fill="white">
                    <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" />
                  </mask>
                  <path
                    d="M0 8M16 8M16 8M0 8M8 0M16 8M8 16M0 8M8 16V12C5.79086 12 4 10.2091 4 8H0H-4C-4 14.6274 1.37258 20 8 20V16ZM16 8H12C12 10.2091 10.2091 12 8 12V16V20C14.6274 20 20 14.6274 20 8H16ZM8 0V4C10.2091 4 12 5.79086 12 8H16H20C20 1.37258 14.6274 -4 8 -4V0ZM8 0V-4C1.37258 -4 -4 1.37258 -4 8H0H4C4 5.79086 5.79086 4 8 4V0Z"
                    fill="#F94006"
                    mask="url(#path-2-inside-1_6902_141374)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6902_141374">
                    <rect width="16" height="16" rx="8" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            Co-Ownership
          </div>
        </div>

        <p className="home-working__desc">
          Multiple pathways to grow, earn, and create <br />
          long-term value with GD.
        </p>

        <button className="home-working__button">
      <span className="home-working__btn-text">Select Your Type</span>
      <span className="home-working__btn-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M12.7483 3.51907L1.76037 14.507C1.55453 14.7128 1.31275 14.8156 1.03503 14.8155C0.757307 14.8156 0.515528 14.7128 0.309694 14.507C0.103859 14.3011 0.00102257 14.0593 0.00118376 13.7816C0.00102257 13.5039 0.103859 13.2621 0.309694 13.0563L11.2976 2.0684L4.92961 2.0684C4.64189 2.06824 4.40253 1.97088 4.21152 1.77633C4.02068 1.58161 3.92026 1.33919 3.91027 1.04906C3.91043 0.74909 4.00529 0.499331 4.19484 0.299783C4.38456 0.100074 4.62948 0.000220137 4.92961 0.000220137L13.5925 0.000220252C13.7737 0.000220252 13.9331 0.0318939 14.0705 0.09524C14.2082 0.158425 14.3353 0.248286 14.4518 0.364823C14.5684 0.481361 14.6582 0.608456 14.7214 0.746109C14.7848 0.8836 14.8164 1.04293 14.8164 1.22411L14.8164 9.88705C14.8163 10.1748 14.7165 10.4165 14.5171 10.6124C14.3174 10.8082 14.0676 10.9062 13.7676 10.9064C13.4775 10.8964 13.235 10.799 13.0403 10.6143C12.8456 10.4296 12.7483 10.1872 12.7483 9.88705L12.7483 3.51907Z"
            fill="#E12D36"
          />
        </svg>
      </span>
    </button>
      </div>
    </section>
  );
};

export default HomeWorkingWithGD;
