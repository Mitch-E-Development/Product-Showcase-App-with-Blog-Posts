import React from "react";

const Summary = ({ product }) => {
  // Check if product exist before rendering
  if (!product) {
    return null; // or handle the case where product is undefined
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 pt-40 py-20">
      <div className="justify-center text-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 text-center gap-x-20">
          <div className="w-full p-5">
            <h2 className="text-3xl mb-6">
              A Global Meditation Group
            </h2>
            <p className="text-xl">{product.description}</p>
          </div>

          <div className="bg-white border-4 border-orange-500 w-full justify-center content-center p-10 rounded-lg hover:shadow-xl hover:shadow-orange-300">
            <button
              className="
              bg-orange-500
              text-white
              px-4 
              py-2 
              rounded-lg 
              shadow-lg 
              hover:bg-orange-300
              hover:text-orange-500 
              transition 
              duration-300
              text-lg
              "
            >
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
