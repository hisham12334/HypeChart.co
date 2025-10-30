import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 bg-white/80 backdrop-blur-lg border border-gray-200/50 rounded-full mt-4 px-6 shadow-sm">
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-extrabold text-brand-dark">HypeChart</h1>
          </div>
          <a href="#waitlist" className="hidden sm:inline-block px-6 py-2 text-sm font-bold text-white bg-brand-dark rounded-full hover:bg-gray-800 transition-colors duration-300">
            Get Early Access
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
