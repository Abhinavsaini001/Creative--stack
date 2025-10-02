import React, { useRef } from "react";
import HeroSection from "./HeroSection";
import InternshipSection from "./InternshipSection";
import CareerJob from "./CareerJob";
import Testimonial from "../Home/Testimonial";
import ApplyForm from "./ApplyForm";

const Career = () => {
  const applyFormRef = useRef(null);

  const scrollToForm = () => {
    applyFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeroSection scrollToForm={scrollToForm} />
      <InternshipSection />
      <CareerJob />
      <Testimonial />
      <div ref={applyFormRef}>
        <ApplyForm />
      </div>
    </div>
  );
};

export default Career;
