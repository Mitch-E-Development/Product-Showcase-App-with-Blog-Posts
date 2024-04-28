import React from "react";
import { Link } from "react-router-dom";

const FeatureBanner = ({ featuredProduct }) => {
  // Check if product exist before rendering
  if (!featuredProduct) {
    return null; // or handle the case where product is undefined
  }

    // Style object for the background image
    const bannerStyle = {
      backgroundImage: `url(${featuredProduct.featureImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
  
  return (
    <div className="bg-blue-200 p-20 text-white" style={bannerStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 ">
        <h2 className="text-6xl text-center">
          {featuredProduct.name}
        </h2>

        <div className="flex justify-center text-lg text-center my-20">
          <p className="text-2xl">{featuredProduct.description}</p>
        </div>

        <div className="justify-center text-center">
          <Link
            to={`/products/${featuredProduct._id}`}
            className="
              bg-orange-500
              text-3xl
              text-white 
              px-4 
              py-2
              rounded-lg 
              shadow-lg 
              hover:bg-orange-300 
              hover:text-orange-500 
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
