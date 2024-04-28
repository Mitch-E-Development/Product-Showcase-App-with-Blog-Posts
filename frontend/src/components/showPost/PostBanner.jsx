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
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div className="bg-blue-200 text-white" style={bannerStyle}>
        <div className="p-4 py-6">
          <Link
            to={`/posts`}
            className="
              bg-blue-500  
              text-white
              px-4 
              py-2 
              rounded-lg 
              shadow-lg 
              hover:bg-blue-500 
              hover:text-white 
              transition 
              duration-300"
          >
            BACK
          </Link>
        </div>
        <div className="text-center space-y-3 p-20">
          <h2 className="text-5xl">{post.title}</h2>
          <h4 className="text-2xl">{post.subtitle}</h4>
        </div>
        <div className="text-center md:flex md:justify-evenly px-20 py-10 text-xl font-semibold">
          <p className="p-2">{post.category}</p>
          <p className="p-2">{post.author}</p>
          <p className="p-2">
            {new Date(post.createdAt).toLocaleDateString(0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
