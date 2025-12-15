import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const coreValues = [
    {
      title: "Quality Assurance",
      description: "We maintain rigorous quality standards across our entire production chain, from research to distribution, ensuring every product meets the highest safety and efficacy requirements.",
      icon: "🔬"
    },
    {
      title: "Integrity & Transparency",
      description: "Our business practices are built on ethical foundations, with full transparency in our operations, research findings, and product information.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We constantly push the boundaries of pharmaceutical science through cutting-edge research and development to create novel therapeutic solutions.",
      icon: "💡"
    },
    {
      title: "Patient-Centric Approach",
      description: "Every decision we make prioritizes patient needs, focusing on improving health outcomes and enhancing quality of life worldwide.",
      icon: "❤️"
    }
  ];

  const leadershipTeam = [
    {
      name: "Darshan Khatsuriya",
      role: "Chief Executive Officer",
      description: "Darshan, Co-Founder of Jainova Lifesciences, brings over a decade of experience in domestic and international pharma markets. With a vision to deliver high-quality, affordable medicines, he leads with integrity, expertise, and a focus on sustainable growth.",
      // image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    // {
    //   name: "Dr. Rajiv Mehta",
    //   role: "Chief Scientific Officer",
    //   description: "Leading our R&D division, Dr. Mehta has spearheaded the development of our breakthrough treatments and patented formulations.",
    //   image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    // }
  ];

  const strengths = [
    "<strong>Global Reach:</strong> Exporting to over 9+ countries across AFRICA, ASIA and LATAM",
    "<strong>Compliance with International Standards:</strong> Adhering to GMP, WHO, and local regulatory requirements",
    "<strong>Commitment to Quality:</strong> Delivering pharmaceutical products that meet the highest standards",
  ];

  return (
    <div className="pt-20 bg-[#F9FAFB] min-h-screen font-sans" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-[#1E3A5F] to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Jainova Lifesciences
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Innovating healthcare, delivering trusted pharmaceutical solutions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Who We Are Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-8">Who Are We</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-[#111827] text-lg leading-relaxed">
              Founded in 2025, <b>JAINOVA LIFESCIENCES PVT LTD</b> has established itself as a premier pharmaceutical exporter, committed to providing safe, effective, and affordable medicines to markets across 15 regions. Our global presence spans 9+ countries, and we pride ourselves on our compliance with international regulatory standards and our dedication to improving global healthcare.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-8">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#1E3A5F] h-full">
              <div className="flex justify-center mb-6">
                <div className="text-6xl">🎯</div>
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 text-center">Our Mission</h3>
              <p className="text-[#111827] leading-relaxed">
                We commit ourselves to total customer care by delivering world-class products and services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#E85B2C] h-full">
              <div className="flex justify-center mb-6">
                <div className="text-6xl">🚀</div>
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 text-center">Our Vision</h3>
              <p className="text-[#111827] leading-relaxed">
                To become the Most Respected Pharma Company.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 group hover:translate-y-[-5px]"
                style={{ borderRadius: '12px' }}
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

        {/* Leadership Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-12">Our Leadership</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2">
              {leadershipTeam.map((leader, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-full">
                    <h3 className="text-xl font-bold text-[#1E3A5F]">{leader.name}</h3>
                    <p className="text-[#E85B2C] font-medium mb-2">{leader.role}</p>
                    <p className="text-[#6B7280]">{leader.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-8">Why Choose Jainova Lifesciences</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ul className="space-y-4">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#E85B2C] mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[#111827]" dangerouslySetInnerHTML={{ __html: strength }}></span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;