import React, { useState } from "react";
import PostCard from "./PostCard";

const PostsCards = ({ posts }) => {

  return (
    <div>
      <div className="py-12 px-10 md:px-20 lg:px-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsCards;