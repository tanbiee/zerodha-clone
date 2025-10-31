import { StrictMode } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_page/home/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/AboutPage';
import Pricing from './landing_page/pricing/Pricing';
import Support from './landing_page/support/SupportPage';
import Products from './landing_page/products/ProductPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
