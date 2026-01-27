import React from "react";
import "../Components/Css/HomeReferenceSection.css";

const HomeReferenceSection = () => {
  return (
    <section className="home-reference-section">
      {/* TOP HEADER */}
      <div className="home-reference-header">
        <div className="home-reference-left">
          <div className="home-reference-tag">
            <span className="home-reference-tag-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14 12.5H13.5V2.5C13.5 2.36739 13.4473 2.24021 13.3536 2.14645C13.2598 2.05268 13.1326 2 13 2H9.5C9.36739 2 9.24021 2.05268 9.14645 2.14645C9.05268 2.24021 9 2.36739 9 2.5V5H6C5.86739 5 5.74021 5.05268 5.64645 5.14645C5.55268 5.24021 5.5 5.36739 5.5 5.5V8H3C2.86739 8 2.74021 8.05268 2.64645 8.14645C2.55268 8.24021 2.5 8.36739 2.5 8.5V12.5H2C1.86739 12.5 1.74021 12.5527 1.64645 12.6464C1.55268 12.7402 1.5 12.8674 1.5 13C1.5 13.1326 1.55268 13.2598 1.64645 13.3536C1.74021 13.4473 1.86739 13.5 2 13.5H14C14.1326 13.5 14.2598 13.4473 14.3536 13.3536C14.4473 13.2598 14.5 13.1326 14.5 13C14.5 12.8674 14.4473 12.7402 14.3536 12.6464C14.2598 12.5527 14.1326 12.5 14 12.5ZM10 3H12.5V12.5H10V3ZM6.5 6H9V12.5H6.5V6ZM3.5 9H5.5V12.5H3.5V9Z"
                  fill="#0040C1"
                />
              </svg>
            </span>
            Plants
          </div>
          <h1 className="home-reference-title">Reference</h1>
        </div>

        <button className="home-reference-btn">
          <span className="con-text">Site Visit</span>
          <span className="con-icon">
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

      {/* CARDS GRID */}
      <div className="home-reference-grid">
        {/* Top Row */}
        <div className="home-reference-pill home-pill-empty1">
          <span className="home-x-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="50"
              viewBox="0 0 256 64"
              fill="none"
              style={{ pointerEvents: "none" }}
            >
              <path
                d="M64.286 1L38.83 26.456M27.517 37.77L2.06 63.225M63.224 63.225L37.77 37.77M26.456 26.456L1 1M159.572 1L134.116 26.456M122.803 37.77L97.347 63.225M158.511 63.225L133.056 37.77M121.742 26.456L96.286 1M254.858 1L229.402 26.456M218.089 37.77L192.633 63.225M253.798 63.225L228.342 37.77M217.028 26.456L191.572 1"
                stroke="#84A9F3"
                style={{ pointerEvents: "none" }}
              />
            </svg>
          </span>
        </div>

        <div className="home-reference-pill home-pill-card">
          <div className="home-pill-left">
            <span className="home-pill-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <path
                  d="M43.3823 24.8202C43.2256 24.9771 43.0395 25.1016 42.8346 25.1865C42.6298 25.2714 42.4102 25.3152 42.1884 25.3152C41.9667 25.3152 41.7471 25.2714 41.5422 25.1865C41.3374 25.1016 41.1513 24.9771 40.9945 24.8202L28.6884 12.512V45.5638C28.6884 46.0114 28.5107 46.4406 28.1942 46.7571C27.8777 47.0735 27.4485 47.2513 27.0009 47.2513C26.5534 47.2513 26.1242 47.0735 25.8077 46.7571C25.4912 46.4406 25.3134 46.0114 25.3134 45.5638V12.512L13.0073 24.8202C12.6907 25.1369 12.2612 25.3148 11.8134 25.3148C11.3656 25.3148 10.9362 25.1369 10.6195 24.8202C10.3029 24.5036 10.125 24.0741 10.125 23.6263C10.125 23.1785 10.3029 22.7491 10.6195 22.4324L25.807 7.24492C25.9638 7.08802 26.1499 6.96356 26.3547 6.87863C26.5596 6.79371 26.7792 6.75 27.0009 6.75C27.2227 6.75 27.4423 6.79371 27.6472 6.87863C27.852 6.96356 28.0381 7.08802 28.1948 7.24492L43.3823 22.4324C43.5392 22.5891 43.6637 22.7753 43.7486 22.9801C43.8336 23.185 43.8773 23.4046 43.8773 23.6263C43.8773 23.8481 43.8336 24.0677 43.7486 24.2725C43.6637 24.4774 43.5392 24.6635 43.3823 24.8202Z"
                  fill="#2970FF"
                />
              </svg>
            </span>
            <span className="home-pill-number">1</span>
          </div>
          <div className="home-pill-right">
            <div className="home-pill-title">SATARA</div>
            <div className="home-pill-desc">
              Municipal Waste to <br /> Hydrothermal Plant
            </div>
          </div>
        </div>

        <div className="home-reference-pill home-pill-empty2">
          <span className="home-x-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="50"
              viewBox="0 0 256 64"
              fill="none"
              style={{ pointerEvents: "none" }}
            >
              <path
                d="M64.286 1L38.83 26.456M27.517 37.77L2.06 63.225M63.224 63.225L37.77 37.77M26.456 26.456L1 1M159.572 1L134.116 26.456M122.803 37.77L97.347 63.225M158.511 63.225L133.056 37.77M121.742 26.456L96.286 1M254.858 1L229.402 26.456M218.089 37.77L192.633 63.225M253.798 63.225L228.342 37.77M217.028 26.456L191.572 1"
                stroke="#84A9F3"
                style={{ pointerEvents: "none" }}
              />
            </svg>
          </span>
        </div>

        {/* Bottom Row */}
        <div className="home-reference-pill home-pill-card pill-mr">
          <div className="home-pill-left">
            <span className="home-pill-number">2</span>
          </div>
          <div className="home-pill-right">
            <div className="home-pill-title">PALSHI</div>
            <div className="home-pill-desc">
              Napier Grass to <br /> Biogas Plant
            </div>
          </div>
        </div>

        <div className="home-reference-pill home-pill-small">
          <span className="home-plus-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 88 88"
              fill="none"
              style={{ pointerEvents: "none" }}
            >
              <g clipPath="url(#clip0_6902_139504)">
                <path
                  d="M44.75 0V36M44.75 52V88M88 44.75H52M36 44.75H0"
                  stroke="#82ACFF"
                  style={{ pointerEvents: "none" }}
                />
              </g>
              <defs>
                <clipPath id="clip0_6902_139504">
                  <rect width="88" height="88" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>

        <div className="home-reference-pill home-pill-card pill-ml home-active">
          <div className="home-pill-left">
            <span className="home-pill-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
  <path d="M43.3823 24.8202C43.2256 24.9771 43.0395 25.1016 42.8346 25.1865C42.6298 25.2714 42.4102 25.3152 42.1884 25.3152C41.9667 25.3152 41.7471 25.2714 41.5422 25.1865C41.3374 25.1016 41.1513 24.9771 40.9945 24.8202L28.6884 12.512V45.5638C28.6884 46.0114 28.5107 46.4406 28.1942 46.7571C27.8777 47.0735 27.4485 47.2513 27.0009 47.2513C26.5534 47.2513 26.1242 47.0735 25.8077 46.7571C25.4912 46.4406 25.3134 46.0114 25.3134 45.5638V12.512L13.0073 24.8202C12.6907 25.1369 12.2612 25.3148 11.8134 25.3148C11.3656 25.3148 10.9362 25.1369 10.6195 24.8202C10.3029 24.5036 10.125 24.0741 10.125 23.6263C10.125 23.1785 10.3029 22.7491 10.6195 22.4324L25.807 7.24492C25.9638 7.08802 26.1499 6.96356 26.3547 6.87863C26.5596 6.79371 26.7792 6.75 27.0009 6.75C27.2227 6.75 27.4423 6.79371 27.6472 6.87863C27.852 6.96356 28.0381 7.08802 28.1948 7.24492L43.3823 22.4324C43.5392 22.5891 43.6637 22.7753 43.7486 22.9801C43.8336 23.185 43.8773 23.4046 43.8773 23.6263C43.8773 23.8481 43.8336 24.0677 43.7486 24.2725C43.6637 24.4774 43.5392 24.6635 43.3823 24.8202Z" fill="white"/>
</svg></span>
            <span className="home-pill-number">3</span>
          </div>
          <div className="home-pill-right">
            <div className="home-pill-title">PATAN</div>
            <div className="home-pill-desc">
              Agriculture Waste to <br /> Hydrothermal Plant
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReferenceSection;
