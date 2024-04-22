import React from "react";

const LatestPosts = ({ posts }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div className="p-4 border-2 border-blue-300 rounded-lg text-center hover:shadow-2xl" key={post._id}>
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            {/* <p className="py-4">{post.content}</p> */}
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-200 hover:text-blue-500 transition duration-300">READ MORE</button>
            {/* <p className="text-gray-500 mt-2">
              Published On: {new Date(post.createdAt).toLocaleDateString()}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
