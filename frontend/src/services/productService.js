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

export const getFeatureProduct = async () => {
  //fetch feaature product data from express server
  try {
    const response = await axios.get(`http://localhost:5050/api/products/66230e93862e1249483e6c43`);
    return response.data;
  } catch (error) {
    console.log("Error getting product data from server");
    throw error;
  }
};

export const getProducts = async () => {
  //fetch product data from express server
  try {
    const response = await axios.get(`http://localhost:5050/api/products`);
    return response.data;
  } catch (error) {
    console.log("Error getting product data from server");
    throw error;
  }
};
