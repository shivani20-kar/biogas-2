import "../Components/Css/Home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../Components/IMAGES/Logowhite.png";
import mainbackground from "./Hero Section 2.png";
import gif from "../Components/IMAGES/maingif.gif";

const OverViewHero = () => {
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
        {/* LEFT CONTENT */}
        <div className="hero-text-content">
          <h1 className="aboutus-titleoverview">How Do We Work</h1>

          <p className="overviewsubtitle">
            GD Biogas offers a complete turnkey approach to biogas & advance
            biofuel plant construction from initial study to commissioning.
          </p>
        </div>

        {/* RIGHT ANIMATION */}
        <div className="circle-elements">
          <img src={gif} alt="How we work animation" className="circle-gifs" />
        </div>
      </div>
    </div>
  );
};

export default OverViewHero;
