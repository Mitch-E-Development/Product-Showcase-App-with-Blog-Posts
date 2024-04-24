import React, { useState, useEffect } from "react";
import { getPosts } from "../services/postService";
import Banner from "../components/posts/Banner";
import Filters from "../components/posts/Filters";
import PostsCards from "../components/posts/PostsCards";
import Pagination from "../components/posts/Pagination";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);

   // Calculate current posts to display based on pagination
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);
        const postData = await getPosts();
        setPosts(postData);
        setFilteredPosts(postData); // Initialize filtered posts with all posts
      } catch (error) {
        console.log("Error fetching data:", error);
      } // finally {
      //   setLoading(false);
      // }
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
    handlePagination(1)
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div className="">
      <Banner />
      <Filters handleFilter={handleFilter} handleSearch={handleSearch} />
      <PostsCards posts={currentPosts} />

      {/* PAGINATION */}
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
