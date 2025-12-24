import React from "react";
import "./CSS/Index2.css";

const HighEnergy = () => {
  return (
    <section className="energy-section">
      {/* Header */}
      <div className="energy-header">
        <div className="energy-arrow-shape">
         <svg className="arrow-svg" viewBox="0 0 120 180">
                    <polygon
                        points="0,0 84,0 120,90 84,180 0,180 36,90"
                        fill="#f2f2f2"
                        stroke="#e3262f"
                        strokeWidth="4"
                    />
                </svg>
        </div>

        <div className="header-text">
          <h1 className="outline-text">High energy</h1>
          <h3>Yield from green crops</h3>
        </div>
      </div>

      {/* Content */}
      <div className="energy-content">
        <div className="left-content">
          <p>
           <strong> Napier grass — </strong> also known as <strong> King Grass, Royal Grass, Sudanese
            Grass, or Perennial Elephant Grass — </strong>is widely cultivated across
            tropical and subtropical regions. Its fast growth, high biomass
            yield, and adaptability make it one of the most effective feedstocks
            for biogas and biomethane production.
          </p>

          <p>
            At<strong> GD Planet,</strong> we have conducted extensive batch tests using Napier
            grass from <strong>India, Brazil, Indonesia, Kenya,</strong> and the <strong>Philippines.</strong> Our
            studies show that while the specific variety of Napier grass matters
            more for agricultural productivity, the harvesting age plays a much
            greater role in optimizing biogas yield and methane concentration.
          </p>

          <p>
           The age and maturity of Napier grass play a crucial role in 
           determining its biogas potential. Very young Napier grass contains a 
           high level of moisture, which results in low biogas yield. On the other
            hand, overaged or fully mature grass has high lignin content, making
             it difficult to break down during the digestion process — also resulting in reduced gas production. For farmers, harvesting young 
             Napier grass may seem convenient because it is greener, juicier, and easier to sell, but this material mostly contains water and produces
              nearly half the biogas compared to older, optimally aged grass.
          </p>

         
        </div>

        <div className="right-content">
          <p>
          Once carbon dioxide is removed and the biogas is upgraded,
           the resulting gas becomes a renewable alternative to natural gas —
            known as biomethane. Depending on the region, it is also called
             Compressed Biogas<strong>(CBG) or Bio-Compressed Natural Gas (Bio-CNG).</strong> 
              In India,<strong>  CBG and Bio-CNG</strong>  are the most common terms, while
              <strong>  “biomethane”</strong>  is more widely used in Europe. All these terms refer to the same high-quality renewable fuel. </p>

          <h4>Pure CBG/Biomethane typically contains:</h4>
          <ul>
            <li>98–99% Methane (CH₄)</li>
            <li>1–2% Carbon Dioxide (CO₂)</li>
            <li>~0.2% Oxygen (O₂)</li>
            <li>~0.2% Nitrogen (N₂)</li>
            <li>0 ppm Sulphur, when advanced purification is applied</li>
          </ul>

          <p>This clean, sustainable fuel not only reduces greenhouse gas emissions but also supports energy independence, circular economy practices, and rural development through renewable energy generation.
          </p>
        </div>
         
      </div>
      <p className="sep-para">
           Between the early green stage and the late brown stage lies the ideal harvest window — when the grass is greenish-yellow to yellowish-green in color. At 
           this stage, the solid content ranges between 27% and 35%, which ensures the best balance of moisture, fiber, and fermentable material. The optimal
            harvesting age for Napier grass is typically 100 to 120 days. Harvesting within this period maximizes biogas production efficiency, feedstock quality, 
            and overall plant performance. However, it is important not to delay harvesting until the grass turns brown, as it loses fermentable sugars and becomes more 
            fibrous, reducing its biogas potential.
          </p>
    </section>
  );
};

export default HighEnergy;
