
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-black text-white"
              >
                Flux8labs
              </motion.div>
              <p className="text-gray-400 leading-relaxed font-light">
                Crafting exceptional digital experiences through innovative web development and cutting-edge design solutions.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: "https://github.com/flux8labs", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/company/flux8labs", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com/flux8labs", label: "Twitter" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 border border-white/10"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Quick Links</h3>
              <nav className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Contact", href: "/contact" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 font-light"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Project Categories */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Projects</h3>
              <nav className="space-y-3">
                {[
                  { name: "E-commerce", href: "/category/ecommerce" },
                  { name: "SaaS Platforms", href: "/category/saas" },
                  { name: "Portfolios", href: "/category/portfolios" },
                  { name: "Business Sites", href: "/category/business" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 font-light"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white">Stay Updated</h3>
              <p className="text-gray-400 text-sm font-light">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-l-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-white text-black rounded-r-lg hover:bg-gray-200 transition-all duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 font-light">
                  By subscribing, you agree to our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm font-light">
              © {currentYear} Flux8labs. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-white transition-colors font-light">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-white transition-colors font-light">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-500 hover:text-white transition-colors font-light">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
