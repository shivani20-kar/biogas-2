import "../BusinessOpportunityComponents/BusinessOpportunityCss/HeroSection.css";
import { Link } from "react-router-dom";
import logo from "../Components/IMAGES/Logowhite.png";
import gif from "../Components/IMAGES/maingif.gif";
import heroVideo from "../Components/IMAGES/heroVideo.mp4";

const HeroSection = () => {
  return (
      <div className="hero">
        {/* Video Background */}
        <div className="sectionheromainbackground">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        <div className="hero-content-overlay">
          <div className="header-row">
            <div className="logo-containerhero">
              <img src={logo} alt="GDBioGas Logo" className="logohero" />
            </div>

            <div className="nav-common">
              <div className="nav-section-common">
                <h3 className="nav-title-common">GD Biogas for</h3>
                <ul className="nav-list-common">
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

              <div className="nav-section-common">
                <h3 className="nav-title-common">GD Planet for</h3>
                <ul className="nav-list-common">
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

        <div className="hero-bottom-wrapsectionhero">
          <div className="sectionhero-title">Hero Section</div>

          <div className="circle-element">
            <img src={gif} alt="Animation" className="circle-gifhero" />
          </div>
        </div>
      </div>
   
  );
};

export default HeroSection;
