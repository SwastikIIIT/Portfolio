import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './globals.css';

const SlidingHomepage = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLoader, setShowLoader] = useState(false);

  const handleVisitPortfolio = () => {
    setShowWelcome(false);

    setTimeout(() => {
      setShowLoader(true);
    },500); 

    setTimeout(() => {
      window.location.href = 'https://swastiksharma.framer.website/';
    },1000);
  };

  const slideVariants = {
    initial: { x: '-100vw', opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 60, damping: 20, duration: 1.2 },
    },
    exit: {
      x: '100vw',
      opacity: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20, duration: 1 },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.8, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <div className="min-h-screen  overflow-hidden relative font-sans" style={{background:'linear-gradient(to bottom right,#E3D2BA,#A1B1C2)'}}>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <motion.div
            key="welcome"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 flex flex-col items-center justify-center px-4"
          >
            <motion.h1
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="font-bold text-gray-900 text-center mb-8 leading-tight"
              style={{fontSize:'72px'}}
            >
              Welcome to my website
            </motion.h1>

            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 1.0 }}
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleVisitPortfolio}
                className="cursor-pointer px-10 py-4 text-lg md:text-xl font-semibold text-white bg-gray-900 rounded-full transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
              >
                Visit my portfolio
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    
      {showLoader && (
        <div className="absolute inset-0 flex items-center justify-center ">
          <div class="w-16 h-16 border-4 border-t-blue-500 border-b-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default SlidingHomepage;
