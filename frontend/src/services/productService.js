import axios from "axios";

const api_url = 'http://localhost:5050/api';

export const getSingleProduct = async (id) => {
  //fetch product data from express server
  try {
    const response = await axios.get(`${api_url}/products/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error getting product data from server");
    throw error;
  }
};

export const getFeatureProduct = async () => {
  //fetch feaature product data from express server
  try {
    const response = await axios.get(`${api_url}/featured`);
    return response.data;
  } catch (error) {
    console.log("Error getting feature product data from server");
    throw error;
  }
};

export const getProducts = async () => {
  //fetch product data from express server
  try {
    const response = await axios.get(`${api_url}/products`);
    return response.data;
  } catch (error) {
    console.log("Error getting product data from server");
    throw error;
  }
};
