
import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
  // 3D floating cubes
  const cubes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 2,
  }));

  return (
    <>
      {/* 3D Grid Background */}
      <div className="absolute inset-0">
        <div 
           className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(45deg)',
            transformOrigin: 'center bottom'
          }}
        />
      </div>

      {/* Floating 3D Cubes */}
      <div className="absolute inset-0 overflow-hidden">
        {cubes.map((cube) => (
          <motion.div
            key={cube.id}
            className="absolute border border-white/20 bg-white/5 backdrop-blur-sm"
            style={{
              width: cube.size,
              height: cube.size,
              left: `${cube.x}%`,
              top: `${cube.y}%`,
              transform: `rotateX(45deg) rotateY(45deg) rotateZ(${cube.rotation}deg)`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotateX: [45, 90, 45],
              rotateY: [45, 90, 45],
              rotateZ: [cube.rotation, cube.rotation + 360, cube.rotation],
            }}
            transition={{
              duration: cube.duration,
              repeat: Infinity,
              ease: "linear",
              delay: cube.delay,
            }}
          />
        ))}
      </div>

      {/* Geometric Lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </>
  );
};

export default HeroBackground;
