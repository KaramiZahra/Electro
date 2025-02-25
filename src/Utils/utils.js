import axios from "axios";
const baseURL = "https://kaaryar-ecom.liara.run";

export const fetchProducts = async (page, limit = 6) => {
  try {
    const res = await axios.get(`${baseURL}/v1/products`, {
      params: { page, limit },
    });
    return res.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};
