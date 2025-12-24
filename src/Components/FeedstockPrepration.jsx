import React from 'react';
import feedstockImage from './IMAGES/feedstock.jpg'; // Make sure the 
// path is correct
import "./Css/FeedstockPreparation.css";

const FeedstockPreparation = () => {
  return (
    <div className='feedstock-container'>
    <div className="feedstock">
      <div className="text">
        <h3>Feedstock Preparation</h3>
        <p>
          A young Napier grass gives little biogas because it has a lot of moisture. 
          And the old Napier grass gives also little because a lot of lignin. 
          For farmers of course it is feasible to sell the young green Napier grass 
          because it's juicy and they are selling water to the biogas plant owners. 
          The young 50-day Napier grass is cheap but it gives 2 times less biogas 
          than the older 100-day Napier grass.
        </p>
        <p>
          Between the very young green grass and the old brown straw lies the ideal 
          stage for harvesting—when the grass turns greenish-yellow. At this point, 
          the solid content ranges between 27–35%, compared to 18% in young grass 
          and 80% in old. The optimal harvesting age is around 100–120 days; avoid 
          waiting until the grass turns fully brown to ensure maximum biogas yield.
        </p>
        <p>
          Before feeding Napier grass into a biogas plant, it is recommended to 
          store it in silage, a practice beneficial for all types of biogas technologies.
        </p>
      </div>
      <div className="image">
        <img  className="napierimg" src={feedstockImage} alt="Napier Grass" />
      </div>
    </div>
    </div>
  );
};

export default FeedstockPreparation;
