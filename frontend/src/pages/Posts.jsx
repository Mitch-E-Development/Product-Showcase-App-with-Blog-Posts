import React, { useState, useEffect } from "react";
import { getPosts } from "../services/postService";
import { filterPosts } from "../services/postService"; // Import the applyFilters function
import Banner from "../components/posts/Banner";
import Filters from "../components/posts/Filters";
import PostsCards from "../components/posts/PostsCards";
import Pagination from "../components/posts/Pagination";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  // Calculate current posts to display based on pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

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
    // Apply filters whenever searchQuery or filter changes
    const filtered = filterPosts(posts, filter, searchQuery);
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset currentPage when filters change
  }, [posts, filter, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilter = (categoryFilter) => {
    setFilter(categoryFilter);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Banner />
      <Filters handleFilter={handleFilter} handleSearch={handleSearch} />
      <PostsCards posts={currentPosts} />
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        length={filteredPosts.length}
        handlePagination={handlePagination}
      />
    </div>
  );
};

export default Posts;
