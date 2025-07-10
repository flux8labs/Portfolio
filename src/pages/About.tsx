
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Zap, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const stats = [
    { number: "250+", label: "Projects Completed", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Target },
    { number: "15+", label: "Countries Served", icon: Users },
    { number: "50+", label: "Team Members", icon: Zap },
  ];

  const team = [
    { name: "Sarah Johnson", role: "Creative Director", image: "/placeholder.svg" },
    { name: "Mike Chen", role: "Lead Developer", image: "/placeholder.svg" },
    { name: "Emma Davis", role: "UX Designer", image: "/placeholder.svg" },
    { name: "James Wilson", role: "Technical Lead", image: "/placeholder.svg" },
  ];

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
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-white">
              ABOUT <span className="text-gray-300">FLUX8LABS</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              We are a team of passionate digital innovators dedicated to crafting extraordinary 
              web experiences that push boundaries and deliver exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <stat.icon className="w-8 h-8 text-white mx-auto mb-4" />
                <div className="text-2xl md:text-3xl font-black text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                OUR <span className="text-gray-300">MISSION</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
                To revolutionize the digital landscape by creating innovative, user-centric solutions 
                that empower businesses to thrive in the modern world. We believe in the power of 
                technology to transform ideas into reality.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Core Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3 text-gray-400">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Innovation-driven approach</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-400">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Client-centric solutions</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-400">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Quality and excellence</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-400">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Continuous learning</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              MEET THE <span className="text-gray-300">TEAM</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              The creative minds behind our innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
