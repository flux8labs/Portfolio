
import React from 'react';
import { motion } from 'framer-motion';

const HeroStats = () => {
  const stats = [
    { number: "250+", label: "Projects Delivered", suffix: "" },
    { number: "98", label: "Client Satisfaction", suffix: "%" },
    { number: "15+", label: "Countries Served", suffix: "" },
    { number: "50+", label: "Team Members", suffix: "" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="text-center group cursor-pointer"
        >
          <div className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-gray-300 transition-colors">
            {stat.number}{stat.suffix}
          </div>
          <div className="text-gray-400 text-xs uppercase tracking-wider font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;
