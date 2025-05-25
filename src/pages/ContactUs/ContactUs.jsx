import React from "react";
import "./contactus.css";

import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";

function ContactUs() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title animate-fade">Contact Us</h2>
      <p className="contact-subtitle animate-fade delay-1">Get in touch to book your stay at Nandish Homes.</p>

      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="email" placeholder="Email ID" required />
          <button type="submit">Submit</button>
        </form>

        <div className="contact-info">
          <h3>Reach Us At</h3>
          <p>
            Address: RS No 181/3A3, R Farm Lands, Pattanur Village, Vanur Taluk, Tamil Nadu 605111
          </p>
          <p>Phone: 91-9003918651</p>
        </div>
      </div>

      <div className="contact-gallery">
        {[img1, img2, img3].map((img, index) => (
          <div className={`gallery-image animate-img delay-${index}`} key={index}>
            <img src={img} alt={`Villa ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactUs;
