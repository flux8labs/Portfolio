
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with cutting-edge technologies",
      features: ["React & Next.js", "Node.js Backend", "Database Design", "API Integration"],
      price: "Starting at $5,000"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage and convert users",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $3,000"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
      price: "Starting at $8,000"
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms that drive sales",
      features: ["Shopify Development", "Custom Solutions", "Payment Integration", "SEO Optimization"],
      price: "Starting at $6,000"
    }
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We analyze your needs and define project scope" },
    { step: "02", title: "Design", description: "Create wireframes and high-fidelity designs" },
    { step: "03", title: "Development", description: "Build your solution with best practices" },
    { step: "04", title: "Launch", description: "Deploy and optimize for peak performance" }
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
              OUR <span className="text-gray-300">SERVICES</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              From concept to deployment, we provide comprehensive digital solutions 
              that help your business succeed in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 font-light">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-400">
                      <CheckCircle className="w-4 h-4 text-white" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              OUR <span className="text-gray-300">PROCESS</span>
            </h2>
            <p className="text-gray-400 text-lg font-light">
              A proven methodology that delivers exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm font-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              READY TO GET <span className="text-gray-300">STARTED?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 font-light">
              Let's discuss your project and create something amazing together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all duration-300"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
