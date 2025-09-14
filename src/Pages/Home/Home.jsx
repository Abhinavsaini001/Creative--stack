import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Services from "./Services";
import Portfolio from "./Portfolio";
import WhyClientsTrust from "./WhyClientsTrust";
import ContactSection from "./ContactSection";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <Services />
      <Portfolio />
      <WhyClientsTrust />
      <Testimonial />
      <ContactSection />
    </>
  );
};

export default Home;
