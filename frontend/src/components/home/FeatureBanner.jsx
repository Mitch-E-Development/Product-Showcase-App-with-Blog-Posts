import React from "react";

const FeatureBanner = ({ featuredProduct }) => {
  return (
    <div className="bg-blue-200 p-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 ">
        
        <h2 className="text-4xl font-semibold text-center mb-6">
          {featuredProduct.name}
        </h2>

        <div className="flex justify-center text-center mb-16">
          <ul className="justify-center text-center md:flex  md:flex-wrap">
            {/* Check if features exist before mapping */}
            {featuredProduct.features &&
              featuredProduct.features.map((feature, index) => (
                <li key={index} className="font-semibold mx-16 py-2">
                  {feature}
                </li>
              ))}
          </ul>
        </div>
        
        <div className="flex justify-center text-center mb-10">
          <p className="">{featuredProduct.description}</p>
        </div>

        <div className="justify-center text-center">
          <p className="mb-10 text-xl">Try it today!</p>
          <button
            className="
              bg-white 
              text-blue-500 
              px-4 
              py-2 
              rounded-lg 
              shadow-lg 
              hover:bg-blue-500 
              hover:text-white 
              transition 
              duration-300"
          >
            DOWNLOAD
          </button>
        </div>

      </div>
    </div>
  );
};

export default FeatureBanner;
