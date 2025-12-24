import React from "react";
import HeaderHero from "../Components/Home";


const Layout = ({ children }) => {
  return (
    <>
      {/* HEADER ALWAYS ON TOP */}
      <div className="header-hero-wrapper">
        {/* <HeaderHero/> */}

        {/* PAGE CONTENT OVERLAY ON HEADER IMAGE */}
        <div className="page-overlay-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
