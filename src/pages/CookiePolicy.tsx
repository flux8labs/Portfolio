
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePolicy = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
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
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
            
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
              COOKIE <span className="text-gray-300">POLICY</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              This policy explains how we use cookies and similar technologies to recognize you when you visit our website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative space-y-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">What Are Cookies</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website.</p>
                <p>They are widely used to make websites work more efficiently and provide information to the site owners.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">How We Use Cookies</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>We use cookies to improve your experience on our website, analyze usage patterns, and provide personalized content.</p>
                <p>Some cookies are essential for the website to function properly, while others help us understand how you interact with our site.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Types of Cookies We Use</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p><strong className="text-white">Essential Cookies:</strong> These are necessary for the website to function and cannot be disabled.</p>
                <p><strong className="text-white">Analytics Cookies:</strong> These help us understand how visitors interact with our website.</p>
                <p><strong className="text-white">Marketing Cookies:</strong> These are used to track visitors and display relevant advertisements.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Managing Cookies</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience.</p>
                <p>Most web browsers allow some control of cookies through browser settings. You can set your browser to refuse cookies or delete certain cookies.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Contact Us</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>If you have any questions about our Cookie Policy, please contact us at cookies@flux8labs.com</p>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
