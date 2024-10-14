import React, { useState } from "react";
import { FaHome, FaBars, FaWhatsapp } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center nav_bar" data-aos="fade-down" data-aos-duration="1000">
        {/* Left Side - Logo */}
        <div className="navbar flex items-center justify-between h-10">
          <Link to="/" className="relative z-15 flex items-center">
            <img
              src="/assets/hero/ad2.png"
              alt="Logo"
              className="h-20 max-h-16 w-auto transition-transform duration-500 ease-in-out transform hover:scale-125"
            />
          </Link>
        </div>

        {/* Middle - WhatsApp Icon */}
        <div className="flex justify-center flex-1">
          <a
            href="https://wa.me/9520243089?text=Hii%20I%20am%20interested%20I%20want%20to%20know%20about%20it%20more%20kindly%20help%20me"
            className="text-green-500 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Right Side - Links for Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/vishwam" className="nav_items flex items-center" onClick={handleLinkClick}>
            <div className="h-16 w-16 rounded-full overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-125">
              <video src="/assets/vishwamitem/vishwamlogo.mp4" autoPlay loop muted className="h-full w-full object-cover"></video>
            </div>
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-expanded={isOpen} // Accessibility improvement
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white py-2 px-4 mt-2 z-20 transition-all duration-300 ease-in-out">
          {/* <Link to="/vishwam" className="block py-2 text-white hover:bg-gray-700 transition-colors" onClick={handleLinkClick}>
            <FaHome className="mr-2" />
            Vishwam
          </Link> */}
          {/* Add the Vishwam image in the mobile menu */}
          <NavLink to="/vishwam" className="flex items-center py-2" onClick={handleLinkClick}>
            <video
              src="/assets/vishwamitem/vishwamlogo.mp4"
              alt="Vishwam"
              className="h-16 w-auto transition-transform duration-500 ease-in-out transform hover:scale-125 object-contain"
              autoPlay
              loop
              muted
            />
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
