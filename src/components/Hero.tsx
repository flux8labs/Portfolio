
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroStats from './hero/HeroStats';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity, position: 'relative' }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      <HeroBackground />
      
      {/* Main content centered */}
      <div className="flex-1 flex items-center justify-center">
        <HeroContent />
      </div>
      
      {/* Stats section below main content */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <HeroStats />
      </div>
      
      <ScrollIndicator />
    </motion.section>
  );
};

export default Hero;
