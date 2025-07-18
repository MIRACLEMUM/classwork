// TopCreatorCard.jsx
import React from 'react';

const TopCreatorCard = ({ id, name, image, sales }) => {
  return (
    <div
      className="bg-[#3B3B3B] rounded-xl p-5 relative flex flex-row md:flex-row lg:flex-col items-center gap-4 shadow hover:shadow-lg hover:shadow-black/30 transition-transform duration-300 hover:scale-[1.02]"
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
    </div>
  );
};

export default TopCreatorCard;
