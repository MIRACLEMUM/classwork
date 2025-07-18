import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2B2B2B] text-white px-6 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-purple-500 text-xl">🛍️</span>
        <h1 className="text-lg font-bold">NFT Marketplace</h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-6 font-medium">
          <li className="hover:text-purple-400 cursor-pointer">Marketplace</li>
          <li className="hover:text-purple-400 cursor-pointer">Rankings</li>
          <li className="hover:text-purple-400 cursor-pointer">Connect a wallet</li>
        </ul>

        <button className="flex items-center gap-2 bg-[#A259FF] px-5 py-2 rounded-xl text-white font-semibold hover:bg-purple-600 transition">
          <FaUser />
          Sign Up
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="p-2 focus:outline-none"
        >
          {isOpen ? (
            <FaTimes size={22} className="text-purple-500" />
          ) : (
            <FaBars size={22} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#2B2B2B] px-6 py-6 flex flex-col gap-4 font-medium md:hidden shadow-md">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Marketplace
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Rankings
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-purple-400 transition"
          >
            Connect a wallet
          </a>
          <button className="flex items-center gap-2 bg-[#A259FF] px-5 py-2 rounded-xl text-white font-semibold hover:bg-purple-600 transition">
            <FaUser />
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
