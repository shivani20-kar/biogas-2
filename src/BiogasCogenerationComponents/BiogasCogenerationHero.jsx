import "./BiogasCogenerationCss/BiogasCogenerationHero.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Components/IMAGES/Logowhite.png";
import mainbackground from "./Biogascogenerationbgimage.png";
import gif from "../Components/IMAGES/maingif.gif";

const BioGasCogenerationHero = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleTopArrowClick = () => {
    navigate("/biogas-cogeneration");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="biogascogenrationhero">
      <div className="biogascogenrationhero-gdmainbackground">
        <img src={mainbackground} alt="" />
      </div>

      <div className="biogascogenrationhero-content-overlayy">
        <div className="biogascogenrationhero-rows">
          <div className="biogascogenrationhero-logo-container">
            <img
              src={logo}
              alt="GDBioGas Logo"
              className="biogascogenrationhero-logo"
              onClick={handleLogoClick}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="biogascogenrationhero-nav-commons">
            <div className="biogascogenrationhero-nav-section-commonns">
              <h3 className="biogascogenrationhero-nav-title-commons">GD Biogas for</h3>
              <ul className="biogascogenrationhero-nav-list-commons">
                <li><Link to="/business">Business opportunity</Link></li>
                <li><Link to="/investors">Investors</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/catalogue">Catalogue</Link></li>
                <li><Link to="/how-we-work">How Do We Work</Link></li>
                <li><Link to="/download">Download Material</Link></li>
                <li><Link to="/login">Log-in</Link></li>
              </ul>
            </div>

            <div className="biogascogenrationhero-nav-section-commonns">
              <h3 className="biogascogenrationhero-nav-title-commons">GD Planet for</h3>
              <ul className="biogascogenrationhero-nav-list-commons">
                <li><Link to="/industrial">Industrial Sector</Link></li>
                <li><Link to="/agriculture">Agriculture</Link></li>
                <li><Link to="/waste">Waste</Link></li>
                <li><Link to="/3d-concrete">3D Concrete Home</Link></li>
                <li><Link to="/healthcare">Health Care</Link></li>
                <li><Link to="/mart">GD Mart</Link></li>
                <li><Link to="/imbaw">GD ImBaw</Link></li>
                <li><Link to="/tourism">GD Tourism</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="biogascogenrationhero-hero-bottom-wrap">
        <div className="biogascogenrationhero-title">
          Biogas Co-Generation
        </div>

        <div className="top-arrow" onClick={handleTopArrowClick}>
          {/* SVG unchanged */}
        </div>

        <div className="biogascogenrationhero-circle-elements">
          <img src={gif} alt="Animation" className="biogascogenrationhero-circle-gifs" />
        </div>
      </div>
    </section>
  );
};

export default BioGasCogenerationHero;
