import axios from "axios";

export const getPosts = async (filterBy, sortBy) => {
  try {
    // Construct query parameters based on filter and sort options
    let queryParams = '';
    if (filterBy) {
      queryParams += `?filterBy=${filterBy}`;
    }
    if (sortBy) {
      queryParams += `${queryParams ? '&' : '?'}sortBy=${sortBy}`;
    }

    // Fetch posts with optional query parameters
    const response = await axios.get(`http://localhost:5050/api/posts${queryParams}`);
    return response.data;
  } catch (error) {
    console.log("Error getting post data from server");
    throw error;
  }
};

// export const getPosts = async (filterBy, sortBy) => {
//   try {
//     let queryParams = '';
//     if (filterBy) {
//       queryParams += `filterBy=${filterBy}&`;
//     }
//     if (sortBy) {
//       queryParams += `sortBy=${sortBy}`;
//     }

//     const response = await axios.get(`http://localhost:5050/api/posts?${queryParams}`);
//     return response.data;
//   } catch (error) {
//     console.log("Error getting post data from server");
//     throw error;
//   }
// };
