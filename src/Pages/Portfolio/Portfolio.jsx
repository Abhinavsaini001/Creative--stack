import React from 'react'
import ProjectCard from './ProjectCard'
import PortfolioHero from './PortfolioHero'
import Testimonial from '../Home/Testimonial'
import SEO from '../../Component/SEO'

const Portfolio = () => {
  return (
    <>
      <SEO
        title="Creative Stack - Portfolio"
        description="Explore our React, WordPress, Flutter, and SEO projects."
      />
      <PortfolioHero />
      <ProjectCard />
      <Testimonial />
    </>
  )
}

export default Portfolio