import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSinglePost } from "../services/postService";
import SideBar from "../components/showPost/SideBar";
import PostContent from "../components/showPost/PostContent";

const ShowPost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getSinglePost(id);
        setPost(postData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      {/* BANNER COMPONENT -  POST F.IMAGE, TITLE, SUBTITLE */}
      <div className="bg-blue-200">
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
          <h2 className="text-4xl">{post.title}</h2>
          <h4 className="text-2xl text-gray-600">Here is thy subtitle</h4>
        </div>
        <div className="text-center md:flex md:justify-evenly px-20 py-10 text-xl">
          <p className="p-2">{post.category}</p>
          <p className="p-2">{post.author}</p>
          <p className="p-2">{new Date(post.createdAt).toLocaleDateString(0)}</p>
        </div>
      </div>

      {/* body */}
      <div className="py-20 px-10 lg:px-20 xl:px-40">
        <div className="grid xl:grid-cols-10 gap-4">
          <SideBar post={post} />
          <PostContent post={post} />
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
