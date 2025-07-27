import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto"
      >
        <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page non trouvée</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link 
          to="/" 
          className="btn btn-primary inline-block hover:scale-105 transition-transform"
        >
          Retourner à l'accueil
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound; 