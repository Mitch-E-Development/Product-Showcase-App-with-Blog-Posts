import React from "react";

const Features = ({ product }) => {
  // Check if product exist before rendering
  if (!product) {
    return null; // or handle the case where product is undefined
  }
  
  return (
    <div className="">
      {/* FEATURE COMPONENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 py-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-center">
          {product.features &&
            product.features.map((feature) => (
              <div
                key={feature._id}
                className="p-4 rounded-lg bg-blue-200 hover:shadow-2xl"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p>{feature.description}</p>
                <img
                  className="pt-6"
                  src={feature.image}
                  alt="IMAGE GOES HERE"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
