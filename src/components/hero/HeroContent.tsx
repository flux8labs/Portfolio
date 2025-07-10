
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroContent = () => {
  const handleWatchStory = () => {
    // You can replace this with your actual video URL or modal
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  };

  const scrollToFeaturedProjects = () => {
    const element = document.querySelector('#featured-projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="space-y-6"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
        >
          <Star className="w-3 h-3 text-white" />
          <span className="text-xs font-medium text-white">Award-Winning Development</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
        >
          <span className="text-white block">DIGITAL</span>
          <span className="text-white block">INNOVATION</span>
          <motion.span 
            className="block bg-gradient-to-r from-gray-300 to-gray-600 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            REDEFINED
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
        >
          We craft extraordinary digital experiences that push boundaries, 
          challenge conventions, and deliver measurable results for forward-thinking brands.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
        >
          <motion.button
            onClick={scrollToFeaturedProjects}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 py-3 bg-white text-black font-bold rounded-full text-base overflow-hidden transition-all duration-300 cursor-pointer"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore Our Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>

          <motion.button
            onClick={handleWatchStory}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center space-x-3 px-6 py-3 border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 cursor-pointer"
          >
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Play className="w-3 h-3 ml-0.5" />
            </div>
            <span>Watch Our Story</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
