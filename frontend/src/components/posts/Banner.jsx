import React from "react";

const Banner = () => {
  // Style object for the background image
  const bannerStyle = {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2017/01/07/16/01/feng-shui-1960783_960_720.jpg)`,
    height: "500px", // Adjust height as needed
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      {/* BANNER COMPONENT */}
      <div className="bg-orange-300 flex text-center items-center text-white" style={bannerStyle}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl">Learn and stay up to date</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
