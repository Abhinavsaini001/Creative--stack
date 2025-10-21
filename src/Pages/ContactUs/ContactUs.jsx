import React from 'react'
import Newslatter from './Newslatter'
import ContactForm from './ContactForm'
import ContactLink from './ContactLink'
import ContactHero from './ContactHero'
import Faq from './Faq'
import SEO from '../../Component/SEO'

const ContactUs = () => {
  return (
    <>
      <SEO
        title="Creative Stack - Portfolio"
        description="Explore our React, WordPress, Flutter, and SEO projects."
      />
      <ContactHero/>
      <ContactForm/>
      <ContactLink/>
      <Faq/>
      <Newslatter/>
    </>
  )
}

export default ContactUs