
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="featured-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            FEATURED <span className="text-gray-300">PROJECTS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Discover our most impactful and innovative projects that showcase our expertise and creativity.
          </p>
        </motion.div>

        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="flex-1 relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl border border-white/10"
                >
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Live Demo Button */}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-4 flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </motion.div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-xl -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-xl -z-10"></div>
              </div>

              {/* Project Details */}
              <div className="flex-1 space-y-6">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 mb-4">
                    <span className="text-sm font-medium text-white capitalize">{project.category}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Results */}
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.slice(0, 2).map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center space-x-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button - Made Smaller */}
                <Link to={`/project/${project.id}`} className="mt-6 inline-block">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-white to-gray-200 text-black px-4 py-3 rounded-full text-sm font-bold hover:from-gray-100 hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-white/20"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
