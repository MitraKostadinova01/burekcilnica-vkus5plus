import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navigation/Nav";
import Menu from "./components/Menu/Menu";
import About from "./components/About/Aboutus";
import Footer from "./components/Footer/Footer";
import Map from "./components/Map/Map";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Map />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
