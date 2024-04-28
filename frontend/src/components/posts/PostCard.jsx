import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  // Style object for the background image
  const bannerStyle = {
    backgroundImage: `url(${post.featureImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative", // Ensure relative positioning for absolute positioning of text overlay
    paddingTop: "75%", // 4:3 aspect ratio (300 / 400 = 0.75)
  };

  return (
    <div className="h-full flex flex-col">
      <Link to={`/posts/${post._id}`} className="flex-grow">
        <div
          className="bg-orange-300 rounded-lg hover:shadow-xl hover:shadow-orange-300 overflow-hidden relative"
          style={bannerStyle} // Apply background image style
        >
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="bg-black bg-opacity-30 p-4">
              <h2 className="text-xl text-white mb-2">
                {post.title}
              </h2>
              <div className="flex justify-between text-sm text-white">
                <p>{post.category}</p>
                <p>{new Date(post.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
