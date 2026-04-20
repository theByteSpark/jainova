import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const serviceCategories = [
    {
      title: "Prescription Medications",
      services: [
        "Generic Medications",
        "Brand-name Drugs",
        "Specialty Pharmaceuticals",
        "Biologics & Biosimilars",
        "Cardiovascular Medications",
        "Oncology Treatments",
        "Neurological Medications",
        "Infectious Disease Treatments"
      ]
    },
    {
      title: "Over-the-Counter Products",
      services: [
        "Pain & Fever Relievers",
        "Cold & Allergy Medications",
        "Digestive Health Products",
        "Vitamins & Supplements",
        "First Aid Supplies",
        "Wound Care Solutions",
        "Skin Care Products",
        "Eye & Ear Care Products"
      ]
    },
    {
      title: "Research & Development",
      services: [
        "Drug Discovery",
        "Clinical Trials Management",
        "Formulation Development",
        "Pharmacokinetics Studies",
        "Safety & Efficacy Testing",
        "Stability Testing",
        "Bioavailability Studies"
      ]
    },
    {
      title: "Manufacturing Capabilities",
      services: [
        "Solid Dose Forms (Tablets/Capsules)",
        "Liquid Formulations",
        "Injectable Products",
        "Transdermal Delivery Systems",
        "Controlled-Release Formulations",
        "Sterile Manufacturing",
        "GMP-Compliant Facilities"
      ]
    },
    {
      title: "Quality Assurance",
      services: [
        "Quality Control Testing",
        "Regulatory Documentation",
        "GMP Compliance Management",
        "Stability Monitoring",
        "Batch Release Procedures",
        "Product Validation"
      ]
    },
    {
      title: "Global Distribution",
      services: [
        "Supply Chain Management",
        "Cold Chain Logistics",
        "Inventory Management",
        "Export & Import Services",
        "Regulatory Market Access"
      ]
    },
    {
      title: "Healthcare Services",
      services: [
        "Pharmacovigilance",
        "Medical Information",
        "Patient Support Programs",
        "Health Outcomes Research",
        "Disease Management Solutions"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="pt-20 bg-[#F9FAFB] min-h-screen">
      {/* Hero Banner */}
      <div className="w-full bg-gradient-to-b from-[#1E3A5F] to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Products & Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Innovative pharmaceutical products and healthcare solutions for better patient outcomes
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
            >
              <div className="bg-[#1E3A8A] text-white p-6">
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <motion.li 
                      key={serviceIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * serviceIndex }}
                      className="flex items-start group"
                    >
                      <span className="text-[#1E3A8A] mr-3 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[#1A1A1A] group-hover:text-[#22C55E] transition-colors duration-200">
                        {service}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
