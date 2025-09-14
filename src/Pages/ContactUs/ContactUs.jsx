import React from 'react'
import Newslatter from './Newslatter'
import ContactForm from './ContactForm'
import ContactLink from './ContactLink'
import ContactHero from './ContactHero'
import Faq from './Faq'

const ContactUs = () => {
  return (
    <>
      <ContactHero/>
      <ContactForm/>
      <ContactLink/>
      <Faq/>
      <Newslatter/>
    </>
  )
}

export default ContactUs