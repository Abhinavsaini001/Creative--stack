import { FaMobileAlt, FaLaptopCode, FaCogs, FaPencilRuler } from "react-icons/fa";

const servicesData = [
  {
    id: "mobile-app-development",
    icon: <FaMobileAlt className="text-3xl text-purple-600" />,
    title: "Mobile App Development",
    shortDesc: "We create responsive websites, e-commerce platforms, and iOS/Android apps tailored to your business needs.",
    longDesc:
      "Our expert developers build powerful, scalable, and visually appealing mobile applications for Android and iOS platforms. We focus on performance, usability, and seamless integration with your business ecosystem.",
    features: [
      "Custom Android & iOS app development",
      "Cross-platform Flutter and React Native apps",
      "E-commerce & business apps",
      "Maintenance and updates",
    ],
    image: "/assets/mobile-app.webp",
  },
  {
    id: "software-business-solutions",
    icon: <FaLaptopCode className="text-3xl text-purple-600" />,
    title: "Software & Business Solutions",
    shortDesc:
      "From custom software to scalable business apps, we deliver secure and high-performance solutions for startups & enterprises.",
    longDesc:
      "We provide end-to-end software development solutions that empower your business to scale and perform efficiently. Our team focuses on security, speed, and adaptability.",
    features: [
      "Custom software applications",
      "Cloud deployment & integration",
      "Automation systems",
      "Business process optimization",
    ],
    image: "/assets/software.webp",
  },
  {
    id: "ui-ux-design",
    icon: <FaCogs className="text-3xl text-purple-600" />,
    title: "UI/UX & Creative Design",
    shortDesc:
      "Modern, user-friendly designs that improve customer experience, drive engagement, and boost conversions.",
    longDesc:
      "Our UI/UX design team crafts stunning visuals and intuitive interfaces that elevate the user experience. We combine creativity with user research to deliver designs that drive engagement and conversions.",
    features: [
      "Prototyping & wireframing",
      "User research & testing",
      "Responsive design systems",
      "Design-to-development handoff",
    ],
    image: "/assets/uiux.webp",
  },
  {
    id: "seo-digital-growth",
    icon: <FaPencilRuler className="text-3xl text-purple-600" />,
    title: "SEO & Digital Growth",
    shortDesc:
      "Enhance your online presence with SEO, SEM, and digital marketing strategies designed to increase visibility and sales.",
    longDesc:
      "We help brands grow through advanced SEO, SEM, and social media strategies. Our focus is to increase your visibility, boost website traffic, and generate measurable business results.",
    features: [
      "On-page & technical SEO",
      "Social media management",
      "Google Ads & PPC campaigns",
      "Analytics & performance tracking",
    ],
    image: "/assets/seo.webp",
  },
];

export default servicesData;
