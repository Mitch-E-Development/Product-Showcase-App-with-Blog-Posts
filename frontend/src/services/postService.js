import axios from "axios";

const api_url = 'http://localhost:5050/api';

export const getPosts = async () => {
  try {
    // Fetch posts with optional query parameters
    const response = await axios.get(`${api_url}/posts`);
    return response.data;
  } catch (error) {
    console.log("Error getting post data from server");
    throw error;
  }
};




export const getSinglePost = async (id) => {
  //fetch product data from express server
  try {
    const response = await axios.get(`${api_url}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error getting post data from server");
    throw error;
  }
};

// filterService.js
export const filterPosts = (posts, categoryFilter, searchQuery) => {
  return posts.filter((post) => {
    const title = post.title.toLowerCase();
    const author = post.author.toLowerCase();
    const category = post.category.toLowerCase();
    const contentSections = post.content.sections
      .map((section) => `${section.heading} ${section.text}`)
      .join(" ")
      .toLowerCase();

    const passesCategoryFilter =
      categoryFilter === "" || category.includes(categoryFilter.toLowerCase());

    const passesSearchQuery =
      searchQuery === "" ||
      title.includes(searchQuery.toLowerCase()) ||
      author.includes(searchQuery.toLowerCase()) ||
      category.includes(searchQuery.toLowerCase()) ||
      contentSections.includes(searchQuery.toLowerCase());

    return passesCategoryFilter && passesSearchQuery;
  });
};


