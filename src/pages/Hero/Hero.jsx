import "./hero.css";
import image1 from "../../assets/img1.jpeg";
import image2 from "../../assets/img2.jpeg";
import image3 from "../../assets/img3.jpeg";
import image4 from "../../assets/img4.jpeg";
import image5 from "../../assets/img5.jpeg";
import image6 from "../../assets/img6.jpeg";
import image7 from "../../assets/img7.jpeg";
import image8 from "../../assets/img8.jpeg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="slider">
          <div className="slides">
            <img src={image1} alt="Slide 1" />
            <img src={image2} alt="Slide 2" />
            <img src={image3} alt="Slide 3" />
            <img src={image4} alt="Slide 4" />
            <img src={image5} alt="Slide 5" />
            <img src={image6} alt="Slide 6" />
            <img src={image7} alt="Slide 7" />
            <img src={image8} alt="Slide 8" />
            <img src={image4} alt="Slide 4" />
          </div>
        </div>
        <div className="overlay">
          <h1>Book Your Dream Villa Today</h1>
        </div>
        
      </div>
      <h2 className="reviews-heading">What Our Clients Said About Us</h2>
        <div className="review-section">
          {[
            {
              name: "Ankit Sharma",
              review:
                "The stay was absolutely relaxing. Loved the aesthetics and the beautiful sunset view!",
              stars: 5,
            },
            {
              name: "Priya Menon",
              review:
                "The swimming pool was very clean and well maintained. Perfect for a weekend escape.",
              stars: 4,
            },
            {
              name: "Rohan Patel",
              review:
                "Spacious rooms and great service. Would definitely come again.",
              stars: 5,
            },
            {
              name: "Manish Chand",
              review:
                "Cleanliness was top-notch. The whole vibe of the villa is calming.",
              stars: 4,
            },
            {
              name: "Prakash Chand",
              review:
                "Aesthetic interiors and peaceful surroundings. Highly recommended!",
              stars: 5,
            },
          ].map(({ name, review, stars }, index) => (
            <div className="review-card" key={index}>
              <h3>{name}</h3>
              <p>{review}</p>
              <div className="stars">
                {"★".repeat(stars)}
                {"☆".repeat(5 - stars)}
              </div>
            </div>
          ))}
        </div>
    </>
  );
};

export default Hero;
