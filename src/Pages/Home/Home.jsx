import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Services from "./Services";
import Portfolio from "./Portfolio";
import WhyClientsTrust from "./WhyClientsTrust";
import ContactSection from "./ContactSection";
import Testimonial from "./Testimonial";
import OurTeam from "./OurTeam";
import SEO from "../../Component/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="Creative Stack - Portfolio"
        description="Explore our React, WordPress, Flutter, and SEO projects."
      />
      <HeroSection />
      <Services />
      <Portfolio />
      <WhyClientsTrust />
      <Testimonial />
      <Features />
      <OurTeam />
      <ContactSection />
    </>
  );
};

export default Home;
