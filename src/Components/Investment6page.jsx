import React, { useState } from "react";
import "./Css/Investment6page.css";

import landImg from "./Frame 2087328324.png";
import agriImg from "./Frame 2087328323.png";
import leftPage from "./Frame 3.png";
import rightPage from "./Frame 2.png";

import landImg2 from "./Frame 2087328328.png";
import agriImg2 from "./Frame 2087328325.png";
import leftPage2 from "./Frame 2087328326.png";
import rightPage2 from "./Frame 2087328327.png";

import landImg3 from "./Frame 2087328330.png";
import agriImg3 from "./Frame 2087328329.png";
import leftPage3 from "./Frame 2087328319.png";
import rightPage3 from "./Frame 2087328331.png";

import landImg4 from "./Frame 2087328332.png";
import agriImg4 from "./Frame 2087328333.png";
import leftPage4 from "./Frame 2087328334.png";
import rightPage4 from "./Frame 2087328335.png";

const InvestmentBooks = () => {
  const [activeBook, setActiveBook] = useState(null); // 1 | 2 | 3 | 4 | null

  // PAGE SELECTOR
  const bookPages = {
    1: { left: leftPage, right: rightPage },
    2: { left: leftPage2, right: rightPage2 },
    3: { left: leftPage3, right: rightPage3 },
    4: { left: leftPage4, right: rightPage4 },
  };

  return (
    <>
      <section className="investment-section">
        <h2 className="investment-title">Following Models of Investment</h2>

        {/* BOOK 1 */}
        <div className="investment-cards">
          <div className="investment-card">
            <img src={landImg} alt="Land Investment" />
          </div>
        <div className="investment-card clickable" onClick={() => setActiveBook(1)}>
  <img src={agriImg} alt="Agriculture Investment" className="agri-img" />
</div>

          <div className="investment-curves-ring"><span /></div>
        </div>

        {/* BOOK 2 */}
        <div className="investment-cards">
          <div className="investment-card">
            <img src={landImg2} alt="Land Investment" />
          </div>
          <div className="investment-card clickable" onClick={() => setActiveBook(2)}>
            <img src={agriImg2} alt="Agriculture Investment" className="agri-img" />
          </div>
          <div className="investment-curves-ring"><span /></div>
        </div>

        {/* BOOK 3 */}
        <div className="investment-cards">
          <div className="investment-card">
            <img src={landImg3} alt="Land Investment" />
          </div>
          <div className="investment-card clickable" onClick={() => setActiveBook(3)}>
            <img src={agriImg3} alt="Agriculture Investment" className="agri-img" />
          </div>
          <div className="investment-curves-ring"><span /></div>
        </div>

        {/* BOOK 4 */}
        <div className="investment-cards">
          <div className="investment-card">
            <img src={landImg4} alt="Land Investment" />
          </div>
          <div className="investment-card clickable" onClick={() => setActiveBook(4)}>
            <img src={agriImg4} alt="Agriculture Investment" className="agri-img" />
          </div>
          <div className="investment-curves-ring"><span /></div>
        </div>
      </section>

      {/* BOOK OPEN MODAL */}
   {activeBook && (
  <div className="book-modal">
    <div className="book-wrapper open-book">

      {/* LEFT PAGE */}
      <div
        className="book-page left-page open-left"
        onClick={() => setActiveBook(null)}
        style={{ cursor: "pointer" }}
      >
        <img src={bookPages[activeBook].right} alt="Left Page" />
      </div>

      {/* RIGHT PAGE */}
      <div className="book-page right-page open-right">
        <img src={bookPages[activeBook].left} alt="Right Page" />
      </div>

    </div>
  </div>
)}


    </>
  );
};

export default InvestmentBooks;
