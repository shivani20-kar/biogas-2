import React from 'react';
import "./Css/ContentNapier.css"
import Gletter from "./IMAGES/G (1).png";
import Dletter from "./IMAGES/D.png";

const ContentNapier = () => {
  return (
    <section className="content">
      {/* <div className='letterimg'>
        <img src={Gletter}/>
         <img src={Dletter}/>

      </div> */}
      <div className="para1">
        <h2>
          High Yield from Green <br /> Mass
        </h2>
        <p>
          Napier grass, also known as King Grass, Royal Grass, Sudanese Grass,
          or Elephant Grass, is widely grown in tropical and subtropical
          regions. Our batch tests conducted on samples from India, Brazil,
          Indonesia, Kenya, and the Philippines showed that while the variety
          of Napier grass matters more for agriculture, the harvesting age
          plays a far more crucial role in biogas production.
        </p>
      </div>

      <div className="para2">
        <p>
          After CO₂ removal or biogas upgrading, the resulting gas becomes
          equivalent to natural gas and is known as biomethane, compressed
          biogas (CBG), or bio-compressed natural gas (Bio-CNG). While ‘CBG’
          and ‘Bio-CNG’ are common terms in India, ‘biomethane’ is more widely
          used in Europe. This purified gas typically contains 98–99% methane,
          1–2% carbon dioxide, around 0.2% oxygen and nitrogen, and 0 ppm
          sulfur when advanced multi-stage purification is applied.
        </p>
      </div>
    </section>
  );
};

export default ContentNapier;
