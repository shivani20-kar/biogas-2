import "./CSS/BioGasHero.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../Components/IMAGES/Logowhite.png";
import mainbackground from "./Frame 2087328139.png";
import gif from "../Components/IMAGES/maingif.gif";

const BioGasHero = () => {
    const navigate = useNavigate(); // initialize navigate
  
    const handleLogoClick = () => {
      navigate("/"); // navigate to home route
    };

    const handleTopArrowClick = () => {
  navigate("/biogas"); // home page
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

  return (
    <section className="biogashero">
      <div className="biogasherogdmainbackground">
        <img src={mainbackground} alt="" />
      </div>

      <div className="biogashero-content-overlayy">
        <div className="biogashero-rows">
          <div className="biogashero-logo-container">
            <img src={logo} alt="GDBioGas Logo" className="biogashero-logo" onClick={handleLogoClick} // click triggers navigation
                style={{ cursor: "pointer" }} />
          </div>

          <div className="biogashero-nav-commons">
            <div className="biogashero-nav-section-commonns">
              <h3 className="biogashero-nav-title-commons">GD Biogas for</h3>
              <ul className="biogashero-nav-list-commons">
                <li><Link to="/business">Business opportunity</Link></li>
                <li><Link to="/investors">Investors</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/catalogue">Catalogue</Link></li>
                <li><Link to="/how-we-work">How Do We Work</Link></li>
                <li><Link to="/download">Download Material</Link></li>
                <li><Link to="/login">Log-in</Link></li>
              </ul>
            </div>

            <div className="biogashero-nav-section-commonns">
              <h3 className="biogashero-nav-title-commons">GD Planet for</h3>
              <ul className="biogashero-nav-list-commons">
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

      <div className="biogashero-hero-bottom-wrap">
        <div className="biogashero-title">
          NAPIER GRASS, Agricultural <br />
          and animal waste based <br />
          BIO-CNG PLANT
        </div>
<div className="top-arrow" onClick={handleTopArrowClick}>
  <svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83">
    <path
      d="M41.25 38.4656L31.4531 48.2625C30.6969 49.0187 29.7516 49.3969 28.6172 49.3969C27.4828 49.3969 26.5031 49.0187 25.6781 48.2625C24.8531 47.4375 24.4406 46.4578 24.4406 45.3234C24.4406 44.1891 24.8531 43.2094 25.6781 42.3844L38.3625 29.7C39.1875 28.875 40.15 28.4625 41.25 28.4625C42.35 28.4625 43.3125 28.875 44.1375 29.7L56.925 42.4875C57.75 43.3125 58.1453 44.275 58.1109 45.375C58.0766 46.475 57.6469 47.4375 56.8219 48.2625C55.9969 49.0187 55.0344 49.4141 53.9344 49.4484C52.8344 49.4828 51.8719 49.0875 51.0469 48.2625L41.25 38.4656ZM41.25 0C35.5438 0 30.1812 1.08282 25.1625 3.24844C20.1437 5.41406 15.7781 8.35313 12.0656 12.0656C8.35312 15.7781 5.41406 20.1437 3.24844 25.1625C1.08281 30.1813 0 35.5438 0 41.25C0 46.9562 1.08281 52.3188 3.24844 57.3375C5.41406 62.3563 8.35312 66.7219 12.0656 70.4344C15.7781 74.1469 20.1437 77.0859 25.1625 79.2516C30.1812 81.4172 35.5438 82.5 41.25 82.5C46.9562 82.5 52.3187 81.4172 57.3375 79.2516C62.3563 77.0859 66.7219 74.1469 70.4344 70.4344C74.1469 66.7219 77.0859 62.3563 79.2516 57.3375C81.4172 52.3188 82.5 46.9562 82.5 41.25C82.5 35.5438 81.4172 30.1813 79.2516 25.1625C77.0859 20.1437 74.1469 15.7781 70.4344 12.0656C66.7219 8.35313 62.3563 5.41406 57.3375 3.24844C52.3187 1.08282 46.9562 0 41.25 0Z"
      fill="#000"
    />
  </svg>
</div>

        <div className="biogashero-circle-elements">
          <img src={gif} alt="Animation" className="biogashero-circle-gifs" />
        </div>
      </div>
    </section>
  );
};

export default BioGasHero;
