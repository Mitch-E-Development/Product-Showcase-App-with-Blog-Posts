import React from "react";
import PostCard from "../posts/PostCard";

const LatestPosts = ({ posts }) => {
  // Check if posts exist before rendering
  if (!posts) {
    return null; // or handle the case where posts is undefined
  }
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 pt-40">
      <h2 className="text-4xl mb-4">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post}/>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
