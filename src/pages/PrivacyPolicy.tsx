
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
              PRIVACY <span className="text-gray-300">POLICY</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              <h2 className="text-2xl font-black text-white mb-6">Information We Collect</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our services.</p>
                <p>We may also collect information automatically when you use our website, including your IP address, browser type, and usage patterns.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and personalize your experience.</p>
                <p>We may also use your information to send you technical notices, updates, security alerts, and support messages.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Information Sharing</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
                <p>We may share your information with service providers who assist us in operating our website and conducting our business.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Data Security</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <p>However, no method of transmission over the Internet or electronic storage is 100% secure.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Contact Us</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@flux8labs.com</p>
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

export default PrivacyPolicy;
