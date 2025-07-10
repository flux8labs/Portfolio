
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, ExternalLink } from 'lucide-react';

interface ProjectHeroProps {
  project: any;
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-800/20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to={`/category/${project.category}`}
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to {project.category}</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Badge */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <span className="text-sm font-medium text-white capitalize">{project.category}</span>
                </div>
                <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                  <Award className="w-3 h-3 text-gray-300" />
                  <span className="text-sm font-medium text-gray-300">Featured Project</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {project.title}
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed font-light">
                {project.description}
              </p>

              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 mb-8"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live Project</span>
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;
