import React, { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedNFT = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
     className="relative w-full h-[90vh] flex items-start md:items-center justify-center text-white pt-24 md:pt-0"

      style={{
        backgroundImage: "url('/assets/NFT Highlight (2).png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#A259FF]/80 to-transparent"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl w-full px-4 flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
        
        {/* LEFT SIDE (Creator Info + Title + Button) */}
        <div className="text-center md:text-left md:mb-10" data-aos="fade-right">
          {/* Creator Badge */}
          <div className="inline-flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full mb-4">
            <img
              src="/assets/Avatar.png"
              alt="creator"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium">Shroomie</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Magic Mashrooms
          </h1>

          {/* Button */}
          <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-purple-600 hover:text-white transition duration-300 mx-auto md:mx-0">
            <FaEye />
            See NFT
          </button>
        </div>

        {/* RIGHT SIDE (Timer Box) */}
        <div
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center min-w-[250px]"
          data-aos="fade-left"
        >
          <p className="text-sm text-gray-300 mb-2">Auction ends in:</p>
          <div className="flex justify-center gap-4 text-2xl font-bold">
            <div>
              <span>59</span>
              <p className="text-xs text-gray-300">Hours</p>
            </div>
            <span>:</span>
            <div>
              <span>59</span>
              <p className="text-xs text-gray-300">Minutes</p>
            </div>
            <span>:</span>
            <div>
              <span>59</span>
              <p className="text-xs text-gray-300">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNFT;
