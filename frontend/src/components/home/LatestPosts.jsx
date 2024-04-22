import React from "react";
import PostCard from "../posts/PostCard";

const LatestPosts = ({ posts }) => {

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 py-10">
      <h2 className="text-3xl font-bold mb-4">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard post={post}/>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
