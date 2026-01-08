import React from "react";
import "./HowDoWeWorkComponentsCss/HowDoOverView7.css"; 
import bgImage from "../HowDoWeWorkComponents/overview7.png"; 

const CommunityEngagementSection = () => {
  return (
    <div
      className="overviewcommunity-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="overviewcommunity-overlay">
        <div className="overviewcommunity-content">
          <h2 className="overviewcommunity-heading">
            <span className="overviewcommunity-number">07</span>
            <span className="overviewcommunity-title">
              Community Engagement <br />
              Initiatives
            </span>
          </h2>

          <p>
           Community engagement is a foundational element of the biogas, advanced biofuel, and allied agriculture value addition initiatives. The project actively involves local farmers, dairy owners, self-help groups, and rural entrepreneurs in the supply of biomass feedstock, creating a reliable income stream from agricultural residues, animal waste, and organic by-products. This inclusive approach strengthens rural participation and builds long-term partnerships with the local d builds long-term partnerships with the local
            community.
          </p>

          <p>
            Community engagement is a foundational element of the biogas, advanced biofuel, and allied agriculture value addition initiatives. The project actively involves local farmers, dairy owners, self-help groups, and rural entrepreneurs in the supply of biomass feedstock. This inclusive approach strengthens rural participation and builds long-term partnerships with the local community.
          </p>

          <p>
            The project also supports allied agriculture value addition by integrating outputs such as organic fertilizers, bio-slurry, biochar, and other bio-based products into local agricultural systems. These products enhance soil health and reduce dependence on chemical inputs, directly benefiting farmers and contributing to sustainable agriculture. Community-based distribution models ensure easy access and fair pricing for these value-added inputs.
          </p>
          <p>
            By fostering community ownership and participation, the initiative delivers long-term social and economic benefits. It enhances energy access, improves rural livelihoods, encourages entrepreneurship, and supports environmental stewardship. Through continuous engagement and transparent collaboration, advanced biofuels, and agriculture value addition with inclusive rural growth and community well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityEngagementSection;
