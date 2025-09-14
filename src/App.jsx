// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
//import Career from "./Pages/Career/Career";
import ContactUs from "./Pages/ContactUs/ContactUs";

// Components
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      {/* Header */}
      <Header />

      {/* Main Content with padding (fix navbar overlap) */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/career" element={<Career />} /> */}
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
