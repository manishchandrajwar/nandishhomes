import "../styles/hero.css";
import image1 from "../assets/img1.jpeg";
import image2 from "../assets/img2.jpeg";
import image3 from "../assets/img3.jpeg";
import image4 from "../assets/img4.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="slider">
        <div className="slides">
          <img src={image1} alt="Slide 1" />
          <img src={image2} alt="Slide 2" />
          <img src={image3} alt="Slide 3" />
          <img src={image4} alt="Slide 4" />
        </div>
      </div>
      <div className="overlay">
        <h1>Book Your Dream Villa</h1>
      </div>
    </div>
  );
};

export default Hero;
