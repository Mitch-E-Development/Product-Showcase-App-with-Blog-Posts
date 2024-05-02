import React from "react";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(https://cdn.pixabay.com/photo/2017/02/05/15/04/stones-2040340_960_720.jpg)`,
    height: "500px", // Adjust height as needed
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="bg-orange-300 flex text-center items-center text-white"
      style={bannerStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl">I-Meditate as a Company</h2>
      </div>
    </div>
  );
};

export default Banner;
