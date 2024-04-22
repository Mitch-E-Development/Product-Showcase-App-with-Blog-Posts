import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="h-full flex flex-col">
    <Link to={"/"} className="flex-grow">
      <div className="bg-blue-200 rounded-lg hover:shadow-2xl overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq2GPqup7XzN0o8A9WAs4uGzfCESHbA50wm1WlGv_xw&s"
          alt="[FEATURE IMG]"
          className="w-full h-auto"
        ></img>
        <div className="bg-blue-500 p-4 opacity-[80%] h-[130px] flex flex-col justify-between">
          <h2 className="text-2xl text-white font-semibold mb-2">
            {post.title}
          </h2>
          <div className="flex justify-between">
            <p className="text-md text-white text-left">{post.category}</p>
            <p className="text-md text-white text-right">
              Published:{" "}
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  </div>
  );
};

export default PostCard;
