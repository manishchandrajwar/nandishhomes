import "../styles/villacard.css";
import villa1 from "../assets/img1.jpeg";
import villa2 from "../assets/img2.jpeg";
import villa3 from "../assets/img3.jpeg";
import villa4 from "../assets/img4.jpeg";
import villa5 from "../assets/img5.jpeg";
import villa6 from "../assets/img6.jpeg";
import villa7 from "../assets/img7.jpeg";
import villa8 from "../assets/img8.jpeg";
import villa9 from "../assets/img9.jpeg";
import villa10 from "../assets/img10.jpeg";


const VillaCard = () => {
  return (
    <div className="page-container"> {/* Ensures proper centering */}
      <h1 className="page-title">Our Spacious Villa</h1>
      <div className="villa-container">
        <div className="villa-grid">
          <img src={villa1} alt="Villa 1" />
          <img src={villa2} alt="Villa 2" />
          <img src={villa3} alt="Villa 3" />
          <img src={villa4} alt="Villa 4" />
          <img src={villa5} alt="Villa 5" />
          <img src={villa6} alt="Villa 6" />
          <img src={villa7} alt="Villa 7" />
          <img src={villa8} alt="Villa 8" />
          <img src={villa9} alt="Villa 9" />
          <img src={villa10} alt="Villa 10" />
          <img src={villa1} alt="Villa 1" />
          <img src={villa2} alt="Villa 2" />
          <img src={villa1} alt="Villa 1" />
          <img src={villa2} alt="Villa 2" />
          <img src={villa3} alt="Villa 3" />
          <img src={villa4} alt="Villa 4" />
          <img src={villa5} alt="Villa 5" />
          <img src={villa6} alt="Villa 6" />
          <img src={villa7} alt="Villa 7" />
          <img src={villa8} alt="Villa 8" />
          <img src={villa9} alt="Villa 9" />
          <img src={villa10} alt="Villa 10" />
          <img src={villa1} alt="Villa 1" />
          <img src={villa2} alt="Villa 2" />
        </div>
      </div>
    </div>
  );
};

export default VillaCard;
