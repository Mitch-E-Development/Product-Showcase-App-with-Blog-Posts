import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSinglePost } from "../services/postService";

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
          <h4 className="text-xl text-gray-600">Here is thy subtitle</h4>
        </div>
        <div className="flex justify-around p-20">
          <p>{post.category}</p>
          <p>{post.author}</p>
          <p>{new Date(post.createdAt).toLocaleDateString(0)}</p>
        </div>
      </div>

      {/* body */}
      <div className="py-20 px-10 lg:px-20 xl:px-40">
        <div className="grid xl:grid-cols-10 gap-4">
          {/* SIDEBAR COMPONENT - TOC */}
          
          <div className="lg:col-span-3 xl:border-r xl:border-black mr-16">
            <div className="text-xl">
              1. Introduction
              <br />
              2. Section 1
              <br />
              3. Section 2
              <br />
              4. Section 3
              <br />
              5. Section 4
              <br />
              6. Section 5
              <br />
              7. Conclusion
              <br />
            </div>
          </div>

          {/* CONTENT COMPONENT - POST CONTENT, MEDIA */}
          <div className="lg:col-span-7">
            {post.content}
            <h2 className="text-2xl">Introduction</h2>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq2GPqup7XzN0o8A9WAs4uGzfCESHbA50wm1WlGv_xw&s"
              alt=""
            />
            <br />
            <h2 className="text-2xl">Section 1</h2>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq2GPqup7XzN0o8A9WAs4uGzfCESHbA50wm1WlGv_xw&s"
              alt=""
            />
            <br />
            <h2 className="text-2xl">Section 2</h2>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq2GPqup7XzN0o8A9WAs4uGzfCESHbA50wm1WlGv_xw&s"
              alt=""
            />
            <br />
            <h2 className="text-2xl">Section 3</h2>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq2GPqup7XzN0o8A9WAs4uGzfCESHbA50wm1WlGv_xw&s"
              alt=""
            />
            <br />
            <h2 className="text-2xl">Section 4</h2>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq2GPqup7XzN0o8A9WAs4uGzfCESHbA50wm1WlGv_xw&s"
              alt=""
            />
            <br />
            <h2 className="text-2xl">Section 5</h2>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHq2GPqup7XzN0o8A9WAs4uGzfCESHbA50wm1WlGv_xw&s"
              alt=""
            />
            <br />
            <h2 className="text-2xl">Conclusion</h2>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
