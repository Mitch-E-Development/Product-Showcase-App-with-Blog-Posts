import React from "react";
import { Link } from "react-router-dom";

const PostBanner = ({ post }) => {
  // Check if post and post.content exist before rendering
  if (!post || !post.content) {
    return null; // or handle the case where post or post.content is undefined
  }

  // Style object for the background image
  const bannerStyle = {
    backgroundImage: `url(${post.featureImage})`,
    height: "500px", // Adjust height as needed
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  return (
    <div>
      <div className="relative bg-orange-300 text-white text-center" style={bannerStyle}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-10">
          {/* Title */}
          <h2 className="text-5xl relative z-10">{post.title}</h2>
          {/* Subtitle */}
          <h4 className="text-2xl relative z-10">{post.subtitle}</h4>

          {/* Meta */}
          <div className="text-center md:flex md:justify-evenly px-20 gap-x-10 text-xl relative z-10">
            <p className="p-2">{post.category}</p>
            <p className="p-2">{post.author}</p>
            <p className="p-2">
              {new Date(post.createdAt).toLocaleDateString(0)}
            </p>
          </div>
        </div>

        {/* Back button */}
        <div className="absolute top-0 left-0 z-10 px-4 py-6">
          <Link
            to={`/posts`}
            className="
              bg-orange-500  
              text-white
              px-4 
              py-2 
              rounded-lg 
              shadow-lg 
              hover:bg-orange-300 
              hover:text-orange-500 
              transition 
              duration-300"
          >
            BACK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
