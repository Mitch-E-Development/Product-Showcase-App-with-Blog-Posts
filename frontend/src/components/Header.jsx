import React, { useEffect } from 'react'
import Navbar from './Navbar';

const Header = () => {

  return (
    <div className='p-3 bg-orange-500 md:flex md:justify-between'>
      <h1 className='text-5xl text-white'>Product Showcase</h1>
      <Navbar />
    </div>
  )
}

export default Header;