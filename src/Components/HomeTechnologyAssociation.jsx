import React from "react";
import "../Components/Css/HomeTechnologyAssociation.css";

const HomeTechnologyAssociation = () => {
  return (
    <section className="home-technology">
      <div className="home-technology__container">
        {/* LEFT CONTENT */}
        <div className="home-technology__left">
          <h2>
            Our Technology & <br /> Association
          </h2>

          <p>
            At GDBiogas, the energy transition is tailored to local realities.
            Our fit-for-purpose approach delivers customized renewable energy
            solutions that meet real needs, simplify access, and build a
            sustainable future.
          </p>

          <button className="home-technology__btn">All Technology</button>
        </div>

        {/* RIGHT CONTENT */}
       <div className="home-technology__right">
  <div className="home-technology__card home-technology__card--large">
    Energy Crops and Waste
  </div>

  <div className="home-technology__card home-technology__card--small"></div>
  <div className="home-technology__card home-technology__card--small"></div>
</div>

      </div>
    </section>
  );
};

export default HomeTechnologyAssociation;
