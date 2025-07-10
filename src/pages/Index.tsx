
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedProjects from '../components/FeaturedProjects';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <Hero />
      <CategoryGrid />
      <FeaturedProjects />
      <Footer />
    </div>
  );
};

export default Index;
