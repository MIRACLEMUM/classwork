import React from 'react';
import TopCreatorCard from './TopCreatorCard';

const creators = [
  { id: 1, name: 'Keepitreal', image: '/avatars/avatar1.png', sales: '34.53' },
  { id: 2, name: 'DigiLab', image: '/avatars/avatar2.png', sales: '34.53' },
  { id: 3, name: 'GravityOne', image: '/avatars/avatar3.png', sales: '34.53' },
  { id: 4, name: 'Juanie', image: '/avatars/avatar4.png', sales: '34.53' },
  { id: 5, name: 'BlueWhale', image: '/avatars/avatar5.png', sales: '34.53' },
  { id: 6, name: 'Mr Fox', image: '/avatars/avatar7.png', sales: '34.53' },
  { id: 7, name: 'Shroomie', image: '/avatars/avater6.png', sales: '34.53' },
  { id: 8, name: 'Robotica', image: '/avatars/avatar8.png', sales: '34.53' },
  { id: 9, name: 'RustyRobot', image: '/avatars/avatar9.png', sales: '34.53' },
  { id: 10, name: 'Animakid', image: '/avatars/avatar10.png', sales: '34.53' },
  { id: 11, name: 'Dotgu', image: '/avatars/avatar11.png', sales: '34.53' },
  { id: 12, name: 'Ghiblier', image: '/avatars/avatar12.png', sales: '34.53' },
];

const TopCreatorSection = () => {
  return (
    <section className="bg-[#1c1c1e] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold">Top Creators</h2>
            <p className="text-gray-400">Checkout Top Rated Creators On The NFT Marketplace</p>
          </div>
          <button className="flex items-center gap-2 border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600 transition">
            <span>🚀 View Rankings</span>
          </button>
        </div>

        {/* Creator Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {creators.map((creator) => (
            <TopCreatorCard
              key={creator.id}
              id={creator.id}
              name={creator.name}
              image={creator.image}
              sales={creator.sales}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCreatorSection;
