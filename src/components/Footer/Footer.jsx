import "./footer.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
      </div>
      <div className="footer-contact">
        <p>
          Address: RS No 181/3A3, R Farm Lands, Pattanur Village, Vanur Taluk, Tamil Nadu 605111
        </p>
        <p>Phone: 09628298651</p>
      </div>
    </footer>
  );
};

export default Footer;
