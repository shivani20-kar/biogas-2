import React from 'react';
import './Css/Features.css'; 

const featuresData = [
  {
    title: "Air Removal",
    number: "1",
    description: `Fresh Napier grass contains air that can cause floating and 
                  clogging in reactors. Silaging compresses the grass, 
                  removing air and preventing operational hazards.`
  },
  {
    title: "Improved Biogas Yield",
    number: "2",
    description: `During silaging, mild fermentation by lactic acid bacteria 
                  boosts biogas yield by 5–10%. A minimum of 35 days of 
                  silaging is required.`
  },
  {
    title: "Steady Feed Supply",
    number: "3",
    description: `Silage ensures a constant feed source during rainy seasons 
                  when fresh harvesting isn’t possible, keeping reactors 
                  running smoothly.`
  }
];

const Features = () => {
  return (
    <section className="features">
      {featuresData.map((feature, index) => (
        <div key={index} className="feature-box">
          <h4>
            {feature.title} <span>{feature.number}</span>
          </h4>
          <hr />
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
