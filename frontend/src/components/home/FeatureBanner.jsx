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
    height: "500px", // Adjust height as needed
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="bg-blue-200 p-10 text-white flex items-center justify-center" style={bannerStyle}>
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-5xl text-center">{featuredProduct.name}</h2>

        <div className="text-xl text-center my-10">
          <p className="lg:px-40">{featuredProduct.description}</p>
        </div>

        <div className="text-center">
          <Link
            to={`/products/${featuredProduct._id}`}
            className="
              bg-orange-500
              text-xl
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
