import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isOpen, toggleMenu, handleLinkClick, id, dropdownRef }) => {
  return (
    <div className="px-2 p-1 relative z-50"> {/* Add z-50 here */}
      {/* Hamburger icon */}
      {!isOpen && (
        <button onClick={toggleMenu} className="block text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 20 20" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      )}

      {/* Dropdown menu */}
      {isOpen && (
        <div ref={dropdownRef} className="absolute top-10 right-1 bg-orange-500 rounded-md hover:shadow-2xl p-4 px-10 z-50"> {/* Add z-50 here */}
          <div className="flex flex-col items-start p-4 text-2xl text-white">
            <Link to="/" className="py-4 block hover:text-orange-300" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to={`/products/${id}`} className="py-4 block hover:text-orange-300" onClick={handleLinkClick}>
              Products
            </Link>
            <Link to="/posts" className="py-4 block hover:text-orange-300" onClick={handleLinkClick}>
              Posts
            </Link>
            <Link to="/about" className="py-4 block hover:text-orange-300" onClick={handleLinkClick}>
              About
            </Link>
            <Link to="/contact" className="py-4 block hover:text-orange-300" onClick={handleLinkClick}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
