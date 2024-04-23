import React from "react";

const ProductBanner = ({product}) => {
  return (
    <div className="bg-blue-200 py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center text-center">
        <h2 className="text-4xl font-semibold pb-4">{product.name}</h2>
        <p className="text-xl">Here Be Thy Slogan.</p>
      </div>
    </div>
  );
};

export default ProductBanner;
