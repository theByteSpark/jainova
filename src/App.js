import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ProductDetails from './pages/ProductDetails';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
    const [apiProducts, setApiProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        console.log("Fetching products from API...");
        try {
          const response = await fetch("https://script.google.com/macros/s/AKfycbz8QjfoVxSERWzHcdEiNquazHJbXkslG-dkos11dKut7jwZTdsNBIOL2RWj52kSteCF/exec", {
            // redirect: "follow",
            method: "GET",
            headers: {
              "Content-Type": "text/plain;charset=utf-8"
            }
          });
          const data = await response.json();
          setApiProducts(data);
          console.log("Fetched data:", data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, []);
  

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow" style={{marginTop:'80px'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/products" element={<Products apiProducts={apiProducts} />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:product_id" element={<ProductDetails apiProducts = {apiProducts} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App; 
