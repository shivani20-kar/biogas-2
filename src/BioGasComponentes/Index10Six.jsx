import React from "react";
import "./CSS/Index10Six.css";
import windowImg from "./Frame 2087327530 (1).png"; // replace with your image path

const WindowSpotlight = () => {
  return (
    <section className="window-wrapper">
      <div className="window-left">
        <div className="window-number">
            <h1>06</h1>

        <h2 className="window-title">
          Window with Spotlight (SG-01, SG-02)
        </h2>
        </div>

        <h4 className="window-subtitle">
          Safe and Clear Process Visibility Inside the Fermenter
        </h4>

        <p>
          The <strong>GD Planet Window with Spotlight (SG-01 & SG-02)</strong> units
          are precision-engineered components that provide<strong> direct visual access</strong> to
          the fermentation process inside the reactor. These inspection windows
          are essential for monitoring the conditions, mixing behavior, and
          consistency of substrates during operation — without the need to
          interrupt or open the system.
        </p>

        <h5>Designed for Safety and Clarity</h5>
        <p>
          Each inspection window is manufactured using
          <strong> high-strength, explosion-proof materials</strong> to ensure
          complete safety under anaerobic pressurized conditions. Integrated
         <strong> spotlights </strong>allow clear visibility even in low-light environments within
          the fermenter. For additional safety, the lighting system includes an
          <strong> automatic power disconnection feature</strong> to prevent
          ignition risks in gas-rich zones.
        </p>

        <h5>Self-Cleaning and Maintenance-Friendly</h5>
        <p>
          The inspection windows are equipped with a
          <strong> built-in cleaning and washing system</strong>, ensuring continuous
          clarity of the viewing surface. This self-cleaning mechanism prevents
          buildup of organic residues and condensation, allowing operators to
          conduct <strong>accurate visual inspections</strong> at all times.
        </p>

        <h5>Key Features</h5>
        <ul>
          <li><strong>Explosion-proof spotlight system</strong> with automatic safety disconnection</li>
          <li><strong>Durable, pressure-resistant window design </strong>for long-term reliability</li>
          <li><strong>Integrated washing system </strong>for clear, maintenance-free observation</li>
          <li><strong>Real-time visual</strong> monitoring of fermentation and mixing processes</li>
          <li><strong>Designed for anaerobic reactor environments</strong></li>
        </ul>

        <div className="window-spec">
          <h2>Specifications for the Napier grass 33% total solid</h2>
          <p>Inspection windows Ø300 Spotlight</p>
          <p>VISULUX LU50 · G-H 230V, 50W, IP65</p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="window-right">
        <div className="image-boxx">
          <img src={windowImg} alt="Inspection Window" />
        </div>
      </div>
    </section>
  );
};

export default WindowSpotlight;
