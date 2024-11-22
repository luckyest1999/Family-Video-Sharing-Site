import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Family Video Sharing</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/movies" className="hover:underline">
            Movies
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
       </div>
    </header>
  );
};

export default Header;
