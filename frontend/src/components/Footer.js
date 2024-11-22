import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Family Video Sharing. All rights reserved.
        </p>
        <p className="text-sm">
          Made with ❤️ for family connections.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
