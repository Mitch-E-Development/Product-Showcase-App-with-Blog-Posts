import axios from "axios";

export const getPosts = async () => {
  try {
    // Fetch posts with optional query parameters
    const response = await axios.get(`http://localhost:5050/api/posts`);
    return response.data;
  } catch (error) {
    console.log("Error getting post data from server");
    throw error;
  }
};

export const searchPosts = async (query) => {
  try {
      const response = await axios.get(`http://localhost:5050/api/search?query=${query}`);
      return response.data;
  } catch (error) {
      console.error("Error searching posts:", error);
      throw error;
  }
};


export const getSinglePost = async (id) => {
  //fetch product data from express server
  try {
    const response = await axios.get(`http://localhost:5050/api/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error getting post data from server");
    throw error;
  }
};

