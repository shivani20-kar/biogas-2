import "./CSS/BioGasHero.css";
import { Link } from "react-router-dom";
import logo from "../Components/IMAGES/Logowhite.png";
import mainbackground from "./Frame 2087328139.png";
import gif from "../Components/IMAGES/maingif.gif";

const BioGasHero = () => {
  return (
   <section className="biogashero">
        <div className="biogasherogdmainbackground">
          <img src={mainbackground} alt="" />
        </div>

        <div className="biogashero-content-overlayy"> 
          <div className="biogashero-rows">
            <div className="biogashero-logo-container">
              <img src={logo} alt="GDBioGas Logo" className="biogashero-logo" />
            </div>

            <div className="biogashero-nav-commons">
              <div className="biogashero-nav-section-commonns">
              <h3 className="biogashero-nav-title-commons">GD Biogas for</h3>
                <ul className="biogashero-nav-list-commons">
                  <li>
                    <Link to="/business">Business opportunity</Link>
                  </li>
                  <li>
                    <Link to="/investors">Investors</Link>
                  </li>
                  <li>
                    <Link to="/technology">Technology</Link> 
                  </li>
                  <li>
                    <Link to="/catalogue">Catalogue</Link>
                  </li>
                  <li>
                    <Link to="/how-we-work">How Do We Work</Link>
                  </li>
                  <li>
                    <Link to="/download">Download Material</Link>
                  </li>
                  <li>
                    <Link to="/login">Log-in</Link>
                  </li>
                </ul>
              </div>

              <div className="biogashero-nav-section-commonns">
                <h3 className="biogashero-nav-title-commons">GD Planet for</h3>
                <ul className="biogashero-nav-list-commons">
                  <li>
                    <Link to="/industrial">Industrial Sector</Link>
                  </li>
                  <li>
                    <Link to="/agriculture">Agriculture</Link>
                  </li>
                  <li>
                    <Link to="/waste">Waste</Link>
                  </li>
                  <li>
                    <Link to="/3d-concrete">3D ConcreteHome</Link>
                  </li>
                  <li>
                    <Link to="/healthcare">Health Care</Link>
                  </li>
                  <li>
                    <Link to="/mart">GD Mart</Link>
                  </li> 
                  <li>
                    <Link to="/imbaw">GD ImBaw</Link>
                  </li>
                  <li>
                    <Link to="/tourism">GD Tourism</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="biogashero-hero-bottom-wrap">
          <div className="biogashero-title">NAPIER GRASS, Agricultural <br/> and animal waste based <br/>
BIO-CNG PLANT</div>

          <div className="biogashero-circle-elements">
            <img src={gif} alt="Animation" className="biogashero-circle-gifs" />
          </div>
        </div>
          {/* <div className="index-bar">
        <div className="index-arrow"></div>
        <span>Index</span>
        
      </div>
      <div className="index-gray"></div> */}
      </section>
  );
};
 
export default BioGasHero;
