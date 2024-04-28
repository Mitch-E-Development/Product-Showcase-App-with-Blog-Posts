import React from "react";

const ProductBanner = ({ product }) => {
  // Check if product exist before rendering
  if (!product) {
    return null; // or handle the case where product is undefined
  }

  return (
    <div className="bg-blue-200 py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center text-center">
        <h2 className="text-4xl font-semibold pb-4">{product.name}</h2>
        <p className="text-xl">Your Premium Group Meditation App</p>
      </div>
    </div>
  );
};

export default ProductBanner;
