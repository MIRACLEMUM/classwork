// TopCreatorCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TopCreatorCard = ({ id, name, image, sales }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-[#3B3B3B] rounded-xl p-5 relative flex flex-row md:flex-row lg:flex-col items-center gap-4 shadow hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300"
    >
      <span className="absolute top-3 left-3 bg-[#1c1c1e] text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full">
        {id}
      </span>
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="text-left w-full lg:text-center">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-400">
          Total Sales: <span className="text-white font-semibold">{sales} ETH</span>
        </p>
      </div>
    </motion.div>
  );
};

export default TopCreatorCard;
