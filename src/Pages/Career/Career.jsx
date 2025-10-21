import SEO from "../../Component/SEO";
import Testimonial from "../Home/Testimonial";
import ApplyForm from "./ApplyForm";
import CareerJob from "./CareerJob";
import HeroSection from "./HeroSection";
import InternshipSection from "./InternshipSection";

const Career = () => {
  return (
    <div>
      <SEO
        title="Creative Stack - Portfolio"
        description="Explore our React, WordPress, Flutter, and SEO projects."
      />
      <HeroSection/>
      <InternshipSection/>
      <CareerJob/>
      <Testimonial/>
      <ApplyForm/>
    </div>
  );
};

export default Career;
