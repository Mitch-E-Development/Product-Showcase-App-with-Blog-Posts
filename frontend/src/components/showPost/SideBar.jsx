import React from "react";

const SideBar = ({ post }) => {
  // Check if post and post.content exist before rendering
  if (!post || !post.content) {
    return null; // or handle the case where post or post.content is undefined
  }

  return (
    <div
      className="
        lg:col-span-3 
        border-b 
        border-gray-400 
        xl:border-r 
        xl:border-gray-400 
        py-10
        "
    >
      {/* Table of Contents Goes Here */}
      <div className="text-lg pr-10">
        <h2 className="text-2xl text-center">Table of Contents</h2>
        <div className="my-6">
          <h2 className="">
            1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#intro" className="text-orange-500 hover:text-orange-300">{post.content.intro.heading}</a>
          </h2>
        </div>
        {post.content.sections.map((section, index) => (
          <div key={index} className="my-6">
            <h2 className="">
              {index + 2}.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href={`#section-${index}`} className="text-orange-500 hover:text-orange-300">{section.heading}</a>
            </h2>
          </div>
        ))}
        <div className="my-6">
          <h2 className="">
            {post.content.sections.length + 2}.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#conclusion" className="text-orange-500 hover:text-orange-300">{post.content.conclusion.heading}</a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
