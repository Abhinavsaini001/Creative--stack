import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Code, Palette, Smartphone, Monitor, ShoppingCart, TrendingUp, Award, Gift, FileText, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with React & Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Mobile Banking App",
      category: "UI/UX Design",
      description: "Intuitive banking app interface design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
    },
    {
      title: "Analytics Dashboard",
      category: "Data Visualization",
      description: "Real-time analytics and reporting dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      description: "Complete brand identity for tech startup",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop"
    }
  ];

  const skills = [
    { icon: <Code className="w-8 h-8" />, title: "UI & UX Design", description: "Creating intuitive and engaging user experiences with modern design principles and user-centered approach." },
    { icon: <Monitor className="w-8 h-8" />, title: "Web Development", description: "Building responsive and performant web applications using React, Node.js, and modern technologies." },
    { icon: <Palette className="w-8 h-8" />, title: "Frontend Development", description: "Crafting pixel-perfect interfaces with HTML, CSS, JavaScript, and cutting-edge frameworks." },
    { icon: <Smartphone className="w-8 h-8" />, title: "WordPress", description: "Custom WordPress themes and plugins development with advanced functionality and optimization." },
    { icon: <ShoppingCart className="w-8 h-8" />, title: "Shopify", description: "E-commerce solutions with Shopify, custom themes, and third-party integrations." },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Marketing", description: "Digital marketing strategies, SEO optimization, and conversion rate optimization." }
  ];

  const internshipBenefits = [
    { icon: <Award className="w-12 h-12" />, title: "Paid Internship", description: "Competitive stipend for your valuable contribution to real-world projects" },
    { icon: <FileText className="w-12 h-12" />, title: "Certificate", description: "Industry-recognized certificate upon successful completion of internship" },
    { icon: <Gift className="w-12 h-12" />, title: "Amazing Gifts", description: "Exciting rewards and gifts for outstanding performance and dedication" }
  ];

  const AnimatedSection = ({ children, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = React.useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        } ${className}`}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">Portfolio</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
              <a href="#internship" className="hover:text-purple-400 transition-colors">Internship</a>
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 mt-4">
                <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
                <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
                <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
                <a href="#internship" className="hover:text-purple-400 transition-colors">Internship</a>
                <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at 50% 50%, purple 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              Designing with <span className="text-purple-400">Purpose</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-300">
              Building with <span className="text-white">Innovation</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Creating digital experiences that combine beautiful design with powerful functionality
            </p>
            
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">About Me</h2>
                <p className="text-lg text-gray-300 mb-6">
                  Hi, I am a passionate designer and developer with 3+ years of web development 
                  experience. Over the past 2 years, I've honed my skills in WordPress, Shopify, 
                  React, and modern web technologies.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  I understand the importance of pixel-perfect websites and pride myself on 
                  delivering exceptional user experiences. I'm comfortable working solo or as 
                  part of a collaborative team.
                </p>
                <p className="text-lg text-gray-300">
                  I craft digital solutions that showcase my passion and expertise in design 
                  and development, always staying up-to-date with the latest industry trends.
                </p>
              </div>
              
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-purple-500/30">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400 text-center mb-16">
              I craft digital solutions that showcase my passion and expertise in design and development
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <AnimatedSection key={index} className="group">
                  <div className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-purple-400 mb-2">{project.category}</div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400">{project.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-4">My Skills</h2>
            <p className="text-xl text-gray-400 text-center mb-16">
              I love to craft functional solutions for unique problems. These are some skills I've picked up over my career.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <AnimatedSection key={index} className="group">
                  <div className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-800 hover:border-purple-500/50">
                    <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
                    <p className="text-gray-400">{skill.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Internship Section */}
      <section id="internship" className="py-20 px-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Join Our Internship Program</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Launch your career with our comprehensive internship program. Get hands-on experience, 
                mentorship, and amazing rewards while working on real-world projects.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {internshipBenefits.map((benefit, index) => (
                <AnimatedSection key={index} className="group">
                  <div className="text-center p-8 bg-gray-900/50 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 border border-purple-500/20 hover:border-purple-500/50">
                    <div className="text-purple-400 mb-6 flex justify-center group-hover:text-purple-300 transition-colors">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            
            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Apply for Internship
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-xl text-gray-400">
                Ready to start your next project? Let's create something amazing together.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">hello@portfolio.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <span className="text-gray-300">San Francisco, CA</span>
                  </div>
                </div>
                
                <div className="flex space-x-6 mt-8">
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Github className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Twitter className="w-8 h-8" />
                  </a>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      rows={5}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    onClick={() => alert('Message sent! We\'ll get back to you soon.')}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;