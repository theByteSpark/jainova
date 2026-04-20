import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { icons } from 'lucide-react';

const Products = ({ apiProducts }) => {
  const productCategories = [
    {
      title: "GENERAL INJECTABLE",
      description: "Sterile injectable formulations for intravenous, intramuscular, and subcutaneous administration.",
      // icon: "💉",
      icon: <img src="/icons/injectable.png" alt="Injectable Icon" className="mx-auto" style={{ width: '3rem', height: '3rem' }} />,
      products: ['Antibiotics / Antibacterials', 'Analgesics / Anti-inflammatory', 'Corticosteroids', 'Antiemetics & Gastrointestinal', 'Cardiovascular / Diuretics', 'Nutritional & Supportive'],
      url: "/Injectable"
    },
    {
      title: "BETA LACTUM INJECTABLE",
      description: "Sterile injectable formulations for intravenous, intramuscular, and subcutaneous administration.",
      // icon: "💉",
      icon: <img src="/icons/bl-injectable.png" alt="bl-Injectable Icon" className="mx-auto" style={{ width: '3rem', height: '3rem' }} />,
      products: ['Cephalosporins', 'Penicillin', 'Carbapenems', 'Monobactams'],
      url: "/Injectable"
    },
    {
      title: "OPHTHALMIC",
      description: "Specialized eye care products including drops, ointments, and solutions for ocular conditions.",
      // icon: "👁️",
      icon: <img src="/icons/opthalmic.png" alt="ophthalmic Icon" className="mx-auto" style={{ width: '3rem', height: '3rem' }} />,
      products: ["Eye Drops", "Antibiotic Ointments", "Anti-inflammatory Solutions", "Lubricating Drops"],
      url: "/ophthalmic"
    },
    {
      title: "SOLID ORAL",
      description: "Tablets, capsules, and other solid dosage forms for oral administration.",
      // icon: "💊",
      icon: <img src="/icons/solid-oral.png" alt="Solid Oral Icon" className="mx-auto" style={{ width: '3rem', height: '3rem' }} />,
      products: ["Tablets", "Capsules", "Chewable Forms", "Extended Release"]
    },
    {
      title: "LIQUID ORAL",
      description: "Liquid formulations including syrups, suspensions, and solutions for oral intake.",
      // icon: "🍯",
      icon: <img src="/icons/liquid-oral.png" alt="Liquid Oral Icon" className="mx-auto" style={{ width: '3rem', height: '3rem' }} />,
      products: ["Syrups", "Suspensions", "Oral Solutions", "Pediatric Formulations"]
    },
    {
      title: "EXTERNAL PREPARATION",
      description: "Topical medications for external application including creams, gels, and ointments.",
      // icon: "🧼",
      icon: <img src="/icons/external-preparation.png" alt="External Prep Icon" className="mx-auto" style={{ width: '3rem', height: '3rem' }} />,
      products: ["Creams", "Gels", "Ointments", "Lotions"]
    }
  ];

  // Function to download full product catalog
  const handleDownloadFullCatalog = () => {
    let rawData = [];

    if (apiProducts?.data) {
      rawData = apiProducts.data;
    } else if (Array.isArray(apiProducts)) {
      rawData = apiProducts;
    } else if (apiProducts && typeof apiProducts === 'object') {
      // Try to find an array property
      const arrayProps = Object.keys(apiProducts).filter(key => Array.isArray(apiProducts[key]));
      if (arrayProps.length > 0) {
        rawData = apiProducts[arrayProps[0]];
      }
    }

    const validData = Array.isArray(rawData) ? rawData : [];
    const allProducts = validData.filter(item => {
      const isValid = item &&
        typeof item === 'object' &&
        item['product-name'] &&
        item['product-name'].trim() !== '' &&
        item['product-name'] !== 'Product Name'; // Exclude header row if present      
      return isValid;
    });

    const typeBreakdown = allProducts.reduce((acc, product) => {
      const type = product.type || 'Other';
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {});

    if (allProducts.length === 0) {
      alert("No product data available to export!");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(20);
    // doc.text("Complete Product Catalog", 14, 20);

    doc.setFontSize(16);
    doc.text("Jainova Lifesciences Pvt. Ltd.", 14, 10, { align: "left" });
    // doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 38);
    // doc.text(`Total Products: ${allProducts.length}`, 14, 46);

    // Group products by type for better organization
    const groupedProducts = allProducts.reduce((acc, product) => {
      const type = product.type || 'Other';
      if (!acc[type]) acc[type] = [];
      acc[type].push(product);
      return acc;
    }, {});

    let currentY = 20;
    const pageHeight = doc.internal.pageSize.height;

    if (Object.keys(groupedProducts).length > 1) {
      // doc.addPage();
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      // doc.text("Product Summary by Category", 14, 70);
      doc.text("Product Summary by Category", doc.internal.pageSize.getWidth() / 2, 30, { align: "center" });

      autoTable(doc, {
        head: [["Product Type", "Count"]],
        body: Object.keys(groupedProducts).map(type => [
          type,
          groupedProducts[type].length
        ]),
        startY: 40,
        styles: { halign: "center" },
        headStyles: {
          fillColor: [30, 58, 95], // Your brand dark blue
          textColor: [255, 255, 255]
        }
      });
    }
    doc.addPage();
    // Create sections for each product type
    Object.keys(groupedProducts).forEach((type, typeIndex) => {
      // Check if we need a new page
      if (currentY > pageHeight - 80) {
        doc.addPage();
        currentY = 20;
      }

      // Type header
      doc.setFontSize(16);
      doc.setFont(undefined, 'bold');
      doc.text(`${type.toUpperCase()} PRODUCTS`, 14, currentY);
      currentY += 10;

      // Create table for this type
      autoTable(doc, {
        head: [["S.No", "Type", "Product Name"]],
        body: groupedProducts[type].map((product, index) => [
          index + 1,
          product.type || 'N/A',
          product['product-name'] || 'N/A'
        ]),
        startY: currentY,
        styles: {
          halign: "left",
          fontSize: 9
        },
        headStyles: {
          fillColor: [231, 91, 44], // Using your brand color
          textColor: [255, 255, 255],
          fontStyle: 'bold'
        },
        alternateRowStyles: {
          fillColor: [248, 250, 252]
        },
        margin: { left: 14, right: 14 },
        didDrawPage: function (data) {
          currentY = data.cursor.y + 10;
        }
      });

      currentY = doc.lastAutoTable.finalY + 15;
    });

    // Summary page if multiple types

    const fileName = `Jainova Complete Catalog ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}.pdf`;
    doc.save(fileName);
  };

  // Certifications data
  const certifications = [
    { name: "Good Manufacturing Practice (GMP)", icon: "✅" },
    { name: "WHO Guidelines Compliance", icon: "🌍" },
    { name: "ISO 9001:2015", icon: "🏅" },
    { name: "FDA Approved Facilities", icon: "🔐" },
    { name: "EU GMP Certification", icon: "⭐" },
    { name: "Pharmacopeial Standards", icon: "📊" },
    // New certifications requested
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

  // Global presence data
  const regions = [
    "North America", "Europe", "Asia-Pacific",
    "Latin America", "Middle East", "Africa"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white font-sans">
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
              Global Pharmaceutical Products for Every Need.
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our pharmaceutical products are available in more than 18+ countries around the world. With strategic partnerships and a robust supply chain, we ensure reliable and timely delivery to healthcare providers, wholesalers, and distributors globally
            </p>
          </motion.div>
        </div>
      </div>

      {/* Product Categories */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1E3A5F] mb-12 text-center"
          >
            Product Categories
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12"
          >
            {productCategories.map((category, index) => (
              <Link key={index} to={`/products/${category.title.toLowerCase().replace(/\s+/g, '-')}`} className="block h-full">
                <motion.div
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-[#E85B2C]/50 hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="p-6 flex flex-col h-full">
                    {/* Category Intro */}
                    <div className="flex flex-col items-center mb-6 h-[220px] shrink-0">
                      <div className="h-16 flex items-center justify-center mb-4">{category.icon}</div>
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3 text-center">{category.title}</h3>
                      <p className="text-[#6B7280] text-center text-sm">{category.description}</p>
                    </div>

                    {/* Key Products Tags */}
                    <div className="border-t border-gray-100 pt-5 flex-grow">
                      <h4 className="font-semibold text-left text-[#1E3A5F] text-sm mb-4">Key Products</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.products.map((product, i) => (
                          <span key={i} className="bg-[#F9FAFB] text-[#1E3A5F] text-xs font-medium px-3 py-1.5 rounded-full border border-[#1E3A5F]/10 shadow-sm">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          <div className="text-center">
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={handleDownloadFullCatalog}
              className="bg-[#1E3A5F] text-white px-8 py-3 rounded-lg shadow hover:bg-[#1E3A5F]/90 transition-all duration-200"
            >
              View Our Full Product Catalog
            </motion.button>
          </div>
        </div>
      </section>

      {/* Product Image Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[#1E3A5F] mb-12 text-center"
          >
            Our Featured Products
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[...Array(14)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <img
                  src={`/images/product${i + 1}.jpeg`}
                  alt={`Product ${i + 1}`}
                  className="w-full h-auto object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Quality Standards */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#1E3A5F] mb-4"
            >
              Certifications & Quality Standards
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center p-6 bg-[#F9FAFB] rounded-lg w-48 h-48 justify-center text-center"
              >
                <span className="text-4xl mb-3">{cert.icon}</span>
                <span className="text-[#1E3A5F] font-medium">{cert.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Global Distribution */}
      {/* <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[#1E3A5F] mb-4"
            >
              Global Distribution
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-[#6B7280] max-w-2xl mx-auto"
            >
              Delivering pharmaceutical excellence to healthcare providers worldwide.
            </motion.p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="aspect-[16/9] bg-gradient-to-r from-[#1E3A5F]/10 to-[#E85B2C]/10 rounded-xl flex items-center justify-center mb-12"
            >
              <div className="text-center">
                <span className="text-6xl">🌎</span>
                <p className="text-[#6B7280] mt-4">Global Presence Map</p>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center"
            >
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                >
                  <p className="text-[#1E3A5F] font-medium">{region}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Consultation CTA */}
      {/* <section className="py-16 bg-[#1E3A5F]">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-4"
          >
            Need Pharmaceutical Consultation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white/80 max-w-2xl mx-auto mb-8"
          >
            Our team of experts is ready to assist with your specific pharmaceutical needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-block bg-[#E85B2C] text-white px-8 py-3 rounded-lg shadow hover:bg-[#E85B2C]/90 transition-colors duration-200 font-medium"
            >
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Products;
