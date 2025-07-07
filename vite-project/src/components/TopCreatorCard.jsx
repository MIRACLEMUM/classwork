import React from 'react';

const TopCreatorCard = ({ id, name, image, sales }) => {
  return (
    <div className="bg-[#2f2f31] rounded-xl p-5 relative text-center">
      <span className="absolute top-3 left-3 bg-[#1c1c1e] text-white text-sm font-bold w-8 h-8 flex items-center justify-center rounded-full">
        {id}
      </span>
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-400">
        Total Sales: <span className="text-white font-semibold">{sales} ETH</span>
      </p>
    </div>
  );
};

export default TopCreatorCard;
