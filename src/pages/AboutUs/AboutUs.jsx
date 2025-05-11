import React, { useState, useEffect } from "react";
import "./aboutus.css";

// Image Imports
import villa1 from "../../assets/villa/img1.jpeg";
import villa2 from "../../assets/villa/img2.jpeg";
import villa3 from "../../assets/villa/img3.jpeg";
import villa4 from "../../assets/villa/img4.jpeg";

import pool1 from "../../assets/poolroom/img1.jpeg";
import pool2 from "../../assets/poolroom/img2.jpeg";
import pool3 from "../../assets/poolroom/img3.jpeg";
import pool4 from "../../assets/poolroom/img4.jpeg";

import nonpool1 from "../../assets/nonpoolroom/img1.jpeg";
import nonpool2 from "../../assets/nonpoolroom/img2.jpeg";
import nonpool3 from "../../assets/nonpoolroom/img3.jpeg";
import nonpool4 from "../../assets/nonpoolroom/img4.jpeg";

import lawn1 from "../../assets/partylawn/img1.jpeg";
import lawn2 from "../../assets/partylawn/img2.jpeg";
import lawn3 from "../../assets/partylawn/img3.jpeg";
import lawn4 from "../../assets/partylawn/img4.jpeg";

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const imagesPerSection = [
    [villa1, villa2, villa3, villa4],
    [pool1, pool2, pool3, pool4],
    [nonpool1, nonpool2, nonpool3, nonpool4],
    [lawn1, lawn2, lawn3, lawn4],
  ];

  // Image Transition logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Check if the About Us section is visible on scroll
  const checkVisibility = () => {
    const section = document.getElementById("about");
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);

  return (
    <section
      id="about"
  className={`about-section ${isVisible ? "fade-in-up" : ""}`}
    >
      <h2>About Nandish Homes</h2>
      <p>
        Welcome to <strong>Nandish Homes</strong> – Your exclusive, luxurious
        homestay destination in the heart of Pondicherry. We offer an array of
        stays to suit every need – from private villas with swimming pools to
        cozy rooms with private pools. Our properties are designed to provide
        you with the ultimate comfort and tranquility.
      </p>

      <div className="feature-section">
        {[
          {
            title: "Full Villa Stay",
            description:
              "Our full villa option offers you the entire space, including a private swimming pool and beautiful views. The villa is ideal for family get-togethers, friends’ retreats, or even a quiet getaway.",
            images: imagesPerSection[0],
          },
          {
            title: "Private Pool Room",
            description:
              "Our private pool rooms offer the perfect blend of privacy and luxury. Each room is equipped with its own in-room swimming pool, allowing you to unwind in style.",
            images: imagesPerSection[1],
          },
          {
            title: "Room Without Pool",
            description:
              "Enjoy the comfort of our well-furnished rooms without a pool, perfect for solo travelers or couples looking for a budget-friendly option in a serene environment.",
            images: imagesPerSection[2],
          },
          {
            title: "Villa with Party Lawn",
            description:
              "Host unforgettable events with our villa’s expansive party lawn. Whether it’s a birthday, wedding, or corporate event, our property is the ideal venue.",
            images: imagesPerSection[3],
          },
        ].map(({ title, description, images }, index) => (
          <div key={index} className="feature-card">
            <h3>{title}</h3>
            <div className="image-slider">
              <div className="image-container">
                <img
                  src={images[currentImageIndex]}
                  alt={title}
                  className="feature-image"
                />
              </div>
            </div>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
