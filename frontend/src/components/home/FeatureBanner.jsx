import React from "react";
import { Link } from "react-router-dom";

const FeatureBanner = ({ featuredProduct }) => {
  return (
    <div className="bg-blue-200 p-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 ">
        
        <h2 className="text-6xl font-semibold text-center mb-6">
          {featuredProduct.name}
        </h2>

        <div className="flex justify-center text-center mb-14">
          <ul className="justify-center text-center md:flex md:flex-wrap">
            {/* Check if features exist before mapping */}
            {featuredProduct.features &&
              featuredProduct.features.map((feature, index) => (
                <li key={index} className="font-semibold text-lg mx-14">
                  {feature}
                </li>
              ))}
          </ul>
        </div>
        
        <div className="flex justify-center text-lg text-center mb-16">
          <p className="">{featuredProduct.description}</p>
        </div>

        <div className="justify-center text-center">
          <Link
            to={`/products/${featuredProduct._id}`}
            className="
              bg-white 
              text-2xl
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
            TRY NOW
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FeatureBanner;
