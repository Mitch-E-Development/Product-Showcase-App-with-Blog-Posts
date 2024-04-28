import React from "react";

const Reasons = ({ product }) => {
  // Check if product and product.benefits exist before rendering
  if (!product || !product.benefits) {
    return null; // or handle the case where product or product.benefits is undefined
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-20">
        <div className="text-center justify-center content-center [md:w-1/3] mb-5">
          <h2 className="text-3xl font-semibold mb-6">Reasons to Try</h2>
          <p className="text-2xl">
            Wondering what I-Meditate can do for you? Heres 4 benefits of
            incorporating it in your daily routine.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-center">
          {product.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-blue-200 w-full justify-center content-center p-10 rounded-lg hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold">{benefit.name}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reasons;
