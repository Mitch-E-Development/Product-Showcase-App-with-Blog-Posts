import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getFeatureProduct } from "../services/productService";

const Navbar = () => {
  const [id, setId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        // this should be changed to accomodate the products
        // gallery page by linking to /products --> products
        // page compenent which links to /products:id
        const productData = await getFeatureProduct();
        setId(productData._id);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    getData();
  }, []);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const handleLinkClick = () => {
      setIsOpen(false);
    };
  
    return (
      <div className='pt-2 px-2 relative'>
        {/* Hamburger icon */}
        {!isOpen && (
          <button onClick={toggleMenu} className='block text-white focus:outline-none'>
            <svg className='h-10 w-10' fill='none' viewBox='0 0 20 20' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        )}
  
        {/* Dropdown menu */}
        {isOpen && (
          <div ref={dropdownRef} className='absolute top-12 right-2 bg-blue-500 rounded-md hover:shadow-2xl p-4 px-10'>
            <div className="flex flex-col items-start p-4 text-2xl text-white">
            <Link
              to="/"
              className="py-4 block hover:text-blue-200"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to={`/products/${id}`}
              className="py-4 block hover:text-blue-200"
              onClick={handleLinkClick}
            >
              Products
            </Link>
            <Link
              to="/posts"
              className="py-4 block hover:text-blue-200"
              onClick={handleLinkClick}
            >
              Posts
            </Link>
            <Link
              to="/about"
              className="py-4 block hover:text-blue-200"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="py-4 block hover:text-blue-200"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
