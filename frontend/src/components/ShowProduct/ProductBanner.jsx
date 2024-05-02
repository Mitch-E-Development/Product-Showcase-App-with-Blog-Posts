import React from "react";

const ProductBanner = ({ product }) => {
  // Check if product exist before rendering
  if (!product) {
    return null; // or handle the case where product is undefined
  }

      // Style object for the background image
      const bannerStyle = {
        backgroundImage: `url(${product.featureImage})`,
        height: "500px", // Adjust height as needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };

  return (
    <div className="bg-orange-300 flex text-center items-center text-white" style={bannerStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl">{product.name}</h2>
        <p className="text-xl py-10">Your Premium Group Meditation App</p>
      </div>
    </div>
  );
};

export default ProductBanner;
