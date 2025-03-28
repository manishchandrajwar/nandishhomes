import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Nandish Homes</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/villas">Villas</Link>
        <Link to="/contact">Contact</Link>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
