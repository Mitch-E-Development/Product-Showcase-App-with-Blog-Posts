import React from "react";

const Features = ({ product, hoveredFeature, setHoveredFeature }) => {
  // Check if product exists before rendering
  if (!product) {
    return null; // or handle the case where product is undefined
  }

  return (
    <div className="">
      {/* FEATURE COMPONENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 py-20">
        <h2 className="text-3xl mb-4 text-center">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {product.features &&
            product.features.map((feature) => (
              <div
                key={feature._id}
                className="relative rounded-lg bg-orange-300 hover:shadow-xl hover:shadow-orange-300 flex flex-col justify-center h-[250px]"
                style={{
                  backgroundImage: `url(${feature.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                onMouseEnter={() => setHoveredFeature(feature)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="bg-black bg-opacity-30 p-6 rounded-lg text-white h-full flex flex-col justify-center items-center">
                  {hoveredFeature === feature ? (
                    <p className="text-xl mb-2">
                      {feature.description}
                    </p>
                  ) : (
                    <h3 className="text-2xl mb-2 font-semibold">{feature.name}</h3>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
