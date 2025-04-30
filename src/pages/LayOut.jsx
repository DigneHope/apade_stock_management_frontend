import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { motion } from 'framer-motion';
import './LayOut.css';

function LayOut() {
  const { theme } = useContext(ThemeContext);

  const boxVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 300,
      },
    },
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  };

  return (
    <div className={`layout-page ${theme}`}>
      <h1>Welcome to APADE Stock Management System</h1>
      <p>Manage your users, products, and stock with elegance and flair! 💃🕺</p>
      <div className="layout-boxes">
        {['Manage Users', 'Manage Products', 'Stock In', 'Stock Out', 'Stock Report'].map((item, index) => (
          <motion.div
            key={index}
            className="box"
            variants={boxVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LayOut;
