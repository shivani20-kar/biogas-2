import React from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/IGDStories.css";
import colonimg from "../Components/IMAGES/“.png";
import IGDImage from "../Components/IMAGES/IGDimage.png";

const IGDStories = () => {
  return (
    <div className="igd-stories">
      {/* LEFT SECTION */}
      <div className="paraone">
        {/* Image as background */}
        <img src={IGDImage} alt="GD Earth" className="full-image" />

        {/* Text overlay */}
        <div className="text-overlay">
          <div className="main-heading">
            <span className="igdred-line"></span> GD Stories
          </div>

          <img className="storiesimg" src={colonimg} alt="" />

          <div className="sub-heading">
            GD Earth Planet for<br /> Anand Kranti
          </div>

          <div className="paragraph-one">
            A journey of transformation<br /> and sustainability.
          </div>
        </div>
      </div> 

      {/* RIGHT SECTION */}
      <div className="paratwo">
        <div className="paragraph">
          Maturity to a young boy came quite early in his childhood, at a tender
          age of seven, while walking to the local village school, he saw
          struggle at every doorstep, struggle to break the vicious cycle of
          poverty. Everyone was working, with grim lines of unknown pressures,
          still with a smile to greet with name of their beloved god.
        </div>

        <div className="paragraph">
          Girish was born in a farmer’s family at a small village in
          Maharashtra, India, he was one of four sibling. Right at the early
          age, he vowed that he would do something to help farmers break this
          vicious cycle of never-ending poverty and sufferings where entire life
          is finished to earn two meals. Farmers ended their lives, because rain
          god was not kind in a year or if farmers could not repay debts. As
          Girish was growing, he started acquiring skills and education. He
          started exploring different opportunities.
        </div>

        <div className="fundamentals-heading">
          Fundamentals were very clear:
        </div>

        <ul className="fundamentals-list">
          <li>
            Farmers need to earn more money to what they are doing, means to
            cultivate Cash Crops.
          </li>
          <li>
            Cash Crop which is unaffected to a large extent by non-seasonal rain
            fall or pest attacks.
          </li>
          <li>
            Cash crop which is readily saleable at higher rates than other
            traditional crops.
          </li>
          <li>
            Other uses of barren land into cultivable land for Energy crops.
          </li>
          <li>
            Use modern sustainable farming techniques for organic and animal
            farming.
          </li>
        </ul>

        <div className="paragraph">
          Girish has knowledge of land and agriculture as he was a son of a
          farmer. Girish had to gain knowledge of finance to understand how
          money world works. Girish went to study Chartered Accountancy and
          completed intermediate level of the Chartered Accountancy. Girish
          started practicing in the areas of Taxation, Investment, Insurance and
          Desi cow Farming Business.
        </div>
      </div>
    </div>
  );
};

export default IGDStories;
