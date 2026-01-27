import React from "react";
import "../Components/Css/HomeTestimonialsSection.css";
import TestimonialImg from "../Components/IMAGES/Testimonials.png";
import TestimonialImg2 from "../Components/IMAGES/Testimonials2.png";
import TestimonialImg3 from "../Components/IMAGES/Testimonials3.png";
import TestimonialImg4 from "../Components/IMAGES/Testimonials4.png";

/* STAR SVG */
const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="10"
    viewBox="0 0 11 10"
    fill="none"
  >
    <path
      d="M10.4263 3.92236L6.92969 3.58667L5.49829 0.667969L4.0669 3.58667L0.570312 3.92236L3.182 6.06226L2.45288 9.18847L5.49829 7.5918L8.54371 9.18847L7.81458 6.06226L10.4263 3.92236Z"
      fill="#FFB021"
    />
  </svg>
);

const HomeTestimonialsSection = () => {
  return (
    <section className="home-testimonials-section">
      <div className="home-testimonials-left">
        <div className="home-testimonials-label">
          <span className="home-testimonials-quote">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.25 3.5H2.5C2.23478 3.5 1.98043 3.60536 1.79289 3.79289C1.60536 3.98043 1.5 4.23478 1.5 4.5V8.5C1.5 8.76522 1.60536 9.01957 1.79289 9.20711C1.98043 9.39464 2.23478 9.5 2.5 9.5H6.25V10C6.25 10.5304 6.03929 11.0391 5.66421 11.4142C5.28914 11.7893 4.78043 12 4.25 12C4.11739 12 3.99021 12.0527 3.89645 12.1464C3.80268 12.2402 3.75 12.3674 3.75 12.5C3.75 12.6326 3.80268 12.7598 3.89645 12.8536C3.99021 12.9473 4.11739 13 4.25 13C5.0454 12.9992 5.80798 12.6828 6.37041 12.1204C6.93284 11.558 7.24917 10.7954 7.25 10V4.5C7.25 4.23478 7.14464 3.98043 6.95711 3.79289C6.76957 3.60536 6.51522 3.5 6.25 3.5ZM13.5 3.5H9.75C9.48478 3.5 9.23043 3.60536 9.04289 3.79289C8.85536 3.98043 8.75 4.23478 8.75 4.5V8.5C8.75 8.76522 8.85536 9.01957 9.04289 9.20711C9.23043 9.39464 9.48478 9.5 9.75 9.5H13.5V10C13.5 10.5304 13.2893 11.0391 12.9142 11.4142C12.5391 11.7893 12.0304 12 11.5 12C11.3674 12 11.2402 12.0527 11.1464 12.1464C11.0527 12.2402 11 12.3674 11 12.5C11 12.6326 11.0527 12.7598 11.1464 12.8536C11.2402 12.9473 11.3674 13 11.5 13C12.2954 12.9992 13.058 12.6828 13.6204 12.1204C14.1828 11.558 14.4992 10.7954 14.5 10V4.5C14.5 4.23478 14.3946 3.98043 14.2071 3.79289C14.0196 3.60536 13.7652 3.5 13.5 3.5Z"
                fill="#0040C1"
              />
            </svg>
          </span>
          <span className="home-testimonials-text">Testimonials</span>
        </div>

        <h1 className="home-testimonials-title">Our Users</h1>
        <h2 className="home-testimonials-subtitle">Talk About Us</h2>

        <div className="home-testimonials-rating">
          <div className="home-testimonials-avatar">
            <img src={TestimonialImg} alt="avatar" />
            <img src={TestimonialImg2} alt="avatar" />
            <img src={TestimonialImg3} alt="avatar" />
          </div>

          <div className="home-testimonials-rating-text">
            <p className="home-rating-score">
              4.8/5{" "}
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </p>
            <p className="home-rating-review">Based on 14K+ reviews</p>
          </div>
        </div>
      </div>

      <div className="home-testimonials-right">
        <div className="home-testimonial-card">
          <div className="home-testimonial-img">
            <img src={TestimonialImg4} alt="user" />
          </div>

          <p className="home-testimonial-name">
            Shrimant Chh. Udayanraje Bhosale
          </p>
          <p className="home-testimonial-role">Member of Parliament</p>

          <div className="home-testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} />
            ))}
          </div>

          <p className="home-testimonial-text">
            "I am proud that an environmentally sustainable project has begun
            from our Swarajya. Best wishes for the One District One Trillion
            Dollar Economy vision."
          </p>
        </div>

        <div className="home-testimonial-card">
          <div className="home-testimonial-img">
            <img src={TestimonialImg4} alt="user" />
          </div>

          <p className="home-testimonial-name">
            Shrimant Chh. Shivendraraje Bhosale
          </p>
          <p className="home-testimonial-role">Member of Parliament</p>

          <div className="home-testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} />
            ))}
          </div>

          <p className="home-testimonial-text">
            GD Planet demonstrated exceptional professionalism, delivering
            reliable solutions with clear communication and measurable results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialsSection;
