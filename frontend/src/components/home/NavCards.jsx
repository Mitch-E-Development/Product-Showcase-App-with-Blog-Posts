import React from 'react'

const NavCards = () => {
  
  return (
    <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-20 pb-40">
      <h2 className="text-4xl mb-4">Explore</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 text-center">
        
        <div className="p-4 rounded-lg border-4 border-orange-500 hover:shadow-xl hover:shadow-orange-300">
          <h2 className='text-xl font-semibold mb-2'>See Products</h2>
          <p className='my-6'>Download and experience our latest products</p>
          <button className="
            bg-orange-500 
            text-white 
            px-4 
            py-2 
            rounded-lg 
            shadow-lg 
            text-xl
            hover:bg-orange-300 
            hover:text-orange-500 
            transition 
            duration-300"
          >
            READ MORE
          </button>
        </div>

        <div className="p-4 rounded-lg border-4 border-orange-500 hover:shadow-xl hover:shadow-orange-300">
          <h2 className='text-xl font-semibold mb-2'>Checkout Our Blog</h2>
          <p className='my-6'>Read the latest articles and news.</p>
          <button className="
            bg-orange-500 
            text-white 
            px-4 
            py-2 
            rounded-lg 
            shadow-lg 
            text-xl
            hover:bg-orange-300 
            hover:text-orange-500 
            transition 
            duration-300"
          >
            SEE BLOG
          </button>
        </div>

        <div className="p-4 rounded-lg border-4 border-orange-500 hover:shadow-xl hover:shadow-orange-300"> 
          <h2 className='text-xl font-semibold mb-2'>Want to Know More?</h2>
          <p className='my-6'>Learn more about our company and mission.</p>
          <button className="
            bg-orange-500 
            text-white 
            px-4 
            py-2 
            rounded-lg 
            shadow-lg 
            text-xl
            hover:bg-orange-300 
            hover:text-orange-500 
            transition 
            duration-300"
          >
            LEARN MORE
          </button>
        </div>

        <div className="p-4 rounded-lg border-4 border-orange-500 hover:shadow-xl hover:shadow-orange-300">
          <h2 className='text-xl font-semibold mb-2'>Reach Out to Us</h2>
          <p className='my-6'>Don't hesitate to ask questions or give feedback.</p>
          <button className="
            bg-orange-500 
            text-white 
            px-4 
            py-2 
            rounded-lg 
            shadow-lg 
            text-xl
            hover:bg-orange-300 
            hover:text-orange-500 
            transition 
            duration-300"
          >
            CONTACT US
          </button>
        </div>

      </div>
    </div>
  )
}

export default NavCards;