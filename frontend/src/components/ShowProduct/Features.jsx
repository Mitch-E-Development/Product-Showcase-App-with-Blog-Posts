import React from "react";

const Features = ({ product }) => {

  // Check if product.features exists before mapping over it
  const features = product.features || [];

  return (
    <div className="">
      {/* FEATURE COMPONENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 pt-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Features</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-center">
          {features.map((feature, index) => (
            <div key={index} className="p-4 rounded-lg bg-blue-200 hover:shadow-2xl">
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p>feature description for {feature} feature</p>
            </div>
          ))}
        
        </div>
      </div>
    </div>
  );
};

export default Features;
