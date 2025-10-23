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
        title="Careers at Stack Adda | IT Internships & Tech Jobs in India"
        description="Kickstart your tech career with Stack Adda! Apply for internships in web development, app development, UI/UX design, and AI/ML. Learn, grow, and build real-world projects."
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
