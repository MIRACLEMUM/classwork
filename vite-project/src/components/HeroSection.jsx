// src/components/HeroSection.jsx
import { FaRocket } from "react-icons/fa";
import CountUp from "react-countup";
import heroimage from "../assets/images/Image Placeholder (1).png";
import avatar from "../assets/images/avatar.png"; // 👈 Add your avatar image here

const HeroSection = () => {
  return (
    <section className="bg-[#2B2B2B] text-white px-6 md:px-20 py-16 grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
      
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Discover <br /> Digital Art & <br /> Collect NFTs
        </h1>

        <p className="text-gray-300 mb-8 text-base md:text-lg">
          NFT Marketplace UI Created With Anima For <br /> Figma. Collect, Buy And Sell Art From More <br /> Than 20k NFT Artists.
        </p>

        <button className="flex items-center gap-2 bg-[#A259FF] px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 transition mb-8">
          <FaRocket />
          Get Started
        </button>

        {/* Animated Stats */}
        <div className="flex gap-8 flex-wrap">
          <div>
            <h3 className="text-2xl font-bold">
              <CountUp end={240} duration={2} />k+
            </h3>
            <p className="text-gray-400">Total Sale</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              <CountUp end={100} duration={2} />k+
            </h3>
            <p className="text-gray-400">Auctions</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              <CountUp end={240} duration={2} />k+
            </h3>
            <p className="text-gray-400">Artists</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-[#3B3B3B] rounded-2xl overflow-hidden max-w-md shadow-lg">
        <img
          src={heroimage}
          alt="Space Walking"
          className="w-full h-[420px] object-cover"
        />
        <div className="p-4">
          <h4 className="font-semibold text-lg mb-2">Space Walking</h4>
          <div className="flex items-center gap-3">
            <img
              src={avatar}
              alt="Animakid"
              className="w-6 h-6 rounded-full object-cover"
            />
            <p className="text-sm text-gray-400">Animakid</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
