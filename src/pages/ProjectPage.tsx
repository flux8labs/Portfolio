
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Quote, CheckCircle, Target } from 'lucide-react';
import { projects } from '../data/projects';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectHero from '../components/project/ProjectHero';
import ProjectDetails from '../components/project/ProjectDetails';

const ProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-gray-400 hover:text-white">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      
      <ProjectHero project={project} />

      {/* Project Images Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative text-3xl font-black text-white mb-12 text-center"
          >
            PROJECT SHOWCASE
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group relative overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">View {index + 1}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-black text-white mb-6 flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <span>THE CHALLENGE</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 font-light">
                {project.challenge}
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Complex user workflows</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Scalability requirements</span>
                </li>
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-black text-white mb-6 flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span>OUR SOLUTION</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6 font-light">
                {project.solution}
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Intuitive user interface design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Advanced caching strategies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-white" />
                  <span>Microservices architecture</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-3xl font-black text-white mb-12 text-center">RESULTS & IMPACT</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.results.map((result: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="text-2xl font-black text-white mb-3 group-hover:text-gray-300 transition-all duration-300">
                    {result}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {index === 0 && "Increase in user engagement"}
                    {index === 1 && "Faster load times achieved"}
                    {index === 2 && "Improvement in conversion rate"}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12"
            >
              <Quote className="w-16 h-16 text-white mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl text-gray-300 italic mb-8 leading-relaxed font-light">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-bold">
                  {project.testimonial.author.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-lg font-semibold text-white">
                    {project.testimonial.author}
                  </div>
                  <div className="text-gray-400">
                    {project.testimonial.position}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative text-center mb-12"
            >
              <h2 className="text-3xl font-black text-white mb-4">RELATED PROJECTS</h2>
              <p className="text-gray-400 font-light">Explore more projects in this category</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative"
                >
                  <Link
                    to={`/project/${relatedProject.id}`}
                    className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedProject.images[0]}
                        alt={relatedProject.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-4 font-light">
                        {relatedProject.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">
                          {relatedProject.category}
                        </span>
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProjectPage;
