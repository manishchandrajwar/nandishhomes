import "../styles/villacard.css";
import villa1 from "../assets/img1.jpeg";
import villa2 from "../assets/img2.jpeg";
import villa3 from "../assets/img3.jpeg";
import villa4 from "../assets/img4.jpeg";

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
          <img src={villa1} alt="Villa 1" />
          <img src={villa2} alt="Villa 2" />
          <img src={villa3} alt="Villa 3" />
          <img src={villa4} alt="Villa 4" />
          <img src={villa1} alt="Villa 1" />
          <img src={villa2} alt="Villa 2" />
          <img src={villa3} alt="Villa 3" />
          <img src={villa4} alt="Villa 4" />
        </div>
      </div>
    </div>
  );
};

export default VillaCard;
