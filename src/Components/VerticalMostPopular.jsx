// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import HomeMostPopular1 from "./HomeMostPopular";
// import HomeMostPopular2 from "./HomeMostPopular2";
// import HomeMostPopular3 from "./HomeMostPopular3";
// import HomeMostPopular4 from "./HomeMostPopular4";
// import HomeMostPopular5 from "./HomeMostPopular5";
// import HomeMostPopular6 from "./HomeMostPopular6";

// import "./Css/VerticalMostPopular.css";

// gsap.registerPlugin(ScrollTrigger);

// const VerticalMostPopular = () => {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     sectionsRef.current.forEach((section, index) => {
//       if (index === 0) return;

//       gsap.fromTo(
//         section,
//         {
//           y: "100%",
//         },
//         {
//           y: "0%",

//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: section,
//             start: "top bottom",
//             end: "top top",
//             scrub: true,
//           },
//         },
//       );
//     });
//   }, []);

//   return (
//     <section className="vertical-wrapper">
//       {[
//         <HomeMostPopular1 />,
//         <HomeMostPopular2 />,
//         <HomeMostPopular3 />,
//         <HomeMostPopular4 />,
//         <HomeMostPopular5 />,
//         <HomeMostPopular6 />,
//       ].map((Component, index) => (
//         <div
//           key={index}
//           className="stack-section"
//           ref={(el) => (sectionsRef.current[index] = el)}
//           style={{ zIndex: index + 1 }}
//         >
//           {Component}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default VerticalMostPopular;
