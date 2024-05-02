import React from "react";
import { Link } from "react-router-dom";

const NavCards = ({ products }) => {
  return (
    <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-20 pb-40">
      <h2 className="text-4xl mb-4">Explore</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 text-center text-white">
        <div
          className="p-8 rounded-lg border-4 border-orange-500 hover:shadow-xl hover:shadow-orange-300 relative"
          style={{
            backgroundImage: `url('${products.featureImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
          <h2 className="text-2xl font-semibold relative z-10">See Products</h2>
          <p className="py-8 relative z-10 text-lg">
            Download and experience our latest products
          </p>
          <Link
            to={`/products/${products._id}`}
            className="
            bg-orange-500 
            text-white 
            px-4 
            py-2 
            rounded-lg 
            shadow-lg 
            text-xl
            hover:bg-orange-300 
            hover:text-orange-500 
            transition 
            duration-300
            relative
            z-10"
          >
            READ MORE
          </Link>
        </div>

        <div
          className="p-8 rounded-lg border-4 border-orange-500 hover:shadow-xl hover:shadow-orange-300 relative"
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2017/01/07/16/01/feng-shui-1960783_960_720.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
          <h2 className="text-2xl font-semibold relative z-10">
            Checkout Our Blog
          </h2>
          <p className="py-8 relative z-10 text-lg">
            Read the latest articles and I-Meditate news.
          </p>
          <Link
            to={`/posts`}
            className="
            bg-orange-500 
            text-white 
            px-4 
            py-2 
            rounded-lg 
            shadow-lg 
            text-xl
            hover:bg-orange-300 
            hover:text-orange-500 
            transition 
            duration-300
            relative
            z-10"
          >
            READ MORE
          </Link>
        </div>

        <div
          className="p-8 rounded-lg border-4 border-orange-500 hover:shadow-xl hover:shadow-orange-300 relative"
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2017/02/05/15/04/stones-2040340_960_720.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
          <h2 className="text-2xl font-semibold relative z-10">
            About I-Meditate
          </h2>
          <p className="py-8 relative z-10 text-lg">
            Learn more about our company and mission.
          </p>
          <Link
            to={`/about`}
            className="
            bg-orange-500 
            text-white 
            px-4 
            py-2 
            rounded-lg 
            shadow-lg 
            text-xl
            hover:bg-orange-300 
            hover:text-orange-500 
            transition 
            duration-300
            relative
            z-10"
          >
            READ MORE
          </Link>
        </div>

        <div
          className="p-8 rounded-lg border-4 border-orange-500 hover:shadow-xl hover:shadow-orange-300 relative"
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2022/09/19/14/46/monk-7465757_960_720.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
          <h2 className="text-2xl font-semibold relative z-10">
            Reach Out to Us
          </h2>
          <p className="py-8 relative z-10 text-lg">
            Don't hesitate to ask questions or give feedback.
          </p>
          <Link
            to={`/products/${products._id}`}
            className="
            bg-orange-500 
            text-white 
            px-4 
            py-2 
            rounded-lg 
            shadow-lg 
            text-xl
            hover:bg-orange-300 
            hover:text-orange-500 
            transition 
            duration-300
            relative
            z-10"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavCards;
