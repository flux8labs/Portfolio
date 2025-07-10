
import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
      >
        <motion.div
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-3 bg-white rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
