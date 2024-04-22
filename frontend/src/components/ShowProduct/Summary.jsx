import React from 'react'

const Summary = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 pt-20'>
      {/* PRODUCT SUMMARY COMPONENT */}
      <div className="justify-center text-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 text-center gap-x-20">
          
          <div className="w-full p-5">
            <h2 className="text-3xl font-semibold mb-6">The Best Product</h2>
            <p>
              Utilities for controlling how rows are positioned in multi-row positioned in multi-row flex and grid containers.
              Utilities for controlling how rows are positioned in multi-row flex and grid containers.
            </p>
            <br />
            <p>
              Utilities for controlling how rows are positioned in 
              multi-row flex and grid containers.
            </p>
          </div> 

          <div className="bg-blue-200 w-full justify-center content-center p-10 rounded-lg hover:shadow-2xl">
            <button className="
              bg-blue-500
              text-white
              px-4 
              py-2 
              rounded-lg 
              shadow-lg 
              hover:bg-white
              hover:text-blue-500 
              transition 
              duration-300"
            >
              DOWNLOAD
            </button>
          </div> 

        </div>
      </div>
    </div>
  )
}

export default Summary
