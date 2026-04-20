import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PhoneInput, { isValidPhoneNumber, getCountries, getCountryCallingCode } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({
    Email: '',
    Number: '',
  });

  // Phone number validation function
  const validatePhoneNumber = (phone) => {
    if (!phone) return '';
    
    try {
      if (isValidPhoneNumber(phone)) {
        return '';
      } else {
        return 'Please enter a valid phone number';
      }
    } catch (error) {
      return 'Invalid phone number format';
    }
  };

  // Handle phone number change with validation
  const handlePhoneChange = (value) => {
    setPhoneNumber(value || '');
    
    // Validate phone number
    const phoneError = validatePhoneNumber(value);
    setErrors(prev => ({
      ...prev,
      Number: phoneError
    }));
  };

  // Helper validation functions
  const validateEmail = (email) => {
    if (!email) return { isValid: false, message: 'Email is required' };
    
    // More comprehensive email regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!emailRegex.test(email)) {
      return { isValid: false, message: 'Please enter a valid email address' };
    }
    
    // Check for common email format issues
    if (email.length > 254) {
      return { isValid: false, message: 'Email address is too long' };
    }
    
    const parts = email.split('@');
    if (parts[0].length > 64) {
      return { isValid: false, message: 'Email username part is too long' };
    }
    
    return { isValid: true, message: '' };
  };
  
  const validatePhone = (phone) => {
    // Accepts 10-15 digits, optional +, spaces, dashes
    return /^\+?[0-9\s-]{10,15}$/.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    const emailValidation = validateEmail(formData.Email);
    
    // Validate phone number
    const phoneError = validatePhoneNumber(phoneNumber);
    
    if (!emailValidation.isValid || phoneError) {
      setErrors({
        Email: !emailValidation.isValid ? emailValidation.message : '',
        Number: phoneError || '',
      });
      return;
    }
    
    setErrors({ Email: '', Number: '' });
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const apiEndPoint = 'https://script.google.com/macros/s/AKfycbwN286r0mxx7PKqrHsUD5c7oJiefroYabnxzkEv9Vx27Rn6Io_d413c8mSb7seermRZ/exec';
    const formD = new FormData();
    formD.append('Name', formData.Name);
    formD.append('Email', formData.Email);
    formD.append('Subject', formData.Subject);
    formD.append('Message', formData.Message);
    formD.append('PhoneNumber', phoneNumber || '');
    formD.append('Date', new Date().toLocaleDateString());

    try {
      const response = await fetch(apiEndPoint, {
        method: 'POST',
        body: formD,
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      // Get response text first, then try to parse as JSON
      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        data = responseText;
      }
      setFormData({
        Name: '',
        Email: '',
        Subject: '',
        Message: '',
      });
      setPhoneNumber('');
      setSubmitStatus({ type: 'success', message: 'Thank you — your message was sent successfully.' });
      setIsSubmitting(false);
      console.log('data', data);
    } catch (err) {
      setSubmitStatus({ type: 'error', message: err instanceof Error ? err.message : 'Something went wrong' });
      setIsSubmitting(false);
      console.log(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Headquarters",
      details: "43, Parthbhumi, near Government tubewell, Bopal, Ahmedabad, Daskroi, Gujarat, India, 380058",
      link: "https://maps.app.goo.gl/ZNGSGoUaQrvuiz5NA"
    },
    {
      icon: "📞",
      title: "Customer Support",
      details: "+91 9265147602",
      link: "tel:+919265147602"
    },
    {
      icon: "✉️",
      title: "Email Inquiries",
      details: "jainova.lifesciences@gmail.com",
      link: "mailto:jainova.lifesciences@gmail.com"
    }
  ];

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
              Get in Touch
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Have a question or want to learn more about our products? Our global team is here to help. Contact us today to explore opportunities or get more information.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Contact Information Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-[#E85B2C]">{info.icon}</div>
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-2">{info.title}</h3>
              <p className="text-[#6B7280]">{info.details}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Let's Chat</h2>
            {submitStatus.message && (
              <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitStatus.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#6B7280] font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all duration-200"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[#6B7280] font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all duration-200"
                    required
                    placeholder="Your email address"
                  />
                  {errors.Email && <p className="text-red-500 text-sm mt-1">{errors.Email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-[#6B7280] font-medium mb-2">Phone Number</label>
                <div className="relative">
                  <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="IN"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="Enter phone number"
                    limitMaxLength={true}
                    style={{
                      width: '100%'
                    }}
                  />
                  {/* Custom dropdown arrow - positioned right next to flag */}
                  <div className="absolute left-[42px] top-1/2 transform -translate-y-1/2 pointer-events-none z-5">
                    <svg 
                      width="8" 
                      height="6" 
                      viewBox="0 0 8 6" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path 
                        d="M1 2L4 5L7 2" 
                        stroke="currentColor" 
                        strokeWidth="1.2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                {errors.Number && <p className="text-red-500 text-sm mt-1">{errors.Number}</p>}
              </div>
              <div>
                <label className="block text-[#6B7280] font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="Subject"
                  value={formData.Subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all duration-200"
                  required
                  placeholder="What is this regarding?"
                />
              </div>
              <div>
                <label className="block text-[#6B7280] font-medium mb-2">Message</label>
                <textarea
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A5F] focus:border-transparent transition-all duration-200"
                  required
                  placeholder="Your message..."
                  style={{ height: '240px' }}
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-[#E85B2C] text-white py-3 px-6 rounded-lg font-medium ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#E85B2C]/90'} transition-all duration-200 shadow-md`}
              >
                {isSubmitting ? 'Sending...' : 'Submit Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Our Location</h2>
              <div className="rounded-lg overflow-hidden h-[400px] shadow-sm border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.70717844116!2d72.4396558968064!3d23.02037455483408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1691135315899!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jainova Lifesciences Location"
                ></iframe>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">Business Hours</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-[#6B7280] font-medium">Monday - Saturday</span>
                  <span className="text-[#1E3A5F] font-semibold">10:00 AM - 7:00 PM</span>
                </div>
                {/* <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-[#6B7280] font-medium">Saturday</span>
                  <span className="text-[#1E3A5F] font-semibold">10:00 AM - 2:00 PM</span>
                </div> */}
                <div className="flex justify-between items-center">
                  <span className="text-[#6B7280] font-medium">Sunday</span>
                  <span className="text-[#E85B2C] font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Additional Support Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Need Immediate Assistance?</h2>
          <p className="text-[#6B7280] mb-6">
            Our customer support team is available to help you with any questions about our pharmaceutical products and services.
          </p>
          <a
            href="tel:+918005557890"
            className="inline-flex items-center justify-center bg-[#1E3A5F] text-white px-6 py-3 rounded-lg hover:bg-[#1E3A5F]/90 transition-colors duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Call Helpline
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;