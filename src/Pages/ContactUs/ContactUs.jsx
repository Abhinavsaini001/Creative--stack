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
        title="Creative Stack - Portfolio"
        description="Explore our React, WordPress, Flutter, and SEO projects."
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
