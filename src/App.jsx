import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
// import Career from "./Pages/Career/Career";
// import ContactUs from "./Pages/ContactUs/ContactUs";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
