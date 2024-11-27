import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide animate-pulse">
          Family Video Sharing
        </h1>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:space-x-6">
          <a
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition duration-200"
          >
            Home
          </a>
          <a
            href="/movies"
            className="text-lg font-medium hover:text-gray-300 transition duration-200"
          >
            Movies
          </a>
          <a
            href="#contact"
            className="text-lg font-medium hover:text-gray-300 transition duration-200"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-y-0 right-0 z-40 bg-white text-gray-800 w-4/5 sm:w-2/5 rounded-l-lg shadow-xl transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b shadow-md">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            onClick={toggleMenu}
            aria-label="Close Menu"
            className="text-gray-800 focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col mt-6">
          <a
            href="/"
            className="px-6 py-4 text-lg font-medium hover:bg-blue-100 border-b last:border-none transition duration-200"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="/movies"
            className="px-6 py-4 text-lg font-medium hover:bg-blue-100 border-b last:border-none transition duration-200"
            onClick={toggleMenu}
          >
            Movies
          </a>
          <a
            href="#contact"
            className="px-6 py-4 text-lg font-medium hover:bg-blue-100 border-b last:border-none transition duration-200"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Overlay for Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
