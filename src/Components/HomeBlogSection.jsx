import React from "react";
import "../Components/Css/HomeBlogSection.css";

// images
import mainImg from "../Components/IMAGES/blog-main.png";
import sideImg1 from "../Components/IMAGES/blog-1.png";
import sideImg2 from "../Components/IMAGES/blog-2.png";
import sideImg3 from "../Components/IMAGES/blog-3.png";

const HomeBlogSection = () => {
  return (
    <section className="home-blog">
      <div className="home-blog__container">
        {/* Header */}
        <div className="home-blog__header">
          <button className="home-blog__badge" aria-label="Blog section">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M13 1.5H4.5C3.96957 1.5 3.46086 1.71071 3.08579 2.08579C2.71071 2.46086 2.5 2.96957 2.5 3.5V14C2.5 14.1326 2.55268 14.2598 2.64645 14.3536C2.74021 14.4473 2.86739 14.5 3 14.5H12C12.1326 14.5 12.2598 14.4473 12.3536 14.3536C12.4473 14.2598 12.5 14.1326 12.5 14C12.5 13.8674 12.4473 13.7402 12.3536 13.6464C12.2598 13.5527 12.1326 13.5 12 13.5H3.5C3.5 13.2348 3.60536 12.9804 3.79289 12.7929C3.98043 12.6054 4.23478 12.5 4.5 12.5H13C13.1326 12.5 13.2598 12.4473 13.3536 12.3536C13.4473 12.2598 13.5 12.1326 13.5 12V2C13.5 1.86739 13.4473 1.74021 13.3536 1.64645C13.2598 1.55268 13.1326 1.5 13 1.5ZM12.5 11.5H4.5C4.14884 11.4995 3.80382 11.592 3.5 11.7681V3.5C3.5 3.23478 3.60536 2.98043 3.79289 2.79289C3.98043 2.60536 4.23478 2.5 4.5 2.5H12.5V11.5Z"
                fill="#0040C1"
              />
            </svg>
            <span>Blog</span>
          </button>

          <h1 className="home-blog__title">
            <span className="home-blog__title--orange">Read the Articles</span>
            <br />
            <span className="home-blog__title--blue">
              Written By Professionals
            </span>
          </h1>

          <p className="home-blog__subtitle">
            Expert perspectives, industry trends, and real-world solutions
            shaping renewable energy, biofuels, and rural transformation.
          </p>
        </div>

        {/* Content */}
        <div className="home-blog__content">
          {/* Left big card */}
          <article className="home-blog__main-card">
            <img
              src={mainImg}
              alt="Waste to Wealth: The Future of Bioenergy"
              className="home-blog__main-image"
            />

            <div className="home-blog__meta">
              <span className="home-blog__category">Advice</span>
              <span className="home-blog__date">• Apr 24, 2025</span>
            </div>

            <h3 className="home-blog__card-title">
              Waste to Wealth: The Future of Bioenergy
            </h3>

            <p className="home-blog__description">
             How agricultural, municipal, and industrial waste can be transformed into biogas, bio-CNG, hydrochar, and advanced biofuels—fueling India’s clean energy mission.
            </p>
          </article>

          {/* Right small cards */}
          <div className="home-blog__side-cards">
            <article className="home-blog__side-card">
              <img
                src={sideImg1}
                alt="One District, One Trillion Dollar Economy"
              />
              <div>
                <div className="home-blog__meta">
              <span className="home-blog__category">Advice</span>
              <span className="home-blog__date">• Apr 23, 2025</span>
            </div>
                <h4 className="home-blog__side-title">
                  One District, One Trillion Dollar Economy
                </h4>
                <p className="home-blog__side-desc">
                  Exploring Asia’s first district-level trillion-dollar economic
                  model and how decentralized energy, agri-industry, and
                  technology partnerships drive local prosperity.
                </p>
              </div>
            </article>

            <article className="home-blog__side-card">
              <img
                src={sideImg2}
                alt="Turnkey Solutions for Sustainable Infrastructure"
              />
              <div>
                <div className="home-blog__meta">
              <span className="home-blog__category">Advice</span>
              <span className="home-blog__date">• Apr 22, 2025</span>
            </div>
                <h4 className="home-blog__side-title">
                  Turnkey Solutions for Sustainable Infrastructure
                </h4>
                <p className="home-blog__side-desc">
                  From design and construction to technology and marketing
                  understanding how integrated turnkey solutions reduce risk and
                  accelerate renewable projects.
                </p>
              </div>
            </article>

            <article className="home-blog__side-card">
              <img
                src={sideImg3}
                alt="Empowering Farmers Through Clean Energy"
              />
              <div>
                 <div className="home-blog__meta">
              <span className="home-blog__category">Advice</span>
              <span className="home-blog__date">• Apr 21, 2025</span>
            </div>
                <h4 className="home-blog__side-title">
                  Empowering Farmers Through Clean Energy
                </h4>
                <p className="home-blog__side-desc">
                  How biogas plants, organic fertilizers, and allied products
                  create stable income, energy independence, and dignity for
                  farmers.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
