// import React from "react";
// import { motion, useViewportScroll, useTransform } from "framer-motion";
// import "./Css/PageWrapper.css";

// const PageWrapper = ({ children }) => {
//   const { scrollY } = useViewportScroll();

//   // Animate clipPath based on scroll position
//   const clipPath = useTransform(
//     scrollY,
//     [0, 300], // adjust 300 to how fast you want expansion
//     [
//       "polygon(25% 0%, 75% 0%, 75% 50%, 50% 100%, 25% 50%)", // initial hexagon
//       "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // full page
//     ]
//   );

//   return (
//     <motion.div
//       className="page-shape"
//       style={{
//         clipPath,
//         width: "100%",
//         minHeight: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default PageWrapper;
