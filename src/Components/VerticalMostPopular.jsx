import React from "react";
import HomeMostPopular from "../Components/HomeMostPopular";
import HomeMostPopular2 from "../Components/HomeMostPopular2";
import HomeMostPopular3 from "../Components/HomeMostPopular3";
import HomeMostPopular4 from "../Components/HomeMostPopular4";
import HomeMostPopular5 from "../Components/HomeMostPopular5";
import HomeMostPopular6 from "../Components/HomeMostPopular6";

import "../Components/Css/VerticalMostPopular.css";

const VerticalMostPopular = () => {
  return (
    <section className="vertical-most-popular-stack">
      <HomeMostPopular />
      <HomeMostPopular2 />
      <HomeMostPopular3 />
      <HomeMostPopular4 />
      <HomeMostPopular5 />
      <HomeMostPopular6 />
    </section>
  );
};

export default VerticalMostPopular;
