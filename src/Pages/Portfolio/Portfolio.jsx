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
        title="Creative Stack - Portfolio"
        description="Explore our React, WordPress, Flutter, and SEO projects."
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