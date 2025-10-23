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
        title="Stack Adda | Custom Web & Mobile App Development Company Worldwide"
        description="Grow your business with Stack Adda — a global app & web development company delivering custom, scalable, and secure digital solutions. Let’s turn your ideas into powerful products."
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
