import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jainova-lifesciences-260428405",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#1E3A8A] text-white font-sans" style={{ fontFamily: 'Poppins, Inter, sans-serif' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-tight">Jainova Lifesciences</h3>
            <p className="text-[#a7f5ee]">
              Innovating Healthcare, Delivering Trust.<br />Your partner in pharmaceutical excellence.
            </p>
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <a href="https://wa.me/919265147602" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a7f5ee] transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.122.548 4.195 1.59 6L.004 24l6.115-1.603A11.96 11.96 0 0012.031 24c6.645 0 12.03-5.384 12.03-12.03S18.676 0 12.031 0zm0 21.996c-1.802 0-3.565-.483-5.111-1.4l-.367-.217-3.8.995.996-3.79-.234-.38a9.974 9.974 0 01-1.52-5.174c0-5.503 4.478-9.98 9.98-9.98 5.503 0 9.98 4.477 9.98 9.98s-4.477 9.98-9.98 9.98zm5.474-7.464c-.3-.15-1.774-.876-2.048-.976-.275-.1-.475-.15-.675.15s-.775.976-.95 1.176c-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.415-1.493-.895-.8-1.5-1.79-1.675-2.09-.175-.3-.018-.464.132-.614.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.243-.585-.49-.505-.675-.515-.175-.01-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.115 3.225 5.12 4.525.715.31 1.272.495 1.705.635.715.227 1.365.195 1.88.118.576-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" /></svg>
              </a>
              <a href="https://linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#a7f5ee] transition-colors duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
            {/* <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#a7f5ee] transition-colors duration-300 rounded-lg p-2"
                    style={{ borderRadius: '8px' }}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div> */}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[#a7f5ee] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#a7f5ee] transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#a7f5ee] transition-colors duration-300">About</Link></li>
              <li><Link to="/services" className="hover:text-[#a7f5ee] transition-colors duration-300">Products</Link></li>
              <li><Link to="/blog" className="hover:text-[#a7f5ee] transition-colors duration-300">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#a7f5ee] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          {/* Products & Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products & Services</h4>
            <ul className="space-y-2">
              <li><span className="text-[#a7f5ee]">Pharma Products</span></li>
              <li><span className="text-[#a7f5ee]">Generic Medicines</span></li>
              <li><span className="text-[#a7f5ee]">R&D Capabilities</span></li>
              <li><span className="text-[#a7f5ee]">Quality & Compliance</span></li>
              <li><span className="text-[#a7f5ee]">Global Distribution</span></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-[#a7f5ee]">
                <span className="mt-1 mr-3">
                  {/* Address / Location Pin Icon */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <span>
                  43, Parthbhumi, near Government tubewell, Bopal, Ahmedabad, Daskroi, Gujarat, India, 380058.
                </span>
              </li>
              <li className="flex items-center text-[#a7f5ee]">
                <span className="mr-3">
                  {/* Phone / Handset Icon */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.05l-2.2 2.2z" />
                  </svg>
                </span>
                <span>+91 9265147602</span>
              </li>
              <li className="flex items-center text-[#a7f5ee]">
                <span className="mr-3">
                  {/* Email / Envelope Icon */}
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Envelope outer shape */}
                    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />

                    {/* M shape for Gmail */}
                    <path d="M4 7.5L12 12.5L20 7.5" />
                    <path d="M4 7.5V17" />
                    <path d="M20 7.5V17" />
                  </svg>
                </span>
                <span>jainova.lifesciences@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-[#a7f5ee]/20 mt-8 pt-8 flex flex-col md:flex-row md:justify-between items-center text-center gap-2">
          <span className="text-[#a7f5ee]">
            © {new Date().getFullYear()} Jainova Lifesciences. All rights reserved.
          </span>
          <span className="text-[#a7f5ee]">
            Crafted by <a className="text-white underline ml-1" target="_blank" href="https://thebytespark.com/" rel="noreferrer">ByteSpark</a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
