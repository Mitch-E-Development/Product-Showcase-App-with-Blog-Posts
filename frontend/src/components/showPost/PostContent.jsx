import React from "react";

const PostContent = ({ post }) => {
  // Check if post and post.content exist before rendering
  if (!post || !post.content) {
    return null; // or handle the case where post or post.content is undefined
  }

  return (
    <div className="lg:col-span-7 py-10 xl:pl-20">
      {/* Introduction */}
      <div id="intro" className="pb-2">
        <h2 className="text-2xl py-2">{post.content.intro.heading}</h2>
        <p>{post.content.intro.text}</p>
      </div>

      {/* Sections */}
      {post.content.sections.map((section, index) => (
        <div key={index} className="my-6" id={`section-${index}`}>
          <h2 className="text-2xl py-2">{section.heading}</h2>
          <p>{section.text}</p>
          {section.image && <img src={section.image} alt="" className="my-2" />}
        </div>
      ))}

      {/* Conclusion */}
      <div id="conclusion">
        <h2 className="text-2xl py-2">{post.content.conclusion.heading}</h2>
        <p>{post.content.conclusion.text}</p>
      </div>
    </div>
  );
};

export default PostContent;
