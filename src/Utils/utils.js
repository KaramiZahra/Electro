import axios from "axios";
const baseURL = "https://kaaryar-ecom.liara.run";
// endpoints: /v1/products - /v1/products/{id} - /v1/products/top-rated

export const fetchProducts = async () => {
  try {
    const res = await axios.get(`${baseURL}/v1/products`);
    return res.data.products;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};

export const fetchTopSellings = async () => {
  try {
    const res = await axios.get(`${baseURL}/v1/products/top-rated`);
    return res.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};
