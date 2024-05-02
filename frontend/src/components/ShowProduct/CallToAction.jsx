import React from "react";

const CallToAction = ({product}) => {
  // Check if product exist before rendering
  if (!product) {
    return null; // or handle the case where product is undefined
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 py-20 ">
        <div className="justify-center text-center bg-white border-4 border-orange-500 rounded-lg hover:shadow-lg hover:shadow-orange-300">
          <div className="text-center justify-center p-5">
            <div className=" px-10 lg:px-20 text-center">
              <h2 className="text-3xl py-6">
                So What Are You Waiting For?
              </h2>
              <p className="p-2 text-xl">
                {product.callToAction}
              </p>
            </div>
            <button
              className="
              bg-orange-500
              text-white
              px-4 
              py-2 
              w-[50%]
              lg:w-[25%]
              text-lg
              rounded-lg 
              shadow-lg 
              hover:bg-orange-300
              hover:text-orange-500 
              transition 
              duration-300
              m-6"
            >
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
