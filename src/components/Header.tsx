
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { categories } from '../data/projects';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    ${isScrolled 
      ? 'bg-black/90 backdrop-blur-lg shadow-2xl border-b border-white/10' 
      : 'bg-transparent'
    }
  `;

  return (
    <motion.header 
      className={headerClasses}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              className="text-2xl font-black text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Flux8labs
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-white ${
                location.pathname === '/' ? 'text-white' : 'text-gray-400'
              }`}
            >
              Home
            </Link>
            
            {/* Projects Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProjectsDropdownOpen(true)}
              onMouseLeave={() => setIsProjectsDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-400 hover:text-white transition-colors">
                <span>Projects</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isProjectsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
                  >
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/category/${category.id}`}
                        className="block px-4 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors border-b border-white/5 last:border-b-0"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{category.icon}</span>
                          <div>
                            <div className="font-medium">{category.name}</div>
                            <div className="text-xs text-gray-500">{category.count} projects</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <motion.div
                className={`flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border transition-all duration-300 ${
                  isSearchFocused ? 'border-white/30 bg-white/10' : 'border-white/10'
                }`}
                whileFocus={{ scale: 1.02 }}
              >
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none w-32 focus:w-48 transition-all duration-300"
                />
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none flex-1"
                />
              </div>
              
              <nav className="space-y-2">
                <Link to="/" className="block py-2 text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
                <div className="space-y-2">
                  <div className="text-gray-500 text-sm font-medium px-2">Projects</div>
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/category/${category.id}`}
                      className="block py-2 pl-4 text-gray-400 hover:text-white transition-colors"
                    >
                      {category.icon} {category.name}
                    </Link>
                  ))}
                </div>
                <Link to="/about" className="block py-2 text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link to="/services" className="block py-2 text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
                <Link to="/contact" className="block py-2 text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
