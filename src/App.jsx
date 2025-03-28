import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import VillaCard from "./components/VillaCard";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/villas" element={<VillaCard />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;
