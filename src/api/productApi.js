// api/product.js
import axios from "axios";

export const addStock = async (stockData) => {
  const response = await axios.post("/api/stock/in", stockData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const removeStock = async (stockData) => {
  const response = await axios.post("/api/stock/out", stockData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
