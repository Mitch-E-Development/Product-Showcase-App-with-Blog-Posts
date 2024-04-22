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

  useEffect(() => {
    // Apply filter and search query
    let filtered = posts;

    // Check if the clear button was clicked
    if (!filter && !searchQuery) {
      filtered = filtered.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filter === "GUIDES") {
      filtered = filtered.filter((post) => post.category === "Guides");
    } else if (filter === "NEWS") {
      filtered = filtered.filter((post) => post.category === "News");
    } else if (filter === "NEWEST") {
      filtered = filtered.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    } else if (filter === "OLDEST") {
      filtered = filtered.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    setFilteredPosts(filtered);
  }, [filter, searchQuery, posts]);

  return (
    <div className="">
      <Banner />
      <Filters
        filter={filter}
        setFilter={setFilter}
        setSearchQuery={setSearchQuery}
      />
      <PostsCards posts={filteredPosts} />
    </div>
  );
};

export default Posts;
