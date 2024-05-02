// import React from 'react'
// import Navbar from './Navbar';

// const Header = () => {

//   return (
//     <div className='px-2 p-1 bg-orange-500 flex justify-between'>
//       <h1 className='text-2xl text-white'>Product Showcase</h1>
//       <Navbar />
//     </div>
//   )
// }

// export default Header;
import React, { useState, useEffect, useRef } from 'react';
import { getFeatureProduct } from '../services/productService';
import Navbar from '../components/Navbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');
  const dropdownRef = useRef(null); // Define dropdownRef here

  useEffect(() => {
    const getData = async () => {
      try {
        const productData = await getFeatureProduct();
        setId(productData._id);
      } catch (error) {
        console.log('Error fetching data:', error);
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
    <div className="px-2 p-1 bg-orange-500 flex justify-between">
      <h1 className="text-2xl text-white">I-Meditate</h1>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} handleClickOutside={handleClickOutside} handleLinkClick={handleLinkClick} id={id} dropdownRef={dropdownRef} />
    </div>
  );
};

export default Header;