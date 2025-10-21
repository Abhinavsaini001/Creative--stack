// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; 

// Pages
import Home from "./Pages/Home/Home";
import Career from "./Pages/Career/Career";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Portfolio from "./Pages/Portfolio/Portfolio";

// Components
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import CursorFollower from "./Component/CursorFollower";

function App() {
  return (
    <HelmetProvider> 
      <Router>
        <Header />
        <CursorFollower />

        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
