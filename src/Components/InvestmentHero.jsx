import "./Css/Home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./IMAGES/Logowhite.png";
import mainbackground from "../Components/Hero Section 5.png";
import gif from "../Components/IMAGES/maingif.gif";

const InvestmentHero = () => {
   const navigate = useNavigate(); // initialize navigate

  const handleLogoClick = () => {
    navigate("/"); // navigate to home route
  };
  return (
   
      <div className="heror">
        <div className="gdmainbackground">
          <img src={mainbackground} alt="" />
        </div>

        <div className="hero-content-overlayy"> 
          <div className="header-rows">
            <div className="logo-container">
              {/* <img src={logo} alt="GDBioGas Logo" className="logo" /> */}
              <div className="logo-anim-wrap">
              <img
                src={logo}
                alt="GDBioGas Logo"
                className="logo"
                 onClick={handleLogoClick} // click triggers navigation
                style={{ cursor: "pointer" }}
              />
            </div>
            </div>

            <div className="nav-commons">
              <div className="nav-section-commonns">
                <h3 className="nav-title-commons">GD Biogas for</h3>
                <ul className="nav-list-commons">
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

              <div className="nav-section-commonns">
                <h3 className="nav-title-commons">GD Planet for</h3>
                <ul className="nav-list-commons">
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
 
        <div className="hero-bottom-wrap">
          <div className="aboutus-title">Invest in the<br/>Future of Energy</div>
          <div className="InveHero-title">Secure<br/> <span>2X</span><br/>Returns</div>

          <div className="circle-elements">
            <img src={gif} alt="Animation" className="circle-gifs" />
          </div>
        </div>
      </div>
  );
};
 
export default InvestmentHero;
