import React, { useRef } from 'react'; // ✅ Import useRef
import Newslatter from './Newslatter';
import ContactForm from './ContactForm';
import ContactLink from './ContactLink';
import ContactHero from './ContactHero';
import Faq from './Faq';
import SEO from '../../Component/SEO';

const ContactUs = () => {
  const formRef = useRef(null);
  
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  }; 

  return (
    <>
      <SEO
        title="Contact Stack Adda | Hire Expert Web & App Developers Globally"
        description="Looking for a trusted tech partner? Connect with Stack Adda to discuss your project needs. We deliver custom app & web development solutions to clients across the world."
      />
      <ContactHero scrollToForm={scrollToForm}/>
      <div ref={formRef}>
        <ContactForm/>
      </div>
      <ContactLink/>
      <Faq/>
      <Newslatter/>
    </>
  );
};

export default ContactUs;
