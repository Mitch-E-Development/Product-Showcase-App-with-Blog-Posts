import React, { useState, useEffect } from "react";
import { getPosts } from "../services/postService";
import Banner from "../components/posts/Banner";
import Filters from "../components/posts/Filters";
import PostsCards from "../components/posts/PostsCards";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await getPosts();
        setPosts(postData);
        setFilteredPosts(postData); // Initialize filtered posts with all posts
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query); // Update searchQuery state
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.author.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered); // Update filteredPosts state
  };

  const handleFilter = (filter) => {
    setFilter(filter);
    const filtered = posts.filter((post) =>
      post.category.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="">
      <Banner />
      <Filters handleFilter={handleFilter} handleSearch={handleSearch} />
      <PostsCards posts={filteredPosts} />
    </div>
  );
};

export default Posts;
