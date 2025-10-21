import React, { useRef } from "react";
import SEO from "../../Component/SEO";
import Testimonial from "../Home/Testimonial";
import ApplyForm from "./ApplyForm";
import CareerJob from "./CareerJob";
import HeroSection from "./HeroSection";
import InternshipSection from "./InternshipSection";

const Career = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }; 

  return (
    <div>
      <SEO
        title="Creative Stack - Portfolio"
        description="Explore our React, WordPress, Flutter, and SEO projects."
      />
      <HeroSection scrollToForm={scrollToForm} />
      <InternshipSection />
      <CareerJob scrollToForm={scrollToForm}/>
      <Testimonial />
      <div ref={formRef}>
        <ApplyForm />
      </div>
    </div>
  );
};

export default Career;
