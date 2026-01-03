import { useEffect, useRef, useState } from "react";
import "../BusinessOpportunityComponents/BusinessOpportunityCss/CareerForm.css";

export default function CareerForm() {
     const sectionRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setShowPopup(true);
  };

 useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // run once
      }
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -200px 0px", // 🔥 IMPORTANT
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);


  return (
    <>
     <section className="contact-section-container-career">
  <div
    ref={sectionRef}
    className="contact-top-text-career animateone-on-scroll"
  >

  <p className="green-textvendor-career">
    Don't just deal. Build. Become a Growth Partner..
  </p>
</div>


        <section className="contactform-wrapper-career">
          
          {/* Red Bars Left */}
          <div className="red-bars-career red-bars-left-career">
            <div className="red-linevendor-career"></div>
            <div className="red-linevendor-career"></div>
          </div>

          {/* Outer Frame */}
          <div className="form-outer-frame-career">
            
            {/* Inner White Frame */}
            <div className="form-inner-frame-career">

              {/* Upload style form */}
              <form className="upload-style-form-career" onSubmit={handleSubmit}>
                
                <div className="upload-header-career">
                  Upload Here
                </div>

                <div className="upload-box-career">
                  <p>Click to browse or<br />drag and drop your files</p>
                  <input type="file" className="hidden-file-input-career" />
                </div>

                {/* Original animated button */}
                <button type="submit" className="submit-btn-career">
                  <span className="career-text">Submit</span><span class="icon-career"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 15 15" fill="none">
  <path d="M12.7483 3.51907L1.76037 14.507C1.55453 14.7128 1.31275 14.8156 1.03503 14.8155C0.757307 14.8156 0.515528 14.7128 0.309694 14.507C0.103859 14.3011 0.00102257 14.0593 0.00118376 13.7816C0.00102257 13.5039 0.103859 13.2621 0.309694 13.0563L11.2976 2.0684L4.92961 2.0684C4.64189 2.06824 4.40253 1.97088 4.21152 1.77633C4.02068 1.58161 3.92026 1.33919 3.91027 1.04906C3.91043 0.74909 4.00529 0.499331 4.19484 0.299783C4.38456 0.100074 4.62948 0.000220137 4.92961 0.000220137L13.5925 0.000220252C13.7737 0.000220252 13.9331 0.0318939 14.0705 0.09524C14.2082 0.158425 14.3353 0.248286 14.4518 0.364823C14.5684 0.481361 14.6582 0.608456 14.7214 0.746109C14.7848 0.8836 14.8164 1.04293 14.8164 1.22411L14.8164 9.88705C14.8163 10.1748 14.7165 10.4165 14.5171 10.6124C14.3174 10.8082 14.0676 10.9062 13.7676 10.9064C13.4775 10.8964 13.235 10.799 13.0403 10.6143C12.8456 10.4296 12.7483 10.1872 12.7483 9.88705L12.7483 3.51907Z" fill="#E12D36"/>
</svg></span> </button>

              </form>

            </div>
          </div>

          {/* Red Bars Right */}
          <div className="red-bars-career red-bars-right-career">
            <div className="red-linevendor-career"></div>
            <div className="red-linevendor-career"></div>
          </div>

        </section>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="popup-overlay-career">
          <div className="popup-box-career">
            <button
              className="popup-close-career"
              onClick={() => setShowPopup(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48" fill="none">
  <path d="M24.001 26.1065L13.855 36.253C13.578 36.5297 13.2298 36.6714 12.8105 36.678C12.3915 36.6844 12.037 36.5427 11.747 36.253C11.4573 35.963 11.3125 35.6117 11.3125 35.199C11.3125 34.7864 11.4573 34.435 11.747 34.145L21.8935 23.999L11.747 13.853C11.4703 13.576 11.3287 13.2279 11.322 12.8085C11.3157 12.3895 11.4573 12.035 11.747 11.745C12.037 11.4554 12.3883 11.3105 12.801 11.3105C13.2137 11.3105 13.565 11.4554 13.855 11.745L24.001 21.8915L34.147 11.745C34.424 11.4684 34.7722 11.3267 35.1915 11.32C35.6105 11.3137 35.965 11.4554 36.255 11.745C36.5447 12.035 36.6895 12.3864 36.6895 12.799C36.6895 13.2117 36.5447 13.563 36.255 13.853L26.1085 23.999L36.255 34.145C36.5317 34.422 36.6733 34.7702 36.68 35.1895C36.6863 35.6085 36.5447 35.963 36.255 36.253C35.965 36.5427 35.6137 36.6875 35.201 36.6875C34.7883 36.6875 34.437 36.5427 34.147 36.253L24.001 26.1065Z" fill="black"/>
</svg>
            </button>

            <h1 className="popup-title-career">Thank You..!</h1>
            <p className="popup-text-career">
              For Connecting<br/>
              Our IT Core<span className="red-x-career">X</span> Team as soon as
              <br />
              Contact With You 
            </p>

            <button
              className="popup-done-career"
              onClick={() => setShowPopup(false)}
            >
            <span className="text-done"> Done </span> <span class="icon-done"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 15 15" fill="none">
  <path d="M12.7483 3.51907L1.76037 14.507C1.55453 14.7128 1.31275 14.8156 1.03503 14.8155C0.757307 14.8156 0.515528 14.7128 0.309694 14.507C0.103859 14.3011 0.00102257 14.0593 0.00118376 13.7816C0.00102257 13.5039 0.103859 13.2621 0.309694 13.0563L11.2976 2.0684L4.92961 2.0684C4.64189 2.06824 4.40253 1.97088 4.21152 1.77633C4.02068 1.58161 3.92026 1.33919 3.91027 1.04906C3.91043 0.74909 4.00529 0.499331 4.19484 0.299783C4.38456 0.100074 4.62948 0.000220137 4.92961 0.000220137L13.5925 0.000220252C13.7737 0.000220252 13.9331 0.0318939 14.0705 0.09524C14.2082 0.158425 14.3353 0.248286 14.4518 0.364823C14.5684 0.481361 14.6582 0.608456 14.7214 0.746109C14.7848 0.8836 14.8164 1.04293 14.8164 1.22411L14.8164 9.88705C14.8163 10.1748 14.7165 10.4165 14.5171 10.6124C14.3174 10.8082 14.0676 10.9062 13.7676 10.9064C13.4775 10.8964 13.235 10.799 13.0403 10.6143C12.8456 10.4296 12.7483 10.1872 12.7483 9.88705L12.7483 3.51907Z" fill="#E12D36"/>
</svg></span>
            </button>

          </div>
        </div>
      )}
    </>
  );
}
