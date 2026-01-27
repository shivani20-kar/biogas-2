import React, { useEffect, useRef, useState } from "react";
import HomeMostPopular from "../Components/HomeMostPopular";
import HomeMostPopular2 from "../Components/HomeMostPopular2";
import HomeMostPopular3 from "../Components/HomeMostPopular3";
import HomeMostPopular4 from "../Components/HomeMostPopular4";
import HomeMostPopular5 from "../Components/HomeMostPopular5";
import HomeMostPopular6 from "../Components/HomeMostPopular6";

import "../Components/Css/VerticalMostPopular.css";

const VerticalMostPopular = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  // Optional: Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      
      // Calculate which section should be active
      const sectionIndex = Math.floor(scrollTop / windowHeight);
      setActiveSection(Math.min(sectionIndex, 5)); // Max 5 sections (0-5)
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optional: Add intersection observer for more precise detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = sectionsRef.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        threshold: [0.1, 0.5, 0.9],
        rootMargin: '0px 0px -50% 0px'
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="vertical-most-popular-stack" ref={containerRef}>
      {/* Section 1 */}
      <div 
        ref={el => sectionsRef.current[0] = el}
        className={activeSection === 0 ? 'active-section' : ''}
      >
        <HomeMostPopular isActive={activeSection === 0} />
      </div>
      
      {/* Section 2 */}
      <div 
        ref={el => sectionsRef.current[1] = el}
        className={activeSection === 1 ? 'active-section' : ''}
      >
        <HomeMostPopular2 isActive={activeSection === 1} />
      </div>
      
      {/* Section 3 */}
      <div 
        ref={el => sectionsRef.current[2] = el}
        className={activeSection === 2 ? 'active-section' : ''}
      >
        <HomeMostPopular3 isActive={activeSection === 2} />
      </div>
      
      {/* Section 4 */}
      <div 
        ref={el => sectionsRef.current[3] = el}
        className={activeSection === 3 ? 'active-section' : ''}
      >
        <HomeMostPopular4 isActive={activeSection === 3} />
      </div>
      
      {/* Section 5 */}
      <div 
        ref={el => sectionsRef.current[4] = el}
        className={activeSection === 4 ? 'active-section' : ''}
      >
        <HomeMostPopular5 isActive={activeSection === 4} />
      </div>
      
      {/* Section 6 */}
      <div 
        ref={el => sectionsRef.current[5] = el}
        className={activeSection === 5 ? 'active-section' : ''}
      >
        <HomeMostPopular6 isActive={activeSection === 5} />
      </div>
    </div>
  );
};

export default VerticalMostPopular;