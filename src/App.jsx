import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../public/components/About/About";
import Collections from "../public/components/Collections/Collections";
import Gifts from "../public/components/Gifts/Gifts";
import Home from "../public/components/Home/Home";
import Jewellery from "../public/components/JEWELLERY/Jewllery";
import StoreLocatore from "../public/components/StoreLocatore/StoreLocatore";
import Notfound from "../public/components/Notfound/Notfound";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="container nav-container">
            <div className="nav-links">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/Jewllery" className="nav-link">
                Jewellery
              </Link>
              <Link to="/Collections" className="nav-link">
                Collections
              </Link>
              <Link to="/Gifts" className="nav-link">
                Gifts
              </Link>
              <Link to="/About" className="nav-link">
                About
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jewllery" element={<Jewellery />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/store-locator" element={<StoreLocatore />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>

      <footer>@2025 All rights are reserved</footer>
    </Router>
  );
}

export default App;
