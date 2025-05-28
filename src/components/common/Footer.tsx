import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Globe, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const handlePrivacyPolicy = () => {
    // Handle privacy policy modal/page
    console.log('Open privacy policy');
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                TVM IT Solutions
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              Transforming businesses through innovative IT solutions and cutting-edge technologies. Your trusted partner for digital excellence.
            </p>
            
            {/* Social Links */}
            <div className="mb-8">
              <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="group p-3 rounded-xl bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                  <Facebook size={20} className="group-hover:text-blue-400 transition-colors" />
                </a>
                <a href="#" className="group p-3 rounded-xl bg-white/5 hover:bg-sky-600/20 border border-white/10 hover:border-sky-400/30 transition-all duration-300">
                  <Twitter size={20} className="group-hover:text-sky-400 transition-colors" />
                </a>
                <a href="#" className="group p-3 rounded-xl bg-white/5 hover:bg-pink-600/20 border border-white/10 hover:border-pink-400/30 transition-all duration-300">
                  <Instagram size={20} className="group-hover:text-pink-400 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/tvm-it-solutions-91544a355" className="group p-3 rounded-xl bg-white/5 hover:bg-blue-700/20 border border-white/10 hover:border-blue-500/30 transition-all duration-300">
                  <Linkedin size={20} className="group-hover:text-blue-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/reviews", label: "Reviews" },
                { href: "/contact", label: "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="group flex items-center text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Get in Touch</h4>
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
            <ul className="space-y-4">
              <li className="group">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    Chandan Apartment, Rana Nagar, Seven Hills, CIDCO, Aurangabad, Maharashtra, India
                  </span>
                </div>
              </li>
              <li className="group">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <Phone size={18} className="text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a href="tel:+919309917269" className="text-gray-300 hover:text-white transition-colors">
                    +91 9309917269
                  </a>
                </div>
              </li>
              <li className="group">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                  <Mail size={18} className="text-purple-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a href="mailto:futuretech@tvmitsolution.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                    futuretech@tvmitsolution.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 backdrop-blur-sm">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-6">Get the latest updates on our services and industry insights</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent backdrop-blur-sm"
                required
              />
              <button 
                type="submit"
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2">
              <Globe size={16} className="text-blue-400" />
              <p className="text-gray-300 text-sm">
                &copy; {currentYear} TVM IT Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <button 
                onClick={handlePrivacyPolicy} 
                className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:underline underline-offset-4"
              >
                Privacy Policy
              </button>
              <a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4">
                Sitemap
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;