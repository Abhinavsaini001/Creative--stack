import React, { useRef } from 'react'; 
import ProjectCard from './ProjectCard'
import PortfolioHero from './PortfolioHero'
import Testimonial from '../Home/Testimonial'
import SEO from '../../Component/SEO'

const Portfolio = () => {
  const formRef = useRef(null);
    
    const scrollToForm = () => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }; 
  return (
    <>
      <SEO
        title="Stack Adda Portfolio | Global App, Web & UI/UX Design Projects"
        description="Explore Stack Adda’s portfolio of successful web, mobile, and UI/UX design projects for global clients. See how we transform ideas into high-performing digital experiences."
      />
      <PortfolioHero scrollToForm={scrollToForm}/>
      <div ref={formRef}>
        <ProjectCard />
      </div>
      <Testimonial />
    </>
  )
}

export default Portfolio