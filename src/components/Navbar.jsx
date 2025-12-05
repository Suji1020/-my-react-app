import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">MyWebsite</h1>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg">
          <Link 
            to="/home" 
            className="hover:text-yellow-300 transition duration-200"
          >
            Home
          </Link>

          <Link 
            to="/about" 
            className="hover:text-yellow-300 transition duration-200"
          >
            About
          </Link>

          <Link 
            to="/contact" 
            className="hover:text-yellow-300 transition duration-200"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
