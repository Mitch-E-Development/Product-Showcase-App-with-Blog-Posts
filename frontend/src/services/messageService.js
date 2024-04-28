import axios from 'axios';

const api_url = 'http://localhost:5050/api';

export const submitForm = async (name, email, subject, message) => {
  try {
    const response = await axios.post(`${api_url}/contact`, {
      name,
      email,
      subject,
      message
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};