// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; 

// Pages
import Home from "./Pages/Home/Home";
import Career from "./Pages/Career/Career";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Portfolio from "./Pages/Portfolio/Portfolio";
// import ServiceDetail from "./Pages/Services/ServiceDetail";

// Components
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import CursorFollower from "./Component/CursorFollower";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  return (
    <HelmetProvider> 
      <Router>
        <ScrollToTop />
        <Header />
        <CursorFollower />

        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* <Route path="/services/:id" element={<ServiceDetail />} /> */}
          </Routes>
        </div>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
