import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
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
      <div className="container flex items-center justify-between px-4 py-3 mx-auto nav_bar" data-aos="fade-down" data-aos-duration="1000">
        {/* Left Side - Logo */}
        <div className="flex items-center justify-between h-10 navbar">
          <Link to="/" className="relative flex items-center z-15">
            <img
              src="/assets/hero/web1.png"
              alt="Logo"
              className="w-auto h-20 transition-transform duration-500 ease-in-out transform max-h-9 hover:scale-125"
            />
          </Link>
        </div>

        {/* Middle - Enquiry Now Button */}
        <div className="flex justify-center flex-1">
  <NavLink
    to="/enquiry"
    className="bg-blue-500 text-white text-sm px-3 py-1.5 rounded-full hover:bg-blue-600 transition duration-300 md:px-4 md:py-2"
    onClick={handleLinkClick}
  >
    Enquiry Now
  </NavLink>
</div>



        {/* Right Side - Links for Desktop */}
        <div className="items-center hidden space-x-6 md:flex">
          <NavLink
            to="/vishwam"
            className="flex items-center transition-transform duration-300 ease-in-out transform nav_items hover:scale-110"
            onClick={handleLinkClick}
          >
            Vishwam
          </NavLink>
          <NavLink
            to="/panchjanya"
            className="flex items-center transition-transform duration-300 ease-in-out transform nav_items hover:scale-110"
            onClick={handleLinkClick}
          >
            Panchjanya
          </NavLink>
          <NavLink
            to="/komodki"
            className="flex items-center transition-transform duration-300 ease-in-out transform nav_items hover:scale-110"
            onClick={handleLinkClick}
          >
            Komodki
          </NavLink>
          <NavLink
            to="/nandak"
            className="flex items-center transition-transform duration-300 ease-in-out transform nav_items hover:scale-110"
            onClick={handleLinkClick}
          >
            Nandak
          </NavLink>
          <NavLink
            to="/sudharsan"
            className="flex items-center transition-transform duration-300 ease-in-out transform nav_items hover:scale-110"
            onClick={handleLinkClick}
          >
            Sudarshan
          </NavLink>
          <NavLink
            to="/sarang"
            className="flex items-center transition-transform duration-300 ease-in-out transform nav_items hover:scale-110"
            onClick={handleLinkClick}
          >
            Sarang
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
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
        <div className="z-20 px-4 py-2 mt-2 text-white transition-all duration-300 ease-in-out bg-gray-900 md:hidden">
          <NavLink
            to="/vishwam"
            className="flex items-center py-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={handleLinkClick}
          >
            Vishwam
          </NavLink>
          <NavLink
            to="/panchjanya"
            className="flex items-center py-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={handleLinkClick}
          >
            Panchjanya
          </NavLink>
          <NavLink
            to="/nandak"
            className="flex items-center py-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={handleLinkClick}
          >
            Nandak
          </NavLink>
          <NavLink
            to="/komodki"
            className="flex items-center py-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={handleLinkClick}
          >
            Komodki
          </NavLink>
          <NavLink
            to="/sudharsan"
            className="flex items-center py-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={handleLinkClick}
          >
            Sudharshan
          </NavLink>
          <NavLink
            to="/sarang"
            className="flex items-center py-2 transition-transform duration-300 ease-in-out transform hover:scale-110"
            onClick={handleLinkClick}
          >
            Sarang
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
