import React from "react";
import "./gallery.css";

import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpeg";
import img9 from "../../assets/img9.jpeg";
import img10 from "../../assets/img10.jpeg";
import img11 from "../../assets/img11.jpeg";
import img12 from "../../assets/img12.jpeg";
import img13 from "../../assets/img13.jpeg";
import img14 from "../../assets/img14.jpeg";



const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

function Gallery() {
  return (
    <div className="gallery-section">
      <h2 className="gallery-title animate-title">Memories from Our Villas</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Villa memory ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
