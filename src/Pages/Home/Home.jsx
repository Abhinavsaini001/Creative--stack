import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Services from "./Services";
import Portfolio from "./Portfolio";
import WhyClientsTrust from "./WhyClientsTrust";
import ContactSection from "./ContactSection";
import Testimonial from "./Testimonial";
import OurTeam from "./OurTeam";

const Home = () => {
  return (
    <>
      <HeroSection />
      
      <Services />
      <Portfolio />
      
      <WhyClientsTrust />
      <Features />
      <Testimonial />
      <OurTeam/>
      <ContactSection />
    </>
  );
};

export default Home;
