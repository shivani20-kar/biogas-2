import React, { useState } from "react";
import "./Css/Investment6page.css";

import landImg from "./Frame 2087328324.png";
import agriImg from "./Frame 2087328323.png";

import leftPage from "./Frame 3.png";
import rightPage from "./Frame 2.png";

const InvestmentBooks = () => {
  const [openBook, setOpenBook] = useState(false);

  return (
    <>
      <section className="investment-section">
        <h2 className="investment-title">Following Models of Investment</h2>

        <div className="investment-cards">
          <div className="investment-card">
            <img src={landImg} alt="Land Investment" />
          </div>

         <div
  className="investment-card clickable"
  onClick={() => setOpenBook(true)}
>
  <img src={agriImg} alt="Agriculture Investment" className="agri-img" />
  
</div>
<div className="investment-curves-ring">
  <span></span>
</div>


        </div>
      </section>

      {/* BOOK OPEN */}
      {openBook && (
        <div className="book-modal">
          <div className="book-wrapper">
            <div className="book-page right-page"  onClick={() => setOpenBook(false)}>
              <img src={rightPage} alt="Right Page" />
            </div>
             <div
              className="book-page left-page"
             
            >
              <img src={leftPage} alt="Left Page" />
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default InvestmentBooks;
