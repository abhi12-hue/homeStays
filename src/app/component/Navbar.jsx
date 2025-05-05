"use client";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="flex justify-between items-center text-black
      px-6 py-4 md:px-12 md:py-6 z-10 relative bg-white shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold text-amber-600">Somnath HomeStay</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="/explore" className="hover:text-amber-600">
            Explore
          </a>
          <a href="/rooms" className="hover:text-amber-600">
            Rooms
          </a>
          <a href="/about" className="hover:text-amber-600">
            About
          </a>
        </nav>

        {/* Book Now Button */}
        <div className="hidden md:flex gap-4 text-sm">
          <a
            href="#"
            className="text-white bg-amber-600 px-4 py-1.5 rounded-md hover:bg-amber-500"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-amber-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
          <a
            href="/explore"
            className="block text-sm font-medium text-gray-700 hover:text-amber-600"
          >
            Explore
          </a>
          <a
            href="/rooms"
            className="block text-sm font-medium text-gray-700 hover:text-amber-600"
          >
            Rooms
          </a>
          <a
            href="/about"
            className="block text-sm font-medium text-gray-700 hover:text-amber-600"
          >
            About
          </a>
          <a
            href="#"
            className="block mt-4 text-center text-white bg-amber-600 px-4 py-2 rounded-md hover:bg-amber-500"
          >
            Book Now
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
