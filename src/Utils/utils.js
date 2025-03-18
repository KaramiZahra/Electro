import axios from "axios"; // To make HTTP requests
const baseURL = "https://kaaryar-ecom.liara.run"; // Base URL for the API

// Fetch products - with pagination
export const fetchProducts = async (page, limit = 6) => {
  try {
    // Send GET request to the API with pagination parameters
    const res = await axios.get(`${baseURL}/v1/products`, {
      params: { page, limit },
    });
    // Return the response data - products and pagination info
    return res.data;
  } catch (err) {
    // Log and throw error in case of failure
    console.error("Error fetching data:", err);
    throw err;
  }
};
