import React from "react";
import "./HowDoWeWorkComponentsCss/HowDoOverView9.css";
import bgImage from "../HowDoWeWorkComponents/overview9.png";

const MarketingSection = () => {
  return (
    <div
      className="overviewmarketing-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overviewmarketing-overlay">
        <div className="overviewmarketing-content">
          <h2 className="overviewmarketing-heading">
            <span className="overviewmarketing-number">09</span>
            <span className="overviewmarketing-title">
              Marketing for Biogas & <br />
              Allied Products
            </span>
          </h2>

          <p>
            Marketing for biogas, advanced biofuel, and allied agriculture value
            addition products is driven by a clear focus on sustainability,
            reliability, and long-term value creation. The project positions its
            offerings as clean, renewable, and environmentally responsible
            alternatives to conventional energy and agricultural inputs. Target
            customers include industrial users,  progressive farmers, and institutional
            buyers seeking sustainable solutions aligned with ESG and carbon
            reduction goals.
          </p>

          <p>
            A diversified market approach is adopted to ensure stable demand and
            revenue streams. Biogas and advanced biofuels are marketed through
            long-term supply agreements, green energy tariffs, and partnerships
            with gas distributors and industrial consumers. Allied agriculture
            products such as organic fertilizers, cooperatives,
            agri-input dealers, and demonstration trials that showcase their
            effectiveness and yield benefits.
          </p>

          <p>
            Branding and communication strategies emphasize transparency,
            quality assurance, and measurable environmental impact. Marketing
            initiatives include digital platforms, and participation in industry exhibitions and
            government programs. Carbon credits, sustainability certifications,
            and performance data are leveraged to build credibility and
            differentiate products in competitive markets.
          </p>

          <p>
            Through strategic partnerships, customer education, and consistent
            quality delivery, the marketing strategy supports long-term market
            penetration and brand trust.The project establishes a strong and resilient market
            presence while contributing to the transition toward a low-carbon
            and resource-efficient economy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;
