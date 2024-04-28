import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePost } from "../services/postService";
import SideBar from "../components/showPost/SideBar";
import PostContent from "../components/showPost/PostContent";
import PostBanner from "../components/showPost/PostBanner";

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
      <PostBanner post={post}/>

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
