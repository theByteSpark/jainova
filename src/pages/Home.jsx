import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  // Top 3 Most Popular Product Categories
  const productServices = [
    {
      title: "General Injectable",
      description: "Sterile injectable formulations for intravenous, intramuscular, and subcutaneous administration.",
      icon: <img src="/icons/injectable.png" alt="Injectable Icon" className="mx-auto" style={{ width: '3rem', height: '3rem' }} />,
      productId: "general-injectable",
      categories: ['Antibiotics / Antibacterials', 'Analgesics / Anti-inflammatory', 'Corticosteroids'],
    },
    {
      title: "Ophthalmic Products",
      description: "Specialized eye care products including drops, ointments, and solutions for ocular conditions.",
      icon: <img src="/icons/opthalmic.png" alt="Ophthalmic Icon" className="mx-auto" style={{ width: '3rem', height: '3rem' }} />,
      productId: "ophthalmic",
      categories: ["Eye Drops", "Antibiotic Ointments", "Anti-inflammatory Solutions"],
    },
    {
      title: "Solid Oral Dosages",
      description: "Tablets, capsules, and other solid dosage forms for oral administration.",
      icon: <img src="/icons/solid-oral.png" alt="Solid Oral Icon" className="mx-auto" style={{ width: '3rem', height: '3rem' }} />,
      productId: "solid-oral",
      categories: ["Tablets", "Capsules", "Chewable Forms", "Extended Release"],
    },
  ];

  // Why Choose Us features (COMMENTED OUT - replaced with certifications)
  const features = [
    {
      title: "Quality Assurance",
      description: "Rigorous testing and adherence to the highest pharmaceutical standards.",
      icon: "✅",
    },
    {
      title: "GMP Certified",
      description: "All facilities and processes follow Good Manufacturing Practices.",
      icon: "🏭",
    },
    {
      title: "Affordable Solutions",
      description: "Committed to making quality healthcare accessible to all.",
      icon: <img src="/icons/solid-oral.png" alt="Solid Oral Icon" className="mx-auto" style={{ width: '3rem', height: '3rem' }} />,
    },
    {
      title: "Patient-Centric Innovation",
      description: "Research driven by real patient needs and outcomes.",
      icon: "❤️",
    },
  ];

  // Why Choose Us data
  const whyChooseUsItems = [
    { name: "Good Manufacturing Practice (GMP)", icon: "✅" },
    { name: "WHO Guidelines Compliance", icon: "🌍" },
    { name: "ISO 9001:2015", icon: "🏅" },
    { name: "FDA Approved Facilities", icon: "🔐" }
  ];

  // Core Values data
  const coreValuesItems = [
    {
      title: "Quality Assurance",
      description: "We maintain rigorous quality standards across our entire production chain.",
      icon: "🔬"
    },
    {
      title: "Integrity & Transparency",
      description: "Our business practices are built on ethical foundations with full transparency.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We constantly push the boundaries of pharmaceutical science.",
      icon: "💡"
    },
    {
      title: "Patient-Centric Approach",
      description: "Every decision we make prioritizes patient needs.",
      icon: "❤️"
    }
  ];

  // Achievements data
  const achievementItems = [
    { name: "Countries", icon: "18+" },
    { name: "Happy Customers", icon: "27+" },
    { name: "Product Portfolio", icon: "300+" },
    {
      name: "CE Certification",
      icon: (
        <img src="/images/ce-logo.webp" alt="CE Certification" className="w-16 h-16 object-contain" />
      )
    },
    {
      name: "FSSAI Registration",
      icon: (
        <img src="/images/fssai-logo.webp" alt="FSSAI Registration" className="w-20 h-20 object-contain" />
      )
    }
  ];

  // Achievements data for Why Choose Us section
  const achievementsForWhyChooseUs = [
    {
      title: "18+",
      description: "Countries",
      icon: (
        <svg className="w-10 h-10 text-[#1E3A5F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      )
    },
    {
      title: "27+",
      description: "Happy Customers",
      icon: (
        <svg className="w-10 h-10 text-[#1E3A5F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: "300+",
      description: "Product Portfolio",
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 109 115" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 C35.97 0 71.94 0 109 0 C109 37.95 109 75.9 109 115 C73.03 115 37.06 115 0 115 C0 77.05 0 39.1 0 0 Z" />
          <path d="M0 0 C0.81436868 1.76997474 1.6264294 3.54101152 2.4375 5.3125 C2.88996094 6.29863281 3.34242187 7.28476562 3.80859375 8.30078125 C7.49178059 16.64531276 7.66037762 28.94690391 4.375 37.5625 C3.63507712 39.06821719 2.84306324 40.54951232 2 42 C1.56429687 42.77601562 1.12859375 43.55203125 0.6796875 44.3515625 C-5.03916314 53.69547694 -13.632702 60.84997416 -24.38671875 63.61328125 C-34.84833974 65.1614135 -45.45163568 64.65044856 -54.3046875 58.36328125 C-54.86414063 57.91339844 -55.42359375 57.46351562 -56 57 C-55.70561329 51.54365074 -52.52301077 49.02191103 -48.8046875 45.44921875 C-48.17901886 44.83158157 -47.55335022 44.2139444 -46.90872192 43.57759094 C-44.90672429 41.60454801 -42.89161921 39.64558619 -40.875 37.6875 C-38.24324906 35.11228061 -35.61684307 32.53166766 -32.9921875 29.94921875 C-32.36172012 29.33029755 -31.73125275 28.71137634 -31.0816803 28.07369995 C-27.39303584 24.43505695 -23.8648486 20.72742587 -20.51757812 16.76879883 C-17.60044479 13.36876166 -14.45513194 10.19019952 -11.3125 7 C-10.66216797 6.32066406 -10.01183594 5.64132813 -9.34179688 4.94140625 C-8.70951172 4.30074219 -8.07722656 3.66007812 -7.42578125 3 C-6.86286377 2.4225 -6.29994629 1.845 -5.7199707 1.25 C-4 0 -4 0 0 0 Z" fill="#1e3a5f" transform="translate(86,36)" />
          <path d="M0 0 C0.75571289 -0.01385742 1.51142578 -0.02771484 2.29003906 -0.04199219 C9.29844412 0.01592852 16.39899802 1.87496714 21.9375 6.375 C22.33422852 8.67651367 22.33422852 8.67651367 21.9375 11.375 C20.12084961 13.7434082 20.12084961 13.7434082 17.58984375 16.17578125 C16.67396484 17.07103516 15.75808594 17.96628906 14.81445312 18.88867188 C13.83520586 19.82221332 12.85538448 20.7551529 11.875 21.6875 C9.98597591 23.51454654 8.09921489 25.34393614 6.21484375 27.17578125 C4.84102539 28.50996094 4.84102539 28.50996094 3.43945312 29.87109375 C0.75359454 32.55904902 -1.71178313 35.36593195 -4.17456055 38.25561523 C-8.36842224 42.96360869 -12.94990612 47.32366025 -17.4375 51.75 C-19.42735621 53.71326571 -21.41385935 55.67983831 -23.3984375 57.6484375 C-24.27032715 58.50872559 -25.1422168 59.36901367 -26.04052734 60.25537109 C-28.10139569 62.20797741 -28.10139569 62.20797741 -29.0625 64.375 C-30.3825 64.375 -31.7025 64.375 -33.0625 64.375 C-39.76153366 51.90093733 -41.9004852 41.16081995 -38.1015625 27.33203125 C-34.24657939 16.36127105 -26.59747785 7.81471942 -16.3203125 2.46875 C-10.9918992 0.22957242 -5.69925983 0.06273136 0 0 Z" fill="#1e3a5f" transform="translate(55.0625,20.625)" />
        </svg>
      )
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Jainova Lifesciences has been an invaluable partner in our hospital's pharmaceutical supply chain. Their quality and reliability are unmatched.",
      author: "Dr. Sarah Johnson",
      position: "Chief of Pharmacy, Metro General Hospital",
    },
    {
      quote: "Working with Jainova has transformed our ability to provide affordable medications to underserved communities. Their commitment to accessibility aligns perfectly with our mission.",
      author: "Michael Chen",
      position: "Director, Global Health Initiative",
    },
  ];

  // State for testimonial slider
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // State for hero slider
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Auto rotate hero slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev === 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <div className="pt-32 bg-gradient-to-b from-[#1E3A5F]/10 to-white overflow-hidden relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[110vh]">
        {/* Hero Background Slider */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/80 to-transparent z-10 pointer-events-none"></div>

          <div className={`absolute inset-0 transition-opacity duration-1000 ${currentHeroSlide === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <video
              src="/images/hero-section-vid.mp4"
              className="w-full h-full object-cover object-center"
              autoPlay
              loop
              muted
            />
          </div>

          <div className={`absolute inset-0 transition-opacity duration-1000 ${currentHeroSlide === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src="/images/map.jpeg"
              alt="Global Presence Map"
              className="w-full h-full object-contain object-center"
            />
          </div>

          {/* Slider Controls */}
          <div className="absolute inset-y-0 left-0 z-30 flex items-center pl-4 md:pl-8">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentHeroSlide(currentHeroSlide === 0 ? 1 : 0); }}
              className="bg-white/20 hover:bg-white/40 text-black rounded-full p-2 backdrop-blur-sm transition-all shadow-lg cursor-pointer"
            >
              <ChevronLeft size={32} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 z-30 flex items-center pr-4 md:pr-8">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentHeroSlide(currentHeroSlide === 0 ? 1 : 0); }}
              className="bg-white/20 hover:bg-white/40 text-black rounded-full p-2 backdrop-blur-sm transition-all shadow-lg cursor-pointer"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3 pointer-events-none">
            <button onClick={() => setCurrentHeroSlide(0)} className={`pointer-events-auto w-3 h-3 rounded-full transition-all duration-300 ${currentHeroSlide === 0 ? 'bg-[#E85B2C] w-8' : 'bg-white/50 hover:bg-white'}`}></button>
            <button onClick={() => setCurrentHeroSlide(1)} className={`pointer-events-auto w-3 h-3 rounded-full transition-all duration-300 ${currentHeroSlide === 1 ? 'bg-[#E85B2C] w-8' : 'bg-white/50 hover:bg-white'}`}></button>
          </div>
        </div>

        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-12 -mt-12 md:-mt-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left md:col-span-8 lg:col-span-7"
            >
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ lineHeight: '1.3' }}
                className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                {/* Global Excellence in Pharmaceutical Products */}
                Delivering Safe and Effective Pharmaceutical Medicines Worldwide
              </motion.h3>
              {/* <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-white/90 mb-8 max-w-3xl"
              >
                Delivering Safe and Effective Pharmaceutical Medicines Worldwide
              </motion.p> */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/products"
                  className="inline-block bg-[#E85B2C] text-white px-8 py-3 rounded-lg shadow-lg hover:bg-[#E85B2C]/90 transition-all duration-300 font-medium text-lg"
                >
                  Explore Products
                </Link>
                {/* <Link
                  to="/contact"
                  className="inline-block bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300 font-medium text-lg"
                >
                  Discover Our Global Impact
                </Link> */}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden md:block md:col-span-4 lg:col-span-5"
            >
              {/* Empty div to maintain grid layout structure */}
            </motion.div>
          </div>
        </div>
      </div>


      {/* Our Achievements Section - COMMENTED OUT */}
      {/* <motion.div
        className="py-16 px-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-12">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Countries */}
      {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 group hover:translate-y-[-5px]"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E3A5F]/10 mb-4 group-hover:bg-[#E85B2C]/10 transition-colors duration-300">
              <svg className="w-10 h-10 text-[#1E3A5F] group-hover:text-[#E85B2C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <p className="text-4xl font-bold text-[#1E3A5F] mb-2">9+</p>
            <p className="text-[#6B7280] text-lg">Countries</p>
          </motion.div>

          {/* Happy Customers */}
      {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 group hover:translate-y-[-5px]"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E3A5F]/10 mb-4 group-hover:bg-[#E85B2C]/10 transition-colors duration-300">
              <svg className="w-10 h-10 text-[#1E3A5F] group-hover:text-[#E85B2C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <p className="text-4xl font-bold text-[#1E3A5F] mb-2">11+</p>
            <p className="text-[#6B7280] text-lg">Happy Customers</p>
          </motion.div>

          {/* Product Portfolio */}
      {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 group hover:translate-y-[-5px]"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E3A5F]/10 mb-4 transition-colors duration-300">
              <svg className="w-10 h-10 transition-all duration-300" viewBox="0 0 109 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 C35.97 0 71.94 0 109 0 C109 37.95 109 75.9 109 115 C73.03 115 37.06 115 0 115 C0 77.05 0 39.1 0 0 Z" />
                <path d="M0 0 C0.81436868 1.76997474 1.6264294 3.54101152 2.4375 5.3125 C2.88996094 6.29863281 3.34242187 7.28476562 3.80859375 8.30078125 C7.49178059 16.64531276 7.66037762 28.94690391 4.375 37.5625 C3.63507712 39.06821719 2.84306324 40.54951232 2 42 C1.56429687 42.77601562 1.12859375 43.55203125 0.6796875 44.3515625 C-5.03916314 53.69547694 -13.632702 60.84997416 -24.38671875 63.61328125 C-34.84833974 65.1614135 -45.45163568 64.65044856 -54.3046875 58.36328125 C-54.86414063 57.91339844 -55.42359375 57.46351562 -56 57 C-55.70561329 51.54365074 -52.52301077 49.02191103 -48.8046875 45.44921875 C-48.17901886 44.83158157 -47.55335022 44.2139444 -46.90872192 43.57759094 C-44.90672429 41.60454801 -42.89161921 39.64558619 -40.875 37.6875 C-38.24324906 35.11228061 -35.61684307 32.53166766 -32.9921875 29.94921875 C-32.36172012 29.33029755 -31.73125275 28.71137634 -31.0816803 28.07369995 C-27.39303584 24.43505695 -23.8648486 20.72742587 -20.51757812 16.76879883 C-17.60044479 13.36876166 -14.45513194 10.19019952 -11.3125 7 C-10.66216797 6.32066406 -10.01183594 5.64132813 -9.34179688 4.94140625 C-8.70951172 4.30074219 -8.07722656 3.66007812 -7.42578125 3 C-6.86286377 2.4225 -6.29994629 1.845 -5.7199707 1.25 C-4 0 -4 0 0 0 Z" fill="#1e3a5f" className="group-hover:fill-[#E85B2C]" transform="translate(86,36)" />
                <path d="M0 0 C0.75571289 -0.01385742 1.51142578 -0.02771484 2.29003906 -0.04199219 C9.29844412 0.01592852 16.39899802 1.87496714 21.9375 6.375 C22.33422852 8.67651367 22.33422852 8.67651367 21.9375 11.375 C20.12084961 13.7434082 20.12084961 13.7434082 17.58984375 16.17578125 C16.67396484 17.07103516 15.75808594 17.96628906 14.81445312 18.88867188 C13.83520586 19.82221332 12.85538448 20.7551529 11.875 21.6875 C9.98597591 23.51454654 8.09921489 25.34393614 6.21484375 27.17578125 C4.84102539 28.50996094 4.84102539 28.50996094 3.43945312 29.87109375 C0.75359454 32.55904902 -1.71178313 35.36593195 -4.17456055 38.25561523 C-8.36842224 42.96360869 -12.94990612 47.32366025 -17.4375 51.75 C-19.42735621 53.71326571 -21.41385935 55.67983831 -23.3984375 57.6484375 C-24.27032715 58.50872559 -25.1422168 59.36901367 -26.04052734 60.25537109 C-28.10139569 62.20797741 -28.10139569 62.20797741 -29.0625 64.375 C-30.3825 64.375 -31.7025 64.375 -33.0625 64.375 C-39.76153366 51.90093733 -41.9004852 41.16081995 -38.1015625 27.33203125 C-34.24657939 16.36127105 -26.59747785 7.81471942 -16.3203125 2.46875 C-10.9918992 0.22957242 -5.69925983 0.06273136 0 0 Z" fill="#1e3a5f" className="group-hover:fill-[#E85B2C]" transform="translate(55.0625,20.625)" />
              </svg>
            </div>
            <p className="text-4xl font-bold text-[#1E3A5F] mb-2">300+</p>
            <p className="text-[#6B7280] text-lg">Product Portfolio</p>
          </motion.div>
        </div>
      </motion.div> */}

      {/* About Preview Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-[60%]"
            >
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                Pioneering Excellence in Pharmaceutical Solutions
              </h2>
              <p className="text-[#6B7280] mb-4">
                At <b>JAINOVA LIFESCIENCES PVT LTD</b>, we are proud to be a trusted global exporter of high-quality pharmaceutical products. We began our journey in the pharmaceutical industry in <span className="font-bold">2013</span>. Through our strategic partnerships and collaborations, including our sister company, <b>VISHWA REMEDIES</b>, we have been able to expand our reach and deliver high-quality pharmaceutical products worldwide.
              </p>

              <p className="text-[#6B7280] mb-4">
                Our state-of-the-art facilities and expert team of scientists and healthcare professionals work tirelessly to meet the highest standards of pharmaceutical excellence.
              </p>

              <p className="text-[#6B7280] mb-4">
                We have well established Facilities for high Quality Manufacturing in India for supply of all kind of formulations in multiple therapeutic categories across the Globe. Also our Experts of International Regulatory Affairs and Marketing are dedicated to ensure timely delivery of Quality goods.
              </p>

              <p className="text-[#6B7280]">
                We strongly believe to provide Affordable Quality of Medicines across the World regardless of Geographic or Social Economic Barriers.
              </p>

              {/* Three Points with Green Checks */}
              <div className="mt-4 mb-4 grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-green-300 blur-md opacity-60"></div>
                    <div className="relative w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-[#1E3A5F] font-semibold text-sm">Experience over the years</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-green-300 blur-md opacity-60"></div>
                    <div className="relative w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-[#1E3A5F] font-semibold text-sm">Trust of Customers & Associates</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-green-300 blur-md opacity-60"></div>
                    <div className="relative w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-[#1E3A5F] font-semibold text-sm">Domain Expertise</span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center text-[#E85B2C] hover:text-[#E85B2C]/80 font-medium transition-colors duration-200"
              >
                Read More About Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-[40%]"
            >
              {/* Pharmaceutical Laboratory Image */}
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg h-[300px] md:h-[300px]">
                <img src="/images/home-page-3.jpg" alt="Modern Pharmaceutical Laboratory" className="object-cover w-full h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Achievements Section */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              A testament to our dedication, reach, and global standards of quality.
            </p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto"
          >
            {achievementItems.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
                }}
                className="flex flex-col items-center p-6 bg-white rounded-lg text-center shadow-lg transition-transform hover:scale-105 h-full min-h-[220px]"
              >
                <div className="flex items-center justify-center h-24 w-full mb-4">
                  <span className="text-5xl text-[#1E3A5F] font-bold">{item.icon}</span>
                </div>
                <div className="flex items-start justify-center w-full">
                  <span className="text-[#1E3A5F] font-bold text-base md:text-lg leading-tight">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products/Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
              Our Products
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Delivering a comprehensive range of pharmaceutical solutions to meet diverse healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {productServices.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#E85B2C]/20 group"
              >
                <div>
                  <div className="mb-6">
                    <div className="mb-4 text-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3 text-center">
                      {item.title}
                    </h3>
                    <p className="text-[#6B7280] mb-4 text-center">{item.description}</p>

                    {/* Category examples */}
                    <div className="mb-4">
                      <p className="text-sm text-[#6B7280] mb-2 font-medium">Popular Categories:</p>
                      <ul className="text-xs text-[#6B7280] space-y-1">
                        {item.categories.map((category, catIndex) => (
                          <li key={catIndex} className="flex items-center">
                            <span className="w-1 h-1 bg-[#E85B2C] rounded-full mr-2"></span>
                            {category}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link
                    to={`/products/${item.productId}`}
                    className="block w-full bg-[#E85B2C] text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-[#E85B2C]/90 transition-all duration-200 group-hover:shadow-md"
                  >
                    View Products
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {coreValuesItems.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1E3A5F]/10 text-3xl mb-4 group-hover:bg-[#E85B2C]/10 transition-colors duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">{value.title}</h3>
                <p className="text-[#6B7280]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Certifications & Quality Standards */}
      {/* COMMENTED OUT - Original Why Choose Us Section
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
              Why Choose Us
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the pharmaceutical industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-t-[#E85B2C]"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#1E3A5F] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Why Choose Us */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#1E3A5F] mb-4"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-[#6B7280] max-w-2xl mx-auto"
            >
              We adhere to the highest standards of pharmaceutical manufacturing and quality control.
            </motion.p>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
          >
            {whyChooseUsItems.map((cert, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5 }
                  }
                }}
                className="flex flex-col items-center p-6 bg-white rounded-lg w-48 h-48 justify-center text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="text-4xl mb-3">{cert.icon}</span>
                <span className="text-[#1E3A5F] font-medium">{cert.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
              What Our Partners Say
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Trusted by healthcare providers and institutions around the world.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden h-[300px] flex items-center justify-center">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentTestimonial === index ? 1 : 0,
                    x: currentTestimonial === index ? 0 : currentTestimonial > index ? -100 : 100
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute w-full md:w-[80%] p-8 md:p-10 bg-gradient-to-br from-[#1E3A5F]/5 to-[#E85B2C]/5 rounded-xl shadow-md border border-gray-100 text-center ${currentTestimonial === index ? "block" : "hidden"
                    }`}
                >
                  <div className="text-5xl text-[#E85B2C] mb-4 opacity-70">"</div>
                  <p className="text-[#6B7280] text-lg md:text-xl italic mb-6 leading-relaxed">{testimonial.quote}</p>
                  <div className="mt-8 flex flex-col items-center">
                    <div className="h-1 w-16 bg-[#E85B2C]/50 rounded-full mb-4"></div>
                    <p className="font-semibold text-[#1E3A5F] text-lg">{testimonial.author}</p>
                    <p className="text-[#6B7280]">{testimonial.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center items-center mt-12 space-x-4">
              <button
                onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index
                        ? "bg-[#E85B2C] w-8"
                        : "bg-[#6B7280]/30 hover:bg-[#6B7280]/50"
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Partner with Jainova Lifesciences?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Let's work together to advance healthcare solutions and improve patient outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#E85B2C] text-white px-8 py-3 rounded-lg shadow hover:bg-[#E85B2C]/90 transition-colors duration-200 font-medium text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
