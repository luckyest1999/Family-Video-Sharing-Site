import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Family Video Sharing. All Rights Reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="https://facebook.com" className="hover:underline">
            Facebook
          </a>
          <a href="https://twitter.com" className="hover:underline">
            Twitter
          </a>
          <a href="https://instagram.com" className="hover:underline">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
