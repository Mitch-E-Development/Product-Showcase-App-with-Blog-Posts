import axios from "axios";

export const getPosts = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/api/posts`);
      return response.data;
    } catch (error) {
      console.log("Error getting post data from server");
      throw error;
    }
  };
