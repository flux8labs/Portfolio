
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
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
              <FileText className="w-8 h-8 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
              TERMS OF <span className="text-gray-300">SERVICE</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Please read these terms carefully before using our services. By using our services, you agree to these terms.
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
              <h2 className="text-2xl font-black text-white mb-6">Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                <p>If you do not agree to abide by the above, please do not use this service.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Use License</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>Permission is granted to temporarily download one copy of the materials on Flux8labs' website for personal, non-commercial transitory viewing only.</p>
                <p>This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Disclaimer</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>The materials on Flux8labs' website are provided on an 'as is' basis. Flux8labs makes no warranties, expressed or implied.</p>
                <p>Furthermore, Flux8labs does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Limitations</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>In no event shall Flux8labs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit).</p>
                <p>This limitation applies regardless of whether we have been informed of or should have been aware of the possibility of such damages.</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-400 font-light">
                <p>If you have any questions about these Terms of Service, please contact us at legal@flux8labs.com</p>
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

export default TermsOfService;
