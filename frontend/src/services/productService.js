import axios from "axios";

export const getSingleProduct = async (id) => {
  //fetch product data from express server
  try {
    const response = await axios.get(`http://localhost:5050/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error getting product data from server");
    throw error;
  }
};
